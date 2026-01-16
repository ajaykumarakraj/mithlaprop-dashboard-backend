import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

const AgentList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
const navigate=useNavigate();
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.squarebigha.com/api/get-agent-list?page=${page}`,
        {
          headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiJkMTkxNmNhNjFiNDhiYTk3YWYxOTU3N2MxNWIyZGJhMTMwNmZlZmVjNWE0YzU1ZTJmNmQyYTAyZWU5NjdjNWYwN2NjYmFhYmE2MTA3YWQyNyIsImlhdCI6MTc2NDY2NTU2OS45Mzc4NjQsIm5iZiI6MTc2NDY2NTU2OS45Mzc4NjYsImV4cCI6MTc5NjIwMTU2OS45MzMwNzMsInN1YiI6IjM1Iiwic2NvcGVzIjpbXX0.Gs8Fap_0ywj3CEvMbeePY9Z9plNklTty3YrS4k-5uqT_WQczLbHJmLE-8vVJpzktbOB0EeHL2u3hH8-p6PcyD4r4MYH5TPkExPbOfOQyNMTxcZtuoI2hnrkQVj2hz18R_WD8ztlRnvnsZxRSCG9megGRi10YrK-PJwjl-PTaSxAfvB1n6UrZ_sCm0xhtbS9SXMbdiZuF0NR4_iiI6aLi1YiuxC_uRifnCyUAFrVP4lRFZnrNQlqvyPSqZwJHgtck6uath-d_yTPA7LYu-QASbIC_KwU3nole2eyGWIHOD5aslDanvVQBAbDTDG7tVDj_cyhIYS9GYI2YJ1rX_CZghuRpq08qm9KigYXpnmhxftJURpxs2M53wev7OiETdxJkQQ2J8bmr0dNcoNzcMoTrTy0hSOz17LryyFk9rJCABZxoerwzMmq1OWTtEOk-KPDiv6L6m8u5jXSq4mD__g8edG26k6WfeSmse9xSzMoi4cHF3uo4HM7OATwzUmQT-4x2d5qfsXapajv4EsLbRT3vlJxP1LGUaDUmyC13kB-RryAGbZTRNcMXUdw_eNdZkR2uOrx_OJtRNJa5K-tftfzH6LvoHj69dJK9OiuQVkiqape2n2_-lLdp39PEKdlB43VVMnMqwkU4DUW6VZ34ojPQYJP1DJ9ppZduVKUkwtUY0E4",
          },
        }
      );

      if (res.data.status === 200) {
        console.log("agent list",res.data.data.data)
        setUsers(res.data.data.data);
        setCurrentPage(res.data.data.current_page);
        setLastPage(res.data.data.last_page);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  /* ACTION HANDLERS */
  const viewProfile = (row) => alert(`View profile of ${row.name}`);
//   const viewProperties = (id, property)=>{
//     console.log("check iit",id,property)
//  const  navigation=useNavigate()
//   }
 
//   const activateUser = (row) => alert(`Activated ${row.name}`);
  const changeUserStatus = async(id,status) =>{
    console.log("get id",id,status)
try {
    const res=await axios.get(`https://api.squarebigha.com/api/update-agent-status/${status}/${id}`,{
        headers:{
            Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiJkMTkxNmNhNjFiNDhiYTk3YWYxOTU3N2MxNWIyZGJhMTMwNmZlZmVjNWE0YzU1ZTJmNmQyYTAyZWU5NjdjNWYwN2NjYmFhYmE2MTA3YWQyNyIsImlhdCI6MTc2NDY2NTU2OS45Mzc4NjQsIm5iZiI6MTc2NDY2NTU2OS45Mzc4NjYsImV4cCI6MTc5NjIwMTU2OS45MzMwNzMsInN1YiI6IjM1Iiwic2NvcGVzIjpbXX0.Gs8Fap_0ywj3CEvMbeePY9Z9plNklTty3YrS4k-5uqT_WQczLbHJmLE-8vVJpzktbOB0EeHL2u3hH8-p6PcyD4r4MYH5TPkExPbOfOQyNMTxcZtuoI2hnrkQVj2hz18R_WD8ztlRnvnsZxRSCG9megGRi10YrK-PJwjl-PTaSxAfvB1n6UrZ_sCm0xhtbS9SXMbdiZuF0NR4_iiI6aLi1YiuxC_uRifnCyUAFrVP4lRFZnrNQlqvyPSqZwJHgtck6uath-d_yTPA7LYu-QASbIC_KwU3nole2eyGWIHOD5aslDanvVQBAbDTDG7tVDj_cyhIYS9GYI2YJ1rX_CZghuRpq08qm9KigYXpnmhxftJURpxs2M53wev7OiETdxJkQQ2J8bmr0dNcoNzcMoTrTy0hSOz17LryyFk9rJCABZxoerwzMmq1OWTtEOk-KPDiv6L6m8u5jXSq4mD__g8edG26k6WfeSmse9xSzMoi4cHF3uo4HM7OATwzUmQT-4x2d5qfsXapajv4EsLbRT3vlJxP1LGUaDUmyC13kB-RryAGbZTRNcMXUdw_eNdZkR2uOrx_OJtRNJa5K-tftfzH6LvoHj69dJK9OiuQVkiqape2n2_-lLdp39PEKdlB43VVMnMqwkU4DUW6VZ34ojPQYJP1DJ9ppZduVKUkwtUY0E4"
        }
    })
    if(res.data.status==200){
        window.location.reload();

    }
    console.log("api response",res.data.status)
} catch (error) {
    console.log(error)
}


  }




  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Agent List</h5>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0 text-center align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>User Type</th>
                
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="8" className="py-4">
                      Loading...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-muted py-4">
                      No data found
                    </td>
                  </tr>
                ) : (
                  users.map((u, i) => (
                    <tr key={u.id}>
                      <td>{i + 1}</td>
                      <td className="fw-semibold">{u.name}</td>
                      <td>{u.phone}</td>
                      <td>{u.city}</td>
                      <td>
                        <span className="badge bg-info text-dark">
                          {u.user_type}
                        </span>
                      </td>
                
                      <td>
                        <span
                          className={`badge ${
                            u.user_status === "1"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {u.user_status === "1" ? "Active" : "Inactive"}
                        </span>
                      </td>

                      {/* ACTION DROPDOWN */}
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <ul className="dropdown-menu shadow-sm border-0">
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => viewProfile(u)}
                              >
                                👤 Profile
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                onClick={() => navigate(`agent-property-list/${u.id}`)}
                              >
                                🏢 Properties
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item text-success"
                                onClick={(id) => changeUserStatus(u.id,1)}
                              >
                                ✅ Activate
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item text-danger"
                                onClick={(id) => changeUserStatus(u.id,0)}
                              >
                                ❌ Inactivate
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* NUMBER PAGINATION */}
      {lastPage > 1 && (
  <div className="card-footer">
    <ul className="pagination justify-content-center mb-0">

      {/* PREVIOUS */}
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹ Prev
        </button>
      </li>

      {/* PAGE NUMBERS */}
      {Array.from({ length: lastPage }, (_, i) => (
        <li
          key={i}
          className={`page-item ${
            currentPage === i + 1 ? "active" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}

      {/* NEXT */}
      <li
        className={`page-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          Next ›
        </button>
      </li>

    </ul>
  </div>
)}

      </div>
    </div>
  );
};

export default AgentList;
