function loadLogoutPage(callback) {
  // Function to delete a cookie by name
  function deleteCookie(name) {
    document.cookie =
      name + "=; expires=Tue, 03 Jan 1995 00:00:00 UTC; path=/;";
  }

  // Delete the "choosed-class" cookie
  deleteCookie("choosed-class");
  deleteCookie("choosed-class-name");
  deleteCookie("choosed-class-joined-date");
  deleteCookie("choosed-class-exit-date");
      
  // Make the POST request using jQuery's AJAX method
  $.ajax({
    url: "../apis/dang_xuat", // Replace with your API endpoint
    type: 'POST',
    processData: false, // Don't process the data
    contentType: false, // Don't set the content type
    success: function(response) {
      if (response.status == "success") {
        loadLoginPage();
      }
    },
    error: function(xhr, status, error) {
      // Handle errors
      console.error('Error:', error);
    }
  });
}