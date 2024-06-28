/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";

import axios from "axios";
import { jwtDecode } from "jwt-decode";



const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

const userObj = {
    user: localStorage.getItem('auth_token') ? jwtDecode(localStorage.getItem('auth_token')) : null,
    authToken: () => localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : null,
    inLobby: false,
}

const validate = (e) => {
    let isValid = true
    if (e.target.password.value === e.target.password2.value){
      console.log('match')
      return isValid
    } else {
      alert('Password does not match')
      isValid = false
      return isValid
    }
  }

const GetUserData = ( set, get ) => ({
    ...initialState,
    ...userObj,
    userToken: () => {
        try {
            const token = get(userObj.authToken)
            return token
        } catch (error) {
            alert(error)
        }
    },
    registerUser: async (e) => {
        e.preventDefault()
        console.log(e)
        if (validate(e)){
            await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/user/register/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    'email': e.target.email.value,
                    'username': e.target.username.value,
                    'first_name': e.target.firstname.value,
                    'last_name': e.target.lastname.value,
                    'password': e.target.password.value
                })
            })
            .then((res) => {
                console.log(res.data)
                alert('register successful')
                window.location.href = 'http://localhost:5173/login'

                // add message if user exists in DB
            }).catch((err) => {
                console.error(err)
                alert('error something is wrong')
            })
        } else{
            alert('Passwords do not match')
        }
    },

    loginUser: async (e) => {
        e.preventDefault();
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/token/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value
            })
        }).then((res) => {
           
            localStorage.setItem('auth_token', res.data.access)
            console.log(jwtDecode(res.data.access))
            set({ 
                authToken: jwtDecode(res.data.access), 
                user: jwtDecode(res.data.access)
            })
            window.location.href = 'http://localhost:5173/'
        }).catch((err) => {
            alert(err.message) // the backend must respond with a message key value pair
        })
    },

    logoutUser: () => {
        // setAuthTokens(null)
        // setUser(null)
        // setLoggedIn(false)

        set({ authToken: null, user: null })
        localStorage.removeItem('auth_token')
        window.location.href = 'http://localhost:5173/login/'
    },

})


const useGetUserData = create(GetUserData)

// const { userData, authToken }  = useGetUserData(
//     useShallow((state) => ({ userData:state.userData, authToken: state.authToken }))
// )


export default useGetUserData

