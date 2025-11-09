// src/pages/SystemHealth.jsx
import React from "react";
import "../styles/dashboard.css";

export default function SystemHealth() {
  const systemMetrics = {
    cpuUsage: 42,
    ramUsed: 6.5,
    ramTotal: 16,
    diskUsed: 320,
    diskTotal: 512,
    temperature: 48,
  };

  const ramPercent = (
    (systemMetrics.ramUsed / systemMetrics.ramTotal) *
    100
  ).toFixed(1);
  const diskPercent = (
    (systemMetrics.diskUsed / systemMetrics.diskTotal) *
    100
  ).toFixed(1);

  return (
    <div className="dashboard-root">
      <aside className="sidebar">
        <div className="sidebar-brand">VigilantLog</div>
        <nav className="sidebar-nav">
          <a className="nav-item" href="/dashboard">
            Dashboard
          </a>
          <a className="nav-item active" href="/system-health">
            System Health
          </a>
          <a className="nav-item" href="/analysis">
            Analysis
          </a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>System Health</h2>
          <div className="user">System performance metrics</div>
        </header>

        <section className="results-grid">
          <div className="metric-card">
            <div className="metric-title">CPU Usage</div>
            <div className="metric-main" style={{ color: "#2563eb" }}>
              {systemMetrics.cpuUsage}%
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${systemMetrics.cpuUsage}%`,
                  background: "#2563eb",
                }}
              ></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-title">Memory Usage</div>
            <div className="metric-main" style={{ color: "#0ea5a4" }}>
              {systemMetrics.ramUsed} GB / {systemMetrics.ramTotal} GB (
              {ramPercent}%)
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${ramPercent}%`, background: "#0ea5a4" }}
              ></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-title">Disk Usage</div>
            <div className="metric-main" style={{ color: "#f59e0b" }}>
              {systemMetrics.diskUsed} GB / {systemMetrics.diskTotal} GB (
              {diskPercent}%)
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${diskPercent}%`, background: "#f59e0b" }}
              ></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-title">System Temperature</div>
            <div className="metric-main" style={{ color: "#ef4444" }}>
              {systemMetrics.temperature}°C
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(systemMetrics.temperature / 100) * 100}%`,
                  background: "#ef4444",
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
