function loadLogoutPage(callback) {
    // Function to delete a cookie by name
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Tue, 03 Jan 1995 00:00:00 UTC; path=/;";
    }
    
    // Delete the "choosed-class" cookie
    deleteCookie("choosed-class");
    deleteCookie("choosed-class-name");
    deleteCookie("choosed-class-joined-date");
    deleteCookie("choosed-class-exit-date");

    $("overlay").css("display", "block");
    $.post( "../controllers/logout", function(data) {
        hideAllPages(function(success) {
            if (success) {
                // User is logged in:

                removeAllActiveIcons();
                $("#homeli").addClass("active");

                $("homepage").css("display", "block");
                const nextURL = '/';
                const nextTitle = 'Trung tâm Ngoại ngữ - Trường Đại học Sài Gòn';
                const nextState = { additionalInformation: 'Updated the URL with JS' };
                window.history.pushState(nextState, nextTitle, nextURL);
                document.title = nextTitle;
            } else {
                // User is not logged in:
                $("login-page").css("display", "flex");
                // Update page's URL:

                removeAllActiveIcons();

                const nextURL = '/login';
                const nextTitle = 'Đăng nhập';
                const nextState = { additionalInformation: 'Updated the URL with JS' };
                window.history.pushState(nextState, nextTitle, nextURL);
                document.title = nextTitle;
            }
            if (typeof callback === "function") {
                callback(success);
            }
        });
    });
}