var myTextarea = document.getElementById("editor");

var codemirror = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  lineWrapping: true,
  mode: "markdown",
  theme: "mdn-like",
  extraKeys: {
    'Cmd-B': 'markdownBold',
    'Cmd-I': 'markdownItalic',
    'Cmd-L': 'markdownLink',
    'Cmd-Alt-S': 'markdownStrike',
    'Cmd-Alt-K': 'markdownInlineCode',
    'Cmd-Alt-C': 'markdownCode',
    'Cmd-Alt-O': 'markdownOrderedList',
    'Cmd-Alt-U': 'markdownUnorderedList',
    'Cmd-Alt-I': 'markdownImage',
    'Cmd-Alt-B': 'markdownBlockQuote',
    'Cmd-Alt-1': 'markdownHeading1',
    'Cmd-Alt-2': 'markdownHeading2',
    'Cmd-Alt-3': 'markdownHeading3',
    'Cmd-Alt-4': 'markdownHeading4',
    'Cmd-Alt-5': 'markdownHeading5',
    'Cmd-Alt-6': 'markdownHeading6',
    'Cmd-Z': 'markdownUndo',
    'Cmd-Shift-Z': 'markdownRedo',
    'Ctrl-B': 'markdownBold',
    'Ctrl-I': 'markdownItalic',
    'Ctrl-L': 'markdownLink',
    'Ctrl-Alt-S': 'markdownStrike',
    'Ctrl-Alt-K': 'markdownInlineCode',
    'Ctrl-Alt-C': 'markdownCode',
    'Ctrl-Alt-O': 'markdownOrderedList',
    'Ctrl-Alt-U': 'markdownUnorderedList',
    'Ctrl-Alt-I': 'markdownImage',
    'Ctrl-Alt-B': 'markdownBlockQuote',
    'Ctrl-Alt-1': 'markdownHeading1',
    'Ctrl-Alt-2': 'markdownHeading2',
    'Ctrl-Alt-3': 'markdownHeading3',
    'Ctrl-Alt-4': 'markdownHeading4',
    'Ctrl-Alt-5': 'markdownHeading5',
    'Ctrl-Alt-6': 'markdownHeading6',
    'Ctrl-Z': 'markdownUndo',
    'Ctrl-Shift-Z': 'markdownRedo',
    "Enter": "newlineAndIndentContinueMarkdownList"
  },
  autoCloseBrackets: true,
  autofocus: true,
  styleActiveLine: true,
  viewportMargin: 40
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

document.getElementById('filename').value = 'new-document-' + mm + '-' + dd + '-' + yyyy;

