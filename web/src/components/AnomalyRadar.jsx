import { useEffect, useState } from 'react';

export default function AnomalyRadar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 读取我们刚才放在 data 目录下的异常数据
    fetch('/data/anomalies.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load anomaly radar data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: '#00ffcc', padding: '20px', fontFamily: 'monospace' }}>LOADING ANOMALY RADAR ENGINE...</div>;
  }

  return (
    <div style={{ background: '#0a0e17', color: '#e2e8f0', padding: '24px', fontFamily: 'monospace', minHeight: '100vh' }}>
      <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#38bdf8', fontSize: '24px', margin: '0 0 4px 0', letterSpacing: '2px' }}>
            🚨 AI INVESTMENT ANOMALY RADAR
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '12px' }}>
            MULTI-DIMENSIONAL MARKET INTELLIGENCE & CHAIN REACTION DETECTOR
          </p>
        </div>
        <div style={{ background: '#1e293b', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#34d399' }}>
          SYSTEM STATUS: ONLINE (20 CORE METRICS)
        </div>
      </div>

      <h3 style={{ color: '#facc15', fontSize: '14px', letterSpacing: '1px', marginBottom: '16px' }}>
        🔥 TODAY'S TOP ANOMALIES
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data?.top_anomalies?.map((item) => (
          <div key={item.id} style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '16px', display: 'grid', gridTemplateColumns: '60px 1fr 180px', gap: '16px', alignItems: 'center' }}>
            
            {/* 序号与分数 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#64748b', fontSize: '12px' }}>{item.id}</div>
              <div style={{ color: item.score > 90 ? '#ef4444' : '#f59e0b', fontSize: '20px', fontWeight: 'bold' }}>
                {item.score}
              </div>
            </div>

            {/* 核心指标与分析 */}
            <div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 'bold' }}>{item.metric}</span>
                <span style={{ background: '#1e3a8a', color: '#93c5fd', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{item.category}</span>
                <span style={{ color: '#34d399', fontSize: '12px', fontWeight: 'bold' }}>{item.change}</span>
                <span style={{ color: '#f87171', fontSize: '12px' }}>({item.sigma})</span>
              </div>
              <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>
                {item.summary}
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '11px' }}>
                <span style={{ color: '#64748b' }}>Chain:</span>
                {item.chain.map((c, idx) => (
                  <span key={idx} style={{ background: '#1f2937', color: '#cbd5e1', padding: '1px 6px', borderRadius: '3px' }}>
                    {c} {idx < item.chain.length - 1 ? '→' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* 影响与风险 */}
            <div style={{ borderLeft: '1px solid #1f2937', paddingLeft: '16px', fontSize: '12px' }}>
              <div style={{ color: '#34d399', marginBottom: '4px' }}>
                <strong>Beneficiaries:</strong>
                <div style={{ color: '#cbd5e1' }}>{item.beneficiaries.join(', ')}</div>
              </div>
              <div style={{ color: '#f87171' }}>
                <strong>Risks:</strong>
                <div style={{ color: '#cbd5e1' }}>{item.risks.join(', ')}</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
