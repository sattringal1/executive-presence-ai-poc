import React, { useState } from 'react';
import './App.css';

// --- Modal Component ---
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components for each Tab ---

const DashboardOverview = () => (
  <div className="tab-content">
    <div className="score-card-container">
      <div className="card">
        <h3>Overall Presence Score</h3>
        <div className="score">82/100</div>
        <div className="trend-up">↑ +4 from last week</div>
      </div>
      <div className="card">
        <h3>Communication Clarity</h3>
        <div className="score">78/100</div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Analysis of 42 emails & chats</p>
      </div>
      <div className="card">
        <h3>Strategic Framing</h3>
        <div className="score">85/100</div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Context &gt; Challenge &gt; Action</p>
      </div>
    </div>
    <div className="card">
      <h3>Recent Communication Coaching</h3>
      <div className="insight-item">
        <strong>Draft Email to Leadership:</strong> AI detected a tactical tone.
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: 'var(--text-dark)' }}>
          <em>Suggestion:</em> Elevate the message by stating the 6-12 month business impact before listing project updates.
        </p>
      </div>
      <div className="insight-item positive">
        <strong>Teams Chat with Product Team:</strong> Excellent work.
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: 'var(--text-dark)' }}>
          You successfully asked a strategic question that shifted focus from operational tasks to enterprise-forward solutions.
        </p>
      </div>
    </div>
  </div>
);

const AlignmentMap = () => (
  <div className="tab-content">
    <p style={{ color: 'var(--text-muted)', marginBottom: '25px', marginTop: 0 }}>
      Understand how your current professional focus aligns with leadership and organizational goals.
    </p>
    <div className="score-card-container">
      <div className="card" style={{ flex: 2 }}>
        <h3>Your Leadership Profile Snapshot</h3>
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <strong>Current Focus Areas:</strong>
            <ul className="profile-list">
              <li>System Architecture & Design</li>
              <li>Applied Agentic AI & GenAI</li>
              <li>Microservices Integration</li>
            </ul>
            <strong>Professional Goals:</strong>
            <ul className="profile-list">
              <li>Drive organizational AI transformation</li>
              <li>Transition to Senior Enterprise Architect</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <strong>Current Pain Points:</strong>
            <ul className="profile-list">
              <li>Bridging tactical execution with strategic vision</li>
              <li>Cross-functional alignment on API standards</li>
            </ul>
            <strong>Interests & Hobbies:</strong>
            <ul className="profile-list">
              <li>Photography & Image Composition</li>
              <li>Continuous Learning (MIT Certifications)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card" style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ border: 'none', marginBottom: 0 }}>Overall Alignment</h3>
        <div className="score" style={{ fontSize: '54px', margin: '10px 0' }}>86%</div>
        <div className="trend-up">Strongly Aligned</div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
          Based on your recent Microsoft 365 activity vs. leadership OKRs.
        </p>
      </div>
    </div>
    <div className="card">
      <h3>Alignment Picturization</h3>
      <div className="alignment-row">
        <div className="alignment-label">
          <span>Direct Leader Priorities (CTO)</span>
          <span style={{ color: 'var(--primary)' }}>92% Match</span>
        </div>
        <div className="progress-bg"><div className="progress-fill" style={{ width: '92%' }}></div></div>
        <div className="alignment-note">Strong overlap detected in "AI Transformation" discussions.</div>
      </div>
      <div className="alignment-row">
        <div className="alignment-label">
          <span>Organization Strategy (Q3 Objectives)</span>
          <span style={{ color: 'var(--primary)' }}>85% Match</span>
        </div>
        <div className="progress-bg"><div className="progress-fill" style={{ width: '85%', background: 'var(--info)' }}></div></div>
        <div className="alignment-note">Well aligned with Enterprise-Forward goals.</div>
      </div>
      <div className="alignment-row">
        <div className="alignment-label">
          <span>Upcoming Meeting Participants (Cross-Functional)</span>
          <span style={{ color: 'var(--warning)' }}>65% Match</span>
        </div>
        <div className="progress-bg"><div className="progress-fill" style={{ width: '65%', background: 'var(--warning)' }}></div></div>
        <div className="alignment-note">Caution: Participants heavily focused on "Tactical Delivery," while your profile leans "Strategic."</div>
      </div>
    </div>
  </div>
);

const MeetingPrep = () => (
  <div className="tab-content">
    <div className="card">
      <h3 style={{ color: 'var(--primary)', fontSize: '18px' }}>Upcoming: Architecture Review (2:00 PM)</h3>
      <p><strong>Stakeholder Insights (Level 3 Decision Makers)</strong></p>
      <ul className="profile-list">
        <li><strong>Sarah Jenkins (VP of Eng):</strong> Prioritizing cost-optimization. Recent town hall focused on "doing more with less."</li>
        <li><strong>David Chen (CPO):</strong> Highly focused on cross-functional alignment right now.</li>
      </ul>
      <hr style={{ border: 0, borderTop: '1px solid #E1EDF8', margin: '20px 0' }} />
      <p><strong>💡 AI Prep Brief:</strong> You have an opportunity to show future-leader potential today. Don't just list what you built; explain <em>why it matters</em>. Frame your updates around Sarah's cost-optimization goals.</p>
      <button className="btn" onClick={() => alert('Generating specific talking points...')}>Generate Talking Points</button>
    </div>
  </div>
);

