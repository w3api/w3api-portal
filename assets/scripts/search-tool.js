// Script/Components/Search
(function () {
    var SOURCES = window.TEXT_VARIABLES.sources;
    window.Lazyload.js(SOURCES.jquery, function() {
      // search panel
      var search = (window.search || (window.search = {}));
      var useDefaultSearchBox = window.useDefaultSearchBox === undefined ?
        true : window.useDefaultSearchBox ;
  
      var $searchModal = $('.js-page-search-modal');
      var $searchToggle = $('.js-search-toggle');
      var searchModal = $searchModal.modal({ onChange: handleModalChange, hideWhenWindowScroll: true });
      var modalVisible = false;
      search.searchModal = searchModal;
  
      var $searchBox = null;
      var $searchInput = null;
      var $searchClear = null;
  
      function getModalVisible() {
        return modalVisible;
      }
      search.getModalVisible = getModalVisible;
  
      function handleModalChange(visible) {
        modalVisible = visible;
        if (visible) {
          search.onShow && search.onShow();
          useDefaultSearchBox && $searchInput[0] && $searchInput[0].focus();
        } else {
          search.onShow && search.onHide();
          useDefaultSearchBox && $searchInput[0] && $searchInput[0].blur();
          setTimeout(function() {
            useDefaultSearchBox && ($searchInput.val(''), $searchBox.removeClass('not-empty'));
            search.clear && search.clear();
            window.pageAsideAffix && window.pageAsideAffix.refresh();
          }, 400);
        }
      }
  
      $searchToggle.on('click', function() {
        modalVisible ? searchModal.hide() : searchModal.show();
      });
      // Char Code: 83  S, 191 /
      $(window).on('keyup', function(e) {
        if (!modalVisible && !window.isFormElement(e.target || e.srcElement) && (e.which === 83 || e.which === 191)) {
          modalVisible || searchModal.show();
        }
      });
  
      if (useDefaultSearchBox) {
        $searchBox = $('.js-search-box');
        $searchInput = $searchBox.children('input');
        $searchClear = $searchBox.children('.js-icon-clear');
        search.getSearchInput = function() {
          return $searchInput.get(0);
        };
        search.getVal = function() {
          return $searchInput.val();
        };
        search.setVal = function(val) {
          $searchInput.val(val);
        };
  
        $searchInput.on('focus', function() {
          $(this).addClass('focus');
        });
        $searchInput.on('blur', function() {
          $(this).removeClass('focus');
        });
        $searchInput.on('input', window.throttle(function() {
          var val = $(this).val();
          if (val === '' || typeof val !== 'string') {
            search.clear && search.clear();
          } else {
            $searchBox.addClass('not-empty');
            search.onInputNotEmpty && search.onInputNotEmpty(val);
          }
        }, 400));
        $searchClear.on('click', function() {
          $searchInput.val(''); $searchBox.removeClass('not-empty');
          search.clear && search.clear();
        });
      }
    });
  })();

// Search
var SOURCES = window.TEXT_VARIABLES.sources;
var PAHTS = window.TEXT_VARIABLES.paths;
window.Lazyload.js([SOURCES.jquery, PAHTS.search_js], function() {
  var search = (window.search || (window.search = {}));
  var searchData = window.TEXT_SEARCH_DATA || {};

  function memorize(f) {
    var cache = {};
    return function () {
      var key = Array.prototype.join.call(arguments, ',');
      if (key in cache) return cache[key];
      else return cache[key] = f.apply(this, arguments);
    };
  }

  /// search
  function searchByQuery(query) {
    var i, j, key, keys, cur, _title, result = {};
    keys = Object.keys(searchData);
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      for (j = 0; j < searchData[key].length; j++) {
        cur = searchData[key][j], _title = cur.title;
        if ((result[key] === undefined || result[key] && result[key].length < 20 )
          && _title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          if (result[key] === undefined) {
            result[key] = [];
          }
          result[key].push(cur);
        }
      }
    }
    return result;
  }

  var renderHeader = memorize(function(header) {
    return $('<p class="search-result__header">' + header + '</p>');
  });

  var renderItem = function(index, title, url) {
    return $('<li class="search-result__item" data-index="' + index + '"><a class="button" href="' + url + '">' + title + '</a></li>');
  };

  function render(data) {
    if (!data) { return null; }
    var $root = $('<ul></ul>'), i, j, key, keys, cur, itemIndex = 0;
    keys = Object.keys(data);
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      $root.append(renderHeader(key));
      for (j = 0; j < data[key].length; j++) {
        cur = data[key][j];
        $root.append(renderItem(itemIndex++, cur.title, cur.url));
      }
    }
    return $root;
  }

  // search box
  var $result = $('.js-search-result'), $resultItems;
  var lastActiveIndex, activeIndex;

  function clear() {
    $result.html(null);
    $resultItems = $('.search-result__item'); activeIndex = 0;
  }
  function onInputNotEmpty(val) {
    $result.html(render(searchByQuery(val)));
    $resultItems = $('.search-result__item'); activeIndex = 0;
    $resultItems.eq(0).addClass('active');
  }

  search.clear = clear;
  search.onInputNotEmpty = onInputNotEmpty;

  function updateResultItems() {
    lastActiveIndex >= 0 && $resultItems.eq(lastActiveIndex).removeClass('active');
    activeIndex >= 0 && $resultItems.eq(activeIndex).addClass('active');
  }

  function moveActiveIndex(direction) {
    var itemsCount = $resultItems ? $resultItems.length : 0;
    if (itemsCount > 1) {
      lastActiveIndex = activeIndex;
      if (direction === 'up') {
        activeIndex = (activeIndex - 1 + itemsCount) % itemsCount;
      } else if (direction === 'down') {
        activeIndex = (activeIndex + 1 + itemsCount) % itemsCount;
      }
      updateResultItems();
    }
  }

  // Char Code: 13  Enter, 37  ⬅, 38  ⬆, 39  ➡, 40  ⬇
  $(window).on('keyup', function(e) {
    var modalVisible = search.getModalVisible && search.getModalVisible();
    if (modalVisible) {
      if (e.which === 38) {
        modalVisible && moveActiveIndex('up');
      } else if (e.which === 40) {
        modalVisible && moveActiveIndex('down');
      } else if (e.which === 13) {
        modalVisible && $resultItems && activeIndex >= 0 && $resultItems.eq(activeIndex).children('a')[0].click();
      }
    }
  });

  $result.on('mouseover', '.search-result__item > a', function() {
    var itemIndex = $(this).parent().data('index');
    itemIndex >= 0 && (lastActiveIndex = activeIndex, activeIndex = itemIndex, updateResultItems());
  });
});
