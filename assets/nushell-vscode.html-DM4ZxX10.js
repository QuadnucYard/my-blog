import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,a}from"./app-BdstX_t_.js";const n="/assets/nushell-history-example-DZlnQxOs.png",t="/assets/nushell-complete-config-FVH6g4og.png",l="/assets/carapace-complete-example-CircreM0.png",h="/assets/nushell-complete-example-CDfvVA74.png",r={},p=a(`<h1 id="windows-的-nushell-配置与-vscode-集成-不说废话" tabindex="-1"><a class="header-anchor" href="#windows-的-nushell-配置与-vscode-集成-不说废话"><span>Windows 的 Nushell 配置与 VSCode 集成（不说废话）</span></a></h1><p>在 Windows 平台上，厌倦了 pwsh 动辄一两秒的启动时间？苦于没有可爱的 fish？来试试 Nushell 吧！Rust 万岁！</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Nushell 在 Windows 可能会遇到各种奇怪的问题，虽然启动快，但请谨慎使用！</p></div><h2 id="nushell-安装" tabindex="-1"><a class="header-anchor" href="#nushell-安装"><span>Nushell 安装</span></a></h2><p>按照官方指示即可，此处不赘述。</p><ul><li>仓库：<a href="https://github.com/nushell/nushell" target="_blank" rel="noopener noreferrer">https://github.com/nushell/nushell</a></li><li>文档：<a href="https://www.nushell.sh/" target="_blank" rel="noopener noreferrer">https://www.nushell.sh/</a></li><li>awesome：<a href="https://github.com/nushell/awesome-nu" target="_blank" rel="noopener noreferrer">https://github.com/nushell/awesome-nu</a></li></ul><p>官方首选 winget，但 winget 版本会稍旧。本文写作时，Nushell 0.96.0 刚发布两天，winget 最新只有 0.95.0。也可以使用 scoop。</p><p>使用 winget 时，由于是从 GitHub 下载，速度可能会特别慢。遇到这种情况可以直接从 release 处下载，然后把 <code>.msi</code> 文件复制到 <code>%TEMP%\\WinGet</code> 下对应的目录里，重新执行 <code>winget install nushell</code>，即可读取缓存立即进入安装。<br> 建议管理员模式下安装，避免安装失败。</p><p>安装成功后，重启终端，执行 <code>nu</code> 即可进入。</p><h2 id="starship-安装" tabindex="-1"><a class="header-anchor" href="#starship-安装"><span>Starship 安装</span></a></h2><p>美化 Nushell。</p><ul><li>仓库：<a href="https://github.com/starship/starship" target="_blank" rel="noopener noreferrer">https://github.com/starship/starship</a></li><li>文档：<a href="https://starship.rs/" target="_blank" rel="noopener noreferrer">https://starship.rs/</a></li></ul><p>按照上面指示即可，包括本体、Nerd Font、与终端集成。完成后可能需要重启，不然 Nerd 字体无法正常显示。</p><p>可采用预设主题，见 <a href="https://starship.rs/presets/" target="_blank" rel="noopener noreferrer">https://starship.rs/presets/</a>。</p><h2 id="vscode-集成" tabindex="-1"><a class="header-anchor" href="#vscode-集成"><span>VSCode 集成</span></a></h2><p>在 <code>settings.json</code> 里添加如下内容：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;terminal.integrated.profiles.windows&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;Nushell&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;path&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;C:/Program Files/nu/bin/nu.exe&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;terminal.integrated.defaultProfile.windows&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Nushell&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;terminal.integrated.fontFamily&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;FiraCode Nerd Font Mono&quot;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Change to your Nerd Font name</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>terminal.integrated.profiles.windows</code> 字段应该已有其他终端配置项，Nushell 的安装路径可通过 <code>which nu</code> 获取。</p><p>这样把 Nushell 作为默认终端，并启用 Nerd Font 以正常显示 Starship。</p><h2 id="使用相关" tabindex="-1"><a class="header-anchor" href="#使用相关"><span>使用相关</span></a></h2><p>快捷键：<a href="https://www.nushell.sh/book/line_editor.html" target="_blank" rel="noopener noreferrer">https://www.nushell.sh/book/line_editor.html</a><br> 和大部分 shell 基本一致。区别于 pwsh，无法通过按 F2 切换历史提示是 inline 还是 list。</p><p><a href="https://www.nushell.sh/book/line_editor.html#completion-menu" target="_blank" rel="noopener noreferrer">自动补全</a> 是一个 menu，按 Tab 触发。</p><p><a href="https://www.nushell.sh/book/line_editor.html#history-menu" target="_blank" rel="noopener noreferrer">历史补全</a> 也是一个 menu，需要按 Ctrl+R 开启，不像 pwsh 永久，它是暂时的。感觉没 pwsh 的好用。</p><figure><img src="`+n+'" alt="历史补全示例，似乎不准" tabindex="0" loading="lazy"><figcaption>历史补全示例，似乎不准</figcaption></figure><h2 id="自动补全" tabindex="-1"><a class="header-anchor" href="#自动补全"><span>自动补全</span></a></h2><p>见 awesome-nu 的 <a href="https://github.com/nushell/awesome-nu#custom-completions" target="_blank" rel="noopener noreferrer">Custom Completions</a></p><p>官方提供了大量的补全脚本：<a href="https://github.com/nushell/nu_scripts/tree/main/custom-completions" target="_blank" rel="noopener noreferrer">https://github.com/nushell/nu_scripts/tree/main/custom-completions</a></p><p>但这样使用比较麻烦，所以我们使用 carapace。</p><ul><li>官网：<a href="https://carapace.sh/" target="_blank" rel="noopener noreferrer">https://carapace.sh/</a></li><li>仓库：<a href="https://github.com/carapace-sh/carapace" target="_blank" rel="noopener noreferrer">https://github.com/carapace-sh/carapace</a></li><li>使用文档：<a href="https://carapace-sh.github.io/carapace-bin/carapace-bin.html" target="_blank" rel="noopener noreferrer">https://carapace-sh.github.io/carapace-bin/carapace-bin.html</a></li></ul><p>直接按照 carapace 的指示做就行了，不需要修改 <code>config.nu</code> 里自动补全相关设置。<br> 配置文件路径可通过 <code>$nu.config-path</code> 获取，不一定在指南里的 <code>.config</code> 下。</p><p>然后重开终端就可以体验自动补全了。下面检查一下。</p><figure><img src="'+t+'" alt="自动补全相关配置" tabindex="0" loading="lazy"><figcaption>自动补全相关配置</figcaption></figure><p>补全的原理是调用一个命令：</p><figure><img src="'+l+'" alt="调用 carapace 获取补全结果" tabindex="0" loading="lazy"><figcaption>调用 carapace 获取补全结果</figcaption></figure><p>自动补全使用感觉挺卡的，不如内联补全实用。</p><figure><img src="'+h+`" alt="git 补全示例" tabindex="0" loading="lazy"><figcaption>git 补全示例</figcaption></figure><p>一些样式可以在 <a href="https://carapace-sh.github.io/carapace-bin/style.html" target="_blank" rel="noopener noreferrer">https://carapace-sh.github.io/carapace-bin/style.html</a> 里调。</p><p>顺带一提，pwsh 的自动补全可以类似地集成。<a href="https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.4#profile-types-and-locations" target="_blank" rel="noopener noreferrer">配置文件路径以 MS 官方为准</a></p><h2 id="重要配置" tabindex="-1"><a class="header-anchor" href="#重要配置"><span>重要配置</span></a></h2><p>这部分涉及体验优化。<br> 笔者暂时没有在官网找到完整配置项的解释，但好在 <code>config.nu</code> 里有详细注释可帮助配置。</p><h3 id="历史" tabindex="-1"><a class="header-anchor" href="#历史"><span>历史</span></a></h3><p>这里需要解决一个头疼的问题：为什么我的历史记录会在多个打开的终端间共享？<br> 这个很讨厌，因为会经常在同一个终端往上切换历史，如果历史串了不仅引入无关项，还容易导致误操作。<br> 甚至 GPT 都不知道如何解决这个问题，但好在它提示我看 history 相关配置。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">❯</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $env</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.config.history</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">╭───────────────┬───────────╮</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> max_size</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      │</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100000</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    │</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sync_on_enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> │</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      │</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file_format</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   │</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> plaintext</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> │</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">│</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> isolation</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     │</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     │</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">╰───────────────┴───────────╯</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体配置项：</p><div class="language-nu line-numbers-mode" data-highlighter="shiki" data-ext="nu" data-title="nu" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    max_size</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100_000</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # Session has to be reloaded for this to take effect</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    sync_on_enter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # Enable to share history between multiple sessions, else you have to close the session to write history to file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    file_format</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;plaintext&quot;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # &quot;sqlite&quot; or &quot;plaintext&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # only available with sqlite file_format. true enables history isolation, false disables it. true will allow the history to be isolated to the current session using up/down arrows. false will allow the history to be shared across all sessions.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为最大程度地隔离，把两个 bool 都置反。</p><div class="language-nu line-numbers-mode" data-highlighter="shiki" data-ext="nu" data-title="nu" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$env</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">.config.history.sync_on_enter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$env</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">.config.history.isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>但实际上，如果 <code>sync_on_enter</code> 设为 <code>false</code>，就会导致直接就不写历史了，所以还是保留 <code>true</code> 吧。</p><div class="language-nu line-numbers-mode" data-highlighter="shiki" data-ext="nu" data-title="nu" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$env</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">.config.history.isolation</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="时间显示" tabindex="-1"><a class="header-anchor" href="#时间显示"><span>时间显示</span></a></h3><p>配置项为 <code>datetime_format</code>，默认为空。</p><p>默认是显示的，但安装 starship 后被覆盖了，默认是不显示的。</p><h2 id="相关问题" tabindex="-1"><a class="header-anchor" href="#相关问题"><span>相关问题</span></a></h2><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>这是一个致命的问题，导致部分运行代码的插件无法正常使用！</p></div><p>在 VSCode 里运行 python 脚本或其他，会遇到 <code>can&#39;t open file</code> 之类的问题。Nushell 并非不支持反斜杠，而是因为路径被引号包住（路径里有空格时需要这样做），这样里面的路径反斜杠就成了转义符，使得路径错误。</p><p>如果是自己来跑程序，可以把双引号改成单引号，这样就不会视为转义。但这命令是插件生成的……<br> 暂未找到解决方法。</p>`,57),o=[p];function d(c,k){return e(),i("div",null,o)}const m=s(r,[["render",d],["__file","nushell-vscode.html.vue"]]),b=JSON.parse('{"path":"/posts/utility/nushell-vscode.html","title":"Windows 的 Nushell 配置与 VSCode 集成（不说废话）","lang":"en-US","frontmatter":{"category":["utility"],"tag":["nushell","terminal","vscode"],"isOriginal":true,"date":"2024-07-26T00:00:00.000Z","description":"Windows 的 Nushell 配置与 VSCode 集成（不说废话） 在 Windows 平台上，厌倦了 pwsh 动辄一两秒的启动时间？苦于没有可爱的 fish？来试试 Nushell 吧！Rust 万岁！ Warning Nushell 在 Windows 可能会遇到各种奇怪的问题，虽然启动快，但请谨慎使用！ Nushell 安装 按照官方指...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/utility/nushell-vscode.html"}],["meta",{"property":"og:title","content":"Windows 的 Nushell 配置与 VSCode 集成（不说废话）"}],["meta",{"property":"og:description","content":"Windows 的 Nushell 配置与 VSCode 集成（不说废话） 在 Windows 平台上，厌倦了 pwsh 动辄一两秒的启动时间？苦于没有可爱的 fish？来试试 Nushell 吧！Rust 万岁！ Warning Nushell 在 Windows 可能会遇到各种奇怪的问题，虽然启动快，但请谨慎使用！ Nushell 安装 按照官方指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-08T04:23:51.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"nushell"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"vscode"}],["meta",{"property":"article:published_time","content":"2024-07-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-08T04:23:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows 的 Nushell 配置与 VSCode 集成（不说废话）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-08T04:23:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[{"level":2,"title":"Nushell 安装","slug":"nushell-安装","link":"#nushell-安装","children":[]},{"level":2,"title":"Starship 安装","slug":"starship-安装","link":"#starship-安装","children":[]},{"level":2,"title":"VSCode 集成","slug":"vscode-集成","link":"#vscode-集成","children":[]},{"level":2,"title":"使用相关","slug":"使用相关","link":"#使用相关","children":[]},{"level":2,"title":"自动补全","slug":"自动补全","link":"#自动补全","children":[]},{"level":2,"title":"重要配置","slug":"重要配置","link":"#重要配置","children":[{"level":3,"title":"历史","slug":"历史","link":"#历史","children":[]},{"level":3,"title":"时间显示","slug":"时间显示","link":"#时间显示","children":[]}]},{"level":2,"title":"相关问题","slug":"相关问题","link":"#相关问题","children":[{"level":3,"title":"路径","slug":"路径","link":"#路径","children":[]}]}],"git":{"createdTime":1722005664000,"updatedTime":1723091031000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":4}]},"readingTime":{"minutes":4.16,"words":1248},"filePathRelative":"posts/utility/nushell-vscode.md","localizedDate":"July 26, 2024","excerpt":"\\n<p>在 Windows 平台上，厌倦了 pwsh 动辄一两秒的启动时间？苦于没有可爱的 fish？来试试 Nushell 吧！Rust 万岁！</p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Warning</p>\\n<p>Nushell 在 Windows 可能会遇到各种奇怪的问题，虽然启动快，但请谨慎使用！</p>\\n</div>\\n<h2>Nushell 安装</h2>\\n<p>按照官方指示即可，此处不赘述。</p>\\n<ul>\\n<li>仓库：<a href=\\"https://github.com/nushell/nushell\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/nushell/nushell</a></li>\\n<li>文档：<a href=\\"https://www.nushell.sh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nushell.sh/</a></li>\\n<li>awesome：<a href=\\"https://github.com/nushell/awesome-nu\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/nushell/awesome-nu</a></li>\\n</ul>","autoDesc":true}');export{m as comp,b as data};