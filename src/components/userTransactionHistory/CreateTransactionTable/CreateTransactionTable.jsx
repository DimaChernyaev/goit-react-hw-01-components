import PropTypes from 'prop-types';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import css from './CreateTransactionTable.module.css'

const CreateTransactionTable = ({ transaction }) => {

    return (
        <table className={css.transaction__history}>
        <thead className={css.table__thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th> 
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.table__body}>
        {transaction.map(({ id, type, amount, currency }) => ( 
              <TransactionHistory 
              key={id} 
              type={type} 
              amount={amount} 
              currency={currency} />
            ))}
        </tbody> 
      </table>
    );
  };
  
  CreateTransactionTable.propTypes = {
    transaction: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
      })),
  };
  
  export default CreateTransactionTable;