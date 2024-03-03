import { useState } from 'react';

export function TwitterFollowCard ({userName, name, initialIsFollowing = false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    // const state = useState(isFollowing);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];
    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    }
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    return (
        <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleFollowClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}