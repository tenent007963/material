var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// WTFPL licensed
// scratching the surface of research microsoft com/fsharp/manual/spec2.aspx#_Toc207785562
// omits reserved-ident-formats, reserved-symbolic-sequence, quote-op-*, symbolic-op, ...
SyntaxHighlighter.brushes.FSharp = function()
{
 var keywords = 'abstract and as assert base begin class default delegate do done ' +
  'downcast downto elif else end exception extern false finally for '+
  'fun function if in inherit inline interface internal lazy let ' +
  'match member module mutable namespace new null of open or '+
  'override private public rec return static struct then to '+
  'true try type upcast use val void when while with yield';
  var ocaml = 'asr land lor lsl lsr lxor mod sig';
  var reserved ='atomic break checked component const constraint constructor '+
  'continue eager event external fixed functor global include '+
  'method mixin object parallel process protected pure '+
  'sealed tailcall trait virtual volatile';
  var symbolic = 'let! use! do! yield! return! \\| -> <- \\. : \\( \\) \\[ \\] \\[< >\\] \\[\\| \\|\\] '+
  '\\{ \\} \' # :\\?> :\\? ; ;; :> := _ \\.\\. ::';

 this.regexList = [
  { regex: SyntaxHighlighter.regexLib.singleLineCComments,    css: 'comments' },   // one line comments
    { regex: new RegExp('\\(\\*[\\s\\S]*?\\*\\)', 'gm'),   css: 'comments' },   // multiline comments
  { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },   // strings
    { regex: new RegExp('^\\s*#.*', 'gm'),      css: 'preprocessor' },  // preprocessor tags like #light
  { regex: new RegExp(this.getKeywords(keywords), 'gm'),  css: 'keyword' },  // f# keyword
  //{ regex: new RegExp(this.getKeywords(ocaml), 'gm'),  css: 'color1' },   // caml keyword
  //{ regex: new RegExp(this.getKeywords(reserved), 'gm'),  css: 'color2' },   // reserved keyword
  //{ regex: new RegExp(this.getKeywords(symbolic), 'gm'),  css: 'color3' }   // symbolic keyword
  ];
}

SyntaxHighlighter.brushes.FSharp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.FSharp.aliases = ['f#', 'f-sharp', 'fsharp'];

}
/*
     FILE ARCHIVED ON 12:59:17 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:19 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 64.338
  exclusion.robots: 0.14
  exclusion.robots.policy: 0.129
  RedisCDXSource: 0.632
  esindex: 0.01
  LoadShardBlock: 39.764 (3)
  PetaboxLoader3.datanode: 115.428 (5)
  CDXLines.iter: 20.016 (3)
  load_resource: 129.62 (2)
  PetaboxLoader3.resolve: 48.841 (2)
*/