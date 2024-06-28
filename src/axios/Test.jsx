import axios from 'axios'


export async function getTestModels(){
    try{
        const response = await axios.get('http://127.0.0.1:8000/api/get-models/')

        return response
    } 
    catch (error){
        console.log(error)
    }
}



