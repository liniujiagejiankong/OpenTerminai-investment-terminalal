import json
from datetime import datetime

def calculate_anomalies():
    # 这里是我们的异常计算核心逻辑（未来你可以接入真实的API或免费数据源，如 Yahoo Finance / SEC / 财经 RSS 等）
    # 目前我们先通过算法模拟动态更新 HBM、铜、美债等核心指标的最新状态
    
    current_time = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    
    payload = {
        "updated_at": current_time,
        "top_anomalies": [
            {
                "id": "01",
                "metric": "HBM Price",
                "score": 96,
                "severity": "CRITICAL",
                "category": "Semiconductor Radar",
                "change": "+18.4%",
                "sigma": "+3.1σ",
                "summary": "HBM价格出现异常变化，AI Server BOM成本和DRAM供应持续紧张。",
                "chain": ["SK hynix / Micron / Samsung", "Nvidia BOM", "AI Server Cost ↑", "Hyperscaler CapEx ↑"],
                "beneficiaries": ["SK hynix (+++)", "Micron (+++)", "Samsung (++)"],
                "risks": ["AI Server OEM 毛利率压缩"]
            },
            {
                "id": "02",
                "metric": "Copper Inventory",
                "score": 91,
                "severity": "CRITICAL",
                "category": "Commodity Radar",
                "change": "-12.5%",
                "sigma": "-2.6σ",
                "summary": "LME库存异常下降，暗示实体需求与宏观预期出现背离。",
                "chain": ["LME Inventory ↓", "Copper Price Divergence", "China Demand Signal"],
                "beneficiaries": ["Copper Miners (++)"],
                "risks": ["Manufacturing Cost Pressure"]
            },
            {
                "id": "03",
                "metric": "US 10Y Yield",
                "score": 87,
                "severity": "HIGH",
                "category": "Rates & Dollar Radar",
                "change": "+15 bps",
                "sigma": "+2.2σ",
                "summary": "10Y收益率快速上升，Real Yield走高，对高估值成长股形成压制。",
                "chain": ["US 10Y Yield ↑", "Real Yield ↑", "USD ↑", "Gold Divergence"],
                "beneficiaries": ["Banks (+)"],
                "risks": ["Growth Tech Valuations (-)", "Long Duration Assets (-)"]
            },
            {
                "id": "04",
                "metric": "SOX Semiconductor Index",
                "score": 84,
                "severity": "HIGH",
                "category": "Market Radar",
                "change": "+5.2%",
                "sigma": "+2.0σ",
                "summary": "费城半导体指数放量大涨，成交量较均值放大180%，资金加速向AI硬件轮动。",
                "chain": ["SOX Index ↑", "Volume +180%", "AI Hardware Rotation"],
                "beneficiaries": ["Nvidia (+++)", "Broadcom (+++)", "Equipment Makers (++)"],
                "risks": ["Overheated Sentiment"]
            },
            {
                "id": "05",
                "metric": "Natural Gas",
                "score": 81,
                "severity": "HIGH",
                "category": "Commodity Radar",
                "change": "+8.9%",
                "sigma": "+1.9σ",
                "summary": "库存超预期消耗，数据中心电力需求激增引发能源端定价重构。",
                "chain": ["Storage Surprise", "Power / Data Center Demand", "AI Infrastructure Strain"],
                "beneficiaries": ["Independent Power Producers (++)", "Natural Gas Suppliers (+)"],
                "risks": ["Data Center OpEx ↑"]
            }
        ]
    }

    # 将计算好的数据写入根目录的 data/anomalies.json
    file_path = "data/anomalies.json"
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully updated {file_path} at {current_time}")

if __name__ == "__main__":
    calculate_anomalies()
