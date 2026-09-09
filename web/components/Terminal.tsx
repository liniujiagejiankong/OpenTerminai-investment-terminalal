import React, { useState, useEffect } from 'react'; // <--- 1. 确保顶部引入了这行

export default function Terminal() {
  // <--- 2. 在组件内部的最上方，加入以下状态和数据请求逻辑
  const [anomalies, setAnomalies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/OpenTerminal-investment-terminalal/data/anomalies.json')
      .then((res) => res.json())
      .then((data) => {
        setAnomalies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading anomalies:', err);
        setLoading(false);
      });
  }, []);
  // ----------------------------------------------------

  return (
    <div className="p-6 font-mono bg-black text-green-400 min-h-screen">
      <h1 className="text-xl font-bold mb-4">ANOMALY RADAR ENGINE</h1>
      
      {/* <--- 3. 渲染加载状态或数据内容 */}
      {loading ? (
        <p className="text-yellow-400">LOADING ANOMALY RADAR ENGINE...</p>
      ) : (
        <div className="space-y-2">
          <p className="text-cyan-400">>> Data loaded successfully ({anomalies.length} items found):</p>
          <pre className="bg-gray-900 p-4 rounded border border-green-800 text-xs overflow-x-auto max-h-[600px]">
            {JSON.stringify(anomalies, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
