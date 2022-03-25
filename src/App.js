import Header from "./ui/Header";
import Body from "./ui/Body";
import Footer from "./ui/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Body />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
