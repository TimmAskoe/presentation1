import { Navbar, Nav } from "react-bootstrap";
interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Navbar
        style={{
          height: "100px",
          backgroundColor: "aliceblue",
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Nav.Item
          style={{
            fontWeight: "bold",
            color: "black",
            padding: "0px",
            alignSelf: "center",
            marginLeft: "64px",
          }}
        >
          Burger Frontend 1.0
        </Nav.Item>
      </Navbar>
    </div>
  );
}
