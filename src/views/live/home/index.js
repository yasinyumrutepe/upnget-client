import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import ExpiredProducts from "./components/ExpiredProducts";
import ProductsStartingToday from "./components/ProductsStartingToday";
import Slider from "./components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "./features/api";
import { useEffect } from "react";
// ** Third Party Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
const productSwiperParams = {
  slidesPerView: 3,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
};

const brandSwiperParams = {
  className: "swiper-centered-slides swiper-container p-1",
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
};

export default function Home() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData());

    console.log({ store });
  }, [dispatch]);

  return (
    <>
      <Card>
        <CardBody>
          <Card>
            <CardBody>
              <Swiper {...productSwiperParams}>
                {store.products?.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link to={"/live/product/detail/" + product.id}>
                      <img
                        src={"http://localhost:8000" + product.files[0].URL}
                        height={300}
                        className="img-fluid"
                      />
                      <h2 className="mt-3 text-primary text-center">
                        {product.name}
                      </h2>
                      <h4 className="mt-1 text-center">
                        Last Price{" "}
                        <span className="text-primary ">${product.price}</span>
                      </h4>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardBody>
          </Card>

          <Card className="bg-transparent shadow-none mt-4">
            <CardBody>
              <Swiper dir={"ltr"} {...brandSwiperParams}>
                {store.brands?.map((brand) => (
                  <SwiperSlide key={brand.id} className="rounded swiper-shadow">
                    <h4 className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
                      {brand.name}
                    </h4>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
}
