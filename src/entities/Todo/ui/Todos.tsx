import {Card, CardActions, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import type { TodoType } from "../model/todoType";
import { useState } from 'react';
import { mockTodos } from '../model/mockTodos.ts';



type TodoProps = {
    todo: TodoType
    setTodo: (todo: TodoType) => void;
}


const Todo = ({todo} : TodoProps) => {

    return ( 
    <Card variant="outlined" sx={{maxWidth:250}}>
        <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {todo.title}
        </Typography>
        <Typography variant="body2">{todo.description}</Typography>
        </CardContent>
        <CardActions>
            <Checkbox checked={todo.completed}></Checkbox> 
        </CardActions>
    </Card>
    );
}


const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>(mockTodos);

    const setTodo = (todo: TodoType) => {
        const updatedTodos = todos.map ((t) => {
            if (t._id === todo._id) {
                return todo;
            }
        return t;
        });
        setTodos (updatedTodos)
    };

    return (
        <Stack flexWrap={'wrap'} spacing={2} direction={'row'}>
            {mockTodos.map((todo)=>{
            return <Todo todo={todo} key={todo._id} setTodo={setTodo}/>;
            })}
        </Stack>
    );
};

export default Todos;
