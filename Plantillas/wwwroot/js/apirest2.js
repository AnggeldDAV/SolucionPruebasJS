$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/quotes/",
        dataType: "json",
        success: function (data) {
            $.each(data.quotes, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.quote + "</td>" +
                    "<td>" + item.author + "</td>" +
                    "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
}); 