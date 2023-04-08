export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing}){
    console.log(isFollowing)
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
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button className='tw-follow-card-button'>
                    Follow
                </button>
            </aside>

        </article>
   )
}