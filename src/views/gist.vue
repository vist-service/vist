<style>
  .gist-meta {
    font-size: 12px;
    margin-top: 5px;
  }
  .gist-extra-metas {
    margin-top: 10px;
  }
  .gist-extra-meta {
    margin-top: 5px;
    font-size: 12px;
    color: #999;
    & i {
      margin-right: 5px;
    }
  }
</style>

<template>
  <div class="view-gist">
    <div class="container">
      <div class="wrap" v-if="loading">
        <div class="single-box">
          <i class="fa fa-spinner fa-pulse fa-fw"></i>
        </div>
      </div>
      <div class="wrap" v-else>
        <div class="sidebar">
          <div class="sidebar-heading">
            <h2>
              <i v-if="!gist.description" class="fa fa-frown-o"></i>
              {{ gist.description || 'No description' }}
            </h2>
          </div>
          <div class="sidebar-box">
            <div class="gist-list">
              <div
                class="gist-item"
                @click="activate(name)"
                :class="{active: active === name}"
                v-for="(name, file) in gist.files">
                <div class="gist-title">
                  <i :class="getFileIcon(file)"></i>
                  {{ name }}
                </div>
                <div class="gist-meta" v-show="active === name">
                  <span class="gist-size">
                    <i class="fa fa-bar-chart-o"></i>
                    {{ humanlizedSize(file.size) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar-heading"></div>
          <div class="sidebar-box gist-extra-metas">
            <div class="gist-extra-meta">
              <i class="fa fa-calendar-o"></i> Created at <timeago :since="gist.created_at"></timeago>
            </div>
            <div class="gist-extra-meta">
              <i class="fa fa-clock-o"></i> Updated at <timeago :since="gist.updated_at"></timeago>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="file-content box inner" v-if="activeContent && !loadingContent">
            <pre v-if="lang !== 'markdown'"><code :id="active" :class="lang">{{{ highlight(activeContent).value }}}</code></pre>
            <div class="markdown-body" v-else>
              {{{ markdown(activeContent) }}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import filesize from 'filesize'
  import {api} from 'utils'
  import md from 'helpers/markdown'

  export default {
    data() {
      return {
        loading: false,
        gist: null,
        active: '',
        files: {}
      }
    },
    created() {
      this.fetchGist()
    },
    computed: {
      activeContent() {
        return this.files[this.active]
      },
      lang() {
        const lang = this.gist.files[this.active].language
        return lang ? lang.toLowerCase() : 'text'
      }
    },
    methods: {
      async fetchGist() {
        this.loading = true
        const res = await api.get(`/gists/${this.$route.params.id}`)
        this.loading = false
        this.gist = res.data
        this.activate(Object.keys(res.data.files)[0])
      },
      getFileIcon(file) {
        if (!file.language || file.language === 'Markdown' || file.language === 'Text') {
          return 'octicon octicon-markdown'
        }
        return 'octicon octicon-file-code'
      },
      activate(filename) {
        this.active = filename
        document.title = filename
        if (this.files[filename]) {
          return
        }
        const content = this.gist.files[filename].content
        this.files = {
          ...this.files,
          [filename]: content
        }
      },
      highlight(val) {
        try {
          return hljs.highlight(this.lang, val)
        } catch (e) {
          return hljs.highlightAuto(val)
        }
      },
      markdown(val) {
        return md.render(val)
      },
      humanlizedSize(val) {
        return filesize(val)
      }
    }
  }
</script>
