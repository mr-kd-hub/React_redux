import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 150,
    title: "Rich Dad,Poor Dad",
    description: "This is First Book",
  },
  {
    id: "p2",
    price: 100,
    title: "Learn Stock Analysis",
    description: "This is Second Book",
  },
  {
    id: "p3",
    price: 250,
    title: "Business Analystics",
    description: "This is Third Book",
  },
  {
    id: "p4",
    price: 200,
    title: "Improve Soft Communication Skill",
    description: "This is Forth Book",
  },
  {
    id: "p5",
    price: 500,
    title: "Presentation Skill",
    description: "This is Fifth Book",
  },
  {
    id: "p6",
    price: 5600,
    title: "Successful Startups",
    description: "This is Sixth Book",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => {
          return (
            <>
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
