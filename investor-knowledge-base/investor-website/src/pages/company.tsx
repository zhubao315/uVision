import React from 'react'

function Company() {
  return (
    <div className="page company">
      <h1>公司分析</h1>
      
      <h2>财务分析</h2>
      <ul>
        <li><strong>盈利能力</strong>：ROE/ROIC/毛利率/净利率</li>
        <li><strong>现金流分析</strong>：CFO/FCF/自由现金流转化率</li>
        <li><strong>负债分析</strong>：资产负债率/净负债/利息覆盖率</li>
      </ul>
      
      <h2>团队分析</h2>
      <ul>
        <li><strong>管理层能力</strong>：行业经验/执行力/战略视野</li>
        <li><strong>公司治理</strong>：董事会独立性/股东权利/激励机制</li>
      </ul>
      
      <h2>技术分析</h2>
      <ul>
        <li><strong>技术壁垒</strong>：专利数量/研发投入/研发团队</li>
        <li><strong>护城河</strong>：品牌/网络/规模/转换成本</li>
      </ul>
      
      <h2>市场分析</h2>
      <ul>
        <li><strong>市场规模</strong>：TAM/SAM/SOM/渗透率</li>
        <li><strong>竞争格局</strong>：市场份额/竞争壁垒/替代威胁</li>
      </ul>
      
      <h2>分析框架</h2>
      <ol>
        <li>基础信息（公司简介/业务模式/股权结构）</li>
        <li>财务分析（收入/利润/现金流/负债）</li>
        <li>团队分析（管理层/治理结构/激励机制）</li>
        <li>技术分析（壁垒/护城河/研发投入）</li>
        <li>市场分析（规模/份额/竞争/替代）</li>
        <li>投资价值总结（风险/回报/估值）</li>
      </ol>
    </div>
  )
}

export default Company