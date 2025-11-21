import React from "react";
import { useState } from "react";
import '../styles/admission.css';

function Admission() {
    const [fname, setName] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");


    function basics() {
        if (!fname || !lname) {
            return (alert("please fill the details"))

        }

        return (alert(`Hello, my name is ${fname},${lname}.Iam from ${address},${city},${state}  .`))

    }
    return (<><div className="form-wrapper">
        <h1>Admission Form</h1>
        <div className="row g-3">
            <div className="col">
                <input type="text" value={fname} className="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
                <input type="text" value={lname} className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setLname(e.target.value)} />
            </div>

            <div className="col-12">
                address
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="col-md-6">
                city
                <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="col-md-4">
                state
                <select id="inputState" className="form-select" onChange={(e) => setState(e.target.value)}>
                    <option selected>Choose...</option>
                    <option>kerala</option>
                    <option>tamilnadu</option>
                    <option>Ap</option>
                </select>
            </div>


            <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={basics}>Submit</button>
            </div>
        </div>
    </div>

    </>)
}
export default Admission;   