var myTextarea = document.getElementById("editor");

var codemirror = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  lineWrapping: true,
  mode: "markdown",
  theme: "material",
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
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

document.getElementById('filename').value = 'new-document-' + mm + '-' + dd + '-' + yyyy;

//editor theme changer
document.getElementById('chthemes').onchange = function() {
  var theme = document.getElementById('chthemes').selectedOptions[0].text;

  if (theme == '3024-day') {
    codemirror.setOption("theme", "3024-day");
    codemirror.refresh();
  } else if (theme == '3024-night') {
    codemirror.setOption("theme", "3024-night");
    codemirror.refresh();
  } else if (theme == 'abcdef') {
    codemirror.setOption("theme", "abcdef");
    codemirror.refresh();
  } else if (theme == 'ambiance') {
    codemirror.setOption("theme", "ambiance");
    codemirror.refresh();
  } else if (theme == 'base16-dark') {
    codemirror.setOption("theme", "base16-dark");
    codemirror.refresh();
  } else if (theme == 'base16-light') {
    codemirror.setOption("theme", "base16-light");
    codemirror.refresh();
  } else if (theme == 'bespin') {
    codemirror.setOption("theme", "bespin");
    codemirror.refresh();
  } else if (theme == 'blackboard') {
    codemirror.setOption("theme", "blackboard");
    codemirror.refresh();
  } else if (theme == 'cobalt') {
    codemirror.setOption("theme", "cobalt");
    codemirror.refresh();
  } else if (theme == 'colorforth') {
    codemirror.setOption("theme", "colorforth");
    codemirror.refresh();
  } else if (theme == 'darcula') {
    codemirror.setOption("theme", "darcula");
    codemirror.refresh();
  } else if (theme == 'dracula') {
    codemirror.setOption("theme", "dracula");
    codemirror.refresh();
  } else if (theme == 'duotone-dark') {
    codemirror.setOption("theme", "duotone-dark");
    codemirror.refresh();
  } else if (theme == 'duotone-light') {
    codemirror.setOption("theme", "duotone-light");
    codemirror.refresh();
  } else if (theme == 'eclipse') {
    codemirror.setOption("theme", "eclipse");
    codemirror.refresh();
  } else if (theme == 'elegant') {
    codemirror.setOption("theme", "elegant");
    codemirror.refresh();
  } else if (theme == 'erlang-dark') {
    codemirror.setOption("theme", "erlang-dark");
    codemirror.refresh();
  } else if (theme == 'gruvbox-dark') {
    codemirror.setOption("theme", "gruvbox-dark");
    codemirror.refresh();
  } else if (theme == 'hopscotch') {
    codemirror.setOption("theme", "hopscotch");
    codemirror.refresh();
  } else if (theme == 'icecoder') {
    codemirror.setOption("theme", "icecoder");
    codemirror.refresh();
  } else if (theme == 'idea') {
    codemirror.setOption("theme", "idea");
    codemirror.refresh();
  } else if (theme == 'isotope') {
    codemirror.setOption("theme", "isotope");
    codemirror.refresh();
  } else if (theme == 'lesser-dark') {
    codemirror.setOption("theme", "lesser-dark");
    codemirror.refresh();
  } else if (theme == 'liquibyte') {
    codemirror.setOption("theme", "liquibyte");
    codemirror.refresh();
  } else if (theme == 'lucario') {
    codemirror.setOption("theme", "lucario");
    codemirror.refresh();
  } else if (theme == 'mbo') {
    codemirror.setOption("theme", "mbo");
    codemirror.refresh();
  } else if (theme == 'mdn-like') {
    codemirror.setOption("theme", "mdn-like");
    codemirror.refresh();
  } else if (theme == 'midnight') {
    codemirror.setOption("theme", "midnight");
    codemirror.refresh();
  } else if (theme == 'monokai') {
    codemirror.setOption("theme", "monokai");
    codemirror.refresh();
  } else if (theme == 'neat') {
    codemirror.setOption("theme", "neat");
    codemirror.refresh();
  } else if (theme == 'neo') {
    codemirror.setOption("theme", "neo");
    codemirror.refresh();
  } else if (theme == 'night') {
    codemirror.setOption("theme", "night");
    codemirror.refresh();
  } else if (theme == 'oceanic-next') {
    codemirror.setOption("theme", "oceanic-next");
    codemirror.refresh();
  } else if (theme == 'panda-syntax') {
    codemirror.setOption("theme", "panda-syntax");
    codemirror.refresh();
  } else if (theme == 'paraiso-dark') {
    codemirror.setOption("theme", "paraiso-dark");
    codemirror.refresh();
  } else if (theme == 'paraiso-light') {
    codemirror.setOption("theme", "paraiso-light");
    codemirror.refresh();
  } else if (theme == 'pastel-on-dark') {
    codemirror.setOption("theme", "pastel-on-dark");
    codemirror.refresh();
  } else if (theme == 'railscasts') {
    codemirror.setOption("theme", "railscasts");
    codemirror.refresh();
  } else if (theme == 'rubyblue') {
    codemirror.setOption("theme", "rubyblue");
    codemirror.refresh();
  } else if (theme == 'seti') {
    codemirror.setOption("theme", "seti");
    codemirror.refresh();
  } else if (theme == 'shadowfox') {
    codemirror.setOption("theme", "shadowfox");
    codemirror.refresh();
  } else if (theme == 'solarized') {
    codemirror.setOption("theme", "solarized");
    codemirror.refresh();
  } else if (theme == 'ssms') {
    codemirror.setOption("theme", "ssms");
    codemirror.refresh();
  } else if (theme == 'the-matrix') {
    codemirror.setOption("theme", "the-matrix");
    codemirror.refresh();
  } else if (theme == 'tomorrow-night-bright') {
    codemirror.setOption("theme", "tomorrow-night-bright");
    codemirror.refresh();
  } else if (theme == 'tomorrow-night-eighties') {
    codemirror.setOption("theme", "tomorrow-night-eighties");
    codemirror.refresh();
  } else if (theme == 'ttcn') {
    codemirror.setOption("theme", "ttcn");
    codemirror.refresh();
  } else if (theme == 'twilight') {
    codemirror.setOption("theme", "twilight");
    codemirror.refresh();
  } else if (theme == 'vibrant-ink') {
    codemirror.setOption("theme", "vibrant-ink");
    codemirror.refresh();
  } else if (theme == 'xq-dark') {
    codemirror.setOption("theme", "xq-dark");
    codemirror.refresh();
  } else if (theme == 'xq-light') {
    codemirror.setOption("theme", "xq-light");
    codemirror.refresh();
  } else if (theme == 'yeti') {
    codemirror.setOption("theme", "yeti");
    codemirror.refresh();
  } else if (theme == 'zenburn') {
    codemirror.setOption("theme", "zenburn");
    codemirror.refresh();
  } else {
    codemirror.setOption("theme", "material");
    codemirror.refresh();
  }
}

