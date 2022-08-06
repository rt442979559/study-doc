<template><div><h1 id="常用图表" tabindex="-1"><a class="header-anchor" href="#常用图表" aria-hidden="true">#</a> 常用图表 🚀</h1>
<h2 id="柱形图" tabindex="-1"><a class="header-anchor" href="#柱形图" aria-hidden="true">#</a> 柱形图 🪐</h2>
<h3 id="象形图" tabindex="-1"><a class="header-anchor" href="#象形图" aria-hidden="true">#</a> 象形图 ☁️</h3>
<h4 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> demo 1</h4>
<v-code componentName="chart" quote="pictogram">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *象形图 - 1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">pictogram</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'2016'</span><span class="token punctuation">,</span> <span class="token string">'2017'</span><span class="token punctuation">,</span> <span class="token string">'2018'</span><span class="token punctuation">,</span> <span class="token string">'2019'</span><span class="token punctuation">,</span> <span class="token string">'2020'</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">70.59</span><span class="token punctuation">,</span> <span class="token number">71.39</span><span class="token punctuation">,</span> <span class="token number">72.4</span><span class="token punctuation">,</span> <span class="token number">83.92</span><span class="token punctuation">,</span> <span class="token number">94.23</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 区域位置*/</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> data<span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">'12'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'(亿元)'</span><span class="token punctuation">,</span>
      nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'产值'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
        <span class="token comment">// 圆柱图片的堆叠</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,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'</span><span class="token punctuation">,</span>
        symbolRotate<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token comment">// 倾斜度</span>
        symbolMargin<span class="token operator">:</span> <span class="token string">'-5px'</span><span class="token punctuation">,</span> <span class="token comment">// 控制分割图形的大小</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        symbolRepeat<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        animation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'45%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h4 id="demo-2" tabindex="-1"><a class="header-anchor" href="#demo-2" aria-hidden="true">#</a> demo 2</h4>
<v-code componentName="chart" quote="pictogram2">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *象形图 - 2</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">pictogram2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'2016'</span><span class="token punctuation">,</span> <span class="token string">'2017'</span><span class="token punctuation">,</span> <span class="token string">'2018'</span><span class="token punctuation">,</span> <span class="token string">'2019'</span><span class="token punctuation">,</span> <span class="token string">'2020'</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 区域位置*/</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> data<span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'规上企业数'</span><span class="token punctuation">,</span>
          <span class="token comment">// 强制设置图形为圆。</span>
          icon<span class="token operator">:</span> <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAWUlEQVQokWP8v5vBk4GBYS4DA4MkA2ngOQMDQzILVPNEBgaGayQaoAXSywS1mVTNDFA9kkxkaEQBowYMFgNAKQqUKEgFmgwMDC9AKTEFmholSDThKQMDQzIAKiQNS7pPDfMAAAAASUVORK5CYII='</span><span class="token punctuation">,</span>
          <span class="token comment">// 设置文本为红色</span>
          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'规上工业企业数'</span><span class="token punctuation">,</span>
          <span class="token comment">// 强制设置图形为圆。</span>
          icon<span class="token operator">:</span> <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAWklEQVQoke2SsQ2AMAwEj2yREWCTZBlmYTkmQIQhLD0KSkNpVxScZMnNfXVgKphOTHJed8r0PLABOz4WYE1ADsgMJ6eA+OIf+MpAG1F4mYGrp1wxtUDKB6Z6A9yGZPqw3aZcAAAAAElFTkSuQmCC'</span><span class="token punctuation">,</span>
          <span class="token comment">// 设置文本为红色</span>
          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">'12'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'(个)'</span><span class="token punctuation">,</span>
        nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">'rgba(255,255,255,0.3)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'规上企业数'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,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'</span><span class="token punctuation">,</span>
        symbolRotate<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token comment">// 倾斜度</span>
        symbolMargin<span class="token operator">:</span> <span class="token string">'-5px'</span><span class="token punctuation">,</span> <span class="token comment">// 控制分割图形的大小</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'100%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        animation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'45%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'规上工业企业数'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,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'</span><span class="token punctuation">,</span>
        symbolRotate<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token comment">// 倾斜度</span>
        barGap<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'100%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        animation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'45%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h4 id="demo-3" tabindex="-1"><a class="header-anchor" href="#demo-3" aria-hidden="true">#</a> demo 3</h4>
