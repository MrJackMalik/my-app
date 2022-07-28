import "./header.scss";
const Header = () => {
  return (
    <header>
      <div>
        <h1>To Do</h1>
      </div>
      <div>
        <form action="" method="post">
          <input
            type="text"
            name="to-do"
            id=""
            className="header-input"
            placeholder="Add todo"
            autocomplete="off"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <img src="" alt="" />
        <span>Jack Malik</span>
      </div>
    </header>
  );
};
export default Header;
