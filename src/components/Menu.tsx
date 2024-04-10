import MenuList from "./MenuList";

function Menu() {
  return (
    <div className="hidden md:visible md:flex md:flex-col md:gap-2">
      <h4 className="text-2xl font-medium">Menu</h4>
      <MenuList />
    </div>
  );
}

export default Menu;
