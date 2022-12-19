import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFile, getAllFiles, getOneFiles } from "../actions/actions";
import "../styles/table.css";

function TableFile() {
  const history = useHistory();
  const { file } = useParams();
  const dispatch = useDispatch();
  const oneFile = useSelector((state) => state.oneFile);

  useEffect(() => {
    dispatch(getOneFiles(file));
  }, [dispatch, file]);

  useEffect(() => {
    return () => dispatch(clearFile());
  }, []);


  return (
    <div className="containerBoos">
      {!Object.entries(oneFile).length ? <p>Cargando datos...</p> : null}

      <Table className="tableBoos" striped bordered hover>
        <thead className="thead">
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(oneFile).length ? (
            oneFile.lines.length ? (
              oneFile.lines.map((el, idx) => (
                <tr key={idx}>
                  <th>{oneFile.file}</th>
                  <th>{el.text ? el.text : "-"}</th>
                  <th>{el.number ? el.number : "-"}</th>
                  <th>{el.hex ? el.hex : "-"}</th>
                </tr>
              ))
            ) : (
              <tr>
                <th>{oneFile.file}</th>
                <th>{"-"}</th>
                <th>{"-"}</th>
                <th>{"-"}</th>
              </tr>
            )
          ) : null}
        </tbody>
      </Table>

      <button
        className="buttonBoos"
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default TableFile;
