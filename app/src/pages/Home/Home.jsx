import './Home.scss'
import Navbar from '../../Components/Navbar'
import Typewriter from 'typewriter-effect';

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
                                    strings: ['Front end Dev', 'Artist', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                            }} /> 
                            Based in New York
                        </h1>
                    </div>
                </section>
            </div>
        </div>
    </div>
 )
}