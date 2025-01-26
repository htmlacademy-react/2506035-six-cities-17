import AddCommentForm from '../add-comment-form/add-comment-form';
import Review from '../review/review';
import { CommentType } from '../../api/types';
import useAppSelector from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../store/selectors';
import { AuthStatus } from '../../api/const';

type Props = {
  list: CommentType[];
  onAddComment: () => void;
}

function ReviewsList({ list, onAddComment }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{list.length}</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      {
        authStatus === AuthStatus.AUTH && <AddCommentForm onAddComment={onAddComment}/>
      }
    </section>
  );
}

export default ReviewsList;
