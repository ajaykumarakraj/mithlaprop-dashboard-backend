// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const Table = ({
//   data = [],
//   columns = [],
//   actions = [],
//   pagination = null,
//   onPageChange = () => {},
// }) => {
//   return (
//     <div className="container mt-2">
//       <div className="card shadow-sm border-0">
//         <div className="card-body">

//           {/* TABLE */}
//           <div className="table-responsive">
//             <table className="table table-striped table-hover align-middle text-center">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   {columns.map((col) => (
//                     <th key={col.key}>{col.label}</th>
//                   ))}
//                   {actions.length > 0 && <th>Actions</th>}
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={columns.length + 2}
//                       className="text-muted py-4"
//                     >
//                       No records found.
//                     </td>
//                   </tr>
//                 ) : (
//                   data.map((row, index) => (
//                     <tr key={row.id || index}>
//                       <td>{row.id}</td>

//                       {columns.map((col) => (
//                         <td key={col.key}>{row[col.key]}</td>
                        
//                       ))}

//                       {actions.length > 0 && (
//                         <td>
//                           <div className="dropdown">
//                             <button
//                               className="btn btn-sm btn-outline-secondary dropdown-toggle"
//                               data-bs-toggle="dropdown"
//                             >
//                               Actions
//                             </button>
//                             <ul className="dropdown-menu shadow-sm border-0">
//                               {actions.map((action, i) => (
//                                 <li key={i}>
//                                   <button
//                                     className={`dropdown-item d-flex align-items-center gap-1 ${action.className || ""}`}
//                                     onClick={() => action.onClick(row)}
//                                     style={{ fontSize: "12px" }}
//                                   >
//                                     {action.icon && <span>{action.icon}</span>}
//                                     {action.label}
//                                   </button>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </td>
//                       )}
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* PAGINATION */}
//           {pagination && pagination.last_page > 1 && (
//             <nav>
//               <ul className="pagination justify-content-end mt-3 mb-0">

//                 <li className={`page-item ${pagination.current_page === 1 && "disabled"}`}>
//                   <button
//                     className="page-link"
//                     onClick={() => onPageChange(pagination.current_page - 1)}
//                   >
//                     Previous
//                   </button>
//                 </li>

//                 {Array.from({ length: pagination.last_page }, (_, i) => (
//                   <li
//                     key={i}
//                     className={`page-item ${
//                       pagination.current_page === i + 1 ? "active" : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link"
//                       onClick={() => onPageChange(i + 1)}
//                     >
//                       {i + 1}
//                     </button>
//                   </li>
//                 ))}

//                 <li
//                   className={`page-item ${
//                     pagination.current_page === pagination.last_page && "disabled"
//                   }`}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() => onPageChange(pagination.current_page + 1)}
//                   >
//                     Next
//                   </button>
//                 </li>

//               </ul>
//             </nav>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