<v-code componentName="chart" quote="pictogram3">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *象形图 - 3</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">pictogram3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'5%'</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">'roundRect'</span><span class="token punctuation">,</span>
      itemHeight<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token comment">//修改icon图形大小</span>
      <span class="token comment">// icon: "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span> <span class="token comment">// 文字的颜色。</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#0C1954'</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**区域位置*/</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'3%'</span><span class="token punctuation">,</span>
      containLabel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'哈尔滨'</span><span class="token punctuation">,</span> <span class="token string">'黑河'</span><span class="token punctuation">,</span> <span class="token string">'牡丹江'</span><span class="token punctuation">,</span> <span class="token string">'佳木斯'</span><span class="token punctuation">,</span> <span class="token string">'大庆'</span><span class="token punctuation">,</span> <span class="token string">'鸡西'</span><span class="token punctuation">,</span> <span class="token string">'鹤岗'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'rgba(219,225,255,1)'</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'rgba(202, 255, 253,0.2)'</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'rgba(202, 255, 253,0.2)'</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span> <span class="token comment">//更改坐标轴文字颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'数(人次)'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        barCategoryGap<span class="token operator">:</span> <span class="token string">'40%'</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">'triangle'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          normal<span class="token operator">:</span> <span class="token punctuation">{</span>
            opacity<span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
            <span class="token comment">// color:'RGBA(133, 255, 105, 1)',</span>
            color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#22e7f1'</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#116aef'</span><span class="token punctuation">,</span> <span class="token comment">// 60% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'RGBA(169, 255, 144, 1)'</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h3 id="圆柱图" tabindex="-1"><a class="header-anchor" href="#圆柱图" aria-hidden="true">#</a> 圆柱图 ☁️</h3>
<h4 id="demo-1-1" tabindex="-1"><a class="header-anchor" href="#demo-1-1" aria-hidden="true">#</a> demo 1</h4>
<v-code componentName="chart" quote="cylinder">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *圆柱体 - 1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">cylinder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15.12</span><span class="token punctuation">,</span> <span class="token number">15.73</span><span class="token punctuation">,</span> <span class="token number">16.07</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15.43</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> data2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4.1</span><span class="token punctuation">,</span> <span class="token number">4.03</span><span class="token punctuation">,</span> <span class="token number">2.16</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6.6</span><span class="token punctuation">,</span> <span class="token number">2.9</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">'pictorialBar'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>seriesType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        type<span class="token operator">:</span> <span class="token string">'shadow'</span><span class="token punctuation">,</span> <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'2016'</span><span class="token punctuation">,</span> <span class="token string">'2017'</span><span class="token punctuation">,</span> <span class="token string">'2018'</span><span class="token punctuation">,</span> <span class="token string">'2019'</span><span class="token punctuation">,</span> <span class="token string">'2020'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        margin<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 刻度标签与轴线之间的距离。</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'(万元)'</span><span class="token punctuation">,</span>
      nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#12B9DB'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 三个最低下的圆片</span>
        name<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        symbolOffset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#12B9DB'</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#6F8EF2'</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 下半截柱状图</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'税收收入'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        barGap<span class="token operator">:</span> <span class="token string">'-100%'</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// lenged文本</span>
          opacity<span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#12B9DB'</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#6F8EF2'</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        symbolOffset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#12B9DB'</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#6F8EF2'</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        symbolPosition<span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h4 id="demo-2-1" tabindex="-1"><a class="header-anchor" href="#demo-2-1" aria-hidden="true">#</a> demo 2</h4>
