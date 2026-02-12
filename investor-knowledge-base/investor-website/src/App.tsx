import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Philosophy from './pages/philosophy'
import Industry from './pages/industry'
import Company from './pages/company'
import Decision from './pages/decision'
import Learning from './pages/learning'
import Notes from './pages/notes'
import NotFound from './pages/not-found'

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <Link to="/" className="brand">
          投资人知识库
        </Link>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/philosophy">投资哲学</Link></li>
          <li><Link to="/industry">行业研究</Link></li>
          <li><Link to="/company">公司分析</Link></li>
          <li><Link to="/decision">决策框架</Link></li>
          <li><Link to="/learning">学习系统</Link></li>
          <li><Link to="/notes">个人笔记</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/company" element={<Company />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App