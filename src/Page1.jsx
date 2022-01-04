import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];
  console.log(arr);

  const history = useHistory();
  const onClickDetailA = () => history.push("page1/detaila");

  return (
    <div>
      <h1>Page1 Page</h1>
      <Link to={{ pathname: "page1/detaila", state: arr }}>DetailA</Link>
      <br />
      <Link to="page1/detailb">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
