# Notes while developing

Notes: 



Prisma Authentication:
https://www.prisma.io/docs/reference/upgrade-guides/graphcool-to-prisma/authentication-and-authorization-yaeco6ieth



If I make the email Unique can I query by it???





type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  password: String
}



{
    "id": "cjgpqypztokva0b06qp5lnkl3",
    "name": "Ayumi Hamasaki",
    "email": "ayu@avex.com",
    "password": "ayukawa"
},
{
    "id": "cjgpqzz80ol0m0b06djjbs3fr",
    "name": "Asuka L. Soryu",
    "email": "asuka@nerv.net",
    "password": "eva1"
}






===[ Create user ]=======================
mutation{
  createUser(data: {
    name: "Asuka L. Soryu"
    email: "asuka@nerv.net"
    password: "eva1"
  }){
    id
    name
    email
    password
  }
}




===[ Qery by Email ]=======================
query{
  user(where: { email: "asuka@nerv.net" }){
    id
    name
    email
    password
  }
}