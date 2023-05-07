import { Card, CardBody, Col, Row } from "reactstrap";
import ExpiredProducts from "./components/ExpiredProducts";
import ProductsStartingToday from "./components/ProductsStartingToday";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "./features/api";
import { useEffect } from "react";


export default function Home() {
 
    const dispatch = useDispatch()
    const store = useSelector(state => state.home)

    useEffect(() => {
        dispatch(getHomeData())
    }, [dispatch])
    

    return (
<>  
<Card>  
    <CardBody>  
        <Row>   
<Col className="mt-2"  sm="12" md="12" lg="12" >
<Slider advertising={store.advertising} />
</Col>
<Col className="mt-2" sm="12" md="12" lg="12" >
<ExpiredProducts products_finished_today={store.products_finished_today}/>
</Col>
<Col className="mt-2" sm="12" md="12" lg="12" >
<ProductsStartingToday products_start_today={store.products_start_today}/>
</Col>
</Row>
</CardBody>
</Card>
</>
    )
}
