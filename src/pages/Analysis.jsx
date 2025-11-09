// src/pages/Analysis.jsx
import React from "react";
import IndicatorsList from "../components/IndicatorsList";
import "../styles/dashboard.css";

// Import result data
import appCrashData from "../results/app_crash_result.json";
import bsodData from "../results/bsod_result.json";
import unexpectedData from "../results/unexpected_result.json";
import hangData from "../results/hang_result.json";

export default function Analysis() {
  const appEntry = Array.isArray(appCrashData) ? appCrashData[0] : appCrashData;
  const bsodEntry = bsodData;
  const unexpectedEntry = unexpectedData;
  const hangEntry = Array.isArray(hangData) ? hangData[0] : hangData;

  return (
    <div className="dashboard-root">
      <aside className="sidebar">
        <div className="sidebar-brand">VigilantLog</div>
        <nav className="sidebar-nav">
          <a className="nav-item" href="/dashboard">
            Dashboard
          </a>
          <a className="nav-item" href="/system-health">
            System Health
          </a>
          <a className="nav-item active" href="/analysis">
            Analysis
          </a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>Analysis</h2>
          <div className="user">Detailed event and log-based insights</div>
        </header>

        <section className="panels">
          <div className="panel">
            <h4>BSOD Analysis</h4>
            <p>{bsodEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={bsodEntry?.analysis?.indicators} />
          </div>

          <div className="panel">
            <h4>App Crash Analysis</h4>
            <p>{appEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={appEntry?.analysis?.indicators} />
          </div>

          <div className="panel">
            <h4>Unexpected Shutdown Analysis</h4>
            <p>{unexpectedEntry?.analysis?.summary}</p>
            <IndicatorsList
              indicators={unexpectedEntry?.analysis?.indicators}
            />
          </div>

          <div className="panel">
            <h4>System Hang Analysis</h4>
            <p>{hangEntry?.analysis?.summary}</p>
            <IndicatorsList indicators={hangEntry?.analysis?.indicators} />
          </div>
        </section>
      </main>
    </div>
  );
}
