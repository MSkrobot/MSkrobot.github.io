function Skills() {
  return (
    <>
      <div
        className="row"
        id="skills"
        style={{
          height: "74px",
          background:
            "linear-gradient(to top, rgba(33, 37, 41, 0.4), rgba(238, 238, 242, 0.2))",
        }}
      ></div>
      <div
        className="row"
        id="skillsrow"
        style={{
          backgroundColor: "rgba(33, 37, 41, 0.99)",
          minHeight: "calc(100vh - 74px)",
          flexWrap: "wrap",
          overflow: "auto",
          paddingTop: "2vh",
          paddingBottom: "0rem",
          paddingLeft: "9rem",
          paddingRight: "9rem",
        }}
      >
        <div className="col-lg-6 text-center">
          <h5
            className="h5-Technical"
            style={{
              color: "#84a59d",
              fontFamily: "Ubuntu, sans-serif",
              fontSize: "32px",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            Technical Skills
          </h5>
          <div
            className="accordion accordion-flush"
            id="accordion1"
            style={{ paddingBottom: "8vh" }}
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne1"
                  aria-expanded="false"
                  aria-controls="collapseOne1"
                >
                  <img
                    src="/images/html-5.png"
                    width="40"
                    height="40"
                    style={{ marginRight: "4px" }}
                  ></img>
                  HTML
                </button>
              </h2>
              <div
                id="collapseOne1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I learned <strong>HTML</strong> way back in primary school.
                  I've managed to stay up to date with it over the years thanks
                  to my involvement in numerous web projects. As a result, I
                  know HTML pretty well by now and feel quite comfortable
                  creating and editing HTML code.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded="false"
                  aria-controls="collapseTwo2"
                >
                  <img
                    src="/images/css-3.png"
                    width="40"
                    height="40"
                    style={{ marginRight: "4px" }}
                  ></img>
                  CSS
                </button>
              </h2>
              <div
                id="collapseTwo2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I learned <strong>CSS</strong> early on as another fundamental
                  web development language. I focus on making my websites
                  responsive, visually appealing and user-friendly. I'm
                  confident in my ability to use CSS to craft compelling designs
                  and layouts for web projects.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree3"
                  aria-expanded="false"
                  aria-controls="collapseThree3"
                >
                  <img
                    src="/images/js.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  JavaScript
                </button>
              </h2>
              <div
                id="collapseThree3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I've worked with <strong>JavaScript</strong>, which is an
                  essential web development language. I'm familiar with some of
                  the newest features of JavaScript, including async/await,
                  destructuring, and arrow functions. While I still have things
                  to learn, this knowledge has allowed me to create dynamic and
                  interactive web applications that deliver a great user
                  experience.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  <img
                    src="/images/python.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Python
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I first learned <strong>Python</strong> back in high school
                  and continued to build on my knowledge of the language through
                  several university courses. I am comfortable using Python for
                  a variety of programming tasks and particularly enjoy working
                  with it for its ease of use and versatility, thanks to its
                  extensive libraries.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  <img
                    src="/images/java.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Java
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  <strong>Java</strong> is my favourite programming language,
                  and I've completed several university courses that required
                  Java programming. I find Java to be a powerful and flexible
                  language with strong object-oriented principles and a robust
                  standard library. With Java, I'm able to write efficient and
                  reliable code for a variety of applications and platforms.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  <img
                    src="/images/c-.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  C++
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  <strong>C++</strong> was actually the first programming
                  language I learned, and I have a deep appreciation for its
                  power and versatility. While it can be complex and challenging
                  to learn, C++ offers a tremendous amount of control and
                  flexibility over memory management and system resources. I
                  find that having learned C++ as my first language, learning
                  other programming languages has become much easier for me.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse7"
                >
                  <img
                    src="/images/sql-server.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  MSSQL Server
                </button>
              </h2>
              <div
                id="collapse7"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I was taught <strong>MSSQL Server</strong> as part of my
                  university databases course, I chose to focus on that language
                  for my projects. I found that working with MS SQL Server was a
                  great experience, as it allowed me to develop complex queries
                  and optimize database performance. With this experience, I'm
                  confident in my ability to design, build, and maintain robust
                  database systems using MS SQL Server.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <h5
            className="h5-Other"
            style={{
              color: "#84a59d",
              fontFamily: "Ubuntu, sans-serif",
              fontSize: "32px",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            Other Skills
          </h5>
          <div
            className="accordion accordion-flush"
            id="accordionExample"
            style={{ paddingBottom: "8vh" }}
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <img
                    src="/images/github.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  GitHub
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I have experience working with <strong>GitHub</strong> on
                  several occasions and feel confident in my ability to use this
                  platform for collaboration, issue tracking, and project
                  management.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img
                    src="src/images/ux.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  UX/UI
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I feel confident in my knowledge of <strong>UX/UI </strong>
                  design principles. I believe that good design is about
                  creating something that not only looks visually appealing but
                  is also user-friendly and intuitive to navigate.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <img
                    src="/images/visual-studio.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Visual Studio
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I have been working with <strong>Visual Studio </strong>
                  throughout my entire programming journey and have developed a
                  good understanding of its many powerful features. Over the
                  years, I have learned using the platform to its fullest
                  potential, including its debugging tools, Git integration, and
                  vast library of extensions.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <img
                    src="/images/web.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Networking
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I gained my knowledge of <strong>Networking </strong>
                  in university, where I learned about the various concepts and
                  technologies that underpin modern networking. I have developed
                  a strong understanding of network protocols, routing,
                  switching, and network security.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <img
                    src="/images/algorithm.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Algorithms and Data Structures
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I learned about
                  <strong> Algorithms and Data Structures </strong>
                  in university and view it as a hobby. I have developed a
                  strong understanding of concepts such as sorting and searching
                  algorithms, graph algorithms, and data structures like trees
                  and graphs. I enjoy using it to create elegant solutions to
                  algorithmic problems.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <img
                    src="/images/linux.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Linux
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  I have gained my knowledge of <strong>Linux</strong> through
                  personal interest and university. I am skilled in the command
                  line interface, shell scripting, and Linux system
                  administration. This knowledge has been instrumental in my
                  ability to work effectively with Linux-based systems and to
                  troubleshoot issues when they arise.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <img
                    src="/images/windows.png"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px", marginLeft: "6px" }}
                  ></img>
                  Windows
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  As a lifelong user of <strong>Windows</strong> operating
                  systems, I have gained extensive knowledge and expertise in
                  its various features, functionalities, and tools. I have a
                  good understanding of this operating system's architecture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

//github, ux/ui, vscode, network, algorithms and datastructures, linux, windows
