import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Filters, Pagination } from './components';
import { SearchInput } from '..';
import style from './style.module.scss';

function List(props) {
    const {
        component, data, onFetch, loading,
    } = props;
    const [filters, setFilters] = useState({
        page: data?.pager?.current_page || 1,
        rows: 24,
        'price[min]': 0,
        'price[max]': 100000,
        has_selling_stock: 0,
        sort: 4,
        q: '',
    });
    useEffect(() => {
        onFetch(filters);
    }, [filters]);

    const productItems = () => {
        if (data && data.products && data.products.length > 0) {
            return data.products.map((item, index) => component(item, index));
        }
        return <div />;
    };
    const paginate = (handlePaginate) => {
        if (data && data.products && data.products.length > 0) {
            return <Pagination data={data.pager} handlePaginate={handlePaginate} />;
        }
        return <null />;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name === 'sort') {
            return setFilters((prevState) => ({
                ...prevState,
                sort: e.target.value,
            }));
        }
        return setFilters((prevState) => ({
            ...prevState,
            q: e.target.elements.q.value,
            sort: e.target.elements.sort.value,
        }));
    };
    const handleCheckBox = (e) => setFilters((prevState) => ({
        ...prevState,
        has_selling_stock: e.target.checked ? 1 : 0,
    }));
    const handlePaginate = (type) => {
        if (type === 'prev') {
            return setFilters((prevState) => ({
                ...prevState,
                page: prevState.page - 1,
            }));
        }
        return setFilters((prevState) => ({
            ...prevState,
            page: prevState.page + 1,
        }));
    };
    return (
        <div className={style.list_container}>
            <div className={style.filter_box}>
                <Filters handleCheckBox={handleCheckBox} />
            </div>
            <div className={style.search_box}>
                <div className={style.search_header}>
                    <SearchInput handleSubmit={handleSubmit} />
                </div>
                {
                    loading ? 'loading' : (
                        <>
                            <div className={style.items}>
                                {productItems()}
                            </div>
                            <div>
                                {paginate(handlePaginate)}
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
}

List.propTypes = {
    component: PropTypes.func.isRequired,
    onFetch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default List;
