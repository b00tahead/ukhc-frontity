const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/ukhc/src/index.js</pre>
    </>
  );
};

export default {
  name: "ukhc",
  roots: {
    UKHC Theme: Root
  },
  state: {
    UKHC Theme: {}
  },
  actions: {
    UKHC Theme: {}
  }
};
