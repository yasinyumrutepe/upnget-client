// ** React Imports
import { useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'

// ** Product detail components
import ItemFeatures from './ItemFeatures'
import ProductDetails from './ProductDetails'
import RelatedProducts from './RelatedProducts'



// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
// import { getProduct, deleteWishlistItem, addToWishlist, addToCart } from '../store'
import {getProduct} from '../features/api'
import '@styles/base/pages/app-ecommerce-details.scss'

const Details = () => {
  // ** Vars
  const params = useParams().id
  const productId = params

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.product)

  // ** ComponentDidMount : Get product
  useEffect(() => {
    dispatch(getProduct(productId))
  }, [])
  console.log(store)
  return (
    <Fragment>
      <div className='app-ecommerce-details'>
        {Object.keys(store.productDetail).length ? (
          <Card>
            <CardBody>
              <ProductDetails
                dispatch={dispatch}
                productId={productId}
                getProduct={getProduct}
                data={store.productDetail}
              />
            </CardBody>
            
            {/* <ItemFeatures />
            <CardBody>
              <RelatedProducts />
            </CardBody> */}
          </Card>
        ) : null}
      </div>
    </Fragment>
  )
}

export default Details
