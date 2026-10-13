import { React, use, useState } from "react";
import './Project.css'

const Project = () => {

    const [form, setForm] = useState(
        {
            id: 0,
            name: "",
            age: 0,
            department: "",
            marks: 0
        }
    );
    const [value, setValue] = useState(
        {
            id: 1,
            name: "lokesh",
            age: 21,
            department: "MCA",
            marks: 90
        }
    );

    //   const value ={
    //         id: 1,
    //         name: "lokesh",
    //         age: 21,
    //         department: "MCA",
    //         marks: 90
    //     }

    function change(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value


        })

    }
    function submit(event) {
        event.preventDefault();
        setForm(
            {
                ...form,
                name: value.name,
                age: value.age
            }
        )
    }
    return (
        <div >

            {form.name}
            {form.age}

            <form onSubmit={submit}>
                <label>Name</label> <br /> <input onChange={change} name={"name"} placeholder="Enter Your name" /><br />
                <label>Email</label> <br /> <input /><br />
                <label>Age</label>  <br /> <input onChange={change} name={"age"} /><br />
                <button type="submit">Submit</button>
            </form>



        </div >


    )
}
export default Project