import { useState, type FormEvent, type ChangeEvent } from
    "react";

export default function TodoInsert({ onAdd }: { onAdd: (text: string) => void}) {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = value.trim();
        if (!text) return;
        onAdd(text);
        setValue("");
    };

    return (
        <div className="todo-input-container">
            <form onSubmit={onSubmit} className="todo-input-container">
            <input
                className="todo-input"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="할 일을 입력한 후, ENTER"
            />
            <button type="submit" className="add-button">추가</button>
        </form>
        </div>
       
    );
}
