import { useState } from "react";
import TodoItem from "./TodoItem";

//このコンポーネントはTodoの追加や一覧表示を定義
function TodoList() {
    //Todosという初期値が空の配列を定義する
    //この配列には、Todoリストが格納される
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
    return (
        <div>
            {/* テキスト入力フィールド、newTodoの値が変わるたびに状態を更新 */}
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            {/* ボタンを押すと新しいTodoが追加される */}
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {/* todosの配列の各要素をmapで処理して、TodoItemコンポーネントを生成している */}
                {todos.map((todo, index) => (
                    //TodoItemにtodoを渡して表示、keyには配列のインデックスを使用
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
