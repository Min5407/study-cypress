import Menu from "./menu";
import SubAction from "./sub_action";
import NavComboBox from "./nav_combo_box";

const NavBar = () => {
  return (
    <div className="flex h-16 items-center px-4">
      <NavComboBox />
      <Menu />
      <SubAction />
    </div>
  );
};

export default NavBar;
