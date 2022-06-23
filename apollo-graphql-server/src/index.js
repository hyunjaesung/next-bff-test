import { ApolloServer, gql } from 'apollo-server';
import { RESTDataSource } from 'apollo-datasource-rest';

class TestAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:5000';
    }

    async getMember() {
        return this.get('member');
    }

    async getPoint() {
        return this.get('point');
    }

    async getBook() {
        return this.get('book');
    }

    async getCoupon() {
        return this.get('coupon');
    }
}

const typeDefs = gql`
  type Member{
    id: Int!
    name: String!
  }
  type Point{
    total: Int!
    hotelOnly: Int!
  }
  type BookItem{
    today: [String]
    total: [String]
  }
  type Book{
    hotel: BookItem
    restaurant: BookItem
  }
  type Coupon{
    total: Int!
    all: [String]
  }
  type Query{
    member: Member
    coupon: Coupon
    book: Book
    point: Point
  }
`;

const resolvers = {
    Query: {
        member: (root, args, { dataSources }) => dataSources.testApi.getMember(),
        coupon: (root, args, { dataSources }) => dataSources.testApi.getCoupon(),
        book: (root, args, { dataSources }) => dataSources.testApi.getBook(),
        point: (root, args, { dataSources }) => dataSources.testApi.getPoint(),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        testApi: new TestAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