//editor theme changer
document.getElementById('accept-change-theme').onclick = function(){
  var theme = document.getElementById('chthemes').selectedOptions[0].text;

  if(theme == '3024-day'){
    codemirror.setOption("theme", "3024-day");
    codemirror.refresh();
  }
  else if(theme == '3024-night'){
    codemirror.setOption("theme", "3024-night");
    codemirror.refresh();
  }
  else if(theme == 'ambiance'){
    codemirror.setOption("theme", "ambiance");
    codemirror.refresh();
  }
  else if(theme == 'base16-dark'){
    codemirror.setOption("theme", "base16-dark");
    codemirror.refresh();
  }
  else if(theme == 'base16-light'){
    codemirror.setOption("theme", "base16-light");
    codemirror.refresh();
  }
  else if(theme == 'blackboard'){
    codemirror.setOption("theme", "blackboard");
    codemirror.refresh();
  }
  else if(theme == 'cobalt'){
    codemirror.setOption("theme", "cobalt");
    codemirror.refresh();
  }
  else if(theme == 'colorforth'){
    codemirror.setOption("theme", "colorforth");
    codemirror.refresh();
  }
  else if(theme == 'eclipse'){
    codemirror.setOption("theme", "ecplise");
    codemirror.refresh();
  }
  else if(theme == 'elegant'){
    codemirror.setOption("theme", "elegant");
    codemirror.refresh();
  }
  else if(theme == 'erlang-dark'){
    codemirror.setOption("theme", "erlang-dark");
    codemirror.refresh();
  }
  else if(theme == 'lesser-dark'){
    codemirror.setOption("theme", "lesser-dark");
    codemirror.refresh();
  }
  else if(theme == 'liquibyte'){
    codemirror.setOption("theme", "liquibyte");
    codemirror.refresh();
  }
  else if(theme == 'mbo'){
    codemirror.setOption("theme", "mbo");
    codemirror.refresh();
  }
  else if(theme == 'midnight'){
    codemirror.setOption("theme", "midnight");
    codemirror.refresh();
  }
  else if(theme == 'monokai'){
    codemirror.setOption("theme", "monokai");
    codemirror.refresh();
  }
  else if(theme == 'neat'){
    codemirror.setOption("theme", "neat");
    codemirror.refresh();
  }
  else if(theme == 'neo'){
    codemirror.setOption("theme", "neo");
    codemirror.refresh();
  }
  else if(theme == 'night'){
    codemirror.setOption("theme", "night");
    codemirror.refresh();
  }
  else if(theme == 'paraiso-dark'){
    codemirror.setOption("theme", "paraiso-dark");
    codemirror.refresh();
  }
  else if(theme == 'paraiso-light'){
    codemirror.setOption("theme", "paraiso-light");
    codemirror.refresh();
  }
  else if(theme == 'pastel-on-dark'){
    codemirror.setOption("theme", "pastel-on-dark");
    codemirror.refresh();
  }
  else if(theme == 'rubyblue'){
    codemirror.setOption("theme", "rubyblue");
    codemirror.refresh();
  }
  else if(theme == 'solarized'){
    codemirror.setOption("theme", "solarized");
    codemirror.refresh();
  }
  else if(theme == 'the-matrix'){
    codemirror.setOption("theme", "the-matrix");
    codemirror.refresh();
  }
  else if(theme == 'tomorrow-night-bright'){
    codemirror.setOption("theme", "tomorrow-night-bright");
    codemirror.refresh();
  }
  else if(theme == 'tomorrow-night-eighties'){
    codemirror.setOption("theme", "tomorrow-night-eighties");
    codemirror.refresh();
  }
  else if(theme == 'ttcn'){
    codemirror.setOption("theme", "ttcn");
    codemirror.refresh();
  }
  else if(theme == 'twilight'){
    codemirror.setOption("theme", "twilight");
    codemirror.refresh();
  }
  else if(theme == 'vibrant-ink'){
    codemirror.setOption("theme", "vibrant-ink");
    codemirror.refresh();
  }
  else if(theme == 'xq-dark'){
    codemirror.setOption("theme", "xq-dark");
    codemirror.refresh();
  }
  else if(theme == 'xq-light'){
    codemirror.setOption("theme", "xq-light");
    codemirror.refresh();
  }
  else if(theme == 'zenburn'){
    codemirror.setOption("theme", "zenburn");
    codemirror.refresh();
  }
  else{
    codemirror.setOption("theme", "mdn-like");
    codemirror.refresh();
  }
}

