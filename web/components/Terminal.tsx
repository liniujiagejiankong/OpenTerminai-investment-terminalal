'use client';

import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';

export default function Terminal() {
  const [anomalies, setAnomalies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 获取 Next.js 配置中的 basePath
    const { publicRuntimeConfig } = getConfig() || {};
    const basePath = publicRuntimeConfig?.basePath || '/OpenTerminal-investment-terminalal';

    // 使用 basePath 前缀加载数据
    fetch(`${basePath}/data/anomalies.json`)
      .then((res) => res.json())
      .then((data) => {
        setAnomalies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading anomalies:', err);
        // 如果上面这个路径由于环境不同没抓到，可以尝试用相对路径兜底
        fetch('./data/anomalies.json')
          .then((res) => res.json())
          .then((data) => {
            setAnomalies(data);
            setLoading(false);
          })
          .catch((e) => console.error('Fallback failed:', e));
      });
  }, []);

  return (
    <div className="p-6 font-mono bg-black text-green-400 min-h-screen">
      <h1 className="text-xl font-bold mb-4">ANOMALY RADAR ENGINE</h1>
      
      {loading ? (
        <p className="text-yellow-400">LOADING ANOMALY RADAR ENGINE...</p>
      ) : (
        <div className="space-y-2">
          <p className="text-cyan-400">&gt;&gt;&gt; Data loaded successfully ({anomalies.length} items found):</p>
          <pre className="bg-gray-900 p-4 rounded border border-green-800 text-xs overflow-x-auto max-h-[600px]">
            {JSON.stringify(anomalies, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
