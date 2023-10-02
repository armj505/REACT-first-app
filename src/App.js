import logo from "./logo.svg";
import "./App.css";
import products from "./products";

function App() {
  const productList = products.map((book) => {
    return (
      <div className="Card">
        <img src={book.img}></img>
        <h2>{book.name}</h2>
        <h4>{book.price.toFixed(3)} KD</h4>
      </div>
    );
  });
  return (
    <div className="App">
      <div>
        <h1>Ahmad Publishing House</h1>
        <h3>A creatively and editorially independent publishing house</h3>
      </div>
      <div>
        <img
          className="headerimg"
          src="https://img1.wsimg.com/isteam/stock/86837/:/rs=h:1000,cg:true,m"
        ></img>
      </div>
      <div className="bookCard">{productList}</div>
    </div>
  );
}

export default App;
