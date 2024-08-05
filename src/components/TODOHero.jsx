// src/components/TODOHero.jsx
function TODOHero({ todos_completed, total_todos }) {
    console.log('TODOHero component rendering');

    return (
      <section>
        <div className="todohero_section">
          <p>Task Done</p>
          <p>Keep it up</p>
        </div>
        <div className="todohero_count">
          {todos_completed}/{total_todos}
        </div>
      </section>
    );
  }
  export default TODOHero;