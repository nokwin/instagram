import "./new-post.styles.scss";
import { usePostService } from "../../domain/post.service";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import Slider from "react-slick";
import { debounce } from "lodash";

export const NewPost = observer(() => {
  const postService = usePostService();
  const cropperRef = useRef<HTMLImageElement | ReactCropperElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [readyImageUrl, setReadyImageUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const image = postService.newPost;

      if (!image) return;

      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        const url = event.target!.result!.toString();
        setImageUrl(url);
      };
    })();
  }, [postService.newPost]);

  const onCrop = () => {
    const imageElement = cropperRef?.current as ReactCropperElement;
    const cropper = imageElement?.cropper;
    debugger;
    setReadyImageUrl(cropper.getCroppedCanvas().toDataURL());
  };
  const cropDebounce = debounce(onCrop, 300);

  const slickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="new-post bg-primary width-100">
        {imageUrl && (
          <Cropper
            src={imageUrl}
            style={{ height: 600, width: "100%" }}
            initialAspectRatio={1}
            guides={false}
            cropend={cropDebounce}
            ready={cropDebounce}
            zoom={cropDebounce}
            ref={cropperRef}
            dragMode="move"
            viewMode={3}
            autoCropArea={1}
          />
        )}
        {readyImageUrl && (
          <Slider {...slickSettings}>
            <div>
              <img src={readyImageUrl} style={{ width: 100, height: 100 }} />
            </div>
            <div>
              <img src={readyImageUrl} style={{ width: 100, height: 100 }} />
            </div>
            <div>
              <img src={readyImageUrl} style={{ width: 100, height: 100 }} />
            </div>
            <div>
              <img src={readyImageUrl} style={{ width: 100, height: 100 }} />
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
});
