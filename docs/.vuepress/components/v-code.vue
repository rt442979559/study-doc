<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div style="padding: 24px">
      <component
        :is="componentName"
        v-if="componentName"
        :quote="quote"
        v-bind="$attrs"
      />
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="sourceCode">
        <slot name="sourceCode"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <div class="text-slide-block">
          <el-space>
            <el-icon size="14" v-show="!isExpanded"><CaretBottom /></el-icon>
            <el-icon size="14" v-show="isExpanded"><CaretTop /></el-icon>
            <span v-show="hovering">{{ controlText }}</span>
          </el-space>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { CaretBottom, CaretTop } from '@element-plus/icons-vue'
export default {
  components: { CaretBottom, CaretTop },
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,
      langConfig: {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
      },
    }
  },

  props: ['componentName', 'quote'],

  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    },
  },

  computed: {
    lang() {
      return this.$route.path.split('/')[1]
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.value.path
        .split('/')
        .pop()}`
    },

    // iconClass() {
    //   return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
    // },

    controlText() {
      return this.isExpanded
        ? this.langConfig['hide-text']
        : this.langConfig['show-text']
    },

    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return (
          this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('sourceCode')[0].clientHeight +
          20
        )
      }
      return this.$el.getElementsByClassName('sourceCode')[0].clientHeight
    },
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          '.page-component__scroll > .el-scrollbar__wrap'
        )
        this.scrollParent &&
          this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    },
  },

  mounted() {
    this.$nextTick(() => {
      let sourceCode = this.$el.getElementsByClassName('sourceCode')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        sourceCode.style.width = '100%'
        sourceCode.borderRight = 'none'
      }
    })
  },

  beforeDestroy() {
    this.removeScrollHandler()
  },
}
</script>

<style lang="scss">
.demo-block {
  margin-top: 1rem;
  border: solid 1px #ebebeb;
  transition: 0.2s;
  margin-bottom: 1.5rem;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    line-height: 2.52;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    // background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    // border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      // border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .sourceCode {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      line-height: 1.8;
      color: black;

      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: transparent;
    // border-bottom-left-radius: 4px;
    // border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;

      &.hovering {
        transition: 0.3s;
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      transition: 0.3s;
      color: #409eff;
      // background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
    .text-slide-block {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        path {
          font-size: 12px;
        }
      }
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}

div[class*='language-'].line-numbers-mode::after {
  height: calc(100% - 1px);
}
div[class*='language-'].line-numbers-mode pre {
  margin-top: 0;
  margin-bottom: 0;
}
pre[class*='language-'] code {
  font-size: 14px !important;
  line-height: 1.4 !important;
}
</style>
