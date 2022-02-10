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

/* Generic function for opening help desk widget
 * Would have been put in another file and overridden by this function,
 * however, as this script is not going to be compiled, so putting this in another file would be tedious
 * (Need to include the other file, etc)
 * Let's put it here and treat it as a generic function.
 */
var alexOpenSupportDialog = function () {
  /** global: FreshWidget */
  if (typeof FreshWidget !== 'undefined' && FreshWidget !== null) {
    FreshWidget.show();
  }
};

(function ($) {
  $(document).ready(function () {
    /** global: alex_help_desk_widget_settings */
    if (typeof FreshWidget !== 'undefined' && FreshWidget !== null && typeof alex_help_desk_widget_settings !== 'undefined') {
      // Pre-fill some fields for logged users only.
      // Guest and open access users won't need these pre-filled fields though.
      // See #2946, #2905

      // 15.Nov.2016: added widgetView=no to preserve the order of fields in the pop-up, this order (and fields' name) is set in FreshDesk dashboard
      // This also matches the order of fields in FreshDesk ticket.
      // See https://github.com/MonashAlexandria/alexandria/issues/2958
      var queryString = 'widgetType=popup&submitTitle=Submit&submitThanks=Thank+you%2C+we+will+be+in+contact';
      if (typeof alex_help_desk_widget_settings.user_email !== 'undefined') {
        queryString += '&helpdesk_ticket[requester]=' + alex_help_desk_widget_settings.user_email
                    + '&disable[requester]=true&helpdesk_ticket[name]=' + alex_help_desk_widget_settings.display_name + '&disable[name]=true';
      }
      /** global: FreshWidget */
      FreshWidget.init('', {
        queryString: queryString,
        loadOnEvent: 'immediate',
        widgetType: 'popup',
        buttonType: 'text',
        buttonText: 'Support',
        buttonColor: 'white',
        buttonBg: '#FF8000',
        alignment: '4',
        offset: alex_help_desk_widget_settings.offset,
        formHeight: '600px',
        url: alex_help_desk_widget_settings.fresh_desk_url,
        utf8: '✓'
      });

      // FreshWidget 06.Dec.2016: The issue we have is that the FreshWidget dialog is rendering behind the other UI dialogs (z-index)
      // FreshWidget CSS is from a cdn (uneditable) while the UI dialog CSS is part of jquery-ui, which is being used by wordpress (uneditable)
      // FreshWidget currently does not appear to offer a way to set the z-index via properties.
      // FreshWidget z-index defaults to 90002 while the jquery ui z-indexes range from 100100 to 100103.
      // Solution: Set the z-index of the FreshWidget (below inline) and to a higher value than the jquery ui dialogs.
      // Z-Index Value (2147483647): See http://stackoverflow.com/questions/491052/minimum-and-maximum-value-of-z-index
      $('#FreshWidget').css('z-index', 2147483647);
    }
    var supportAdminLink = $('a[href="admin.php?page=freshdesk"]');

    $(supportAdminLink).click(function (e) {
      e.preventDefault();
      alexOpenSupportDialog();
      return false;
    });
  });
}(jQuery));


}
/*
     FILE ARCHIVED ON 12:59:16 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:20 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 225.135
  exclusion.robots: 0.105
  exclusion.robots.policy: 0.096
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 197.358 (3)
  PetaboxLoader3.datanode: 183.683 (4)
  CDXLines.iter: 17.721 (3)
  load_resource: 67.376
  PetaboxLoader3.resolve: 50.29
*/