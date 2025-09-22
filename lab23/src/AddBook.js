import { Component } from "react";
import classnames from "classnames";

class AddBook extends Component {
  state = {
    bookId: "",
    bookName: "",
    author: "",
    price: "",
    pub: "",
    myerrors: {},
  };

  mychangeHandler = (myevent) => {
    myevent.preventDefault();
    console.log("mychangeHandler");
    console.log(myevent.target.value);
    this.setState({
      [myevent.target.name]: myevent.target.value,
    });
  };

  mySubmitHandler = (myevent) => {
    myevent.preventDefault();
    console.log("mySubmitHandler");
    //1.Do the Validations
    if (this.validateBookForm()) {
      //2. make API calls
      console.log("Before Reset ", this.state);
      //3. Reset the Form
      this.setState({
        bookId: "",
        bookName: "",
        author: "",
        price: "",
        pub: "",
        myerrors: {},
      });
      console.log("After Reset", this.state);
    }
  };

  validateBookForm() {
    console.log("validateBookForm");
    const { bookId, bookName, author, price, pub } = this.state;
    let isValid = true;
    let errors = {}; //store errors temporarily

    //do the validations
    if (bookId === null || bookId === 0) {
      isValid = false;
      errors["mybookId"] = "Book ID is Required";
    } else if (bookId.length <= 4) {
      isValid = false;
      errors["mybookId"] = "Book Id minimum length is 5";
    } else if (bookId.length >= 8) {
      isValid = false;
      errors["mybookId"] = "Book Id maximum length is 7 ";
    }

    if (bookName === null || bookName === 0) {
      isValid = false;
      errors["mybookName"] = "BookName is Required"; //
    } else if (bookName.length <= 5) {
      isValid = false;
      errors["mybookName"] = "BookName minlength is 5"; //
    } else if (bookName.length >= 11) {
      isValid = false;
      errors["mybookName"] = "BookName maxlength is 7"; //
    }

    if (author === null || author === 0) {
      isValid = false;
      errors["myauthor"] = "Author is Required"; //
    } else if (author.length <= 5) {
      isValid = false;
      errors["myauthor"] = "Author minlength is 5"; //
    } else if (author.length >= 11) {
      isValid = false;
      errors["myauthor"] = "Author maxlength is 7"; //
    }

    if (price === null || price === 0) {
      errors["myprice"] = "Price is Required";
    }

    if (pub === null || pub === 0) {
      errors["mypub"] = "Publication is Required";
    }
    this.setState({
      myerrors: errors,
    });

    return isValid;
  }

  render() {
    const { bookId, bookName, author, price, pub } = this.state;

    return (
      <div className="container col-md-6">
        <h2 className="text-center">AddBook Form</h2>
        <form onSubmit={this.mySubmitHandler}>
          <div className="form-group">
            <label htmlFor="bookId">Book Id</label>
            <input
              type="text"
              name="bookId"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.state.myerrors.bookId,
                "is-valid": !this.state.myerrors.bookId,
              })}
              placeholder="Enter Book Id..."
              value={bookId}
              onChange={this.mychangeHandler}
            />
            <div className="text-danger">{this.state.myerrors.mybookId}</div>
          </div>

          <div className="form-group">
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              name="bookName"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.state.myerrors.bookName,
                "is-valid": !this.state.myerrors.bookName,
              })}
              placeholder="Enter Book Name..."
              value={bookName}
              onChange={this.mychangeHandler}
            />
            <div className="text-danger">{this.state.myerrors.mybookName}</div>
          </div>

          <div className="form-group">
            <label htmlFor="author"> Author </label>
            <input
              type="text"
              name="author"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.state.myerrors.myauthor,
                "is-valid": !this.state.myerrors.myauthor,
              })}
              placeholder="Enter Author..."
              value={author}
              onChange={this.mychangeHandler}
            />
            <div className="text-danger">{this.state.myerrors.myauthor}</div>
          </div>

          <div className="form-group">
            <label htmlFor="price"> Price </label>
            <input
              type="text"
              name="price"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.state.myerrors.myprice,
                "is-valid": !this.state.myerrors.myprice,
              })}
              placeholder="Enter Price..."
              value={price}
              onChange={this.mychangeHandler}
            />
            <div className="text-danger">{this.state.myerrors.myprice}</div>
          </div>

          <div className="form-group">
            <label htmlFor="pub"> Publiccations </label>
            <input
              type="text"
              name="pub"
              className={classnames("form-control form-control-lg", {
                "is-invalid": this.state.myerrors.mypub,
                "is-valid": !this.state.myerrors.mypub,
              })}
              placeholder="Enter Pub..."
              value={pub}
              onChange={this.mychangeHandler}
            />
            <div className="text-danger">{this.state.myerrors.mypub}</div>
          </div>

          <input
            type="submit"
            value="Add Book"
            className="btn btn-primary btn-lg"
          />
        </form>
      </div>
    );
  }
}

export default AddBook;
