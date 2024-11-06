import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-3">
        <div className="container">
          <h1 className="text-xl">Welcome to rental shop</h1>
        </div>
      </main>
    </div>
  );
};

export default App;
