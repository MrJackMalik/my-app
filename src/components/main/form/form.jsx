import "./form.scss";
const Form = () => {
  return (
    <div className="container">
      <form>
        <input
          type="text"
          className="todo-input"
          placeholder="Add todo"
          autoComplete="off"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </div>
  );
};
export default Form;
