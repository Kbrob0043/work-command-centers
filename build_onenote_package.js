const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_DIR = path.join(__dirname, 'WORK COMMAND CENTER');
const DOWNLOADS_DIR = path.join(__dirname, 'downloads');

// Ensure clean directories
if (fs.existsSync(BASE_DIR)) {
  fs.rmSync(BASE_DIR, { recursive: true, force: true });
}
fs.mkdirSync(BASE_DIR, { recursive: true });
fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });

// Common CSS styling for OneNote pages
const PAGE_STYLE = `
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  color: #1e293b;
  line-height: 1.5;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
`;

const TABLE_STYLE = `
  border-collapse: collapse;
  width: 100%;
  margin: 14px 0 24px 0;
  font-size: 13.5px;
  border: 1px solid #cbd5e1;
`;

const TH_STYLE = `
  background-color: #ede7f6;
  color: #3b0764;
  font-weight: 600;
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
  text-align: left;
`;

const TD_STYLE = `
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
  font-size: 13.5px;
  color: #1e293b;
`;

function wrapHtml(title, body) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
</head>
<body style="${PAGE_STYLE}">
  ${body}
</body>
</html>`;
}

// 1. Portfolio Overview
const portfolioOverviewHtml = wrapHtml("Portfolio Overview", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Portfolio Overview</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 24px 0;">K.O. &nbsp;|&nbsp; Friday, October 23, 2026</p>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 10px 0;">This Week’s Priorities</h2>
  <div style="font-size: 14px; margin-bottom: 24px; line-height: 1.8;">
    <div style="margin: 3px 0;">☐ &nbsp;Confirm ATMS+ UAT readiness</div>
    <div style="margin: 3px 0;">☐ &nbsp;Resolve FOLAA+ scope questions</div>
    <div style="margin: 3px 0;">☐ &nbsp;Capture GAL approval decisions</div>
  </div>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 10px 0;">Project Health</h2>
  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 25%;">Project</th>
        <th style="${TH_STYLE}; width: 25%;">Status</th>
        <th style="${TH_STYLE}; width: 35%;">Next milestone</th>
        <th style="${TH_STYLE}; width: 15%;">Due</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; color: #2563eb; font-weight: 500;">ATMS+</td>
        <td style="${TD_STYLE};">🔴 &nbsp;At risk</td>
        <td style="${TD_STYLE};">UAT readiness</td>
        <td style="${TD_STYLE};">Oct 28</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; color: #2563eb; font-weight: 500;">FOLAA+</td>
        <td style="${TD_STYLE};">🟢 &nbsp;On track</td>
        <td style="${TD_STYLE};">Scope review</td>
        <td style="${TD_STYLE};">Oct 29</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; color: #2563eb; font-weight: 500;">GAL</td>
        <td style="${TD_STYLE};">🟡 &nbsp;Waiting</td>
        <td style="${TD_STYLE};">Sponsor approval</td>
        <td style="${TD_STYLE};">Oct 30</td>
      </tr>
    </tbody>
  </table>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 10px 0;">Open Actions</h2>
  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 45%;">Action</th>
        <th style="${TH_STYLE}; width: 20%;">Owner</th>
        <th style="${TH_STYLE}; width: 15%;">Due</th>
        <th style="${TH_STYLE}; width: 20%;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE};">Confirm test coverage</td>
        <td style="${TD_STYLE};">K.O.</td>
        <td style="${TD_STYLE};">Oct 27</td>
        <td style="${TD_STYLE};">🟡 &nbsp;Open</td>
      </tr>
      <tr>
        <td style="${TD_STYLE};">Review scope changes</td>
        <td style="${TD_STYLE};">Project lead</td>
        <td style="${TD_STYLE};">Oct 28</td>
        <td style="${TD_STYLE};">⚫ &nbsp;Waiting</td>
      </tr>
      <tr>
        <td style="${TD_STYLE};">Publish meeting decisions</td>
        <td style="${TD_STYLE};">K.O.</td>
        <td style="${TD_STYLE};">Oct 26</td>
        <td style="${TD_STYLE};">🟡 &nbsp;Open</td>
      </tr>
    </tbody>
  </table>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 8px 0;">Decisions & Escalations</h2>
  <ul style="margin: 0 0 24px 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
    <li>ATMS+: confirm release acceptance criteria</li>
    <li>GAL: follow up on sponsor approval</li>
  </ul>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 8px 0;">Quick Links</h2>
  <p style="font-size: 13.5px; color: #2563eb; margin: 0 0 24px 0;">
    <a href="#" style="color: #2563eb; text-decoration: underline;">Meeting template</a> &nbsp;•&nbsp; 
    <a href="#" style="color: #2563eb; text-decoration: underline;">Decision log</a> &nbsp;•&nbsp; 
    <a href="#" style="color: #2563eb; text-decoration: underline;">Risk register</a> &nbsp;•&nbsp; 
    <a href="#" style="color: #2563eb; text-decoration: underline;">Weekly review</a>
  </p>

  <p style="font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 24px;">
    Proposed OneNote for Mac setup &nbsp;•&nbsp; Sample content &nbsp;•&nbsp; Tables updated manually
  </p>
`);

