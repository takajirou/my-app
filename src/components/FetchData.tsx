import { useState, useEffect } from "react";

import { fetchPosts } from "./apiClient";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function FetchData() {
    //状態変数dataを定義。初期値は空。
    //APIから取得したデータをこの変数に保存する。
    const [data, setData] = useState<Post[]>([]);
    //useEffectフックを使って、コンポーネントがマウントされたときにfetchPosts関数を呼び出す
    //空の依存配列[]を渡しているので、この処理はコンポーネントの最初の描画時に一度だけ実行される
    useEffect(() => {
        //fetchPostsを呼び出して、データを取得し、そのデータをsetData関数を使って状態に保存
        fetchPosts().then((data) => setData(data));
    }, []);

    return (
        <div>
            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;
