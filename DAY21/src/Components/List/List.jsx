import style from "./List.module.css";
import Card from "../../shared/Card/Card";
const List = () => {
  console.debug("LISTS");
  const text = "DEMO";
  const date = JSON.stringify(new Date().toTimeString());
  const dummyData = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
    },
  ];
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
        <Card
          title={dummyData[0].title}
          img={dummyData[0].thumbnail}
          desc={dummyData[0].description}
          price ={dummyData[0].price}
        />
        <Card
          title={dummyData[1].title}
          img={dummyData[1].thumbnail}
          desc={dummyData[1].description}
          price ={dummyData[1].price}
        />
      </div>
    </>
  );
};

export default List;
