var Page = React.createClass({
  render: function () {
    var wrapperClassName = "compat-page-wrapper";
    if (this.props.className) {
      wrapperClassName += " " + this.props.className;
    }
    var index = 0;
    var id = this.props.id;
    return (
      <div className={wrapperClassName} id={"compat-page-wrapper-" + this.props.id}>
        <div className="compat-page" id={"compat-page-" + this.props.id}>
          {
            
            React.Children.map(this.props.children, function(child) {
              return (
                <div
                  className="compat-sub-page"
                  id={"compat-sub-page-" + id + "-" + index++}
                >
                  {child}
                </div>
                );
            })
          }
        </div>
      </div>
    );
  }
});
module.exports=Page;