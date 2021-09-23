import {
    Route,
    // Redirect,
    Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from '../../widgets';

function Router(props) {
    const { routes, children } = props;
    const router = routes.map((item, index) => {
        const {
            component, exact, path, key,
        } = item;
        return (
            <Route
                path={path}
                exact={exact === undefined ? false : exact}
                key={key}
                render={(rout_props) => {
                    const Component = component;
                    return (
                        <Layout>
                            <Component {...rout_props} />
                        </Layout>
                    );
                }}
            />
        );
    }, []);
    return (
        <Switch>
            {[
                ...router,
                ...(Array.isArray(children) ? children : [children]),
            ]}
        </Switch>
    );
}

Router.propTypes = {
    routes: PropTypes.array.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
Router.defaultProps = {
    children: null,
};
export default Router;