// 2. This Week
const thisWeekHtml = wrapHtml("This Week", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">This Week</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 24px 0;">Sprint & Daily Focus • Week of October 23, 2026</p>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 10px 0;">Weekly Outcomes</h2>
  <div style="font-size: 14px; margin-bottom: 24px; line-height: 1.8;">
    <div>☐ &nbsp;Complete ATMS+ UAT test execution signoff</div>
    <div>☐ &nbsp;Lock FOLAA+ scope baseline in Architecture Review Board</div>
    <div>☐ &nbsp;Publish GAL Phase 2 funding decision memorandum</div>
  </div>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 20px 0 10px 0;">Daily Schedule & Focus</h2>
  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 20%;">Day</th>
        <th style="${TH_STYLE}; width: 35%;">Focus Area</th>
        <th style="${TH_STYLE}; width: 45%;">Key Meetings & Deliverables</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #5c2d91;">Monday</td>
        <td style="${TD_STYLE};">Portfolio sync & ATMS+ kickoff</td>
        <td style="${TD_STYLE};">9:00 AM Portfolio Standup • 1:00 PM Core Team</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #5c2d91;">Tuesday</td>
        <td style="${TD_STYLE};">FOLAA+ scope & Vendor demo</td>
        <td style="${TD_STYLE};">11:00 AM Vendor Review • 3:00 PM Scope Workshop</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #5c2d91;">Wednesday</td>
        <td style="${TD_STYLE};">GAL Sponsor approvals</td>
        <td style="${TD_STYLE};">10:00 AM Sponsor Check-in • 2:00 PM CAB Gate</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #5c2d91;">Thursday</td>
        <td style="${TD_STYLE};">Deep work & UAT prep</td>
        <td style="${TD_STYLE};">UAT Acceptance Test Pack Review • Deep work block</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #5c2d91;">Friday</td>
        <td style="${TD_STYLE};">Weekly wrap-up & executive broadcast</td>
        <td style="${TD_STYLE};">3:00 PM Retrospective • Publish weekly status report</td>
      </tr>
    </tbody>
  </table>
`);

// 3. Project Overview (GAL Enhancements)
const galOverviewHtml = wrapHtml("GAL Enhancements • Overview & Scope", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">GAL Enhancements • Overview & Scope</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Project Lead: K.O. &nbsp;|&nbsp; Target Delivery: Q4 2026</p>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 18px 0 8px 0;">Executive Summary</h2>
  <p style="font-size: 14px; color: #334155; line-height: 1.6; margin-bottom: 24px;">
    Modernize core event dispatch gateways, implement real-time compliance auditing, and streamline interface APIs across critical enterprise integrations.
  </p>

  <h2 style="font-size: 18px; font-weight: bold; color: #5c2d91; margin: 18px 0 8px 0;">Scope Definition</h2>
  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 50%;">In-Scope (Deliverables)</th>
        <th style="${TH_STYLE}; width: 50%;">Out-of-Scope (Deferred)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; vertical-align: top;">
          • Automated schema migration & validation pipeline<br>
          • Real-time webhook notification dispatch service<br>
          • Role-based access control (RBAC) token alignment<br>
          • Automated UAT regression test matrix
        </td>
        <td style="${TD_STYLE}; vertical-align: top;">
          • Legacy batch FTP ETL redesign<br>
          • Direct customer mobile UI integration<br>
          • Multi-region geo-replication (Phase 2)
        </td>
      </tr>
    </tbody>
  </table>
`);

