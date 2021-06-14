import React from "react";

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )
}

const Review = ({link, headline, byline, publication_date, summary_short, idx}) => {
  return (
    <div key={idx} className="review">
      <a href={link.url} target="_blank" rel="noopener noreferrer"><h1>{headline}</h1></a>
      <p>Author: {byline}, Published: {publication_date}</p>
      <p>{summary_short}</p><br />
    </div>
  )
}

export default MovieReviews


// import React from "react";

// const MovieReviews = ({reviews}) => {
//   return (
//     <div className="review-list">
//       { reviews.map((review, idx) => <Review review={review} key={idx} />) }
//     </div>
//   )
// }

// const Review = ({review, idx}) => {
//   return (
//     <div key={idx} className="review">
//       <a href={review.link.url} target="_blank" rel="noopener noreferrer"><h1>{review.headline}</h1></a>
//       <p>Author: {review.byline}, Published: {review.publication_date}</p>
//       <p>{review.summary_short}</p><br />
//     </div>
//   )
// }

// export default MovieReviews