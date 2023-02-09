import React, { useState } from "react";

import "./table.css";

import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

function Table(props) {
  let num = props.tableData.length;
  const PageCount = num % 4 != 0 ? num / 4 - (num % 4) / 4 + 1 : num / 4;
  const pages = [];
  for (let index = 0; index < PageCount; index++) {
    pages[index] = index + 1;
  }

  const [page, setPage] = useState(1);

  let localPosts = [];

  let k = 0;
  for (let i = (page - 1) * 4; i < page * 4; i++) {
    if (props.tableData.length == i) {
      break;
    }
    localPosts[k] = props.tableData[i];
    k++;
  }

  const selectChanged = (id, status) => {

      
    let data = JSON.parse(localStorage.getItem("Posts"))
      
    console.log("data is ")
    console.log(data)


    data[id-1].status = status

    console.log("Changed data is ")
    console.log(data)

    console.log("Changed item " + id)
    console.log("Value " + status)


    localStorage.setItem("Posts", JSON.stringify(data))
  }

  return (
    <div className="table">
      <div className="defCol">
        <div className="defColId">ID</div>
        <div className="defColTitle">Title</div>
        <div className="defColTime">Time</div>
        <div className="defColStatus">Status</div>
      </div>

      {localPosts.map((item, index) => (
        <div className="tempCol">
          <div className="defColId">{(page - 1) * 4 + index + 1}</div>
          <div className="defColTitle">{item.title}</div>
          <div className="defColTime">{item.time}</div>
          <div className="defColStatus">
            <select onChange={(e) => selectChanged(item.id,e.target.value)} name="" id="">
              <option selected={item.status == "Published"} value="Published">
                Published
              </option>
              <option selected={item.status == "Draft"} value="Draft">
                Draft
              </option>
            </select>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button className="page_button">
          <img src={prev} alt="" />
        </button>
        {pages.map((item) => {
          return (
            <button
              className={
                page == item ? "page_button page_button-active" : "page_button"
              }
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        })}
        <button className="page_button">
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Table;
