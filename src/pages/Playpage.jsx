import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"  
import useGetUserData from "../store/UserStore"
import { useGameStore } from "../store/GameStore"
import axios from "axios"

const Playpage = () => {

  const getUser = useGetUserData((state) => (state.user))
  const navigate = useNavigate()

  // var and action from game store
  const { createLobby, lobbyCode, setLobbyList, lobbies, findLobby } = useGameStore((state) => ({
    lobbies: state.lobbies,
    setLobbyList: state.setLobbyList,
    lobbyCode: state.lobbyCode,
    createLobby: state.createLobby,
    findLobby: state.findLobby,
  }))

  // for state handling room input
  const [roomCode, setRoomCode] = useState('')


  // on lobby creation, immediately move owner (user who clicked create room) to the url of the lobby
  useEffect(() => {
    // console.log(lobbyCode)
    // console.log(getUser.inLobby)
    // console.log()

    navigate(`/play/${lobbyCode}`)
  }, [lobbyCode, navigate])


  // retrieves lobby list
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/game/get-lobby-list/',
      headers: {
        'Content-Type': 'Application/json'
      },
    }).then((res) => {
      setLobbyList(res.data)
      console.log(res.data)
    }).catch((err) => {
      alert(err)
    })
  }, [setLobbyList])
  

  // must also check if room code exists in the DB
  const handleRoomCodeInput = (e) => {
    console.log(e.target.value)
    setRoomCode(e.target.value)
    if (e.target.value.length >= 4){
      console.log('More than E')
    }
  }
  
  const stateChangeHandler = async (e) => {
    e.preventDefault();
    console.log('code: ', roomCode)
    let data = findLobby(roomCode, getUser)
    data.then((res) => {
      console.log(res.lobby_code)

      localStorage.setItem('roomCode', res.lobby_code)
      navigate(`/play/${res.lobby_code}/`)
      
    }).catch((err) => {
      console.error(err)
      alert('Error occurred, cannot join room')
    })

  }

  return (
    <div>
        { lobbyCode ? 
            <Outlet />
           : 
        
          <div className="flex flex-col items-center">
            <div className="bg-transparent rounded-xl w-[70%] flex justify-center py-3 border-[1px] border-black">
                <input 
                className="border-solid border-black pl-2"
                placeholder="Enter Room Code"
                type="text" 
                value={roomCode} 
                onChange={(e) => handleRoomCodeInput(e)} 
                />
                <div className="py-4 space-x-2">
                <button className="bg-blue-200 " onClick={(e) => createLobby(e)}>Create Room</button>
                <button onClick={(e) => stateChangeHandler(e)} className="bg-blue-200">Join Room</button>
                </div>
            </div>
            
            <div className="bg-transparent border-[1px] border-black w-[90%]  mt-[50px] px-4">
              {lobbies.map((lobby) => (
                <div 
                  className="my-[1em] "
                  key={lobby.id}
                >
                  <h1>{lobby.owner} room</h1>
                  <h1>players: {lobby.players.length} / 5</h1> 
                  

                  <button className="bg-green-500 text-white p-2 mt-2 rounded-md">Join Room</button>
                </div>
              ))}
            </div>
          </div>
        }
    </div>
  )
}

export default Playpage