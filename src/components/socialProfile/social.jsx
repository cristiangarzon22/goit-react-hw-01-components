import React from 'react';
import css from "./social.module.css";
import PropTypes from "prop-types";
const Perfil = ({ username, tag, location, avatar, stats}) => {
const  {followers, views, likes} = stats;   
return (
<>
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{views}</span>
    </li>
    <li>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
</>
);
};




Perfil.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Perfil;