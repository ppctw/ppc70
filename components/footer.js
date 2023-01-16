class Hello extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("footer", {
      class: "bg-black border-top border-dark"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container text-center small py-vh-2 border-top border-dark"
    }, "Copyright 2023 \xA9 Pingtung Peace Church. All rights reserved."));
  }
}

const root = ReactDOM.createRoot(document.getElementById('foot'));
root.render(React.createElement(Hello, {toWhat: 'Content'}, null));