document.getElementById('accept-size-font').onclick = function(){
  var size = document.getElementById('chsize').selectedOptions[0].text;

  if (size == '9'){
    $(".CodeMirror").css('font-size',"9px");
    codemirror.refresh();
  }

  else if (size == '10'){
    $(".CodeMirror").css('font-size',"10px");
    codemirror.refresh();
  }

  else if (size == '11'){
    $(".CodeMirror").css('font-size',"11px");
    codemirror.refresh();
  }

  else if (size == '12'){
    $(".CodeMirror").css('font-size',"12px");
    codemirror.refresh();
  }

  else if (size == '13'){
    $(".CodeMirror").css('font-size',"13px");
    codemirror.refresh();
  }

  else if (size == '14'){
    $(".CodeMirror").css('font-size',"14px");
    codemirror.refresh();
  }

  else if (size == '15'){
    $(".CodeMirror").css('font-size',"15px");
    codemirror.refresh();
  }

  else if (size == '16'){
    $(".CodeMirror").css('font-size',"16px");
    codemirror.refresh();
  }

  else if (size == '17'){
    $(".CodeMirror").css('font-size',"17px");
    codemirror.refresh();
  }

  else if (size == '18'){
    $(".CodeMirror").css('font-size',"18px");
    codemirror.refresh();
  }

  else if (size == '19'){
    $(".CodeMirror").css('font-size',"19px");
    codemirror.refresh();
  }

  else if (size == '20'){
    $(".CodeMirror").css('font-size',"20px");
    codemirror.refresh();
  }

  else if (size == '22'){
    $(".CodeMirror").css('font-size',"22px");
    codemirror.refresh();
  }

  else if (size == '24'){
    $(".CodeMirror").css('font-size',"24px");
    codemirror.refresh();
  }

  else if (size == '26'){
    $(".CodeMirror").css('font-size',"26px");
    codemirror.refresh();
  }

  else if (size == '28'){
    $(".CodeMirror").css('font-size',"28px");
    codemirror.refresh();
  }

  else if (size == '32'){
    $(".CodeMirror").css('font-size',"32px");
    codemirror.refresh();
  }

  else if (size == '36'){
    $(".CodeMirror").css('font-size',"36px");
    codemirror.refresh();
  }

  else if (size == '40'){
    $(".CodeMirror").css('font-size',"40px");
    codemirror.refresh();
  }

  else if (size == '44'){
    $(".CodeMirror").css('font-size',"44px");
    codemirror.refresh();
  }

  else if (size == '48'){
    $(".CodeMirror").css('font-size',"48px");
    codemirror.refresh();
  }

  else if (size == '54'){
    $(".CodeMirror").css('font-size',"54px");
    codemirror.refresh();
  }

  else if (size == '60'){
    $(".CodeMirror").css('font-size',"60px");
    codemirror.refresh();
  }

  else if (size == '66'){
    $(".CodeMirror").css('font-size',"66px");
    codemirror.refresh();
  }

  else if (size == '72'){
    $(".CodeMirror").css('font-size',"72px");
    codemirror.refresh();
  }

  else {
    $(".CodeMirror").css('font-size',"8px");
    codemirror.refresh();
  }

}

var highlight_theme = "monokai";

