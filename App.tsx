import { useState } from 'react';
import { 
  Sun, Camera, ShieldAlert, CheckCircle2, Activity, Bell, AlertTriangle, 
  ShieldCheck, Lock, Unlock, Signal, Zap, Mail, Key, ArrowRight, Check, 
  Brain, Play, HardDrive, Phone, Users, Shield, Mic, Volume2, Lightbulb, 
  Eye, EyeOff, FileText, Calendar, Clock, ChevronLeft, Download, TrendingDown,
  Car, Dog
} from 'lucide-react';

export default function App() {
  const [appFlow, setAppFlow] = useState('welcome'); 
  const [activeTab, setActiveTab] = useState('home');
  const [isArmed, setIsArmed] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); 
  const [showAuditLog, setShowAuditLog] = useState(false); 
  
  const [battery] = useState(95);
  const [solarWatts] = useState(18.5);
  const [systemMode, setSystemMode] = useState('Healthy'); 
  const [isPanicActive, setIsPanicActive] = useState(false);
  const [powerState, setPowerState] = useState('Active Detection');

  // NEW: AI Scenario Simulator State
  const [aiScenario, setAiScenario] = useState('Dog');
  
  const handleAICycle = () => {
    if (aiScenario === 'Dog') setAiScenario('Vehicle');
    else if (aiScenario === 'Vehicle') setAiScenario('Unknown Person');
    else setAiScenario('Dog');
  };

  const triggerPanic = () => {
    setIsPanicActive(true);
    setTimeout(() => {
      setIsPanicActive(false);
      alert('Panic alert sent to 4-Tier Emergency Chain. Siren activated.');
    }, 3000);
  };

  // --- STEP 1: WELCOME ---
  if (appFlow === 'welcome') {
    return (
      <div className="main-content" style={{ justifyContent: 'center', minHeight: '800px', textAlign: 'center' }}>
        <Sun size={80} color="#FBBF24" style={{ marginBottom: '24px' }} />
        <h1 style={{ margin: 0, fontSize: '28px', color: '#FBBF24' }}>Sentinel Solar</h1>
        <p style={{ margin: '16px 0 48px 0', color: '#94a3b8', fontSize: '16px', lineHeight: '1.5' }}>
          Off-grid solar security.<br/>No Wi-Fi. No Wires. No Subscriptions.
        </p>
        <button onClick={() => setAppFlow('auth')} style={{ width: '100%', padding: '16px', background: '#FBBF24', color: '#0f172a', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    );
  }

  // --- STEP 2: AUTHENTICATION ---
  if (appFlow === 'auth') {
    return (
      <div className="main-content" style={{ justifyContent: 'center', minHeight: '800px' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px' }}>Create Account</h2>
        <div className="card" style={{ textAlign: 'left' }}>
          <label style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px', display: 'block' }}>Email Address</label>
          <div style={{ display: 'flex', alignItems: 'center', background: '#0f172a', padding: '14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid #334155' }}>
            <Mail size={18} color="#64748b" style={{ marginRight: '12px' }} />
            <input type="email" placeholder="user@sentinelsolar.com" style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '14px' }} />
          </div>

          <label style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px', display: 'block' }}>Password</label>
          <div style={{ display: 'flex', alignItems: 'center', background: '#0f172a', padding: '14px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #334155' }}>
            <Key size={18} color="#64748b" style={{ marginRight: '12px' }} />
            <input type={showPassword ? "text" : "password"} placeholder="••••••••••••" style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '14px' }} />
            <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
               {showPassword ? <EyeOff size={18} color="#64748b" /> : <Eye size={18} color="#64748b" />}
            </div>
          </div>

          <button onClick={() => setAppFlow('setup2')} style={{ width: '100%', padding: '16px', background: '#FBBF24', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Create Account
          </button>
        </div>
      </div>
    );
  }

  // --- STEP 3: QR PAIRING ---
  if (appFlow === 'setup2') {
    return (
      <div className="main-content" style={{ justifyContent: 'center', minHeight: '800px' }}>
        <div className="card" style={{ textAlign: 'center', padding: '32px' }}>
          <ShieldCheck size={56} color="#4ade80" style={{ marginBottom: '16px' }} />
          <h2 style={{ margin: '0 0 8px 0' }}>Hardware QR Pairing</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '32px' }}>Scan physical box to bind device ID: SS-2049</p>
          <div style={{ width: '100%', height: '200px', background: '#0f172a', borderRadius: '16px', border: '2px dashed #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
            <Camera size={48} color="#334155" />
          </div>
          <button onClick={() => setAppFlow('setup3')} style={{ width: '100%', padding: '16px', background: '#FBBF24', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Simulate 4G Handshake & Pair
          </button>
        </div>
      </div>
    );
  }

  // --- STEP 4: ESCALATION CHAIN ---
  if (appFlow === 'setup3') {
    return (
      <div className="main-content" style={{ justifyContent: 'center', minHeight: '800px' }}>
        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', textAlign: 'center' }}>4-Tier Emergency Chain</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>Sequential notification routing</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0f172a', padding: '16px', borderRadius: '12px' }}>
              <Shield size={24} color="#FBBF24" />
              <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Homeowner</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0f172a', padding: '16px', borderRadius: '12px' }}>
              <Users size={24} color="#94a3b8" />
              <span style={{ fontSize: '15px', color: '#94a3b8' }}>Family</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0f172a', padding: '16px', borderRadius: '12px' }}>
              <Users size={24} color="#94a3b8" />
              <span style={{ fontSize: '15px', color: '#94a3b8' }}>Trusted Neighbor</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#0f172a', padding: '16px', borderRadius: '12px' }}>
              <Phone size={24} color="#94a3b8" />
              <span style={{ fontSize: '15px', color: '#94a3b8' }}>Security/Police</span>
            </div>
          </div>

          <button onClick={() => setAppFlow('setup4')} style={{ width: '100%', padding: '16px', background: '#FBBF24', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Confirm Contacts
          </button>
        </div>
      </div>
    );
  }

  // --- STEP 5: ALERTS ---
  if (appFlow === 'setup4') {
    return (
      <div className="main-content" style={{ justifyContent: 'center', minHeight: '800px' }}>
        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '20px', textAlign: 'center' }}>Alert Preferences</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>Multi-Channel Alert Config</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #334155' }}>
              <span style={{ fontSize: '15px' }}>Push Notifications</span>
              <CheckCircle2 size={24} color="#4ade80" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #334155' }}>
              <span style={{ fontSize: '15px' }}>SMS Alerts</span>
              <CheckCircle2 size={24} color="#4ade80" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px' }}>Automated Voice Calls</span>
              <CheckCircle2 size={24} color="#4ade80" />
            </div>
          </div>
          <button onClick={() => setAppFlow('main')} style={{ width: '100%', padding: '16px', background: '#FBBF24', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
            Complete Setup & Arm System
          </button>
        </div>
      </div>
    );
  }

  // --- AUDIT LOG SCREEN ---
  if (showAuditLog) {
    return (
      <div className="main-content" style={{ paddingBottom: '90px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <button onClick={() => setShowAuditLog(false)} style={{ background: 'transparent', border: 'none', color: '#F8FAFC', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ChevronLeft size={24} /> Back
          </button>
          <h2 style={{ margin: 0, fontSize: '20px' }}>Audit Log Trail</h2>
        </div>

        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: 0, marginBottom: '16px' }}>Chronological history of all system events</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card" style={{ padding: '16px', borderLeft: '4px solid #4ade80' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: '#4ade80' }}>System Initialized and Armed</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Account Created by User</p>
          </div>

          <div className="card" style={{ padding: '16px', borderLeft: '4px solid #60a5fa' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: '#60a5fa' }}>Device Paired (ID: SS-2049)</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>via QR Code & 4G Handshake</p>
          </div>

          <div className="card" style={{ padding: '16px', borderLeft: '4px solid #60a5fa' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: '#60a5fa' }}>Emergency Contacts Updated</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>4-Tier Escalation Chain Configured</p>
          </div>

          <div className="card" style={{ padding: '16px', borderLeft: '4px solid #60a5fa' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: '#60a5fa' }}>Alert Preferences Configured</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Push, SMS, and Voice Calls Enabled</p>
          </div>

          <div className="card" style={{ padding: '16px', borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: '#ef4444' }}>Motion Detected (AI Filtered)</h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Known Person - No alert dispatched</p>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  return (
    <>
      <header className="header" style={{ borderBottom: isPanicActive ? '2px solid #ef4444' : '1px solid #334155' }}>
        <div className="brand">
          <div style={{ background: '#FBBF24', borderRadius: '8px', padding: '6px' }}>
            <Sun color="#0f172a" size={20} />
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Sentinel Solar</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>ID: SS-2049 • 4G LTE</div>
          </div>
        </div>
        <div className="status">
          <Signal size={16} color="#4ade80" />
          <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: 'bold', marginLeft: '4px' }}>Strong</span>
        </div>
      </header>

      <div style={{ position: 'absolute', top: '16px', right: '100px', zIndex: 10 }}>
         <button onClick={() => setShowAuditLog(true)} style={{ background: '#1e293b', border: '1px solid #334155', color: '#FBBF24', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            <Shield size={14} /> AUDIT LOG
         </button>
      </div>

      <main className="main-content" style={{ paddingBottom: '90px' }}>
        
        {activeTab === 'home' && (
          <>
            <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '12px', borderRadius: '12px' }}>
                    <ShieldCheck size={32} color="#4ade80" />
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{isArmed ? 'System Armed' : 'System Disarmed'}</h2>
                    <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Perimeter active & monitoring</p>
                  </div>
                </div>
              </div>
              <div className="grid-buttons" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <button onClick={() => setIsArmed(true)} style={{ background: isArmed ? '#10b981' : '#1e293b', color: isArmed ? 'white' : '#94a3b8', padding: '14px', borderRadius: '8px', border: 'none', display: 'flex', justifyContent: 'center', gap: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                  <Lock size={18} /> Arm
                </button>
                <button onClick={() => setIsArmed(false)} style={{ background: !isArmed ? '#ef4444' : '#1e293b', color: !isArmed ? 'white' : '#94a3b8', padding: '14px', borderRadius: '8px', border: 'none', display: 'flex', justifyContent: 'center', gap: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                  <Unlock size={18} /> Disarm
                </button>
              </div>
            </div>

            <div className="card" onClick={() => setPowerState(powerState === 'Active Detection' ? 'Deep Sleep (≤10mA)' : 'Active Detection')} style={{ padding: '16px', cursor: 'pointer' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} color="#FBBF24" /> Off-Grid Power (Solar)
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Solar Input</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#4ade80' }}>+{solarWatts} W</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Battery</p>
                  <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#FBBF24' }}>{battery}%</p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>Power State</p>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: '#60a5fa' }}>{powerState}</p>
                </div>
              </div>
            </div>

            {/* INTERACTIVE AI THREAT ASSESSMENT */}
            <div className="card" style={{ padding: '16px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Brain size={18} color="#FBBF24" /> AI Threat Assessment
                </span>
                <button onClick={handleAICycle} style={{ background: '#FBBF24', color: '#0f172a', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  SIMULATE NEXT
                </button>
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  {aiScenario === 'Dog' && (
                    <>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}><Dog size={16}/> Dog Approaching</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>On-device AI classification: Animal</p>
                    </>
                  )}
                  {aiScenario === 'Vehicle' && (
                    <>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}><Car size={16}/> Vehicle Approaching</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>On-device AI classification: License Plate ABC-1234</p>
                    </>
                  )}
                  {aiScenario === 'Unknown Person' && (
                    <>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={16}/> Unknown Person</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>On-device AI classification: Intruder</p>
                    </>
                  )}
                </div>
                
                <span style={{ fontSize: '11px', background: aiScenario === 'Unknown Person' ? 'rgba(239,68,68,0.1)' : 'rgba(74,222,128,0.1)', color: aiScenario === 'Unknown Person' ? '#ef4444' : '#4ade80', padding: '6px 10px', borderRadius: '12px', fontWeight: 'bold', textAlign: 'center' }}>
                  {aiScenario === 'Unknown Person' ? 'ALERT DISPATCHED' : 'FALSE ALARM PREVENTED'}
                </span>
              </div>
            </div>

            <div className="card" style={{ padding: '16px', background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(30,41,59,1) 100%)', borderLeft: '4px solid #FBBF24' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <TrendingDown size={24} color="#FBBF24" />
                 <div>
                    <h3 style={{ margin: 0, fontSize: '14px', color: '#FBBF24' }}>Zero Monthly Fees</h3>
                 </div>
              </div>
            </div>

            <div className="card" style={{ padding: '16px' }}>
               <h3 style={{ margin: '0 0 12px 0', fontSize: '15px' }}>Active Deterrents</h3>
               <div className="grid-buttons" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <button onClick={() => alert('Siren Triggered')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px', background: '#0f172a', borderRadius: '8px', border: 'none', color: 'white', cursor: 'pointer' }}>
                     <ShieldAlert size={20} color="#ef4444" />
                     <span style={{ fontSize: '11px' }}>Siren</span>
                  </button>
                  <button onClick={() => alert('Floodlights On')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px', background: '#0f172a', borderRadius: '8px', border: 'none', color: 'white', cursor: 'pointer' }}>
                     <Lightbulb size={20} color="#FBBF24" />
                     <span style={{ fontSize: '11px' }}>Lights</span>
                  </button>
                  <button onClick={() => alert('Playing Dog Bark')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px', background: '#0f172a', borderRadius: '8px', border: 'none', color: 'white', cursor: 'pointer' }}>
                     <Volume2 size={20} color="#60a5fa" />
                     <span style={{ fontSize: '11px' }}>Dog Bark</span>
                  </button>
               </div>
            </div>

            <button onClick={triggerPanic} style={{ width: '100%', padding: '16px', background: isPanicActive ? '#fca5a5' : '#ef4444', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)', transition: 'all 0.2s', transform: isPanicActive ? 'scale(0.98)' : 'scale(1)' }}>
              <ShieldAlert size={22} style={{ animation: isPanicActive ? 'shake 0.5s infinite' : 'none' }} /> 
              {isPanicActive ? 'SIREN ACTIVE...' : 'PANIC BUTTON (120DB SIREN)'}
            </button>
          </>
        )}

        {activeTab === 'camera' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {showCalendar ? (
              <div className="card" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <button onClick={() => setShowCalendar(false)} style={{ background: 'transparent', border: 'none', color: '#F8FAFC', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <ChevronLeft size={20} /> Back
                  </button>
                  <h2 style={{ margin: 0, fontSize: '18px' }}>Recordings Calendar</h2>
                </div>

                <div style={{ background: '#0f172a', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: '#94a3b8', fontSize: '12px', fontWeight: 'bold' }}>
                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(day => (
                      <div key={day} style={{ padding: '8px 0', textAlign: 'center', background: day === 24 ? '#FBBF24' : (day < 24 ? '#1e293b' : 'transparent'), color: day === 24 ? '#0f172a' : (day < 24 ? '#F8FAFC' : '#475569'), borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: day <= 24 ? 'pointer' : 'default' }}>
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#94a3b8' }}>Clips for Oct 24, 2026</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: '#1e293b', padding: '8px', borderRadius: '6px' }}><Clock size={16} color="#FBBF24" /></div>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>10:30 AM</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>Motion Detected</div>
                      </div>
                    </div>
                    <button onClick={() => alert('Playing video...')} style={{ background: '#FBBF24', color: '#0f172a', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Play size={12} /> Play
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: '#1e293b', padding: '8px', borderRadius: '6px' }}><Clock size={16} color="#FBBF24" /></div>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>08:14 AM - Vehicle Detected</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>AI Extract: <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>ABC-1234</span></div>
                      </div>
                    </div>
                    <button onClick={() => alert('Playing video...')} style={{ background: '#FBBF24', color: '#0f172a', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Play size={12} /> Play
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => alert('Downloading entire day to phone storage...')} 
                  style={{ width: '100%', marginTop: '20px', padding: '12px', background: 'rgba(251, 191, 36, 0.1)', color: '#FBBF24', border: '1px solid #FBBF24', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <Download size={16} /> Save All Oct 24 Footage to Phone
                </button>
              </div>
            ) : (
              <>
                <div style={{ background: 'black', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', position: 'relative', border: '1px solid #334155' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#64748b' }}>
                      <Camera size={48} style={{ marginBottom: '12px' }} />
                      <span style={{ fontSize: '13px' }}>ENCRYPTED 4G LIVE FEED</span>
                   </div>
                </div>

                <div className="grid-buttons" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <button onClick={() => alert('Push-to-Talk Active')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '14px', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', color: 'white', cursor: 'pointer' }}>
                       <Mic size={18} color="#FBBF24" /> Push-to-Talk
                    </button>
                    <button onClick={() => setShowCalendar(true)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '14px', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', color: 'white', cursor: 'pointer' }}>
                       <Calendar size={18} color="#60a5fa" /> Calendar
                    </button>
                </div>

                <div className="card" style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Play size={18} color="#FBBF24" /> Recent Local Clips
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                         <FileText size={16} color="#FBBF24" />
                         <div>
                            <div>Clip_Oct24_1030.mp4</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>10:30 AM • 10s Video</div>
                         </div>
                      </div>
                      <button onClick={() => alert('Playing video from SD card...')} style={{ background: '#334155', border: 'none', color: 'white', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>
                         Play
                      </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                         <FileText size={16} color="#FBBF24" />
                         <div>
                            <div>Clip_Oct24_0814.mp4</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>08:14 AM • AI Extract: <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>ABC-1234</span></div>
                         </div>
                      </div>
                      <button onClick={() => alert('Playing video from SD card...')} style={{ background: '#334155', border: 'none', color: 'white', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>
                         Play
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => alert('Downloading footage from ESP32 to phone storage...')} 
                    style={{ width: '100%', marginTop: '16px', padding: '12px', background: 'rgba(251, 191, 36, 0.1)', color: '#FBBF24', border: '1px solid #FBBF24', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    <HardDrive size={16} /> Save All Footage to Phone
                  </button>

                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>
                      <span>MicroSD Storage</span>
                      <span>4.2 GB / 8 GB</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: '#334155', borderRadius: '5px' }}>
                      <div style={{ width: '52%', height: '100%', background: '#FBBF24', borderRadius: '5px' }}></div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>Recent Alerts</h2>
            
            <div className="card" style={{ padding: '16px', borderLeft: '4px solid #4ade80' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', color: '#4ade80' }}>Notice</h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>10:45 AM</span>
               </div>
               <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#cbd5e1' }}>AI Filtered: Known person arrived home.</p>
            </div>

            <div className="card" style={{ padding: '16px', borderLeft: '4px solid #f87171' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', color: '#f87171' }}>Vehicle Detected</h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>08:14 AM</span>
               </div>
               <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#cbd5e1' }}>Vehicle at driveway. Escalated to Security.</p>
               
               <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(96, 165, 250, 0.1)', border: '1px solid #60a5fa', padding: '4px 8px', borderRadius: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#60a5fa', fontWeight: 'bold', letterSpacing: '1px' }}>LICENSE PLATE: ABC-1234</span>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>System Health</h2>
            
            <div className="card" style={{ padding: '16px', borderLeft: systemMode === 'Critical' ? '4px solid #ef4444' : systemMode === 'Warning' ? '4px solid #FBBF24' : '4px solid #4ade80' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', display: 'flex', justifyContent: 'space-between' }}>
                 <span>Component Analysis</span>
                 <span style={{ color: systemMode === 'Critical' ? '#ef4444' : systemMode === 'Warning' ? '#FBBF24' : '#4ade80' }}>{systemMode.toUpperCase()}</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                 <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <Zap size={16} color="#FBBF24"/> Power Source (Solar)
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                       {systemMode === 'Healthy' ? `Solar panel charging normally. Battery at ${battery}%.` : 
                        systemMode === 'Warning' ? 'Solar output low. Panel may be dirty or shaded. Battery at 40%.' : 
                        'Battery critically low. System will shut down in 2 hours.'}
                    </p>
                 </div>
                 <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <Signal size={16} color="#4ade80"/> Connectivity (4G LTE)
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                       Cellular signal strong. Alerts will send immediately.
                    </p>
                 </div>
                 <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <Camera size={16} color="#60a5fa"/> Sensors (PIR & Optical)
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                       All 4 motion sensors and camera online.
                    </p>
                 </div>
                 <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <ShieldAlert size={16} color="#ef4444"/> Deterrents
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                       Siren, floodlights, and speaker ready.
                    </p>
                 </div>
              </div>

              <button onClick={() => setSystemMode(systemMode === 'Healthy' ? 'Warning' : systemMode === 'Warning' ? 'Critical' : 'Healthy')} style={{ width: '100%', padding: '12px', background: '#1e293b', color: '#F8FAFC', border: '1px solid #334155', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={16} color="#FBBF24" /> Simulate Component Failure
              </button>
            </div>

            <div className="card" style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={18} color="#FBBF24" /> 24h Energy Trends
              </h3>
              
              <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 8px', background: '#0f172a', borderRadius: '8px', paddingBottom: '8px', paddingTop: '8px' }}>
                {[30, 45, 80, 95, 100, 85, 60, 40, 20, 10].map((h, i) => (
                  <div key={i} style={{ width: '7%', height: `${h}%`, background: h > 70 ? '#FBBF24' : h > 40 ? '#60a5fa' : '#334155', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                     {h === 100 && <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: '#FBBF24', fontWeight: 'bold' }}>PEAK</div>}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '12px' }}>
                <span>6AM (Night)</span><span>12PM (Day)</span><span>6PM (Dusk)</span><span>12AM (Night)</span>
              </div>
            </div>
          </div>
        )}

      </main>

      <nav className="bottom-nav">
        <button onClick={() => {setActiveTab('home'); setShowCalendar(false);}} className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}>
          <Sun size={22} /> <span>Home</span>
        </button>
        <button onClick={() => setActiveTab('camera')} className={`nav-btn ${activeTab === 'camera' ? 'active' : ''}`}>
          <Camera size={22} /> <span>Camera</span>
        </button>
        <button onClick={() => {setActiveTab('alerts'); setShowCalendar(false);}} className={`nav-btn ${activeTab === 'alerts' ? 'active' : ''}`}>
          <Bell size={22} /> <span>Alerts</span>
        </button>
        <button onClick={() => {setActiveTab('system'); setShowCalendar(false);}} className={`nav-btn ${activeTab === 'system' ? 'active' : ''}`}>
          <Activity size={22} /> <span>Health</span>
        </button>
      </nav>
    </>
  );
}