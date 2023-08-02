type detailsProps = {
  heading: string;
  paragraph: string;
  src: string;
};

export const BlockDetailsComponent = (props: detailsProps) => {
  return (
    <div className="block-details">
      <div className="left">
        <p>ABOUT</p>

        <h3>{props.heading}</h3>

        <p>{props.paragraph}</p>
      </div>

      <div className="right">
        <img src={props.src} alt="" />
      </div>
    </div>
  );
};
