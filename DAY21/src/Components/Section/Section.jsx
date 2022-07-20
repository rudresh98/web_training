import style from "./Section.module.css";
import styled from "styled-components";

function Section(props) {
  console.debug(props);
  return (
    <>
      <Wrapper>
        <Title>{props.title}</Title>
        <Para>
          {props.content}
        </Para>
        <Button>Submit</Button>
        <RedButton>Red Submit</RedButton>
      </Wrapper>
      {/* <div className={style.customP}>
        <p>{props.content}</p>
      </div> */}
    </>
  );
}

const Title = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
`;
const Para = styled.p`
  color: brown;
  font-size: 40px;
`;
const RedButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
export default Section;
