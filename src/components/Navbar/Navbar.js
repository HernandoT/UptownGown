import { NavLink } from "react-router-dom";
import { getPages } from "../../utils/data/getPages";
import { colors } from "../../utils/styles/colors";
import logo from "../../utils/assets/logo.jpg";

const Navbar = () => {
  const pages = getPages();

  return (
    <div style={styles.navbar}>
      <img src={logo} alt="" style={styles.icon}/>
      <nav style={styles.nav}>
        {pages.map((page, i) => (
          <NavLink
            key={i}
            to={page.route}
            style={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    background: "transparent",
  },
  icon: {
    flex: 1,
    height: "100px",
  },
  nav: {
    flex: 8,
  },
  link: {
    textDecoration: "none",
    padding: "1%",
    color: colors.text[1],
  },
  linkActive: {
    fontWeight: "bold",
    textDecoration: "none",
    padding: "1%",
    color: colors.text[1],
  },
  button: {
    flex: 1,
    backgroundColor: "black",
    height: "50px",
  },
};

export default Navbar;
