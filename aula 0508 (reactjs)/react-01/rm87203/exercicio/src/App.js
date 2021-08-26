import './App.css';
import Cabecalho from './Components/cabecalho/Cabecalho';
import Carros from './Components/carros/Carros';
import Parceiros from './Components/parceiros/Parceiros';



export default function App() {

  const modelos = ['Lamborghinni Aventador', 'Corvette', 'Dodge Challenger Demon', 'Bugatti']
  var resul = 0;
  var multi = (x1,x2)=> x1 * x2

  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Carros carros={modelos}></Carros>
      <Parceiros conta={multi}></Parceiros>
    </div>
  );
}


