module.exports = () => {
  const data = { users: [] };
  // Create 1000 users
  for (let i = 1; i <= 100; i++) {
    data.users.push({ id: i, name: `user${i}` });
  }
  return data;
}