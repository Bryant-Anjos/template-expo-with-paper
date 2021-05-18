const { addDecorator } = require('@storybook/react')
const { withPropsTable } = require('storybook-addon-react-docgen')

addDecorator(withPropsTable)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
