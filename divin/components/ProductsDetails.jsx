import React from 'react';
import axios from 'axios';

export default function ArticleDetail(props) {
  const id = props.match.params.id;
  console.log(props);

  const [articleDetail, setArticleDetail] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://localhost:3000/farmer/${id}/products/${id}`) // via "http://192.168.1.54" is to be showed on the Mario's phone, "https://localhost"(with http"S") is to be showned via the browser window
      .then((response) => response.data)
      .then((data) => {
        setArticleDetail(data);
      })
  }, []);

  return (
    <div>
      <h2 > {articleDetail.title}</h2>
      <img src={articleDetail.imageUrl} alt="" />
      <p>{articleDetail.summary} </p>
      <h5>{articleDetail.newsSite} - {articleDetail.publishedAt}</h5>
    </div>
  )
}