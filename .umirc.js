export default {
  routes: [
    {
      path: '/',
      component: './index',
    },
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
  ],
};

