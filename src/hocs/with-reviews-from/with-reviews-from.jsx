import React, {PureComponent} from "react";

const withReviewsFrom = (Component) => {
  class WithReviewsFrom extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: false,
        review: ``
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
    }

    handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.rating}
          review={this.review}
          onSubmit={this.handleFormSubmit}
          onChange={this.handleInputChange}
        />
      );
    }
  }

  return WithReviewsFrom;
};

export default withReviewsFrom;
