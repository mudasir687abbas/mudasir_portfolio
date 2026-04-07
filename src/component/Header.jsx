import { useState } from 'react';
import '../styles/header.css';
import Sidebar from './Sidebar';
import { ArrowBigDown,Code,FolderGit,HomeIcon, Mail, User2 } from 'lucide-react';
function Home() {
  const [isShowMenu,setShowMenu] =  useState(false); 
  return (
   <header>
    <a href="#home" className="logo">
      <div className="logo-name">Mudasir Abbas</div>
      <div className="logo-sub">MERN Stack Developer</div>
    </a>
    <ArrowBigDown className='hamburg' style={{rotate: isShowMenu ? '0deg':'-90deg'}} size='35' onClick={()=>{setShowMenu(!isShowMenu)}}/>
    <nav>
      <ul className="nav-links">
        <li><HomeIcon  size='14' color='var(--accent)'/><a href="#home">Home</a></li>
        <li><User2  size='14' color='var(--accent)'/><a href="#about">About</a></li>
        <li><Code  size='14' color='var(--accent)'/><a href="#skills">Skills</a></li>
        <li><FolderGit size='14' color='var(--accent)'/><a href="#projects">Projects</a></li>
        <li><Mail  size='14' color='var(--accent)'/><a href="#contact">Contact</a></li>
      </ul>
    </nav>
     <Sidebar animate={isShowMenu}/>
  </header>
  )
}
export default Home;