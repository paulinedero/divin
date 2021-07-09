import React from 'react';
import ProductDetails from 'ProductDetails';

export default function Article({ id, title, imageUrl, newsSite, publishedAt }) {
  return (
    <View>
      <div classeName="article_only" class="w-15">
        <h2> {title} </h2>
        <p> Source: {newsSite} - Date: {publishedAt} </p>
        <img class="w-32 mx-auto" src={imageUrl} alt="" />
        <h6>{id}</h6>
        <ul>
          <li>
            <Link to={`/articles/${id}`}> News in Details</Link>
          </li>
        </ul>
        <hr></hr>
  </View >
      )
};