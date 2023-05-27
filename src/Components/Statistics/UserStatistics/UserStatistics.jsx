import PropTypes from 'prop-types';
import css from './UserStatistics.module.css'

const UserStatistics = ({label, percentage}) => {
    return (
            <li className={css.item} >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
    );
}

UserStatistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default UserStatistics;