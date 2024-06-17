import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-initial">
        <Header></Header>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
