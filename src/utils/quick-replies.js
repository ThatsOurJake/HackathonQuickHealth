export default (basicText, replies = []) => ({
  text: basicText,
  quick_replies: replies.map((x) => ({
    content_type: 'text',
    title: x.title,
    payload: x.payload,
  })),
});
