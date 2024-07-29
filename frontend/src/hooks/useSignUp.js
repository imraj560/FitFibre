import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const useSignUp = ()=>{

    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const signup = async(name, email, password, cPassword)=>{

        setError(null)

        const response = await fetch('http://localhost:4001/api/user/register', {

            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({name, email, password, cPassword})
        })

        const json = await response.json()

        if(!response.ok){

            setError(json.error)
        }

        if(response.ok){

            localStorage.setItem('user', JSON.stringify(json))
            navigate('/login')
            toast.success('Successfully Registered')
        }


    }

    return {signup, error}
}

export default useSignUp;