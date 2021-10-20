import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { usePostService } from "../../domain/post.service";
import { Post } from "../post/post.component";
import { ProfileCard } from "../profile-card/profile-card.component";

export const PostList = observer(() => {
  const postService = usePostService();

  useEffect(() => {
    postService.getPosts();
  }, []);

  const [profileCardPosition, setProfileCardPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const assignProfileCardPosition = useCallback((x: number, y: number) => {
    setProfileCardPosition({ x, y });
    setIsProfileCardVisible(true);
  }, []);
  const closeCard = () => setIsProfileCardVisible(false);

  return (
    <>
      {isProfileCardVisible && (
        <ProfileCard position={profileCardPosition} close={closeCard} />
      )}
      ;
      {postService.posts.map((p) => (
        <Post
          key={`post-${p.id}`}
          item={p}
          setCardPosition={assignProfileCardPosition}
        />
      ))}
    </>
  );
});
