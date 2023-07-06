import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import "./App.css";

const App = () => {
    return (
        <>
            <header>
                <div className="head__logo">
                    <h1>Just did it !</h1>
                    <p>Your Friendly Neighbourhood Task Manager</p>
                </div>
            </header>
            <main>
                <AddToDo />
                <Navbar />
                <Todos />
            </main>
        </>
    );
};

export default App;