const MeetingAnalysis = () => (
  <div className="tab-content">
    <div className="score-card-container">
      <div className="card">
        <h3>L.I.S.T.E.N. Score</h3>
        <div className="score">4.2/5</div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>High engagement, stayed focused.</p>
      </div>
      <div className="card">
        <h3>Talk Time</h3>
        <div className="score">22%</div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Ideal balance for a facilitator.</p>
      </div>
    </div>
    <div className="card">
      <h3>Transcript Feedback</h3>
      <div className="insight-item positive">
        <strong>Strong Authority:</strong> You summarized the team's blockers with calm authority and created immediate clarity for next steps.
      </div>
      <div className="insight-item">
        <strong>Missed Opportunity:</strong> At 14:02, you provided a status update. Next time, connect that update directly to the broader strategic goals.
      </div>
    </div>
  </div>
);

const AgendaBuilder = () => (
  <div className="tab-content">
    <div className="card">
      <h3>Draft a High-Impact Agenda</h3>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '14px' }}>Meeting Goal:</label>
      <input 
        type="text" 
        placeholder="e.g., Secure funding for new API gateway" 
        style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #E1EDF8', borderRadius: '8px', boxSizing: 'border-box' }} 
      />
      <button className="btn" onClick={() => alert('AI is structuring your agenda...')}>Auto-Generate Agenda</button>
      <hr style={{ border: 0, borderTop: '1px solid #E1EDF8', margin: '25px 0' }} />
      <h3>Request Peer Feedback</h3>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Send an AI-generated survey to participants post-meeting to assess your calm authority.</p>
      <button className="btn" style={{ background: 'var(--success)' }}>Configure Feedback Loop</button>
    </div>
  </div>
);

