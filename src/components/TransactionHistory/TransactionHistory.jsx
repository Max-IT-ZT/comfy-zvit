import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionTable}>
        <tr className={css.transactionName}>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionList}>
        {items.map(item => (
          <tr key={item.id} className={css.transactionItem}>
            <td className={css.typeItem}>{item.type}</td>
            <td className={css.amountItem}>{item.amount}</td>
            <td className={css.currencyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
