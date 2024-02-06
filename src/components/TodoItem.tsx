import React, { useState } from 'react';

interface TodoItemProps {
    id: number;
    text: string;
    status: string;
    onUpdateStatus: (id: number, status: string) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, status, onUpdateStatus, onDelete }) => {
    const handleStatusChange = () => {
        const newStatus = status === 'In Progress' ? 'Done' : 'In Progress';
        onUpdateStatus(id, newStatus);
    };

    return (
        <div>
            <span>{text}</span>
            <button onClick={handleStatusChange}>Toggle Status</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default TodoItem;