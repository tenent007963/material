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

// Contributed by Travis Whitton
// http://travis-whitton.blogspot.com/2009/06/syntaxhighlighter-for-clojure.html

SyntaxHighlighter.brushes.Clojure = function()
{
	var funcs = ':arglists :doc :file :line :macro :name :ns :private :tag :test new alias alter ' +
				'and apply assert class cond conj count def defmacro defn defstruct deref do '     +
				'doall dorun doseq dosync eval filter finally find first fn gen-class gensym if '  +
				'import inc keys let list loop map ns or print println quote rand recur reduce '   +
				'ref repeat require rest send seq set sort str struct sync take test throw '       +
				'trampoline try type use var vec when while';

	this.regexList = [
			{ regex: new RegExp(';[^\]]+$', 'gm'),                           css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
			{ regex: /\[|\]/g,                                               css: 'keyword' },
			{ regex: /'[a-z][A-Za-z0-9_]*/g,                                 css: 'color1' }, // symbols
			{ regex: /:[a-z][A-Za-z0-9_\-]*/g,                               css: 'color2' }, // keywords
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),             css: 'functions' }
	];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.Clojure.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Clojure.aliases       = ['clojure', 'Clojure', 'clj'];

}
/*
     FILE ARCHIVED ON 12:59:16 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:21 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 205.993
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.087
  cdx.remote: 0.068
  esindex: 0.011
  LoadShardBlock: 161.383 (3)
  PetaboxLoader3.datanode: 174.316 (4)
  CDXLines.iter: 15.054 (3)
  load_resource: 136.303
  PetaboxLoader3.resolve: 115.651
*/