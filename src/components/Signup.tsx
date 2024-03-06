import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
const Signup = () => {
    return (
        <>
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-[#1f2a3e]">
                <div className="flex justify-center mx-auto">
                    <Link to={"/"}>
                        <Logo />
                    </Link>
                </div>

                <form className="mt-6">
                    <div>
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                        <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            <a href="#" className="text-xs text-white dark:text-gray-400 hover:underline">Forget Password?</a>
                        </div>

                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-[#1f2a3e] capitalize transition-colors duration-300 transform bg-[#00bdbc] rounded-lg hover:bg-[#00bdbc] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to={"/login"} className="font-medium text-[#1f2a3e] dark:text-gray-200 hover:underline">Login</Link></p>
            </div>
        </>
    )
}

export default Signup