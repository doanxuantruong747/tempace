import React from "react";

const List = ({
  data = [],
  classList = "flex justify-between items-center w-full",
  ItemComponent,
}) => {
  return (
    <div className={classList}>
      {data?.map((item, index) => {
        return (
          <ItemComponent
            index={index}
            data={item}
            key={`content-item-${index}`}
          />
        );
      })}
    </div>
  );
};
export default List;
