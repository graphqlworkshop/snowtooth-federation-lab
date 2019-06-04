const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "lifts", url: "http://localhost:4001" },
    { name: "trails", url: "http://localhost:4002" }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen(4000).then(({ url }) => {
    console.log(`🎿 Snowtooth Gateway available at ${url}`);
  });
})();
