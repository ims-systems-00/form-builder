import { Container } from "@ims-systems-00/ims-ui-kit";
import { NavigationBar } from "./navigation-bar";
import { Outlet } from "react-router-dom";
// const components = import.meta.glob('../components/**/*.js');
function App() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Container className="py-4">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
