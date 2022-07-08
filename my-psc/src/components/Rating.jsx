function RatingComponent({ rating, votes, reviews }) {
    return (
      <div>
        <div style={{
            backgroundColor:"rgb(83, 146, 83)",
            width:"2.5rem",
            height:"1.5rem",
            marginLeft:"1.2rem",
            borderRadius:".5rem"
    

        }}>{rating}</div>
        <div>{votes} votes </div>
        <div>{reviews} reviews </div>
      </div>
    );
  }
  
  export default RatingComponent;
  