<v-code componentName="chart" quote="cylinder2">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *圆柱体 - 2</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">cylinder2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15.12</span><span class="token punctuation">,</span> <span class="token number">12.73</span><span class="token punctuation">,</span> <span class="token number">17.07</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">19.43</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">'pictorialBar'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>seriesType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
            &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 坐标轴指示器，坐标轴触发有效</span>
        type<span class="token operator">:</span> <span class="token string">'shadow'</span><span class="token punctuation">,</span> <span class="token comment">// 默认为直线，可选为：'line' | 'shadow'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'2016'</span><span class="token punctuation">,</span> <span class="token string">'2017'</span><span class="token punctuation">,</span> <span class="token string">'2018'</span><span class="token punctuation">,</span> <span class="token string">'2019'</span><span class="token punctuation">,</span> <span class="token string">'2020'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        interval<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        margin<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 刻度标签与轴线之间的距离。</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'(万元)'</span><span class="token punctuation">,</span>
      nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#12B9DB'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//</span>
        name<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        <span class="token comment">// symbol: 'circle',</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        symbolOffset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'rgba(34,231,241,0.2)'</span><span class="token punctuation">,</span>
          borderColor<span class="token operator">:</span> <span class="token string">'#22e7f1'</span><span class="token punctuation">,</span>
          borderWidth<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          shadowColor<span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.5)'</span><span class="token punctuation">,</span>
          shadowBlur<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        symbolPosition<span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 下半截柱状图</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'网格员'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token comment">// barGap: '-100%',</span>
        <span class="token comment">// roundCap: true,</span>

        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// lenged文本</span>
          borderRadius<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> params<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#22e7f1'</span><span class="token punctuation">,</span> <span class="token comment">// 0% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                  color<span class="token operator">:</span> <span class="token string">'#116aef'</span><span class="token punctuation">,</span> <span class="token comment">// 100% 处的颜色</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token boolean">false</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> data1<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h2 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图" aria-hidden="true">#</a> 折线图 🪐</h2>
<h3 id="标点折线图" tabindex="-1"><a class="header-anchor" href="#标点折线图" aria-hidden="true">#</a> 标点折线图 ☁️</h3>
<h4 id="demo-1-2" tabindex="-1"><a class="header-anchor" href="#demo-1-2" aria-hidden="true">#</a> demo 1</h4>
<v-code componentName="chart" quote="punctuation">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *标点折线图 - 1</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">punctuation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'01-02月'</span><span class="token punctuation">,</span> <span class="token string">'01-03月'</span><span class="token punctuation">,</span> <span class="token string">'01-04月'</span><span class="token punctuation">,</span> <span class="token string">'01-05月'</span><span class="token punctuation">,</span> <span class="token string">'01-06月'</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'15%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> data<span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'4%'</span><span class="token punctuation">,</span>
      itemHeight<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      itemWidth<span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'累计增速'</span><span class="token punctuation">,</span>
          <span class="token comment">// 强制设置图形为圆。</span>
          icon<span class="token operator">:</span> <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVQ4jWNk+L9lCQMDgxEDdcA5Fqhh2VQycCoTlQyCgxFoIAsBeRkGBoZUBgYGYyj/LAMDw2wGBoYn5BgoC4o1BgYGHiQxWwYGBkNoqniMTRM+L6egGQYDPFA5rACfgcZ45EzIMZAsgM/As3jkzpDjwrkMDAxfsIh/gcqRbOAjaGweZmBg+AbFh6Fij3BpIpQOQUmjnoAaol1IFhihhcM5aJ6lHDAwnAMAagkZ1p1ZuI4AAAAASUVORK5CYII='</span><span class="token punctuation">,</span>
          <span class="token comment">// 设置文本为红色</span>
          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">'12'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
              &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
              </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
          </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'(%)'</span><span class="token punctuation">,</span>
        nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">'rgba(255,255,255,0.3)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'累计增速'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#00ffb4'</span><span class="token punctuation">,</span> <span class="token comment">// 线条颜色</span>
          borderColor<span class="token operator">:</span> <span class="token string">'#00ffb4'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAqklEQVQ4jWNk+L9lCQMDgxEDdcA5Fqhh2VQycCoTlQyCgxFoIAsBeRkGBoZUBgYGYyj/LAMDw2wGBoYn5BgoC4o1BgYGHiQxWwYGBkNoqniMTRM+L6egGQYDPFA5rACfgcZ45EzIMZAsgM/As3jkzpDjwrkMDAxfsIh/gcqRbOAjaGweZmBg+AbFh6Fij3BpIpQOQUmjnoAaol1IFhihhcM5aJ6lHDAwnAMAagkZ1p1ZuI4AAAAASUVORK5CYII='</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token string">'20'</span><span class="token punctuation">,</span>
        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 区域填充样式</span>
          <span class="token comment">// 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。</span>
          color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'#046a5f'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'#073a45'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'#081b34'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h3 id="象形折线图" tabindex="-1"><a class="header-anchor" href="#象形折线图" aria-hidden="true">#</a> 象形折线图 ☁️</h3>