document.getElementById('chsize').onchange = function() {
  var size = document.getElementById('chsize').selectedOptions[0].text;

  if (size == '9') {
    $(".CodeMirror").css('font-size', "9px");
    codemirror.refresh();
  } else if (size == '10') {
    $(".CodeMirror").css('font-size', "10px");
    codemirror.refresh();
  } else if (size == '11') {
    $(".CodeMirror").css('font-size', "11px");
    codemirror.refresh();
  } else if (size == '12') {
    $(".CodeMirror").css('font-size', "12px");
    codemirror.refresh();
  } else if (size == '13') {
    $(".CodeMirror").css('font-size', "13px");
    codemirror.refresh();
  } else if (size == '14') {
    $(".CodeMirror").css('font-size', "14px");
    codemirror.refresh();
  } else if (size == '15') {
    $(".CodeMirror").css('font-size', "15px");
    codemirror.refresh();
  } else if (size == '16') {
    $(".CodeMirror").css('font-size', "16px");
    codemirror.refresh();
  } else if (size == '17') {
    $(".CodeMirror").css('font-size', "17px");
    codemirror.refresh();
  } else if (size == '18') {
    $(".CodeMirror").css('font-size', "18px");
    codemirror.refresh();
  } else if (size == '19') {
    $(".CodeMirror").css('font-size', "19px");
    codemirror.refresh();
  } else if (size == '20') {
    $(".CodeMirror").css('font-size', "20px");
    codemirror.refresh();
  } else if (size == '22') {
    $(".CodeMirror").css('font-size', "22px");
    codemirror.refresh();
  } else if (size == '24') {
    $(".CodeMirror").css('font-size', "24px");
    codemirror.refresh();
  } else if (size == '26') {
    $(".CodeMirror").css('font-size', "26px");
    codemirror.refresh();
  } else if (size == '28') {
    $(".CodeMirror").css('font-size', "28px");
    codemirror.refresh();
  } else if (size == '32') {
    $(".CodeMirror").css('font-size', "32px");
    codemirror.refresh();
  } else if (size == '36') {
    $(".CodeMirror").css('font-size', "36px");
    codemirror.refresh();
  } else if (size == '40') {
    $(".CodeMirror").css('font-size', "40px");
    codemirror.refresh();
  } else if (size == '44') {
    $(".CodeMirror").css('font-size', "44px");
    codemirror.refresh();
  } else if (size == '48') {
    $(".CodeMirror").css('font-size', "48px");
    codemirror.refresh();
  } else if (size == '54') {
    $(".CodeMirror").css('font-size', "54px");
    codemirror.refresh();
  } else if (size == '60') {
    $(".CodeMirror").css('font-size', "60px");
    codemirror.refresh();
  } else if (size == '66') {
    $(".CodeMirror").css('font-size', "66px");
    codemirror.refresh();
  } else if (size == '72') {
    $(".CodeMirror").css('font-size', "72px");
    codemirror.refresh();
  } else {
    $(".CodeMirror").css('font-size', "8px");
    codemirror.refresh();
  }

}

