import "./../styles/CustomLanding.css";

interface LandingProps {
  isLightMode: boolean;
}

function Landing({ isLightMode }: LandingProps) {
  return (
    <>
      <div
        className={`row ${isLightMode ? "light-mode" : ""}`}
        id="landing"
      ></div>
      <div className={`row row-landing ${isLightMode ? "light-mode" : ""}`}>
        <div className="col">
          <div id="landingPage" className="col d-flex" style={{}}>
            <div className="greeting">
              <h1>Hi, I am Michał</h1>
            </div>
            <div className="sub-greeting">
              <p>Welcome on my personal website</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
