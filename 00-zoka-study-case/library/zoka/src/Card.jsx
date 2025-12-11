function Card(props) {
  console.log(props);

  return (
    <div class="card">
      <div class="circle-wrapper">
        <img src={props.image} />
      </div>
      <h3>Long hour shoots</h3>
      <p>Your creativity our inspiration. Whate ever your want</p>
    </div>
  );
}

export default Card;
