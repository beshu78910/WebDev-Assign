// $(document).ready(function () {
//   alert("hi");
// });

// $(function () {
//   alert("document ready");
// });

const innderDiv = "#div";
$(document).ready(function () {
  // var div = document.getElementById("div");
  // console.log(div);
  // var $div = $("#div"); //name convention, $ refer to a jQuery element
  // console.log($div);

  // // //convert jQuery object to dom
  // console.log($div.get(0));
  // console.log($div[0]);

  // // //convert dom to jQuery object
  // console.log($(div));

  // //jQuery selector
  // console.log($("div,h2,img")); //union
  // console.log($("div .redDiv #red1")); //intersection
  // console.log($("div .redDiv")); //intersection

  //jQuery HTML content
  // const $allSelector = $(".all td:eq(0)");
  // console.log($allSelector);

  // //difference btw text() with html()
  // console.log("text: " + $allSelector.text()); //innerText
  // console.log("html: " + $allSelector.html()); //innerHTML

  //itself and all its chidren
  // const $table = $("table");
  // console.log($table.html());

  // // //val() for input element
  // const $search = $("#search");
  // const $searchBtn = $("#searchBtn");
  // const $resetBtn = $("#resetBtn");
  // $searchBtn.on("click", function () {
  //   alert($search.val());
  // });
  // $resetBtn.on("click", function () {
  //   $search.val("");
  // });

  //jQuery CSS
  // $resetBtn.css("backgroundColor", "green");
  // $searchBtn.css({
  //   backgroundColor: "yellow",
  //   padding: "5px",
  // });
  // $footer = $(".footer");
  // console.log($footer.hasClass("footer"));
  // $footer.addClass("footer-border");
  // $footer.removeClass();

  //jQuery Attribute
  // const $img = $("img");
  // $img.on("click", function () {
  //   $img.attr("src", "google.png");
  //   $img.attr({ alt: "google", a: "aaa" });
  //   console.log(`alt: ${$img.attr("alt")}, a:${$img.attr("a")}`);
  // });
  // console.log($img.attr("alt"));

  // const $checkbox = $("#checkbox");
  // $checkbox.on("change", function () {
  //   console.log($checkbox.attr("checked")); //checked
  //   console.log($checkbox.prop("checked")); //true / false
  // });

  // //jQuery Event
  // const $header = $("h2");
  // $header.on({
  //   mouseenter: function () {
  //     console.log("mouseenter");
  //   },
  //   click: function () {
  //     alert("you click the header");
  //     $(this).off("mouseenter");
  //     $(window).trigger("myEvent");
  //   },
  // });

  // $(window).on("myEvent", function () {
  //   alert("my event");
  // });

  // second...
  let $firstLi = $("ul li:first");
  let $lastLi = $("ul li:last");
  let $firstDiv = $("#firstDiv");
  let $secondDiv = $("#secondDiv");
  $firstLi.on("click", function () {
    $firstDiv.css("display", "block");
    $secondDiv.css("display", "none");
  });
  $lastLi.on("click", function () {
    $firstDiv.css("display", "none");
    $secondDiv.css("display", "block");
  });

  // // add a li element
  // let $addBtn = $("#addBtn");
  // let $addInput = $("#addValue");
  // let $li = $("ol li");
  // $li.on({
  //   mouseenter: function () {
  //     $(this).css("backgroundColor", "red");
  //   },
  //   mouseout: function () {
  //     $(this).css("backgroundColor", "white");
  //   },
  // });
  // $addBtn.on("click", function () {
  //   let addNode = document.createElement("li");
  //   addNode.innerHTML = $addInput.val();
  //   $("ol").append(addNode);
  // });
  // $("ol").on("mouseenter", "li", function () {
  //   $(this).css("backgroundColor", "red");
  // });
  // $("ol").on("mouseout", "li", function () {
  //   $(this).css("backgroundColor", "white");
  // });


  //// animation
  // let $animationDiv = $("#animationDiv");
  // $("#secondDiv button:eq(1)").on("click", function () {
  //   $animationDiv.show("slow", function () {
  //     console.log("show finish");
  //   });
  // });
  // $("#secondDiv button:eq(2)").on("click", function () {
  //   $animationDiv.hide("fast");
  // });
  // $("#secondDiv button:eq(3)").on("click", function () {
  //   $animationDiv.slideDown("normal");
  // });
  // $("#secondDiv button:eq(4)").on("click", function () {
  //   $animationDiv.slideUp();
  // });
  // $("#secondDiv button:eq(5)").on("click", function () {
  //   $animationDiv.fadeIn(2000);
  // });
  // $("#secondDiv button:eq(6)").on("click", function () {
  //   $animationDiv.fadeOut(500);
  // });
  // $("#secondDiv button:eq(7)").on("click", function () {
  //   $animationDiv.toggle("slow");
  // });
  // $("#secondDiv button:eq(8)").on("click", function () {
  //   $animationDiv.slideToggle("slow");
  // });
  // $("#secondDiv button:eq(9)").on("click", function () {
  //   $animationDiv.fadeToggle("slow");
  // });
  // $("#secondDiv button:eq(10)").on("click", function () {
  //   $animationDiv.animate(
  //     {
  //       opacity: "0.5",
  //       height: "150px",
  //       width: "150px",
  //     },
  //     1000,
  //     "linear"
  //   );
  // });
  // $("#secondDiv button:eq(11)").on("click", function () {
  //   $animationDiv.stop(true, true).toggle("slow");
  // });

  // ajax
  // $.ajax("https://jsonplaceholder.typicode.com/todos/1", {
  //   dataType: "json", // type of response data
  //   timeout: 500, // timeout milliseconds
  //   success: function (data, status, xhr) {
  //     // success callback function
  //     console.log(data);
  //     console.log(status);
  //   },
  //   error: function (jqXhr, textStatus, errorMessage) {
  //     // error callback
  //     console.log(errorMessage);
  //   },
  // });

  $.get(
    "https://jsonplaceholder.typicode.com/todos/1",
    function (data, status) {
      console.log(data);
      console.log(status);
    }
  ).fail(function (error) {
    console.log(error);
  });
});
