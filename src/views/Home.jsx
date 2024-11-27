import { useContext } from "react";
import Filter from "../components/Filter/Filter.jsx";
import AddTodoModal from "../components/ModalWindow/AddTodoModal.jsx";
import ModalWindow from "../components/ModalWindow/ModalWindow.jsx";
import TodosList from "../components/TodosList/TodosList.jsx";
import { TodosContext } from "../Context/TodosContext.jsx";

function Home() {
  const { toggleModal } = useContext(TodosContext);
  return (
    <>
      {toggleModal && (
        <ModalWindow>
          <AddTodoModal />
        </ModalWindow>
      )}
      <div className="container">
        <Filter />

        <TodosList />
      </div>
    </>
  );
}

export default Home;
