import PropTypes from 'prop-types';
import css from './CreateFriendList.module.css';
import UserFriend from '../UserFriends/UserFriend';

const CreateFriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <UserFriend 
        key={id} 
        avatar={avatar} 
        name={name} 
        isOnline={isOnline} />
      ))}
    </ul>
  );
};

CreateFriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
};

export default CreateFriendList;
