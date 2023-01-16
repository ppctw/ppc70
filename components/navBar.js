class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("nav", {
      id: "navScroll",
      class: "row d-flex  navbar navbar-dark bg-black  px-vw-5",
      tabindex: "0"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container"
    }, /*#__PURE__*/React.createElement("a", {
      class: "navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center",
      href: "index.html" //LOGO
    }, /*#__PURE__*/React.createElement("img", {
      src: "./assets/image/logo.png",
      class: "width-auto"
    })), /*#__PURE__*/React.createElement("ul", {
      class: "navbar-nav col-12 col-md-auto text-center mx-auto mb-2 mb-lg-0 list-group list-group-horizontal"
    }, /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "index.html", //首頁
      "aria-label": "Homepage"
    }, "HOME")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "aboutPPC.html", //關於
      "aria-label": "Homepage"
    }, "\u8A8D\u8B58\u548C\u5E73\u6559\u6703")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "tenYears.html", //關鍵十年
      "aria-label": "A sample content page"
    }, "2012-2022\u95DC\u9375\u5341\u5E74")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "ppcCulture.html",//文化
      "aria-label": "A system message page"
    }, "PPC\u8207\u6587\u5316")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "news.html",//報導
      "aria-label": "A system message page"
    }, "\u7279\u5225\u5831\u5C0E")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "mv.html",//MV
      "aria-label": "A system message page"
    }, "\u76F4\u5230\u5730\u6975\uFF0D\u6B4C\u66F2MV")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "feature.html",
      "aria-label": "A system message page"
    },"\u95DC\u65BC\u672A\u4F86...")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "agape.html",
      "aria-label": "A system message page"
    }, "\u611B\u5496\u5561Agape")))));}
}

const root = ReactDOM.createRoot(document.getElementById('navbar'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));