import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AmenitiesType = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [editAmenities, setEditAmenities] = useState("")
    const [amenities, setAmenities] = useState([])
    const [updateAmenities, setUpdateAmenities] = useState("")
    const [editId, setEditId] = useState("")
    const [btnStatus, setBtnStatus] = useState(1)
    const [propertystatus, setPropertystatus] = useState("")
    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const handlestatus = (e) => {
        console.log(e.target.value, "check value")
        if (e.target.value == 0) {
            setPropertystatus(1)
        } else {
            setPropertystatus(0)
        }
    }



    useEffect(() => {
        getData();
    }, [])


    // post data api 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name: inputValue
            }
            const res = await axios.post("https://api.squarebigha.com/api/add-aminity", payload, {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (res.data.status) {
                console.log(res.data.message)
                closePopup();
                window.location.reload();
            }
        } catch (error) {
            console.log("post data error", error)
        }



    };


    // get data api 

    const getData = async () => {
        try {
            const response = await axios.get("https://api.squarebigha.com/api/get-aminity", {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (response.data.status) {
                setAmenities(response.data.data)
            }
        } catch (error) {
            console.log("get data", error)
        }
    }

    // edit 

    const Editfun = async (id) => {
        openPopup()
        setEditId(id)
        console.log(id)
        try {
            const res = await axios.get(`https://api.squarebigha.com/api/get-aminity-byid/${id}`, {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (res.data.status) {
                console.log(res.data.data.name)
                console.log(res.data.data.status)
                setPropertystatus(res.data.data.status)
                setEditAmenities(res.data.data.name)
            }
        } catch (error) {
            console.log("edit api ", error)
        }
    }


    // update api 
    // console.log("check", btnStatus)
    const handleUpdate = async (e) => {
        e.preventDefault();
        // setEditId(id)
        console.log("check", btnStatus)
        const payload = {
            id: editId,
            name: updateAmenities || editAmenities,
            status: propertystatus
        }
        console.log(payload, "payload")
        try {
            const res = await axios.post("https://api.squarebigha.com/api/update-aminity", payload, {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (res.data.status == 200) {
                console.log(res.data.message)
                window.location.reload();
            }
            closePopup();
        } catch (error) {
            console.log("upadet data", error)
        }
    }


    console.log("fgvodkgv", amenities)
    return (
        <>
            {/* <poup section  */}
            <div className="App">



                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <button className="close-btn" onClick={closePopup}>×</button>

                            <h2>{editId ? "Update Your Amenities" : "Enter Your Amenities"}</h2>

                            <form onSubmit={editId ? handleUpdate : handleSubmit}>
                                <input
                                    type="text"
                                    placeholder={editId ? "Update Amenities" : "Enter Amenities"}
                                    value={editId ? updateAmenities || editAmenities : inputValue}
                                    onChange={(e) =>
                                        editId ? setUpdateAmenities(e.target.value) : setInputValue(e.target.value)
                                    }
                                    required
                                />
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn ">{editId ? "Update" : "Submit"}</button>
                                    {editId ? <button type="button" className="btn btn-primary" value={propertystatus} onClick={handlestatus} >{propertystatus == 0 ? "In Active" : "Active"}</button> : ""}
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div >

            {/* container section */}
            < div className="container mt-4" >
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Manage Properties</h3>
                    <button
                        className="btn btn-primary d-flex align-items-center gap-2"
                        onClick={() => setShowPopup(true)}
                    >
                        ➕ <span>Add Property</span>
                    </button>
                </div>

                <div>
                    <table className="table  table-hover align-middle text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {amenities.length === 0 ? (
                                <tr>
                                    <td colSpan="4">No properties available.</td>
                                </tr>
                            ) : (
                                amenities.map((property, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{property.name}</td>
                                        <td value={property.status} ><span className="statusbtn" style={{ backgroundColor: property.status == 0 ? "#dc3545" : "#198754", }}>{property.status == 1 ? "Active" : "Inactive"}</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-sm btn-outline-secondary statusbtnEdit"
                                                    type="button"
                                                    onClick={() => Editfun(property.id)}
                                                // data-bs-toggle="dropdown"
                                                // aria-expanded="false"
                                                >
                                                    ✏️ <span>Edit</span>
                                                </button>
                                                {/* <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                                                    <li>
                                                        <button
                                                            className="dropdown-item d-flex align-items-center gap-1"
                                                            // onClick={() => alert(`Edit ${property.name}`)}
                                                            onClick={() => Editfun(property.id)}
                                                        >
                                                            ✏️ <span>Edit</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dropdown-item d-flex align-items-center gap-1"
                                                            onClick={() => navigate(`/property/${property.id}`)}
                                                        >
                                                            ✅ <span>Active</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dropdown-item d-flex align-items-center gap-1 text-danger"
                                                            onClick={() => handleDelete(property.id)}
                                                        >
                                                            ❌ <span>In Active</span>
                                                        </button>
                                                    </li>
                                                </ul> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default AmenitiesType;
