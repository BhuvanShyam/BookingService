const { BookingService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    return res.status(StatusCodes.OK).json({
      message: "Successfully completed booking",
      success: true,
      data: response,
      err: {},
    });
  } catch (error) {
    // Handle errors with proper status code
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({
      message: error.message || 'Internal Server Error',
      success: false,
      err: error.explanation || {},
      data: {},
    });
  }
};

module.exports = {
  create,
};
