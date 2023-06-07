import React from "react";
// ** Table Columns

// ** Third Party Components
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";
//import dark

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { Fragment } from "react";
export default function ProductBids(props) {
  const { data } = props;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle tag="h4">Bids</CardTitle>
      </CardHeader>
      <div className="react-dataTable">
        <Card className="mb-4">
          <ListGroup>
            {data.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <hr />
                  <ListGroupItem>
                    <Row>
                      <Col md="6" sm="6">
                        <label className="mb-0">
                          {item.seller.identification.name +
                            " " +
                            item.seller.identification.surname}
                        </label>
                      </Col>
                      <Col md="6" sm="6">
                        <label className="mb-0">{item.price + " $"}</label>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <hr />
                </Fragment>
              );
            })}
          </ListGroup>
        </Card>
      </div>
    </Card>
  );
}
