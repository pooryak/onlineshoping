/* eslint-disable jsx-a11y/alt-text */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style.module.scss';

function ProductCard(props) {
    const {
        data, addToCart, cart, removeFromCart,
    } = props;
    const cartHandler = () => {
        if (cart) {
            return (
                <div className={style.addToCart} onClick={() => removeFromCart(data)}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </div>
            );
        }
        return (
            <div className={style.addToCart} onClick={() => addToCart(data)}>
                <FontAwesomeIcon icon={faCartPlus} />
            </div>
        );
    };
    return (
        <div className={style.card_container}>
            <Link to={`/product/${data.id}`}>
                <div className={style.image_container}>
                    <img src={data?.images?.main} />
                </div>
            </Link>
            <div className={style.box_container}>
                <Link to={`/product/${data.id}`}>
                    <div className={style.content_title}>
                        <p>
                            {data.title}
                        </p>
                    </div>
                </Link>
                <div className={style.price}>
                    {cartHandler()}
                    <div>
                        {data?.price?.selling_price}
                        {' '}
                        <span>
                            ریال
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    cart: PropTypes.bool,
};

ProductCard.defaultProps = {
    addToCart: null,
    removeFromCart: null,
    cart: false,
};

export default ProductCard;
