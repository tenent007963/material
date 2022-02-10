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
 *	Author: Will Schleter
 *	based on: http://www.jamesrohal.com
 */
SyntaxHighlighter.brushes.MatlabKey = function()
{
	var keywords = 'break case catch classdef continue else elseif end for function global if otherwise parfor persistent return spmd switch try while';
	var functions = ' ';

	this.regexList = [
		{ regex: /%.*$/gm,	css: 'comments' }, // one line comments
		{ regex: /\%\{[\s\S]*?\%\}/gm, css: 'comments'}, // multiline comments
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }
	];
}

SyntaxHighlighter.brushes.MatlabKey.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.MatlabKey.aliases		= ['matlabkey', 'matlab'];

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
  captures_list: 63.247
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.091
  RedisCDXSource: 0.691
  esindex: 0.01
  LoadShardBlock: 41.302 (3)
  PetaboxLoader3.datanode: 161.519 (5)
  CDXLines.iter: 17.862 (3)
  load_resource: 300.388 (2)
  PetaboxLoader3.resolve: 174.703 (2)
*/