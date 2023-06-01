// ** React Imports
import { Fragment } from 'react'

// ** Product components
import ProductCards from './ProductCards'
import ProductsHeader from './ProductsHeader'
import ProductsSearchbar from './ProductsSearchbar'

// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const ProductsPage = props => {
  // ** Props
  const {
    store,
    dispatch,
    activeView,
    sidebarOpen,
    getProductByCategory
  } = props


  return (
    <div className='content-detached content-center'>
      <div className='content-body'>
        <div
          className={classnames('body-content-overlay', {
            show: sidebarOpen
          })}
          onClick={() => setSidebarOpen(false)}
        ></div>
        {store.products.length ? (
          <Fragment>
            <ProductCards
              store={store}
              dispatch={dispatch}
              activeView={activeView}
              products={store.products}
              getProductByCategory={getProductByCategory}
            />
          
          </Fragment>
        ) : (
          <div className='d-flex justify-content-center mt-2'>
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
