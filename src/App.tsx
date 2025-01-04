import { Promo } from "./components/Promo/Promo";
import { Cards } from "./components/Cards/Cards";
import { WhyBlock } from "./components/WhyBlock/WhyBlock";
import { BookForm } from "./components/BookForm/BookForm";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Promo />
            <Cards />
            <WhyBlock />
            <BookForm />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
