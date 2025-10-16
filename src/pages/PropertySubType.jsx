import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySubType = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const [editSubProperty, setEditSubProperty] = useState("")
    const [editproperty, setEditproperty] = useState("")
    const [editpropertyId, setEditpropertyId] = useState("")
    const [properttypeId, setProperttypeId] = useState("")

    const [property, setProperty] = useState([])
    const [subproperty, setSubProperty] = useState([])
    const [getPropertyId, setGetPropertyId] = useState("")
    const [updateProperty, setUpdateProperty] = useState("")
    const [editId, setEditId] = useState("")
    const [btnStatus, setBtnStatus] = useState("")

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const handlestatus = (e) => {
        console.log(e.target.value, "cjfekrgkjf")
        if (e.target.value == 0) {
            // console.log("ruh")
            setEditpropertyId(1)
        } else {
            setEditpropertyId(0)
        }
    }



    useEffect(() => {
        getData();
        getDataproperty();
    }, [])


    // post data api 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                property_type_id: getPropertyId,
                subtype_name: inputValue,
                status: "1"
            }
            const res = await axios.post("https://api.squarebigha.com/api/add-property-subtype", payload, {
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

    //get data property type
    const getDataproperty = async () => {
        try {
            const response = await axios.get("https://api.squarebigha.com/api/get-property-type", {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (response.data.status) {
                setProperty(response.data.data)
                // console.log("getid", response.data.data)
            }
        } catch (error) {
            console.log("get data", error)
        }
    }

    // get data subtype property  api 

    const getData = async () => {
        try {
            const response = await axios.get("https://api.squarebigha.com/api/get-property-subtype", {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (response.data.status) {
                setSubProperty(response.data.data)
                // console.log(response.data.data, "subtype")
            }
        } catch (error) {
            console.log("get data", error)
        }
    }

    // edit 

    const Editfun = async (id) => {
        openPopup()
        setEditId(id)
        console.log("check id", id)
        try {
            const res = await axios.get(`https://api.squarebigha.com/api/get-property-subtype-byid/${id}`, {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (res.data.status) {
                // console.log(res.data.data, "check value")
                // console.log(res.data.data.property_type, "property_type")
                // console.log(res.data.data.status, "status")
                // console.log(res.data.data.property_type_id, "property id")
                setEditSubProperty(res.data.data.subtype_name)
                setEditproperty(res.data.data.property_type)
                setEditpropertyId(res.data.data.status)
                setProperttypeId(res.data.data.property_type_id)
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
        // console.log("check", btnStatus)


        const payload = {
            id: editId,
            property_type_id: getPropertyId || properttypeId,
            subtype_name: updateProperty || editSubProperty,
            status: editpropertyId
        }
        console.log(payload, "payload")
        try {
            const res = await axios.post("https://api.squarebigha.com/api/update-property-subtype", payload, {
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
                }
            })
            if (res.data.status == 200) {
                // console.log(res.data.message)
                window.location.reload();
            }
            closePopup();
        } catch (error) {
            console.log("upadet data", error)
        }
    }

    const handlechange = (e) => {
        console.log(e.target.value, "cecked it")
        setGetPropertyId(e.target.value)
    }
    console.log("fgvodkgv", property)
    return (
        <>
            {/* <poup section  */}
            <div className="App">



                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <button className="close-btn" onClick={closePopup}>×</button>

                            <h2>{editId ? "Update Your subProperty" : "Enter Your subProperty"}</h2>

                            <form onSubmit={editId ? handleUpdate : handleSubmit}>
                                <select onChange={handlechange}>
                                    <option >{editproperty}</option>
                                    {

                                        property.map((v, k) => (
                                            <option key={k} value={v.id}>{v.type_name}</option>
                                        ))
                                    }

                                </select>
                                <input
                                    type="text"
                                    placeholder={editId ? "Update subProperty" : "Enter subProperty"}
                                    value={editId ? updateProperty || editSubProperty : inputValue}
                                    onChange={(e) =>
                                        editId ? setUpdateProperty(e.target.value) : setInputValue(e.target.value)
                                    }
                                    required
                                />
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn ">{editId ? "Update" : "Submit"}</button>
                                    {editId ? <button type="button" className="btn btn-primary" value={editpropertyId} onClick={handlestatus} >{editpropertyId == 1 ? " Active" : "In Active"}</button> : ""}
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
                                <th>Property</th>
                                <th>Sub-Property</th>

                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subproperty.length === 0 ? (
                                <tr>
                                    <td colSpan="5">No properties available.</td>
                                </tr>
                            ) : (
                                subproperty.map((property, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>

                                        <td>{property.property_type}</td>
                                        <td>{property.property_subtype}</td>
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

export default PropertySubType;
