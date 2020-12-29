// 5桁のrandom文字列生成
const randomString = Math.random()
  .toString(36)
  .replace(/[^a-z]+/g, '')
  .substr(0, 5);

export default randomString;
