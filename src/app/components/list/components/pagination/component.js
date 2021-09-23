import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.scss';

function pagination(props) {
    const { data, handlePaginate } = props;
    const prevBtn = () => {
        if (data.current_page === 1) {
            return null;
        }
        return <FontAwesomeIcon icon={faArrowCircleLeft} onClick={() => handlePaginate('prev')} />;
    };
    const nextBtn = () => {
        if (data.current_page < data.total_pages) {
            return <FontAwesomeIcon icon={faArrowCircleRight} onClick={() => handlePaginate('next')} />;
        }
        return null;
    };
    return (
        <div className={style.paginate_container}>
            <div>
                {nextBtn()}
                <span>
                    {data.current_page}
                </span>
                {prevBtn()}

            </div>
        </div>
    );
}

pagination.propTypes = {
    data: PropTypes.object.isRequired,
    handlePaginate: PropTypes.func.isRequired,
};

export default pagination;
