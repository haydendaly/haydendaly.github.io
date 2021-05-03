"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.useCategories = exports.useWindowDimensions = exports.request = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/slicedToArray")
);

var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);

var _react = require("react");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

var request = function request(url) {
  var type =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var send = arguments.length > 2 ? arguments[2] : undefined;
  var body =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var defaultValue =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var format =
    arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "json";
  body = body
    ? {
        body: JSON.stringify(body),
      }
    : {};
  fetch(
    url,
    _objectSpread(
      {
        method: type,
      },
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
  )
    .then(function (res) {
      if (format === "json") {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then(function (response) {
      send(response);
    })
    ["catch"](function (err) {
      send(defaultValue);
    });
};

exports.request = request;

var getWindowDimensions = function getWindowDimensions() {
  var _window = window,
    width = _window.innerWidth,
    height = _window.innerHeight;
  return {
    width: width,
    height: height,
  };
};

var useWindowDimensions = function useWindowDimensions() {
  var _useState = (0, _react.useState)(getWindowDimensions()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    windowDimensions = _useState2[0],
    setWindowDimensions = _useState2[1];

  (0, _react.useEffect)(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowDimensions;
};

exports.useWindowDimensions = useWindowDimensions;

var useCategories = function useCategories() {
  var categories = [
    "Web",
    "Mobile",
    "Hackathons",
    "Backend",
    "DevOps",
    "ML/AI",
    "Hardware",
  ];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    chosen = _useState4[0],
    setChosen = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    all = _useState6[0],
    setAll = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    update = _useState8[0],
    setUpdate = _useState8[1];

  var categoryPick = function categoryPick(category) {
    var tempChosen = chosen;

    if (category === "All" && !all) {
      setAll(true);
      setChosen([]);
    } else if (tempChosen.includes(category)) {
      var filteredChosen = tempChosen.filter(function (o) {
        return o !== category;
      });

      if (filteredChosen.length > 0) {
        setChosen(filteredChosen);
      } else {
        setChosen([]);
        setAll(true);
      }
    } else if (category !== "All") {
      tempChosen.push(category);
      setChosen(tempChosen);
      setAll(false);
    }

    setUpdate(!update);
  };

  return {
    categories: categories,
    chosen: chosen,
    categoryPick: categoryPick,
    all: all,
    update: update,
  };
};

exports.useCategories = useCategories;
