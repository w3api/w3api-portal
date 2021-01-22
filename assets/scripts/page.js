
  // Modal
  (function() {
    var SOURCES = window.TEXT_VARIABLES.sources;
    window.Lazyload.js(SOURCES.jquery, function() {
      var $body = $('body'), $window = $(window);
      var $pageRoot = $('.js-page-root'), $pageMain = $('.js-page-main');
      var activeCount = 0;
      function modal(options) {
        var $root = this, visible, onChange, hideWhenWindowScroll = false;
        var scrollTop;
        function setOptions(options) {
          var _options = options || {};
          visible = _options.initialVisible === undefined ? false : show;
          onChange = _options.onChange;
          hideWhenWindowScroll = _options.hideWhenWindowScroll;
        }
        function init() {
          setState(visible);
        }
        function setState(isShow) {
          if (isShow === visible) {
            return;
          }
          visible = isShow;
          if (visible) {
            activeCount++;
            scrollTop = $(window).scrollTop() || $pageMain.scrollTop();
            $root.addClass('modal--show');
            $pageMain.scrollTop(scrollTop);
            activeCount === 1 && ($pageRoot.addClass('show-modal'), $body.addClass('of-hidden'));
            hideWhenWindowScroll && window.hasEvent('touchstart') && $window.on('scroll', hide);
            $window.on('keyup', handleKeyup);
          } else {
            activeCount > 0 && activeCount--;
            $root.removeClass('modal--show');
            $window.scrollTop(scrollTop);
            activeCount === 0 && ($pageRoot.removeClass('show-modal'), $body.removeClass('of-hidden'));
            hideWhenWindowScroll && window.hasEvent('touchstart') && $window.off('scroll', hide);
            $window.off('keyup', handleKeyup);
          }
          onChange && onChange(visible);
        }
        function show() {
          setState(true);
        }
        function hide() {
          setState(false);
        }
        function handleKeyup(e) {
          // Char Code: 27  ESC
          if (e.which ===  27) {
            hide();
          }
        }
        setOptions(options);
        init();
        return {
          show: show,
          hide: hide,
          $el: $root
        };
      }
      $.fn.modal = modal;
    });
  })();

// Scroll-To
(function() {
    var SOURCES = window.TEXT_VARIABLES.sources;
    window.Lazyload.js(SOURCES.jquery, function() {
      function scrollToAnchor(anchor, duration, callback) {
        var $root = this;
        $root.animate({ scrollTop: $(anchor).position().top }, duration, function() {
          window.history.replaceState(null, '', window.location.href.split('#')[0] + anchor);
          callback && callback();
        });
      }
      $.fn.scrollToAnchor = scrollToAnchor;
    });
  })();
  

