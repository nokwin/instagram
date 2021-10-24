import { useRef } from "react";
import { useHistory } from "react-router";
import { ReactComponent as CameraIcon } from "../../../assets/icons/camera.svg";
import { usePostService } from "../../domain/post.service";

export const ImageSelector: React.FC<{}> = () => {
  const postService = usePostService();

  const history = useHistory();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const focusFileInput = () => {
    fileInputRef.current?.click();
  };
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const [file] = Array.from(e.target.files);

    postService.newPost = file;

    history.push("/new-post");
  };

  return (
    <>
      <button className="btn" onClick={focusFileInput}>
        <CameraIcon />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="d-none"
        accept="image/*"
        onChange={onFileInputChange}
      />
    </>
  );
};
