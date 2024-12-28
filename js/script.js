(function ($) {
  "use strict";
  //Header

  // Define the custom header component
  $.fn.headerComponent = function () {
    return this.each(function () {
      // Create the HTML structure and append it to the element
      var headerHTML = `
				   <!--header top-->
		<div class="header-top">
		  <div class="container">
			<div class="row align-items-center">
			  <div class="col-md-6">
				<div class="top-left text-center text-md-left">
				  <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
				</div>
			  </div>
			  <div class="col-md-6">
				<div class="top-right text-center text-md-right">
				  <ul class="social-links">
					<li>
					  <a href="https://www.facebook.com/profile.php?id=61569153371504" aria-label="facebook">
						<i class="fab fa-facebook-f"></i>
					  </a>
					</li>
					<li>
					  <a href="https://x.com/home?lang=en" aria-label="twitter">
						<i class="fab fa-twitter"></i>
					  </a>
					</li>
					<li>
					  <a href="https://www.google.com/search?q=sanchi+hospital+bhubaneswar" aria-label="google-plus">
						<i class="fab fa-google-plus-g"></i>
					  </a>
					</li>
					<li>
					  <a href="https://www.instagram.com/sanchihospital/" aria-label="instagram">
						<i class="fab fa-instagram"></i>
					  </a>
					</li>
					<li>
					  <a href="https://in.pinterest.com/sanchihospitals/" aria-label="pinterest">
						<i class="fab fa-pinterest-p"></i>
					  </a>
					</li>
					<li>
					  <a href="https://www.youtube.com/channel/UCR4dRd1k1o8orj9nuSn1j-g" aria-label="pinterest">
						<i class="fab fa-youtube"></i>
					  </a>
					</li>
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		<!--header top-->
	
		<!--Header Upper-->
		<section class="header-uper">
		  <div class="container">
			<div class="row align-items-center">
			  <div class="col-xl-3 col-lg-3" >
				<div class="logo">
				  <a href="index.html">
					<img loading="lazy" class="img-fluid" src="images/Sachi-logo.webp" alt="logo">
					<!-- Sanchi Hospital -->
				  </a>
				</div>
			  </div>
			  <div class="col-xl-9 col-lg-9">
				<div class="right-side">
				  <ul class="contact-info pl-0 mb-4 mb-md-0">
					<li class="item text-left">
					  <div class="icon-box">
						<i class="far fa-envelope"></i>
					  </div>
					  <strong>Email</strong>
					  <br>
					  <a href="mailto:info@medic.com">
						<span>info@sanchihospital.com</span>
					  </a>
					</li>
					<li class="item text-left">
					  <div class="icon-box">
						<i class="fas fa-phone"></i>
					  </div>
					  <strong>Call Now</strong>
					  <br>
					  <a href="tel:+4733378901"><span>+47 333 78 901</span></a>
					</li>
				  </ul>
				  <div class="link-btn text-center text-lg-right">
					<a href="contact.html" class="btn-style-one">Appoinment</a>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</section>
		<!--Header Upper-->
	
	
		<!--Main Header-->
		<nav class="navbar navbar-expand-lg navbar-dark">
		  <div class="container">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
			  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
	
			<div class="collapse navbar-collapse" id="navbarLinks">
			  <ul class="navbar-nav">
				<li class="nav-item active">
				  <a class="nav-link" href="index.html">Home</a>
				</li>
				<li class="nav-item @@about">
				  <a class="nav-link" href="about.html">About</a>
				</li>
				<li class="nav-item @@service">
				  <a class="nav-link" href="service.html">Service</a>
				</li>
				<li class="nav-item @@gallery">
				  <a class="nav-link" href="gallery.html">Gallery</a>
				</li>
				<li class="nav-item @@team">
				  <a class="nav-link" href="team.html">Team</a>
				</li>
				<li class="nav-item @@blogs">
				  <a class="nav-link" href="blog.html">Blogs</a>
				</li>
				<li class="nav-item @@contact">
				  <a class="nav-link" href="contact.html">Contact</a>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
		<!--End Main Header -->
				`;
      // Insert the headerHTML into the current element
      $(this).html(headerHTML);
    });
  };
  // Define the custom header component
  $.fn.footerComponent = function () {
    return this.each(function () {
      // Create the HTML structure and append it to the element
      var footerHTML = `
				   <!--footer-main-->
    <footer class="footer-main">
      <div class="footer-top">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="about-widget">
                <div class="footer-logo">
                  <figure>
                    <a href="index.html">
                      <img loading="lazy" style="max-width:100%;height:55px;" src="images/Sachi-logo.webp" alt="Sachi">
                    </a>
                  </figure>
                </div>
                <p>Providing Trusted Healthcare with Expertise and Care, Sanchi Hospital is dedicated to your health and well-being.</p>
                <ul class="location-link">
                  <li class="item">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Modamba, NY 80021, United States</p>
                  </li>
                  <li class="item">
                    <i class="far fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:support@medic.com">
                      <p>support@medic.com</p>
                    </a>
                  </li>
                  <li class="item">
                    <i class="fas fa-phone" aria-hidden="true"></i>
                    <p>(88017) +123 4567</p>
                  </li>
                </ul>
                <ul class="list-inline social-icons">
                  <li class="list-inline-item"><a href="https://www.facebook.com/profile.php?id=61569153371504" aria-label="facebook"><i
                        class="fab fa-facebook-f"></i></a></li>
                  <li class="list-inline-item"><a href="https://x.com/home?lang=en" aria-label="twitter"><i
                        class="fab fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.instagram.com/sanchihospital/" aria-label="instagram"><i
                        class="fab fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.google.com/search?q=sanchi+hospital+bhubaneswar" aria-label="google-plus">
						<i class="fab fa-google-plus-g"></i></a></li>
                  <li class="list-inline-item"><a href="https://in.pinterest.com/sanchihospitals/" aria-label="pinterest">
						<i class="fab fa-pinterest-p"></i>
					  </a></li>
                  <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCR4dRd1k1o8orj9nuSn1j-g" aria-label="pinterest">
						<i class="fab fa-youtube"></i>
					  </a>
					</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-5 mb-3 mb-md-0">
              <h2>Services</h2>
              <ul class="menu-link">
                <li>
                  <a href="service.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Orthopadic Liabilities</a>
                </li>
                <li>
                  <a href="service.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Dental Clinic</a>
                </li>
                <li>
                  <a href="service.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Dormamu Clinic</a>
                </li>
                <li>
                  <a href="service.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Psycological Clinic</a>
                </li>
                <li>
                  <a href="service.html">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>Gynaecological Clinic</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-7">
              <div class="social-links">
                <h2>Recent Posts</h2>
                <ul>
                  <li class="item">
                    <div class="media">
                      <div class="media-left mr-3">
                        <a href="blog-details.html">
                          <img loading="lazy" src="images/blog/post-thumb-small.jpg" alt="post-thumb">
                        </a>
                      </div>
                      <div class="media-body">
                        <h5><a href="blog-details.html">A lesson adip isicing</a></h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                      </div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="media">
                      <div class="media-left mr-3">
                        <a href="blog-details.html">
                          <img loading="lazy" src="images/blog/post-thumb-small.jpg" alt="post-thumb">
                        </a>
                      </div>
                      <div class="media-body">
                        <h5><a href="blog-details.html">How to make an event</a></h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container clearfix">
          <div class="copyright-text">
            <p>&copy; Copyright 2021. Designed &amp; Developed by <a href="#">ikontel.com</a></p>
          </div>
          <ul class="footer-bottom-link">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <!--End footer-main-->
				`;
      // Insert the headerHTML into the current element
      $(this).html(footerHTML);
    });
  };


  // Apply the custom header component to the body or any other desired element
  $("Biswajit-header").headerComponent();
  $("Biswajit-footer").footerComponent();

  // navbarDropdown
  if ($(window).width() < 992) {
    $(".navbar .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  $(window).on("scroll", function () {
    //.Scroll to a Specific Div
    if ($("#back-to-top").length) {
      var scrollToTop = $("#back-to-top"),
        scroll = $(window).scrollTop();
      if (scroll >= 200) {
        scrollToTop.fadeIn(200);
      } else {
        scrollToTop.fadeOut(100);
      }
    }
  });
  if ($("#back-to-top").length) {
    $("#back-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  }

  //Date picker
  function datepicker() {
    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }
  }

  // Hero Slider
  $(".hero-slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 300,
    dots: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".hero-slider").slickAnimation();

  // Item Slider
  $(".items-container").slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
  // Testimonial Slider
  $(".testimonial-carousel").slick({
    infinite: true,
    arrows: false,
    // autoplay: true,
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // FancyBox Video
  if ($("[data-fancybox]").length) {
    $("[data-fancybox]").fancybox({
      youtube: {
        controls: 0,
        showinfo: 0,
      },
      vimeo: {
        color: "f00",
      },
    });
  }

  /* ========================When document is loaded, do===================== */
  $(window).on("load", function () {
    // add your functions
    (function ($) {
      datepicker();
    })(jQuery);
  });
})(window.jQuery);
