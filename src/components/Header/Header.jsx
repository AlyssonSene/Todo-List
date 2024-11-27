/* eslint-disable react/prop-types */
import { useTodos } from "../../Context/TodosContext";
import "./Header.scss";

function Header({ appName }) {
  const { setToggleModal } = useTodos();
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-side">
            <h1>{appName}</h1>
          </div>
          <div className="header-side">
            <button
              className="btn secondary"
              onClick={() => setToggleModal(true)}
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
