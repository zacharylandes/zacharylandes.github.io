// Jquery with no conflict
jQuery(document).ready(function($) {



	$('#slider').nivoSlider({
 // Specify sets like: 'fold,fade,sliceDown'
		animSpeed: 100, // Slide transition speed
        pauseTime: 1000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        controlNav: false // 1,2,3... navigation
	});


	 //##########################################
	// Slider - project
	//##########################################


		//##########################################
	// Tool tips
	//##########################################





	//##########################################
	// Superfish
	//##########################################


    //##########################################
	// Accordion box
	//##########################################


	$(document).ready(function(){
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});
})
	//##########################################
	// Toggle box
	//##########################################

	//##########################################

    $(".tabs").tabs("div.panes > div", {effect: 'fade'});

    //##########################################
	// Create Combo Navi
	//##########################################


	// Populate dropdown with menu items
	$("#nav a").each(function() {
		var el = $(this);
		var label = $(this).parent().parent().attr('id');
		var sub = (label == 'nav') ? '' : '- ';

		$("<option />", {
		 "value"   : el.attr("href"),
		 "text"    :  sub + el.text()
		}).appendTo("#combo-holder select");
	});


	//##########################################
	// Combo Navigation action
	//##########################################

	$("#comboNav").change(function() {
	  location = this.options[this.selectedIndex].value;
	});

    //##########################################
	// Work - Isotope
	//##########################################


	var $container = $('#filter-container');

	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : 'li',
			filter: '*',
			resizable: false,
			animationEngine: 'jquery'
		});
	});

	// filter buttons

	$('#filter-buttons a').click(function(){

		// select current
		var $optionSet = $(this).parents('#filter-buttons');
	    $optionSet.find('.selected').removeClass('selected');
	    $(this).addClass('selected');

		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

    //##########################################
	// Home - Isotope
	//##########################################


	var $container_home = $('#filter-container-feature');

	$container_home.imagesLoaded( function(){
		$container_home.isotope({
			itemSelector : 'li',
		});
	});


  /*
  * Commented due to relayout issue
  *
  // modified Isotope methods for gutters in masonry
  $.Isotope.prototype._getMasonryGutterColumns = function() {
    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width();

    this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
                  // or use the size of the first item
                  this.$filteredAtoms.outerWidth(true) ||
                  // if there's no items, use size of container
                  containerWidth;

    this.masonry.columnWidth += gutter;

    this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
    this.masonry.cols = Math.max( this.masonry.cols, 1 );
  };

  $.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getMasonryGutterColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
      this.masonry.colYs.push( 0 );
    }
  };

  $.Isotope.prototype._masonryResizeChanged = function() {
    var prevSegments = this.masonry.cols;
    // update cols/rows
    this._getMasonryGutterColumns();
    // return if updated cols/rows is not equal to previous
    return ( this.masonry.cols !== prevSegments );
  };
  */

	//##########################################
	// Resize event
	//##########################################

	$(window).resize(function() {

		var w = $(window).width();
		//console.log(w);

		$container_home.isotope('reLayout');

	}).trigger("resize");

});
