function FloralCard(props) {
  return (
    <div>
      <img
        src={props.image}
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      <p style={{ fontSize: "16px" }}>
        <span style={{ fontSize: "48px", fontWeight: "bold" }}>
          {props.order}
        </span>
        /18
      </p>
    </div>
  );
}

export default FloralCard;
