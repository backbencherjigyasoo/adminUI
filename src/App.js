import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ReactPaginate from "react-paginate";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