var highlight_theme = "monokai";

//highlight theme changer
document.getElementById('chhighlightthemes').onchange = function() {
  highlight_theme = document.getElementById('chhighlightthemes').selectedOptions[0].text;

  function swapStyleSheet(sheet) {
    document.getElementById("highlight_theme").setAttribute("href", sheet);
  }

  if (highlight_theme == 'a11y-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/a11y-dark.css");
  } else if (highlight_theme == 'a11y-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/a11y-light.css");
  } else if (highlight_theme == 'agate') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/agate.css");
  } else if (highlight_theme == 'an-old-hope') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/an-old-hope.css");
  } else if (highlight_theme == 'androidstudio') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/androidstudio.css");
  } else if (highlight_theme == 'arduino-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/arduino-light.css");
  } else if (highlight_theme == 'arta') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/arta.css");
  } else if (highlight_theme == 'ascetic') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/ascetic.css");
  } else if (highlight_theme == 'atelier-cave-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-cave-dark.css");
  } else if (highlight_theme == 'atelier-cave-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-cave-light.css");
  } else if (highlight_theme == 'atelier-dune-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-dune-dark.css");
  } else if (highlight_theme == 'atelier-dune-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-dune-light.css");
  } else if (highlight_theme == 'atelier-estuary-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-estuary-dark.css");
  } else if (highlight_theme == 'atelier-estuary-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-estuary-light.css");
  } else if (highlight_theme == 'atelier-forest-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-forest-dark.css");
  } else if (highlight_theme == 'atelier-forest-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-forest-light.css");
  } else if (highlight_theme == 'atelier-heath-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-heath-dark.css");
  } else if (highlight_theme == 'atelier-heath-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-heath-light.css");
  } else if (highlight_theme == 'atelier-lakeside-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-lakeside-dark.css");
  } else if (highlight_theme == 'atelier-lakeside-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-lakeside-light.css");
  } else if (highlight_theme == 'atelier-plateau-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-plateau-dark.css");
  } else if (highlight_theme == 'atelier-plateau-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-plateau-light.css");
  } else if (highlight_theme == 'atelier-savanna-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-savanna-dark.css");
  } else if (highlight_theme == 'atelier-savanna-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-savanna-light.css");
  } else if (highlight_theme == 'atelier-seaside-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-seaside-dark.css");
  } else if (highlight_theme == 'atelier-seaside-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-seaside-light.css");
  } else if (highlight_theme == 'atelier-sulphurpool-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-sulphurpool-dark.css");
  } else if (highlight_theme == 'atelier-sulphurpool-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atelier-sulphurpool-light.css");
  } else if (highlight_theme == 'atom-one-dark-reasonable') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atom-one-dark-reasonable.css");
  } else if (highlight_theme == 'atom-one-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atom-one-dark.css");
  } else if (highlight_theme == 'atom-one-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/atom-one-light.css");
  } else if (highlight_theme == 'brown-paper') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/brown-paper.css");
  } else if (highlight_theme == 'codepen-embed') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/codepen-embed.css");
  } else if (highlight_theme == 'color-brewer') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/color-brewer.css");
  } else if (highlight_theme == 'darcula') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/darcula.css");
  } else if (highlight_theme == 'dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/dark.css");
  } else if (highlight_theme == 'darkula') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/darkula.css");
  } else if (highlight_theme == 'default') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/default.css");
  } else if (highlight_theme == 'docco') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/docco.css");
  } else if (highlight_theme == 'dracula') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/dracula.css");
  } else if (highlight_theme == 'far') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/far.css");
  } else if (highlight_theme == 'foundation') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/foundation.css");
  } else if (highlight_theme == 'github') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/github.css");
  } else if (highlight_theme == 'github-gist') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/github-gist.css");
  } else if (highlight_theme == 'gml') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/gml.css");
  } else if (highlight_theme == 'googlecode') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/googlecode.css");
  } else if (highlight_theme == 'grayscale') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/grayscale.css");
  } else if (highlight_theme == 'gruvbox-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/gruvbox-dark.css");
  } else if (highlight_theme == 'gruvbox-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/gruvbox-light.css");
  } else if (highlight_theme == 'hopscotch') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/hopscotch.css");
  } else if (highlight_theme == 'hybrid') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/hybrid.css");
  } else if (highlight_theme == 'idea') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/idea.css");
  } else if (highlight_theme == 'ir-black') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/ir-black.css");
  } else if (highlight_theme == 'isbl-editor-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/isbl-editor-dark.css");
  } else if (highlight_theme == 'isbl-editor-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/isbl-editor-light.css");
  } else if (highlight_theme == 'kimbie.dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/kimbie.dark.css");
  } else if (highlight_theme == 'kimbie.light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/kimbie.light.css");
  } else if (highlight_theme == 'lightfair') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/lightfair.css");
  } else if (highlight_theme == 'magula') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/magula.css");
  } else if (highlight_theme == 'mono-blue') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/mono-blue.css");
  } else if (highlight_theme == 'monokai') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/monokai.css");
  } else if (highlight_theme == 'monokai-sublime') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/monokai-sublime.css");
  } else if (highlight_theme == 'nord') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/nord.css");
  } else if (highlight_theme == 'obsidian') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/obsidian.css");
  } else if (highlight_theme == 'ocean') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/ocean.css");
  } else if (highlight_theme == 'paraiso-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/paraiso-dark.css");
  } else if (highlight_theme == 'paraiso-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/paraiso-light.css");
  } else if (highlight_theme == 'pojoaque') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/pojoaque.css");
  } else if (highlight_theme == 'purebasic') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/purebasic.css");
  } else if (highlight_theme == 'qtcreator_dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/qtcreator_dark.css");
  } else if (highlight_theme == 'qtcreator_light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/qtcreator_light.css");
  } else if (highlight_theme == 'railscasts') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/railscasts.css");
  } else if (highlight_theme == 'rainbow') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/rainbow.css");
  } else if (highlight_theme == 'routeros') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/routeros.css");
  } else if (highlight_theme == 'school-book') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/school-book.css");
  } else if (highlight_theme == 'shades-of-purple') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/shades-of-purple.css");
  } else if (highlight_theme == 'solarized-dark') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/solarized-dark.css");
  } else if (highlight_theme == 'solarized-light') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/solarized-light.css");
  } else if (highlight_theme == 'sunburst') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/sunburst.css");
  } else if (highlight_theme == 'tomorrow') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/tomorrow.css");
  } else if (highlight_theme == 'tomorrow-night') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/tomorrow-night.css");
  } else if (highlight_theme == 'tomorrow-night-blue') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/tomorrow-night-blue.css");
  } else if (highlight_theme == 'tomorrow-night-bright') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/tomorrow-night-bright.css");
  } else if (highlight_theme == 'tomorrow-night-eighties') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/tomorrow-night-eighties.css");
  } else if (highlight_theme == 'vs') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/vs.css");
  } else if (highlight_theme == 'vs2015') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/vs2015.css");
  } else if (highlight_theme == 'xcode') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/xcode.css");
  } else if (highlight_theme == 'xt256') {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/xt256.css");
  } else {
    swapStyleSheet("node_modules/highlight.js/build/demo/styles/zenburn.css");
  }

}

