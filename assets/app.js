/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

//On importe notre fichier global.scss
import './styles/global.scss'


//On ajoute jquery et le Javascript de Bootstrap
const $ = require('jquery');
require('bootstrap');

$(".clickprof").on('click',function(){
    var id = $(this).attr('id');
    $(".other").hide();
    $("#"+id+"b").show();
    
})

$(".menucomp li").on('click',function(){
    console.log("test");
    var id=$(this).attr('id');
    $(".menucomp li").removeClass("clickcomp");
    $(this).addClass("clickcomp");
    $(".compbloc").removeClass("d-flex");
    $("#"+id+"bloc").addClass("d-flex");
})


