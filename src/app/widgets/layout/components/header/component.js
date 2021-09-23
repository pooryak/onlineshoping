import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { removeProduct } from '../../../../../store/actions';
import { CartModal } from '../../..';
import style from './style.module.scss';
import image from '../../../../assets/images/digi.svg';

function Header(props) {
    const { products } = props;
    const [open, setOpen] = useState(false);
    const removeHandler = (item) => {
        props.removeProduct(item);
    };
    return (
        <header className={style.header}>
            <div>
                <CartModal removeFromCart={removeHandler} state={open} products={products} close={() => setOpen((prevState) => !prevState)} />
                <nav>
                    <Link to="/">
                        <img src={image} alt="logo" />
                    </Link>
                    <div>
                        <NavLink
                            to="/"
                            isActive={(match, location) => location.pathname === '/'}
                        >
                            خانه
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/cart"
                            isActive={(match, location) => location.pathname === '/cart'}
                        >
                            سبد خرید
                        </NavLink>
                    </div>
                </nav>

                <div className={style.badge} onClick={() => setOpen((prevState) => !prevState)}>
                    <span>
                        <div>
                            {products.length}
                        </div>
                    </span>
                    <FontAwesomeIcon icon={faShoppingCart} className={products.length > 0 ? style.icon_active : style.icon_inactive} />
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    products: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (product) => dispatch(removeProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
