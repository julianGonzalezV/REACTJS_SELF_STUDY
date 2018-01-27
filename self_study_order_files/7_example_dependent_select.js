var Hello = React.createClass({

  getDefaultProps: function () {
  	return {
      fieldMap: {
        "1": [
          { value: "1.1", label: "1.1" },
          { value: "1.2", label: "1.2" }
        ],
        "2": [
          { value: "2.1", label: "2.1" },
          { value: "2.2", label: "2.2" }
        ]
      }
    }
  },
  
  getInitialState: function() {
     return {
         firstValue: '',
         secondValue: '',
         thirdValue: ''
     }
  },
  getOptions: function (key) {    
  	if (!this.props.fieldMap[key]) {
      return null;
    }
    
    return this.props.fieldMap[key].map(function (el, i) {
    	return <option key={i} value={el.value}>{el.label}</option>
    });
  },
  handleFirstLevelChange: function (event) {
    this.setState({
      firstValue: event.target.value,
      secondValue: '',
      thirdValue: ''
    });
  },
  handleSecondLevelChange: function (event) {
    this.setState({
    	secondValue: event.target.value,
      thirdValue: ''
    });
  },
  handleThirdLevelChange: function (event) {
      this.setState({
    	thirdValue: event.target.value
    });
  },
  getSecondLevelField: function () {
  	if (!this.state.firstValue) {
    	return null;
    }
    
    return (
    	<select onChange={this.handleSecondLevelChange} value={this.state.secondValue}>
       	<option value="">---</option>
      	{this.getOptions(this.state.firstValue)}
      </select>
    )
  },
  getThirdLevelField: function () {
  	if (!this.state.secondValue) {
	    return null;
    }
    
    return (
    	<input type="text" onChange={this.handleThirdLevelChange} value={this.state.thirdValue} />
    )
  },
  render: function() {
    return (
    <div>
    	<select onChange={this.handleFirstLevelChange} value={this.state.firstValue}>
      	<option value="">---</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      {this.getSecondLevelField()}
      {this.getThirdLevelField()}
    </div>
    );
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
