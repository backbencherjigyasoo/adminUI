import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Table from "./Table";
import "./Body.css";
const Body = () => {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;

  let pageVisited = pageNumber * usersPerPage;

  useEffect(() => {
    (async () => {
      let data = await axios.get(
        `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
      );

      setItems(...[data.data]);
    })();
  }, []);

  let pageCount = Math.ceil(items.length / usersPerPage);

  let handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  let onDelete = (i) => {
    const temp = items.filter((item) => item.id !== i);
    setItems(temp);
  };

  let onEdit = (i) => {
    console.log("data", i);
    setOpenModal(true);
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="search"
          value={searchItem}
          placeholder="Search name, email or role"
          className="searchInput"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div>
        <Table
          data={items}
          onDelete={onDelete}
          onEdit={onEdit}
          searchedItem={searchItem}
          pageVisited={pageVisited}
          usersPerPage={usersPerPage}
        />
      </div>

      <div className="footer">
        <button className="btn btn-danger">Delete Selected</button>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Body;
