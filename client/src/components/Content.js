import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_CONTENT } from '../utils/queries';






export default function Content() {
  const { loading, data } = useQuery(QUERY_CONTENT);
  const newData = !loading ? data : [] 
  console.log(newData)
  return (
    <div className="contentDisplay">
      <h3 className="contentTitle contentContainer">Title of Game</h3>
        <h5 className="contentRating contentContainer">Rating: 8/10 </h5>
        <h5 className="contentGenres contentContainer">Genres: </h5>
        <h5 className="contentContainer contentReviews">Reviews: </h5>
            <div className="contentContainer contentReview">
                <h6>Title: So bad </h6>
                <h6>Rating: 5/10</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <div className="contentContainer contentReview">
                <h6>Title: FANTASTIC</h6>
                <h6>Rating: 9/10</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <div className="contentContainer contentReview">
                <h6>Title: Good game</h6>
                <h6>Rating: 7/10</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <button id="btn2"><Link to={`/CreateContent`}>Add your review!</Link></button>
      {/* <h3 className="contentTitle contentContainer">{newData.url}</h3>
      <h5 className="contentRating contentContainer">Rating: 78/100 </h5>
      <h5 className="contentGenres contentContainer">Genres: {this.genre}</h5>
      <h5 className="contentContainer contentReviews">Reviews: </h5>
      <div className="contentContainer contentReview">
        <h6>{this.rating}</h6>
        <p> {this.review} </p>
      </div> */}
    </div>
  );
}


{/* <h3 className="contentTitle contentContainer">Title of Game</h3>
        <h5 className="contentRating contentContainer">Rating: 78/100 </h5>
        <h5 className="contentGenres contentContainer">Genres: </h5>
        <h5 className="contentContainer contentReviews">Reviews: </h5>
            <div className="contentContainer contentReview">
                <h6>Title: So bad </h6>
                <h6>Rating: 52/100</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <div className="contentContainer contentReview">
                <h6>Title: FANTASTIC</h6>
                <h6>Rating: 99/100</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <div className="contentContainer contentReview">
                <h6>Title: Good game</h6>
                <h6>Rating: 70/100</h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem eget diam porta, eget tempor neque scelerisque. Morbi molestie faucibus vestibulum. Morbi mattis rutrum metus, non aliquet dolor consectetur nec. Phasellus et arcu id odio rhoncus finibus. Praesent ullamcorper convallis nunc, id laoreet velit auctor et. Curabitur volutpat ligula in risus vulputate euismod. Nunc eget vehicula nulla. Curabitur mattis pretium facilisis. Nam facilisis, urna et malesuada luctus, lectus sem fringilla nulla, et efficitur nunc nisl a enim. Nulla laoreet dui quis felis congue congue. Nunc vestibulum, dolor eu tristique.</p>
            </div>
            <button id="btn2"><Link to={`/CreateContent`}>Add your review!</Link></button> */}