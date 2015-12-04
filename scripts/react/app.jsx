var FeatureList = require('./components/feature.jsx');
var Banner = require('./components/banner.jsx');
var Menu = require('./components/menu.jsx');
var Footer = require('./components/footer.jsx');
var Summary = require('./components/SummaryTogglable.jsx');

var FEATURES = [
  {
    img: {
      src: '/images/ping_pong.png',
      alt:'Ping Pong'
    },
    title: 'Partagez vos plus belles victoires !',
    text: 'Ajoutez une photo, commentez votre match et partagez le sur vos réseaux sociaux préférés.'
  },{
    img: {
      src:'/images/ping_pong.png',
      alt:'Ping Pong'
    },
    title:'Géolocalisez vos adversaires !',
    text:'Trouvez un terrain, des groupes actifs, ou recherchez simplement votre adversaire du lendemain, la géolocalisation vous permet de trouver vos futurs adversaires en un clic !'
  }
];

var currentPage = 0;

var ANCHORS = [
  {
    name: 'Score Box'
  },{
    name: FEATURES[0].title
  },{
    name: FEATURES[1].title
  },{
    name: 'More'
  }
];

var App = React.createClass({render:function () {
  return (
    <div className='reactApp'>
      <Menu/>
      <Summary anchors={ANCHORS} currentPage={currentPage} visible={true}/>
      <Banner/>
      <FeatureList features={FEATURES}/>
      <Footer/>
    </div>
  );
}});

ReactDOM.render(
  <App/>, document.getElementById('react-content')
);