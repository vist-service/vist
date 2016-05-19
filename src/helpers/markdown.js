import taskLists from 'markdown-it-task-lists'

const md = window.markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight(val, lang) {
    try {
      return hljs.highlight(lang, val).code
    } catch (e) {
      return hljs.highlightAuto(val).code
    }
  }
})

md.use(taskLists)

export default md