export const badRequest = (message?: string) => {
  return {
    success: false,
    statusCode: 400,
    message: [],
    error: [{ error: message ? message : "Invalid or missing parameter." }],
  };
};

export const notFound = (message?: string) => {
  return {
    success: false,
    statusCode: 404,
    message: [],
    error: [{ error: message ? message : "Not found, is not registered." }],
  };
};

export const internalServerError = () => {
  return {
    success: false,
    statusCode: 500,
    message: [],
    error: [
      {
        error: "Server problems, please try again later.",
      },
    ],
  };
};

export const unauthorized = () => {
  return {
    success: false,
    statusCode: 401,
    message: [],
    error: [
      {
        error: "Authorization has been refused for those credentials",
      },
    ],
  };
};
