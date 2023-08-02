import { BlockDetailsComponent } from "./BlockDetailsComponent";
import { FirstSection } from "./FirstSection";
import { Footer } from "./Footer";
import { PlacesContainer } from "./PlacesContainer";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <FirstSection />
      <BlockDetailsComponent
        heading="Stories of adventure"
        paragraph=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quia, dolor nobis at, iure officia distinctio voluptatibus blanditiis quam laborum possimus corrupti explicabo non? Veniam fugiat voluptates quibusdam sit odio error deleniti ex quas ut. Ab vero odio optio quas ducimus iusto doloremque iste facere dolore, doloribus hic laborum beatae."
        src="https://fastly.picsum.photos/id/70/3011/2000.jpg?hmac=-npCfe1kpGYW7HcBlZvrEZ9Qb_EdiGLbDxE26amgotM"
      />
      <PlacesContainer />
      <BlockDetailsComponent
        heading="Popular adventures"
        paragraph=" Porro quiaeum repellat a doloremque, ipsam aspernatur in optio quos architecto
        at similique!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quod accusantium labore temporibus fuga amet,
        doloribus eligendi incidunt in nostrum magnam tempore dolorem velit
        officia tenetur saepe, non expedita vero deserunt! Animi rerum tenetur
        itaque?"
        src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
      />
      <Footer />
    </div>
  );
};

export default App;
