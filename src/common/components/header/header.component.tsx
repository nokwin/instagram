import logoImg from "../../../assets/logo.png";
import "./header.styles.scss";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as CameraIcon } from "../../../assets/icons/camera.svg";

export const Header = () => {
  return (
    <header className="header px-5 bg-primary d-flex align-items-center justify-content-between border-bottom mb-6">
      <a href="#" className="d-flex align-items-center">
        <img src={logoImg} alt="instagram" className="header__logo" />
      </a>
      <nav className="d-flex gap-2 align-items-center">
        <a href="#" className="p-2">
          <HomeIcon />
        </a>
        <button className="btn">
          <CameraIcon />
        </button>
      </nav>
    </header>
  );
};
