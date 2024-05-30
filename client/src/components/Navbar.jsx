import { Link } from "react-router-dom";
import Dropdown from "./ui/Dropdown";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react";

export default function Navbar() {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const getUser = async () => {
        await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if(response.data){
                setName(response.data.name)
            } else {
                navigate('/')
            }
        })
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleLogout = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
                withCredentials: true
            }).then(() => {
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='flex items-center justify-between py-4 px-11 max-[500px]:px-4 max-[1024px]:px-4 z-[20] fixed w-full bg-gradient-to-b from-gray-900 to-transparent'>
            <div className="min-[701px]:hidden max-[700px]:block w-2/12">
                <Link to='/dashboard' className='text-orange-500 text-4xl font-bold cursor-pointer'>N</Link>
            </div>
            <div className="min-[701px]:block max-[700px]:hidden w-2/12">
                <Link to='/dashboard' className='text-orange-500 text-4xl font-bold cursor-pointer'>NETEX</Link>
            </div>
            <div className="flex justify-start items-center gap-4 w-7/12">
                <Link to='/dashboard' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">Home</Link>
                <Link to='/tvshows' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">TV Shows</Link>
                <Link to='/movies' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">Movies</Link>
            </div>
            <div className="flex justify-end items-center w-3/12 text-white">
                <Dropdown jwtdecodedName={name} handleClick={handleLogout} />
            </div>

        </header>
    )
}
