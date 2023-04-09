import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return(
        <section className='App'>
            <TwitterFollowCard  
                userName='batman' 
                name='Batman' 
                initialIsFollowing={true}
            />

            <TwitterFollowCard                 
                userName='marcos' 
                name='Marcos' 
            />

            <TwitterFollowCard                 
                userName='purples' 
                name='Shmin' 
            />

            <TwitterFollowCard                 
                userName='omarfierro' 
                name='Omar' 
            />
        </section>
    )
}