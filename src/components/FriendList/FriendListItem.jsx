import React from 'react';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOn : css.statusOf}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`Avatar of ${name}`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
