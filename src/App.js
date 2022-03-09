import './App.css';
import Header from "./components/Header/Header";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Banner from "./components/Banner/Banner";
import Media from "./components/Media/Media";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchBlock/>
            <div>
                <Banner/>
            </div>
            <Media/>
        </div>
    );
}

export default App;
