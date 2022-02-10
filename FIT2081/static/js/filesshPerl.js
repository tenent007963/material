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
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by David Simmons-Duffin and Marty Kube
	
		var funcs = 
			'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 
			'chroot close closedir connect cos crypt defined delete each endgrent ' + 
			'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 
			'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 
			'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 
			'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 
			'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 
			'getservbyname getservbyport getservent getsockname getsockopt glob ' + 
			'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 
			'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 
			'oct open opendir ord pack pipe pop pos print printf prototype push ' + 
			'quotemeta rand read readdir readline readlink readpipe recv rename ' + 
			'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 
			'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 
			'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 
			'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 
			'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 
			'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 
			'undef unlink unpack unshift utime values vec wait waitpid warn write ' +
			// feature
			'say';
    
		var keywords =  
			'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
			'for foreach goto if import last local my next no our package redo ref ' + 
			'require return sub tie tied unless untie until use wantarray while ' +
			// feature
			'given when default ' +
			// Try::Tiny
			'try catch finally ' +
			// Moose
			'has extends with before after around override augment';
    
		this.regexList = [
			{ regex: /(<<|&lt;&lt;)((\w+)|(['"])(.+?)\4)[\s\S]+?\n\3\5\n/g,	css: 'string' },	// here doc (maybe html encoded)
			{ regex: /#.*$/gm,										css: 'comments' },
			{ regex: /^#!.*\n/g,									css: 'preprocessor' },	// shebang
			{ regex: /-?\w+(?=\s*=(>|&gt;))/g,	css: 'string' }, // fat comma

			// is this too much?
			{ regex: /\bq[qwxr]?\([\s\S]*?\)/g,	css: 'string' }, // quote-like operators ()
			{ regex: /\bq[qwxr]?\{[\s\S]*?\}/g,	css: 'string' }, // quote-like operators {}
			{ regex: /\bq[qwxr]?\[[\s\S]*?\]/g,	css: 'string' }, // quote-like operators []
			{ regex: /\bq[qwxr]?(<|&lt;)[\s\S]*?(>|&gt;)/g,	css: 'string' }, // quote-like operators <>
			{ regex: /\bq[qwxr]?([^\w({<[])[\s\S]*?\1/g,	css: 'string' }, // quote-like operators non-paired

			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			// currently ignoring single quote package separator and utf8 names
			{ regex: /(?:&amp;|[$@%*]|\$#)\$?[a-zA-Z_](\w+|::)*/g,   		css: 'variable' },
			{ regex: /\b__(?:END|DATA)__\b[\s\S]*$/g,				css: 'comments' },

			// don't capture the newline after =cut so that =cut\n\n=head1 will start a new pod section
			{ regex: /(^|\n)=\w[\s\S]*?(\n=cut\s*(?=\n)|$)/g,		css: 'comments' },		// pod

			{ regex: new RegExp(this.getKeywords(funcs), 'gm'),		css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }
		];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perl', 'Perl', 'pl'];

	SyntaxHighlighter.brushes.Perl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


}
/*
     FILE ARCHIVED ON 12:59:18 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:21 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 124.635
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.074
  RedisCDXSource: 3.405
  esindex: 0.007
  LoadShardBlock: 100.562 (3)
  PetaboxLoader3.datanode: 104.434 (5)
  CDXLines.iter: 17.849 (3)
  load_resource: 228.02 (2)
  PetaboxLoader3.resolve: 174.505 (2)
*/