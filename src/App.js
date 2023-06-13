import "./App.css";
import ImageSlider from "./components/ImageSlider";

import { LARGE_IMAGES } from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ImageSlider images={LARGE_IMAGES} />
      </div>
    </div>
  );
}

export default App;
