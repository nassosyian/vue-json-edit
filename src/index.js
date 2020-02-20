import JsonEditor from './JsonEditor.vue'
// import JsonView from './JsonView.vue'
// import ArrayView from './ArrayView.vue'
// import draggable from 'vuedraggable'
import PackageFile from '../package.json'

const VERSION = PackageFile.version

// export const install = (Vue) => {
//   if (install.installed) return

//   Vue.component('draggable', draggable)
//   Vue.component('JsonEditor', JsonEditor)
//   Vue.component('json-edit-view', JsonView)
//   Vue.component('json-edit-array-view', ArrayView)

// }

export default JsonEditor

export const components = {
  JsonEditor,
  VERSION
}