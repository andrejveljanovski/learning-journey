import { PlaceComponent } from "./PlaceComponent";

export const PlacesContainer = () => {
  // <PlaceComponent />;
  return (
    <div className="places-container">
      <PlaceComponent id={0} />
      <PlaceComponent id={1} />
      <PlaceComponent id={2} />
      <PlaceComponent id={3} />
      <PlaceComponent id={4} />
      <PlaceComponent id={5} />
    </div>
  );
};
