export const success = (message?: string) => {
  return {
    success: true,
    statusCode: 200,
    message: message,
    error: [],
  };
};
