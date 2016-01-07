var Features = require('./features2.jsx');
var Banner = require('./banner.jsx');
/*var Menu = require('./menu.jsx');
*/var Footer = require('./footer.jsx');
/*var Summary = require('./SummaryTogglable.jsx');
var Cta = require('./Cta.jsx');*/
var Container = require('./compatContainer.jsx');
var FEATURES = require('../content/features.js');


var AppClass = [
  'reactApp'
].join(' ');

/*var ScrollerClass = [

].join(' ');*/

var App = React.createClass({
  /*getInitialState: function () {
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
  },*/render:function () {
    return (
      <div className={AppClass}>
        <Container id="banner"><Banner/></Container>
        <Features features={FEATURES}/>
        <Container id="footer"><Footer/></Container>
      </div>
    );
  }
});

module.exports=App;