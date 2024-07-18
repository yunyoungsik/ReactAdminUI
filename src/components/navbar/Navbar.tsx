import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>0SikAdmin</span>
      </div>

      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />

        <div className="notifications">
          <img src="/notifications.svg" alt="notifications" className="icon" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
            className="icon"
          />
          <span>0-Sik</span>
        </div>

        <img src="/settings.svg" alt="settings" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
