// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Shop Components
import Products from './Products'

// ** Custom Components

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-ecommerce.scss';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../features/api';

const Shop = () => {

// 
const {category} = useParams()
  // ** States
  const [activeView, setActiveView] = useState('grid')

  // ** Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.product)

  // ** Get products
  useEffect(() => {
    dispatch(
      getProductByCategory(
        category
      )
    )
  }, [dispatch])

  return (
    <Fragment>
      <Products
        store={store}
        dispatch={dispatch}
       
        activeView={activeView}
        getProductByCategory={getProductByCategory}
        setActiveView={setActiveView}
      />
    </Fragment>
  )
}
export default Shop
