//async関数としてfetchPostsを定義
//非同期処理を行い、外部APIからデータを取得

export async function fetchPosts() {
    //fetchでAPIリクエストを送信
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //取得したレスポンスデータをJson形式に変換して返す
    //response.jsonも非同期処理なので、
    return response.json();
}
