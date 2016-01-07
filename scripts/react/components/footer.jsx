var Page = require('./compatPage.jsx');
var CTA = require('./CTA.jsx');
var Newsletter = CTA.newsletter;
var Facebook = CTA.facebook;

module.exports = React.createClass({
  render: function () {
    return (
      <div id='footer'>

        <Page id="footer-CTA" className="col4-2 col3-2">
          <Newsletter/>

        </Page>

        <Page id="footer-infos" className="col4-3 col3-2">

          <div id="footer-infos-wrapper">

            <div className="footer-infos-container">
              <h4>Liens</h4>
              <a href='/'>home</a><br/>
              <a href='/'>about</a><br/>
              <a href='/'>jobs</a><br/>
              <a href='/'>clients</a><br/>
              <a href='/'>accounts</a><br/>
            </div>

            <div className="footer-infos-container">
              <h4>Social</h4>
              <a href="https://www.facebook.com/scorebox42"
                style={{marginRight: "5px"}}
              >
                <img src={R('/images/facebook51.png')}/>
              </a>

              <a href="https://twitter.com/scorebox_cm">
                <img src={R('/images/twitter44.png')}/>
              </a>
            </div>

            <div className="footer-infos-container">
              <h4>Contact</h4>
              Adresse: <br/>
              Telephone: <br/>
              SIRET: <br/>
            </div>
          </div>
        </Page>
      </div>
      );
  }
});