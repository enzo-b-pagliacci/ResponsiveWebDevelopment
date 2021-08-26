
import './App.css';
import Header from './components/header/Header';
import ListaAlunos from './components/listaalunos/ListaAlunos';



//Pegue todos os elementos APP e transforme em Componentes

export default function App() {

  //criando a declaração de envios de parametro para a lista Alunos via props
  const lista = ['Leandro', 'Allen', 'Alexandre', 'Enzo']

  //criando a declaração de envio do curso para o componente ListaAlunos
  const crs = 'ADS'

  //criando uma função para ser passada como parâmetro para o componente ListaAlunos
  const addAluno = ()=> 'Isabela'

  return (
    <div className="App">
      <Header/>
      <div className="AppCorpo">
        <ListaAlunos alunos={lista} curso={crs} maisAlunos={addAluno}></ListaAlunos>

      </div>
    </div>
  );
}


