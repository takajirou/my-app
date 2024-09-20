type TodoItemProps = {
    todo: string;
};

function TodoItem({ todo }: TodoItemProps) {
    return <li>{todo}</li>;
}

export default TodoItem;
