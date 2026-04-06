import '../styles/sidebar.css';
import { ArrowBigDown,Code,FolderGit,HomeIcon, Mail, User2 } from 'lucide-react';
function Sidebar({animate}) {
  return (
    <nav className="sidebar" style={{ transform: (animate ? 'translate(0%)' : 'translate(-110%)')}}>
        <ul>
          <li><HomeIcon  size='14' color='var(--accent)'/><a href="#home">Home</a></li>
          <li><User2  size='14' color='var(--accent)'/><a href="#about">About</a></li>
          <li><Code  size='14' color='var(--accent)'/><a href="#skills">Skills</a></li>
          <li><FolderGit  size='14' color='var(--accent)'/><a href="#projects">Projects</a></li>
          <li><Mail  size='14' color='var(--accent)'/><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Sidebar;