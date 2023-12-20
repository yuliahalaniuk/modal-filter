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

// const vrMap: any = {};

// variationsArray?.forEach((item) => {
//   const checkDoubleId = (id: string) => {
//     if (Array.isArray(vrMap[item.parent._id])) {
//       if (
//         vrMap[item.parent._id].some(
//           (existingItem: any) => existingItem._id === id
//         )
//       ) {
//         return vrMap[item.parent._id];
//       }
//     }
//     return [...vrMap[item.parent._id], item];
//   };

//   if (item.parent._id) {
//     vrMap[item.parent._id] = Array.isArray(vrMap[item.parent._id])
//       ? checkDoubleId(item._id)
//       : [item];
//   }
// });

// variationsArray?.forEach(item => {
// console.log('item', item);

// const checkDoubleId = (item: any) => {
//   // console.log('include', uniqueIds.includes(id));
//   // return uniqueIds.includes(id) ? [item] : [];
//   console.log(item._id);
//   uniqueIds.includes(item._id)
//     ? newNew[item.parent._id]
//     : [...newNew[item.parent._id], item];
// };

// console.log('newNew[item.parent._id]', newNew[item.parent._id]);
// if (item.parent._id) {
//   newNew[item.parent._id] = Array.isArray(newNew[item.parent._id])
//     ? checkDoubleId(item)
//     : [item];

//   // newNew[item.parent._id] = newNew[item.parent._id] || [];
//   // newNew[item.parent._id] = newNew[item.parent._id].concat(
//   //   checkDoubleId(item?._id)
//   // );
// }

// const checkDoubleId = () => {
//   // console.log('item', item);
//   // console.log(
//   //   ' uniqueIds.includes(item._id)',
//   //   uniqueIds.includes(item._id)
//   // );

//   return uniqueIds.includes(item._id)
//     ? newNew[item.parent._id]
//     : [...newNew[item.parent._id], item];
// };

//   if (item.parent._id) {
//     newNew[item.parent._id] = Array.isArray(newNew[item.parent._id])
//       ? checkDoubleId()
//       : [item];
//   }
// });

// const checkDoubleId = (id: string) => {
//   if (Array.isArray(newNew[item.parent._id])) {
//     if (
//       newNew[item.parent._id].some(
//         (existingItem: any) => existingItem._id === id
//       )
//     ) {
//       return newNew[item.parent._id];

// const variationsArray = info?.data?.variations
//   ?.map(vr => vr?.properties)
//   ?.flat(1);

// const test: Record<string, IPropertyValue> = {};

// Object.assign(
//   test,
//   ...variationsArray.map(value => {
//     return {
//       [value._id]: value,
//     };
//   })
// );

// // console.log('test', test);

// const sortedProperties: any = {};

// Object.entries(test).forEach(([id, value]: any[]) => {
//   if (value.parent._id) {
//     sortedProperties[value.parent._id] = Array.isArray(
//       sortedProperties[value.parent._id]
//     )
//       ? [...sortedProperties[value.parent._id], value.]
//       : [value];
//   }
// });

// console.log('newTest', sortedProperties);

// **********************

// const nexConst: Record<
//   string,
//   { item: IProperty; childrenList: IPropertyValue[] }
// > = {};

// const sortedProperties = variationsArray?.map(value => {
//   let parentData = nexConst[value.parent._id];

//   parentData = {
//     ...parentData,
//     item: value.parent,
//     childrenList: parentData?.childrenList
//       ? [...parentData?.childrenList, value]
//       : [value],
//   };

//   return parentData;
// });

// console.log('sortedarray', sortedProperties);
