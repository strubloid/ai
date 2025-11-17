import { useState } from 'react';

function Data() {
    
    // state to hold the user data
    const [user, setUser] = useState(null);

    /**
     * Function to fetch data from an API
     */
    const getData = async () => {

        // loading data from an API
        let response = await fetch('https://randomuser.me/api/');

        // getting the json data from the response
        let data = await response.json();

        // logging the data to the console
        // console.log(data);

        // setting the user state to the first result from the data
        setUser(data.results[0]);
    }

    return (
        <div>
            <button onClick={getData}>Fetch Data</button>
            {user ? (
                <p>{user.name.first} {user.name.last} - {user.email}</p>
            ) : (
                <p>Rafael Mendes - rafael@mendes.com</p>
            )}
        </div>
    );
}
export default Data;