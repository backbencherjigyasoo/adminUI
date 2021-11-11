import { Modal } from "bootstrap";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import "./Table.css";

const Table = ({
  data,
  searchedItem,
  pageVisited,
  usersPerPage,
  onDelete,
  onEdit,
}) => {
  const deleteSingle = (i) => {
    onDelete(i);
  };

  const editSingle = (i) => {
    onEdit(i);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div>
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice(pageVisited, pageVisited + usersPerPage)
            .filter((item) => {
              let name = item.name.toLowerCase();
              let email = item.email.toLowerCase();
              let role = item.role.toLowerCase();
              if (searchedItem === "") {
                return item;
              } else if (
                name.includes(searchedItem.toLowerCase()) ||
                email.includes(searchedItem.toLowerCase()) ||
                role.includes(searchedItem.toLowerCase())
              ) {
                return item;
              }
            })
            .map((items, index) => {
              return (
                <tr key={index} className="tableRow">
                  <th scope="row" className="tableRow">
                    <div>
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                    </div>
                  </th>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.role}</td>
                  <td>
                    <button className="btn btn-primary">
                      <FiEdit onClick={(e) => editSingle(items.id)} />
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteSingle(items.id)}
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
