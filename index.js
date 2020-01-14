// we need to pull server in here!!!
const server = require('./server')

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
