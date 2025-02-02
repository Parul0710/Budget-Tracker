import "bootstrap/dist/css/bootstrap.min.css" ;
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider} from './context/Appcontext';
import "./App.css"
function App() {
  return (
    <AppProvider>

<div className="container">
   <h1 className="mt-1">  Manage your Budget </h1>
   <div className="row mt-3">
    <div className="col-sm">
      <Budget />

    </div>
    <div className="col-sm-">
      <Remaining/>
    </div>
    <div className="col-sm">
<ExpenseTotal/>
    </div>
    </div> 
<h3 className="mt-3"> Expenditures </h3>

<div className="row mt-3">
  <div className="col-sm">
    <ExpenseList/>
  </div>
</div>
<h3 className="mt-3" > Add Expenditures </h3>
<div className="mt-3">
  <div className="col-sm-3">
    <AddExpenseForm/>
  </div>
</div>
    </div>
    
    </AppProvider>
  
  );
}

export default App;
