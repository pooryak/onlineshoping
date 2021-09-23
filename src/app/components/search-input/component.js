/* eslint-disable no-unused-expressions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './style.module.scss';

function SearchInput(props) {
    const { handleSubmit } = props;
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.form_container}>
                <input name="q" />
                <div className={style.form_btn}>
                    <button className="btn btn-secondary" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div>
                <select name="sort" defaultValue={4} onChange={handleSubmit}>
                    <option value={4}>بیشترین بازدید</option>
                    <option value={22}>مرتبترین</option>
                    <option value={27}>توصیه مشتریان</option>
                </select>
            </div>
        </form>
    );
}

SearchInput.propTypes = {
    handleSubmit: PropTypes.func,
};

SearchInput.defaultProps = {
    handleSubmit: null,
};

export default SearchInput;
