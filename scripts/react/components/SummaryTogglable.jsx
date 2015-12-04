module.exports = React.createClass({
	render: function () {
		var currentPage = this.props.currentPage 
		var anchors = this.props.anchors.map( function(anchor, index) {
			if (index == currentPage) {
				return ( 
					<li className='current-anchor anchor' key={index}>
						<b>{anchor.name}</b>
					</li>
				);
			} else {
				return (
					<li className='anchor' key={index}>
						{anchor.name}
					</li>
				);
			}

		})
		var style = {}
		style.visibility = this.props.visible ? 'visible' : 'hidden'
		return (
			<ul className='summary-togglable' style={style}>{anchors}</ul>
			);
	}
})
