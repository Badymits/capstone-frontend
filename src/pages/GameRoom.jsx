import { w3cwebsocket as W3CWebSocket } from "websocket";
//import { useEffect } from "react"
import useGetUserData from "../store/UserStore";
import { useGameStore } from "../store/GameStore"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const GameRoom = () => {

  const getUser = useGetUserData((state) => (state.user));
  const [players, setPlayers] = useState([])

  const { leaveLobby, lobbyCode } = useGameStore((state) => ({
    lobbyCode: state.lobbyCode,
    leaveLobby: state.leaveLobby
  }))

  const navigate = useNavigate()

  // instead of placing leavelobby action directly in button element, placed it in function
  // to include navigate feature since idk how to do it in store
  const leave = () => {
    leaveLobby()
    navigate('/play')
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/game/get-lobby/${lobbyCode}/`,
      headers: {
        'Content-Type': 'Application/json'
      },
      
    }).then((res) => {
      console.log(res.data.players) // exclude password field in backend
      setPlayers(res.data.players)
    }).catch((err) => {
      alert(err)
    })
  }, [])
  
  const roomName = lobbyCode
  
  // gets room_name from the state and connects to the backend server
  //const chatSocket = new W3CWebSocket(`ws://127.0.0.1:8000/ws/socket-server/${getUser.username}/${roomName}/`);  

  // useEffect(() => {
  //   chatSocket.onmessage = (message) => {
  //     const data = JSON.parse(message.data)
  //     console.log(data)
  //   } 
  // }, [])
  /*
  // connect websocket to backend

  
  chatSocket.onmessage = function(e) {
      const data = JSON.parse(e.data);
      document.querySelector('#chat-log').value += (data.message + '\n');
  };

  chatSocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly');
  };

  document.querySelector('#chat-message-input').focus();
  document.querySelector('#chat-message-input').onkeyup = function(e) {
      if (e.key === 'Enter') {  // enter, return
          document.querySelector('#chat-message-submit').click();
      }
  };

  document.querySelector('#chat-message-submit').onclick = function(e) {
      const messageInputDom = document.querySelector('#chat-message-input');
      const message = messageInputDom.value;
      chatSocket.send(JSON.stringify({
          'message': message
      }));
      messageInputDom.value = '';


  */
  return (
    <div className="pt-[5em] ">
        
        <div className="flex flex-col  bg-blue-500 w-[70%]">
          {players.map((player) => (
            <div className="bg-green-300 py-2 w-[5em]" key={player.id}>
              <p>{player.username}</p>
            </div>
          ))}
        </div>

        <button className="bg-red-500 text-white p-4" onClick={() => leave()}>Leave room</button>
    </div>
  )
}

export default GameRoom