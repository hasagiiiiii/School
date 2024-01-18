import React from "react";
import { CategoriesContext } from "../../../../Context/CategoriesContext";
import "./index.scss";
const type = [
  { id: 1, name: "Discipline" },
  { id: 2, name: "Collage" },
];
const Category = () => {
  const { listCategories, CategoriesRevert } =
    React.useContext(CategoriesContext);

  const [listCategory, setListCategory] = React.useState(listCategories);

  const [data, setData] = React.useState("Discipline");

  React.useEffect(() => {
    data === "Discipline"
      ? setListCategory(listCategories)
      : setListCategory(CategoriesRevert);
    return () => data;
  }, [data, listCategories, CategoriesRevert]);

  return (
    <div className="categories">
      <div className="container">
        <p className="title">Categories</p>
        <div className="topcontent">
          <h1 className="content">Popular Discipline & Collage</h1>
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
            <div key={index} className="box-items">
              <div className="thumnail">
                <img loading="lazy" src={category.img} alt="" />
              </div>
              <div className="name">
                <p>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
