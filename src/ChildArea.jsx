import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

export const ChildArea = memo((props) => {
  const { visible, onClickClose } = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => console.log("..."));

  return (
    <>
      {visible ? (
        <div style={style}>
          <p> childarea</p>
          <button onClick={onClickClose}>CLOSE</button>
        </div>
      ) : null}
    </>
  );
});
