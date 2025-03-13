// next.config.js

module.exports = {
    async redirects() {
      return [
        {
          source: "/old-route", // URL yang ingin di-redirect
          destination: "/new-route", // URL tujuan
          permanent: false, // true untuk redireksi permanen (301), false untuk sementara (307)
        },
        {
          source: "/dashboard",
          destination: "/login",
          permanent: false,
        },
      ];
    },
  };
  