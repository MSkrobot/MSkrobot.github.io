function Landing() {
  return (
    <>
      {" "}
      <div
        className="row"
        id="landing"
        style={{ height: "74px", background: "rgba(33, 37, 41, 0.99)" }}
      ></div>
      <div
        className="row"
        style={{
          background: "rgb(33, 37, 41, 0.99)",
          height: "calc(100vh - 74px)",
        }}
      >
        <div className="col">
          <div
            id="landingPage"
            className="col d-flex align-items-center justify-content-center"
            style={{ height: "85vh", display: "flex", flexDirection: "column" }}
          >
            <div className="text-center">
              <h1
                style={{
                  color: "#e0e1dd",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "4rem",
                }}
              >
                Hi, I am Michał
              </h1>
            </div>
            <div className="text-center">
              <p
                style={{
                  color: "#84a59d",
                  fontFamily: "Roboto Mono, monospace",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                Welcome on my personal website
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
