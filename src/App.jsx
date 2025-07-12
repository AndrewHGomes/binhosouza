import Corte from "./components/Corte";

const App = () => {
  return (
    <>
      <header>
        <h1>BINHO SOUZA</h1>
        <p>Barber Shop</p>
      </header>
      <main>
        <h3>Meus Trabalhos</h3>
        <Corte />
      </main>
      <footer>
        <h4>BINHO SOUZA &copy; 2025</h4>
        <address>
          <p>Av. Dep. Eduardo Vicente Nasser, 825</p>
          <p>Centro - São José do Rio Pardo</p>
        </address>
      </footer>
    </>
  );
};

export default App;
