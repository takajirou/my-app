type TodoItemProps = {
    todo: string;
    onDelete: () => void; //消去用の関数を親から受け取る
};

// function TodoItem({ todo }: TodoItemProps) {
//     return <li>{todo}</li>;
// }

function TodoItem({ todo, onDelete }: TodoItemProps) {
    return (
        <li>
            {todo}
            {/* 削除ボタンを追加し、クリックするとonDelee関数が呼び出される */}
            <button onClick={onDelete} style={{ marginLeft: "10px" }}>
                Delete
            </button>{" "}
            {/* 削除ボタン */}
        </li>
    );
}

export default TodoItem;
