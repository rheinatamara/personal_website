import './Navbar.scss'
import { Link} from 'react-scroll'
// eslint-disable-next-line
export default () => {
    let url=["https://github.com/rheinatamara", "https://www.linkedin.com/in/rheinatamara/"];

    return (
        <div class="navbar">
               <ul>
                    <li class="logo"><p>Rheina</p></li>
                    <li>
                        <ul>
                            <li><p><Link activeClass="active" smooth spy to="header-content">About Me</Link></p></li>
                            <li><p><Link activeClass="active" smooth spy to="works">Works</Link></p></li>
                            <li><p><Link activeClass="active" smooth spy to="contact">Contact</Link></p></li>
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