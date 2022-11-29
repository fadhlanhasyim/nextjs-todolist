import axios from 'axios';
import { useAuthContext } from 'contexts/authContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Add() {
  const {user} = useAuthContext()
  const [newTodo, setNewTodo] = useState("");
  const router = useRouter()

  const handleinput = (e: any) => {
    setNewTodo(e.target.value);
  };
  const HandleSubmit = () => {
    // console.log(newTodo);
    axios
      .post('api/todo/post-todo', {

        "title": newTodo,
        "isfinished": false,
        "uemail": user.email,

      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className='font-bold mb-7'>ADD NEW TODO</h1>
      <div className="">
        <h2 className='mb-1'>Title:</h2>
        <div className="flex flex-col justify-between">
          <input
            className='form-control text-sm rounded-lg p-2 w-full'
            type="text"
            value={newTodo}
            onChange={(e) => handleinput(e)}
          ></input>
          <div className='flex justify-between'>

            <button onClick={() => HandleSubmit()} className="cursor-pointer mt-4 mr-2 p-2 bg-red-100 rounded-lg w-full text-[#3F0071] font-bold">
              Add
            </button>
            <button onClick={() => router.push('/')} className="cursor-pointer mt-4 p-2 bg-red-100 rounded-lg w-full text-[#3F0071] font-bold">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
