import { Link } from "react-router-dom";
type Props = {
  title: string;
  name: string;
  id: number;
};
export const ArtistItem = ({ title, name, id }: Props) => {
  return (
    <Link to={`/artist/${id}`}>
      <div className="artist-item-div">
        <img src={`images/covers/${title}.jpg`} alt="" />
        <p className="artist-name">{name}</p>
      </div>
    </Link>
  );
};
