import { useState } from "react";

function AddStudent({ addStudentFun }) {

    const [student, setstudent] = useState({ name: "", age: "", email: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudentFun(student)
        setstudent({ name: "", age: "", email: "" })
    }
    const handleChange = (event) => {

        const { name, value } = event.target;
        setstudent((oldstudent) => ({ ...oldstudent, [name]: value }))
    }
    return (
        <div className="container m-auto mb-3  mt-2 p-3 border rounded ">
            <h2 className="text-primary"> Regestration</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Name : </label>
                    <input className="form-control w-50" type='text' name="name" value={student.name} onChange={handleChange}></input>
                </div>

                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Age : </label>
                    <input className="form-control w-50" type='text' name="age" value={student.age} onChange={handleChange}></input>
                </div>
                <div className="form-group m-3 p-2 row">
                    <label className="w-25">Email : </label>
                    <input className="form-control w-50" type='text' name="email" value={student.email} onChange={handleChange}></input>
                </div>
                <input className="btn btn-primary" type='submit' value="Add"></input>
            </form>        </div>
    );
}

export default AddStudent;