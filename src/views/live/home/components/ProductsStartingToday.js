// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Button } from 'reactstrap'

import { Link } from 'react-router-dom'

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const ProductsStartingToday = (props) => {
  return (
   
      <CardBody>
        <CardTitle>Products to be Starting Today
</CardTitle>
<Swiper {...params}>
          {props.products_start_today.map((item, index) => {
        <SwiperSlide key={index}>
          <Card className='ecommerce-card'>
          <Link to={`/apps/ecommerce/product-detail/`}>
            <div className='item-img text-center mx-auto'>
                <img className='img-fluid card-img-top' src='/src/assets/images/pages/eCommerce/2.png'  />
            </div>
            <CardBody>
              <h6 className='item-name text-center'>
                <Link className='text-body ' to={`/apps/ecommerce/product-detail/`}>
              {item.name}
                </Link>
              </h6>
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'>${item.price}</h4>
                </div>
              </div>
            </div>
            </Link>
          </Card>
          </SwiperSlide>
          })}
         
          
        </Swiper>
      </CardBody>
    
  )
}

export default ProductsStartingToday
