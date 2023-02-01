import "antd/dist/antd.css";
import '../src/modules/styles/variables.css';
import '../src/modules/styles/scrollbar.css';
import '../src/modules/styles/antd.css';
import '../src/modules/styles/custom.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
}