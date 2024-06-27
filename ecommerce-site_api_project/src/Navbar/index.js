import './index.css'
import{FaHeart, FaSearch} from 'react-icons/fa';


const Navbar = ()=>{
return(
    <div>
     <div>
        <div className='Navbar'>
           <h3>E-shop</h3> 
          <li>Home</li>
          <li>Products</li>
          <li>Service</li>
          <li>Contact</li>
         
         
        </div> 
        <div>
        <FaSearch/>
        <FaHeart/>
      
        </div>
        </div>
        <div>
            <div>
                <h2>
                    Get the best product<br/>
                    at your home
                </h2>
                <button></button>
            </div>
            <div>

            </div>
            <div>
                <div className='Icons'>

                </div>
            </div>
        </div>
        <div>
            <div className='products'>
            <li>Electronics</li>
            <li>Cosmetics</li>
            <li>Cloths</li>
            <li>Books</li>
            <li>Furniture</li>
            <li>See more</li>
            </div>
        </div>
        
    </div>
)
}
export default Navbar