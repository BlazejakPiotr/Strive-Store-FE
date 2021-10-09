import ProductListItem from "./ProductListItem";

export default function ProductList({ data }) {
  return data.map((product) => (
    <ProductListItem key={product._id} data={product} />
  ));
}
