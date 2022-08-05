<template><div><h1 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h1>
<h2 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载" aria-hidden="true">#</a> 文件下载</h2>
<h3 id="获取-blob" tabindex="-1"><a class="header-anchor" href="#获取-blob" aria-hidden="true">#</a> 获取 blob</h3>
<blockquote>
<p>@param {String} url 目标文件地址 @return {cb}</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">getBlob</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'blob'</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保存文件到本地" tabindex="-1"><a class="header-anchor" href="#保存文件到本地" aria-hidden="true">#</a> 保存文件到本地</h3>
<blockquote>
<p>@param {Blob} blob @param {String} filename 想要保存的文件名称</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token parameter">blob<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>msSaveOrOpenBlob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span><span class="token function">msSaveBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span>

      link<span class="token punctuation">.</span>href <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
      link<span class="token punctuation">.</span>download <span class="token operator">=</span> filename

      <span class="token comment">// fix Firefox</span>
      link<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span>
      body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>

      link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span>

      window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将时间转化成指定格式" tabindex="-1"><a class="header-anchor" href="#将时间转化成指定格式" aria-hidden="true">#</a> 将时间转化成指定格式</h2>
</div></template>
