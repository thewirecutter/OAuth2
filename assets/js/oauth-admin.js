(function () {
  jQuery(document).ready(function() {
    var adminEditApplication = function() {
      
          function getAccessToken(cb) {
            jQuery.post(oauth2_ajax.url, {action: oauth2_ajax.action}, function(response) {
              cb(JSON.parse(response));
            });
          }
      
          return {
            getAccessToken: function(cb) {
              return getAccessToken(cb);
            }
          };
        };
      
    var admin = adminEditApplication();
  
    let generateTokenButton = document.getElementById('generate-access-token');
    generateTokenButton.addEventListener('click', function() {
      let token = admin.getAccessToken(function(token) {
        document.getElementById('test-access-token').value = token.access_token
      });
    });

  });
})();