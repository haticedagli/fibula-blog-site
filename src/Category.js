import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = [
      { id: 1, title: "Kişisel Gelişim İçin 5 Adım", content: "Kişisel gelişimle ilgili temel ipuçları...", category: "Kişisel gelişim" },
      { id: 2, title: "Dil Öğrenmenin Yolları", content: "Dil öğrenme sürecinde en etkili yöntemler...", category: "Dil" },
      { id: 3, title: "Sporun Fiziksel ve Psikolojik Yararları", content: "Spor yapmanın vücudumuza faydaları...", category: "Spor" },
      { id: 4, title: "Sağlıklı Yaşam Rehberi", content: "Sağlıklı yaşam için nelere dikkat etmeliyiz...", category: "Sağlık" },
    ];

    const filteredPosts = allPosts.filter(post => post.category === categoryName);
    setPosts(filteredPosts);
  }, [categoryName]);

  return (
    <div className="category-container">
      <h1>{categoryName} Kategorisindeki Yazılar</h1>
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <Link to={`/post/${post.id}`} className="post-link">
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content.slice(0, 100)}...</p>
            <span className="category-tag">{post.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
