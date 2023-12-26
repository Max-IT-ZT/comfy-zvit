// ? Імпорт компонентів
import { Profile } from './Profile/Profile';
// ? Виклик json файлів
import user from '../data/user.json';

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
        />
      </div>
    </section>
  );
};
