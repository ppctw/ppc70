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
      href: "../index.html"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../assets/image/logo.png",
      class: "width-auto"
    })), /*#__PURE__*/React.createElement("ul", {
      class: "navbar-nav col-12 col-md-auto text-center mx-auto mb-2 mb-lg-0 list-group list-group-horizontal"
    }, /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "../index.html",
      "aria-label": "Homepage"
    }, "HOME")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link fs-5",
      href: "../aboutPPC.html",
      "aria-label": "Homepage"
    },"BACK"  )))));}
}

const root = ReactDOM.createRoot(document.getElementById('back'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));