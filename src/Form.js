import { useState } from "react";
import './Form.css'

function Form() {
    const [form, setForm] = useState({
        pregnancies: "",
        glucose: "",
        blood_presure: "",
        skin_thickness: "",
        insulin_level: "",
        bmi: "",
        diabetes_pedigree: "",
        age: "",
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors

        const form_data = new FormData();
        form_data.append("pregnancies", form.pregnancies);
        form_data.append("glucose", form.glucose);
        form_data.append("blood_presure", form.blood_presure);
        form_data.append("skin_thickness", form.skin_thickness);
        form_data.append("insulin_level", form.insulin_level);
        form_data.append("bmi", form.bmi);
        form_data.append("diabetes_pedigree", form.diabetes_pedigree);
        form_data.append("age", form.age);

        // changing loading state
        setLoading(true);

        console.log("Submitting form data...");
        // Log the form data entries to see what's being sent
        for (let pair of form_data.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

        try {
            // Fixed: changed https to http for localhost
            let response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                body: form_data,
            });

            // getting the json data from the response
            // let data = await response.json(

            // setting the result state
            setResult(await response.text());
        } catch (err) {
            console.error("Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // function to clear the prediction result
    const handlerClear = () => {
        // clearing the form state
        setForm({
            pregnancies: "",
            glucose: "",
            blood_presure: "",
            skin_thickness: "",
            insulin_level: "",
            bmi: "",
            diabetes_pedigree: "",
            age: "",
        });

        // Clearing the result
        setResult("");

        // Clearing any existing errors
        setError(null);
    };

    const onChange = (e) => {
        // this will get the name and value of the input that triggered the change
        const name = e.target.name;
        const value = e.target.value;

        // this will update the form state
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Diabetes Prediction Model</h4>
                <p>Example to Predict Probability of Diabetes</p>
                <input type="number" name="pregnancies" onChange={onChange} value={form.pregnancies} placeholder="Number of Pregnancies" required />
                <input type="number" name="glucose" onChange={onChange} value={form.glucose} placeholder="Glucose level in Sugar" required />
                <input type="number" name="blood_presure" onChange={onChange} value={form.blood_presure} placeholder="Blood Presure" required />
                <input type="number" name="skin_thickness" onChange={onChange} value={form.skin_thickness} placeholder="Skin Thickness" required />
                <input type="number" name="insulin_level" onChange={onChange} value={form.insulin_level} placeholder="Insulin Level" required />
                <input type="number" name="bmi" onChange={onChange} value={form.bmi} placeholder="Body Mass Index (BMI)" required />
                <input type="number" name="diabetes_pedigree" onChange={onChange} value={form.diabetes_pedigree} placeholder="Diabetes Pedigree Function" required />
                <input type="number" name="age" onChange={onChange} value={form.age} placeholder="Age" required />
                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Submit Form"}
                </button>
            </form>

            {error && (
                <div style={{ color: "red" }}>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}

            {result && <span onClick={handlerClear}>Clear Prediction</span>}

            {result && (
                <div>
                    <h3>Prediction Result:</h3>
                    <div className="result" dangerouslySetInnerHTML={{ __html: result }}></div>
                    {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
                </div>
            )}
        </div>
    );
}
export default Form;
