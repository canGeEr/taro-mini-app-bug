export default definePageConfig({
  navigationBarTitleText: '首页',
  usingComponents: {
    'custom-header': "./../page-one/components/header/index",
    'custom-source': "../../components/custom-source",
    'bridge-parse': "../../components/bridge-parse"
  },
  componentPlaceholder: {
    'custom-header': "view"
  }
})
