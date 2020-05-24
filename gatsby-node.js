// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  let langs = ['zh']

  langs.forEach( lang => {
    var test = new RegExp(`^/${lang}/api_details`)

    // Only update the `/app` page.
    // if (page.path.match(/^\/app/)) {
    if (page.path.match(test)) {

      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = `/${lang}/api_details/*`

      // Update the page.
      createPage(page)

      console.log(`creating page for ${lang}`)
    }

  })

}