// Afix
(function() {
    var SOURCES = window.TEXT_VARIABLES.sources;
    window.Lazyload.js(SOURCES.jquery, function() {
      function affix(options) {
        var $root = this, $window = $(window), $scrollTarget, $scroll,
          offsetBottom = 0, scrollTarget = window, scroll = window.document, disabled = false, isOverallScroller = true,
          rootTop, rootLeft, rootHeight, scrollBottom, rootBottomTop,
          hasInit = false, curState;
  
        function setOptions(options) {
          var _options = options || {};
          _options.offsetBottom && (offsetBottom = _options.offsetBottom);
          _options.scrollTarget && (scrollTarget = _options.scrollTarget);
          _options.scroll && (scroll = _options.scroll);
          _options.disabled !== undefined && (disabled = _options.disabled);
          $scrollTarget = $(scrollTarget);
          isOverallScroller = window.isOverallScroller($scrollTarget[0]);
          $scroll = $(scroll);
        }
        function preCalc() {
          top();
          rootHeight = $root.outerHeight();
          rootTop = $root.offset().top + (isOverallScroller ? 0 :  $scrollTarget.scrollTop());
          rootLeft = $root.offset().left;
        }
        function calc(needPreCalc) {
          needPreCalc && preCalc();
          scrollBottom = $scroll.outerHeight() - offsetBottom - rootHeight;
          rootBottomTop = scrollBottom - rootTop;
        }
        function top() {
          if (curState !== 'top') {
            $root.removeClass('fixed').css({
              left: 0,
              top: 0
            });
            curState = 'top';
          }
        }
        function fixed() {
          if (curState !== 'fixed') {
            $root.addClass('fixed').css({
              left: rootLeft + 'px',
              top: 0
            });
            curState = 'fixed';
          }
        }
        function bottom() {
          if (curState !== 'bottom') {
            $root.removeClass('fixed').css({
              left: 0,
              top: rootBottomTop + 'px'
            });
            curState = 'bottom';
          }
        }
        function setState() {
          var scrollTop = $scrollTarget.scrollTop();
          if (scrollTop >= rootTop && scrollTop <= scrollBottom) {
            fixed();
          } else if (scrollTop < rootTop) {
            top();
          } else {
            bottom();
          }
        }
        function init() {
          if(!hasInit) {
            var interval, timeout;
            calc(true); setState();
            // run calc every 100 millisecond
            interval = setInterval(function() {
              calc();
            }, 100);
            timeout = setTimeout(function() {
              clearInterval(interval);
            }, 45000);
            window.pageLoad.then(function() {
              setTimeout(function() {
                clearInterval(interval);
                clearTimeout(timeout);
              }, 3000);
            });
            $scrollTarget.on('scroll', function() {
              disabled || setState();
            });
            $window.on('resize', function() {
              disabled || (calc(true), setState());
            });
            hasInit = true;
          }
        }
  
        setOptions(options);
        if (!disabled) {
          init();
        }
        $window.on('resize', window.throttle(function() {
          init();
        }, 200));
        return {
          setOptions: setOptions,
          refresh: function() {
            calc(true, { animation: false }); setState();
          }
        };
      }
      $.fn.affix = affix;
    });
  })();

  
  // Toc
  (function() {
    var SOURCES = window.TEXT_VARIABLES.sources;
    window.Lazyload.js(SOURCES.jquery, function() {
      function toc(options) {
        var $root = this, $window = $(window), $scrollTarget, $scroller, $tocUl = $('<ul class="toc toc--ellipsis"></ul>'), $tocLi, $headings, $activeLast, $activeCur,
          selectors = 'h1,h2,h3', container = 'body', scrollTarget = window, scroller = 'html, body', disabled = false,
          headingsPos, scrolling = false, hasRendered = false, hasInit = false;
  
        function setOptions(options) {
          var _options = options || {};
          _options.selectors && (selectors = _options.selectors);
          _options.container && (container = _options.container);
          _options.scrollTarget && (scrollTarget = _options.scrollTarget);
          _options.scroller && (scroller = _options.scroller);
          _options.disabled !== undefined && (disabled = _options.disabled);
          $headings = $(container).find(selectors).filter('[id]');
          $scrollTarget = $(scrollTarget);
          $scroller = $(scroller);
        }
        function calc() {
          headingsPos = [];
          $headings.each(function() {
            headingsPos.push(Math.floor($(this).position().top));
          });
        }
        function setState(element, disabled) {
          var scrollTop = $scrollTarget.scrollTop(), i;
          if (disabled || !headingsPos || headingsPos.length < 1) { return; }
          if (element) {
            $activeCur = element;
          } else {
            for (i = 0; i < headingsPos.length; i++) {
              if (scrollTop >= headingsPos[i]) {
                $activeCur = $tocLi.eq(i);
              } else {
                $activeCur || ($activeCur = $tocLi.eq(i));
                break;
              }
            }
          }
          $activeLast && $activeLast.removeClass('active');
          ($activeLast = $activeCur).addClass('active');
        }
        function render() {
          if(!hasRendered) {
            $root.append($tocUl);
            $headings.each(function() {
              var $this = $(this);
              $tocUl.append($('<li></li>').addClass('toc-' + $this.prop('tagName').toLowerCase())
                .append($('<a></a>').text($this.text()).attr('href', '#' + $this.prop('id'))));
            });
            $tocLi = $tocUl.children('li');
            $tocUl.on('click', 'a', function(e) {
              e.preventDefault();
              var $this = $(this);
              scrolling = true;
              setState($this.parent());
              $scroller.scrollToAnchor($this.attr('href'), 400, function() {
                scrolling = false;
              });
            });
          }
          hasRendered = true;
        }
        function init() {
          var interval, timeout;
          if(!hasInit) {
            render(); calc(); setState(null, scrolling);
            // run calc every 100 millisecond
            interval = setInterval(function() {
              calc();
            }, 100);
            timeout = setTimeout(function() {
              clearInterval(interval);
            }, 45000);
            window.pageLoad.then(function() {
              setTimeout(function() {
                clearInterval(interval);
                clearTimeout(timeout);
              }, 3000);
            });
            $scrollTarget.on('scroll', function() {
              disabled || setState(null, scrolling);
            });
            $window.on('resize', window.throttle(function() {
              if (!disabled) {
                render(); calc(); setState(null, scrolling);
              }
            }, 100));
          }
          hasInit = true;
        }
  
        setOptions(options);
        if (!disabled) {
          init();
        }
        $window.on('resize', window.throttle(function() {
          init();
        }, 200));
        return {
          setOptions: setOptions
        };
      }
      $.fn.toc = toc;
    });
  })();

// Components/Sidebar
(function() {
    var SOURCES = window.TEXT_VARIABLES.sources;
  
    window.Lazyload.js(SOURCES.jquery, function() {
      var $pageMask = $('.js-page-mask');
      var $pageRoot = $('.js-page-root');
      var $sidebarShow = $('.js-sidebar-show');
      var $sidebarHide = $('.js-sidebar-hide');
  
      function freeze(e) {
        if (e.target === $pageMask[0]) {
          e.preventDefault();
        }
      }
      function stopBodyScrolling(bool) {
        if (bool === true) {
          window.addEventListener('touchmove', freeze, { passive: false });
        } else {
          window.removeEventListener('touchmove', freeze, { passive: false });
        }
      }
  
      $sidebarShow.on('click', function() {
        stopBodyScrolling(true); $pageRoot.addClass('show-sidebar');
      });
      $sidebarHide.on('click', function() {
        stopBodyScrolling(false); $pageRoot.removeClass('show-sidebar');
      });
    });
  })();
  