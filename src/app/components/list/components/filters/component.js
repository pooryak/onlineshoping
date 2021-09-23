import PropTypes from 'prop-types';
import { memo } from 'react';
import style from './style.module.scss';
// import { SecondaryButton } from '../../..';

function Filters(props) {
    const { handleCheckBox } = props;
    return (
        <div className={style.filters}>
            {/* <div className={style.slide_container}>
                <input type="range" min="0" max="100000" className={style.slider} id="myRange" />
                <SecondaryButton />
            </div> */}
            <div className={style.switcher}>
                <label className={style.switch}>
                    <input type="checkbox" defaultChecked={false} onChange={handleCheckBox} />
                    <span className={[style.slider, style.round].join(' ')} />
                </label>
                <span className={style.switch_label}>
                    فقط کالای های موجود
                </span>
            </div>
        </div>
    );
}

Filters.propTypes = {
    handleCheckBox: PropTypes.func,
};

Filters.defaultProps = {
    handleCheckBox: null,
};

export default memo(Filters);
