import PropTypes from 'prop-types';
import { Header, Footer } from './components';
import style from './style.module.scss';

function Layout(props) {
    const { children } = props;
    return (
        <div className={style.container}>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
Layout.defaultProps = {
    children: null,
};
export default Layout;
