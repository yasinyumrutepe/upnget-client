// ** React Imports
import { Fragment } from 'react'

// ** Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
// ** Demo Components

// ** Images
import img1 from '@src/assets/images/banner/banner-20.jpg'
import img2 from '@src/assets/images/banner/banner-7.jpg'
import img3 from '@src/assets/images/banner/banner-8.jpg'
import img4 from '@src/assets/images/banner/banner-9.jpg'
import img5 from '@src/assets/images/banner/banner-10.jpg'
import img6 from '@src/assets/images/banner/banner-11.jpg'

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true
}



// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const Slider = () => {
  // ** Hooks
  const [isRtl] = useRTL()

  return (
    <Fragment>
    
      <Row>
        <Col sm='12'>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt='swiper 2' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt='swiper 3' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 4' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt='swiper 5' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt='swiper 6' className='img-fluid' />
          </SwiperSlide>
        </Swiper>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Slider
