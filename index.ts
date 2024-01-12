const server = Bun.serve({
  port: 4000,
  fetch(req) {
    return new Response();
  },
});

console.log(`Listing port is http://localhost:${server.port}`);
