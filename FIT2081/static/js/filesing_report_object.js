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

/*
 * @copyright  Copyright © 2013-2017 Monash University. All Rights Reserved.
 */

/**
 * Model for Analytics Report
 * Collects all the data to send to server
 *
 * @constructor
 */
window.AlexAnalyticsReport = function () {
  // noinspection JSUnresolvedVariable
  this.userID = window.alex_analytics_dimensions.user_id; // dimension 1
  // noinspection JSUnresolvedVariable
  this.userRole = window.alex_analytics_dimensions.user_role; // dimension 2
  this.isAdminSection = '0'; // dimension 3
  this.itemType = '0'; // dimension 4 (was dimension 6 before Release 2017-06-08, see #4193), this can be syllabus, module, Interactive, Media, etc.
  this.itemID = '0'; // dimension 5
  this.itemContext = '0'; // dimension 6 (was dimension 4 before Release 2017-06-08, see #4193), this can be 'module' OR 'syllabus:syllabus_id' for both syllabus and syllabus module
  this.itemStatus = '0'; // dimension 7
  this.itemOwner = '0'; // dimension 8
  this.itemByline = '0'; // dimension 9
  this.itemTitle = '0'; // dimension 10
  this.itemSubtitle = '0'; // dimension 11
  this.itemCategories = '0'; // dimension 12
  this.itemTags = '0'; // dimension 13
  this.itemCommentStatus = '0'; // dimension 14

  this.setItemType = function (itemType) {
    if (!itemType) {
      console.error('Item type parameter is required');
    }
    this.itemType = itemType;
  };

  this.setItemID = function (itemID) {
    if (!itemID) {
      console.error('Item ID parameter is required');
    }
    this.itemID = itemID;
  };

  this.setItemContext = function (itemContext) {
    if (!itemContext) {
      console.error('Item Context parameter is required');
    }
    this.itemContext = itemContext;
  };

  this.setItemStatus = function (itemStatus) {
    if (!itemStatus) {
      console.error('Item status parameter is required');
    }
    this.itemStatus = itemStatus;
  };

  this.setItemOwner = function (itemOwner) {
    if (!itemOwner) {
      console.error('Item owner parameter is required');
    }
    this.itemStatus = itemOwner;
  };

  this.setItemByLine = function (itemByLine) {
    if (!itemByLine) {
      console.error('Item Byline parameter is required');
    }
    this.itemByline = itemByLine;
  };

  this.setItemTitle = function (itemTitle) {
    if (!itemTitle) {
      console.error('Item title parameter is required');
    }
    this.itemTitle = itemTitle;
  };

  this.setItemSubtitle = function (itemSubtitle) {
    if (!itemSubtitle) {
      console.error('Item subtitle parameter is required');
    }
    this.itemSubtitle = itemSubtitle;
  };

  this.setItemCategories = function (itemCategories) {
    if (!itemCategories) {
      console.error('Item categories parameter is required');
    }
    this.itemCategories = itemCategories;
  };

  this.setItemTags = function (itemTags) {
    if (!itemTags) {
      console.error('Item tags parameter is required');
    }
    this.itemTags = itemTags;
  };

  this.setItemCommentStatus = function (itemCommentStatus) {
    if (!itemCommentStatus) {
      console.error('Item comment status parameter is required');
    }
    this.itemCommentStatus = itemCommentStatus;
  };

  this.setAdmin = function () {
    this.isAdminSection = '1';
    this.itemTitle = 'Admin Section';
  };

  this.setItem = function (item) {
    if (typeof item == 'object' && item.id) {
      this.setItemID(item.id);
      this.setItemStatus(item.post_status || '0');
      this.setItemOwner(item.author || '0');
      this.setItemByLine(item.byline || '0');
      this.setItemTitle(item.title.rendered || '0');
      this.setItemSubtitle(item.subtitle || '0');
      this.setItemCategories(this.retrieveValue(item.categories, 'name') || '0');
      this.setItemTags(this.retrieveValue(item.tags, 'name') || '0');
      this.setItemCommentStatus(item.comment_status || '0');
    }
  };

  this.getDimensions = function () {
    return {
      dimension1: this.userID,
      dimension2: this.userRole,
      dimension3: this.isAdminSection,
      dimension4: this.itemType, // was dimension 6 before Release 2017-06-08, see #4193
      dimension5: this.itemID,
      dimension6: this.itemContext, // was dimension 4 before Release 2017-06-08, see #4193
      dimension7: this.itemStatus,
      dimension8: this.itemOwner,
      dimension9: this.itemByline,
      dimension10: this.itemTitle,
      dimension11: this.itemSubtitle,
      dimension12: this.itemCategories,
      dimension13: this.itemTags,
      dimension14: this.itemCommentStatus
    };
  };


  this.sendAsPageView = function () {
    ga('send', 'pageview', this.getDimensions());
  };

  this.sendAsEvent = function (category, label) {
    this.label = label;
    if (!label) {
      this.label = 'UI-action';
    }
    ga('send', 'event', category, this.label, this.getDimensions());
  };

  /**
   *
   * Utility function similar to lodash.map to retrieve value from nested array
   * @param item
   * @param name
   * @returns {*}
   */
  this.retrieveValue = function (item, name) {
    if (typeof item !== 'object') {
      return '0';
    }

    return item.map(function (object) {
      return (object[name]) ? object[name] : false;
    }).filter(function (obj) {
      return true && obj;
    }).join();
  };
};


}
/*
     FILE ARCHIVED ON 12:59:19 Jul 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:23 Feb 10, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 708.276
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.076
  RedisCDXSource: 49.115
  esindex: 0.007
  LoadShardBlock: 641.463 (3)
  PetaboxLoader3.datanode: 663.375 (4)
  CDXLines.iter: 15.385 (3)
  load_resource: 112.032
  PetaboxLoader3.resolve: 82.462
*/