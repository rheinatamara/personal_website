import './Home.scss'
import Navbar from '../../Components/Navbar'
import Typewriter from 'typewriter-effect';
import myPhoto from '../../img/me.jpeg'
import js from '../../img/js.png'
import sass from '../../img/sass.png'
import vue from '../../img/vue.png'
import react from '../../img/react.png'
import node from '../../img/node.png'
import html from '../../img/html.png'
import figma from '../../img/figma.png'
import css from '../../img/css.png'
// import { ReactComponent as Background } from '../../img/background.svg';
// eslint-disable-next-line
export default () => {
   
return (
    <div>
        <div id="header-home">
            <div className="container">
                <Navbar/>
                <section id="header-content">
                    <div className="title">
                        <h1>Rheina Tamara
                        <Typewriter options={{
                                    strings: ['Front end Developer', 'Artist', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                            }} /> 
                            Based in New York
                        </h1>
                    </div>
                    <div className="background-pattern"/>
                    <div className="background-pattern-2"/>
                    <div className="content">
                        <div className="left-side-content">
                            <ul>
                                <li><p className="sans-serif-font bold secondary-color font-small">ABOUT ME</p></li>
                                <li><p className="bold">I specialize in crafting user interfaces using modern frontend web technologies</p></li>
                            </ul>
                            <ul>
                            <li className="services">
                                <p className="sans-serif-font bold secondary-color font-small">SERVICES</p></li>

                                <div className="services-items">
                                    <ul>
                                        <li><p className="bold">Frontend Development</p></li>
                                        <li><p className="bold">Frontend Layouts</p></li>
                                        <li><p className="bold">Web Design</p></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        
                        <div className="photo">
                            <img src={myPhoto} alt="" />
                        </div>
                        
                        <div className="right-side-content">
                            <ul>
                                <li><p className="sans-serif-font bold secondary-color font-small">YEARS OF EXPERIENCE</p></li>
                                <li><p className="bold font-large">1</p></li>
                            </ul>
                            <ul>
                            <li><p className="sans-serif-font bold secondary-color font-small">CONTACT</p></li>
                            <div className="contact">
                                <ul>
                                    <li><p className="bold">rheina.tamara@outlook.com</p></li>
                                    <li><p className="bold">NY, United states, 10004</p></li>
                                    <li><p className="bold">+1 (845) 182 1722</p></li>
                                </ul>
                                
                            </div>
                               
                            </ul>
                            <ul className="resume-button">
                            <li><p className="sans-serif-font bold secondary-color font-small">MY RESUME</p></li>
                                <li> <p className="bold">Click to Download</p></li>
                            </ul>
                        </div>
                       
                    </div>
                </section>
                <section id="technical-skills">
                    <h1 className="title">My Technical Skills</h1>
                        <div className="skills">
                            <div className="js">
                                <img src={js} alt="" />
                                <p>Javascript</p>
                            </div>
                            <div className="sass">
                                <img src={sass} alt="" />
                                <p>SASS/SCSS</p>
                            </div>
                            <div className="css">
                                <img src={css} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className="html">
                                <img src={html} alt="" />
                                <p>HTML5</p>
                            </div>
                            <div className="react">
                                <img src={react} alt="" />
                                <p>React</p>
                            </div>
                            <div className="vue">
                                <img src={vue} alt="" />
                                <p>Vue</p>
                            </div>
                            <div className="node">
                                <img src={node} alt="" />
                                <p>Node JS</p>
                            </div>
                            <div className="figma">
                                <img src={figma} alt="" />
                                <p>Figma</p>
                            </div>
                        </div>
                </section>
                <section id="work-experience">
                    <h1 className="title">My Work Experience</h1>
                </section>
            </div>
        </div>
    </div>
 )
}