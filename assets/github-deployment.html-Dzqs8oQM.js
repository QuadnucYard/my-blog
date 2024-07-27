import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,a as n}from"./app-D-r_afe7.js";const a={},t=n(`<h1 id="github-部署相关-trouble-shooting" tabindex="-1"><a class="header-anchor" href="#github-部署相关-trouble-shooting"><span>GitHub 部署相关 trouble-shooting</span></a></h1><h2 id="部署失败-提示无法写入" tabindex="-1"><a class="header-anchor" href="#部署失败-提示无法写入"><span>部署失败，提示无法写入</span></a></h2><p>参考 <a href="https://zhuanlan.zhihu.com/p/598824876" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/598824876</a></p><p>需要给 write 权限</p><p>操作：Settings / Actions / General / Workflow permissions，选择 Read and write permissions。</p><h2 id="跨仓库部署失败-提示无权限" tabindex="-1"><a class="header-anchor" href="#跨仓库部署失败-提示无权限"><span>跨仓库部署失败，提示无权限</span></a></h2><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[gh-pages (root-commit) 2fcb7c2] Initial gh-pages commit</span></span>
<span class="line"><span>/usr/bin/chmod -R +rw /home/runner/work/my-blog-private/my-blog-private/src/.vuepress/dist</span></span>
<span class="line"><span>/usr/bin/rsync -q -av --checksum --progress /home/runner/work/my-blog-private/my-blog-private/src/.vuepress/dist/. github-pages-deploy-action-temp-deployment-folder --delete --exclude CNAME --exclude .ssh --exclude .git --exclude .github</span></span>
<span class="line"><span>Checking if there are files to commit…</span></span>
<span class="line"><span>/usr/bin/git add --all .</span></span>
<span class="line"><span>/usr/bin/git checkout -b github-pages-deploy-action/yvl5selpu</span></span>
<span class="line"><span>Switched to a new branch &#39;github-pages-deploy-action/yvl5selpu&#39;</span></span>
<span class="line"><span>/usr/bin/git commit -m Deploying to gh-pages from @ QuadnucYard/my-blog-private@9017cb2e03ada05bbb5720ad864587ebac41490d 🚀 --quiet --no-verify</span></span>
<span class="line"><span>Force-pushing changes...</span></span>
<span class="line"><span>/usr/bin/git push --force ***github.com/QuadnucYard/my-blog.git github-pages-deploy-action/yvl5selpu:gh-pages</span></span>
<span class="line"><span>remote: Permission to QuadnucYard/my-blog.git denied to github-actions[bot].</span></span>
<span class="line"><span>fatal: unable to access &#39;https://github.com/QuadnucYard/my-blog.git/&#39;: The requested URL returned error: 403</span></span>
<span class="line"><span>Running post deployment cleanup jobs… 🗑️</span></span>
<span class="line"><span>/usr/bin/git checkout -B github-pages-deploy-action/yvl5selpu</span></span>
<span class="line"><span>Reset branch &#39;github-pages-deploy-action/yvl5selpu&#39;</span></span>
<span class="line"><span>/usr/bin/chmod -R +rw github-pages-deploy-action-temp-deployment-folder</span></span>
<span class="line"><span>/usr/bin/git worktree remove github-pages-deploy-action-temp-deployment-folder --force</span></span>
<span class="line"><span>Error: The deploy step encountered an error: The process &#39;/usr/bin/git&#39; failed with exit code 128 ❌</span></span>
<span class="line"><span>Notice: Deployment failed! ❌</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误信息比较多，关键一条是跨仓库部署时目标仓库拒绝访问。<br> 根据 <code>JamesIves/github-pages-deploy-action</code> 的指示，在跨仓库时，需要在 <code>with</code> 中加上 <code>token</code>项来说明 PAT，其值为源码仓库的一个 secret。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署文档</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          repository-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">QuadnucYard/QuadnucYard.github.io</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          folder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">src/.vuepress/dist</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ secrets.TARGET_REPO_TOKEN }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就成功了。<br> 这里是部署到 <code>&lt;USER&gt;.github.io</code>。如果是部署到 <code>&lt;USER&gt;.github.io/&lt;REPO&gt;</code> 还需要改 vuepress 的 <code>base</code>。</p>`,10),l=[t];function p(r,o){return i(),s("div",null,l)}const c=e(a,[["render",p],["__file","github-deployment.html.vue"]]),u=JSON.parse('{"path":"/posts/github/github-deployment.html","title":"GitHub 部署相关 trouble-shooting","lang":"en-US","frontmatter":{"category":["github","vuepress"],"tag":["deployment","troubleshooting"],"isOriginal":true,"date":"2023-07-20T00:00:00.000Z","description":"GitHub 部署相关 trouble-shooting 部署失败，提示无法写入 参考 https://zhuanlan.zhihu.com/p/598824876 需要给 write 权限 操作：Settings / Actions / General / Workflow permissions，选择 Read and write permissi...","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/github/github-deployment.html"}],["meta",{"property":"og:title","content":"GitHub 部署相关 trouble-shooting"}],["meta",{"property":"og:description","content":"GitHub 部署相关 trouble-shooting 部署失败，提示无法写入 参考 https://zhuanlan.zhihu.com/p/598824876 需要给 write 权限 操作：Settings / Actions / General / Workflow permissions，选择 Read and write permissi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-20T03:17:59.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"deployment"}],["meta",{"property":"article:tag","content":"troubleshooting"}],["meta",{"property":"article:published_time","content":"2023-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-20T03:17:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub 部署相关 trouble-shooting\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-20T03:17:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[{"level":2,"title":"部署失败，提示无法写入","slug":"部署失败-提示无法写入","link":"#部署失败-提示无法写入","children":[]},{"level":2,"title":"跨仓库部署失败，提示无权限","slug":"跨仓库部署失败-提示无权限","link":"#跨仓库部署失败-提示无权限","children":[]}],"git":{"createdTime":1689823079000,"updatedTime":1689823079000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"posts/github/github-deployment.md","localizedDate":"July 20, 2023","excerpt":"\\n<h2>部署失败，提示无法写入</h2>\\n<p>参考 <a href=\\"https://zhuanlan.zhihu.com/p/598824876\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://zhuanlan.zhihu.com/p/598824876</a></p>\\n<p>需要给 write 权限</p>\\n<p>操作：Settings / Actions / General / Workflow permissions，选择 Read and write permissions。</p>\\n<h2>跨仓库部署失败，提示无权限</h2>","autoDesc":true}');export{c as comp,u as data};
