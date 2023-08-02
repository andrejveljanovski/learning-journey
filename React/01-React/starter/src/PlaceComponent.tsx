import { useEffect, useState } from "react";

type PlaceType = {
  id: number;
  place: string;
  desc: string;
  img: string;
};

type PlaceComponentProps = {
  id: number;
};

export const PlaceComponent = ({ id }: PlaceComponentProps) => {
  const [place, setPlace] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/places/${id}`)
      .then((res) => res.json())
      .then((data: PlaceType) => {
        setPlace(data.place);
        setDesc(data.desc);
        setImg(data.img);
      });
  }, [id]);

  const containerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "250px",
  };

  return (
    <div className="place-container" style={containerStyle}>
      <h3>{place}</h3>
      <p>{desc}</p>
    </div>
  );
};
