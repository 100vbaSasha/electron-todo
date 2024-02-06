import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: { id: number; text: string; status: string }[];
    onUpdateStatus: (id: number, status: string) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdateStatus, onDelete }) => {
    console.log(todos);
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    status={todo.status}
                    onUpdateStatus={onUpdateStatus}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;