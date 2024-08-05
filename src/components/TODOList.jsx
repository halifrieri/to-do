import React from "react";

function Item({ item, setTodos }) {
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo
            )
        );
    };

    return (
        <li id={item?.id} className="todo_item">
            <div className="todo_items_left" onClick={completeTodo}>
                {item.is_completed ? (
                    <svg width="24" height="24" fill="#22C55E">
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                ) : (
                    <svg width="24" height="24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="#22C55E" strokeWidth="2" />
                        <circle cx="12" cy="12" r="6" fill="#0d0d0d" />
                    </svg>
                )}
                <p className={item.is_completed ? "completed" : ""}>
                    {item?.title}
                </p>
            </div>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg width="24" height="24">
                        <path d="" />
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg width="24" height="24">
                        <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}

function TODOList({ todos, setTodos }) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => (
                    <Item key={index} item={item} setTodos={setTodos} />
                ))
            ) : (
                <p className="empty_state">Seems lonely in here, what are you up to?</p>
            )}
        </ol>
    );
}

export default TODOList;
