import React from "react";
import { CategoriesContext } from "../../../../Context/CategoriesContext";
const type = [
  { id: 1, name: "Discipline" },
  { id: 2, name: "Collage" },
];
const Category = () => {
  const { listCategories, CategoriesRevert } =
    React.useContext(CategoriesContext);
  const [listCategory, setListCategory] = React.useState(listCategories);
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    data === "Discipline"
      ? setListCategory(listCategories)
      : setListCategory(CategoriesRevert);
    return () => data;
  }, [data, listCategories, CategoriesRevert]);
  return (
    <div className="categories">
      <p className="title">Categories</p>
      <div className="topcontent">
        <div className="content">Popular Discipline & Collage</div>
        <div className="action">
          {type.map((item) => (
            <button
              className={data === item.name ? "active" : ""}
              onClick={(e) => setData(e.target.value)}
              value={item.name}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="destination">
        {listCategory.map((category, index) => (
          <div key={index} className="boxitem">
            <div className="thumnail">
              <img src={category.img} alt="" />
            </div>
            <div className="name">
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
