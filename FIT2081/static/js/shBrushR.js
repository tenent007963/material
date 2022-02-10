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

/**
 *  Author: Yihui Xie <xie@yihui.name>
 *  URL: http://yihui.name/en/2010/09/syntaxhighlighter-brush-for-the-r-language
 *  License: GPL-2 | GPL-3
 */
SyntaxHighlighter.brushes.R = function()
{
    var keywords = 'if else repeat while function for in next break TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_';
    var constants = 'LETTERS letters month.abb month.name pi';
    this.regexList = [
	{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },
	{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
	{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
	{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },
	{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants' },
	{ regex: /[\w._]+[ \t]*(?=\()/gm,				css: 'functions' },
    ];
};
SyntaxHighlighter.brushes.R.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.R.aliases	= ['r', 's', 'splus'];


}
/*
     FILE ARCHIVED ON 12:59:18 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:22 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 128.617
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.121
  RedisCDXSource: 0.965
  esindex: 0.011
  LoadShardBlock: 109.63 (3)
  PetaboxLoader3.datanode: 180.061 (5)
  CDXLines.iter: 15.382 (3)
  load_resource: 134.985 (2)
  PetaboxLoader3.resolve: 61.211 (2)
*/