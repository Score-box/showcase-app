var FooterClass = [
  'compat-footer'
].join(' ')

module.exports = React.createClass({
  render: function () {
    return (
      <div
        id='footer'
        className={FooterClass}
      >
        Footer
      </div>
      );
  }
});