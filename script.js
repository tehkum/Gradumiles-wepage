$(function () {
    AOS.init();
    var scrollSpy;
    var hash = window.location.hash;
    hash && $('#side-menu>li>a[href="' + hash + '"]').tab("show");
    
    $("#side-menu>li>a").click(function (e) {
      e.preventDefault();
      $(this).tab("show");
      window.location.hash = this.hash;
      
      if (this.hash == "#tab1") {
        if ($("#tab1-tab").hasClass("active")) {
          $("#tab1-programs").addClass("show");
          scrollSpy = new bootstrap.ScrollSpy(document.body, {target: "#tab1-programs"});
        }
      } else {
          $("#tab1-programs").removeClass("show");
          scrollSpy.dispose();
      }
    });
    if($("#tab1-tab").hasClass("active")){
                  $("#tab1-programs").addClass("show");
                  scrollSpy = new bootstrap.ScrollSpy(document.body, {
                        target: '#tab1-programs'
                  });
              }
   
  });
  
    