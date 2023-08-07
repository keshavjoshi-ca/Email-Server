export const Logger = (req, res, next) => {
  console.info(`[EmailServer] ${req.method} ${req.url}`);
  next();
};
