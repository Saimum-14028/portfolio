import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/education">
            Education
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/md-amir-al-fahim-786a4a121/" target="_blank"><LinkedInIcon></LinkedInIcon></a>
          <a href="https://github.com/Saimum-14028" target="_blank"><GitHubIcon></GitHubIcon></a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
      </footer>
    );
};

export default Footer;

