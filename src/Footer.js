function Footer(){
    return(
        <>
<footer class="bg-secondary text-white pt-4">
  <div class="container">
    <div class="row">
  
      <div class="col-md-4">
        <h5>About Flight Portal</h5>
        <p>
          This project helps users search, book, and manage flights across multiple airlines with real-time pricing and route information.
        </p>
      </div>

  
      <div class="col-md-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">Home</a></li>
          <li><a href="#" class="text-white text-decoration-none">Search Flights</a></li>
          <li><a href="#" class="text-white text-decoration-none">My Bookings</a></li>
          <li><a href="#" class="text-white text-decoration-none">Support</a></li>
        </ul>
      </div>

   
      <div class="col-md-4">
        <h5>Contact</h5>
        <p>Email: support@flightportal.com</p>
        <p>Phone: +91-12345-67890</p>
      </div>
    </div>

    <hr class="bg-white"/>

    <div class="text-center pb-3">
      &copy; <span id="year"></span> Bhaskar. All rights reserved.
    </div>
  </div>
</footer>

        </>
    )
}
export default Footer;