import { useState } from "react";
import TodoItem from "./TodoItem";

//このコンポーネントはTodoの追加や一覧表示を定義
function TodoList() {
    //Todosという初期値が空の配列を定義する
    //この配列には、Todoリストが格納される
    //useState<string[]> で文字列型の配列を管理　　string[]で文字列の型定義
    //useStateで状態管理した時に管理する状態がstring出ないからここで定義している
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");

    //新しいTodoをtodos配列に追加する関数
    //スプレット構文を使って、既存のtodosにnewTodoを追加している。
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    // この関数は、渡されたインデックスindexToDeleteのTodoを削除する役割を果たします。
    // 引数: indexToDeleteは削除したいTodoの位置（インデックス）を示します。
    // filterメソッド: todosという配列に対して、filterメソッドを使って新しい配列を作ります。filterは条件に合った要素だけを残すメソッドです。
    // _: ここは無名変数で、実際のTodoの値は使わないのでアンダースコアを使っています。
    // index: これはtodos配列の各要素のインデックスです。filterメソッドはこのインデックスを使って、削除対象のインデックスと一致しない要素だけを残すようにしています。
    // setTodos: setTodos関数を使って、新しい配列（削除された後の配列）をtodosの状態に反映します。

    const deleteTodo = (indexToDelete: number) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
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
                    <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
