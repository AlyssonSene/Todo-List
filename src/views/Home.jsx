import Filter from "../components/Filter/Filter.jsx";
import AddTodoModal from "../components/ModalWindow/AddTodoModal.jsx";
import ModalWindow from "../components/ModalWindow/ModalWindow.jsx";
import TodosList from "../components/TodosList/TodosList.jsx";
import { useTodos } from "../Context/TodosContext.jsx";

function Home() {
  const { toggleModal } = useTodos();
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