//highlight theme changer
document.getElementById("accept-change-highlight-theme").onclick = function(){
  highlight_theme = document.getElementById('chhighlightthemes').selectedOptions[0].text;

  function swapStyleSheet(sheet) {
    document.getElementById("highlight_theme").setAttribute("href", sheet);
  }

  if(highlight_theme == 'agate'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/agate.css");
  }

  else if(highlight_theme == 'androidstudio'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/androidstudio.css");
  }

  else if(highlight_theme == 'arduino-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/arduino-light.css");
  }

  else if(highlight_theme == 'arta'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/arta.css");
  }

  else if(highlight_theme == 'ascetic'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/ascetic.css");
  }

  else if(highlight_theme == 'atelier-cave-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-cave-dark.css");
  }

  else if(highlight_theme == 'atelier-cave-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-cave-light.css");
  }

  else if(highlight_theme == 'atelier-dune-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-dune-dark.css");
  }

  else if(highlight_theme == 'atelier-dune-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-dune-light.css");
  }

  else if(highlight_theme == 'atelier-estuary-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-estuary-dark.css");
  }

  else if(highlight_theme == 'atelier-estuary-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-estuary-light.css");
  }

  else if(highlight_theme == 'atelier-forest-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-forest-dark.css");
  }

  else if(highlight_theme == 'atelier-forest-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-forest-light.css");
  }

  else if(highlight_theme == 'atelier-heath-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-heath-dark.css");
  }

  else if(highlight_theme == 'atelier-heath-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-heath-light.css");
  }

  else if(highlight_theme == 'atelier-lakeside-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-lakeside-dark.css");
  }

  else if(highlight_theme == 'atelier-lakeside-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-lakeside-light.css");
  }

  else if(highlight_theme == 'atelier-plateau-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-plateau-dark.css");
  }

  else if(highlight_theme == 'atelier-plateau-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-plateau-light.css");
  }

  else if(highlight_theme == 'atelier-savanna-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-savanna-dark.css");
  }

  else if(highlight_theme == 'atelier-savanna-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-savanna-light.css");
  }

  else if(highlight_theme == 'atelier-seaside-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-seaside-dark.css");
  }

  else if(highlight_theme == 'atelier-seaside-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-seaside-light.css");
  }

  else if(highlight_theme == 'atelier-sulphurpool-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-sulphurpool-dark.css");
  }

  else if(highlight_theme == 'atelier-sulphurpool-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/atelier-sulphurpool-light.css");
  }

  else if(highlight_theme == 'brown-paper'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/brown-paper.css");
  }

  else if(highlight_theme == 'codepen-embed'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/codepen-embed.css");
  }

  else if(highlight_theme == 'color-brewer'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/color-brewer.css");
  }

  else if(highlight_theme == 'dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/dark.css");
  }

  else if(highlight_theme == 'darkula'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/darkula.css");
  }

  else if(highlight_theme == 'default'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/default.css");
  }

  else if(highlight_theme == 'docco'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/docco.css");
  }

  else if(highlight_theme == 'far'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/far.css");
  }

  else if(highlight_theme == 'foundation'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/foundation.css");
  }

  else if(highlight_theme == 'github'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/github.css");
  }

  else if(highlight_theme == 'github-gist'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/github-gist.css");
  }

  else if(highlight_theme == 'googlecode'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/googlecode.css");
  }

  else if(highlight_theme == 'grayscale'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/grayscale.css");
  }

  else if(highlight_theme == 'hopscotch'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/hopscotch.css");
  }

  else if(highlight_theme == 'hybrid'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/hybrid.css");
  }

  else if(highlight_theme == 'idea'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/idea.css");
  }

  else if(highlight_theme == 'ir-black'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/ir-black.css");
  }

  else if(highlight_theme == 'kimbie.dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/kimbie.dark.css");
  }

  else if(highlight_theme == 'kimbie.light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/kimbie.light.css");
  }

  else if(highlight_theme == 'magula'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/magula.css");
  }

  else if(highlight_theme == 'mono-blue'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/mono-blue.css");
  }

  else if(highlight_theme == 'monokai'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/monokai.css");
  }

  else if(highlight_theme == 'monokai-sublime'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/monokai-sublime.css");
  }

  else if(highlight_theme == 'obsidian'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/obsidian.css");
  }

  else if(highlight_theme == 'paraiso-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/paraiso-dark.css");
  }

  else if(highlight_theme == 'pojoaque'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/pojoaque.css");
  }

  else if(highlight_theme == 'railscasts'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/railscasts.css");
  }

  else if(highlight_theme == 'rainbow'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/rainbow.css");
  }

  else if(highlight_theme == 'school-book'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/school-book.css");
  }

  else if(highlight_theme == 'solarized-dark'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/solarized-dark.css");
  }

  else if(highlight_theme == 'solarized-light'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/solarized-light.css");
  }

  else if(highlight_theme == 'sunburst'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/sunburst.css");
  }

  else if(highlight_theme == 'tomorrow'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow.css");
  }

  else if(highlight_theme == 'tomorrow-night'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night.css");
  }

  else if(highlight_theme == 'tomorrow-night-blue'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-blue.css");
  }

  else if(highlight_theme == 'tomorrow-night-bright'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-bright.css");
  }

  else if(highlight_theme == 'tomorrow-night-eighties'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/tomorrow-night-eighties.css");
  }

  else if(highlight_theme == 'vs'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/vs.css");
  }

  else if(highlight_theme == 'xcode'){
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/xcode.css");
  }

  else{
    swapStyleSheet("assets/components/highlight.js/build/demo/styles/zenburn.css");
  }

}

