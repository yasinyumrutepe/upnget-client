// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Third Party Components
import axios from "axios";

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from "reactstrap";

// ** Demo Components
import Tabs from "./Tabs";
import MyBankCards from "./MyBankCards";
import AccountTabContent from "./AccountTabContent";
import SecurityTabContent from "./SecurityTabContent";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/pages/page-account-settings.scss";

const AccountSettings = () => {
  // ** States
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const seller = JSON.parse(localStorage.getItem("userData"));
    if (seller == null) {
      window.location.href = "/login";
    }
    axios
      .get("http://localhost:8000/api/seller/" + seller.userId)
      .then((response) => setData(response.data.body));
  }, []);

  return (
    <Fragment>
      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs
              className="mb-2"
              activeTab={activeTab}
              toggleTab={toggleTab}
            />

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <AccountTabContent data={data} />
              </TabPane>
              {/* <TabPane tabId="2"> */}
              {/* <SecurityTabContent /> */}
              {/* </TabPane> */}
              {/* <TabPane tabId="3"> */}
              {/* <MyBankCards /> */}
              {/* </TabPane> */}
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  );
};

export default AccountSettings;
