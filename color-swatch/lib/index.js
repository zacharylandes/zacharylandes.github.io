import './stylesheets/styles.scss'
import COLORS from './data/colors'


$(window).on('load', () => {
    fetch('https://color-swatch-api.herokuapp.com/api/v1/top_color')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
      $('.top-color').html(`${myJson.value}`)
  });
});

$('textarea').keydown(function(event) {
    if (event.keyCode == 13) {  
        event.preventDefault()
        fillColors();
    }
})
$('button').click(function() {
    event.preventDefault()
    fillColors();
});


const fillColors = () => {
    let text = $('textarea').val().toLowerCase()
    text = text.replace(/[,.? ]+/g, "  ").trim();
    text = text.split(" ")
    $('.colorized-text').html(``)
    let colors = Object.keys(COLORS)
    text.forEach((word)=>{
        if(colors.includes(word)){
            postColor(word)
        }
    })
    let textUnique=  Array.from(new Set(text))
    console.log(textUnique)
    textUnique.forEach((word)=>{
        if(colors.includes(word)){
            $('.colorized-text').append(`<div class="swatch" style='background-color:${COLORS[word]};'></div>`)
        }
    })
}

const postColor = (color) => {
    let data  = {color:{value: `${color}`}}
        return fetch('https://color-swatch-api.herokuapp.com/api/v1/colors', {
          body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
          mode: 'cors', 
        })
        .then(response => console.log(response.json()))
}