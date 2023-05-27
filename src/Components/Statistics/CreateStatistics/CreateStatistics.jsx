import css from './CreateStatistics.module.css'
import StatisticsList from '../StatisticsList/StatisticsList';
import PropTypes from 'prop-types';


const CreateStatistics = ({title, data}) => {
    
    return (
        <section className={css.statistics}>
            {title.length > 0 && (<h2 className={css.title}>{title}</h2>)}
                <StatisticsList 
                    props={data}
                />
        </section>
    );

}

CreateStatistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default CreateStatistics;