const AboutProduct = () => (
  <div className="tab-content">
    <div className="about-section">
      <div className="card">
        <h3 style={{ color: 'var(--gradient-start)', border: 'none' }}>The Vision</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Executive Presence AI was born from a singular vision: <span className="summary-accent">authentic leadership is not accidental; it is intentional.</span> We aim to demystify the elusive concept of "executive presence" by using intelligent automation to provide the feedback looping managers have always lacked.</p>
      </div>
      <div className="card">
        <h3 style={{ color: 'var(--gradient-start)', border: 'none' }}>The Solution</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>This product bridges the gap between everyday communication and strategic influence. By connecting to your graph API, our Agentic AI acts as a <span className="summary-accent">real-time leadership coach</span>, guiding you through communication reframing, meeting preparation, and self-assessment.</p>
      </div>
    </div>
    <div className="card" style={{ marginTop: '20px', display: 'flex', gap: '25px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
       <div style={{ background: 'var(--primary)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>SA</div>
       <div style={{ flex: 1 }}>
         <h4 style={{ margin: '0 0 5px 0', color: 'var(--gradient-start)', fontSize: '18px' }}>Subramonian Attringal</h4>
         <p style={{ fontStyle: 'italic', color: 'var(--primary)', margin: '0 0 10px 0', fontSize: '14px' }}>Senior Enterprise Architect | Engineering Leader | AI Innovator</p>
         <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>A seasoned architect of both software systems and engineering teams. Passionate about innovation at the intersection of complex cloud architecture and human dynamics, he developed Executive Presence AI to help the next generation of technical leaders find their authentic voice.</p>
       </div>
    </div>
  </div>
);

// --- Main App Component ---

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [apiToken, setApiToken] = useState('');
  const [tokenMessage, setTokenMessage] = useState('');

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Device type detection
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardOverview />;
      case 'alignment': return <AlignmentMap />;
      case 'meeting-prep': return <MeetingPrep />;
      case 'meeting-eval': return <MeetingAnalysis />;
      case 'agenda': return <AgendaBuilder />;
      case 'about': return <AboutProduct />;
      default: return <DashboardOverview />;
    }
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Top Banner */}
      <header className="top-banner">
        <div className="banner-logo">
          <div className="banner-icon">AI</div>
          <div>
            <h1>Executive Presence AI</h1>
            <p>The AI Copilot for Leadership Communication</p>
          </div>
        </div>
        <div className="banner-pills">
          <div className="pill-item">✉️ Analyze Emails & Meetings</div>
          <div className="pill-item">💡 Get Insights & Coaching</div>
          <div className="pill-item">📈 Elevate Presence</div>
        </div>
      </header>

      {/* App Layout */}
      <div className={`app-container ${isMobile ? 'mobile-layout' : isTablet ? 'tablet-layout' : 'desktop-layout'}`}>
        
        {/* Desktop Sidebar (hidden on mobile) */}
        {!isMobile && (
          <nav className="sidebar">
            <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabChange('dashboard')}>Dashboard Overview</button>
            <button className={`nav-item ${activeTab === 'alignment' ? 'active' : ''}`} onClick={() => handleTabChange('alignment')}>Alignment Map</button>
            <button className={`nav-item ${activeTab === 'meeting-prep' ? 'active' : ''}`} onClick={() => handleTabChange('meeting-prep')}>Meeting Prep Brief</button>
            <button className={`nav-item ${activeTab === 'meeting-eval' ? 'active' : ''}`} onClick={() => handleTabChange('meeting-eval')}>Meeting Analysis</button>
            <button className={`nav-item ${activeTab === 'agenda' ? 'active' : ''}`} onClick={() => handleTabChange('agenda')}>Executive Builder</button>
            <div style={{ flex: 1, minHeight: '20px' }}></div>
            <button className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabChange('about')} style={{ borderTop: '1px solid #E1EDF8', borderRadius: 0 }}>About Product</button>
          </nav>
        )}

        {/* Main Content Area */}
        <main className="main-content">
          <div className="header-top">
            {/* Desktop/Tablet: quick nav select */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <select
                  className="nav-select"
                  value={activeTab}
                  onChange={(e) => handleTabChange(e.target.value)}
                  aria-label="Quick navigation"
                >
                  <option value="dashboard">Dashboard Overview</option>
                  <option value="alignment">Alignment Map</option>
                  <option value="meeting-prep">Meeting Prep Brief</option>
                  <option value="meeting-eval">Meeting Analysis</option>
                  <option value="agenda">Executive Builder</option>
                  <option value="about">About Product</option>
                </select>
              </div>
            )}
            {isMobile && (
              <div className="mobile-header">
                <button 
                  className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <h2>Welcome back, Subbu</h2>
              </div>
            )}
            {!isMobile && <h2>Welcome back, Subbu</h2>}
            <button className="btn btn-outline" onClick={() => setShowSyncModal(true)}>Sync Graph API</button>
          </div>
          
          {/* Dynamic Render based on State */}
          {renderContent()}
          
        </main>

        {/* Mobile Menu Dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <nav className="mobile-nav">
              <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleTabChange('dashboard')}>📊 Dashboard Overview</button>
              <button className={`nav-item ${activeTab === 'alignment' ? 'active' : ''}`} onClick={() => handleTabChange('alignment')}>🎯 Alignment Map</button>
              <button className={`nav-item ${activeTab === 'meeting-prep' ? 'active' : ''}`} onClick={() => handleTabChange('meeting-prep')}>📝 Meeting Prep Brief</button>
              <button className={`nav-item ${activeTab === 'meeting-eval' ? 'active' : ''}`} onClick={() => handleTabChange('meeting-eval')}>✅ Meeting Analysis</button>
              <button className={`nav-item ${activeTab === 'agenda' ? 'active' : ''}`} onClick={() => handleTabChange('agenda')}>🗣️ Executive Builder</button>
              <button className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabChange('about')}>ℹ️ About Product</button>
            </nav>
          </div>
        )}
      </div>

      {/* Modal for Sync Graph API Feature */}
      <Modal 
        isOpen={showSyncModal} 
        onClose={() => setShowSyncModal(false)}
        title="Sync Graph API"
      >
        <div className="sync-modal-content">
          <div className="feature-status">
            <div className="status-icon">🚀</div>
            <h3>Feature Under Construction</h3>
          </div>
          <p className="feature-description">
            The <strong>Sync Graph API</strong> feature is currently under development and will be available soon.
          </p>
          <div className="feature-details">
            <h4>What This Feature Will Do:</h4>
            <ul className="feature-list">
              <li>
                <strong>Capture User API Information:</strong> Securely collect your Microsoft Graph API credentials
              </li>
              <li>
                <strong>Token Tracking:</strong> Monitor and track API token usage for audit and compliance
              </li>
              <li>
                <strong>Real-time Sync:</strong> Keep your leadership data synchronized with Microsoft 365 services
              </li>
              <li>
                <strong>Enhanced Analytics:</strong> Enable advanced AI coaching based on your communication patterns
              </li>
            </ul>
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={{ display: 'block', fontWeight: 700, marginBottom: 8 }}>Enter API Token (optional)</label>
            <input
              className="api-input"
              type="text"
              placeholder="Paste your API token here (for Models consumption)"
              value={apiToken}
              onChange={(e) => { setApiToken(e.target.value); setTokenMessage(''); }}
              aria-label="API token input"
            />
            <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center' }}>
              <button
                className="btn"
                onClick={() => {
                  // Simulate capture but keep feature flagged as under construction
                  if (apiToken && apiToken.trim().length > 0) {
                    setTokenMessage('Feature under construction — token captured locally for demo.');
                  } else {
                    setTokenMessage('Feature under construction — no token provided.');
                  }
                }}
              >Save Token</button>
              <button className="btn btn-outline" onClick={() => { setApiToken(''); setTokenMessage(''); }}>Clear</button>
            </div>
            {tokenMessage && <div className="save-note">{tokenMessage}</div>}
          </div>
          <div className="feature-timeline">
            <p className="timeline-note">
              <em>Expected Availability:</em> Coming in the next product release. We're working hard to make this seamless and secure.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;