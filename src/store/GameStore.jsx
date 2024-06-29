
import { create } from 'zustand';
import axios from 'axios';

import useGetUserData from './UserStore';

export const useGameStore = create((set) => ({
    // persisting data, so that on refresh, user won't be kicked from room
    lobbyCode: localStorage.getItem('roomCode') ? localStorage.getItem('roomCode') : '',
    lobbies: [],
    createLobby: async (e) => {
        e.preventDefault();
        
        console.log(useGetUserData.getState().user.username)
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/game/create-lobby/',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                owner: useGetUserData.getState().user.username
            }
            
        }).then((res) => {
            set({ lobbyCode: res.data.code })

            // add room code to local storage
            localStorage.setItem('roomCode', res.data.code)
            
            // update variable from userStore
            useGetUserData.getState().inLobby = true
            
        }).catch((err) => {
            console.log(err)
        })
    },
    leaveLobby: () => set(
        { lobbyCode: '' },
        // if game room is empty, delete room 
        localStorage.removeItem('roomCode'), 
        useGetUserData.getState().inLobby = false
        // make call to backend to remove user from room
        
    ),
    setLobbyList: (lobbyList) => set({lobbies: lobbyList}),
    findLobby: async (code, user) => {
        console.log(code)
        const { data } = await axios({
            method: 'PATCH',
            url: `http://127.0.0.1:8000/game/get-lobby/${code}/`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                player: user
            }
        })
        return data
    }
    //kickPlayer: (user) => set((state)),

}));


