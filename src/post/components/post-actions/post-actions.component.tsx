import { useEffect } from "react";
import "./post-actions.styles.scss";

export type PostActionsProps = {
  closeActions(): void;
};

export const PostActions: React.FC<PostActionsProps> = ({ closeActions }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as EventTarget & HTMLDivElement).classList.contains(
        "post-actions__backdrop"
      )
    ) {
      closeActions();
    }
  };

  return (
    <div
      className="fixed-top bg-black-65 width-100 height-100"
      onClick={onBackdropClick}
    >
      <div className="post-actions__backdrop d-flex align-items-center justify-content-center width-100 height-100">
        <div className="post-actions__wrapper bg-primary rounded-3 border d-flex flex-column">
          <button className="btn btn--actionable py-i-4 border-bottom-i fw-semibold text-red">
            Пожаловаться
          </button>
          <button className="btn btn--actionable py-i-4 border-bottom-i fw-semibold text-red">
            Отменить подписку
          </button>
          <button className="btn btn--actionable py-i-4 border-bottom-i">
            Перейти к публикации
          </button>
          <button className="btn btn--actionable py-i-4 border-bottom-i">
            Поделиться
          </button>
          <button className="btn btn--actionable py-i-4 border-bottom-i">
            Копироваться ссылку
          </button>
          <button className="btn btn--actionable py-i-4 border-bottom-i">
            Вставить
          </button>
          <button className="btn btn--actionable py-i-4" onClick={closeActions}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};
