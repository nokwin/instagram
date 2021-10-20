import { DateTime } from "luxon";
import "./post.styles.scss";
import { ReactComponent as MoreIcon } from "../../../assets/icons/more.svg";
import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import { ReactComponent as ShareIcon } from "../../../assets/icons/share.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/icons/bookmark.svg";
import { ReactComponent as SmileIcon } from "../../../assets/icons/smile.svg";
import { Post as PostEntity } from "../../domain/post.entity";
import { Comment } from "../comment/comment.component";

type PostProps = {
  item: PostEntity;

  setCardPosition(x: number, y: number): void;
  openActions(): void;
};

const POST_HEADER_HEIGHT = 30;

export const Post: React.FC<PostProps> = ({
  item,
  setCardPosition,
  openActions,
}) => {
  const onProfileLinkHover = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setCardPosition(
      e.currentTarget.offsetLeft,
      e.currentTarget.offsetTop + POST_HEADER_HEIGHT
    );
  };

  return (
    <div className="post bg-primary mb-4">
      <div className="post__header d-flex align-items-center justify-content-between px-4 py-3">
        <a
          href="#"
          className="post__author d-flex align-items-center gap-4"
          onMouseEnter={onProfileLinkHover}
        >
          <img
            src={item.author.avatar}
            alt={item.author.username}
            className="post__avatar rounded-circle"
          />
          <span className="fw-semibold">{item.author.username}</span>
        </a>
        <button className="btn" onClick={openActions}>
          <MoreIcon />
        </button>
      </div>
      <div>
        <img src={item.photo} className="img-fluid" alt={item.description} />
      </div>
      <div>
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
        <div className="px-4 mb-4">
          <p className="fw-semibold m-0 mb-2">
            {item.likes} отметок "Нравится"
          </p>
          <p className="m-0 mb-2">
            <span className="fw-semibold">{item.author.username}</span>{" "}
            {item.description}
          </p>
          {item.comments.length && (
            <div>
              <p className="text-secondary m-0 mb-2">
                Посмотреть все комментарии ({item.comments.length})
              </p>
              {item.topComments.map((comment) => (
                <Comment key={`comment-${comment.id}`} item={comment} />
              ))}
              <p className="text-secondary fs-3 m-0 text-uppercase">
                {DateTime.fromJSDate(item.publishedAt)
                  .setLocale("ru-RU")
                  .toRelative()}
              </p>
            </div>
          )}
        </div>
        <div className="px-4">
          <div className="border-top border-secondary d-flex align-items-center">
            <button className="btn ps-0">
              <SmileIcon />
            </button>
            <textarea
              placeholder="Добавьте комментарий..."
              className="form-control"
            ></textarea>
            <button className="btn fw-semibold text-blue" disabled>
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
