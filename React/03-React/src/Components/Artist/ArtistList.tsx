import artists from '../../db';
import { ArtistItem } from './ArtistItem';

export const ArtistsList = () => {
  return (
    <div className="artists-container">
      <h2>Browse the artists</h2>
      {artists.map((artist) => (
        <ArtistItem
          key={artist.id}
          name={artist.name}
          title={artist.cover}
          id={artist.id}
        />
      ))}
    </div>
  );
};
