import { useLikes } from '../context/LikesContext';

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      className={`like-btn ${likes > 0 ? 'like-btn--active' : ''}`}
      type="button"
      onClick={addLike}
    >
      <span aria-hidden="true">{likes > 0 ? '♥' : '♡'}</span>
      Like ({likes})
    </button>
  );
}