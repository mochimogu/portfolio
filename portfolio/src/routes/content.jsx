import Navbar from "./nav";
import image from './images/_DSC7827 (1).jpg'


export default function Content() {


    return (
        <div>
            <Navbar></Navbar>
            <div className="columns m-4">
                <div className="column">
                    <figure class="image is-1by1">
                        <img src={image} alt="image"/>
                    </figure>
                </div>
                <div className="column is-flex is-flex-direction-column is-justify-content-space-around">
                    <section class="hero is-info">
                        <div class="hero-body">
                            <p class="title">Who is Mouachee?</p>
                            <p class="subtitle">
                                My name is Mouachee Thao. I am a recent graduate from the University of Minnesota Twin Cities, 
                                Class of 2024. I am currently seeking an entry-level software developer job to build my work exeperience.
                            </p>
                        </div>
                    </section>
                    <section class="hero is-info">
                        <div class="hero-body">
                            <p class="title">About Me</p>
                            <p class="subtitle">
                                On my free time, I enjoy taking picture and videos of anything I see interesting. I love creating and building things
                                and enjoy collaborating. I am a flexible, adaptive, and patient person who wants to enjoy life and his 20s.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Year of Graduate</p>
                            <p class="title">2024</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Experience</p>
                            <p class="title">Entry-Level</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Skills</p>
                            <p class="title">Full-Stack Developer</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Coding Languages</p>
                            <p class="title">3+</p>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="columns">
                <div className="column">
                    <h1 className="is-size-3 ml-4 pt-5 pl-3">CODING LANGUAGES</h1>
                    <div className="grid ml-5 pt-5 pb-5">
                        <div className="cell">
                            <span className="tag is-size-4">C/C++</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">JavaScript</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">HTML</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">CSS</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">React JS</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Node JS</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Python</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Java</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Git/Github</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Postgres</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">MySQL</span>
                        </div>
                        <div className="cell">
                            <span className="tag is-size-4">Azure</span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div>
                    <h1 className="is-size-3 pt-4">LINKS</h1>
                    <div>
                        LINKS
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



