// WE CAN USE THIS CLASS TO CREATE CUSTOM ERROR OBJECTS THAT CAN BE THROWN IN OUR ROUTES OR MIDDLEWARE. IT EXTENDS THE BUILT-IN ERROR CLASS AND ADDS ADDITIONAL PROPERTIES SUCH AS STATUS CODE, DATA, SUCCESS FLAG, AND AN ARRAY OF ERRORS. THIS MAKES IT EASY TO STANDARDIZE ERROR RESPONSES ACROSS OUR APPLICATION.
// WE DONT HAVE TO WRITE THIS IN EVERY FILE . WE WILL JUST IMPORT THIS CLASS AND USE IT TO CREATE ERROR OBJECTS WHENEVER WE NEED TO THROW AN ERROR.

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };