const settings = {};

settings.default = {
  port: 8000,
  database: { uri: 'mongodb://localhost/amazonalert' },
};

module.exports = Object.assign({}, settings.default);

