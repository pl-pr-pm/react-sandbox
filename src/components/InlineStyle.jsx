export const InlineStyle = () => {
  const containerStyle = {
    //border: "solid 2px",
    backgroundColor: "white",
    border: "solid 1px",
    borderRadius: "15px",
    padding: "10px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}> Inline Styles </p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};
