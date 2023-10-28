import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  min-height: 100vh;
`;

export const Description = styled.div`
  display: inherit;
  justify-content: center;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  > p {
    position: relative;
    margin-bottom: 5rem;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 1rem;
  background-color: rgba(var(--callout-rgb), 0.5);
  border: 1px solid rgba(var(--callout-border-rgb), 0.3);
  border-radius: var(--border-radius);
  color: #fff;

  &:hover,
  &:focus {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const ModalBody = styled.div`
  margin-left: auto;
  height: 100vh;
  min-width: 250px;
  width: 30%;
  background-color: #fff;
  padding: 30px 20px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  overflow-y: scroll;
`;

export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 32px;
  height: 32px;
`;

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 12px;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: white;
  padding: 8px 12px;
  border: 1px solid rgba(83, 82, 82, 0.7);
  border-radius: 4px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    outline: none;

    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const CategoriesList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;
export const CategoriesListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const IconDown = styled(AiOutlineDown)`
  width: 20px;
  height: 20px;
`;

export const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  margin: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border-radius: 2px;
  outline: 1px solid red;
  box-shadow: none;
  font-size: 0.8em;
  text-align: center;
  line-height: 1em;
  background: #fff;

  &:checked::after {
    content: "✔";
    color: red;
  }
`;
