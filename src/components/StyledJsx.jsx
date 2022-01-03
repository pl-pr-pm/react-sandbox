export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>Styled Jsx</p>
        <button>FIGHT</button>
      </div>
      <style jsx="true">
        {`
          .container {
            background-color: red;
            border: solid;
            border-radius: 15px;
            padding: 10px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}{" "}
      </style>
    </>
  );
};
