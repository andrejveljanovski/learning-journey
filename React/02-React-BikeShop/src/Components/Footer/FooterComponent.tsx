import { Link } from "react-router-dom";

export const FooterComponent = ({ heading }: { heading: string }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <ul>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
        <li>
          <Link to={"/"}>Lorem</Link>
        </li>
      </ul>
    </div>
  );
};
