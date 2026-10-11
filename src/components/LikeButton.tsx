import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      variant={likes > 0 ? 'primary' : 'secondary'}
      className="like-btn"
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      <span aria-hidden="true">{likes > 0 ? '♥' : '♡'}</span>
      Like ({likes})
    </Button>
  );
}