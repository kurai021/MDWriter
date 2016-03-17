(function keymap_function() {
  CodeMirror.commands.markdownBold = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('**'+ cm.getSelection() +'**');
    pos.ch += 2;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownItalic = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('*'+ cm.getSelection() +'*');
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownLink = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('['+ cm.getSelection() +'](http://)');
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownStrike = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('~~'+ cm.getSelection() +'~~');
    pos.ch += 2;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownInlineCode = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('`'+ cm.getSelection() +'`');
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownImage = function(cm) {
    var pos = cm.getCursor('end');

    cm.replaceSelection('!['+ cm.getSelection() +'](http://)');
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownBlockQuote = function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('> '+ cm.getSelection());
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownUnorderedList = function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('* '+ cm.getSelection());
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownOrderedList= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('1. '+ cm.getSelection());
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading1= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('# '+ cm.getSelection());
    pos.ch += 1;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading2= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('## '+ cm.getSelection());
    pos.ch += 2;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading3= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('### '+ cm.getSelection());
    pos.ch += 3;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading4= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('#### '+ cm.getSelection());
    pos.ch += 4;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading5= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('##### '+ cm.getSelection());
    pos.ch += 5;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownHeading6= function(cm) {
    var pos = cm.getCursor('end');
    cm.replaceSelection('###### '+ cm.getSelection());
    pos.ch += 6;
    cm.setCursor(pos);
    cm.focus();
  };
  CodeMirror.commands.markdownUndo = function(cm) {
    cm.undo();
    cm.focus();
  };
  CodeMirror.commands.markdownRedo = function(cm) {
    cm.redo();
    cm.focus();
  };
})();
