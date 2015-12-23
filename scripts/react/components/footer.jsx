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
        <div className="compat-pageWrapper">
          <div className="compat-page">
            <div className="compat-subPage"></div>
            <div className="compat-subPage"></div>
          </div>
        </div>
      
        <div className="compat-pageWrapper">
          <div className="compat-page">
            <div className="compat-subPage"></div>
            <div className="compat-subPage"></div>
          </div>
        </div>
      
        <div className="compat-pageWrapper">
          <div className="compat-page">
            <div className="compat-subPage"></div>
            <div className="compat-subPage"></div>
          </div>
        </div>

      </div>
      );
  }
});