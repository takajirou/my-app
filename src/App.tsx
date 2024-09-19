import "./App.css";
import Foods from "./components/Foods";
import HelloWorld from "./components/HelloWorld";
import HelloUser from "./components/HelloUserProps";

function App() {
    return (
        <div>
            <HelloWorld />
            {/* <Foods /> */}
            <HelloUser name={"Takuto"} age={25} hobby={["Reading", "Cycling"]} />
            <HelloUser name={"Hanako"} age={30} hobby={["Cooking", "Travelong"]} />
            <HelloUser name={"Ken"} age={22} hobby={["Running", "swiming"]} />
        </div>
    );
}

export default App;
