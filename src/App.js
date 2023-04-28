import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "../components/ItemCount/ItemCount"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
    </div>
  );
}

export default App;
