const typeDefs = `#graphql
  type Folder {
    name: String!,
    id: String,
    createdAt: String,
    author: Author,
    notes: [Note]
  }

  type Author {
    uid: String,
    name: String
  }

  type Note {
    id: String!,
    content: String
  }

  type Query {
    folders: [Folder],
    folder(folderId: String!): Folder,
    note(noteId: String): Note,
  }
  type Mutation {
    addFolder(name: String!): Folder,
    register(uid: String!,name: String!): Author,

  }
`;

export default typeDefs;