import Head from 'next/head';
import Link from 'next/link';

export default function SelfReportDuc() {
  return (
    <>
      <Head>
        <title>Self-Report — Nguyen Tam Duc | Finance Tracker V3</title>
      </Head>

      <header>
        <h1>📋 SELF-REPORT — FINAL PROJECT</h1>
        <p>Finance Tracker V3 — Personal Finance Management Application</p>
        <p style={{marginTop:'0.5rem'}}>Team Antigravity</p>
      </header>

      <div className="container">

        <h2>Personal Information</h2>
        <table>
          <tbody>
            <tr><td><strong>Full Name</strong></td><td>Nguyen Tam Duc</td></tr>
            <tr><td><strong>Student ID</strong></td><td>24020005</td></tr>
            <tr><td><strong>Team</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Role</strong></td><td>Team Lead / Backend / Database / Architecture</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Week:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Team Lead:</strong> Organized team meetings, assigned tasks, planned the development roadmap with milestones</li>
          <li><strong>System Architecture:</strong> Designed the overall architecture — Next.js App Router + Hono API + Supabase PostgreSQL + Drizzle ORM</li>
          <li><strong>ERD Design:</strong> Designed all 14 database tables (users, wallets, wallet_logs, transactions, categories, budgets, goals, bills, notifications, audit_logs, refresh_tokens, user_settings, idempotency_keys, wallet_transfers, bill_payments)</li>
          <li><strong>Monorepo design:</strong> Designed the Turborepo + pnpm Workspace structure with 7 packages</li>
          <li><strong>Initial framework:</strong> <code>2dd223e</code> — chore: initial framework structure</li>
          <li><strong>Firebase Auth migration:</strong> <code>5ee3de2</code> — feat(auth): complete migration to Firebase Social Login and Session Cookies</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2dd223e" target="_blank" rel="noopener">2dd223e</a> — initial framework structure</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/5ee3de2" target="_blank" rel="noopener">5ee3de2</a> — Firebase Social Login migration</li>
          <li>ERD: 14 tables designed</li>
          <li>ARCHITECTURE.md: System architecture documentation</li>
          <li>Project plan: 8 milestones from 10/04 to 15/05/2026</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>10/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Week:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Core Budget-First Infrastructure:</strong> <code>10dd3c3</code> — feat(budget): implement core budget-first infrastructure (#2)</li>
          <li><strong>Multi-Wallet Management:</strong> <code>180fd8a</code> — feat(wallet): implement multi-wallet management and sync UI (#3)</li>
          <li><strong>Quick-Add Components:</strong> <code>3b1395d</code> — feat(quick-add): enhanced quick-add components with NLP and Simple modes (#4)</li>
          <li><strong>Global UI v3 Aesthetics:</strong> <code>3749f98</code> — feat(ui): implement global UI design reframing v3 aesthetics (#5)</li>
          <li><strong>Container-Presentational Pattern:</strong> <code>32a91f4</code> — feat(ui): refactor dashboard pages to container-presentational pattern</li>
          <li><strong>Dashboard refactor:</strong> <code>f650aed</code> — feat(api,web): refactor dashboard and S2S engine (#152)</li>
          <li><strong>Wallet integration &amp; analytics:</strong> <code>1439c58</code> — feat(web): enhance wallet integration and analytics (#154)</li>
          <li><strong>Feature gap completion (Phase 5):</strong> <code>a5c79b9</code> — transfer, categories, empty states, skeletons</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/10dd3c3" target="_blank" rel="noopener">10dd3c3</a> — budget-first infrastructure</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/180fd8a" target="_blank" rel="noopener">180fd8a</a> — multi-wallet management</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3b1395d" target="_blank" rel="noopener">3b1395d</a> — quick-add components</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3749f98" target="_blank" rel="noopener">3749f98</a> — global UI v3 aesthetics</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/32a91f4" target="_blank" rel="noopener">32a91f4</a> — container-presentational refactor</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1439c58" target="_blank" rel="noopener">1439c58</a> — wallet integration &amp; analytics</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/f650aed" target="_blank" rel="noopener">f650aed</a> — dashboard S2S refactor</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>10/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Week:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Database Schema Design:</strong> Designed all 14 tables with Drizzle ORM with clear relationships</li>
          <li><strong>Schema sync:</strong> <code>af1542e</code> — feat(db): sync database schema to ERD (migration 0012)</li>
          <li><strong>Type fixes (Phase 3):</strong> <code>c193b16</code> — fix(db): add walletId to transaction schemas and fix type errors</li>
          <li><strong>Schema cleanup:</strong> <code>9637add</code> — chore(db): remove unused budget_wallets table (#17)</li>
          <li><strong>Legacy cleanup:</strong> <code>4d4aa58</code> — chore: cleanup legacy UI components and JS schemas (#15)</li>
          <li><strong>API endpoints:</strong> Full CRUD API for transactions, wallets, budgets, goals, bills</li>
          <li><strong>Wire frontend to APIs (Phase 4):</strong> <code>e510915</code> — feat: wire frontend to real APIs</li>
          <li><strong>AI Quick Add:</strong> <code>8b3ca4b</code> — feat(api,web): implement AI Quick Add with Gemini integration (#150)</li>
          <li><strong>S2S Engine:</strong> <code>f650aed</code> — Safe-to-Spend calculations in dashboard</li>
          <li><strong>Dynamic data pages:</strong> Dashboard, Transactions, Wallets, Budgets, Goals — all querying real API</li>
          <li><strong>Documentation:</strong> <code>cdd727c</code> — docs: add Phase 2 completion report</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/af1542e" target="_blank" rel="noopener">af1542e</a> — sync database schema to ERD</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/e510915" target="_blank" rel="noopener">e510915</a> — wire frontend to real APIs</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/8b3ca4b" target="_blank" rel="noopener">8b3ca4b</a> — AI Quick Add with Gemini</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/9637add" target="_blank" rel="noopener">9637add</a> — remove unused budget_wallets table</li>
          <li>Database designed: 14 tables with full relations</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>10/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Week:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Type fixes (Phase 3):</strong> <code>c193b16</code> — add walletId to transaction schemas, fix type errors</li>
          <li><strong>Feature gap completion (Phase 5):</strong> <code>a5c79b9</code> — transfer, categories, empty states, loading skeletons</li>
          <li><strong>Database sync:</strong> <code>af1542e</code> — sync schema to ERD</li>
          <li><strong>Firebase auth fix:</strong> <code>3904c75</code> — fix(api): correct project_id casing in firebase auth init</li>
          <li><strong>Cleanup:</strong> <code>d1974e2</code> — chore: clean up remaining AI tool directories</li>
          <li><strong>MCP config:</strong> <code>9fd9950</code> — chore: add clean mcp_config.json</li>
          <li><strong>Documentation reorganization:</strong> <code>60e3945</code> — docs: reorganize documentation and add repomix-output.xml; <code>4340af4</code> — feat(doc): finalize documentation reorganization and gitignore update</li>
          <li><strong>Phase 2 completion:</strong> <code>cdd727c</code> — docs: add Phase 2 completion report</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a5c79b9" target="_blank" rel="noopener">a5c79b9</a> — feature gap completion</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c193b16" target="_blank" rel="noopener">c193b16</a> — walletId type fixes</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3904c75" target="_blank" rel="noopener">3904c75</a> — firebase auth init fix</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4340af4" target="_blank" rel="noopener">4340af4</a> — documentation reorganization</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>10/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Week:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>PR Review &amp; Merges:</strong>
            <ul>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/91b63c4" target="_blank" rel="noopener">91b63c4</a> — Merge PR #6: budget-core</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c5bc5ef" target="_blank" rel="noopener">c5bc5ef</a> — Merge PR #7: budget-first UI and API services</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/28f459f" target="_blank" rel="noopener">28f459f</a> — Merge PR #8: multi-wallet</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/15b0798" target="_blank" rel="noopener">15b0798</a> — Merge PR #9: quick-add</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/df74302" target="_blank" rel="noopener">df74302</a> — Merge PR #10: aesthetics</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/5448dc9" target="_blank" rel="noopener">5448dc9</a> — Merge PR #156: type errors &amp; formatting (Vuong)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/46ada24" target="_blank" rel="noopener">46ada24</a> — Merge PR #157: update lockfile (Vuong)</li>
            </ul>
          </li>
          <li>Reviewed all of Kiet's code (onboarding wizard, dashboard, all pages) and Vuong's code (API, auth, DevOps)</li>
          <li>Code review for all PRs before merging to main</li>
          <li>Received feedback from Kiet and Vuong on architecture and API design, and adjusted accordingly</li>
          <li><strong>Cross-Team Review — Calorie Web:</strong> Organized review and submitted 2 PR feedback via kiet00394-collab account:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak resets to 0 on page reload; needs to persist streak to profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> uses UTC causing a 1-day streak offset</li>
            </ul>
          </li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li>7 PR merges documented above</li>
          <li>Code review on all PRs in the repository</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/pulse" target="_blank" rel="noopener">GitHub Pulse</a> — project activity overview</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Teacher Feedback Received:</h3>
        <ul>
          <li>"AI Quick Add with Gemini is a highlight" — Architected and implemented the <code>/api/ai/quick-add</code> endpoint with Gemini NLP adapter for natural language transaction parsing — <code>8b3ca4b</code></li>
          <li>"4-step Onboarding Wizard is great for UX" — Designed the 4-step flow specification (personal info, wallet, budget, first transaction) and reviewed implementation — <code>fff7e94</code></li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>10/10</p>

        <h2>Personal Contribution Summary</h2>

        <h3>Summary of your contributions to the project:</h3>
        <p>
          I served as Team Lead, Backend Developer, and Database Architect for the Finance Tracker V3 project.
          I led the team from ideation through to product completion, designed the entire system architecture
          (Next.js 16 + Hono API + Supabase PostgreSQL + Drizzle ORM), designed the ERD with 14 tightly-related tables,
          and designed the Monorepo structure with Turborepo + pnpm Workspace (7 packages).
          I directly coded the core foundational features: Firebase Social Login with Session Cookies,
          Budget-First Infrastructure, Multi-Wallet Management, Quick-Add with NLP and Simple modes,
          Global UI Design v3 Aesthetics, Dashboard S2S Engine, AI Quick Add with Gemini,
          and Container-Presentational Pattern for the entire component architecture.
          I reviewed and merged all team PRs (7 PRs documented), ensuring code quality and project timeline.
          I also handled documentation (ARCHITECTURE.md, README.md, Phase reports) and database migration management.
          I am most proud of the Budget-First architecture — placing budgets at the center rather than just tracking income/expenses,
          and the AI Quick Add system that enables users to input transactions quickly using natural language.
          Skills learned: Turborepo monorepo management, Drizzle ORM, Supabase PostgreSQL,
          Firebase Admin SDK, Gemini AI integration, Container-Presentational architecture pattern,
          and team leadership in an Agile environment with Git workflow and Conventional Commits.
        </p>

        <h3>Estimated % contribution to the team:</h3>
        <p>~40%</p>

        <h3>Overall Self-Assessment Score:</h3>
        <p>10/10</p>

        <br/>
        <p><Link href="/">← Back to Final Report</Link></p>
      </div>
    </>
  );
}
