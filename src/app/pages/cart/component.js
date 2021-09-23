import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ProductCard, PrimaryButton } from '../../components';
import { removeProduct } from '../../../store/actions';
import style from './style.module.scss';

function Cart(props) {
    const {
        products,
    } = props;
    const removeFromCart = (item) => {
        props.removeProduct(item);
    };
    return (
        <div className={style.cart_container}>
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
            <div className={style.box}>
                <div>
                    <div>
                        تعداد کالاها :
                        {' '}
                        {products.length + 1}
                    </div>
                    <PrimaryButton>
                        ادامه خرید
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    products: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (product) => dispatch(removeProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
