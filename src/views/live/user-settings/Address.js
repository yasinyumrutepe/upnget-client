// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import "cleave.js/dist/addons/cleave-phone.us";
import { useForm } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const defaultValues = {
  companyName: "",
  billingEmail: "",
};

const Address = () => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <Card>
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Address</CardTitle>
      </CardHeader>
      <CardBody className="my-2 py-50">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col xs="6" className="mb-1">
              <Label className="form-label" for="billingAddress">
                Street Address
              </Label>
              <Input
                id="billingAddress"
                name="billingAddress"
                placeholder="12, Business Park"
              />
            </Col>
            <Col md="6" className="mb-1">
              <Label className="form-label" for="billingState">
                State
              </Label>
              <Input id="billingState" name="state" placeholder="California" />
            </Col>
            <Col md="4" className="mb-1">
              <Label className="form-label" for="city">
                City
              </Label>
              <Input id="city" name="city" placeholder="California" />
            </Col>
            <Col md="4" className="mb-2">
              <Label className="form-label" for="zipCodeAddress">
                Zip Code
              </Label>
              <Input
                type="number"
                id="zipCodeAddress"
                name="zipCodeAddress"
                placeholder="123456"
                maxLength="6"
              />
            </Col>
            <Col md="4" className="mb-1">
              <Label className="form-label" for="country">
                Country
              </Label>
              <Input id="country" name="country" placeholder="USA" />
            </Col>
            <Col xs="12" className="text-right">
              <Button type="submit" className="me-1" color="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Address;
