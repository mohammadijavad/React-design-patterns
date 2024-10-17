const categories = [
  {
    id: 1,
    name: "Category 1",
    subcategories: [
      {
        id: 2,
        name: "Subcategory 1.1",
        subcategories: [
          {
            id: 3,
            name: "Subcategory 1.1.1",
            subcategories: [
              { id: 3, name: "Subcategory 1.1.2", subcategories: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Category 2",
    subcategories: [],
  },
];

const Category = ({ category }) => {
  return (
    <ul>
      <li>{category.name}</li>
      {category.subcategories.length > 0 && (
        <ul>
          {category.subcategories.map((subcat) => (
            <Category key={subcat.id} category={subcat} />
          ))}
        </ul>
      )}
    </ul>
  );
};
const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
