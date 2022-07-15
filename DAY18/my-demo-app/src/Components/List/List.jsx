import style from "./List.module.css";
import Card from "../../shared/Card/Card";
const List = () => {
  const text = "DEMO";
  const date = JSON.stringify(new Date().toTimeString());
  return (
    <>
      <h1>List</h1>
      <span>HI THIS IS A LIST</span>
      <p className={style.customText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est
        ipsum velit officia quis necessitatibus ratione quaerat saepe
        consequatur odit doloremque doloribus quos autem ducimus nihil
        accusantium et totam magni repellendus hic, perspiciatis suscipit,
        repudiandae vero accusamus? Asperiores non eos, libero necessitatibus
        accusantium suscipit labore nulla, enim corporis maxime nemo.
      </p>
      {date}
      <p>{text}</p>
      <div className={style.customCard}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default List;
