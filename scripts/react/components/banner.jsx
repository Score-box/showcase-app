var Page = require('./compatPage.jsx');
var CTA = require('./CTA.jsx');
var Newsletter = CTA.newsletter;
var Facebook = CTA.facebook;

module.exports = React.createClass({render: function () {
  return (
    <div id="banner">
      <Page id="title" className="col4-3">
        <div className="compat-siteTitle">
            <h1>SCORE BOX</h1>
            <h3>Lapp qui met tous vos scores dans votre poche</h3>
        </div>
        <Facebook></Facebook>
      </Page>
      <Page id="CTA" className="col4-3">
        <div id="compat-logo-wrapper">
          <img src={R("/images/path4264-3-7.png")}/>
        </div>
        <Newsletter></Newsletter>
      </Page>
      <Page id="mock" className="col4-3">
        <div id="compat-mock-wrapper">
          <img src={R("/images/mockup-test.png")}/>
        </div>
      </Page>
    </div>
  );
}});