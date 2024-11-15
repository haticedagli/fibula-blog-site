import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories] = useState([
    'Edebiyat', 'Kişisel gelişim', 'Dil', 'Akademi - eğitim', 'Sağlık', 
    'Spor', 'Kültür Seyahat', 'Film dizi', 'Teknoloji', 'Psikoloji', 'Doğa'
  ]);

  // Kategorilere göre filtrelenmiş blog yazıları
  useEffect(() => {
    const samplePosts = [
      { id: 1, title: "Kişisel Gelişim İçin 5 Adım", content: "Kişisel gelişimle ilgili temel ipuçları...", category: "Kişisel gelişim" },
      { id: 2, title: "Dil Öğrenmenin Yolları", content: "Dil öğrenme sürecinde en etkili yöntemler...", category: "Dil" },
      { id: 3, title: "Sporun Fiziksel ve Psikolojik Yararları", content: "Spor yapmanın vücudumuza faydaları...", category: "Spor" },
      { id: 4, title: "Sağlıklı Yaşam Rehberi", content: "Sağlıklı yaşam için nelere dikkat etmeliyiz...", category: "Sağlık" },
    ];
    setPosts(samplePosts);
  }, []);

  return (
    <div className="home-container">
      <h1 className="main-heading">Fibula</h1>

      {/* Kategoriler */}
      <div className="categories">
        {categories.map((category, index) => (
          <Link to={`/category/${category}`} key={index} className="category">
            {category}
          </Link>
        ))}
      </div>

      <h2 className="posts-heading">Son Yazılar</h2>
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

export default Home;
