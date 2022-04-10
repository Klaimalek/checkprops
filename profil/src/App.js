
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './composant/User';
import ActionLink from './composant/ActionLink';
function App() {
  return (
    <div className="App">
     <User title="Absi Malek" profession="Developer React"/>
     <ActionLink/>
    </div>
  );
}

export default App;
