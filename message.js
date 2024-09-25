// arrow function
const message = () => {
    const question = "Personal Information";
    const name = "Gilbert Palari";
    const age = "22 years old";
    const status = "Single";
    const major = "Informatika";
    const faculty = "Computer Science";
    const address = "Palu";
    const interests = "Programmer, AI";

    // gunakan backticks (`)
    return `
    <h2 style="text-align: center;">${question}</h2>
    <hr style="border: 1px solid black;"></hr>
    <ul style="list-style-type:none; padding: 0;">
        <p style="text-align: center;"><strong>Name:</strong>${name}</p>
        <p style="text-align: center;"><strong>Age:</strong>${age}</p>
        <p style="text-align: center;"><strong>Status:</strong>${status}</p>
        <p style="text-align: center;"><strong>Major:</strong>${major}</p>
        <p style="text-align: center;"><strong>Faculty:</strong>${faculty}</p>
        <p style="text-align: center;"><strong>Address:</strong>${address}</p>
        <p style="text-align: center;"><strong>Interests:</strong>${interests}</p>
    </ul>
    `;
}

//export
export default message;