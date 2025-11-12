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

export default User;