var config_mermaid = {
  startOnLoad:true,
  flowchart:{
    useMaxWidth:false,
    htmlLabels:true
  }
};

mermaid.initialize(config_mermaid);

var markedRenderer = new marked.Renderer();

markedRenderer.code = function(code, language){
  if(code.match(/^sequenceDiagram/)||code.match(/^graph/)||code.match(/^gantt/)){
    return '<div class="mermaid">'+code+'</div>';
  }
  else{
    return '<pre><code>'+code+'</code></pre>';
  }
}

marked.setOptions({
  renderer: markedRenderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    var res;
    if(!lang){
      return code;
    }

    switch(lang){
      case 'js':
        lang = 'javascript';
      break;
    }

    try {
      res = hljs.highlightAuto(code).value;
    }
    catch(e){

    }
    finally {
      return res || code;
    }
  }
});


document.body.onkeyup = function(e) {
  myTextarea.value = codemirror.getValue();

  document.getElementById('output').innerHTML = marked(myTextarea.value);

  mermaid.init({noteMargin: 10}, ".mermaid");

  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

  /*--emoji support--*/

  var emoji_array = {
    grinning: {
      keyword: ':grinning:',
      replace: '😀'
    },
    grin: {
      keyword: ':grin:',
      replace: '😁'
    },
    joy: {
      keyword: ':joy:',
      replace: '😂'
    },
    smiley: {
      keyword: ':smiley:',
      replace: '😃'
    },
    smile: {
      keyword: ':smile:',
      replace: '😄'
    },
    sweat_smile: {
      keyword: ':sweat_smile:',
      replace: '😅'
    },
    satisfied: {
      keyword: ':satisfied:',
      replace: '😆'
    },
    innocent: {
      keyword: ':innocent:',
      replace: '😇'
    },
    smiling_imp: {
      keyword: ':smiling_imp:',
      replace: '😈'
    },
    wink: {
      keyword: ':wink:',
      replace: '😉'
    },
    blush: {
      keyword: ':blush:',
      replace: '😊'
    },
    yum: {
      keyword: ':yum:',
      replace: '😋'
    },
    relieved: {
      keyword: ':relieved:',
      replace: '😌'
    },
    heart_eyes: {
      keyword: ':heart_eyes:',
      replace: '😍'
    },
    sunglasses: {
      keyword: ':sunglasses:',
      replace: '😎'
    },
    smirk: {
      keyword: ':smirk:',
      replace: '😏'
    },
    neutral_face: {
      keyword: ':neutral_face:',
      replace: '😐'
    },
    expressionless: {
      keyword: ':expressionless:',
      replace: '😑'
    },
    unamused: {
      keyword: ':unamused:',
      replace: '😒'
    },
    sweat: {
      keyword: ':sweat:',
      replace: '😓'
    },
    pensive: {
      keyword: ':pensive:',
      replace: '😔'
    },
    confused: {
      keyword: ':confused:',
      replace: '😕'
    },
    confounded: {
      keyword: ':confounded:',
      replace: '😖'
    },
    kissing: {
      keyword: ':kissing:',
      replace: '😗'
    },
    kissing_heart: {
      keyword: ':kissing_heart:',
      replace: '😘'
    },
    kissing_smiling_eyes: {
      keyword: ':kissing_smiling_eyes:',
      replace: '😙'
    },
    kissing_closed_eyes: {
      keyword: ':kissing_closed_eyes:',
      replace: '😚'
    },
    stuck_out_tongue: {
      keyword: ':stuck_out_tongue:',
      replace: '😛'
    },
    stuck_out_tongue_winking_eye: {
      keyword: ':stuck_out_tongue_winking_eye:',
      replace: '😜'
    },
    stuck_out_tongue_closed_eyes: {
      keyword: ':stuck_out_tongue_closed_eyes:',
      replace: '😝'
    },
    disappointed: {
      keyword: ':disappointed:',
      replace: '😞'
    },
    worried: {
      keyword: ':worried:',
      replace: '😟'
    },
    angry: {
      keyword: ':angry:',
      replace: '😠'
    },
    rage: {
      keyword: ':rage:',
      replace: '😡'
    },
    cry: {
      keyword: ':cry:',
      replace: '😢'
    },
    persevere: {
      keyword: ':persevere:',
      replace: '😣'
    },
    triumph: {
      keyword: ':triumph:',
      replace: '😤'
    },
    disappointed_relieved: {
      keyword: ':disappointed_relieved:',
      replace: '😥'
    },
    frowning: {
      keyword: ':frowning:',
      replace: '😦'
    },
    anguished: {
      keyword: ':anguished:',
      replace: '😧'
    },
    fearful: {
      keyword: ':fearful:',
      replace: '😨'
    },
    weary: {
      keyword: ':weary:',
      replace: '😩'
    },
    sleepy: {
      keyword: ':sleepy:',
      replace: '😪'
    },
    tired_face: {
      keyword: ':tired_face:',
      replace: '😫'
    },
    grimacing: {
      keyword: ':grimacing:',
      replace: '😬'
    },
    sob: {
      keyword: ':sob:',
      replace: '😭'
    },
    open_mouth: {
      keyword: ':open_mouth:',
      replace: '😮'
    },
    hushed: {
      keyword: ':hushed:',
      replace: '😯'
    },
    cold_sweat: {
      keyword: ':cold_sweat:',
      replace: '😰'
    },
    scream: {
      keyword: ':scream:',
      replace: '😱'
    },
    astonished: {
      keyword: ':astonished:',
      replace: '😲'
    },
    flushed: {
      keyword: ':flushed:',
      replace: '😳'
    },
    sleeping: {
      keyword: ':sleeping:',
      replace: '😴'
    },
    dizzy_face: {
      keyword: ':dizzy_face:',
      replace: '😵'
    },
    no_mouth: {
      keyword: ':no_mouth:',
      replace: '😶'
    },
    mask: {
      keyword: ':mask:',
      replace: '😷'
    },
    smile_cat: {
      keyword: ':smile_cat:',
      replace: '😸'
    },
    joy_cat: {
      keyword: ':joy_cat:',
      replace: '😹'
    },
    smiley_cat: {
      keyword: ':smiley_cat:',
      replace: '😺'
    },
    heart_cat: {
      keyword: ':heart cat:',
      replace: '😻'
    },
    smile_cat: {
      keyword: ':smile cat:',
      replace: '😼'
    },
    heart_eyes_cat: {
      keyword: ':heart_eyes_cat:',
      replace: '😽'
    },
    pouting_cat: {
      keyword: ':pouting_cat:',
      replace: '😾'
    },
    crying_cat_face: {
      keyword: ':crying_cat_face:',
      replace: '😿'
    },
    scream_cat: {
      keyword: ':scream_cat:',
      replace: '🙀'
    }
  }

  var output;
  output = document.getElementById("output");

  Object.getOwnPropertyNames(emoji_array).forEach(function(key){
    var emoji;
    emoji = emoji_array[key];
    output.innerHTML = output.innerHTML.replace(emoji.keyword,'<span class="emoji ' + key +'">'+ emoji.replace +'</span>');
  });

  var checkboxes_array = {
    checkbox_uncheck: {
      keyword: '[ ]',
      replace: '<i class="fa fa-square"></i> '
    },
    checkbox_check: {
      keyword: '[x]',
      replace: '<i class="fa fa-check-square"></i> '
    },
    circle_checkbox_uncheck: {
      keyword: '( )',
      replace: '<i class="fa fa-circle"></i> '
    },
    circle_checkbox_check: {
      keyword: '(x)',
      replace: '<i class="fa fa-check-circle"></i> '
    }
  }

  Object.getOwnPropertyNames(checkboxes_array).forEach(function(key){
    var checkboxes;
    checkboxes = checkboxes_array[key];
    output.innerHTML = output.innerHTML.replace(checkboxes.keyword, checkboxes.replace);
  });

}
