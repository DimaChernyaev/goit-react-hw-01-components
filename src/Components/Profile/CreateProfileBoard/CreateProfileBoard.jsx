import css from './/ProfileBoard.module.css'
import UserProfile from '../UserProfile/CreateUserProfile';
import UserStats from '../UserStats/UserStats';
import PropTypes from 'prop-types';


const CreateProfileBoard = ({
  username, 
  location, 
  tag, 
  avatar, 
  followers,
  views,
  likes}) => {
  return (
    <div key={username} className={css.profile}>
      <UserProfile
        username={username}
        location={location}
        tag={tag}
        avatar={avatar}
      />
      <UserStats 
        followers={followers}
        views={views}
        likes={likes}
      />
    </div>
  );
}

CreateProfileBoard.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}


export default CreateProfileBoard;