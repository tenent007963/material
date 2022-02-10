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

/* eslint-disable */
/* jshint ignore:start */
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
  a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//web.archive.org/web/20210719125919/https://www.google-analytics.com/analytics.js', 'ga');
/* jshint ignore:end */
/* eslint-enable */


ga('create', window.alex_analytics_dimensions.tracking_id, 'auto');
ga('require', 'displayfeatures');


jQuery(document).ready(function () {
  if (typeof window.AlexAnalyticsReport === 'function') {
    /**
     * AlexAnalyticsReport should be defined in 'tracking_report_object.js'
     */
    window.AlexAnalyticsReport.prototype.populateFromHtml = function () {
      /**
       *  Replacing jQuery.data() with attr(data-),
       *  because of .data() function nature to cache data.
       */

      if (jQuery(this.article).attr('data-post-id')) {
        this.itemID = jQuery(this.article).attr('data-post-id');
      }

      if (jQuery(this.article).attr('data-post-type')) {
        this.itemType = jQuery(this.article).attr('data-post-type');
      }

      if (jQuery(this.article).attr('data-post-status')) {
        this.itemStatus = jQuery(this.article).attr('data-post-status');
      }

      if (jQuery(this.article).attr('data-post-author')) {
        this.itemOwner = jQuery(this.article).attr('data-post-author');
      }

      this.itemByline = this.getPostByLine();
      this.itemTitle = this.getTitle();
      this.itemSubtitle = this.getSubtitle();
      this.itemCategories = this.getCategories();
      this.itemTags = this.getTags();

      if (jQuery(this.article).attr('data-comment-status')) {
        this.itemCommentStatus = jQuery(this.article).attr('data-comment-status');
      }
    };

    window.AlexAnalyticsReport.prototype.getCategories = function () {
      var post_categories = '';
      if (jQuery('.categories-links')[0]) {
        var category = Array();
        jQuery('.categories-links a').each(function (i, el) {
          category.push(el.innerText);
        });
        post_categories = category.toString();
      }
      return post_categories;
    };

    window.AlexAnalyticsReport.prototype.getTags = function () {
      var post_tags = '';
      if (jQuery('.tags-links')[0]) {
        var tag = [];
        jQuery('.tags-links>a').each(function () {
          tag.push(jQuery(this).text());
        });
        post_tags = tag.toString();
      }
      return post_tags;
    };

    window.AlexAnalyticsReport.prototype.getTitle = function () {
      var post_title;
      if (jQuery('.article-title')[0]) {
        post_title = jQuery('.article-title').text();
      } else if (jQuery('h1.entry-title')[0]) {
        post_title = jQuery('h1.entry-title')[0].innerText;
      } else {
        post_title = document.title;
      }
      return post_title;
    };

    window.AlexAnalyticsReport.prototype.getSubtitle = function () {
      var post_subtitle = '';
      if (jQuery('.entry-subtitle')) {
        post_subtitle = jQuery.trim(jQuery('.entry-subtitle').text());
      }
      return post_subtitle;
    };

    window.AlexAnalyticsReport.prototype.getPostByLine = function () {
      var post_byline = '';
      if (jQuery('.pod-author')) {
        post_byline = jQuery.trim(jQuery('.pod-author').text());
      }
      return post_byline;
    };


    /**
     * Create the object of AnalyticsReport
     * AnalyticsReport is an model to collect all the details
     * and send to server about the action, event, post and user
     * @type {AlexAnalyticsReport}
     */
    var aro = new window.AlexAnalyticsReport();
    aro.populateFromHtml();

    if (jQuery('body').hasClass('single')) {
      if (jQuery('body').hasClass('single-syllabus')) {
        // Scenerio 1
        aro.itemContext = 'syllabus:' + aro.itemID;
      }
      aro.sendAsPageView();
    } else if (jQuery('body').hasClass('reader')) {
      // Scenerio 2,3
      aro.itemContext = 'syllabus:' + jQuery('body').attr('data-syllabus-post-id');
      aro.sendAsPageView();
    } else if (jQuery('body').hasClass('page')) {
      // Scenerio 6,7
      if (jQuery('body').hasClass('discover')) {
        aro.itemTitle = 'Discover';
      }
      aro.sendAsPageView();
    } else if (jQuery('body').hasClass('search-results')) {
      aro.itemTitle = 'Search Results';
      // send as page view and then, send all search results
      aro.sendAsPageView();

      jQuery('article').each(function () {
        aro = new window.AlexAnalyticsReport(this);
        aro.populateFromHtml();
        aro.itemByline = '0';

        /**
         * Title element has lots of blank space before and after text.
         * jquery.trim() remove the space blank spaces before and after text.
         * IMPORTANT: use jquery.trim(), not [String].trim(), as IE doesn't have the latter - see issue #918
         */
        aro.itemTitle = jQuery.trim(jQuery(this).find('h1.entry-title a').text());
        aro.itemSubtitle = '0';

        /**
         * Don't need to use trim() here, as it doesn't have blank space.
         */
        aro.itemCategories = jQuery(this).find('span.categories-links').text();
        aro.commentStatus = jQuery(this).data('commentStatus');

        var post_tags = '0';
        if (jQuery(this).find('span.tags-links')[0]) {
          var tagElement = jQuery(this).find('span.tags-links')[0];
          var tag = [];
          jQuery(tagElement).find('a').each(function () {
            tag.push(jQuery(this).text());
          });
          post_tags = tag.toString();
        }

        aro.itemTags = post_tags;
        aro.sendAsEvent('search Results', jQuery('.input_search').val());
      });
    }

    // ********************************** EVENTS TRACKING *******************************

    // Reset button at Search box
    jQuery('.taxonomies-filter-widget-form .reset_button').click(function () {
      aro.sendAsEvent('Reset');
    });

    // Search button at Search box
    jQuery('.taxonomies-filter-widget-form .reset_button').next('input').click(function () {
      aro.sendAsEvent('Search');
    });

    // TOC in Reader view
    jQuery('.dropdown').click(function () {
      if (jQuery(this).hasClass('open')) {
        // click to close the TOC
      } else {
        // Click to open the TOC
        aro.sendAsEvent('TOC');
      }
    });

    // Read online option at syllabus view
    jQuery('.entry-action.read-online').click(function () {
      aro.sendAsEvent('Read Online');
    });
  }
});


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
  captures_list: 93.195
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.074
  RedisCDXSource: 0.585
  esindex: 0.009
  LoadShardBlock: 74.242 (3)
  PetaboxLoader3.datanode: 83.45 (4)
  CDXLines.iter: 15.906 (3)
  load_resource: 49.086
  PetaboxLoader3.resolve: 29.922
*/