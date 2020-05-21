
// use GraphQL type

export type Node = {
  fields: {
    tagKey: string
    slug: string
  }
  frontmatter: {
    path: string
    category: string
    tag: string
    title: string
    date: string
  }
  html: string
};

export type Edge = {
  node: Node
};

export type Edges = {
  edges: Edge[]
};

export type AllMarkdownRemark = {
  allMarkdownRemark: Edges
};

// sidebar width
export const drawerWidth = '180px';