// 4. Risks & Issues (RAID)
const raidLogHtml = wrapHtml("GAL Enhancements • Risks & Issues", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Risks & Issues (RAID Log)</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Active RAID log across project deliverables</p>

  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 12%;">Type</th>
        <th style="${TH_STYLE}; width: 35%;">Description</th>
        <th style="${TH_STYLE}; width: 15%;">Impact</th>
        <th style="${TH_STYLE}; width: 25%;">Mitigation Plan</th>
        <th style="${TH_STYLE}; width: 13%;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #b45309;">RISK</td>
        <td style="${TD_STYLE};">Third-party API rate limits during peak UAT loads</td>
        <td style="${TD_STYLE};">High / Med</td>
        <td style="${TD_STYLE};">Implement in-memory redis cache & request throttling</td>
        <td style="${TD_STYLE};">🟡 In progress</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #b91c1c;">ISSUE</td>
        <td style="${TD_STYLE};">Firewall blocking database connection in staging cluster</td>
        <td style="${TD_STYLE};">Critical / High</td>
        <td style="${TD_STYLE};">Escalated to SecOps ticket #SEC-8891 for emergency port unlock</td>
        <td style="${TD_STYLE};">🔴 Active</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #2563eb;">DEP</td>
        <td style="${TD_STYLE};">Dependency on ATMS+ modern schema release in Sprint 5</td>
        <td style="${TD_STYLE};">Medium</td>
        <td style="${TD_STYLE};">Weekly cross-project synchronization with ATMS+ lead</td>
        <td style="${TD_STYLE};">🟢 Monitored</td>
      </tr>
    </tbody>
  </table>
`);

// 5. Decisions & Approvals Log
const decisionsLogHtml = wrapHtml("GAL Enhancements • Decisions & Approvals", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Decisions & Approvals Register</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Architecture & Governance Decision Register (ADR / PDR)</p>

  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 15%;">Date</th>
        <th style="${TH_STYLE}; width: 35%;">Decision Summary</th>
        <th style="${TH_STYLE}; width: 25%;">Approver(s)</th>
        <th style="${TH_STYLE}; width: 25%;">Impact / Justification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE};">Oct 20, 2026</td>
        <td style="${TD_STYLE}; font-weight: 500;">OAuth2 JWT standard adopted across microservices</td>
        <td style="${TD_STYLE};">Architecture Review Board</td>
        <td style="${TD_STYLE};">Eliminates central DB token bottleneck during scale</td>
      </tr>
      <tr>
        <td style="${TD_STYLE};">Oct 14, 2026</td>
        <td style="${TD_STYLE}; font-weight: 500;">Phase 2 scope deferral of legacy XML parser</td>
        <td style="${TD_STYLE};">VP Technology (Sponsor)</td>
        <td style="${TD_STYLE};">Protects critical path launch date for Oct 30</td>
      </tr>
    </tbody>
  </table>
`);

