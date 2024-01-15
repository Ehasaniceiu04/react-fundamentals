import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./Components/PersonList";
import NewCustomer from "./Components/NewCustomer";
import ReactSelect from "./Components/ReactSelect";
import ReactRadio from "./Components/ReactRadio";



function App() {
  return (
    <div className="container">
      <ReactRadio/>
    </div>
  );
}

export default App;
