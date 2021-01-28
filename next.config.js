import RLbaseServer from './functions/URLbaseServer';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${RLbaseServer}/api/:slug*`,
      },
    ];
  },
};
