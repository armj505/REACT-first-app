import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  return (
    <div className="bookCard">
      {products.map((book) => {
        return (
          <ProductItem
            name={book.name}
            img={book.img}
            price={book.price}
            key={book.id}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
