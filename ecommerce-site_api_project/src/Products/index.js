import { getProducts } from './hooks/getProducts';
import './index.css';
const Users = () => {
  const { products, error, loading } = getProducts();
  console.log({ products });
  
  return (
    <div className="Images">
      {loading && <h2> Loading products ...</h2>}
      {error.length > 0 && <h2> {error}</h2>}
      {products.map((user) =>(
        <UserCard
          key={products.id}
          image={user.image}
          fullName={`${products.name} ${products.price}`}
        />
))}
    </div>
  );
      };
      export default Users;
