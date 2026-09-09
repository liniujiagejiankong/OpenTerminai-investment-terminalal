import express from "express";
import cors from "cors";
import { marketRouter } from "./routes/market.js";
import { portfolioRouter } from "./routes/portfolio.js";
import { aiRouter } from "./routes/ai.js";
import { allStats } from "./providers/registry.js";

const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
}));

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use("/api", marketRouter);
app.use("/api/portfolios", portfolioRouter);
app.use("/api/ai", aiRouter);

// Health check endpoint
app.get("/api/status", (_req, res) => {
  res.json({
    ok: true,
    time: new Date().toISOString(),
    providers: allStats(),
    ai: Boolean(process.env.ANTHROPIC_API_KEY),
  });
});

// Anomalies endpoint (placeholder - returns mock data)
app.get("/api/anomalies", (_req, res) => {
  res.json({
    top_anomalies: [
      {
        id: 1,
        score: 95,
        metric: "Volatility Spike",
        category: "RISK",
        change: "+45%",
        sigma: "3.2σ",
        summary: "Unusual market volatility detected across multiple sectors",
        chain: ["Fed Rate", "Treasury Yield", "Equity VIX", "Corporate Bonds"],
        beneficiaries: ["Defensive Stocks", "Volatility Hedges"],
        risks: ["Growth Stocks", "Tech Sector"]
      },
      {
        id: 2,
        score: 87,
        metric: "Sector Rotation",
        category: "OPPORTUNITY",
        change: "+28%",
        sigma: "2.8σ",
        summary: "Capital rotating from growth to value and financials",
        chain: ["Interest Rates", "Bank Profitability", "Credit Spreads"],
        beneficiaries: ["Financial Sector", "Dividend Stocks"],
        risks: ["Growth Tech", "Unprofitable Startups"]
      }
    ]
  });
});

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("[server error]", err);
  res.status(500).json({ error: "Internal server error", detail: err.message });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = Number(process.env.API_PORT ?? 4000);
app.listen(PORT, () => {
  console.log(`OpenTerminal API listening on http://localhost:${PORT}`);
});
