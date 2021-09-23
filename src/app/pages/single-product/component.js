import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../../store/actions';
import style from './style.module.scss';
import { PrimaryButton } from '../../components';
import { getPdp } from '../../../repository';

function SingleProduct(props) {
    const { id } = props.match.params;
    const history = useHistory();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const fetchProduct = async () => {
        try {
            const response = await getPdp(id);
            if (!response.status === 200) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            return setData(response.data.data);
        } catch (error) {
            console.log(error?.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    const addToCart = () => {
        props.addProduct(data.product);
        history.push('/cart');
    };
    return (
        <div className={style.product_container}>
            {
                loading ? 'loading' : (
                    <>
                        <div className={style.btn_container}>
                            <div className={style.img_container}>
                                <img src={data?.product?.images?.main} alt="product" />
                            </div>
                            <p>
                                {data?.product?.title}
                            </p>
                            <div>
                                <p>
                                    {data?.product?.price?.selling_price}
                                    {' '}
                                    ریال
                                </p>

                                <PrimaryButton onClick={addToCart}>
                                    افزودن به سبد خرید
                                </PrimaryButton>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
}

SingleProduct.propTypes = {
    match: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(null, mapDispatchToProps)(SingleProduct);
