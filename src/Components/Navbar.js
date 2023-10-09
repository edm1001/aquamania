const Navbar = () => {
    return `
    <div class="row pb-5">
  <div class="col">
<div class="header-nav ">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
</div>

</div>
        <!-- add logo here -->
        <div class="col">
        <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
      </div>

</div>

    <!-- search bar -->
    <div class="sub-nav">

      <div class="row">
        <div class="col-3 d-flex justify-content-center">
          <button class="btn btn-outline-success" type="submit">Freshwater</button>
        </div>
        <div class="col-3 d-flex justify-content-start ">
          <button class="btn btn-outline-primary" type="submit">Saltwater</button>
        </div>
      <div class=" col-6">
        <form class="d-flex position-end" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
    </div>
    `
}

export default Navbar;