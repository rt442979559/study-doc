<template><div><h1 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h1>
<h2 id="截图" tabindex="-1"><a class="header-anchor" href="#截图" aria-hidden="true">#</a> 截图</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> vue-web-screen-shot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 导入截屏插件</span>
<span class="token keyword">import</span> screenShort <span class="token keyword">from</span> <span class="token string">'vue-web-screen-shot'</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token comment">// 使用截屏插件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>screenShort<span class="token punctuation">,</span> <span class="token punctuation">{</span> enableWebRtc<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--截图组件--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>screen-short</span>
     <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screenshotStatus<span class="token punctuation">"</span></span>
    <span class="token attr-name">@destroy-component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>destroyComponent<span class="token punctuation">"</span></span>
    <span class="token attr-name">@get-image-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getImg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>screen-short</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
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
<td>单击截全屏启用状态,值为boolean类型</td>
</tr>
<tr>
<td>hiddenToolIco</td>
<td>object</td>
<td>{}</td>
<td>需要隐藏的截图工具栏图标。值为{ save?: boolean; undo?: boolean; confirm?: boolean }类型。传你需要隐藏的图标名称，将值设为true即可</td>
</tr>
</tbody>
</table>
</div></template>
