import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
    const getUser = localStorage.getItem('jwtToken')
    const jwtdecode = getUser ? jwtDecode(getUser) : null

    const handleLogout = () => {
        localStorage.removeItem('jwtToken')
    }
    return (
        <header className='flex items-center justify-between py-4 px-11 max-[1024px]:px-4 z-[20] fixed w-full bg-gradient-to-b from-gray-900 to-transparent'>
            <Link to='/' className='text-orange-500 text-4xl font-bold cursor-pointer w-2/12'>NETEX</Link>
            <div className="flex justify-between items-center w-3/12">
                <Link to='/' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">Home</Link>
                <Link to='/tvshows' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">TV Shows</Link>
                <Link to='/movies' className="text-gray-100 hover:text-gray-300 duration-200 ease-in-out">Movies</Link>
            </div>
            {jwtdecode ? (
                <div className="flex justify-end items-center w-2/12 text-white">
                    <img src={'https://i.pravatar.cc/150?img=3'} alt="avatar" className="align-middle w-[30px] h-[30px] rounded-[50%]" />
                    <span className="text-lg pr-4 pl-2">{jwtdecode.name} </span>
                    <Link to='/login' onClick={handleLogout} className="bg-orange-500 px-6 py-2 rounded-md cursor-pointer hover:bg-orange-600 duration-100 ease-in-out">Sign Out</Link>
                </div>
            ) : (
                <div className="flex justify-end items-center w-2/12 text-white">
                    <Link to='/login' className="pr-4 cursor-pointer">Sign In</Link>
                    <Link to='/register' className="bg-orange-500 px-6 py-2 rounded-md cursor-pointer hover:bg-orange-600 duration-100 ease-in-out">Sign Up</Link>
                </div>
            )}
            
        </header>
    )
}
