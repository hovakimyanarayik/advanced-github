import { IRepo } from './../../models/models';
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk'

interface GithubState {
    favorites: IRepo[]
}

const initialState: GithubState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}


export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IRepo>) {
            if(state.favorites.findIndex(f => f.id === action.payload.id) === -1) {
                state.favorites.push(action.payload)
                localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
            }
        },
        removeFavorite(state, action: PayloadAction<IRepo>) {
            state.favorites = state.favorites.filter(f => f.id!== action.payload.id)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        }
    }
})


export const githubActions = githubSlice.actions

export const githubReducer = githubSlice.reducer