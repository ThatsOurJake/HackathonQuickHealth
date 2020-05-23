export default (url) => ({
  attachment: {
    type: 'image',
    payload: {
      url,
      is_reusable: true,
    },
  },
});
