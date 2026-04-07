import { LightbulbIcon, ListChevronsDownUp, ListTodo } from 'lucide-react';
import '../styles/project.css';

function Project(){
    const projects = [
                       
        {
            type:'Frontend',
            title:'To Do List',
            description:'This project is developed using frontend framework to experience crud operation.',
            skill:['ReactJS','LocalStorage','Crud'],
            features:['animation-css','lucide-icons'],
            codeLink : 'https://github.com/mudasir687abbas/todolist.git',
            demoLink:'https://todolist-delta-indol.vercel.app'
        },                
        {
            type:'Frontend',
            title:'Portfolio Website',
            description:'it is simple modern responsive frontent and animated website',
            skill:['ReactJS'],
            features:['animated-css',],
            codeLink : 'https://github.com/mudasir687abbas/mudasir_portfolio.git',
            demoLink:'https://mudasir-portfolio-liard.vercel.app/'
        }     ,   
        {
            type:'Frontend',
            title:'Tic-Tac-Toe Game',
            description:'it is simple modern responsive frontent and animated website',
            skill:['ReactJS'],
            features:['animated-css','real-time turn player','wining-drawing'],
            codeLink : 'https://github.com/mudasir687abbas/mtictactoe_game.git',
            demoLink:'https://mtictactoe-game.vercel.app/'
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
                              <a href={item.codeLink} target='_blank' className='project-btn'>View Code</a>
                              <a href={item.demoLink} target='_blank' className='project-btn'>Online Demo</a>
                             </div>
                         </div>
                      ))}
                        
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Project;