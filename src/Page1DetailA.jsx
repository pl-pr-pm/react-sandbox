import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickReturn = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickReturn}>RETURN </button>
    </div>
  );
};
