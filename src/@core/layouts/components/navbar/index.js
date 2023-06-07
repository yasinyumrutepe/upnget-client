// ** React Imports
import { Fragment, useEffect, useState } from "react";

import NavbarUser from "./NavbarUser";
import LoginRegister from "./LoginRegister";
// ** Custom Components

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        {/* <NavbarBookmarks setMenuVisibility={setMenuVisibility} /> */}
      </div>
      {isLogin ? (
        <NavbarUser skin={skin} setSkin={setSkin} />
      ) : (
        <LoginRegister skin={skin} setSkin={setSkin} />
      )}
    </Fragment>
  );
};

export default ThemeNavbar;
