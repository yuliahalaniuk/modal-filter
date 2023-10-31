import { createContext, useContext, useState } from "react";

interface IFilterContext {}

interface IFilterProviderProps {
  children: React.ReactNode;
}

interface IFilterProviderState extends Record<string, ISlot[]> {}

interface IFilterFormData extends Record<string, string[]> {}

interface ISlot {
  wr: string;
  label: string;
  brand?: string;
  color?: string;
  id: string;
}

export const FilterContext = createContext({} as IFilterContext);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: IFilterProviderProps) => {
  const [state, setState] = useState<IFilterProviderState>({});
  const [formData, setFormData] = useState<IFilterFormData>({});

  const handleFilter = () => {
    const groupedData: IFilterProviderState = {};

    colorList.map((item) => {
      const dataKey = item.wr;
      groupedData[dataKey] = Array.isArray(groupedData[dataKey])
        ? [...groupedData[dataKey], item]
        : [item];
    });

    console.log("groupedData", groupedData);
    setState(groupedData);
  };

  return (
    <FilterContext.Provider value={{ colorList }}>
      <button type="button" onClick={handleFilter}>
        Add State
      </button>
      <div className="section">
        {Object.entries(state).map(([title, array]) => {
          return (
            <div key={title}>
              <h2>{title}</h2>
              <div>
                {array.map((item) => (
                  <div key={item.id}>{item.color}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {children}
    </FilterContext.Provider>
  );
};

const colorList = [
  { wr: "1", label: "Red", color: "red", id: "color-1Aa2" },
  { wr: "2", label: "Blue", color: "blue", id: "color-BbC3" },
  { wr: "4", label: "Green", color: "green", id: "color-DdE4" },
  { wr: "5", label: "Yellow", color: "yellow", id: "color-FfG5" },
  { wr: "2", label: "Purple", color: "purple", id: "color-HhI6" },
  { wr: "5", label: "Orange", color: "orange", id: "color-JjK7" },
  { wr: "45", label: "Pink", color: "pink", id: "color-LlM8" },
  { wr: "89", label: "Brown", color: "brown", id: "color-NnO9" },
  { wr: "56", label: "Gray", color: "gray", id: "color-PpQ10" },
  { wr: "45", label: "Cyan", color: "cyan", id: "color-RrS11" },
  { wr: "34", label: "Apple", brand: "Apple", id: "brand-1Aa2" },
  { wr: "67", label: "Nike", brand: "Nike", id: "brand-BbC3" },
  { wr: "12", label: "Google", brand: "Google", id: "brand-DdE4" },
  { wr: "67", label: "Coca-Cola", brand: "Coca-Cola", id: "brand-FfG5" },
  { wr: "2", label: "Microsoft", brand: "Microsoft", id: "brand-HhI6" },
  { wr: "9", label: "Amazon", brand: "Amazon", id: "brand-JjK7" },
  { wr: "12", label: "Samsung", brand: "Samsung", id: "brand-LlM8" },
  { wr: "23", label: "Toyota", brand: "Toyota", id: "brand-NnO9" },
  { wr: "45", label: "McDonald's", brand: "McDonald's", id: "brand-PpQ10" },
  { wr: "67", label: "Adidas", brand: "Adidas", id: "brand-RrS11" },
  { wr: "67", label: "Facebook", brand: "Facebook", id: "brand-TtU12" },
  { wr: "89", label: "Volkswagen", brand: "Volkswagen", id: "brand-VvW13" },
];
