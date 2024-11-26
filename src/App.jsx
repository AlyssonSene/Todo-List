import "./App.scss";
import Header from "./components/Header/Header.jsx";
import { TodosProvider } from "./Context/TodosContext.jsx";
import Home from "./views/Home.jsx";

function App() {
  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List with React" />

          <Home />
        </TodosProvider>
      </main>
    </>
  );
}

export default App;
