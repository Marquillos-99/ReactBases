import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return(
        <section className='App'>
            <TwitterFollowCard userName='batman' name='Batman' isFollowing/>
            <TwitterFollowCard userName='marcos' name='Marcos' isFollowing={true}/>
            <TwitterFollowCard userName='purples' name='Shmin' isFollowing={false}/>
            <TwitterFollowCard userName='omarfierro' name='Omar' isFollowing={false}/>
        </section>
    )
}