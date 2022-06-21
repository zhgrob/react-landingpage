import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <header id="home">
      
            <nav id="nav-wrap">
               <ul id="navv" className="navv">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#internships">Internships</a></li>
                  <li><a className="smoothscroll" href="#skills">Skills</a></li>
                  <li><a className="smoothscroll" href="#projects">Projects</a></li>
                  <li><a className="smoothscroll" href="#photography">Photography</a></li>
               </ul>
      
            </nav>
      
            <div className="row banner">
               <div className="banner-text">
                  <h1>Borgh Bataclan</h1>
                  <span id="introSub">Third year IT student at the Pamantasan ng Lungsod ng Muntinlupa</span>
                  <hr />
               </div>
            </div>
      
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
      
         </header>
          );
        }
      }
      
export default NavBar;



