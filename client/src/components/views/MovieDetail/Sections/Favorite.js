import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };

    Axios.post("/api/favorite/favoritenumber", variables).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
        // console.log(response.data);
      } else {
        alert("숫자 정보를 가져오는데 실패 했습니다.");
      }
    });

    Axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setFavorited(response.data.favorited);
        // console.log(response.data);
      } else {
        alert("정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);

  return (
    <div>
      <button>
        {Favorited ? " Not Favorite" : "Add to Favorite"} {FavoriteNumber}
      </button>
    </div>
  );
}

export default Favorite;
