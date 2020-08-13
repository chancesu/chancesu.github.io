const Action = (store) => {
    const state = store.state;
    return {
        setName(name) {
            state.title = name
        }
    }
}

export default Action;