// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import WizardHorizontal from './WizardHorizontal'

// ** Custom Components

const Wizard = () => {
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <WizardHorizontal />
        </Col>
       
      </Row>
    </Fragment>
  )
}
export default Wizard
