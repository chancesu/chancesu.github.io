const Action = (store) => {
    const state = store.state;
    return {
        setName(name) {
          state.title = name
        },
        setAuth(googleAuth) {
          state.auth = googleAuth;
          state.autnDrawKey = +new Date();
        }
    }
}

export default Action;