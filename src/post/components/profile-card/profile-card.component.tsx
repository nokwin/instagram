import clsx from "clsx";
import { useEffect, useRef } from "react";
import avatarImg from "../post/mock/avatar.jpg";
import photoImg from "../post/mock/photo.jpg";
import "./profile-card.styles.scss";

type ProfileCardProps = {
  position: {
    x: number;
    y: number;
  };
  close(): void;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  position,
  close,
}) => {
  const hoveredHtmlElementRef = useRef<Element | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onMouseMove = (e: PointerEvent) => {
      const element = document.elementFromPoint(e.x, e.y);

      if (hoveredHtmlElementRef.current !== element) {
        hoveredHtmlElementRef.current = element;
        const profileCardElement = element?.closest(".profile-card");
        const postHeaderElement = element?.closest(".post__header");

        if (
          !profileCardElement &&
          !postHeaderElement &&
          closeTimeoutRef.current === null
        ) {
          closeTimeoutRef.current = setTimeout(() => {
            close();
          }, 300) as unknown as number;
        } else if (profileCardElement || postHeaderElement) {
          if (!closeTimeoutRef.current) return;

          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }
    };

    document.addEventListener("pointermove", onMouseMove);

    return () => document.removeEventListener("pointermove", onMouseMove);
  }, []);

  return (
    <div
      className="profile-card bg-primary border position-absolute rounded-3 shadow"
      style={{ top: position.y, left: position.x }}
    >
      <div className="d-flex border-bottom p-4">
        <img src={avatarImg} className="profile-card__avatar rounded-circle" />
        <div className="d-flex flex-column ms-4">
          <a href="#" className="fw-semibold">
            asafevstas
          </a>
          <span className="text-secondary">Stas Asafiev</span>
          <span className="text-secondary mt-2">
            Подписчики: nokwin и еще 34
          </span>
        </div>
      </div>
      <div className="d-flex p-4 border-bottom justify-content-between">
        <div className="d-flex flex-column">
          <span className="fw-semibold d-block text-center">19</span>
          <span className="text-secondary">публикаций</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-semibold d-block text-center">19</span>
          <span className="text-secondary">подписчиков</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-semibold d-block text-center">19</span>
          <span className="text-secondary">подписок</span>
        </div>
      </div>
      <div className="d-flex">
        <div
          style={{ backgroundImage: `url(${photoImg})` }}
          className="profile-card__photo bg-cover"
        />
        <div
          style={{ backgroundImage: `url(${photoImg})` }}
          className="profile-card__photo bg-cover"
        />
        <div
          style={{ backgroundImage: `url(${photoImg})` }}
          className="profile-card__photo bg-cover"
        />
      </div>
      <div className="d-flex p-4 justify-content-between gap-2">
        <button className="btn border-i-primary rounded-1 fw-semibold flex-grow-1">
          Отправить сообщение
        </button>
        <button className="btn border-i-primary rounded-1 fw-semibold flex-grow-1">
          Подписаться
        </button>
      </div>
    </div>
  );
};
