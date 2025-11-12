import { useState } from "react";

function Form() {

    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(form);
    };

    const onChange = (e) => {
        e.preventDefault();

        // this will get the name and value of the input that triggered the change
        const name = e.target.name;
        const value = e.target.value;

        // this will update the form state
        setForm({...form,[name]: value})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={onChange} placeholder="Name (e.g. Rafael)" />
            <input type="text" name="email" onChange={onChange} placeholder="Email (e.g. rafael@example.com)" />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;
