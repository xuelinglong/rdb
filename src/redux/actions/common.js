import * as type from './type'

export const changeTitle = (title)=> {
  return {
    type: type.CHANGE_TITLE,
    title
  }
}
