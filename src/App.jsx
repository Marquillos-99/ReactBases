import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const formatUserName = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='batman' 
                name='Batman' 
                isFollowing
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                
                userName='marcos' 
                name='Marcos' 
                isFollowing={true}
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='purples' 
                name='Shmin' 
                isFollowing={false}
            />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName='omarfierro' 
                name='Omar' 
                isFollowing={false}
            />
        </section>
    )
}