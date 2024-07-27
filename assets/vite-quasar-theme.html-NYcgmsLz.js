import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as e}from"./app-D-r_afe7.js";const t={},n=e(`<h1 id="quasar-主题色改变-vite-plugin" tabindex="-1"><a class="header-anchor" href="#quasar-主题色改变-vite-plugin"><span>Quasar 主题色改变（vite-plugin）</span></a></h1><p>有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 <code>primary</code>。更进一步，我们希望主题色分为多阶（好比提供的 <code>red-1</code>，<code>red-2</code> 系列），均能同步改变。</p><p>Quasar 提供了 <code>getCssVar</code> 和 <code>setCssVar</code> 两个设置 CSS 变量的函数，其效果是在 DOM 根结点的 style 加上对应的变量声明。</p><p>例如 <code>setCssVar(&quot;primary&quot;, &quot;red&quot;)</code>，那么它会设置 <code>--q-primary: red</code>，加上一个 <code>--q-</code> 前缀。这样所有的 primary color 都会变成设定的颜色。</p><p>在组件中设置 <code>color=&quot;foo&quot;</code> 的原理大致是：附加了一个 <code>.foo</code> 的 class，这个 class 实现了 <code>color: x</code> 或 <code>color: --q-x</code>。设置 <code>bg-color</code> 同理。</p><p>为了实现 <code>color=&quot;primary-1&quot;</code> 的效果，就需要创建一个 <code>.primary-1</code> 的 class，而它的颜色值为一个变量，可以通过 <code>setCssVar</code> 来设置。<br> 产生色阶的一个最简单方法就是调亮度， <code>quasar</code> 提供的是 <code>lighten</code>，其作用和 CSS 的类似，将一个颜色按百分比调亮。</p><p>如果要实现 <code>.primary-1</code> 到 <code>.primary-10</code> 怎么办？我们使用的是 SCSS，它有循环功能：</p><div class="language-scss line-numbers-mode" data-highlighter="shiki" data-ext="scss" data-title="scss" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $var</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> through</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .primary-</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">#{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$var</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--q-primary</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">#{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$var</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .bg-primary-</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">#{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$var</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background-color: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--q-primary</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">#{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$var</span><span style="--shiki-light:#CA1243;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相应地，在设置颜色的地方，也可以用循环来赋值：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  setCssVar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`primary-</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lighten</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 primary 或 secondary 就代表了主题色，如果要让某些元素的颜色随主题色，用自定义的 <code>primary-1</code> 之类的色值就好了。</p>`,11),r=[n];function h(l,p){return a(),i("div",null,r)}const o=s(t,[["render",h],["__file","vite-quasar-theme.html.vue"]]),c=JSON.parse('{"path":"/posts/vue/quasar/vite-quasar-theme.html","title":"Quasar 主题色改变（vite-plugin）","lang":"en-US","frontmatter":{"category":["frontend","vue"],"tag":["quasar","css"],"isOriginal":true,"date":"2023-09-16T00:00:00.000Z","description":"Quasar 主题色改变（vite-plugin） 有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 primary。更进一步，我们希望主题色分为多阶（好比提供的 red-1，red-2 系列），均能同步改变。 Quasar 提供了 getCssVar 和 setCssVar 两个设置 CSS 变量的函数，其效果是在 D...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/vue/quasar/vite-quasar-theme.html"}],["meta",{"property":"og:title","content":"Quasar 主题色改变（vite-plugin）"}],["meta",{"property":"og:description","content":"Quasar 主题色改变（vite-plugin） 有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 primary。更进一步，我们希望主题色分为多阶（好比提供的 red-1，red-2 系列），均能同步改变。 Quasar 提供了 getCssVar 和 setCssVar 两个设置 CSS 变量的函数，其效果是在 D..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-11T09:39:04.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"quasar"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2023-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-11T09:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quasar 主题色改变（vite-plugin）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-11T09:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[],"git":{"createdTime":1704637417000,"updatedTime":1704965944000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"posts/vue/quasar/vite-quasar-theme.md","localizedDate":"September 16, 2023","excerpt":"\\n<p>有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 <code>primary</code>。更进一步，我们希望主题色分为多阶（好比提供的 <code>red-1</code>，<code>red-2</code> 系列），均能同步改变。</p>\\n<p>Quasar 提供了 <code>getCssVar</code> 和 <code>setCssVar</code> 两个设置 CSS 变量的函数，其效果是在 DOM 根结点的 style 加上对应的变量声明。</p>\\n<p>例如 <code>setCssVar(\\"primary\\", \\"red\\")</code>，那么它会设置 <code>--q-primary: red</code>，加上一个 <code>--q-</code> 前缀。这样所有的 primary color 都会变成设定的颜色。</p>","autoDesc":true}');export{o as comp,c as data};
