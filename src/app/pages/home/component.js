import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../../../store/actions';
import { List, ProductCard } from '../../components';
import { getPlp } from '../../../repository';

function Home(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const fetchData = async (config) => {
        try {
            setLoading(true);
            const response = await getPlp({ params: config });
            const queryString = new URLSearchParams(config).toString();
            history.push(`/?${queryString}`);
            if (!response.status === 200) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            return setData(response.data.data);
        } catch (error) {
            console.error(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const addToCart = (item) => {
        props.addProduct(item);
    };
    return (
        <div>
            <List
                onFetch={(config) => fetchData(config)}
                loading={loading}
                data={data}
                component={(item) => <ProductCard key={item.id} addToCart={addToCart} xs="100%" md="30%" data={item} />}
            />
        </div>
    );
}

Home.propTypes = {
    addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(null, mapDispatchToProps)(Home);
