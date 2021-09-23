import {
    BrowserRouter, Route,
} from 'react-router-dom';
import { Router } from './components';
import { Error404, Layout } from './widgets';
import routes from './pages';

import './style/index.scss';

function App() {
    return (
        <BrowserRouter>
            <Router routes={routes}>
                <Layout>
                    <Route component={Error404} />
                </Layout>
            </Router>
        </BrowserRouter>
    );
}

export default App;
