import PropTypes from 'prop-types';
import css from './UserFriend.module.css'

const UserFriend = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

UserFriend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default UserFriend;