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
              <div className="compat-siteTitle">
                <h3>Trouvez un partenaire de jeux en quelques clics</h3>
              </div>
        </div>
        <div className="compat-subPage">
      
          <div className="compat-CtaTitle">
              <h4>Je veux etre averti de la date de lancement</h4>
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
