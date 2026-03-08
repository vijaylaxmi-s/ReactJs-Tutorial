import { Component } from "react";
import MyTextInput from "../mycomponents/MyTextInput";

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

    if (!price || price.trim() === "") {
      isValid = false;
      errors["myprice"] = "Price is Required";
    } else if (isNaN(price)) {
      isValid = false;
      errors["myprice"] = "Price must be a number";
    } else if (Number(price) <= 0) {
      isValid = false;
      errors["myprice"] = "Price must be greater than 0";
    }

    if (!pub || pub.trim() === "") {
      isValid = false;
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
          <MyTextInput
            mytype="text"
            myname="bookId"
            mylable="Book Id"
            myplaceholder="Enter the Book Id"
            myvalue={bookId}
            myonChange={this.mychangeHandler}
            myerror={this.state.myerrors.mybookId}
          />

          <MyTextInput
            mytype="text"
            myname="bookName"
            mylable="Book Name"
            myplaceholder="Enter Book Name..."
            myvalue={bookName}
            myonChange={this.mychangeHandler}
            myerror={this.state.myerrors.mybookName}
          />

          <MyTextInput
            mytype="text"
            myname="author"
            mylable="Author"
            myplaceholder="Enter Author..."
            myvalue={author}
            myonChange={this.mychangeHandler}
            myerror={this.state.myerrors.myauthor}
          />

          <MyTextInput
            mytype="text"
            myname="price"
            mylable="Price"
            myplaceholder="Enter Price..."
            myvalue={price}
            myonChange={this.mychangeHandler}
            myerror={this.state.myerrors.myprice}
          />

          <MyTextInput
            mytype="text"
            myname="pub"
            mylable="Publications"
            myplaceholder="Enter Pub..."
            myvalue={pub}
            myonChange={this.mychangeHandler}
            myerror={this.state.myerrors.mypub}
          />

          <br />
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
