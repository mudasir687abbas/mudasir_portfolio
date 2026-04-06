import '../styles/skill.css';

function Skill(){
    let skillObj = [
        {title:'Frontend Skills',skills:'HTML5|CSS3|JS|ReactJs'},
        {title:'Backend Skills',skills:'NodeJs|ExpressJs|Authentication'},
        {title:'Database',skills:'MySQL|MongoDB|Database Design'},
        {title:'Tools',skills:'Vscode|Git|GitHub'},
        
    ]
    return(
      <section className='skill-section' id='skills'>
        <div className='skill-container'>
            <h1>Skills</h1>
            <div className='skill-div'>
              <div className='skill-cards'>
               {skillObj.map((item,index)=>
                (<div className='skill-card'>
                    <h2>{item.title}</h2>
                    <p>{item.skills}</p>
                </div>))
                }
              </div>
            </div>
        </div>
      </section>
    )
}
export default Skill;