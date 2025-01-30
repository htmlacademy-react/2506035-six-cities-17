import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiConfigType } from './const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => Boolean(StatusCodeMapping[response.status]);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiConfigType.Url,
    timeout: ApiConfigType.Timeout,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const errorMessage = error.response.data;
        toast.warn(errorMessage.message);
      }

      throw error;
    }
  );

  return api;
};
