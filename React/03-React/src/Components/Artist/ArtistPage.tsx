import { useParams } from 'react-router-dom';
import artists from '../../db';
import { AlbumsList } from '../Albums/AlbumsList';
export const ArtistPage = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }
  let selectedItem = artists.find((artist) => artist.id === +id);
  if (!selectedItem) {
    return null;
  }
  return (
    <div className="artist-detail-page">
      <img
        className="artist-detail-img"
        src={`/images/covers/${selectedItem.cover}.jpg`}
        alt=""
      />
      <h4 className="artist-detail-title">{selectedItem.name}</h4>
      <p className="artist-detail-bio">{selectedItem.bio}</p>
      <div className="album-list">
        {selectedItem.albums.map((album) => (
          <AlbumsList
            albumID={album.albumId}
            cover={album.cover}
            price={album.price}
            key={`${album.year}+${album.cover}`}
          />
        ))}
      </div>
    </div>
  );
};
