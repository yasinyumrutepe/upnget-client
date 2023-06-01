// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Button,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Input
} from 'reactstrap'

const Product = props => {
  // ** Props
  const { data, dispatch, getProduct, productId } = props

  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options
  // const renderColorOptions = () => {
  //   return data.colorOptions.map((color, index) => {
  //     const isLastColor = data.colorOptions.length - 1 === index

  //     return (
  //       <li
  //         key={color}
  //         className={classnames('d-inline-block', {
  //           'me-25': !isLastColor,
  //           selected: selectedColor === color
  //         })}
  //         onClick={() => setSelectedColor(color)}
  //       >
  //         <div className={`color-option b-${color}`}>
  //           <div className={`filloption bg-${color}`}></div>
  //         </div>
  //       </li>
  //     )
  //   })
  // }

  // ** Handle Wishlist item toggle
  // const handleWishlist = val => {
  //   if (val) {
  //     dispatch(deleteWishlistItem(productId))
  //   } else {
  //     dispatch(addToWishlist(productId))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // // ** Handle Move/Add to cart
  // const handleCartBtn = (id, val) => {
  //   if (val === false) {
  //     dispatch(addToCart(id))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // ** Condition btn tag
  console.log(data)
  return (
    <Row className='my-2'>
      <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='img-fluid product-img' src={"http://localhost:8000"+data.files[0].URL} alt={data.name} />
        </div>
      </Col>
      <Col md='7' xs='12'>
        <h4>{data.name}</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            {data.brand.name?data.brand.name:'No Brand'}
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
        <CardText tag='span' className='item-category'>
          
          <a className='category-name' href='/' onClick={e => e.preventDefault()}>
            {data.category.name?data.category.name:'No Category'}  
          </a>
        </CardText>
        </div>

        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
        <CardText tag='span' className='item-category'>
        Seller Name 
          <a className='category-name' href='/' onClick={e => e.preventDefault()}>
          {data.seller.identification.name?data.seller.identification.name:'No Seller'}  
          </a>
        </CardText>
        </div>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price me-1'>Last Bid ${data.price}</h4>
        </div>
        <CardText>{data.description}</CardText>

        <div className='d-flex flex-column flex-sm-row pt-1'>
          <Input type='number' className='me-0 me-sm-1 mb-1 mb-sm-0' placeholder='1' />
          <Button
            className='btn-cart me-0 me-sm-1 mb-1 mb-sm-0'
            color='primary'
           
          >
          Offer Now
          </Button>
         
        </div>
      </Col>
    </Row>
  )
}

export default Product
