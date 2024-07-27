import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a}from"./app-D-r_afe7.js";const n="/assets/clangd-extension-CX7UirCz.png",t="/assets/clangd-exe-DYUPqSke.png",l="/assets/xmake-clangd-doc-CtXwzot1.png",o="/assets/compile-commands-1-CH6hjhgf.png",r="/assets/clangd-restart-DiBis4BK.png",p="/assets/error-1-1mhxStUk.png",d="/assets/clangd-trouble-DZB9II4k.png",c="/assets/error-2-DU59NpIh.png",g="/assets/error-3-BXeLxA4c.png",h="/assets/error-4-BWPUArrl.png",u="/assets/error-5-ChzYOCCc.png",k="/assets/error-std-1-D3jzSRJ9.png",m="/assets/error-std-2-Be54Oubv.png",f="/assets/error-std-3-BeLw_ECE.png",y="/assets/error-std-4-Bx_po4d-.png",C="/assets/error-6-CYHVQjn8.png",_={},b=a('<h1 id="windows-vscode-xmake-clangd-配置踩坑" tabindex="-1"><a class="header-anchor" href="#windows-vscode-xmake-clangd-配置踩坑"><span>Windows VSCode + XMake + Clangd 配置踩坑</span></a></h1><p>尝试用 Clangd 代替 Intellisense 进行实时语法检测，但是遇到了很多问题。<br> 配置基础参考了 <a href="https://zhuanlan.zhihu.com/p/566506467" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/566506467</a>。</p><h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite"><span>Prerequisite</span></a></h2><p>VSCode 安装 clangd 扩展。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果系统没有安装 clangd 它会自己下载一个到插件共享文件目录，并且设置 clangd 的路径。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>XMake 的官方文档提到了如何使用 clangd：<a href="https://xmake.io/#/zh-cn/plugin/more_plugins?id=clangd" target="_blank" rel="noopener noreferrer">https://xmake.io/#/zh-cn/plugin/more_plugins?id=clangd</a>。只需禁用 <code>C/C++</code> 的语法提示功能，并设置 <code>compile-commands-dir</code>。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因为 clangd 会和 C++ 扩展功能冲突，需要关闭 C/C++ 扩展功能（安装 clangd 扩展后也会提示你禁用，其实禁用 intellisense 即可）。clangd 也需要知道编译命令，这个可由 XMake 提供（编辑 <code>xmake.lua</code> 后会自动更新，如果没有则执行命令 <code>XMake: UpdateIntellisense</code> 重新生成），默认位于 <code>.vscode</code> 目录下。</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>需要在参数中告诉 clangd。于是得到了这样的 <code>settings.json</code>：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.codeAnalysis.runAutomatically&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.intelliSenseEngine&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;disabled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.formatting&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;disabled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.autoAddFileAssociations&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.autocompleteAddParentheses&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.autocomplete&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;disabled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;C_Cpp.errorSquiggles&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;disabled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;clangd.arguments&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;--compile-commands-dir=.vscode&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开文件夹，创建 XMake 项目（默认的 Hello World 即可），使用上述 settings。clangd 配置更新时不需要重启窗口，可以直接 <code>Ctrl+Shift+P</code> 执行命令 <code>clangd: restart language server</code>。</p><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后可能发现它显示如下问题，显然是找不到标准库头文件。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="problems-with-gcc" tabindex="-1"><a class="header-anchor" href="#problems-with-gcc"><span>Problems with GCC</span></a></h2><p>对于 gcc，可能是因为没有设置 <code>--compile-commands-dir</code>。官网是这样解释的：找不到用户头文件是因为 <code>compile_commands.json</code> 路径没配置好，找不到标准库头文件则可能因为根据编译器路径搜索失败，需要手动指定 <code>query-driver</code>。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正常应该是这样的。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后试试 C++20，提示一堆错。这是当然的，因为 XMake 没有设置语言标准……</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>加上 <code>set_languages(&quot;c++20&quot;)</code>，重启 clangd，再执行，没有问题。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是下面问题来了，我想把语言标准设为 c++23，而这个是 gcc 和 msvc 早就支持的。编译当然没问题，但是 clangd 裂了，提示 c++23 不合法……</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是这个版本的 clangd 不支持 c++23 标准？其实是它只认 <code>&quot;-std=c++2b&quot;</code>。需要在 <code>compile_commands.json</code> 把 <code>c++23</code> 改成 <code>c++2b</code>。但命令是 XMake 自动生成的，所以需要在 <code>xmake.lua</code> 里改 <code>set_languages(&quot;c++2b&quot;)</code>。</p><p>但这样并不意味着万事大吉。注意到它提示 <code>algorithm</code> 有问题。STL 本身肯定没编译问题的，只能是 clangd 的分析有误。</p><p><img src="'+k+'" alt="" loading="lazy"><br><img src="'+m+'" alt="" loading="lazy"><br><img src="'+f+'" alt="" loading="lazy"><br><img src="'+y+'" alt="" loading="lazy"></p><p>最后一图是 <code>auto(x)</code> 分析有误，但 clangd 在 15 就支持了 c++23 的 <code>auto(x) and auto{x}</code>，有点怪。</p><p>其实 gcc 的 libstdc++ 本来就是为自家写的，一些语法也得靠自家编译器来解析。同理 clangd 也更偏好自家的 clang。只有这么点分析失败的地方也不容易了。</p><h2 id="try-msvc" tabindex="-1"><a class="header-anchor" href="#try-msvc"><span>Try MSVC</span></a></h2><p>最后考虑用 msvc 编译。更新 <code>compile_commands.json</code>，重启 clangd，它又炸了。</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里尝试设置 <code>query-driver</code> 也不起作用。</p><p>可能因为 MSVC 的编译命令格式和 clangd 差异太大，clangd 不识别。我尝试搜索过让 clangd 支持 MSVC 的方法无果。所以在用 clangd 的情况下还是别用 MSVC 了。</p>',38),B=[b];function A(v,q){return e(),s("div",null,B)}const S=i(_,[["render",A],["__file","xmake-clangd.html.vue"]]),F=JSON.parse('{"path":"/posts/cpp/xmake-clangd.html","title":"Windows VSCode + XMake + Clangd 配置踩坑","lang":"en-US","frontmatter":{"category":["c++","xmake"],"tag":["troubleshooting"],"isOriginal":true,"date":"2023-07-17T00:00:00.000Z","description":"Windows VSCode + XMake + Clangd 配置踩坑 尝试用 Clangd 代替 Intellisense 进行实时语法检测，但是遇到了很多问题。 配置基础参考了 https://zhuanlan.zhihu.com/p/566506467。 Prerequisite VSCode 安装 clangd 扩展。 如果系统没有安装 cl...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/cpp/xmake-clangd.html"}],["meta",{"property":"og:title","content":"Windows VSCode + XMake + Clangd 配置踩坑"}],["meta",{"property":"og:description","content":"Windows VSCode + XMake + Clangd 配置踩坑 尝试用 Clangd 代替 Intellisense 进行实时语法检测，但是遇到了很多问题。 配置基础参考了 https://zhuanlan.zhihu.com/p/566506467。 Prerequisite VSCode 安装 clangd 扩展。 如果系统没有安装 cl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-17T02:43:54.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"troubleshooting"}],["meta",{"property":"article:published_time","content":"2023-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T02:43:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows VSCode + XMake + Clangd 配置踩坑\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T02:43:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[{"level":2,"title":"Prerequisite","slug":"prerequisite","link":"#prerequisite","children":[]},{"level":2,"title":"Problems with GCC","slug":"problems-with-gcc","link":"#problems-with-gcc","children":[]},{"level":2,"title":"Try MSVC","slug":"try-msvc","link":"#try-msvc","children":[]}],"git":{"createdTime":1689561834000,"updatedTime":1689561834000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":2.96,"words":888},"filePathRelative":"posts/cpp/xmake-clangd.md","localizedDate":"July 17, 2023","excerpt":"\\n<p>尝试用 Clangd 代替 Intellisense 进行实时语法检测，但是遇到了很多问题。<br>\\n配置基础参考了 <a href=\\"https://zhuanlan.zhihu.com/p/566506467\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://zhuanlan.zhihu.com/p/566506467</a>。</p>\\n<h2>Prerequisite</h2>\\n<p>VSCode 安装 clangd 扩展。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>如果系统没有安装 clangd 它会自己下载一个到插件共享文件目录，并且设置 clangd 的路径。</p>","autoDesc":true}');export{S as comp,F as data};
