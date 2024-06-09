import React, { useState } from 'react'
import NavBar from './NavBar'

const AddFisat = () => {
    const [data, setdata] = useState(
        {
            "id": "",
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": " ",
            "mobile": "",
            "course": "",
            "email": "",
            "address": ""
        }
    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue=()=>{
        console.log(data)
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputhandler} />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">firstname
                                </label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputhandler} />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">lastname</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputhandler} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 col-12 col-lg-12 colxl-12 col-xxl-12">
                                <label htmlFor="" className="form label">college</label>
                                <textarea name="college" id="" className="form-control" value={data.college} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">DOB</label>
                                <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputhandler} />

                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">course</label>
                                <select name="course" id="" className="form-control" value={data.course} onChange={inputhandler}>
                                    <option value="mca">mca</option>
                                    <option value="mba">mba</option>
                                    <option value="acca">acca</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputhandler} />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <label htmlFor="" className="form label">email</label>
                                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputhandler} />

                            </div>
                            <div className="col-12 col-md-12 col-lg-12 col-12 col-lg-12 colxl-12 col-xxl-12">
                                <label htmlFor="" className="form label">address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-6 col-lg-6 colxl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalue}>register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFisat