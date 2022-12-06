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
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import img1 from '../../img/items/item1.png'
import img2 from '../../img/items/item2.png'
import img3 from '../../img/items/item3.png'
import img4 from '../../img/items/item4.png'
import { Scrollbar } from "smooth-scrollbar-react";


// eslint-disable-next-line
export default () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
      let settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    //   let url=["https://github.com/rheinatamara", "https://www.linkedin.com/in/rheinatamara/"];
return (
    <Scrollbar
        plugins={{
          overscroll: {
            effect: 'glow',
          },
        }}>
    <div className="container">
         
        <div id="header-home" >
            <div className="home-container">
                <Navbar/>
                <section id="header-content">
                    <div className="title">
                        <h1 >Rheina Tamara
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
                    <ul>
                    <li>
                        <Fade right>
                            <div>
                                <h3>Full Stack Developer</h3>
                                <p>
                                    
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                libero provident!

                                </p>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="left-side third-child">
                                <h3> Whitebox ID, Indonesia</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                    eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                    libero provident!
                                </p>
                            </div>
          
                        </Fade>
                    </li>
                    <li>
                        <Fade right>
                            <div>
                                <h3>
                                    Frontend Engineer
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                    eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                    libero provident!
                                </p>
                            </div>
                        </Fade>
                           <Fade left>
                            <div className="left-side second-child">
                                <h3> Prixa.ai, Indonesia</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                    eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                    libero provident!
                                </p>
                            </div>
          
                        </Fade>
                    </li>
                    <li>
                        <Fade right>
                            <div>
                                <h3> Freelance Frontend Developer</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                    eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                    libero provident!
                                </p>
                            </div>
                        </Fade>
                        <Fade left>
                      
                            <div className="left-side third-child"  >
                                <h3> Self-Employed / Freelance, USA</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
                                    eum assumenda architecto, perspiciatis itaque maiores ex rerum
                                    libero provident!
                                </p>
                            </div>
          
                        </Fade>
                            
                    </li>
                  </ul>
                </section>
                <section id="latest-projects" >
                    <h1 className="title">My Latest Projects</h1>
                    <div className="projects" data-cursor-text="Drag">
                        <Slider {...settings}>
                            <div className="group">
                                <img src={img1} alt="" />
                                <p className="sans-serif-font color-light font-thin">Web Design</p>
                                <h6 className="sans-serif-font color-dark font-normal">World Experience</h6>
                            </div>
                            <div  className="group">
                                <img src={img2} alt="" />
                                <p className="sans-serif-font color-light font-thin">Mobile app development</p>
                                <h6 className="sans-serif-font color-dark font-normal">Face the Experience</h6>
                            </div>
                            <div  className="group">
                            <img src={img3} alt="" />
                            <p className="sans-serif-font color-light font-thin">Web Application</p>
                           <h6 className="sans-serif-font color-dark font-normal">Restaurant App</h6>
                            </div>
                            <div  className="group">
                            <img src={img4} alt="" />
                            <p className="sans-serif-font color-light font-thin">Web development</p>
                            <h6 className="sans-serif-font color-dark font-normal">FriendFeed</h6>

                            </div>
                        </Slider>
                    </div>
                   
                </section>
                <section id="testimonials" data-cursor-text="Drag">
                <Slider {...settings2} >
                    <div>
                        <h1 className="title">"Rheina and I work together on several different projects at Prixa.ai, I'm lucky to call her my partner. She consistently gives everything 100 per cent for the team and she's always willing to lend a hand to anyone who needs it. Her ability to overcome challenges with a smile makes her stand out."</h1>
                        <div className="group">
                            <h3>Ibrahim Tarigan</h3>
                            <p>Software Engineer at Delman Data Lab</p>
                        </div>
              
                    </div>
                    <div>
                    <h1 className="title">"Rheina is the best person to work with, always interactive and always being supportive. Working with rheina was a pleasure, always on time for work and very ethical. God job rheina!"</h1>
                        <div className="group">
                        <h3>Wulan Dilla Akpa</h3>
                            <p>Quality Assurance at Blue Bird Group</p>

                        </div>
                       
                    </div>
                   
                </Slider>
                </section>
                <section id="contact">
                <div>
                    <h2 className="title">Contact Me</h2>
                    <p className="lead">Here is how you can reach me</p>
                <form >
                    <div className="text-fields">
                        <input type="text" className="text-input name-input" placeholder="Name" name="name"></input>
                        <input type="text" className="text-input subject-input" placeholder="Subject" name ="subject"></input>
                        <input type="email" className="text-input email-input" placeholder="Email Address" name ="email"></input>
                        <input type="text" className="text-input phone-input" placeholder="Phone" name="phone"></input>
                        <textarea className="text-input message-input" placeholder="Enter Message" name="message"></textarea>
                        </div>
                        <div class="container">
                  
                    <button type="submit" class="button">Submit</button>
                    </div>
                </form>
                </div>

                </section>
                {/* <section id="footer">
                  
                    <p className="sans-serif-font">&copy; 2022 RHEINA. ALL RIGHTS RESERVED</p>
                    <p className="sans-serif-font">RHEINA.TAMARA@OUTLOOK.COM</p>
                    <div className="group">
                    <a href={url[0]} rel="noreferrer noopener" target="_blank"><i class="fab fa-github fa-lg"></i></a>
                    <a href={url[1]} rel="noreferrer noopener" target="_blank"> <i class="fab fa-linkedin fa-lg"></i></a> 
                    </div>
                </section> */}

                
            </div>
        </div>
    </div>
    </Scrollbar>
 )
}