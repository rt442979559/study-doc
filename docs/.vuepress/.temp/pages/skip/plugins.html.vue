<template><div><h1 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h1>
<h2 id="截图-v3" tabindex="-1"><a class="header-anchor" href="#截图-v3" aria-hidden="true">#</a> 截图 v3</h2>
<blockquote>
<p><a href="https://www.npmjs.com/package/vue-web-screen-shot" target="_blank" rel="noopener noreferrer">web 端自定义截屏插件<ExternalLinkIcon/></a>，仅支持 Vue3。如需在 vue2 使用请移步 ：<a href="https://www.npmjs.com/package/js-web-screen-shot" target="_blank" rel="noopener noreferrer">js-web-screen-shot<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-web-screen-shot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 导入截屏插件</span>
<span class="token keyword">import</span> screenShort <span class="token keyword">from</span> <span class="token string">'vue-web-screen-shot'</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">// 使用截屏插件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>screenShort<span class="token punctuation">,</span> <span class="token punctuation">{</span> enableWebRtc<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> screenshotStatus <span class="token operator">=</span> ref<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token comment">// 销毁组件函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">destroyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">status</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  screenshotStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> status
<span class="token punctuation">}</span>
<span class="token comment">// 获取裁剪区域图片信息</span>
<span class="token keyword">const</span> <span class="token function-variable function">getImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">base64</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'截图组件传递的图片信息'</span><span class="token punctuation">,</span> base64<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--截图组件--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>screen-short</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screenshotStatus<span class="token punctuation">"</span></span>
    <span class="token attr-name">@destroy-component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>destroyComponent<span class="token punctuation">"</span></span>
    <span class="token attr-name">@get-image-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getImg<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>screen-short</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>screenshotStatus</td>
<td>boolean</td>
<td>false</td>
<td>是否开启截图</td>
</tr>
<tr>
<td>level</td>
<td>number</td>
<td>1</td>
<td>截图容器层级</td>
</tr>
<tr>
<td>clickCutFullScreen</td>
<td>boolean</td>
<td>false</td>
<td>单击截全屏启用状态,值为 boolean 类型</td>
</tr>
<tr>
<td>hiddenToolIco</td>
<td>object</td>
<td>{}</td>
<td>需要隐藏的截图工具栏图标。值为{ save?: boolean; undo?: boolean; confirm?: boolean }类型。传你需要隐藏的图标名称，将值设为 true 即可</td>
</tr>
</tbody>
</table>
<h2 id="aliplayer-播放器-v3" tabindex="-1"><a class="header-anchor" href="#aliplayer-播放器-v3" aria-hidden="true">#</a> aliplayer 播放器 v3</h2>
<blockquote>
<p>支持 mp4, 直播流：hls(推荐使用，m3u8 等), rtmp(需要安装 flash,360 等部分浏览器支持)。如需在 vue2 使用请移步：<a href="https://www.npmjs.com/package/vue-aliplayer" target="_blank" rel="noopener noreferrer">vue-aliplayer<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue-aliplayer-v3 --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v4 <span class="token keyword">as</span> uuidv4 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uuid'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> options<span class="token operator">?</span><span class="token operator">:</span> AliplayerOptions<span class="token punctuation">;</span> source<span class="token operator">?</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> aliplayerCss <span class="token operator">=</span>
  <span class="token string">'https://g.alicdn.com/de/prismplayer/2.9.21/skins/default/aliplayer-min.css'</span>
<span class="token keyword">const</span> playerJs <span class="token operator">=</span> <span class="token string">'https://g.alicdn.com/de/prismplayer/2.9.21/aliplayer-min.js'</span>

<span class="token keyword">const</span> domId <span class="token operator">=</span> <span class="token string">'video_id_'</span> <span class="token operator">+</span> <span class="token function">uuidv4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'</span>
<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> linkID <span class="token operator">=</span> <span class="token string">'app__aliplayer-min-css'</span>
  <span class="token keyword">const</span> scriptID <span class="token operator">=</span> <span class="token string">'app__aliplayer-min-js'</span>
  <span class="token keyword">const</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'head'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'html'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> scriptTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>scriptID<span class="token punctuation">)</span>
  <span class="token keyword">let</span> linkIDTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>linkID<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>linkIDTag <span class="token operator">||</span> <span class="token operator">!</span>scriptTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'link'</span><span class="token punctuation">)</span>
    link<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'text/css'</span>
    link<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">'stylesheet'</span>
    link<span class="token punctuation">.</span>href <span class="token operator">=</span> aliplayerCss
    link<span class="token punctuation">.</span>id <span class="token operator">=</span> linkID
    head<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>
    link<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log('scriptTag');</span>
      scriptTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>scriptTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// @ts-ignore</span>
        scriptTag<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'text/javascript'</span>
        scriptTag<span class="token punctuation">.</span>id <span class="token operator">=</span> scriptID
        <span class="token comment">// @ts-ignore</span>
        scriptTag<span class="token punctuation">.</span>src <span class="token operator">=</span> playerJs
        html<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptTag<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//兼容单页加载和硬加载</span>
      scriptTag<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">initPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">initPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//这样是为了兼容页面上有多个播放器</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">player</span><span class="token operator">:</span> Aliplayer
