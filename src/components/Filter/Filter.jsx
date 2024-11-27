import { useTodos } from "../../Context/TodosContext";
import "./Filter.scss";

function Filter() {
  const state = useTodos();

  return (
    <>
      <div className="filters">
        <div>
          <p>Filter by state</p>
          <div className="badges">
            <div
              className={`badge ${state.filterBy === "TODO" ? "selected" : ""}`}
              onClick={() => state.setFilterBy("TODO")}
            >
              To-Do
            </div>
            <div
              className={`badge ${state.filterBy === "DONE" ? "selected" : ""}`}
              onClick={() => state.setFilterBy("DONE")}
            >
              Done
            </div>
            {state.filterBy && (
              <span className="clear" onClick={() => state.setFilterBy("")}>
                x clear
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
