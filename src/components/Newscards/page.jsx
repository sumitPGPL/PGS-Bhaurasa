'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getAllNews } from '@/lib/services/news/index';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <div className="thumbnail-container">
        <img src={news.thumbNail} alt="Thumbnail" className="thumbnail" />
      </div>
      <div className="news-details">
        <h2 className="news-title">{news.title}</h2>
        <p className="news-content">{news.content}</p>
        <p className="news-publish-date">Publish Date: {moment(news.publishedDate).format('YYYY-MM-DD HH:mm:ss')}</p>
        <a href={news.reDirectLink} className="news-redirect-link">Read more</a>
      </div>
    </div>
  );
};

const NewsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const newsData = await getAllNews();
        setNewsList(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []); // Run the effect only once on component mount

  return (

    <div className="news-list">
      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        <>
          {newsList.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </>
      )}
    </div>
  );
};


const NewsPage = () => {
  return (
    <div className="news-page">
      <h1>Latest News</h1>
      <NewsList/>
    </div>
  );
};

export default NewsPage;
