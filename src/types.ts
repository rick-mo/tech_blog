
export type Node = {
  fields: {
    category: string,
    slug: string
  },
  frontmatter: {
    title: string,
    date: string,
  },
  html: string
}

export type Edge = {
  node: Node
}

export type Edges = {
  edges: Array<Edge>
}

export type AllMarkdownRemark = {
  allMarkdownRemark: Edges
}

export type Item = {
  slug: string,
  title: string
}

export type Menu = {
  category: string,
  items: Item[]
}
