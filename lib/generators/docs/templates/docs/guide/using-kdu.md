# Using Kdu in Markdown

## Browser API Access Restrictions

Because KduPress applications are server-rendered in Node.js when generating static builds, any Kdu usage must conform to the universal code requirements. In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

##
