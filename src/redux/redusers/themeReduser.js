const themeReduser = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return !state;
        default:
            return state;
    }
}

export default themeReduser;