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
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <HelloWorld />
            <TodoList />
        </div>
        //     <Foods />
        //     <HelloUser name={"Takuto"} age={25} hobby={["Reading", "Cycling"]} />
        //     <HelloUser name={"Hanako"} age={30} hobby={["Cooking", "Travelong"]} />
        //     <HelloUser name={"Ken"} age={22} hobby={["Running", "swiming"]} />
        //     <Counter CountNumber={5} />
        //     <Counter CountNumber={10} />
        //     <FetchData />
        // <Router>
        //     <nav>
        //         {/* Linkコンポーネントを使ってページ間の移動リンクを作成 */}
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About</Link>
        //         <Link to="/fetch-data">Fetch Data</Link>
        //     </nav>
        //     {/* Routes内に個々のページへのルートを定義 */}
        //     <Routes>
        //         {/* path="/"はホームページのルートを表し、Homeのコンポーネントを表示 */}
        //         <Route path="/" element={<Home />} />
        //         {/* path="/about"はAboutページのルートを表し、Aboutのコンポーネントを表示 */}
        //         <Route path="/about" element={<About />} />
        //         {/* path="/fetch-data"はFetchDataページのルートを表し、FetchDataのコンポーネントを表示 */}
        //         <Route path="/fetch-data" element={<FetchData />} />
        //         {/* 指定されていないパスにアクセスした時にNotFoundコンポーネントを表示 */}
        //         <Route path="*" element={<NotFound />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
