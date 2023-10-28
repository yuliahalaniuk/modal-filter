import React, { useContext, useState } from "react";
import { AppContext } from "@/app/layout";

interface SectionProps {
  register: any;
}

import {
  Dropdown,
  FilterInput,
  CategoriesList,
  CategoriesListItem,
  IconDown,
  CheckBox,
} from "@/app/PageStyled";

export const BrandSection: React.FC<SectionProps> = ({ register }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { brandList } = useContext(AppContext);
  const [filter, setFilter] = useState<string>("");

  const categoryToggle = () => {
    setIsOpen((state: boolean) => !state);
  };

  const filterBrands = () => {
    const filterLower = filter.toLowerCase();
    return brandList.filter((brand) =>
      brand.label.toLowerCase().includes(filterLower)
    );
  };

  return (
    <section>
      <Dropdown>
        <h3>Бренд</h3>
        <button type="button" onClick={categoryToggle}>
          <IconDown />
        </button>
      </Dropdown>
      {isOpen && (
        <div>
          <FilterInput
            type="text"
            value={filter}
            placeholder="Пошук"
            onChange={(e) => setFilter(e.target.value)}
          />

          <CategoriesList>
            {filterBrands().map(({ label, id, brand }) => (
              <CategoriesListItem key={id}>
                <CheckBox
                  type="checkbox"
                  id={id}
                  {...register("brand")}
                  value={brand}
                />
                <label htmlFor={id}>{label} </label>
              </CategoriesListItem>
            ))}
          </CategoriesList>
        </div>
      )}
    </section>
  );
};
