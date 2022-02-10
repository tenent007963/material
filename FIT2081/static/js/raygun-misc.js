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


/** global: ALEX_VERSION */
var ALEX_VERSION = (function () {
  // retrieve from <meta name="alex_version" ... >
  var version = document.querySelector('meta[name="alex_version"]');
  if (version) {
    return version.content;
  }

  // no alex_version meta found
  return 'unknown-version';
}());

if (window.rg4js) {
  /** global: rg4js */
  rg4js('withCustomData', alexGetExtraErrorData);
  rg4js('setVersion', ALEX_VERSION);
}

function alexGetExtraErrorData() {
  var data = {
    alex_api_settings_ready: false /** global: alex_api_settings */
  };
  if (typeof alex_api_settings !== 'undefined') {
    data = {
      alex_api_settings_ready: true,
      is_authenticated: alex_api_settings.is_authenticated,
      role: alex_api_settings.role
    };
  }
  return data;
}


}
/*
     FILE ARCHIVED ON 12:59:12 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:22 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 72.452
  exclusion.robots: 0.177
  exclusion.robots.policy: 0.163
  cdx.remote: 0.116
  esindex: 0.016
  LoadShardBlock: 42.044 (3)
  PetaboxLoader3.datanode: 76.997 (5)
  CDXLines.iter: 19.195 (3)
  load_resource: 119.968 (2)
  PetaboxLoader3.resolve: 66.769 (2)
*/