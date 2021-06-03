import { combineReducers } from "redux";
import { createStore } from "redux";

import { EmployeeReducer } from "./EmpoyeeReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

const store = createStore(rootReducer);
export { store };
