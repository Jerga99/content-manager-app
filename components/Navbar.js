


const Navbar = () => {

  return (
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <h1>Content Manager</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class=" navbar-item">
              <div class="control has-icons-left">
                <input class="input is-rounded" type="email" placeholder="Search" />
                <span class="icon is-left">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
            <a class="navbar-item is-active is-size-5 has-text-weight-semibold">
              Home
            </a>
            <a class="navbar-item is-size-5 has-text-weight-semibold">
              Examples
            </a>
            <a class="navbar-item is-size-5 has-text-weight-semibold">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
