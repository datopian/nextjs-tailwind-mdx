import gfm from 'remark-gfm'
import toc from 'remark-toc'
import slug from 'remark-slug'
import smartypants from '@silvenon/remark-smartypants'

import withMDXImp from '@next/mdx'

const withMDX = withMDXImp({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm, toc, slug, smartypants],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})
export default withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
