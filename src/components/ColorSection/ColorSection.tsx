import React, { useContext, useState } from "react";
import { AppContext } from "@/app/layout";

interface SectionProps {
  register: any;
}
import {
  Dropdown,
  CategoriesList,
  CategoriesListItem,
  IconDown,
  CheckBox,
} from "@/app/PageStyled";

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
                {...register("color")}
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
