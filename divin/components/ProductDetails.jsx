import React from 'react';
import axios from 'axios';

export default function ArticleDetail(props) {
  const id = props.match.params.id;
  console.log(props);

  const [articleDetail, setArticleDetail] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
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