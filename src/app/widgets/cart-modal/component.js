import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from '../../components';
import style from './style.module.scss';

function CartModal(props) {
    const {
        state, close, products, removeFromCart,
    } = props;
    return (
        <div className={[style.modal_container, state === true ? style.show : style.close].join(' ')}>
            <div className={style.modal_content}>
                <div className={style.close_btn} onClick={close}><FontAwesomeIcon icon={faTimesCircle} /></div>
                <div className={style.items}>
                    {products.length > 0 ? products.map((item) => (
                        <ProductCard
                            key={item.id}
                            removeFromCart={removeFromCart}
                            xs="100%"
                            md="30%"
                            data={item}
                            cart
                        />
                    )) : 'محصولی وجود ندارد'}
                </div>
            </div>
        </div>
    );
}

CartModal.propTypes = {
    state: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func,
};

CartModal.defaultProps = {
    removeFromCart: null,
};

export default CartModal;
