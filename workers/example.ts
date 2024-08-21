self.addEventListener(
  'message',
  async () => {
    let result;

    try {
      result = useAbc().toUpperCase();
    } catch (e) {
      result = e.message;
    }

    self.postMessage(result);
  },
  false
);
