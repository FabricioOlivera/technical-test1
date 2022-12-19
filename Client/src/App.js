import { Route } from "react-router-dom";
import Chart from "./components/Table.jsx";
import Nav from "./components/Nav.jsx";
import TableFile from "./components/TableFile.jsx";

function App() {
  return (
    <>
      <Nav />
      <Route exact path={"/"}>
        <Chart />
      </Route>
      <Route path={"/:file"}>
        <TableFile />
      </Route>
    </>
  );
}

export default App;
