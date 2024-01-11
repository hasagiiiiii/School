import React from "react";
import { useSelector } from "react-redux";
import { ListSubject } from "../../../../redux/selector";
const Table = () => {
  const listClass = useSelector(ListSubject)[0].listMonHoc;
  return (
    <div>
      {listClass.map((item) => (
        <p key={item.id}>{item.name_Monhoc}</p>
      ))}
    </div>
  );
};

export default Table;
