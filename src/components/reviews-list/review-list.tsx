import AddCommentForm from '../add-comment-form/add-comment-form';
import { Review } from '../../shared/review/review';
import { CommentType } from '../../api/types';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../store/user-slice/selectors';
import { AuthStatus } from '../../api/const';

type Props = {
  list: CommentType[];
  totalReviewsCount: number;
  onAddComment: () => void;
}

function ReviewsList({ list, onAddComment, totalReviewsCount }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{totalReviewsCount}</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      {
        authStatus === AuthStatus.Auth && <AddCommentForm onAddComment={onAddComment}/>
      }
    </section>
  );
}

export default ReviewsList;
