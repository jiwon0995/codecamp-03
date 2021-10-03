import { createConnection } from 'typeorm'
import { ApolloServer,gql } from 'apollo-server'
import Board from './Board.postgres'

//타입지정
const typeDefs = gql`
  input CreateBoardInput {
    writer:String
    title:String
    age:Int
  }
  type Return {
    message: String
    number: Int
  }
  type Board {
    writer: String
    age: Int
    title: String
    number: Int
  }
  type Query {
    fetchBoard: Board
    fetchBoards: [Board]
  }
  type Mutation {
    # 주석입니다 createBoard(writer:String, title:String, age:Int): Return
    createBoard(createBoardInput: CreateBoardInput!): Return
    updateBoard: Return
    deleteBoard: Return
  }
`
//실행되는 함수
const resolvers = {
  Query: {
    fetchBoard: async() => { 
      const result = await Board.findOne({ where: { number: 1, deletedAt:null } })
      
      //데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
      return {
        age: result?.age,
        title: result?.title,
        result: result?.writer
      }
    },
    fetchBoards: async() => { 
      const result = await Board.find({ where: {deletedAt:null}})
      return result
    }
  },
  Mutation: {
    createBoard: async(_:any,args:any) => { 
      //데이터베이스 데이터 입력하기
      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // })
      const result = await Board.insert({
        //스프레드 연산자 사용하기
        ...args.createBoardInput
        //스프레드 연산자 사용하지 않고 직접 입력하기
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      })
      console.log(result)
      
      return {message: "성공했습니다", number:result.identifiers[0].number}
    },
    updateBoard: async(_:any,args:any) => { 
      await Board.update({ number: 1 }, { writer: "영희" })
      return {message:"수정완료!"}
    },
    deleteBoard: async () => { 
      // await Board.delete({ number:2 })
      await Board.update({ number: 2 }, {deletedAt: new Date})
      return {message:"삭제완료!"}
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
})
//데이터베이스 연결 정보
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5020,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => { 
  //연결성공시 실행
  console.log("접속완료!!!")
  server.listen({port: 4000})
})
  .catch((error) => { console.log(error) })