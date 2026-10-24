# Work Command Center (OneNote for Mac Edition)

A comprehensive, executive-level project portfolio management system inspired by Microsoft OneNote for Mac.

![OneNote Command Center](file:///Users/knbed/.gemini/antigravity/brain/9f8c2832-8df9-484a-b397-b8aab9c494d2/.user_uploaded/media_1792856684410_42f4cf3d.png)

---

## 🚀 Quick Start

### 1. Launch the Interactive Web Dashboard
You can run it in either of two ways:

- **Option A (Direct in Browser - Zero dependencies):**
  ```bash
  open /Users/knbed/.gemini/antigravity/scratch/work-command-center/index.html
  ```

- **Option B (Local Web Server):**
  ```bash
  cd /Users/knbed/.gemini/antigravity/scratch/work-command-center
  npm start
  ```
  This serves the dashboard at `http://localhost:3000` and automatically opens your default browser.

---

## 📋 Microsoft OneNote Mac Architecture & Setup

To replicate this exact setup in **Microsoft OneNote for Mac**:

### Step 1: Create the Notebook Hierarchy
1. Open OneNote and create a new notebook named: **`WORK COMMAND CENTER`**.
2. Create the top-level Sections and Section Groups:
   - **`00 • Command Center`** (Section)
     - Pages:
       - `Portfolio Overview`
       - `This Week`
       - `Master Action Register`
       - `Waiting on Others`
       - `Milestones & Deadlines`
       - `Quick Capture`
   - **`01 • Active Projects`** (Section Group)
     - Inside this group, create a section for each project:
       - `ATMS+ Modernization`
       - `FOLAA+ Modernization`
       - `GAL Enhancements`
         - Subpages under each project:
           1. `Overview & Scope`
           2. `Meetings & Workshops`
           3. `Actions & Follow-ups`
           4. `Decisions & Approvals`
           5. `Risks & Issues`
           6. `Requirements & UAT`
           7. `Stakeholders`
           8. `Reference & Links`
   - **`02 • Cross-Project Meetings`** (Section)
   - **`03 • Knowledge & Templates`** (Section)
   - **`04 • Archive`** (Section)

> **Tip for Subpages in OneNote Mac:** Right-click any page in the page list and choose **"Make Subpage"** to nest it under the project parent page.

---

### Step 2: Paste Pre-Formatted Templates into OneNote
We built a dedicated template exporter file:
```bash
open /Users/knbed/.gemini/antigravity/scratch/work-command-center/onenote-templates.html
```
1. Click **"Copy for OneNote"** next to any template (`Portfolio Overview`, `Overview & Scope`, `Risks & Issues`, `Decisions & Approvals`).
2. Switch to your Microsoft OneNote page.
3. Press **`Cmd + V`**.
4. The tables, purple headers (`#5c2d91`), colored status indicators (🔴, 🟢, 🟡), and checkboxes (`☐`) will paste with full rich-text formatting.

---

## 💻 Interactive Dashboard Features

The local web app provides:
- **macOS Window & OneNote Ribbon styling**: Authentic Mac window controls, OneNote purple banner, search bar, and ribbon toolbar.
- **Interactive Checkboxes**: Click to check off priorities; strike-through styling with auto-save.
- **Editable Tables**: Click any status dropdown (🔴 At risk, 🟢 On track, 🟡 Waiting) or edit milestone and action descriptions in-place.
- **Add / Remove Items**: Easily add new priority tasks, project health rows, action items, or decisions.
- **Copy for OneNote (1-Click)**: Instant clipboard copy formatted with rich HTML so you can paste updates straight into your real OneNote notebook.
- **Subpage Navigation**: Complete templates for all 8 project sections (Overview, Meetings, Actions, Decisions, Risks, Requirements, Stakeholders, Links).
- **LocalStorage Persistence**: All edits remain saved between browser restarts.
- **Sample Data Reset**: Restore the default state at any time with one click.
