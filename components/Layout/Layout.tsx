import Card from '@components/Card'
import axios from 'axios'
import { Todo } from 'models/Todo/todo'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Layout(props: { children: any }) {
    const [todo, setTodo] = useState<Todo[]>()
    useEffect(() => {
        axios
            .get('api/todo/')
            .then((response) => { setTodo(response.data) })
    }, [todo])
    return (
        <div>
            <div className="grid gap-4 grid-cols-1 sm:grid-flow-cols-1 md:grid-cols-3 lg:grid-cols-4 m-4" id="todo">
                {todo?.map((t, idx: number) => (
                    <Card title={t.title} isfinished={t.isfinished} id={t.id} key={idx}/>
                ))}
            </div>
        </div>
    )
}
