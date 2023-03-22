import React from 'react';
import user from 'components/socialProfile/user.json';
import { Perfil } from 'components/socialProfile/social';

export const User = () => {

return(
<>
<Perfil
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</>
);
};

