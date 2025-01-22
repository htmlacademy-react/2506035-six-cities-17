import axios, {AxiosInstance} from 'axios';
import { API_URL, API_TIMEOUT } from './const';

export const createApi = (): AxiosInstance => axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
});
