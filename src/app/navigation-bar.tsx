import {
  Navbar,
  NavbarBrand,
} from "@ims-systems-00/ims-ui-kit";
import logo from "../assets/ims-tech-logo.svg";
export function NavigationBar() {
  return (
    <Navbar className="bg-light shadow-sm border-bottom">
      <NavbarBrand href="/">
        <img src={logo} height={30} />
      </NavbarBrand>
    </Navbar>
  );
}
