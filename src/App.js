import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Data from "./Data";
// import { SecondUser, User } from "./User";

function App() {
    const name = "Strubloid 2";
    const age = 40;

    const clickMe = () => {
        console.log("You clicked me!");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React YEAH!
                </a>
                <Data />
                {/* <User name={name} age={age} clickMe={clickMe} />
                <SecondUser /> */}
                <Form />
            </header>
        </div>
    );
}

export default App;
