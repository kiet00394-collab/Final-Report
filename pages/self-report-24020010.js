import Head from 'next/head';
import Link from 'next/link';

export default function SelfReportKiet() {
  return (
    <>
      <Head>
        <title>Self-Report 24020010 — Chau Tuan Kiet | Finance Tracker V3</title>
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
            <tr><td><strong>Full Name</strong></td><td>Chau Tuan Kiet</td></tr>
            <tr><td><strong>Student ID</strong></td><td>24020010</td></tr>
            <tr><td><strong>Team</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Role</strong></td><td>Frontend / UI-UX / Dashboard / Components</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Week:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Participated in team meetings to brainstorm ideas, selected Finance Tracker V3 — a personal finance management app following the Budget-First philosophy</li>
          <li>Researched Frontend technologies: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI, shadcn/ui, TanStack Query, Recharts</li>
          <li>Contributed to Figma wireframe design for all 9 pages (Dashboard, Transactions, Wallets, Budgets, Goals, Bills, Analytics, Settings, Onboarding)</li>
          <li>Proposed the Container/Presentational pattern for component architecture</li>
          <li>Set up dev environment, participated in monorepo structure review</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2dd223e" target="_blank" rel="noopener">2dd223e</a> — initial framework structure (review participation)</li>
          <li>Figma wireframe: designed all pages — Dashboard, Transactions, Wallets, Budgets, Goals, Bills, Analytics, Settings, Onboarding</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Week:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Onboarding Wizard:</strong> Built a 4-step onboarding flow (personal info, wallet, budget, first transaction) — commit <code>fff7e94</code> (solo) and <code>a152b3b</code> (collaboration with Vuong)</li>
          <li><strong>Dashboard:</strong> Budget-First layout with Safe-to-Spend display, ring chart, goals overview, upcoming bills, dashboard localization refactor (Phase 3) — <code>6c6cdd7</code> (collab)</li>
          <li><strong>Transactions Page:</strong> Transaction list with search, filter, sort and CRUD operations</li>
          <li><strong>Wallets Page:</strong> Multi-wallet management (cash, bank, credit cards, e-wallets) with inter-wallet transfer functionality</li>
          <li><strong>Budgets Page:</strong> Category-based budget setup and tracking</li>
          <li><strong>Goals Page:</strong> Savings goal progress tracking</li>
          <li><strong>Bills Page:</strong> Recurring bill management</li>
          <li><strong>Analytics Page:</strong> Spending analysis charts (Recharts)</li>
          <li><strong>Settings Page:</strong> Category and user profile management</li>
          <li><strong>Auth UI:</strong> Firebase social login (Google, Facebook, GitHub, Apple) with loading states — <code>b4e8551</code> (collab, Phase 9)</li>
          <li><strong>Responsive Design:</strong> Full support for mobile, tablet, and desktop via Tailwind CSS breakpoints</li>
          <li>Frontend refactor, React Query, optimistic updates (Phases 6-8) — <code>2a9423d</code> (collab)</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li>Solo: <a href="https://github.com/tducn110/Tracker_yourMoney/commit/fff7e94" target="_blank" rel="noopener">fff7e94</a> feat: onboarding wizard 4 buoc</li>
          <li>Collab (kiet00394-collab, 11 commits with Vuong):
            <ul>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/b4e8551" target="_blank" rel="noopener">b4e8551</a> — enhance login UI with premium background (Phase 9)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2a9423d" target="_blank" rel="noopener">2a9423d</a> — frontend refactor, React Query, optimistic updates (Phases 6-8)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/49cfa80" target="_blank" rel="noopener">49cfa80</a> — wire QuickAddModal and SimpleQuickInput to real API</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/da139ec" target="_blank" rel="noopener">da139ec</a> — recurring bills worker, notifications and settings UI</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/7d6a643" target="_blank" rel="noopener">7d6a643</a> — resolve typechecking and UI warnings</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/6c6cdd7" target="_blank" rel="noopener">6c6cdd7</a> — dashboard localization refactor (Phase 3)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa7319a" target="_blank" rel="noopener">fa7319a</a> — Tailwind v4 migration and frontend fixes</li>
            </ul>
          </li>
        </ul>

        <h3>Challenges Encountered:</h3>
        <ul>
          <li>Tailwind CSS v4 had breaking changes from v3, requiring time to migrate and fix incompatible classes</li>
          <li>Optimistic updates with TanStack Query required careful rollback handling when the API returned errors</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Week:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Wired QuickAddModal and SimpleQuickInput to real API calls — <code>49cfa80</code> (collab)</li>
          <li>Integrated TanStack Query for data fetching, cache invalidation, and optimistic updates across all pages</li>
          <li>Fixed client toSnake interceptor that broke all API writes — <code>f393e47</code> (collab)</li>
          <li>Connected frontend to API endpoints: transactions, wallets, budgets, goals, bills, analytics</li>
          <li>Implemented loading skeletons and error boundaries for improved user experience</li>
          <li>Wallet OCC (Optimistic Concurrency Control) and audit trails — <code>97b4f4d</code> (collab)</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/49cfa80" target="_blank" rel="noopener">49cfa80</a> — wire QuickAddModal and SimpleQuickInput to real API</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/f393e47" target="_blank" rel="noopener">f393e47</a> — fix toSnake interceptor</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/97b4f4d" target="_blank" rel="noopener">97b4f4d</a> — financial logic integrity (collab)</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Week:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Tailwind CSS v4 migration and frontend fixes — <code>fa7319a</code> (collab)</li>
          <li>Backend scale &amp; performance (Phase 11-15) combined with UI Tailwind v4 fixes — <code>59af0c5</code> (collab)</li>
          <li>Resolved typechecking and UI warnings — <code>7d6a643</code> (collab)</li>
          <li>Enhanced login UI with premium background and loading state (Phase 9) — <code>b4e8551</code> (collab)</li>
          <li>Firebase SSR crash fix, cache headers, API/DB/UI updates — <code>ecd5fb0</code> (collab)</li>
          <li>Loading skeletons and error boundaries for all pages</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa7319a" target="_blank" rel="noopener">fa7319a</a> — Tailwind v4 migration</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/59af0c5" target="_blank" rel="noopener">59af0c5</a> — backend scale &amp; performance, UI fixes</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/ecd5fb0" target="_blank" rel="noopener">ecd5fb0</a> — Firebase SSR crash fix</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Week:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Reviewed Vuong's code on CategoryManager component and CashWalletWidget</li>
          <li>Reviewed Duc's PRs on wallet integration, dashboard refactor, AI Quick Add</li>
          <li>Received feedback from Duc on Container/Presentational pattern and applied it</li>
          <li>Received feedback from Vuong on error boundary handling and implemented it</li>
          <li><strong>Cross-Team Review — Calorie Web:</strong> Reviewed and submitted 2 PR feedback via kiet00394-collab account:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak resets to 0 on page reload; needs to persist streak to profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> uses UTC causing a 1-day streak offset</li>
            </ul>
          </li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a1847d3" target="_blank" rel="noopener">a1847d3</a> — Merge PR #116 (review participation)</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Teacher Feedback Received:</h3>
        <ul>
          <li>"4-step Onboarding Wizard is great for UX, should be mentioned in self-report" — Updated, highlighting the onboarding flow in the report</li>
          <li>"AI Quick Add with Gemini is a highlight" — Added details in the team report</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>8/10</p>

        <h2>Personal Contribution Summary</h2>

        <h3>Summary of your contributions to the project:</h3>
        <p>
          I was responsible for the entire Frontend of the Finance Tracker V3 project. I built 9 complete pages including Dashboard (Budget-First layout), Transactions (CRUD + search/filter), Wallets (multi-wallet + transfers), Budgets, Goals, Bills, Analytics (charts), Settings, and a 4-step Onboarding Wizard.
          I established the component architecture following the Container/Presentational pattern, integrated TanStack Query for data fetching with optimistic updates, and ensured responsive design across all devices.
          In addition to solo commits, I participated in 11 collaborative commits with Vuong via the kiet00394-collab account, covering critical features such as Tailwind v4 migration, Firebase SSR fix, recurring bills worker, and login UI enhancement.
          I am most proud of the Onboarding Wizard that gives new users a seamless experience, and the Budget-First Dashboard that lets users grasp their financial situation at a single glance.
          Skills learned: React 19 patterns, TanStack Query, Tailwind CSS v4, Container/Presentational architecture, and teamwork via Git workflow with Conventional Commits.
        </p>

        <h3>Estimated % contribution to the team:</h3>
        <p>~30%</p>

        <h3>Overall Self-Assessment Score:</h3>
        <p>9/10</p>

        <br/>
        <p><Link href="/">← Back to Final Report</Link></p>
      </div>
    </>
  );
}
