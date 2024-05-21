import Navbar from "./nav";


export default function Project() {


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="ml-4 pl-5 is-size-3 has-text-white">PROJECTS</h1>
            <div className="fixed-grid m-4">
                <div className="grid p-5">
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/mochimogu/portfolio"><h1 className="is-size-4 has-text-info">PORTFOLIO</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">CSS</span>
                                    <span class="tag">React JS</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/mochimogu/DictionaryApp" ><h1 className="is-size-4 has-text-info">DICTIONARY APP</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">Javascript</span>
                                    <span class="tag">CSS</span>
                                    <span class="tag">React JS</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/csci5117s24/project-1-teamone"><h1 className="is-size-4 has-text-info">ANIMAL WIKI</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">Javascript</span>
                                    <span class="tag">Pure CSS</span>
                                    <span class="tag">Python Flask</span>
                                    <span class="tag">Jinja</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/mochimogu/MovieList-App"><h1 className="is-size-4 has-text-info">MOVIELIST-APP</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">Javascript</span>
                                    <span class="tag">CSS</span>
                                    <span class="tag">HTML</span>
                                    <span class="tag">PUG</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/mochimogu/Simple-Reverse-String-With-JSwing"><h1 className="is-size-4 has-text-info">STRING REVERSE JSWING</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">Java</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card mb-3 p-4">
                        <a href="https://github.com/mochimogu/Air-Quality-Index-Search"><h1 className="is-size-4 has-text-info">AIR QUALITY INDEX</h1></a>
                        <ul>
                            <li className="pt-3">
                                <div class="tags">
                                    <span class="tag">Javascript</span>
                                    <span class="tag">CSS</span>
                                    <span class="tag">React JS</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

