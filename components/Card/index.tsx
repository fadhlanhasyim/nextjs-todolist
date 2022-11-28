import axios from 'axios';
import React from 'react'

export default function Card({ title, isFinished, id }: { title: string, isFinished: boolean, id: number }) {
    const color = isFinished ? "bg-green-600" : "bg-rose-600";
    // const []
    const handleDelete = (e: number) => {
        axios.delete(`api/todo/delete-todo/${e}`)
    }
    const handleUpdate = (e: number) => {
        axios.put(`api/todo/update-todo/${e}`, {
            'title':title,
            'isFinished': !isFinished
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="w-full transform transition duration-500 hover:scale-105" id="task-${data.pk}">
            <div className={"rounded-3xl p-4 " + color}>
                <div className="flex justify-between">
                    <span className="text-xs">22-11-2022</span>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{title}</span>
                </div>
                <p>description goes here...</p>
                <div className="flex justify-center mt-6">
                    <button className='cursor-pointer' onClick={() => handleUpdate(id)}>Update</button>
                </div>
            </div>
        </div>
    )
}
