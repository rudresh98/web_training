import React from "react";
import style from "./Home.module.css";
import Section from "../Section/Section.jsx";
export default function Home() {
  console.debug("HOME");
  const sectionName = [
    {
      title: "FOOD",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, assumenda!",
    }
  ];
  return (
    <>
      <div className={style.customCenter}>
        <Section title={sectionName[0].title} content={sectionName[0].content} />
        {/* <div>Home</div> */}
      </div>
    </>
  );
}
