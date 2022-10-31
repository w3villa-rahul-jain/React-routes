
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="nav">
        <Link className="invoice" to="/invoices"><span>Invoices</span></Link>
        <Link className="invoice" to="/expanses"><span>Expanses</span></Link>
      </nav>
    </div>
  );
}

export default App;
