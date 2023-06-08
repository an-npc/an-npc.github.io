import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Col, Container, Row, ButtonGroup, Button, Dropdown } from 'react-bootstrap';
import { GitHub, Linkedin, Codesandbox, Menu } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';

class BeginScrn extends React.Component {
  render() {
    return (
      <div className="beginBtn">
        <button {...this.props}>
          <h5>{"Click to Begin"}</h5>
        </button>
      </div>
    );
  }
}
class HomeScrn extends React.Component {
  constructor() {
    super();

    this.state1 = {
      word1: "<!--"
    };
    this.state2 = {
      word2: " -->"
    };
  }
  render() {
    return (
      <footer className="Home">
        <aside className="credits">
          <h7>
            {this.state1.word1} {"created + designed by Melanie S."}
            {this.state2.word2}
          </h7>
        </aside>
      </footer>
    );
  }
}
class AboutMe extends React.Component {
  render() {
    return (
      <section className="AboutScrn">
        <Row>
          <header className="Intro">
            <h1>
              <div class="vert-line">Hi, I'm Melanie</div>
            </h1>
          </header>
        </Row>
        <Row>
          <Col>
            <h2 id = "text-section">
              I am hardworking, dedicated, and ambitious. At a young age I knew
              I wanted to be a programmer and since then I've been honing my
              problem-solving, quick-thinking, and technical skills. Because of
              my diligence, I have experience in various programming languages
              and was awarded 2nd place in the Congressional App Challenge for
              my app Pneuma.
            </h2>
          </Col>
          <Col>
          <figure>
            <img
              src="https://lh3.googleusercontent.com/bLftuZry-_zzz5EL1ePG3gi2ft9ho9TLbCX0aj86Gp_XLt4bHAwUuuAX4-sMIpm_vFJsATo5Uhq0uxRtQnZed5FBahV8KRFus91ouEVeTnVFON3sVjFQxkV6YQmprlVJsRT_r1CAsXo=w2400"
              alt="Melanie Steiner"
              height="150"
              width="100"
            ></img>
            <figcaption>Melanie Steiner - Software Developer</figcaption>
          </figure>
          </Col>
        </Row>
      </section>
    );
  }
}
class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <Row>
          <header className="Intro">
            <h1>
              <div class="vert-line">Skill Level</div>
            </h1>
          </header>
        </Row>
        <Row>
          <Col>
            <article id="skill-sect" className="langs">
              <h2>inventory</h2>
              <div className="inventory">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    viewBox="0 0 448 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    class="icon-import inventory-item"
                  >
                    <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                  </svg>
                </div>
              </div>
            </article>
          </Col>
          <Col className="softSkills">
            <article id="skill-sect" >
              <h2>soft skills</h2>
              <h6><ul>
                <li>communicator</li>
                <li>time management</li>
                <li>problem solver</li>
                <li>multitasker</li>
              </ul></h6>
            </article>
          </Col>
          <Col>
            <article id="skill-sect" className="awards" >
              <h2>awards</h2>
              <div class="vert-line">
                <h6 class="bold">AB Honor Roll</h6>
                <h6>Freshman through Sophmore Year</h6>
              </div>
              <div class="vert-line">
                <h6 class="bold">A Honor Roll</h6>
                <h6>Junior through Senior Year</h6>
              </div>
              <div class="vert-line">
                <h6 class="bold">2nd Place Congressional App Challenge</h6>
                <h6>
                  During my senior year I created an app prototype named Pneuma
                  using JavaScript, a GPS system that navigates the user through
                  graveyards to the location of their loved ones resting area.
                </h6>
              </div>
            </article>
          </Col>
        </Row>
      </section>
    );
  }
}
class Exp extends React.Component {
  render() {
    return (
      <section className="Exp">
        <header className="Intro" class="row">
          <Row><h1>
            <div class="vert-line">Experience Points</div>
          </h1></Row>
        </header>
        <Container fluid>
          <Row>
            <Col className="text" id="text-section">
              <h2>
                Since graduating Liberty Magnet High School, I have worked at
                McDonalds as a Crew Trainer and attended LSU for my bachelors in
                computer science. Outside of work, I spend a lot of my free time
                expanding my knowledge on programming and web development. I
                cooperate well with others, but I also have many independent
                projects of my own. You can check a few of them out underneath my
                <em> ventures</em> tab.
              </h2>
            </Col>
            <Col className="jobs">
              <Row>
                <article className="job1" id="job">
                  <div class="container-md">
                    <h2>
                      McDonalds <br></br> Crew Trainer
                    </h2>
                    <div class="padding-btm">
                      <h4>Oct 2022 - Present </h4>{" "}
                    </div>
                    <p>
                      <div className="text" class="vert-line-p">
                        <h7>
                          As a crew member and trainer I am responsible for
                          restocking products, greeting customers, taking customers
                          orders, bagging orders, working as a cashier, and training
                          new members into properly performing in their position.
                        </h7>
                      </div>
                    </p>
                  </div>
                </article>
              </Row>
              <Row>
                <article className="job2" id="job">
                  <div class="container-md ">
                    <h2>
                      SparkHound <br></br> Intern Developer
                    </h2>
                    <div class="padding-btm">
                      <h4>Oct 2022 - May 2023</h4>
                    </div>
                    <p>
                      <div className="text" class="vert-line-p">
                        <h7>
                          I was tasked with learning and immersing myself with
                          languages such as Angular, ReactJS, C#, and JavaScript, so
                          I could get a good understanding of what languages my
                          coworkers used and how they functioned.
                        </h7>
                      </div>
                    </p>
                  </div>
                </article>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
class Projects extends React.Component {
  render() {
    return (
      <Container fluid>
        <section className="Projects">
          <header>
            <Row>
              <h1>
                <div class="vert-line">My Ventures</div>
              </h1>
            </Row>
          </header>
          <Container>
            <Row>
              <Col><FlipCoin /></Col>
              <Col><TicTacToe /></Col>
              <Col><TicTacToe2 /></Col>
              <Col><Pneuma /></Col>
            </Row>
          </Container>
        </section>
      </Container>

    );
  }
}
class FlipCoin extends React.Component {
  render() {
    return (
      <section id="project">
        <div class="container-md">
          <h2>Flip Coin</h2>
          <div class="padding-btm">
            <h4>C#</h4>
            <p>
              <div className="text" class="vert-line-p">
                <h7>
                  Flip Coin was my first project in C#. The program allowed
                  the player bet virtual money, and guess heads or tails. The
                  reward for accuracy is twice the amount betted.
                </h7>
              </div>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
class TicTacToe extends React.Component {
  render() {
    return (
      <section id="project">
        <div class="container-md">
          <h2>Tic Tac Toe</h2>
          <div class="padding-btm">
            <h4>C#</h4>
            <p>
              <div className="text" class="vert-line-p">
                <h7>
                  Allow the player to mark where they desire and automatically
                  check if they are a winner. This project allowed me to
                  explore how WinForms operates.
                </h7>
              </div>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
class TicTacToe2 extends React.Component {
  render() {
    return (
      <section id="project">
        <div class="container-md">
          <h2>Tic Tac Toe Revamp</h2>
          <div class="padding-btm">
            <h4>AngularJS</h4>
            <p>
              <div className="text" class="vert-line-p">
                <h7>
                  First time using AngularJS and HTML CSS styling. Allowed to
                  modernize TIC TAC TOE by aestheticizing its external
                  features.
                </h7>
              </div>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
class Pneuma extends React.Component {
  render() {
    return (
      <section id="project">
        <div class="container-md">
          <h2>Pneuma</h2>
          <div>
            <h4>JavaScript</h4>
          </div>
          <p>
            <div className="text" class="vert-line-p">
              <h7>
                My senior year in high school, I created an app prototype in
                code.org named Pneuma using JavaScript, a GPS system that
                navigates the user through graveyards to the location of their
                loved ones resting area.
              </h7>
            </div>
          </p>
        </div>
      </section>
    );
  }
}
class Map extends React.Component {
  render() {
    return (
      <div className="router">
        <head>
          <title>Mels Portfolio</title>
        </head>
        <Router>
          <nav>
            <Row className="nav">
              <div className="menu">
                <Dropdown>
                  <Dropdown.Toggle variant="outline" id="dropdown-basic">
                    <Menu color="#ffffff" class="icon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link to="/">
                      <button class="dropdown-item">// about me</button>
                    </Link>
                    <Link to="/skill-level">
                      <button class="dropdown-item">// skill level</button>
                    </Link>
                    <Link to="/exp-points">
                      <button class="dropdown-item">// exp points</button>
                    </Link>
                    <Link to="/ventures">
                      <button class="dropdown-item">// ventures</button>
                    </Link>
                  </Dropdown.Menu>
                  <ButtonGroup className="groupedBtns shift-right" >               
                    <Button variant="outline" id="navBtn">
                      <a href = "https://www.linkedin.com/in/melanie-steiner-811782227/">
                        <Linkedin color="#ffffff" class="icon" />
                      </a>
                    </Button>
                    <Button variant="outline" id="navBtn">
                      <a href = "https://github.com/an-npc">
                      <GitHub color="#ffffff" class="icon" /></a>
                    </Button>
                    <Button variant="outline" id="navBtn">
                      <a href = "https://codesandbox.io/u/an-npc">
                      <Codesandbox color="#ffffff" class="icon" /></a>
                    </Button>
                  </ButtonGroup>
                </Dropdown>
              </div>
            </Row>
            <Routes>
              <Route path="/" element={<AboutMe class="padding-btm" />} />
              <Route
                path="/skill-level"
                element={<Skills class="padding-btm" />}
              />
              <Route path="/exp-points" element={<Exp class="padding-btm" />} />
              <Route
                path="/ventures"
                element={<Projects class="padding-btm" />}
              />
            </Routes>
          </nav>
        </Router>
        <HomeScrn />
      </div>
    );
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
    this.clickedState = this.clickedState.bind(this);
  }

  clickedState() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.clicked ? (<Map />) : (<BeginScrn onClick={this.clickedState} />)}
      </div>
    );
  }
}
