import "./mobileNav.css";
function MobileNav() {
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
        <nav>
          <div>This</div>
          <div>Is</div>
          <div>The</div>
          <div>Sidebar</div>
        </nav>
      </aside>
    </div>
  );
}

export default MobileNav;
