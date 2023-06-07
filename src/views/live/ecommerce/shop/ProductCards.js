// ** React Imports
import { Link } from "react-router-dom";

// ** Third Party Components
import classnames from "classnames";

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge } from "reactstrap";
import moment from "moment";

const ProductCards = (props) => {
  // ** Props
  const { products, activeView } = props;
  //Moment Date
  function formatDateTime(dateTime) {
    return moment(dateTime).format("MMMM DD YYYY HH:mm");
  }

  // ** Renders products
  const renderProducts = () => {
    if (products.length) {
      return products.map((item, index) => {
        return (
          <Card className="ecommerce-card" key={index}>
            <div className="item-img text-center mx-auto">
              <Link to={`/live/product/detail/${item.id}`}>
                <img
                  className="img-fluid card-img-top"
                  src={"http://localhost:8000" + item.files[0].URL}
                  alt={item.name}
                />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="item-cost">
                  <h6 className="item-price">Last Price ${item.price}</h6>
                </div>
              </div>
              <h6 className="item-name">
                <Link
                  className="text-body"
                  to={`/live/product/detail/${item.id}`}
                >
                  {item.name}
                </Link>
                <CardText tag="span" className="item-company">
                  By{" "}
                  <a
                    className="company-name"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.brand.name}
                  </a>
                </CardText>
              </h6>
              <CardText className="item-description">
                {item.description}
              </CardText>

              <CardText tag="span" className="item-description mt-1">
                <h6>
                  End Date: <span>{formatDateTime(item.end_date)}</span>
                </h6>
              </CardText>
            </CardBody>
            <div className="item-options text-center">
              <Button color="primary" className="btn-cart move-cart">
                <Link to={`/live/product/detail/${item.id}`}>
                  <span className="text-white">Give offer</span>
                </Link>
              </Button>
            </div>
          </Card>
        );
      });
    }
  };

  return (
    <div
      className={classnames({
        "grid-view": activeView === "grid",
        "list-view": activeView === "list",
      })}
    >
      {renderProducts()}
    </div>
  );
};

export default ProductCards;
