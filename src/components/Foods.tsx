function Foods() {
    const FavoriteFoods = ["ピザ", "寿司", "たこ焼き", "パスタ", "アイスクリーム"];
    return (
        <ul>
            {FavoriteFoods.map((food) => {
                return <li>{food}</li>;
            })}
        </ul>
    );
}

export default Foods;
