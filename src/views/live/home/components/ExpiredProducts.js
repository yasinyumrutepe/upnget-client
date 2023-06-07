// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react";

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText, Button } from "reactstrap";

// ** Images

import { Link } from "react-router-dom";

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
};

const ExpiredProducts = (props) => {
  return (
    <CardBody>
      <CardTitle>Products to be Finished Today</CardTitle>
      <Swiper {...params}>
        {props.products_finished_today.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className="ecommerce-card">
                <Link to={`/live/product/detail/${item.id}`}>
                  <div className="item-img text-center mx-auto">
                    <img
                      className="img-fluid card-img-top"
                      src={"http://localhost:8000" + item.files[0]["URL"]}
                    />
                  </div>
                  <CardBody>
                    <h6 className="item-name text-center">{item.name}</h6>
                  </CardBody>
                  <div className="item-options text-center">
                    <div className="item-wrapper">
                      <div className="item-cost">
                        <h4 className="item-price">${item.price}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CardBody>
  );
};

export default ExpiredProducts;
