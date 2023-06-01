// ** Reactstrap Imports
import { Card, CardBody,  Input, Label } from 'reactstrap'

const Description = () => {
  return (
    <Card>
   

      <CardBody>
       
        <div className='form-floating mt-2'>
          <Input
            type='textarea'
            name='text'
            id='description'
            placeholder='Product Description'
            style={{ minHeight: '100px' }}
          />
          <Label className='form-label' for='description'>
          Product Description
          </Label>
        </div>
      </CardBody>
    </Card>
  )
}
export default Description
