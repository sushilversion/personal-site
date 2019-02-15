import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sushil Ramesh Pandey</h2>
        <p><a href="mailto:pandey.sushil@hotmail.com">pandey.sushil@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sushil. I like building things.
            I am a <a href="https://mu.ac.in">Mumbai University</a> graduate, MET College Alumni, and
            the full stack developer at <a href="http://capgemini.com">Capgemini</a>. 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Sushil &apos;Pandey <Link to="/">skpandey.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
