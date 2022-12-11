import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

const RepoCard: React.FC<{repo: IRepo}> = ({ repo }) => {
    const {addFavorite, removeFavorite} = useActions()
    const {favorites} = useAppSelector(state => state.github)
    const [isFavorite, setIsFavorite] = useState(favorites.some(f => f.id === repo.id))

    const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        addFavorite(repo)
        setIsFavorite(true)
    }

    const removeFromFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        removeFavorite(repo)
        setIsFavorite(false)
    }

    return ( 
        <div 
            className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'
            onClick={(e) => {
                e.preventDefault()
                window.open(repo.html_url, '_blank')
            }}
        >
            <h2 className='text-lg font-bold'>{repo.full_name }</h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">{repo?.description}</p>
            {!isFavorite ? (
                <button 
                    className='py-2 px-4 mt-2 bg-yellow-400 rounded hover:shadow-md transition-all'
                    onClick={addToFavorite}
                >
                        Add to Favorites
                </button>
            ) :(
                <button 
                    className='py-2 px-4 mt-2 bg-red-400 rounded hover:shadow-md transition-all'
                    onClick={removeFromFavorites}
                >
                        Remove from Favorites
                </button>
            )}
        </div> 
    );
}
 
export default RepoCard;
