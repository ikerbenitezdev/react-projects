import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
    name: 'Midudev',
    userName: 'midudev',
    isFollowing: true
    }, 
    {
    name: 'Iker',
    userName: 'iker795',
    isFollowing: false
    }, 
    {
    name: 'Elon Musk',
    userName: 'elonmusk',
    isFollowing: true
    }
]

export function App () {
    //No es buena practica
    return ( 
    <section className= "App">
       { 
        users.map(({name, userName, isFollowing}) => (
                <TwitterFollowCard 
                    key={userName}
                    name={name}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                />
        ))
    }
    </section>
    )
}