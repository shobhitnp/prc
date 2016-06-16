/*selector */

// $("document").ready( function(){
// 	$("p:first") .css("border", "2px solid green");
// 	$("p:last") .css("border", "2px solid green");
// 	$("p:odd") .css("border", "2px solid green");
// 	$("p:not(p:eq(2))") .css("border", "2px solid green");
// 	$("p[class]") .css("border", "2px solid green");
// });

/* attribute selector */
// $("document").ready ( function(){
// 	$("p:contains(2), li:contains(3)") .css("background", "rgba(120, 120, 120, 0.5)");
// 	$("p:parent") .css("background", "rgba(120, 120, 120, 0.5)");
// 	$("ul:has(li[class=a])") .css("background", "rgba(120, 120, 120, 0.5)");
// 	$("ul li:last-child") .css("background", "rgba(120, 120, 120, 0.5)");
// 	$("ul li:nth-child(2n)") .css("background", "rgba(120, 120, 120, 0.5)");
// });

/* form selector */
// $(document).ready( function(){
// 	$("form :input") .before ("INPUT: ");
// 	$("form :text") .before ("text : ");
// 	$("form :text:enabled") .before ("enabled : ");
// 	$("form :text:enabled") .before ("enabled : ");
// 	$("form :checked") .before ("checked : ");
// 	$("form :checkbox:checked") .before ("checked : ");
// });

/* traversing documents */
// $("document") .ready ( function(){
// 	alert("There are " +$("p") .length + "<p> elements");
// 	alert("There are " +$("p") .size() + "<p> elements");

// 	var elems = $('li') .get();
// 	alert("There are" + elems.length + " <li> tags");
// 	alert($('li') . get(0));
// 	$("ul") .find("li.b") .css("font-size", "26px");
	
// 	var leftmargin = 0;
// 	var border = 3;
// 	$("p") .each(function(){
// 		$(this) .css("border", border + "px solid green");
// 		$(this) .css("margin-left", leftmargin);
// 		border += 3;
// 		leftmargin += 10;
// 	})
// });

/* Annotating page links*/
// $("document") .ready( function(){
// 	$("a[href$=.pdf]") .after("<img src='images/small_pdf.gif'/>");
// });

/* manipulating content */
// $("document").ready(function() {
//         alert($("#list1").html());
//         $("#list1").html("<li>This is New list item .</li>");
//         var newitem = $("<p>This is new paragraph .</p>");
//         $("#para2") .html(newitem.html());
//         $("p:last") .html("<p>This is New last Paragraph</p>");
// });

/* manipulating attributes */
// $("document") .ready( function(){
// 	$("a") .attr("target", "_blank");
// 	$("a") .removeAttr("href");
// 	$("img") .attr({src:"images/Leaf.jpg", alt:"Leaf"});
// });

/* Inserting Contents */
// $("document") .ready( function(){
// 	$("p") .append(" With some Content Appended .");
// 	$("p") .prepend("Hello first append ");
// 	$("p:last") .appendTo("p:first");
// 	$("p:nth-child(2n)") .prependTo("p:first");
// });

/* Wrapping, Replacing, Removing Contents */
// $("document") .ready( function(){
// 	$("p") .wrap("<div style='color:green'/>");
// 	$("p") .wrapAll("<div style='border:3px solid green'/>");
// 	$("ul") .empty();
// });

/* Event Handeling */
//bind, unbind function
	 // $(function() {
	 //        $("#evtTarget").bind("mouseover mouseleave", highlight);
	 //        $("#evtTarget").bind("click", function(evt) {
	 //            $("#evtTarget").unbind("mouseover mouseleave", highlight);
	 //            $("#evtTarget").html("<p>You shut off the hover effect!</p>");
	 //        });
	 //    });

	 //    function highlight(evt) {
	 //        $("#evtTarget").toggleClass("highlighted");        
	 //    }
// helper function
	// $ ( function(){
	// 	$("#evtTarget") .hover(highlight, highlight);
	// });
	// function highlight (evt){
	// 	$("#evtTarget") .toggleClass("hover");
	// }

	// slider
				// $(document).ready(function() {
				//   $("#owl-slider").owlCarousel({
				//       autoPlay: 3000, //Set AutoPlay to 3 seconds
				//       itemsCustom : [
				// 			        [0, 1],
				// 			        [450, 1],
				// 			        [600, 1],
				// 			        [700, 1],
				// 			        [1000, 1],
				// 			        [1200, 1],
				// 			        [1400, 1],
				// 			        [1600, 1]
				// 			      ],
				//       navigation : true,
				//       navigationText: [
				//       "<i class='fa fa-chevron-left'></i>",
				//       "<i class='fa fa-chevron-right'></i>"
				//       ],
				//   });
				 
				// });



	$ ( function(){
		$(".anim") .hover(highlight, highlight);
		
	});
	function highlight (evt){
		$(".anim") .toggleClass("animate");
	}

	// changing function 
	$("button") .click(function(){
		$("#p2") .css("color", "green");
	});

// Animations
	$ (function (){
		$("#show") .click ( function(){
			$(".div3") .show(3000, function(){
				alert ("done showing");
			});
		});
		$("#hide") .click ( function(){
			$(".div3") .hide(3500);
		});
		$("#toggle") .click ( function(){
			$(".div3") .toggle(4000);
		});
	});

// fade in/out
	$(function(){
		$("#fadein") .click (function(){
			$(".div4") .fadeIn(2000);
		});
		$("#fadeout") .click (function(){
			$(".div4") .fadeOut(2000);
		});
		$("#fadeup") .click (function(){
			$(".div4") .fadeTo(2000, 0.7);
		});
	});
// sliding
	$(function(){
			$("#slideu") .click (function(){
				$(".div5") .slideUp(2000);
			});
			$("#slided") .click (function(){
				$(".div5") .slideDown(2000);
			});
			$("#slidet") .click (function(){
				$(".div5") .slideToggle(2000);
			});
		});
// custom animation
	$(function(){
			$("#right") .click (function(){
				$(".div6") .animate({width:"580px"}, 2000);
			});
			$("#text") .click (function(){
				$(".div6") .animate({fontSize:"30px"}, 2000);
			});
			// $("#toggle") .click (function(){
			// 	$(".div6") .animate({ left: "150" }, 2000, "swing");
			// });
	});

// image rotator
$(function(){
	setInterval("rotateImages()", 2500);
});

function rotateImages(){
	var oCurPhoto = $('#photoShow div.current');
	var oNxtPhoto = oCurPhoto.next();
	if(oNxtPhoto.length == 0)
		oNxtPhoto = $('#photoShow div:first');
		oCurPhoto.removeClass('current') .addClass('previous');
		oNxtPhoto.css({ opacity: 0.0}) .addClass('current') .animate({ opacity: 1.0 }, 1500,
		function(){
			oCurPhoto.removeClass('previous');
		});
}

// accordian
	$(function() {
    $( "#newsec" ).accordion({ header:"h2"});
  });

// resizable
$(function() {
    var maxw = $("#commentsSection").width();
    var minw = maxw;
    var minh = $("#commentsSection").height();
    $("#commentsSection").resizable({ minWidth:minw, maxWidth: maxw,  minHeight: minh });
});

$(function(){
	$("#selectable").selectable();
});


$( "div.funtimes" ).animate({
    left: [ "+=50", "swing" ],
    opacity: [ 0.25, "linear" ]
}, 300 );