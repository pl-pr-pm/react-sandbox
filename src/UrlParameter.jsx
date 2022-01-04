import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);
  console.log(query.get("name"));

  return (
    <div>
      <h1>URLParameter</h1>
      <p>UrlParame　ter is {id}</p>
      <p>QueryParameter is {query.get("name")}</p>
    </div>
  );
};
