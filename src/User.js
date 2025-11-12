import { useState } from "react";

function User({ name, age, clickMe }) {
    return (
        <div>
            <h1>User Data Here</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={clickMe}>Click Me</button>
        </div>
    );
}
function SecondUser() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    

    return (
        <div>
            <h1>Second User Data Here</h1>
            <button onClick={increment}>Click Me</button>
            <p>You've clicked the button {count} times.</p>
        </div>
    );
}
export { User, SecondUser };