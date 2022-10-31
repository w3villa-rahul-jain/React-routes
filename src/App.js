
import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="nav">
        <Link className="invoice" to="/invoices"><span>Invoices</span></Link>
        <Link className="invoice" to="/expanses"><span>Expanses</span></Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
