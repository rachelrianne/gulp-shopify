"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-flexbox-placeholder-svg-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function s() {
    var e, t, n, s, o, i, a;

    for (var f in w) {
      if (w.hasOwnProperty(f)) {
        if (e = [], t = w[f], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (s = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) {
          i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"));
        }
      }
    }
  }

  function o(e) {
    var t = S.className,
        n = Modernizr._config.classPrefix || "";

    if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? S.className.baseVal = t : S.className = t);
  }

  function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function f(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function l() {
    var e = t.body;
    return e || (e = i(_ ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, n, r, s) {
    var o,
        a,
        f,
        u,
        d = "modernizr",
        p = i("div"),
        c = l();
    if (parseInt(r, 10)) for (; r--;) {
      f = i("div"), f.id = s ? s[r] : d + (r + 1), p.appendChild(f);
    }
    return o = i("style"), o.type = "text/css", o.id = "s" + d, (c.fake ? c : p).appendChild(o), c.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(c)), a = n(p, e), c.fake ? (c.parentNode.removeChild(c), S.style.overflow = u, S.offsetHeight) : p.parentNode.removeChild(p), !!a;
  }

  function d(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function p(e, t, n) {
    var s;

    for (var o in e) {
      if (e[o] in t) return n === !1 ? e[o] : (s = t[e[o]], r(s, "function") ? d(s, n || t) : s);
    }

    return !1;
  }

  function c(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(t, r) {
    var s = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;) {
        if (e.CSS.supports(c(t[s]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) {
        o.push("(" + c(t[s]) + ":" + r + ")");
      }

      return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }

    return n;
  }

  function h(e, t, s, o) {
    function l() {
      d && (delete k.style, delete k.modElem);
    }

    if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var u = m(e, s);
      if (!r(u, "undefined")) return u;
    }

    for (var d, p, c, h, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) {
      d = !0, k.modElem = i(g.shift()), k.style = k.modElem.style;
    }

    for (c = e.length, p = 0; c > p; p++) {
      if (h = e[p], v = k.style[h], a(h, "-") && (h = f(h)), k.style[h] !== n) {
        if (o || r(s, "undefined")) return l(), "pfx" == t ? h : !0;

        try {
          k.style[h] = s;
        } catch (y) {}

        if (k.style[h] != v) return l(), "pfx" == t ? h : !0;
      }
    }

    return l(), !1;
  }

  function v(e, t, n, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + E.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined") ? h(a, t, s, o) : (a = (e + " " + T.join(i + " ") + i).split(" "), p(a, t, n));
  }

  function g(e, t, r) {
    return v(e, n, n, t, r);
  }

  var y = [],
      w = [],
      x = {
    _version: "3.3.1",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      w.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      w.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = x, Modernizr = new Modernizr(), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var C = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  x._prefixes = C;

  var S = t.documentElement,
      _ = "svg" === S.nodeName.toLowerCase(),
      b = "Moz O ms Webkit",
      T = x._config.usePrefixes ? b.toLowerCase().split(" ") : [];

  x._domPrefixes = T;
  var z = "CSS" in e && "supports" in e.CSS,
      P = ("supportsCSS" in e);
  Modernizr.addTest("supports", z || P), Modernizr.addTest("placeholder", "placeholder" in i("input") && "placeholder" in i("textarea"));
  var E = x._config.usePrefixes ? b.split(" ") : [];
  x._cssomPrefixes = E;
  var N = x.testStyles = u;
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      N(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  var j = {
    elem: i("modernizr")
  };

  Modernizr._q.push(function () {
    delete j.elem;
  });

  var k = {
    style: j.elem.style
  };

  Modernizr._q.unshift(function () {
    delete k.style;
  });

  x.testProp = function (e, t, r) {
    return h([e], n, t, r);
  };

  x.testAllProps = v, x.testAllProps = g, Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0);
  }), Modernizr.addTest("csstransforms3d", function () {
    var e = !!g("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;

    if (e && (!t || "webkitPerspective" in S.style)) {
      var n,
          r = "#modernizr{width:0;height:0}";
      Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", N(r + n, function (t) {
        e = 7 === t.offsetWidth && 18 === t.offsetHeight;
      });
    }

    return e;
  }), Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)), s(), o(y), delete x.addTest, delete x.addAsyncTest;

  for (var A = 0; A < Modernizr._q.length; A++) {
    Modernizr._q[A]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

window.slate = window.slate || {};
window.theme = window.theme || {};
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function pageLinkFocus($element) {
    var focusClass = 'js-focus-hidden';
    $element.first().attr('tabIndex', '-1').focus().addClass(focusClass).one('blur', callback);

    function callback() {
      $element.first().removeClass(focusClass).removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function focusHash() {
    var hash = window.location.hash; // is there a hash in the url? is it an element on the page?

    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function bindInPageLinks() {
    $('a[href*=#]').on('click', function (evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function trapFocus(options) {
    var eventName = options.namespace ? 'focusin.' + options.namespace : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();
    $(document).on(eventName, function (evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function removeTrapFocus(options) {
    var eventName = options.namespace ? 'focusin.' + options.namespace : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};
/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */

slate.cart = {
  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function cookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled) {
      document.cookie = 'testcookie';
      cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
    }

    return cookieEnabled;
  }
};
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = function () {
  var moneyFormat = '${{amount}}';
  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */

  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }

    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);
      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? decimal + parts[1] : '';
      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;

      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;

      case 'amount_with_space_separator':
        value = formatWithDelimiters(cents, 2, ' ', '.');
        break;

      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, ',', '.');
        break;

      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
}();
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */


slate.Image = function () {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */
  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }
  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */


  function loadImage(path) {
    new Image().src = path;
  }
  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */


  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }
  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */


  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];
      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
}();
/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap iframes and tables in div tags to force responsive/scrollable layout.
 *
 * @namespace rte
 */


slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function wrapTable(options) {
    var tableWrapperClass = typeof options.tableWrapperClass === "undefined" ? '' : options.tableWrapperClass;
    options.$tables.wrap('<div class="' + tableWrapperClass + '"></div>');
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function wrapIframe(options) {
    var iframeWrapperClass = typeof options.iframeWrapperClass === "undefined" ? '' : options.iframeWrapperClass;
    options.$iframes.each(function () {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="' + iframeWrapperClass + '"></div>'); // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar

      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];
  $(document).on('shopify:section:load', this._onSectionLoad.bind(this)).on('shopify:section:unload', this._onSectionUnload.bind(this)).on('shopify:section:select', this._onSelect.bind(this)).on('shopify:section:deselect', this._onDeselect.bind(this)).on('shopify:section:reorder', this._onReorder.bind(this)).on('shopify:block:select', this._onBlockSelect.bind(this)).on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function _createInstance(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');
    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });
    this.instances.push(instance);
  },
  _onSectionLoad: function _onSectionLoad(evt) {
    var container = $('[data-section-id]', evt.target)[0];

    if (container) {
      this._createInstance(container);
    }
  },
  _onSectionUnload: function _onSectionUnload(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },
  _onSelect: function _onSelect(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },
  _onDeselect: function _onDeselect(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },
  _onReorder: function _onReorder(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },
  _onBlockSelect: function _onBlockSelect(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },
  _onBlockDeselect: function _onBlockDeselect(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },
  register: function register(type, constructor) {
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(function (index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});
/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {
  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function findInstance(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function removeInstance(array, key, value) {
    var i = array.length;

    while (i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function compact(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];

      if (value) {
        result[resIndex++] = value;
      }
    }

    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function defaultTo(value, defaultValue) {
    return value == null || value !== value ? defaultValue : value;
  }
};
/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = function () {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();
    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function _getCurrentOptions() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function (element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');
            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');
          return currentOption;
        }
      }); // remove any unchecked input values if using radio buttons or checkboxes

      currentOptions = slate.utils.compact(currentOptions);
      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function _getVariantFromOptions() {
      var selectedValues = this._getCurrentOptions();

      var variants = this.product.variants;
      var found = false;
      variants.forEach(function (variant) {
        var satisfied = true;
        selectedValues.forEach(function (option) {
          if (satisfied) {
            satisfied = option.value === variant[option.index];
          }
        });

        if (satisfied) {
          found = variant;
        }
      });
      return found || null;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function _onSelectChange() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);

      this._updateImages(variant);

      this._updatePrice(variant);

      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function _updateImages(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function _updatePrice(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param {object} variant - Currently selected variant
     */
    _updateHistoryState: function _updateHistoryState(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param {object} variant - Currently selected variant
     */
    _updateMasterSelect: function _updateMasterSelect(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });
  return Variants;
}();
"use strict";

/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
   * @namespace product
 */
theme.Product = function () {
  var selectors = {
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    productFeaturedImage: '[data-product-featured-image]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    productThumbs: '[data-product-single-thumbnail]',
    singleOptionSelector: '[data-single-option-selector]'
  };
  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */

  function Product(container) {
    this.$container = $(container); // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor

    if (!$(selectors.productJson, this.$container).html()) {
      return;
    }

    var sectionId = this.$container.attr('data-section-id');
    this.productSingleObject = JSON.parse($(selectors.productJson, this.$container).html());
    var options = {
      $container: this.$container,
      enableHistoryState: this.$container.data('enable-history-state') || false,
      singleOptionSelector: selectors.singleOptionSelector,
      originalSelectorId: selectors.originalSelectorId,
      product: this.productSingleObject
    };
    this.settings = {};
    this.namespace = '.product';
    this.variants = new slate.Variants(options);
    this.$featuredImage = $(selectors.productFeaturedImage, this.$container);
    this.$container.on('variantChange' + this.namespace, this.updateAddToCartState.bind(this));
    this.$container.on('variantPriceChange' + this.namespace, this.updateProductPrices.bind(this));

    if (this.$featuredImage.length > 0) {
      this.settings.imageSize = slate.Image.imageSize(this.$featuredImage.attr('src'));
      slate.Image.preload(this.productSingleObject.images, this.settings.imageSize);
      this.$container.on('variantImageChange' + this.namespace, this.updateProductImage.bind(this));
    }
  }

  Product.prototype = $.extend({}, Product.prototype, {
    /**
     * Updates the DOM state of the add to cart button
     *
     * @param {boolean} enabled - Decides whether cart is enabled or disabled
     * @param {string} text - Updates the text notification content of the cart
     */
    updateAddToCartState: function updateAddToCartState(evt) {
      var variant = evt.variant;

      if (variant) {
        $(selectors.priceWrapper, this.$container).removeClass('hide');
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.unavailable);
        $(selectors.priceWrapper, this.$container).addClass('hide');
        return;
      }

      if (variant.available) {
        $(selectors.addToCart, this.$container).prop('disabled', false);
        $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
      }
    },

    /**
     * Updates the DOM with specified prices
     *
     * @param {string} productPrice - The current price of the product
     * @param {string} comparePrice - The original price of the product
     */
    updateProductPrices: function updateProductPrices(evt) {
      var variant = evt.variant;
      var $comparePrice = $(selectors.comparePrice, this.$container);
      var $compareEls = $comparePrice.add(selectors.comparePriceText, this.$container);
      $(selectors.productPrice, this.$container).html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

      if (variant.compare_at_price > variant.price) {
        $comparePrice.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
        $compareEls.removeClass('hide');
      } else {
        $comparePrice.html('');
        $compareEls.addClass('hide');
      }
    },

    /**
     * Updates the DOM with the specified image URL
     *
     * @param {string} src - Image src URL
     */
    updateProductImage: function updateProductImage(evt) {
      var variant = evt.variant;
      var sizedImgUrl = slate.Image.getSizedImageUrl(variant.featured_image.src, this.settings.imageSize);
      this.$featuredImage.attr('src', sizedImgUrl);
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function onUnload() {
      this.$container.off(this.namespace);
    }
  });
  return Product;
}();
/**
 * Customer Addresses Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Customer Addresses
 * template.
 *
 * @namespace customerAddresses
 */


theme.customerAddresses = function () {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  } // Initialize observers on address selectors, defined in shopify_common.js


  if (Shopify) {
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  } // Initialize each edit form's country/province selector


  $('.address-country-option').each(function () {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;
    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  }); // Toggle new/edit address forms

  $('.address-new-toggle').on('click', function () {
    $newAddressForm.toggleClass('hide');
  });
  $('.address-edit-toggle').on('click', function () {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });
  $('.address-delete').on('click', function () {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.data('confirm-message');

    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {
        parameters: {
          _method: 'delete'
        }
      });
    }
  });
}();
/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */


theme.customerLogin = function () {
  var config = {
    recoverPasswordForm: '#RecoverPassword',
    hideRecoverPasswordLink: '#HideRecoverPasswordLink'
  };

  if (!$(config.recoverPasswordForm).length) {
    return;
  }

  checkUrlHash();
  resetPasswordSuccess();
  $(config.recoverPasswordForm).on('click', onShowHidePasswordForm);
  $(config.hideRecoverPasswordLink).on('click', onShowHidePasswordForm);

  function onShowHidePasswordForm(evt) {
    evt.preventDefault();
    toggleRecoverPasswordForm();
  }

  function checkUrlHash() {
    var hash = window.location.hash; // Allow deep linking to recover password form

    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }
  /**
   *  Show/Hide recover password form
   */


  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }
  /**
   *  Show reset password success message
   */


  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success'); // check if reset password form was successfully submited.

    if (!$formState.length) {
      return;
    } // show success message


    $('#ResetSuccess').removeClass('hide');
  }
}();

$(document).ready(function () {
  var sections = new slate.Sections();
  sections.register('product', theme.Product); // Common a11y fixes

  slate.a11y.pageLinkFocus($(window.location.hash));
  $('.in-page-link').on('click', function (evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  }); // Target tables to make them scrollable

  var tableSelectors = '.rte table';
  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper'
  }); // Target iframes to make them responsive

  var iframeSelectors = '.rte iframe[src*="youtube.com/embed"],' + '.rte iframe[src*="player.vimeo"]';
  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  }); // Apply a specific class to the html element for browser support of cookies.

  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});