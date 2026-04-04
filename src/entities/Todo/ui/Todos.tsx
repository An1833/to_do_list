import {Card, CardActions, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import type { TodoType } from "../model/todoType";

import { mockTodos } from "../model/mockTodos";

type TodoProps = {
    todo: TodoType
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
            <Checkbox checked={todo.completed}></Checkbox> * закончил тут 07.03!!!!!
        </CardActions>
    </Card>
    );
}


const Todos = () => {
    return (
        <Stack flexWrap={'wrap'} spacing={2} direction={'row'}>
            {mockTodos.map((todo)=>{
            return <Todo todo={todo}/>;
            })}
        </Stack>
    );
};

export default Todos;
