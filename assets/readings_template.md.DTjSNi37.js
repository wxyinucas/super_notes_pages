import{_ as a,o as i,c as n,a3 as l}from"./chunks/framework.CH_GxKL1.js";const r=JSON.parse('{"title":"读书笔记模板","description":"","frontmatter":{"title":"读书笔记模板"},"headers":[],"relativePath":"readings/template.md","filePath":"readings/template.md","lastUpdated":1781409877000}'),t={name:"readings/template.md"};function e(p,s,h,k,d,o){return i(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="读书笔记模板" tabindex="-1">读书笔记模板 <a class="header-anchor" href="#读书笔记模板" aria-label="Permalink to &quot;读书笔记模板&quot;">​</a></h1><p>这个模板适合章节笔记、主题摘录和“原文 + 批注”的并列阅读。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title: 书名或章节名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">book: 书名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">author: 作者</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 书名或章节名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 阅读线索</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这部分记录本章或本书的主问题。先写你要追踪的线索，再放摘录。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;QuoteBlock source=&quot;作者《书名》，章节或页码&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这里放原文摘录。摘录块只负责呈现材料，不承担批注职责。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/QuoteBlock&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;SplitNote&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #main&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 原文脉络</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这里写作者的论证顺序、概念关系和关键段落。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #aside&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 批注</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这里写自己的疑问、反例、联想和后续待查资料。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/SplitNote&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 参考</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 书籍、论文或网页</span></span></code></pre></div><h2 id="使用建议" tabindex="-1">使用建议 <a class="header-anchor" href="#使用建议" aria-label="Permalink to &quot;使用建议&quot;">​</a></h2><ul><li>一条笔记只追一个核心问题，避免变成全书搬运。</li><li>摘录用 <code>&lt;QuoteBlock&gt;</code>，批注用 <code>&lt;SplitNote&gt;</code> 或正文段落。</li><li><code>ReadingNote</code> 目前作为写作范式存在，不新增同名组件。</li></ul>`,5)])])}const E=a(t,[["render",e]]);export{r as __pageData,E as default};
