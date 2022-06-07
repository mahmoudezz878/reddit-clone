import Comments from "../Component/Comments/Comments";
import OnePost from "../Component/OnePost/OnePost";
import { useState, useEffect } from "react";
import { getPost } from "../Api";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  
  const fetchPost = async (id) => {
    const res = await getPost(id)
    setPost(res.data)
  }

  const comments = post?.comments
  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <div className="bodyContainer">
      <OnePost post={post} />
      <Comments comments={comments} />
    </div>
  );
};

export default PostDetails;
