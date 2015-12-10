var CTAClass = [
  'cta-togglable'
].join(' ')

module.exports = React.createClass({
  render: function () {
    var visibility = this.props.visibility ? 'visible' : 'hidden'
    return (
      <div
        className={CTAClass}
        data-visibility={visibility}
        >
        <h3>Découvrez notre beta en avant première </h3>
        <form action="#" method="POST">
          <fieldset>
            <input type="email" id="email" placeholder="Email" required autofocus></input>
          </fieldset>
          <fieldset>
            <input type="submit"></input>
          </fieldset>
        </form>
      </div>
      );
  }
})
