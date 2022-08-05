<template><div><h1 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h1>
<h2 id="截图插件" tabindex="-1"><a class="header-anchor" href="#截图插件" aria-hidden="true">#</a> 截图插件</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> vue-web-screen-shot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>  <span class="token comment">// 导入截屏插件</span>
  <span class="token keyword">import</span> screenShort <span class="token keyword">from</span> <span class="token string">"vue-web-screen-shot"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用截屏插件</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>screenShort<span class="token punctuation">,</span> <span class="token punctuation">{</span> enableWebRtc<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
