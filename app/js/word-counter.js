document.getElementById('editor').onkeypress = function(e) {
  return word_counter();
}

function word_counter(){
  var words = document.getElementById('output').innerHTML.replace(/<.*?>/g, '');

  if(words == 0){
    document.getElementById('word-counter').innerHTML = '0';
  }
  else{
    document.getElementById('word-counter').innerHTML = words.match(/\S+/g).length;
  }
}
