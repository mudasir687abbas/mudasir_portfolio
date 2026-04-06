import { LightbulbIcon, ListChevronsDownUp, ListTodo } from 'lucide-react';
import '../styles/project.css';

function Project(){
    const projects = [
       
        {
            type:'Frontend',
            title:'Simple Calculator',
            description:'It is firest ever project in journy of Web Development',
            skill:['HTML','CSS-Grid','JS'],
            features:['basic math-operation'],
            codeLink : '#',
            demoLink:'#'
        },                
        {
            type:'Frontend',
            title:'To Do List',
            description:'This project is developed using frontend framework to experience crud operation.',
            skill:['ReactJS','LocalStorage','Crud'],
            features:['animation-css','lucide-icons'],
            codeLink : '#',
            demoLink:'#'
        },                
        {
            type:'Frontend',
            title:'Portfolio Website',
            description:'it is simple modern responsive frontent and animated website',
            skill:['ReactJS'],
            features:['animated-css',],
            codeLink : '#',
            demoLink:'#'
        }     ,   
        {
            type:'Frontend',
            title:'Tic-Tac-Toe Game',
            description:'it is simple modern responsive frontent and animated website',
            skill:['ReactJS'],
            features:['animated-css','tokken selection','wining-drawing'],
            codeLink : '#',
            demoLink:'#'
        }     ,
        {
            type:'Frontend-Backend',
            title:'Login-Logout-Portal',
            description:'It is MERN project featured with authentication,sign-signup logics, how they work.',
            skill:['ReactJS','ExpressJs','MongoDB'],
            features:['jwt','context-api'],
            codeLink : '#',
            demoLink:'#'
        }        
    ]
    return(
        <section className='project-section' id='projects'>
            <div className='project-container'>
                <h1 className='project-title'>Projects</h1>
                <div className='project-cards'>
                      {projects.map((item,index)=>(
                          <div className='project-card'>
                            <h5>{item.type}</h5>
                            <ListChevronsDownUp size='50'/>
                             <h2>{item.title}</h2>
                             <p>{item.description}</p>
                             <div className='project-skills-used'>
                                {item.skill.map((tool)=><span >{tool}</span>)}
                             </div>
                             <div className='project-features-used'>
                                {item.features.map((f)=><span >{f}</span>)}
                             </div>
                            <div className='project-btns'>
                              <span>View Code</span>
                              <span>Online Demo</span>
                             </div>
                         </div>
                      ))}
                        
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Project;