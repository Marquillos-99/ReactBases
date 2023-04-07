import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return(
        <>
            <TwitterFollowCard userName='batman' name='Batman' isFollowing='true'/>
            <TwitterFollowCard userName='marcos' name='Marcos' isFollowing='true'/>
        </>
    )
}