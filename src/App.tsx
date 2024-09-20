import "./App.css";
import Foods from "./components/Foods";
import HelloWorld from "./components/HelloWorld";
import HelloUser from "./components/HelloUserProps";
import Counter from "./components/UseState";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";

function App() {
    return (
        <div>
            <HelloWorld />
            {/* <Foods />
            <HelloUser name={"Takuto"} age={25} hobby={["Reading", "Cycling"]} />
            <HelloUser name={"Hanako"} age={30} hobby={["Cooking", "Travelong"]} />
            <HelloUser name={"Ken"} age={22} hobby={["Running", "swiming"]} />
            <Counter CountNumber={5} />
            <Counter CountNumber={10} />
            <TodoList /> */}
            <FetchData />
        </div>
    );
}

export default App;
