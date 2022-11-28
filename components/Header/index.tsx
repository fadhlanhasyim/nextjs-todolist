import { async } from "@firebase/util";
import { useAuthContext } from "contexts/authContext";
import { Todo } from "models/Todo/todo";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const { user, logout } = useAuthContext()
    console.log(user)
    const handleLogout = async () => {
        try {
            await logout()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <nav className="flex justify-between mb-10">
                <div className="text-5xl font-bold text-white h-50">
                    Hello!
                </div>
                <div className="flex gap-2 font-semibold">
                    {user ? (
                        <div className="flex justify-between items-center">

                            <div
                                className="p-2 mr-2 bg-gradient-to-r from-green-300 to-blue-800 rounded-lg w-fit text-white text-sm px-8 md:py-3 lg:py-3 py-9">
                                <button><Link href={"/add-todo"}>Add Todo</Link></button>
                            </div>
                            <div
                                className="p-2 bg-gradient-to-r from-red-500 to-[#3F0071] rounded-lg w-fit text-white text-sm px-7 md:py-3 lg:py-3 py-9">
                                <button onClick={handleLogout}><Link href={"/login"}>Logout</Link></button>
                            </div>
                        </div>
                    ) : (<div
                        className="p-2 bg-gradient-to-r from-red-500 to-[#3F0071] rounded-lg w-fit text-white text-sm px-7 md:py-3 lg:py-3 py-9">
                        <button><Link href={"/login"}>Login</Link></button>
                    </div>)}
                </div>
            </nav>
        </div>
    )
}
