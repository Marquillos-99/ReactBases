export function TwitterFollowCard (){
   return(
    <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar'
                    src="https://unavatar.io/batman" 
                    alt="El avatar" />
                <div className='tw-follow-card-div'>
                    <strong>
                        Batman
                    </strong>
                    <span className='tw-follow-card-infoUsername'>
                        @batman123
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