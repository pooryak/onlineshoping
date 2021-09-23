import PropTypes from 'prop-types';
import style from './style.module.scss';

function PrimaryButton(props) {
    const { children, onClick } = props;
    return (
        <div className={style.btn_primary} onClick={onClick}>
            {children}
        </div>
    );
}

PrimaryButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    onClick: PropTypes.func.isRequired,
};

PrimaryButton.defaultProps = {
    children: null,
};

export default PrimaryButton;
