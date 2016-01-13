/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();


$(".aboutheader").click(function () {

    $aboutheader = $(this);
    //getting the next element
    $aboutcontent = $aboutheader.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $aboutcontent.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $aboutheader.text(function () {
            //change text based on condition
            return $aboutcontent.is(":visible") ? "Less" : "About";
        });
    });

});
$(".linkheader").click(function () {

    $linkheader = $(this);
    //getting the next element
    $linkcontent = $linkheader.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $linkcontent.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $linkheader.text(function () {
            //change text based on condition
            return $linkheader.is(":visible") ? "Less" : "More";
        });
    });

});
});