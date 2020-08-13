import React from "react";

class TestComponent extends Component {
  state = {
    book: {},
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then((res) => this.setState({ book: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.book.title} by {this.state.book.author}
        </h1>
      </div>
    );
  }
}

export default TestComponent;
