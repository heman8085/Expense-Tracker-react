import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ExpenseProvider } from './component/store/ExpenseContext';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ExpenseProvider>
        <App />
    </ExpenseProvider>
);
