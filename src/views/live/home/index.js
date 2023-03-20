import ExpiredProducts from "./components/ExpiredProducts";
import ProductsStartingToday from "./components/ProductsStartingToday";
import Slider from "./components/Slider";


export default function Home() {
    return (
<>  
<Slider/>
<ExpiredProducts/>
<ProductsStartingToday/>
</>
    )
}
