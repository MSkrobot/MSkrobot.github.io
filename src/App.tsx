import CustomNavbar from "./components/navBar";
import "./App.css";
import bigPhoto from "./images/M6.png";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div
        className="bg-dark bg-portrait"
        style={{
          backgroundImage: `url(${bigPhoto})`,
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          display: "block",
        }}
      >
        <CustomNavbar />
        <Content />
      </div>
    </>
  );
}

export default App;
