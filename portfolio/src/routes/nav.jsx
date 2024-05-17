



export default function Navbar() {

    return (
        <div className="box">
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"
                />
            </div>
            <div>
                <nav className="navbar has-text-white">
                    <div className="navbar-start">
                        <a href="/"><h1 className="navbar-item is-size-2 ml-3 pl-1">MOUACHEE THAO</h1></a>
                    </div>
                    <div className="navbar-end has-text-white mr-6">
                        <a href="/aboutMe" className="navbar-item">Who Am I?</a>
                        <a href="/project" className="navbar-item">Personal Project</a>
                        <a href="/contact" className="navbar-item">Contact</a>
                    </div>
                </nav>
            </div>
        </div>

    )


}