var config_mermaid = {
  startOnLoad: true,
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true
  }
};

mermaid.initialize(config_mermaid);

var markedRenderer = new marked.Renderer();

markedRenderer.code = function(code, language) {
  if (code.match(/^sequenceDiagram/) || code.match(/^graph/) || code.match(/^gantt/)) {
    return '<div class="mermaid">' + code + '</div>';
  } else {
    return '<pre><code>' + code + '</code></pre>';
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
  highlight: function(code, lang) {
    var res;
    if (!lang) {
      return code;
    }

    switch (lang) {
      case 'js':
        lang = 'javascript';
        break;
    }

    try {
      res = hljs.highlightAuto(code).value;
    } catch (e) {

    } finally {
      return res || code;
    }
  }
});

document.body.onkeyup = function(e) {
  myTextarea.value = codemirror.getValue();

  document.getElementById('output').innerHTML = marked(myTextarea.value);

  mermaid.init({
    noteMargin: 10
  }, ".mermaid");

  $('pre code').each(function(i, e) {
    hljs.highlightBlock(e)
  });

  /*--emoji support--*/

  var output;
  output = document.getElementById("output");


  var emoji_array = {
    grinning: {
      keyword: ':grinning:',
      replace: '1f600'
    },
    grin: {
      keyword: ':grin:',
      replace: '1f601'
    },
    joy: {
      keyword: ':joy:',
      replace: '1f602'
    },
    smiley: {
      keyword: ':smiley:',
      replace: '1f603'
    },
    smile: {
      keyword: ':smile:',
      replace: '1f604'
    },
    sweat_smile: {
      keyword: ':sweat_smile:',
      replace: '1f605'
    },
    satisfied: {
      keyword: ':satisfied:',
      replace: '1f606'
    },
    innocent: {
      keyword: ':innocent:',
      replace: '1f607'
    },
    smiling_imp: {
      keyword: ':smiling_imp:',
      replace: '1f608'
    },
    wink: {
      keyword: ':wink:',
      replace: '1f609'
    },
    blush: {
      keyword: ':blush:',
      replace: '1f60a'
    },
    yum: {
      keyword: ':yum:',
      replace: '1f60b'
    },
    relieved: {
      keyword: ':relieved:',
      replace: '1f60c'
    },
    heart_eyes: {
      keyword: ':heart_eyes:',
      replace: '1f60d'
    },
    sunglasses: {
      keyword: ':sunglasses:',
      replace: '1f60e'
    },
    smirk: {
      keyword: ':smirk:',
      replace: '1f60f'
    },
    neutral_face: {
      keyword: ':neutral_face:',
      replace: '1f610'
    },
    expressionless: {
      keyword: ':expressionless:',
      replace: '1f611'
    },
    unamused: {
      keyword: ':unamused:',
      replace: '1f612'
    },
    sweat: {
      keyword: ':sweat:',
      replace: '1f613'
    },
    pensive: {
      keyword: ':pensive:',
      replace: '1f614'
    },
    confused: {
      keyword: ':confused:',
      replace: '1f615'
    },
    confounded: {
      keyword: ':confounded:',
      replace: '1f616'
    },
    kissing: {
      keyword: ':kissing:',
      replace: '1f617'
    },
    kissing_heart: {
      keyword: ':kissing_heart:',
      replace: '1f618'
    },
    kissing_smiling_eyes: {
      keyword: ':kissing_smiling_eyes:',
      replace: '1f619'
    },
    kissing_closed_eyes: {
      keyword: ':kissing_closed_eyes:',
      replace: '1f619'
    },
    stuck_out_tongue: {
      keyword: ':stuck_out_tongue:',
      replace: '1f61a'
    },
    stuck_out_tongue_winking_eye: {
      keyword: ':stuck_out_tongue_winking_eye:',
      replace: '1f61b'
    },
    stuck_out_tongue_closed_eyes: {
      keyword: ':stuck_out_tongue_closed_eyes:',
      replace: '1f61c'
    },
    disappointed: {
      keyword: ':disappointed:',
      replace: '1f61d'
    },
    worried: {
      keyword: ':worried:',
      replace: '1f61e'
    },
    angry: {
      keyword: ':angry:',
      replace: '1f61f'
    },
    rage: {
      keyword: ':rage:',
      replace: '1f620'
    },
    cry: {
      keyword: ':cry:',
      replace: '1f621'
    },
    persevere: {
      keyword: ':persevere:',
      replace: '1f622'
    },
    triumph: {
      keyword: ':triumph:',
      replace: '1f623'
    },
    disappointed_relieved: {
      keyword: ':disappointed_relieved:',
      replace: '1f624'
    },
    frowning: {
      keyword: ':frowning:',
      replace: '1f625'
    },
    anguished: {
      keyword: ':anguished:',
      replace: '1f626'
    },
    fearful: {
      keyword: ':fearful:',
      replace: '1f627'
    },
    weary: {
      keyword: ':weary:',
      replace: '1f628'
    },
    sleepy: {
      keyword: ':sleepy:',
      replace: '1f629'
    },
    tired_face: {
      keyword: ':tired_face:',
      replace: '1f62b'
    },
    grimacing: {
      keyword: ':grimacing:',
      replace: '1f62c'
    },
    sob: {
      keyword: ':sob:',
      replace: '1f62d'
    },
    open_mouth: {
      keyword: ':open_mouth:',
      replace: '1f62e'
    },
    hushed: {
      keyword: ':hushed:',
      replace: '1f62f'
    },
    cold_sweat: {
      keyword: ':cold_sweat:',
      replace: '1f630'
    },
    scream: {
      keyword: ':scream:',
      replace: '1f631'
    },
    astonished: {
      keyword: ':astonished:',
      replace: '1f632'
    },
    flushed: {
      keyword: ':flushed:',
      replace: '1f633'
    },
    sleeping: {
      keyword: ':sleeping:',
      replace: '1f634'
    },
    dizzy_face: {
      keyword: ':dizzy_face:',
      replace: '1f635'
    },
    no_mouth: {
      keyword: ':no_mouth:',
      replace: '1f636'
    },
    mask: {
      keyword: ':mask:',
      replace: '1f637'
    },
    smile_cat: {
      keyword: ':smile_cat:',
      replace: '1f638'
    },
    joy_cat: {
      keyword: ':joy_cat:',
      replace: '1f639'
    },
    smiley_cat: {
      keyword: ':smiley_cat:',
      replace: '1f63a'
    },
    heart_cat: {
      keyword: ':heart cat:',
      replace: '1f63b'
    },
    smile_cat: {
      keyword: ':smile cat:',
      replace: '1f63c'
    },
    heart_eyes_cat: {
      keyword: ':heart_eyes_cat:',
      replace: '1f63d'
    },
    pouting_cat: {
      keyword: ':pouting_cat:',
      replace: '1f63e'
    },
    crying_cat_face: {
      keyword: ':crying_cat_face:',
      replace: '1f63f'
    },
    scream_cat: {
      keyword: ':scream_cat:',
      replace: '1f640'
    }
  }

  Object.getOwnPropertyNames(emoji_array).forEach(function(key) {
    var emoji;
    emoji = emoji_array[key];
    output.innerHTML = output.innerHTML.replace(emoji.keyword, '<img class="emoji-img ' + key + '" src="assets/images/emojis/' + emoji.replace + '.svg">');
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

  Object.getOwnPropertyNames(checkboxes_array).forEach(function(key) {
    var checkboxes;
    checkboxes = checkboxes_array[key];
    output.innerHTML = output.innerHTML.replace(checkboxes.keyword, checkboxes.replace);
  });

  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"output"]);

}
