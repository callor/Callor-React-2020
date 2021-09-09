import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header, MainNav, Footer, BBsMain } from "./comps";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <MainNav />
                <section className="main_section">
                    <BBsMain />
                </section>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
