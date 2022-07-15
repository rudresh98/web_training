import "./List.css";
import Card from "../Card/Card";
const List = () => {
  const text = "DEMO";
  const date = JSON.stringify(new Date().toTimeString());
  return (
    <>
      <h1>List</h1>
      <p className="custom-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est
        ipsum velit officia quis necessitatibus ratione quaerat saepe
        consequatur odit doloremque doloribus quos autem ducimus nihil
        accusantium et totam magni repellendus hic, perspiciatis suscipit,
        repudiandae vero accusamus? Asperiores non eos, libero necessitatibus
        accusantium suscipit labore nulla, enim corporis maxime nemo.
      </p>
      {date}
      <p>{text}</p>
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default List;
