type HelloUserProps = {
    name: string;
    hobby: string[];
    age: number;
};

function HelloUser({ name, hobby, age }: HelloUserProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <ul>
                {hobby.map((hobby, index) => {
                    return <li /*key={index}*/>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}
export default HelloUser;

// type AgeProps = {};

// function Age({ age }: AgeProps) {
//     return;
// }

// type HobbyProps = {

// };

// function Hobby({ hobby }: HobbyProps) {
//     return <p>Hobby:{hobby}</p>;
// }
