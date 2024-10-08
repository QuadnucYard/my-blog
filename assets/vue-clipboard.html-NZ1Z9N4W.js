import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,a as t}from"./app-BdstX_t_.js";const a={},n=t(`<h1 id="科学地在-vue3-使用剪贴板" tabindex="-1"><a class="header-anchor" href="#科学地在-vue3-使用剪贴板"><span>科学地在 Vue3 使用剪贴板</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vue-clipboard3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>后缀 3 表示它是适用于 Vue3 setup 的，使用<code>useXXX</code>而非 <code>this.xxx</code> 的方式使用。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>核心 3 行代码如下，不需要在其他地方 <code>use</code>。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> useClipboard</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;vue-clipboard3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">toClipboard</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> useClipboard</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 这个函数是返回值的唯一成员</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> toClipboard</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">someString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>element</code> 是一个 <code>HTMLElement</code> 对象，在 Vue 中可以用 <code>someRef.value.$el</code> 来获取。</p><p>根据源码， <code>toClipboard</code> 的原理是，在 container 里创建一个 fake 按钮，点击这个按钮后将一个 fake 文本框里的文本粘到剪贴板里（这步是 <code>clipboard.js</code> 实现的）。<br> 通常情况下，并不需要传入第2个参数，默认为 <code>document.body</code>。但有一种情况例外：打开了模态窗口。在这种情况下，点击事件会被屏蔽，创建在 <code>document.body</code> 的 fake 按钮的模拟点击被挡住，这样就会无法成功复制。这时就需要传入第 2 个参数，它可以是模态窗口内用户可以点击的任何元素。这样就没有问题了。</p>`,9),l=[n];function d(h,r){return s(),i("div",null,l)}const c=e(a,[["render",d],["__file","vue-clipboard.html.vue"]]),k=JSON.parse('{"path":"/posts/vue/vue-clipboard.html","title":"科学地在 Vue3 使用剪贴板","lang":"en-US","frontmatter":{"category":["vue"],"tag":["frontend"],"isOriginal":true,"date":"2023-09-16T00:00:00.000Z","description":"科学地在 Vue3 使用剪贴板 安装 后缀 3 表示它是适用于 Vue3 setup 的，使用useXXX而非 this.xxx 的方式使用。 使用方法 核心 3 行代码如下，不需要在其他地方 use。 其中 element 是一个 HTMLElement 对象，在 Vue 中可以用 someRef.value.$el 来获取。 根据源码， toCli...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/vue/vue-clipboard.html"}],["meta",{"property":"og:title","content":"科学地在 Vue3 使用剪贴板"}],["meta",{"property":"og:description","content":"科学地在 Vue3 使用剪贴板 安装 后缀 3 表示它是适用于 Vue3 setup 的，使用useXXX而非 this.xxx 的方式使用。 使用方法 核心 3 行代码如下，不需要在其他地方 use。 其中 element 是一个 HTMLElement 对象，在 Vue 中可以用 someRef.value.$el 来获取。 根据源码， toCli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T14:23:37.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:published_time","content":"2023-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T14:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"科学地在 Vue3 使用剪贴板\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T14:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1704637417000,"updatedTime":1704637417000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":284},"filePathRelative":"posts/vue/vue-clipboard.md","localizedDate":"September 16, 2023","excerpt":"\\n<h2>安装</h2>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pnpm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> i</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vue-clipboard3</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,k as data};