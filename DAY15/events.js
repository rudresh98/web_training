console.log("events loaded");
const h1 = document.getElementById("custom-id");
const getClick = (e) => {
  console.log("looged clicked");
  h1.classList.add("mystyle");
};
const getInput = (e) => {
  console.log(e.target.value);
};
const removeStyle = () => {
  h1.classList.remove("mystyle");
};
