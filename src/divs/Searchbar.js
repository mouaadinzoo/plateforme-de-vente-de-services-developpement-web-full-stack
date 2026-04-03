import { FaHeart } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
    return ( 
        <div className="Searchbar">
            
        <div className="uu">
        
            
     <input type="text" name="text" class="input" placeholder="Type here to search"></input>  
     <button className="searchbutton"><BsSearch/></button> 
     
        </div>
        </div>



     );
}
 
export default Searchbar;