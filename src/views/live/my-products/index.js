// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Third Party Components
import { Row, Col } from "reactstrap";

// ** Demo Components
import TableServerSide from "./components/BidTable";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";
import axios from "axios";

const Tables = () => {
  const [products, setProducts] = useState([]);
  const seller = JSON.parse(localStorage.getItem("userData"));
  if (!seller) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const seller_id = seller.userId;
    const getProducts = async () => {
      await axios
        .get("http://localhost:8000/api/product/seller/" + seller_id)
        .then((res) => {
          setProducts(res.data.data.product);
          console.log(res.data.data.product);
        });
    };

    getProducts();

    console.log("Tables");
  }, []);

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <TableServerSide data={products} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
