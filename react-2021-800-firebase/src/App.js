import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header, MainNav, Footer, BBsMain, TMap } from "./comps";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <MainNav />
                <section className="main_section">
                    <BBsMain />
                    <TMap />
                </section>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
