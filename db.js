module.exports = () => {
  const photos = require("./mock/photos.json");
  const users = require("./mock/users.json");
  const tagList = require("./mock/tagList.json");
  var mockSourceArr = [photos, users, tagList];
  let mockData = {};
  mockSourceArr.forEach(function(item) {
    mockData = Object.assign(mockData, item);
  });
  return mockData;
};