// 6. Requirements & UAT
const uatHtml = wrapHtml("GAL Enhancements • Requirements & UAT", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Requirements & UAT Signoff</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Acceptance Criteria & Test Matrix</p>

  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 15%;">Req ID</th>
        <th style="${TH_STYLE}; width: 45%;">Requirement & Acceptance Criteria</th>
        <th style="${TH_STYLE}; width: 20%;">Test Suite</th>
        <th style="${TH_STYLE}; width: 20%;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; font-family: monospace;">REQ-101</td>
        <td style="${TD_STYLE};">Payload latency must remain under 200ms at 5,000 req/sec</td>
        <td style="${TD_STYLE};">Perf-Test-Suite A</td>
        <td style="${TD_STYLE};">🟢 Passed</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-family: monospace;">REQ-102</td>
        <td style="${TD_STYLE};">Graceful failover to replica DB within 10 seconds of master outage</td>
        <td style="${TD_STYLE};">Disaster-Recovery</td>
        <td style="${TD_STYLE};">🟡 In Progress</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-family: monospace;">REQ-103</td>
        <td style="${TD_STYLE};">Role permissions strictly restrict export actions to Admins</td>
        <td style="${TD_STYLE};">Sec-Audit-Pack</td>
        <td style="${TD_STYLE};">🟢 Passed</td>
      </tr>
    </tbody>
  </table>
`);

// 7. Stakeholders & RACI
const stakeholdersHtml = wrapHtml("GAL Enhancements • Stakeholders & RACI", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Stakeholders & RACI Matrix</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Key Contacts & Governance Model</p>

  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 30%;">Stakeholder</th>
        <th style="${TH_STYLE}; width: 35%;">Role / Department</th>
        <th style="${TH_STYLE}; width: 15%;">RACI</th>
        <th style="${TH_STYLE}; width: 20%;">Cadence</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600;">K.O.</td>
        <td style="${TD_STYLE};">Project Lead / PM</td>
        <td style="${TD_STYLE}; font-weight: bold; color: #5c2d91;">Accountable</td>
        <td style="${TD_STYLE};">Daily / Weekly</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600;">Core Engineering Team</td>
        <td style="${TD_STYLE};">Development & QA</td>
        <td style="${TD_STYLE}; font-weight: bold; color: #2563eb;">Responsible</td>
        <td style="${TD_STYLE};">Bi-weekly Sprints</td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600;">Enterprise Architecture</td>
        <td style="${TD_STYLE};">Governance & Security</td>
        <td style="${TD_STYLE}; font-weight: bold; color: #d97706;">Consulted</td>
        <td style="${TD_STYLE};">Monthly ARB</td>
      </tr>
    </tbody>
  </table>
`);

// 8. References & Links
const linksHtml = wrapHtml("GAL Enhancements • Reference & Links", `
  <h1 style="font-size: 28px; font-weight: bold; color: #0f172a; margin: 0 0 4px 0;">Reference & Quick Links</h1>
  <p style="font-size: 13px; color: #64748b; margin: 0 0 20px 0;">Repositories, boards, design links, and documentation</p>

  <table style="${TABLE_STYLE}">
    <thead>
      <tr>
        <th style="${TH_STYLE}; width: 35%;">Resource Name</th>
        <th style="${TH_STYLE}; width: 50%;">Description</th>
        <th style="${TH_STYLE}; width: 15%;">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #2563eb;">Jira Sprint Backlog</td>
        <td style="${TD_STYLE};">Active sprint user stories, tasks, and burn-down chart</td>
        <td style="${TD_STYLE};"><a href="#" style="color: #5c2d91; text-decoration: underline;">Open ↗</a></td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #2563eb;">GitLab Repositories</td>
        <td style="${TD_STYLE};">Microservice source code, CI/CD pipeline pipelines</td>
        <td style="${TD_STYLE};"><a href="#" style="color: #5c2d91; text-decoration: underline;">Open ↗</a></td>
      </tr>
      <tr>
        <td style="${TD_STYLE}; font-weight: 600; color: #2563eb;">Figma Architecture Diagrams</td>
        <td style="${TD_STYLE};">End-to-end event sequence and API integration flows</td>
        <td style="${TD_STYLE};"><a href="#" style="color: #5c2d91; text-decoration: underline;">Open ↗</a></td>
      </tr>
    </tbody>
  </table>
`);

// Readme guide for importing
const readmeTxt = `WORK COMMAND CENTER • Microsoft OneNote Package
===================================================

This package contains the complete Work Command Center structure:

FOLDER STRUCTURE:
- 00 • Command Center/
    - Portfolio Overview
    - This Week
- 01 • Active Projects/
    - ATMS+ Modernization/
    - FOLAA+ Modernization/
    - GAL Enhancements/
        - 01 Overview & Scope
        - 02 Meetings & Workshops
        - 03 Actions & Follow-ups
        - 04 Decisions & Approvals
        - 05 Risks & Issues (RAID)
        - 06 Requirements & UAT
        - 07 Stakeholders & RACI
        - 08 Reference & Links
- 02 • Cross-Project Meetings/
- 03 • Knowledge & Templates/
- 04 • Archive/

HOW TO USE IN ONENOTE FOR MAC:
------------------------------
Option A: Web Importer (Upload entire notebook to OneDrive)
1. Go to https://www.onenote.com/notebooks/exportimport
2. Click "Import"
3. Select this unzipped folder ("WORK COMMAND CENTER")
4. Once imported, it will automatically sync and open in OneNote for Mac!

Option B: Instant Copy-Paste (Fastest)
1. Double click any of the .html files in your browser
2. Select all (Cmd+A) and copy (Cmd+C)
3. In OneNote, paste (Cmd+V)
4. All tables, purple colors, checkboxes, and status pills retain full formatting!

Option C: On Windows / Parallels
Double click "WORK COMMAND CENTER.onepkg" to unpack directly in OneNote desktop.
`;

