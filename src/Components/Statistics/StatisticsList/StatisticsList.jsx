import PropTypes from 'prop-types';
import css from './StatisticsList.module.css'
import UserStatistics from '../UserStatistics/UserStatistics';

const StatisticsList = ( {props} ) => {
    return (
        <ul className={css.stat_list}>
            {props.map(({id, label, percentage}) => 
                <UserStatistics 
                    key={id}
                    label={label}
                    percentage={percentage}
                />
                )}
        </ul>
    );
}

StatisticsList.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}


export default StatisticsList;
