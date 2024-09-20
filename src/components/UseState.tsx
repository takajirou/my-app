import { useState } from "react";

type CounterProps = {
    CountNumber: number;
};

function Counter({ CountNumber }: CounterProps) {
    const [count, setCount] = useState(CountNumber);
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
