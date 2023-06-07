// ** React Imports
import { useEffect, useRef, useState } from "react";
import moment from "moment";
// ** Reactstrap Imports
import { Row, Col, Button, CardText, Input, Alert } from "reactstrap";

const ProductDetails = (props) => {
  // ** Props
  const { data, dispatch, addBidRedux, productId } = props;
  const bidRef = useRef(null);
  // // ** State
  const [lastBid, setLastBid] = useState(0);
  const [addBid, setAddBid] = useState(0);
  const [isShowError, setIsShowError] = useState(false);
  const [isLoginSeller, setIsLoginSeller] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [isExpired, setIsExpired] = useState(false); // Durumu (state) tutmak için

  useEffect(() => {
    userData?.userId != null ? setIsLoginSeller(true) : setIsLoginSeller(false);
    if (data.bids && data.bids.length > 0) {
      setLastBid(data.bids[data.bids.length - 1].price);
      setAddBid(data.bids[data.bids.length - 1].price);
    } else {
      setLastBid(data.price ?? 0);
      setAddBid(data.price ?? 0);
    }
    const checkExpiration = () => {
      const now = moment(); // Şu anki zamanı al
      const end = moment(data.end_date); // Bitiş tarihini moment nesnesine dönüştür

      if (now.isAfter(end)) {
        setIsExpired(true); // Şu anki zaman, bitiş tarihini geçmişse durumu güncelle
      } else {
        setIsExpired(false); // Şu anki zaman, bitiş tarihini geçmemişse durumu güncelle
      }
    };

    checkExpiration();
  }, [data]);
  const changeBidAmount = (val) => {
    if (val.includes("e")) {
      bidRef.current.value = Number(lastBid);
    } else {
      setAddBid(val);
    }
  };
  const addNewBidSubmit = (addBid) => {
    if (data.bids && data.bids.length > 0) {
      if (
        addBid <= data.price ||
        addBid <= data.bids[data.bids.length - 1].price
      ) {
        setIsShowError(true);
      } else {
        dispatch(
          addBidRedux({
            product_id: Number(productId),
            seller_id: userData.userId,
            price: Number(addBid),
          })
        );
        setIsShowError(false);
      }
    } else {
      dispatch(
        addBidRedux({
          product_id: Number(productId),
          seller_id: userData.userId,
          price: Number(addBid),
        })
      );
    }
  };
  // ** Condition btn tag
  return (
    <Row className="my-2">
      <Col className="mb-2 mb-md-0" md="5" xs="12">
        <div
          style={{
            backgroundImage: `url('${
              "http://localhost:8000" + data.files?.[0].URL
            }')`,
            backgroundSize: "contain",
            backgroundPosition: "inherit  center",
            backgroundRepeat: "no-repeat",
            height: "500px",
            width: "100%",
          }}
        ></div>
      </Col>
      <Col md="7" xs="12">
        <div className="d-flex justify-content-between align-items-center">
          <h1>{data.name}</h1>
          <CardText tag="span" className="item-company">
            By
            <h5>
              <a
                className="company-name"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                {data.brand ? data.brand.name : "No Brand"}
              </a>
            </h5>
          </CardText>
        </div>
        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <CardText tag="span" className="item-category">
            <h5>
              <a
                className="category-name"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                {data.category ? data.category.name : "No Category"}
              </a>
            </h5>
          </CardText>
        </div>

        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <CardText tag="span" className="item-category">
            <h5>
              Seller Name:{" "}
              <a
                className="category-name"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                {data.seller?.identification
                  ? data.seller.identification.name
                  : "No Seller"}
              </a>
            </h5>
          </CardText>
        </div>
        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <h4 className=" me-1">
            Price: <span className="item-price">${data.price}</span>
          </h4>
        </div>
        <hr />
        <CardText className="mt-1">{data.description}</CardText>
        <hr />

        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <h4>
            Last Bid: <span className="item-price">${lastBid}</span>
          </h4>
        </div>
        {isExpired ? (
          <div className="d-flex flex-column flex-sm-row pt-1 ">
            <h5>
              <span className="item-price">Auction is over</span>
            </h5>
          </div>
        ) : (
          <div className="d-flex flex-column flex-sm-row pt-1 ">
            <Input
              type="number"
              className="w-25 me-0 me-sm-1 mb-1 mb-sm-0"
              placeholder="1"
              readOnly={!isLoginSeller}
              value={Number(addBid)}
              onChange={(e) => {
                changeBidAmount(e.target.value);
              }}
              ref={bidRef}
            />
            <Button
              className="btn-cart me-0 me-sm-1 mb-1 mb-sm-0"
              color="primary"
              onClick={() => addNewBidSubmit(addBid)}
              disabled={!isLoginSeller}
            >
              Offer Now
            </Button>
          </div>
        )}

        {isShowError ? (
          <div className="mt-2">
            <Alert color="danger">
              <div className="alert-body">
                Bid Must Be Greter Than Last Bid Or Product Price
              </div>
            </Alert>
          </div>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default ProductDetails;
