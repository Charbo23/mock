module.exports = () => {
  const photos = require("./mock/photos.json");
  const users = require("./mock/users.json");
  const tagList = require("./mock/tagList.json");
  const tagInfo = require("./mock/tagInfo.json");

  var mockSourceArr = [photos, users, tagList,tagInfo];
  let mockData = {};
  mockSourceArr.forEach(function(item) {
    mockData = Object.assign(mockData, item);
  });
  return mockData;
};
