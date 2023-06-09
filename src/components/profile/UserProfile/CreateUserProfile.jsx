import css from './/UserProfile.module.css'
import PropTypes from 'prop-types';

const UserProfile = ({
  username,
  tag,
  location,
  avatar
}) => {
    return (
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
    );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}


export default UserProfile;

