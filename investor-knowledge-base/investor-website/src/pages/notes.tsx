import React from 'react'

function Notes() {
  return (
    <div className="page notes">
      <h1>个人笔记</h1>
      
      <h2>会议记录</h2>
      <ul>
        <li>主题/时间/地点/参与者/议程</li>
        <li>讨论要点/结论/行动项</li>
        <li>SOP-20 应用：模式提取 + 知识复用</li>
      </ul>
      
      <h2>读书笔记</h2>
      <ul>
        <li>书籍信息/核心观点/模式提炼</li>
        <li>案例分析/个人思考</li>
        <li>SOP-20 应用：有目的阅读 → 提取模式 → 知识图谱 → 实战测试</li>
      </ul>
      
      <h2>行业观察</h2>
      <ul>
        <li>时间/来源/事件/影响</li>
        <li>反应/分析/待验证假设</li>
        <li>SOP-20 应用：快速记录 → 模式提炼 → 长期跟踪</li>
      </ul>
      
      <h2>笔记管理原则</h2>
      <ul>
        <li><strong>Everything is Data</strong>：所有笔记必须数字化、可检索</li>
        <li><strong>Pattern Over Detail</strong>：提取模式而非细节</li>
        <li><strong>Feedback Loop</strong>：笔记 → 实践 → 反馈 → 迭代</li>
      </ul>
    </div>
  )
}

export default Notes