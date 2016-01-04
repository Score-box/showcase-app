var FeatureList = require('./components/feature.jsx');
var Banner = require('./components/banner.jsx');
var Menu = require('./components/menu.jsx');
var Footer = require('./components/footer.jsx');
var Summary = require('./components/SummaryTogglable.jsx');
var Cta = require('./components/Cta.jsx');
var FEATURES = require('./content/featuresContent.json');
var CATEGORIES = require('./content/categoriesList.json');


var AppClass = [
  'reactApp'
].join(' ');

var ScrollerClass = [

].join(' ');

var App = React.createClass({
  getInitialState: function () {
    var self = this;
    var pageList = [{
        name: 'Score Box',
        id: 'banner'
      }, {
        name: FEATURES[0].title,
        id: FEATURES[0].id
      }, {
        name: FEATURES[1].title,
        id: FEATURES[1].id
      }, {
        name: 'More',
        id: 'footer'
      }];
    var navList = pageList.map(function (page, index) {
      return function () {
        var _state = {
          currentPage: index,
          ctaTogglable : {
            visibility: (index === 0 || index === self.state.pageList.length - 1) ? true : false
          }
        }
        self.setState(
           _state
        )
      }
    })
    return {
      pageList: pageList,
      navList: navList,
      currentPage: 0,
      summaryTogglabe: {
        visibility: false
      },
    ctaTogglable : {
      visibility: true
    },
      menu: {}
    }
  },toggleCta: function () {
    this.setState({
      ctaTogglable: {
        visibility: (this.state.ctaTogglable.visibility) ? false : true
      }
    })
  },toggleSummary: function () {
    this.setState({
      summaryTogglabe: {
        visibility: (this.state.summaryTogglabe.visibility) ? false : true
      }
    })
  },changePage: function (page) {
    this.setState({
      currentPage: page
    })
  },navArray: function (){

  },navUp: function (){
    if (this.state.currentPage <= 0) {
      return null
    } else {
      return this.state.navList[this.state.currentPage - 1]
    }
  },navDown: function (){
    if (this.state.currentPage >= this.state.navList.length - 1) {
      return null
    } else {
      return this.state.navList[this.state.currentPage + 1]
    }
  },render:function () {
    return (
      <div className={AppClass}>
        <div className="compat-containerWrapper" id="banner">
          <div className="compat-container">
            <div className="compat-smallBanner">
              <div className="compat-pageWrapper">
                <Banner/>
              </div>
            </div>
              <div className="compat-pageWrapper">
                <Cta/>
              </div>
              <div className="compat-pageWrapper" id="compat-mockPageWrapper">
                <div className="compat-page">
                  <div className="compat-mockWrapper">
                    <img src="/images/mockup-test.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="compat-containerWrapper" id="content">
            <FeatureList features={FEATURES}/>
        </div>
        <div className="compat-containerWrapper" id="footer">
            <Footer/>
        </div>
    </div>
    );
  }
});

ReactDOM.render(
  <App/>, document.getElementById('react-content')
);