import { useState } from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const [isEducationExpanded, setisEducationExpanded] = useState(false);
  const [isHobbiesExpanded, setIsHobbiesExpanded] = useState(false);
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleEducationExpand = () => {
    setisEducationExpanded(!isEducationExpanded);
  };
  const toggleHobbiesExpand = () => {
    setIsHobbiesExpanded(!isHobbiesExpanded);
  };
  const toggleLanguagesExpand = () => {
    setIsLanguagesExpanded(!isLanguagesExpanded);
  };

  return (
    <>
      <div
        className="row"
        id="about"
        style={{
          height: "74px",
          background:
            "linear-gradient(to bottom, rgba(33, 37, 41, 0.4), rgba(238, 238, 242, 0.2))",
        }}
      ></div>
      <div
        className="row"
        id="aboutRow"
        style={{
          backgroundColor: "rgba(33, 37, 41, 0.99)",
          minHeight: "calc(100vh - 74px)",
          flexWrap: "wrap",
          overflow: "hidden",
          paddingLeft: "9rem",
          paddingRight: "9rem",
        }}
      >
        <div className="col">
          <div
            className="row row-about justify-content-center align-items-center"
            style={{
              paddingTop: "2vh",
              paddingBottom: "0rem",
            }}
          >
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <h5
                style={{
                  color: "#84a59d",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "32px",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  textAlign: "right",
                }}
              >
                About Me
              </h5>
            </div>
          </div>
          <div
            className="row justify-content-center align-items-center"
            style={{
              paddingTop: "0rem",
              paddingBottom: "2vh",
            }}
          >
            <div
              className="col-lg-4 text-center"
              ref={ref}
              style={{ userSelect: "none" }}
            >
              <img
                src="/images/me1.jpg"
                width="224"
                height="224"
                className="d-inline-block align-center ms-2 me-2"
                alt=""
                style={{
                  borderRadius: "3%",
                  border: "1px solid rgb(59, 66, 74)",
                  marginTop: "2vh",
                  marginBottom: "4vh",
                }}
              ></img>
            </div>
            <div
              className="col col-about"
              style={{ textAlign: "center", display: "none" }}
            >
              <h5
                style={{
                  color: "#84a59d",
                  fontFamily: "Ubuntu, sans-serif",
                  fontSize: "32px",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                About Me
              </h5>
            </div>
            <div className="col-lg-8" style={{ paddingRight: "0px" }}>
              <div
                className="card h-100"
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  transition: "all 1.5s ease-out",
                  transform: inView ? "translateX(0)" : "translateX(1em)",
                  visibility: inView ? "visible" : "hidden",
                  opacity: inView ? "1" : "0.5",
                }}
              >
                <div className="card-body">
                  <p className="text">
                    Hi there! I'm a 23-year-old student living in Poland, and
                    I'm currently on the lookout for a commercial job.
                    Coding is my passion and I have been studying computer
                    science for the past two years, mastering my skills in
                    algorithms, data structures and web development. I'm eager
                    to apply this knowledge in a professional setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4"
              ref={ref1}
              style={{
                paddingBottom: "2vh",
              }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  minHeight: isEducationExpanded ? "100%" : "initial",
                  transition: "all 1.5s ease-out",
                  transitionDelay: "0.1s",
                  transform: inView1 ? "translateY(0)" : "translateY(20em)",
                  visibility: inView1 ? "visible" : "hidden",
                  opacity: inView ? "1" : "0.5",
                }}
              >
                <div className="card-body">
                  <h5 className="card-header">Education</h5>
                  <p className="card-text">
                    {isEducationExpanded
                      ? "I'm currently a third-year computer science student at Jagiellonian University in Krakow, Poland. Prior to this, I graduated from High School in Kielce, I did well on the advanced level exams in subjects such as mathematics, English, and geography. In my time at university so far, I have completed numerous projects, both independently and as a part of a team. During this time, I have completed several courses that particularly interested me, for example Algorithms and Data Structures. I am always looking for ways to apply this knowledge to real-world problems."
                      : "I'm currently a third-year computer science student at Jagiellonian University in Krakow, Poland. Prior to this, I graduated from High School in Kielce, I did well on the advanced level exams in subjects such as ..."}
                    <a
                      href="#about"
                      onClick={(event) => {
                        toggleEducationExpand();
                        event.preventDefault();
                      }}
                      className="read-more-link"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      {isEducationExpanded ? "Read less" : "Read more"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              ref={ref2}
              style={{ paddingBottom: "2vh" }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  minHeight: isHobbiesExpanded ? "100%" : "initial",
                  transition: "all 1.5s ease-out",
                  transitionDelay: "0s",
                  transform: inView2 ? "translateY(0)" : "translateY(20em)",
                  visibility: inView2 ? "visible" : "hidden",
                  opacity: inView ? "1" : "0.5",
                }}
              >
                <div className="card-body">
                  <h5 className="card-header">Hobbies</h5>
                  <p className="card-text">
                    {isHobbiesExpanded
                      ? "In my free time, I enjoy pursuing a variety of hobbies that keep me active and engaged. I'm an avid sports enthusiast, and I enjoy cycling and playing football. In addition to sports, I also have a passion for music and have been playing both piano and guitar for several years. I find that playing music is not only a creative outlet, but it also helps me unwind and stay focused. I also enjoy the challenge of algorithmic problems, I find solving them very rewarding. These hobbies have not only brought me a lot of joy, but also keep my body and mind in good shape."
                      : "In my free time, I enjoy pursuing a variety of hobbies that keep me active and engaged. I'm an avid sports enthusiast, and I enjoy cycling and playing football. In addition to sports, I also have a passion for ..."}
                    <a
                      href="#about"
                      onClick={(event) => {
                        toggleHobbiesExpand();
                        event.preventDefault();
                      }}
                      className="read-more-link"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      {isHobbiesExpanded ? "Read less" : "Read more"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              ref={ref3}
              style={{
                paddingBottom: "2vh",
              }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  minHeight: isLanguagesExpanded ? "100%" : "initial",
                  transition: "all 1.5s ease-out",
                  transitionDelay: "0.1s",
                  transform: inView3 ? "translateY(0)" : "translateY(20em)",
                  visibility: inView3 ? "visible" : "hidden",
                  opacity: inView ? "1" : "0.5",
                }}
              >
                <div className="card-body">
                  <h5 className="card-header">Languages</h5>
                  <p className="card-text">
                    {isLanguagesExpanded
                      ? "I am a native Polish speaker, I have a strong foundation in my mother tongue. In addition, I have advanced knowledge of English, which I've honed through years of study, immersion, and regular interactions with English-speaking people. I also enjoy watching movies in English, which helps me to maintain my language skills and stay up-to-date with the latest colloquialisms and expressions. When it comes to coding, I prefer to learn in English, as it is the primary language of the industry and allows me to access a wealth of resources and knowledge from around the world."
                      : "I am a native Polish speaker, I have a strong foundation in my mother tongue. In addition, I have advanced knowledge of English, which I've honed through years of study, immersion, and regular interactions ..."}
                    <a
                      href="#about"
                      onClick={(event) => {
                        toggleLanguagesExpand();
                        event.preventDefault();
                      }}
                      className="read-more-link"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      {isLanguagesExpanded ? "Read less" : "Read more"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
