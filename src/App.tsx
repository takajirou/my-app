import "./App.css";
import Foods from "./components/Foods";
import HelloWorld from "./components/HelloWorld";
import HelloUser from "./components/HelloUserProps";
import Counter from "./components/UseState";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
// BrowserRouterはルーティングの基盤を提供し、Routesはルート定義、Linkはリンク(ページ間の移動)
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
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
            <TodoList />
            <FetchData /> */}
        </div>
    );
}

export default App;
