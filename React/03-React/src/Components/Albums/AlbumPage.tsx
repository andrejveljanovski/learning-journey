import { useParams } from 'react-router-dom';
import artists from '../../db';

export const AlbumPage = () => {
  const { albumID, id } = useParams();

  if (!id) {
    return null;
  }
  let selectedItem = artists.find((artist) => artist.id === +id);

  let foundAlbum = selectedItem?.albums.find(
    (album) => album.albumId === albumID
  );
  if (!foundAlbum) {
    return null;
  }
  return (
    <div className="album-properties">
      <img src={`/images/albums/${foundAlbum.cover}.jpg`} alt="IMG" />
      <p>
        <span className="f-bold">Title : </span>
        {foundAlbum.title}
      </p>
      <p>
        <span className="f-bold">Year : </span>
        {foundAlbum.year}
      </p>
      <p>
        <span className="f-bold">Price : </span>
        {foundAlbum.price} $
      </p>
    </div>
  );
};
