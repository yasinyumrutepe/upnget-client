// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
} from "reactstrap";

// ** Utils
import Address from "./Address";

// ** Demo Components

const AccountTabs = ({ data }) => {
  // ** Hooks
  const defaultValues = {
    lastName: data.identification.surname,
    firstName: data.identification.name,
    phone: data.phone,
  };
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // ** States
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : "");

  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

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

  const handleImgReset = () => {
    setAvatar("@src/assets/images/avatars/avatar-blank.png");
  };

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Profile Details</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="firstName">
                  First Name
                </Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="firstName"
                      placeholder="John"
                      invalid={errors.firstName && true}
                      {...field}
                    />
                  )}
                />
                {errors && errors.firstName && (
                  <FormFeedback>Please enter a valid First Name</FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="lastName">
                  Last Name
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      invalid={errors.lastName && true}
                      {...field}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>Please enter a valid Last Name</FormFeedback>
                )}
              </Col>
              <Col md="6" className="mb-1">
                <Label className="form-label" for="mobileNumber">
                  Mobile
                </Label>
                <Cleave
                  id="phone-number"
                  name="phone"
                  className="form-control"
                  placeholder="1 234 567 8900"
                  options={{ phone: true, phoneRegionCode: "US" }}
                />
              </Col>
              <Col sm="6" className="mb-1">
                <Label className="form-label" for="emailInput">
                  E-mail
                </Label>
                <Input
                  id="emailInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={data.email}
                />
              </Col>

              <Col className="mt-2 text-right" sm="12">
                <Button type="submit" className="me-1" color="primary">
                  Save changes
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Address />
    </Fragment>
  );
};

export default AccountTabs;
