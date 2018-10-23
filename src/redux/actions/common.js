import * as type from './type'

export const changeTab = (tab, title) => dispatch => {
  dispatch ({
    type: type.CHANGE_TAB,
    tab: tab,
    title: title
  })
}

export const changeMenu = (menu,cb) => dispatch => {
  dispatch ({
    type: type.CHANGE_MENU,
    menu: menu
  })
  cb && cb(menu)
}
