
// WE CAN USE THIS FUNCTION TO HANDLE ASYNC ERRORS IN OUR ROUTES. IT TAKES A REQUEST HANDLER FUNCTION AS AN ARGUMENT AND RETURNS A NEW FUNCTION THAT WRAPS THE ORIGINAL HANDLER IN A PROMISE. IF THE PROMISE REJECTS, IT CALLS THE NEXT FUNCTION WITH THE ERROR, ALLOWING EXPRESS TO HANDLE IT.

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise
      .resolve(requestHandler(req, res, next))
      .catch(next);
  };
};

export { asyncHandler };