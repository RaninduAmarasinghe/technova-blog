export const POSTS_QUERY = `
*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  author,
  slug
}
`;