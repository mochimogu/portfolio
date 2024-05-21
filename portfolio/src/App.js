import Navbar from "./routes/nav";
import image from './routes/images/_DSC9907.jpg'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="columns">
        <div className="column">
          <section className="section is-medium">
            <h1 className="title is-2">WELCOME!</h1>
            <h2 className="subtitle pt-4 has-text-justified">
              Hello there! My name is Mouachee Thao. I graduated from the University of Minnesota Twin Cities, Class of 2024. This is
              my personal website hoping to reach different people and new opprotunities. 
            </h2>
            <h2 className="subtitle pt-2 has-text-justified">
              A software developer in the making! Spealizes in full-stack development. Feel free to get into touch with me. Click on the button below
              for any contact information.
            </h2>
            <a href="/contact"><button className="button is-primary is-medium">Contact Me</button></a>
          </section>
        </div>
        <div className="column is-flex">
          <img src={image} style={{
            width: "55%",
            height: "600px",
            margin : "auto",
            borderRadius : "10px"
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
