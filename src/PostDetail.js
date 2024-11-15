import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Gerçek bir API'den veri çekebilirsiniz
    const postDetails = {
      1: { title: "React ile Blog Yapmak", content: "React ile bir blog sitesi nasıl yapılır..." },
      2: { title: "JavaScript Temelleri", content: "JavaScript dilinin temelleri..." },
    };
    setPost(postDetails[id]);
  }, [id]);

  if (!post) return <div>Yazı yükleniyor...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
