import "./../styles/CustomSkills.css";

interface LandingProps {
  isLightMode: boolean;
}

function Skills({ isLightMode }: LandingProps) {
  return (
    <>
      <div
        className={`row ${isLightMode ? "light-mode" : ""}`}
        id="skills"
      ></div>
      <div className={`row ${isLightMode ? "light-mode" : ""}`} id="skillsRow">
        <div className="col-lg-6 text-center">
          <h5 className="h5-header">Technical Skills</h5>
          <div
            className="accordion accordion-flush"
            id="accordion1"
            style={{ paddingBottom: "8vh" }}
          >
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                  className="accordion-button odd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1_1"
                  aria-expanded="false"
                  aria-controls="collapse1_1"
                >
                  <img
                    className="icon"
                    src="/images/www.png"
                    width="30"
                    height="30"
                  ></img>
                  Frontend Web Development
                </button>
              </h2>
              <div
                  id="collapse1_1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I began learning <strong>web development</strong> back in school, starting with the fundamentals—HTML,
                  CSS, and vanilla JavaScript.
                  As my career progressed, I expanded my skills to include more advanced technologies
                  like <strong>React.js</strong>.
                  I’ve worked on numerous commercial projects where I built frontends using standard web technologies,
                  as well as modern frameworks like React.js,
                  always focusing on clean, responsive, and user-friendly interfaces.
                </div>

              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_2"
                    aria-expanded="false"
                    aria-controls="collapse1_2"
                >
                  <img
                      className="icon"
                      src="/images/nodejs.png"
                    width="30"
                    height="30"
                  ></img>
                  Node.js/Express.js
                </button>
              </h2>
              <div
                  id="collapse1_2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I've been using mostly <strong>Node.js</strong> with <strong>Express.js</strong> to communicate
                  with databases in my projects. I have a solid grasp of building RESTful APIs, handling HTTP requests
                  and responses, and structuring applications using controllers and services. I'm comfortable working
                  with middleware, routing logic, and asynchronous operations to ensure clean, maintainable backends
                  that efficiently interact with databases.
                </div>
              </div>
            </div>
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                    className="accordion-button odd collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_3"
                    aria-expanded="false"
                    aria-controls="collapse1_3"
                >
                  <img
                      className="icon"
                    src="/images/java.png"
                    width="30"
                    height="30"
                  ></img>
                  Java
                </button>
              </h2>
              <div
                  id="collapse1_3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I started working with <strong>Java</strong> during my academic studies, where I learned the basics of
                  object-oriented programming.
                  Later, I got familiar with the <strong>Spring Framework</strong>, mainly Spring Boot and Spring Data,
                  which I use to build efficient backend systems.
                  I also learned <strong>Kotlin</strong> during my internship at Atlassian, appreciating its modern and
                  expressive syntax.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_4"
                    aria-expanded="false"
                    aria-controls="collapse1_4"
                >
                  <img
                      className="icon"
                    src="/images/user-interface.png"
                    width="30"
                    height="30"
                  ></img>
                  Mobile App Development
                </button>
              </h2>
              <div
                  id="collapse1_4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I tried <strong>mobile app development</strong> by using <strong>React
                  Native</strong> with <strong>Expo</strong>,
                  which allowed me to build cross-platform applications with a single codebase.
                  I’ve developed several commercial projects using React Native, focusing on smooth UI, navigation, and
                  API integration.
                  I appreciate how React Native combines the flexibility of JavaScript with native mobile capabilities
                  to deliver great user experiences.
                </div>
              </div>
            </div>
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                    className="accordion-button odd collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_5"
                    aria-expanded="false"
                    aria-controls="collapse1_5"
                >
                  <img
                      className="icon"
                      src="/images/python.png"
                    width="30"
                    height="30"
                  ></img>
                  Python
                </button>
              </h2>
              <div
                  id="collapse1_5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I've been using <strong>Python</strong> both for learning and building small projects.
                  I explored <strong>Pygame</strong> to create simple 2D games, which helped me understand event
                  handling and game loops.
                  I also used <strong>Matplotlib</strong> for data visualization in various scripts, especially for
                  plotting charts and analyzing results.
                  During my studies, I used <strong>NumPy</strong> and <strong>Pandas</strong> extensively to solve
                  mathematical problems and tasks related to probability and statistics.
                  Python’s simplicity makes it my go-to language for quick prototypes, data analysis and academic
                  exercises.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_6"
                    aria-expanded="false"
                    aria-controls="collapse1_6"
                >
                  <img
                      className="icon"
                      src="/images/c-.png"
                      width="30"
                      height="30"
                  ></img>
                  C++
                </button>
              </h2>
              <div
                  id="collapse1_6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  <strong>C++</strong> was the first programming language I learned, and it gave me a solid foundation
                  in programming concepts and memory management.
                  I’ve used it primarily for solving algorithmic problems and participating in coding challenges.
                  Thanks to its performance and low-level control, C++ remains my go-to choice for tasks that require
                  speed and precision.
                </div>
              </div>
            </div>
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                    className="accordion-button odd collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1_7"
                    aria-expanded="false"
                    aria-controls="collapse1_7"
                >
                  <img
                    className="icon"
                    src="/images/sql.png"
                    width="30"
                    height="30"
                  ></img>
                  Databases
                </button>
              </h2>
              <div
                  id="collapse1_7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion1"
              >
                <div className="accordion-body">
                  I've worked with several relational databases, including <strong>MS SQL
                  Server</strong>, <strong>PostgreSQL</strong>, and <strong>SQLite</strong>.
                  I’m comfortable designing schemas, writing complex SQL queries, and performing joins, aggregations,
                  and transactions.
                  I’ve used these databases in both academic and commercial projects, depending on the scale and
                  requirements of the application.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <h5 className="h5-header">Other Skills</h5>
          <div
              className="accordion accordion-flush"
              id="accordion2"
              style={{paddingBottom: "8vh"}}
          >
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                    className="accordion-button odd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2_1"
                  aria-expanded="false"
                  aria-controls="collapse2_1"
                >
                  <img
                    className="icon"
                    src="/images/github.png"
                    width="30"
                    height="30"
                  ></img>
                  GitHub
                </button>
              </h2>
              <div
                id="collapse2_1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
                  data-bs-target="#collapse2_2"
                  aria-expanded="false"
                  aria-controls="collapse2_2"
                >
                  <img
                    className="icon"
                    src="/images/ux.png"
                    width="30"
                    height="30"
                  ></img>
                  UX/UI
                </button>
              </h2>
              <div
                id="collapse2_2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
              >
                <div className="accordion-body">
                  I feel confident in my knowledge of <strong>UX/UI </strong>
                  design principles. I believe that good design is about
                  creating something that not only looks visually appealing but
                  is also user-friendly and intuitive to navigate.
                </div>
              </div>
            </div>
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                  className="accordion-button odd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2_3"
                  aria-expanded="false"
                  aria-controls="collapse2_3"
                >
                  <img
                    className="icon"
                    src="/images/visual-studio.png"
                    width="30"
                    height="30"
                  ></img>
                  Visual Studio
                </button>
              </h2>
              <div
                id="collapse2_3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
                  data-bs-target="#collapse2_4"
                  aria-expanded="false"
                  aria-controls="collapse2_4"
                >
                  <img
                    className="icon"
                    src="/images/web.png"
                    width="30"
                    height="30"
                  ></img>
                  Networking
                </button>
              </h2>
              <div
                id="collapse2_4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                  className="accordion-button odd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2_5"
                  aria-expanded="false"
                  aria-controls="collapse2_5"
                >
                  <img
                    className="icon"
                    src="/images/algorithm.png"
                    width="30"
                    height="30"
                  ></img>
                  Algorithms and Data Structures
                </button>
              </h2>
              <div
                id="collapse2_5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
                  data-bs-target="#collapse2_6"
                  aria-expanded="false"
                  aria-controls="collapse2_6"
                >
                  <img
                    className="icon"
                    src="/images/linux.png"
                    width="30"
                    height="30"
                  ></img>
                  Linux
                </button>
              </h2>
              <div
                id="collapse2_6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
            <div className="accordion-item odd">
              <h2 className="accordion-header">
                <button
                  className="accordion-button odd collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2_7"
                  aria-expanded="false"
                  aria-controls="collapse2_7"
                >
                  <img
                    className="icon"
                    src="/images/windows.png"
                    width="30"
                    height="30"
                  ></img>
                  Windows
                </button>
              </h2>
              <div
                id="collapse2_7"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion2"
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
