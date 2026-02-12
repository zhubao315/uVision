import React from 'react'

function Decision() {
  return (
    <div className="page decision">
      <h1>决策框架</h1>
      
      <h2>风险评估</h2>
      <ul>
        <li><strong>风险类型</strong>：技术/市场/运营/财务/政策</li>
        <li><strong>风险矩阵</strong>：可能性 × 影响程度</li>
        <li><strong>风险缓解</strong>：分散化/对冲/止损/压力测试</li>
      </ul>
      
      <h2>估值模型</h2>
      <ul>
        <li><strong>DCF</strong>：现金流折现（WACC/终值增长率）</li>
        <li><strong>相对估值</strong>：PE/PB/PS/EV/EBITDA</li>
        <li><strong>期权定价</strong>：Black-Scholes（适用于期权/可转债）</li>
      </ul>
      
      <h2>投后管理</h2>
      <ul>
        <li><strong>KPI监控</strong>：财务/运营/战略指标</li>
        <li><strong>战略支持</strong>：资源对接/人才引入/战略建议</li>
        <li><strong>退出规划</strong>：IPO/并购/回购/清算</li>
      </ul>
      
      <h2>决策流程</h2>
      <ol>
        <li>决策启动（机会识别/初步尽调）</li>
        <li>尽职调查（财务/法律/业务尽调）</li>
        <li>投资决策（投资委员会审批）</li>
        <li>投资执行（SPA/SHA签署/资金拨付）</li>
        <li>持续跟踪（季度复盘/风险预警）</li>
        <li>退出执行（IPO/并购/二级市场）</li>
      </ol>
    </div>
  )
}

export default Decision