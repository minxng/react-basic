import "./App.css";

function AppJSX() {
  const name = "min";
  const list = ["우유", "딸기", "체리", "요거트"];
  return (
    <>
      <h1 className="orange">hello!</h1>
      {name}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
