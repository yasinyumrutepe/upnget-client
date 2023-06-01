// ** Reactstrap Imports
import {
    Row,
    Col,
    Card,
    Form,
    Label,
    Input,
    Button,
    CardBody,
    CardTitle,
    CardHeader,
    InputGroup,
    InputGroupText
  } from 'reactstrap'
  

  // ** Third Party Components
import Select from 'react-select'

// ** Utils
import { selectThemeColors } from '@utils'

  // ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { useState } from 'react'
import axios from 'axios'
  const FormLayout = () => {
    const [picker, setPicker] = useState(new Date())
    const brands=[
        { value: 1, label: 'Apple' },
        { value: 4, label: 'Xiomi' },
        { value: 5, label: 'Others' },
    ]
    const categories=[
        { value: 1, label: 'Electronics' },
        { value: 2, label: 'Home & Living' },
        { value: 3, label: 'Art & Collectibles' },
        { value: 4, label: 'Jewlry & Accessories' },
        { value: 5, label: 'Antique'}
    ]
    const options = { numeral: true, numeralThousandsGroupStyle: 'thousand' }
const addProduct = (e) => {

    e.preventDefault()
    const config ={
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }
    const formData = new FormData(e.target)
    formData.append('seller_id',1)
    axios.post('http://localhost:8000/api/product',formData,config).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    }
    )
  
}

    return (
     
          <Form onSubmit={(e)=>addProduct(e)}>
            <Row>
              <Col sm='6'>
                <Label className='form-label' for='product-name'>
                  Product Name
                </Label>
                <InputGroup className='input-group-merge mb-1'>
                 
                  <Input type='text' name='name' id='product-name' placeholder='Product Name' />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <Label className='form-label' for='price'>
                  Price
                </Label>
                <InputGroup className='input-group-merge mb-1'>
                <Input type='number' name='price' id='price' placeholder='Price' />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <Label className='form-label' for='category'>
                Category
                </Label>
                <InputGroup className='input-group-merge mb-1'>
                
                  <Select
                  id="category"
                  name="category_id"
              theme={selectThemeColors}
              className='react-select w-100'
              classNamePrefix='select'
              defaultValue={categories[0]}
              options={categories}
              isClearable={false}
            />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <Label className='form-label' for='brand'>
                Brand
                </Label>
                <InputGroup className='input-group-merge mb-1'>
                
                  <Select
                  id="brand"
                    name="brand_id"
              theme={selectThemeColors}
              className='react-select w-100'
              classNamePrefix='select'
              defaultValue={brands[0]}
              options={brands}
              isClearable={false}
            />
                </InputGroup>
              </Col>
              {/* <Col sm='6'>
                <Label className='form-label' for='start-date'>
                Start Date
                </Label>
                <InputGroup className='input-group-merge mb-1'>
               
                  <Flatpickr
                  name='start_date'
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)}
      />
                </InputGroup>
              </Col> */}
              {/* <Col sm='6'>
                <Label className='form-label' for='end-date'>
                End Date
                </Label>
                <InputGroup className='input-group-merge mb-1'>
               
                  <Flatpickr
                    name='end_date'
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)}
      />
                </InputGroup>
              </Col> */}
              <Col sm='12'>
                <Label className='form-label' for='description'>
                Description
                </Label>
                <InputGroup className='input-group-merge mb-1'>
                
                  <Input

            type='textarea'
            name='description'
            id='description'
            placeholder='Product Description'
            style={{ minHeight: '100px' }}
          />
                </InputGroup>
              </Col>
              <Col sm='12'>
                <Label className='form-label' for='images'>
                Images
                </Label>
                <Input type='file' id='exampleMultipleFileBrowser' name='images' multiple />
              </Col>
              <Col sm='12'>
                <div className='d-flex'>
                  <Button className='me-1' color='success' type='submit' >
                    Submit
                  </Button>
               
                </div>
              </Col>
            </Row>
          </Form>
    )
  }
  export default FormLayout
  