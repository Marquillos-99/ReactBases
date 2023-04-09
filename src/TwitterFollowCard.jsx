import { useState } from "react"

export function TwitterFollowCard ({ userName=unknow, name, isFollowing}){
   const text = isFollowing ? 'Following' : 'Follow'
   const buttonClassName = isFollowing 
        ? 'tw-follow-card-button is-following' 
        : 'tw-follow-card-button'

   return(
    <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar'
                    src={`https://unavatar.io/${userName}`} 
                    alt="El avatar" />
                <div className='tw-follow-card-div'>
                    <strong>
                        {name}
                    </strong>
                    <span className='tw-follow-card-infoUsername'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>

        </article>
   )
} 