import { ReviewValidation } from '../../const';
import { FormDataType } from './types';

export function isReviewFormValid(formData: FormDataType): boolean {
  const isValidRating = formData.rating >= ReviewValidation.RatingMin && formData.rating <= ReviewValidation.RatingMax;
  const isValidReview = formData.review.length >= ReviewValidation.LengthMin && formData.review.length <= ReviewValidation.LengthMax;
  return isValidRating && isValidReview;
}
