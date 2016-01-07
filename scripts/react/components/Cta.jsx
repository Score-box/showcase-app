module.exports = {
  newsletter : React.createClass({
    render: function () {
      return (
        <div id="compat-newsletterForm-wrapper">
          <p>Inscrivez vous à la newsletter</p>
          <div id="compat-newsletterForm-container">
            <form
              action="http://newsletter.scorebox.fr/"
              method="POST"
              target="_blank"
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="compat-input"
              ></input>
              <input
                type="submit"
                className="compat-button"
              ></input>
              <input
                type="checkbox"
                required
              ></input>
              <p>Jaccepte de recevoir des informations sur scorebox</p>
            </form>
          </div>
        </div>
      );
    }
  }),
  facebook: React.createClass({
    render: function () {
      return (
        <div className="compat-fbContainer">
          <p>Suivez nous sur facebook</p>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/scorebox42/"
            data-width="300"
            data-height="200"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="true"
            data-show-facepile="false">
            <div className="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/scorebox42/">
                <a href="https://www.facebook.com/scorebox42/">Score Box</a>
              </blockquote>
            </div>
          </div>
        </div>
      );
    }
  })
}