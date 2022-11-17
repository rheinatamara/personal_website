import './Navbar.scss'
import { Link} from 'react-scroll'
// eslint-disable-next-line
export default () => {
    let url=["https://github.com/rheinatamara", "https://www.linkedin.com/in/rheinatamara/"];

    return (
        <div class="navbar">
               <ul>
                    <li className="logo"><p>Rheina</p></li>
                    <li classNane="main-nav">
                        <ul>
                            <li><p><Link activeClass="active" smooth spy to="header-content">ABOUT ME</Link></p></li>
                            <li><p><Link activeClass="active" smooth spy to="work-experience">WORKS</Link></p></li>
                            <li><p><Link activeClass="active" smooth spy to="contact">CONTACT</Link></p></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><a href={url[0]} rel="noreferrer noopener" target="_blank"><i class="fab fa-github fa-lg"></i></a></li>
                            <li> <a href={url[1]} rel="noreferrer noopener" target="_blank"> <i class="fab fa-linkedin fa-lg"></i></a> </li>
                        </ul>
                    </li>
               </ul>
            </div>
    )
}