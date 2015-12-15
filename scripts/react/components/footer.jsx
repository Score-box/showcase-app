var FooterClass = [
  'compat-footer',
  'compat-container'
].join(' ')

module.exports = React.createClass({
  render: function () {
    return (
      <div
        id='footer'
        className={FooterClass}
      >
        <div className="compat-page"></div>
        <div className="compat-page"></div>
        <div className="compat-page"></div>
      </div>
      );
  }
});