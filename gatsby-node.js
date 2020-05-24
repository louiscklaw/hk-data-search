// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  // if (page.path.match(/^\/app/)) {
  if (page.path.match(/^\/zh\/app/)) {

    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/zh/app/*"

    // Update the page.
    createPage(page)

    console.log('findme')
  }
}
