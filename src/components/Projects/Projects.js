import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro4 from "../../Assets/Projects/pro-4.png";
import pro6 from "../../Assets/Projects/pro-6.png";
import pro3 from "../../Assets/Projects/pro-3.png";
import pro1 from "../../Assets/Projects/pro-1.png";
import pro5 from "../../Assets/Projects/pro-5.png";
import pro2 from "../../Assets/Projects/pro-2.png";
import pro7 from "../../Assets/Projects/pro-7.png";
import pro8 from "../../Assets/Projects/pro-8.png";
import pro9 from "../../Assets/Projects/pro-9.png";
import pro10 from "../../Assets/Projects/pro-10.png";
import pro11 from "../../Assets/Projects/pro-11.png";
import pro12 from "../../Assets/Projects/pro-12.png";
import pro13 from "../../Assets/Projects/pro-13.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Xpress-World MEARN STACK APP"
              description="Designed and implemented a robust e-commerce platform featuring  Product Catalog: Displayed a comprehensive catalog of products with detailed descriptions, images, and pricesUser Authentication: Implemented user authentication and authorization systems, allowing users to create accounts, log in ."
              ghLink="https://github.com/FadyFathey/Xpress-Word-Shop"
              demoLink="https://cleverxpress.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="Spotlight-TDMP With Api"
              description="Designed and built a movie website that seamlessly integrates with external APIs to provide users with real-time movie information, including details, ratings, and trailers, enhancing their browsing and selection experience.."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0dehttps://github.com/FadyFathey/spotlight"
              demoLink="https://spotlight-self.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="Full-Authentication-App"
              description=" A secure user authentication system using Firebase, allowing users to sign up, log in, and manage profiles.
              Integrated real-time database and cloud storage features for a seamless user experience.
              Ensured data security and privacy compliance through Firebase's robust authentication and authorization mechanisms"
              ghLink="https://github.com/soumyajit4419/Editor.iohttps://github.com/FadyFathey/Full-Authentication-Crud-app"
              demoLink="https://editor.soumya-jit.tec"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="Booky APP With Open Library "
              description="A book app with Open Library:

              API Integration: Incorporate the Open Library API to access book data, such as titles, authors, and descriptions.
              
              User Interface (UI) Design: Develop a user-friendly interface, including search and book detail screens.."
              ghLink="https://github.com/FadyFathey/booky"
              demoLink="https://booky-mu-mauve.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro11}
              isBlog={false}
              title="Capital Placement Dashboard"
              description="developed this dashboard based on the design from Capital Placement in Figma. It's a user-friendly interface that provides essential insights and tools for efficient data management."
              ghLink="https://github.com/FadyFathey/task2"
              demoLink="https://task2-fady-fathy-capital-palcement.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro7}
              isBlog={false}
              title="NeOz CryptoCurrency website with coingecko Api"
              description="Developed a user-friendly food ordering web application using React.js, enhancing the customer experience and enabling real-time food selection and ordering Collaborated with cross-functional teams to implement responsive design."
              ghLink="https://github.com/FadyFathey/crypto/tree/master"
              demoLink="https://crypto-app-fady-fathy.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro8}
              isBlog={false}
              title="Weather App with OpenWeatherMap"
              description=" Weather App using React.js and integrated the OpenWeatherMap API to provide users with up-to-date weather information and forecasts.
              Designed and developed responsive UI components, enabling users to easily access current weather conditions and forecasts for locations worldwide.."
              ghLink="https://github.com/FadyFathey/weather"
              demoLink="https://weather-amber-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="PRODUCTS MANAGEMENT SYSTEM CRUD-APP"
              description="Create a product management CRUD app using HTML, CSS, and vanilla JavaScript for the frontend and a JSON file for data storage.
              Style the app's user interface with responsive CSS and implement dynamic product manipulation using JavaScript for a simple yet effective product management system.."
              ghLink="https://github.com/FadyFathey/products-mangment-system"
              demoLink="https://fadyfathey.github.io/products-mangment-system/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              isBlog={false}
              title="Fooder App"
              description="Developed a user-friendly food ordering web application using React.js, enhancing the customer experience and enabling real-time food selection and ordering Collaborated with cross-functional teams to implement responsive design."
              ghLink="https://github.com/FadyFathey/fooderApp"
              demoLink="https://fooder-app-mu.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro12}
              isBlog={false}
              title="vr-headset"
              description="Crafted an innovative VR headset website that revolutionizes the way users explore virtual reality"
              ghLink="https://github.com/FadyFathey/vr-HeadSeat"
              demoLink="https://vr-head-seat-69zweoggk-fadyfathey.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro9}
              isBlog={false}
              title="Movie APP with api"
              description="a feature-rich movie database platform that offers users a comprehensive library of films, including details, ratings, and trailers. Seamlessly integrating data from multiple "
              ghLink="https://github.com/FadyFathey/movieDB"
              demoLink="https://movie-db-30e50.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro10}
              isBlog={false}
              title="My Portfolio"
              description="a personal portfolio website showcasing my skills, projects, and achievements using modern web technologies, React Js , And more... .
              Implemented a clean and visually appealing UI/UX design to effectively communicate my professional background, highlight key projects, and provide contact information for potential employers and collaborators."
              ghLink="https://github.com/FadyFathey/Portfolio_Fady_fathey"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro13}
              isBlog={false}
              title="menu-app"
              description="Designed and developed an interactive menu application that enhances the dining experience."
              ghLink="https://github.com/FadyFathey/menue-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
