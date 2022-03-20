import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
function Detail() {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState({});
  const {id} = useParams();

  const getMovie = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();    
    setDatas(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  },[]);

  console.log(datas.genres);
  
  return (
  <div>{loading ? 'Loading...' : null}
    <div>
      <h1>{datas.title}</h1>
      <img src={datas.background_image} alt="hello" />
      <img src={datas.medium_cover_image} alt="hello" />
      
      <ul>
        <li>rating: {datas.rating} / 10</li>
        <li>year: {datas.year}</li>
        <li>runtime: {datas.runtime}(min)</li>
      </ul>
      <ul>
        <li>{datas.genres}</li>
      </ul>
    </div>
  </div>)
}

export default Detail;