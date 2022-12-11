import * as React from 'react';
import RepoCard from '../components/RepoCard';
import { useAppSelector } from '../hooks/redux';


const FavoritPages: React.FC = () => {
    const {favorites} = useAppSelector(state => state.github)
    
    if(favorites.length === 0) {
        return <p className="text-center">No items yet...</p>
    }
    return ( 
        <div className='flex justify-center pt-10 mx-auto h-screen'>
            <ul className="list-none">
                {favorites.map(f => (
                    <RepoCard repo={f} />
                ))}
            </ul>
        </div>
     );
}
 
export default FavoritPages;