import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFiles, getOneFiles } from "../actions/actions";
import "../styles/table.css";

function Chart() {
  const dispatch = useDispatch();
  const allFiles = useSelector((state) => state.allFiles);

  useEffect(() => {
    dispatch(getAllFiles());
  }, [dispatch]);

  return (
    <div className="containerBoos">
      <Table className="tableBoos" striped bordered hover>
        <thead className="thead">
          <tr>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {allFiles.length
            ? allFiles.map((el) => (
                <tr key={el}>
                  <th>
                    <Link className="linkBoos" to={"/" + el}>
                      {el}
                    </Link>
                  </th>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </div>
  );
}

export default Chart;
