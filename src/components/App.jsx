// ? Імпорт компонентів
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// ? Виклик json файлів
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import user from '../data/user.json';
import data from '../data/data.json';

// ? Виклик віртуального DOM дерева
export const App = () => {
  return (
    <section className="section">
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className="container">
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="container">
        <FriendList friends={friends} />
      </div>
      <div className="container">
        <TransactionHistory items={transactions} />
      </div>
    </section>
  );
};
