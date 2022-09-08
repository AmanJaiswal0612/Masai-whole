import axios from "axios";

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const Pagination = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <button
            onClick={() => {
              navigate(`/patients/${id - 1}`);
            }}
            disabled={id == 1}
          >
            <li className="page-item">Previous</li>
          </button>
          {new Array(5).fill(0).map((el, index) => {
            return (
              <li
                key={index}
                className="page-item"
              >
                <NavLink className="page-link" to={`/patients/${index + 1}`}>
                  {index + 1}
                </NavLink>
              </li>
            );
          })}
          <button  
            onClick={() => {
                navigate(`/patients/${Number(id) + 1}`);
              }}
           >
            <li className="page-item">
                Next
            </li>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;