import React from 'react'

function Home() {
  return (
    <div className="page home">
      <h1>投资人知识库</h1>
      <p>用系统架构思维构建投资认知操作系统</p>
      
      <h2>知识库架构</h2>
      <div className="architectural-diagram">
        <ul>
          <li>投资哲学（价值投资/成长投资/套利）</li>
          <li>行业研究（AI/区块链/硬件/量子计算）</li>
          <li>公司分析（财务/团队/技术/市场）</li>
          <li>决策框架（风险评估/估值模型/投后管理）</li>
          <li>学习系统（SOP-20阅读/案例库/认知校准）</li>
          <li>个人笔记（会议记录/读书笔记/行业观察）</li>
        </ul>
      </div>
      
      <h2>核心原则</h2>
      <ul>
        <li><strong>Everything is Data</strong>：所有知识必须数字化、可检索</li>
        <li><strong>Pattern Over Detail</strong>：提取模式而非细节（SOP-20）</li>
        <li><strong>Cognitive Alignment</strong>：与AI co-pilot 形成认知对齐</li>
        <li><strong>Feedback Loop</strong>：投资结果反馈 → 知识库迭代</li>
      </ul>
      
      <h2>下一步计划</h2>
      <ul>
        <li><strong>Phase 2</strong>：核心内容（投资哲学/行业研究/公司分析/决策框架/学习系统/个人笔记）</li>
        <li><strong>Phase 3</strong>：SOP-20 启动（SOP-20阅读/案例库/认知校准）</li>
        <li><strong>Phase 4</strong>：知识图谱部署（Obsidian/Roam Research）</li>
      </ul>
    </div>
  )
}

export default Home