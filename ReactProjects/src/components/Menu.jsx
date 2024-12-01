import React from 'react';

const MenuItem = ({ name, description, price }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-amber-800">
      {name} <span className="float-right">{price}</span>
    </h3>
    <p className="text-amber-700">{description}</p>
  </div>
);

const Menu = ({ menuData }) => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">{category.category}</h3>
              {category.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
