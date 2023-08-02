import { Link, useParams } from 'react-router-dom';
type Props = {
  albumID: string;
  cover: string;
  price: number;
};
export const AlbumsList = ({ albumID, cover }: Props) => {
  const { id } = useParams();
  return (
    <Link to={`/artist/${id}/${albumID}`}>
      <div className="albumList">
        <img src={`/images/albums/${cover}.jpg`} alt="Album-Image" />
      </div>
    </Link>
  );
};
