import "./post.styles.scss";
import avatarJpg from "./mock/avatar.jpg";
import photoJpg from "./mock/photo.jpg";
import { ReactComponent as MoreIcon } from "../../../assets/icons/more.svg";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import { ReactComponent as ShareIcon } from "../../../assets/icons/share.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";

export const Post = () => {
  return (
    <div className="post bg-primary">
      <div className="post__header d-flex align-items-center justify-content-between px-4 py-3">
        <a href="#" className="d-flex align-items-center gap-4">
          <img
            src={avatarJpg}
            alt="asafevstas"
            className="post__avatar rounded-circle"
          />
          <span className="fw-semibold">asafevstar</span>
        </a>
        <button className="btn">
          <MoreIcon />
        </button>
      </div>
      <img src={photoJpg} className="img-fluid" />
      <div className="p-2 d-flex justify-content-between">
        <div>
          <button className="btn">
            <LikeIcon />
          </button>
          <button className="btn">
            <CommentIcon />
          </button>
          <button className="btn">
            <ShareIcon />
          </button>
        </div>
        <div>
          <button className="btn">
            <BookmarkIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
