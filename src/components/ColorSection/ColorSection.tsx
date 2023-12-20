import React, { useContext, useState } from "react";
import { AppContext } from "@/app/layout";
import { UseFormRegister } from "react-hook-form";
import {
  Dropdown,
  CategoriesList,
  CategoriesListItem,
  IconDown,
  CheckBox,
} from "@/app/PageStyled";

interface SectionProps {
  register: any;
}

export const ColorSection: React.FC<SectionProps> = ({ register }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorList } = useContext(AppContext);

  const categoryToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <section>
      <Dropdown>
        <h3>Колір</h3>
        <button type="button" onClick={categoryToggle}>
          <IconDown />
        </button>
      </Dropdown>
      {isOpen && (
        <CategoriesList>
          {colorList.map(({ label, id, color }) => (
            <CategoriesListItem key={id}>
              <CheckBox
                type="checkbox"
                id={id}
                // {...register("color")}
                value={color}
              />
              <label htmlFor={id}>{label} </label>
            </CategoriesListItem>
          ))}
        </CategoriesList>
      )}
    </section>
  );
};
