import { useEffect, useState } from "react"
import { getTestModels } from "../axios/Test"

const Room = () => {

    const [sampleData, setSampleData] = useState([])

    useEffect(() => {
        getTestModels().then(function(res){
        console.log(res)
        setSampleData(res.data)
    })
    }, [])
  return (
    <div>
        {sampleData.map((data) => (
            <div key={data.id} className="p-3">
            <p>{data.title}</p>
            <p>{data.description}</p>
            </div>
        ))}
    </div>
    
  )
}

export default Room