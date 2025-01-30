import { ChangeEvent, FormEvent, useState } from 'react';
import { ReviewValidation } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addOfferCommentAction } from '../../api/actions';
import { useParams } from 'react-router-dom';
import { ApiError } from '../../api/const';
import './add-comment-form-style.css';
import { CommentPayloadType } from '../../api/types';
import { Rating } from '../../shared/rating/rating';
import { AxiosError } from 'axios';
import { FormDataType } from './types';
import { isReviewFormValid } from './validators';

const initialState: FormDataType = {
  rating: 0,
  review: '',
};

type Props = {
  onAddComment: () => void;
}

function AddCommentForm({ onAddComment }: Props) {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormDataType>(initialState);

  const dispatch = useAppDispatch();

  const { id: offerId } = useParams();

  if (!offerId) {
    return null;
  }

  const isValid = isReviewFormValid(formData);

  const handleChangeRating = (value: number) => {
    setSubmitError(null);
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  };

  const handleChangeReview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSubmitError(null);
    setFormData((prev) => ({
      ...prev,
      review: event.target.value,
    }));
  };

  const onSubmit = async (payload: CommentPayloadType): Promise<void> => {
    const response = await dispatch(addOfferCommentAction({offerId, payload}));

    if (response.meta.requestStatus === 'rejected') {
      throw new Error(ApiError.AddCommentMessage);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError(null);

    onSubmit({
      comment: formData.review,
      rating: formData.rating,
    })
      .then(() => {
        setFormData(initialState);
        onAddComment();
      })
      .catch((error: AxiosError) => {
        setSubmitError(error.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating
        value={formData.rating}
        onStarClick={handleChangeRating}
        disabled={submitting}
      />
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChangeReview}
        value={formData.review}
        disabled={submitting}
      />
      {
        submitError && <p className="error-message">{submitError}</p>
      }
      <div className="reviews__button-wrapper">

        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">{ReviewValidation.LengthMin} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || submitting}>Submit</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
