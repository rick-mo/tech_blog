import { Edges, CategoryList } from "../types";

export const getCategoryList = ({ edges }: Edges): CategoryList => {
  const categoryList = edges.reduce<CategoryList>((acc, { node }) => {
    if (!acc[node.frontmatter.category]) 
      acc[node.frontmatter.category] = {}
    
    acc[node.frontmatter.category][node.fields.tagKey] = node.frontmatter.tag;
    return acc;
  }, {});
  return categoryList;
};
