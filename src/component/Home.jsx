import '../styles/home.css';
function Home() {   
    return(
        <section className="home" id="home">
          <div className='home-content-container'>
            <div className="home-content">
                <p className='greeting-text'>Hi, I'm</p>
                <h1>Mudasir Abbas</h1>
                <h5>Mern Stack Developer</h5>
                <p className='description'>a passionate MERN Stack Developer who can build modern web applications.</p>
                <div className='btn-container'>
                <a href="#contact" className="btn">Contact Me</a>
                <a href="#projects" className="btn">View My Work</a>
                </div>
            </div>
          </div>
        </section>
    );
}    
export default Home;