// ** React Imports
import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

// ** Product detail components
import ItemFeatures from "./ItemFeatures";
import ProductDetails from "./ProductDetails";
import ProductBids from "./ProductBids";

// ** Reactstrap Imports
import { Card, CardBody } from "reactstrap";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import { getProduct, addBidRedux } from "../features/api";
import "@styles/base/pages/app-ecommerce-details.scss";

const Details = () => {
  // ** Vars

  // ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.product);
  const params = useParams().id;
  const productId = params;
  // ** ComponentDidMount : Get product
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getProduct(productId));
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    // Call the fetchData function initially
    fetchData();

    // Create an interval to call the fetchData function every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <Fragment>
      <div className="app-ecommerce-details">
        {store && store.productDetail ? (
          <Card>
            <CardBody>
              <ProductDetails
                dispatch={dispatch}
                productId={productId}
                getProduct={getProduct}
                addBidRedux={addBidRedux}
                data={store.productDetail}
              />
            </CardBody>

            <ItemFeatures />
            {store.productBids ? (
              <CardBody>
                <ProductBids data={store.productBids} />
              </CardBody>
            ) : (
              ""
            )}
          </Card>
        ) : (
          "ÜRÜN BULUNAMADI"
        )}
      </div>
    </Fragment>
  );
};

export default Details;
