var CTAClass = [
  'compat-Cta',
  'compat-page'
].join(' ')

module.exports = React.createClass({
  render: function () {
    var visibility = this.props.visible ? 'visible' : 'hidden'
    return (
      <div
        className={CTAClass}
        data-visibility={visibility}
        >
        <div className="compat-subPage">
          <div className="compat-fbContainer">
            <div className="fb-page" data-href="https://www.facebook.com/scorebox42/" data-tabs="timeline" data-width="300" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/scorebox42/"><a href="https://www.facebook.com/scorebox42/">Score Box</a></blockquote></div></div>
          </div>
        </div>
        <div className="compat-subPage">
      
          <div className="compat-CtaTitle">
              <h2>Je m'inscris à la newsletter </h2>
          </div>
     
          <div className="compat-formContainerWrapper">
            <div className="compat-formContainer">
              <form action="#" method="POST">
                <fieldset>
                <input type="email" id="email" placeholder="Email" required className="compat-input"></input>
                </fieldset>
                <fieldset>
                <input type="submit" className="compat-button"></input>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      );
  }
})