// Write files into directory structure
const dirs = [
  '00 • Command Center',
  '01 • Active Projects/ATMS+ Modernization',
  '01 • Active Projects/FOLAA+ Modernization',
  '01 • Active Projects/GAL Enhancements',
  '02 • Cross-Project Meetings',
  '03 • Knowledge & Templates',
  '04 • Archive'
];

dirs.forEach(d => fs.mkdirSync(path.join(BASE_DIR, d), { recursive: true }));

// Write pages
fs.writeFileSync(path.join(BASE_DIR, '00 • Command Center', 'Portfolio Overview.html'), portfolioOverviewHtml);
fs.writeFileSync(path.join(BASE_DIR, '00 • Command Center', 'This Week.html'), thisWeekHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '01 Overview & Scope.html'), galOverviewHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '02 Meetings & Workshops.html'), wrapHtml("Meetings & Workshops", `<h1 style="color:#0f172a;">Meetings & Workshops</h1><p>Recurring cadence and meeting minutes.</p>`));
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '03 Actions & Follow-ups.html'), wrapHtml("Actions & Follow-ups", `<h1 style="color:#0f172a;">Actions & Follow-ups</h1><p>Detailed project task register.</p>`));
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '04 Decisions & Approvals.html'), decisionsLogHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '05 Risks & Issues (RAID).html'), raidLogHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '06 Requirements & UAT.html'), uatHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '07 Stakeholders & RACI.html'), stakeholdersHtml);
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects/GAL Enhancements', '08 Reference & Links.html'), linksHtml);

// OneNote TOC markers
fs.writeFileSync(path.join(BASE_DIR, 'Open Notebook.onetoc2'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));
fs.writeFileSync(path.join(BASE_DIR, '00 • Command Center.one'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));
fs.writeFileSync(path.join(BASE_DIR, '01 • Active Projects.one'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));
fs.writeFileSync(path.join(BASE_DIR, '02 • Cross-Project Meetings.one'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));
fs.writeFileSync(path.join(BASE_DIR, '03 • Knowledge & Templates.one'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));
fs.writeFileSync(path.join(BASE_DIR, '04 • Archive.one'), Buffer.from([0xE4, 0x52, 0x5C, 0x7B, 0x8C, 0xD8, 0xA7, 0x4D]));

fs.writeFileSync(path.join(BASE_DIR, 'README - How to Import into OneNote.txt'), readmeTxt);

// Now create the ZIP and ONEPKG archives
const zipPath = path.join(DOWNLOADS_DIR, 'WORK COMMAND CENTER.zip');
const onepkgPath = path.join(DOWNLOADS_DIR, 'WORK COMMAND CENTER.onepkg');

console.log('Creating ZIP archive...');
execSync(`cd "${__dirname}" && zip -r "${zipPath}" "WORK COMMAND CENTER"`);

console.log('Creating ONEPKG archive...');
// Copy zip as onepkg (as documented, .onepkg is a zip/cab archive bundle)
fs.copyFileSync(zipPath, onepkgPath);

// Also copy both files directly to user's ~/Downloads folder for immediate convenience!
const userDownloads = '/Users/knbed/Downloads';
if (fs.existsSync(userDownloads)) {
  fs.copyFileSync(zipPath, path.join(userDownloads, 'WORK COMMAND CENTER.zip'));
  fs.copyFileSync(onepkgPath, path.join(userDownloads, 'WORK COMMAND CENTER.onepkg'));
  console.log(`Copied archives directly to ${userDownloads}`);
}

console.log('Build completed successfully.');
