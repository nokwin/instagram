import { Comment as CommentEntity } from "../../domain/post.entity";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";

type CommentProps = {
  item: CommentEntity;
};

export const Comment: React.FC<CommentProps> = ({ item }) => {
  return (
    <div className="mb-2 d-flex align-items-center justify-content-between gap-2">
      <p className="m-0">
        <span className="fw-semibold">{item.author.username}</span> {item.text}
      </p>
      <button className="btn p-i-0">
        <LikeIcon className="is-3" />
      </button>
    </div>
  );
};
