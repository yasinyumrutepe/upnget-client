// ** React Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Utils
import { isUserLoggedIn } from "@utils";

// ** Store & Actions
import { useDispatch } from "react-redux";
import { handleLogout } from "@store/authentication";

// ** Third Party Components
import { User, Power } from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();

  // ** State
  const [userData, setUserData] = useState(null);

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);
  //** Vars
  const userAvatar = defaultAvatar;

  const logout = () => {
    dispatch(handleLogout());
    window.location.href = "/live/home";
  };

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{userData?.userName ?? ""}</span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/live/user/settings">
          <User size={14} className="me-75" />
          <span className="align-middle">Profile Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/live/my-products">
          <User size={14} className="me-75" />
          <span className="align-middle">My Products</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/live/my-bids">
          <User size={14} className="me-75" />
          <span className="align-middle">My Bids</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/live/add-product">
          <User size={14} className="me-75" />
          <span className="align-middle">Add Product</span>
        </DropdownItem>
        <DropdownItem onClick={logout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