<span class="token keyword">function</span> <span class="token function">initPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> source <span class="token operator">=</span> props<span class="token punctuation">.</span>options<span class="token operator">?.</span>source <span class="token operator">||</span> props<span class="token punctuation">.</span>source <span class="token operator">||</span> <span class="token string">''</span>
  <span class="token keyword">const</span> isRtmp <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'rtmp'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aliplayer</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        <span class="token operator">...</span>props<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> domId<span class="token punctuation">,</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> props<span class="token punctuation">.</span>source <span class="token operator">||</span> props<span class="token punctuation">.</span>options<span class="token operator">?.</span>source<span class="token punctuation">,</span> <span class="token comment">//播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。</span>
        <span class="token literal-property property">isLive</span><span class="token operator">:</span> isRtmp <span class="token operator">||</span> props<span class="token punctuation">.</span>options<span class="token operator">?.</span>isLive<span class="token punctuation">,</span> <span class="token comment">//是否为直播播放。</span>
        <span class="token literal-property property">useFlashPrism</span><span class="token operator">:</span> isRtmp <span class="token operator">||</span> props<span class="token punctuation">.</span>options<span class="token operator">?.</span>useFlashPrism<span class="token punctuation">,</span>
        <span class="token literal-property property">format</span><span class="token operator">:</span> isRtmp <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> props<span class="token punctuation">.</span>options<span class="token operator">?.</span>format<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">player_</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// player_.play()</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>source<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">initPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">getPlayer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> player<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>domId<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> VideoPlayer <span class="token keyword">from</span> <span class="token string">'../index'</span>

<span class="token comment">// defineProps&lt;{ msg: string }>()</span>

<span class="token keyword">const</span> videoRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>videoRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>videoRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> player <span class="token operator">=</span> videoRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    player<span class="token punctuation">.</span><span class="token function">replay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> ref<span class="token operator">&lt;</span>AliplayerOptions<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">isLive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'m3u8'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token string">'http://10.56.212.242:8896/live/12224700010000000500993-/hls.m3u8'</span>
<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'rtmp://60.190.82.147:1935/live/openUrl/Axe8k6Y'</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>play<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>play<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>change source<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlayer</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">:source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>source<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videoRef<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无缝滚动-v2" tabindex="-1"><a class="header-anchor" href="#无缝滚动-v2" aria-hidden="true">#</a> 无缝滚动 v2</h2>
<blockquote>
<p>文字、列表无缝滚动组件。如需在 vue3 使用请移步：<a href="https://github.com/xfy520/vue3-seamless-scroll" target="_blank" rel="noopener noreferrer">vue3-seamless-scroll<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue-seamless-scroll --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入-1" tabindex="-1"><a class="header-anchor" href="#引入-1" aria-hidden="true">#</a> 引入</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> vueSeamlessScroll <span class="token keyword">from</span> <span class="token string">'vue-seamless-scroll'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-example3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-seamless-scroll</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>listData<span class="token punctuation">"</span></span> <span class="token attr-name">:class-option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOption<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ul-scoll<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in listData<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.title }}：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
            <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-seamless-scroll</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> vueSeamlessScroll <span class="token keyword">from</span> <span class="token string">'vue-seamless-scroll'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Example3'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    vueSeamlessScroll<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里存放数据</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 监听属性 类似于data概念</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">defaultOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token comment">// 数值越大速度滚动越快</span>
        <span class="token literal-property property">limitMoveNum</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 开始无缝滚动的数据量 this.dataList.length</span>
        <span class="token literal-property property">hoverStop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启鼠标悬停stop</span>
        <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 0向下 1向上 2向左 3向右</span>
        <span class="token literal-property property">openWatch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启数据实时监控刷新dom</span>
        <span class="token literal-property property">singleHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1</span>
        <span class="token literal-property property">singleWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3</span>
        <span class="token literal-property property">waitTime</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 单步运动停止的时间(默认值1000ms)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 方法集合</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 监控data中的数据变化</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 生命周期 - 创建完成（可以访问当前this实例）</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 生命周期 - 挂载完成（可以访问DOM元素）</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span>script <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'无缝滚动第几条啊啊啊-'</span> <span class="token operator">+</span> i<span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2020-04-10'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.page-example3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #283dff<span class="token punctuation">;</span>
  <span class="token selector">.ul-scoll</span> <span class="token punctuation">{</span>
    <span class="token selector">li</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>198<span class="token punctuation">,</span> 142<span class="token punctuation">,</span> 226<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
　
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
