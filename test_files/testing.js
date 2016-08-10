
(function($){

    $(document).ready(function(){
        $('#etsy-search').bind('submit', function() {
            api_key = "kblh8c5ktm9s8x1qv5o95yyz";
            terms = $('#etsy-terms').val();
            etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms+"&limit=50&includes=Images:1&api_key="+api_key;

            $('#etsy-images').empty();
            $('<p></p>').text('Searching for '+terms).appendTo('#etsy-images');


            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',

                success: function(data) {
                  console.log(data);
                  var itemData = data.results.map((item) => `<div class="item">
                  <a href="${item.url}"><img src="${item.Images[0].url_170x135}" alt="" /></a>
                  <p><span>${item.title}</span></p>
                  <p>User: ${item.user_id}<span class="price">${parseFloat(item.price).toLocaleString('us-EN', { style: 'currency', currency: 'USD' })}</span></p>
                  <div>`);
                  $("#etsy-images").html(itemData);

                }
            });


            return false;
        })

        api_key = "kblh8c5ktm9s8x1qv5o95yyz";
        estyUserKeywords = $("userKeywords").val();
        estyUserUrl = "https://openapi.etsy.com/v2/users?keywords=" + estyUserKeywords + "&api_key=" + api_key;


        $.ajax({
            url: estyUserUrl,
            //dataType: 'jsonp',

            success: function(data) {
              console.log(data);

            }
        });


    }); //end of document.ready

})(jQuery); //end of opening function