<h4 id="demo-2-2" tabindex="-1"><a class="header-anchor" href="#demo-2-2" aria-hidden="true">#</a> demo 2</h4>
<v-code componentName="chart" quote="punctuation2">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *象形折线图 - 2</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">punctuation2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> seriesData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">,</span> <span class="token number">16000</span><span class="token punctuation">,</span> <span class="token number">18000</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'01-02月'</span><span class="token punctuation">,</span> <span class="token string">'01-03月'</span><span class="token punctuation">,</span> <span class="token string">'01-04月'</span><span class="token punctuation">,</span> <span class="token string">'01-05月'</span><span class="token punctuation">,</span> <span class="token string">'01-06月'</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      left<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'18%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> data<span class="token punctuation">,</span>
      position<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
      axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">'solid'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span>
          opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#ECF1F6'</span><span class="token punctuation">,</span> <span class="token string">'#ECF1F6'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      gridIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'0%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#A1D5FF'</span><span class="token punctuation">,</span>
        fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'累计总额'</span><span class="token punctuation">,</span>

          <span class="token comment">// 设置文本为红色</span>
          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'同比增长'</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACFUlEQVQ4jZWVQUtUcRTFf/OaGXUKpybKoDZtMnBjS8HK4BFt7CsYhEXYRuhjhO3S8FvoMhdKSktblqErCyTUGUkTp3pypvPiP/FvsguXN/DuPXPvufeeV8heE7MiMGwfAM4BTWAH+Ags27+TZm3pMcCbwGOgB9gF9oEjvysDZ4CzwDfgFWn25m+ACTAO3Ac2ga0AsOmYEnDaFfcBV4A5YJY0+4lby01g94C1ALDuSkLAHgM2gAPn0Ko2ALwNjJqfDeAT8AXYAw5bXP0yxXcbLKcia+UuFN6TZktFB00YZNPPz8A2MOTKbxhwtdUevA2qLpuGpywUVgQ2Apxyi1uuTGBPgMk/BpZP/gUwbQoqQBU4D9xJHLDrlai7naEIWGiTjmk4Z8cYwwK8Dnw1wQfmbLwDWDjEQ+fs2/sF2Gs+jvzUAAZPADjo2GaQX00Ccv/XCrH4xKtR8rRKnvq7E4CvOrYU5DcEuO5zqti7vRr/slnHVrw28g+Jj1ybX/ONVr1nUx0ApxxTdU7NGMsCXAR++DblFxwwAzzwH+YboN9jfldz7EW7Lmax6Em9BJ5FlEU8PYyc3iWDXbZAyJ+TZs38llVlf3DoZXNTd2WhOFTcZp8BrwLzpJkw2tRGJHcBd4Nz0gXE5Evtqk1VJgH8PcSYwN4CHrm1mMDmeqgrkQ4uhcmdPgESDan3NbcoEwXSS6m0Wmz/BADH3vueoqig/N4AAAAASUVORK5CYII='</span><span class="token punctuation">,</span>
          textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      itemGap<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 设置间距</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">'12'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> rander <span class="token operator">=</span> params
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>seriesName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                item<span class="token punctuation">.</span>seriesType <span class="token operator">!==</span> <span class="token string">'line'</span> <span class="token operator">?</span> item<span class="token punctuation">.</span>value <span class="token operator">:</span> item<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">'%'</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div></span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
              &lt;div></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>axisValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
              </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rander<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
          </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'(千万)'</span><span class="token punctuation">,</span>
        nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          rotate<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'dashed'</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">'rgba(255,255,255,0.3)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          align<span class="token operator">:</span> <span class="token string">'left'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          padding<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">'{%}'</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span> show<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 辅助分割图形</span>
        name<span class="token operator">:</span> <span class="token string">'累计总额'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'pictorialBar'</span><span class="token punctuation">,</span>
        barWidth<span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,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'</span><span class="token punctuation">,</span>
        symbolRotate<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token comment">// 倾斜度</span>
        symbolMargin<span class="token operator">:</span> <span class="token string">'-5px'</span><span class="token punctuation">,</span> <span class="token comment">// 控制分割图形的大小</span>
        symbolSize<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        symbolRepeat<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        animation<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          barBorderRadius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#FFF'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'100%'</span><span class="token punctuation">,</span> <span class="token string">'45%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> seriesData<span class="token punctuation">,</span>
        z<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'同比增长'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
        yAxisIndex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#ffbb00'</span><span class="token punctuation">,</span> <span class="token comment">// 线条颜色</span>
          borderColor<span class="token operator">:</span> <span class="token string">'#00ffb4'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span>
          <span class="token string">'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACFUlEQVQ4jZWVQUtUcRTFf/OaGXUKpybKoDZtMnBjS8HK4BFt7CsYhEXYRuhjhO3S8FvoMhdKSktblqErCyTUGUkTp3pypvPiP/FvsguXN/DuPXPvufeeV8heE7MiMGwfAM4BTWAH+Ags27+TZm3pMcCbwGOgB9gF9oEjvysDZ4CzwDfgFWn25m+ACTAO3Ac2ga0AsOmYEnDaFfcBV4A5YJY0+4lby01g94C1ALDuSkLAHgM2gAPn0Ko2ALwNjJqfDeAT8AXYAw5bXP0yxXcbLKcia+UuFN6TZktFB00YZNPPz8A2MOTKbxhwtdUevA2qLpuGpywUVgQ2Apxyi1uuTGBPgMk/BpZP/gUwbQoqQBU4D9xJHLDrlai7naEIWGiTjmk4Z8cYwwK8Dnw1wQfmbLwDWDjEQ+fs2/sF2Gs+jvzUAAZPADjo2GaQX00Ccv/XCrH4xKtR8rRKnvq7E4CvOrYU5DcEuO5zqti7vRr/slnHVrw28g+Jj1ybX/ONVr1nUx0ApxxTdU7NGMsCXAR++DblFxwwAzzwH+YboN9jfldz7EW7Lmax6Em9BJ5FlEU8PYyc3iWDXbZAyJ+TZs38llVlf3DoZXNTd2WhOFTcZp8BrwLzpJkw2tRGJHcBd4Nz0gXE5Evtqk1VJgH8PcSYwN4CHrm1mMDmeqgrkQ4uhcmdPgESDan3NbcoEwXSS6m0Wmz/BADH3vueoqig/N4AAAAASUVORK5CYII='</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token string">'10'</span><span class="token punctuation">,</span>
        areaStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 区域填充样式</span>
          <span class="token comment">// 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。</span>
          color<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">echarts</span><span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token function">LinearGradient</span><span class="token punctuation">(</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'rgba(255,187,0,.8)'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                offset<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                color<span class="token operator">:</span> <span class="token string">'rgba(25,163,223, 0)'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
<h3 id="时间轴折线图" tabindex="-1"><a class="header-anchor" href="#时间轴折线图" aria-hidden="true">#</a> 时间轴折线图 ☁️</h3>
<h4 id="demo-3-1" tabindex="-1"><a class="header-anchor" href="#demo-3-1" aria-hidden="true">#</a> demo 3</h4>
<v-code componentName="chart" quote="punctuation3">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// *时间轴折线图 - 3</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">punctuation3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> xData <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">31</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">'日'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#08132f'</span><span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
      trigger<span class="token operator">:</span> <span class="token string">'axis'</span><span class="token punctuation">,</span>
      axisPointer<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'shadow'</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    grid<span class="token operator">:</span> <span class="token punctuation">{</span>
      borderWidth<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'20%'</span><span class="token punctuation">,</span>
      bottom<span class="token operator">:</span> <span class="token string">'10%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    legend<span class="token operator">:</span> <span class="token punctuation">{</span>
      x<span class="token operator">:</span> <span class="token string">'40%'</span><span class="token punctuation">,</span>
      top<span class="token operator">:</span> <span class="token string">'5%'</span><span class="token punctuation">,</span>
      textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">'#90979c'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'访问量'</span><span class="token punctuation">,</span> <span class="token string">'订单量'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    calculable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    xAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'rgba(204,187,225,0.5)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> xData<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    yAxis<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
        <span class="token comment">// splitNumber:4,       </span>
        splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
          lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">'rgba(204,187,225,0.5)'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    dataZoom<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        xAxisIndex<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        bottom<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>

        start<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        end<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        handleIcon<span class="token operator">:</span>
          <span class="token string">'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z'</span><span class="token punctuation">,</span>
        handleSize<span class="token operator">:</span> <span class="token string">'110%'</span><span class="token punctuation">,</span>
        handleStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#5B3AAE'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'rgba(204,187,225,0.5)'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        fillerColor<span class="token operator">:</span> <span class="token string">'rgba(67,55,160,0.4)'</span><span class="token punctuation">,</span>
        borderColor<span class="token operator">:</span> <span class="token string">'rgba(204,187,225,0.5)'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'inside'</span><span class="token punctuation">,</span>
        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        start<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        end<span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    series<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'访问量'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#6f7de3'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        markPoint<span class="token operator">:</span> <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
              textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">'max'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'最大值'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">'min'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'最小值'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">509</span><span class="token punctuation">,</span> <span class="token number">917</span><span class="token punctuation">,</span> <span class="token number">2455</span><span class="token punctuation">,</span> <span class="token number">2610</span><span class="token punctuation">,</span> <span class="token number">2719</span><span class="token punctuation">,</span> <span class="token number">3033</span><span class="token punctuation">,</span> <span class="token number">3044</span><span class="token punctuation">,</span> <span class="token number">3085</span><span class="token punctuation">,</span> <span class="token number">2708</span><span class="token punctuation">,</span> <span class="token number">2809</span><span class="token punctuation">,</span> <span class="token number">2117</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span>
          <span class="token number">1455</span><span class="token punctuation">,</span> <span class="token number">1210</span><span class="token punctuation">,</span> <span class="token number">719</span><span class="token punctuation">,</span> <span class="token number">733</span><span class="token punctuation">,</span> <span class="token number">944</span><span class="token punctuation">,</span> <span class="token number">2285</span><span class="token punctuation">,</span> <span class="token number">2208</span><span class="token punctuation">,</span> <span class="token number">3372</span><span class="token punctuation">,</span> <span class="token number">3936</span><span class="token punctuation">,</span> <span class="token number">3693</span><span class="token punctuation">,</span> <span class="token number">2962</span><span class="token punctuation">,</span> <span class="token number">2810</span><span class="token punctuation">,</span>
          <span class="token number">3519</span><span class="token punctuation">,</span> <span class="token number">2455</span><span class="token punctuation">,</span> <span class="token number">2610</span><span class="token punctuation">,</span> <span class="token number">2719</span><span class="token punctuation">,</span> <span class="token number">2484</span><span class="token punctuation">,</span> <span class="token number">2078</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'订单量'</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
        symbolSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
        itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
          color<span class="token operator">:</span> <span class="token string">'#c257F6'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        markPoint<span class="token operator">:</span> <span class="token punctuation">{</span>
          label<span class="token operator">:</span> <span class="token punctuation">{</span>
            normal<span class="token operator">:</span> <span class="token punctuation">{</span>
              textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
                color<span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">'max'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'最大值'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">'min'</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">'最小值'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">2136</span><span class="token punctuation">,</span> <span class="token number">3693</span><span class="token punctuation">,</span> <span class="token number">2962</span><span class="token punctuation">,</span> <span class="token number">3810</span><span class="token punctuation">,</span> <span class="token number">3519</span><span class="token punctuation">,</span> <span class="token number">3484</span><span class="token punctuation">,</span> <span class="token number">3915</span><span class="token punctuation">,</span> <span class="token number">3823</span><span class="token punctuation">,</span> <span class="token number">3455</span><span class="token punctuation">,</span> <span class="token number">4310</span><span class="token punctuation">,</span> <span class="token number">4019</span><span class="token punctuation">,</span>
          <span class="token number">3433</span><span class="token punctuation">,</span> <span class="token number">3544</span><span class="token punctuation">,</span> <span class="token number">3885</span><span class="token punctuation">,</span> <span class="token number">4208</span><span class="token punctuation">,</span> <span class="token number">3372</span><span class="token punctuation">,</span> <span class="token number">3484</span><span class="token punctuation">,</span> <span class="token number">3915</span><span class="token punctuation">,</span> <span class="token number">3748</span><span class="token punctuation">,</span> <span class="token number">3675</span><span class="token punctuation">,</span> <span class="token number">4009</span><span class="token punctuation">,</span> <span class="token number">4433</span><span class="token punctuation">,</span>
          <span class="token number">3544</span><span class="token punctuation">,</span> <span class="token number">3285</span><span class="token punctuation">,</span> <span class="token number">4208</span><span class="token punctuation">,</span> <span class="token number">3372</span><span class="token punctuation">,</span> <span class="token number">3484</span><span class="token punctuation">,</span> <span class="token number">3915</span><span class="token punctuation">,</span> <span class="token number">3823</span><span class="token punctuation">,</span> <span class="token number">4265</span><span class="token punctuation">,</span> <span class="token number">4298</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> option
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></v-code>
</div></template>
