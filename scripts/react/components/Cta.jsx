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
      <div className="sub-page">
            <h3>Découvrez notre beta en avant première </h3>
      </div>
      <div className="sub-page">
        <form action="#" method="POST">
          <fieldset>
          <input type="email" id="email" placeholder="Email" required autofocus></input>
          </fieldset>
          <fieldset>
          <input type="submit"></input>
          </fieldset>
        </form>
      </div>
      </div>
      );
  }
})
