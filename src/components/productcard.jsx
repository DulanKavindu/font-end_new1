export function ProductCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.img} />
      <h1>{props.name}</h1>
      <h2>price:{props.price}</h2>
      <button>Buy Now</button>
    </div>
  );
}
