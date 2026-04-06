import '../styles/about.css';
import image from '../assets/mudasir.jpg';
function About() {
    return (
      <section className="about-section" id="about">  
        <div className="about-container">
            <h1 className="title"> About Me </h1>
          <div className="about-content">
            <div>
              <div className="about-image">
                <img src={image} alt="Profile" />
              </div>
              <div className="about-text">
                <p>
                  I am a passionate and dedicated software developer with a strong background in web development. I have experience working with various programming languages and frameworks, and I am always eager to learn new technologies. My goal is to create efficient and user-friendly applications that solve real-world problems. I am a team player who enjoys collaborating with others to achieve common goals, and I am committed to delivering high-quality work in every project I undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } 

export default About;