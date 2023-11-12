import { useState, useEffect } from "react";
import Title from "./Title";
import data from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const fetchCategories = () => {
      let cat = ["All"];
      menuItems.forEach((item) => {
        if (!cat.find((x) => x === item.category)) {
          cat.push(item.category);
        }
      });
      setCategories(cat);
    };
    fetchCategories();
  }, []);

  return (
    <main>
      <section className="menu">
        <Title />
        <div className="btn-container">
          {categories.map((btn, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  const newMenuItems = data.filter((item) => {
                    if (btn !== "All") {
                      return item.category === btn;
                    }
                    return item;
                  });
                  setMenuItems(newMenuItems);
                }}
                className="btn"
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            const { id, title, price, img, desc } = item;
            return (
              <article className="menu-item" key={id}>
                <img className="img" src={img} alt="" />
                <div className="item-info">
                  <header>
                    <h5>{title}</h5>
                    <p className="item-price">${price}</p>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default App;
