import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Final Project Report — Finance Tracker V3 | Team Antigravity</title>
        <meta name="description" content="Final Project Report — Finance Tracker V3 by Team Antigravity" />
      </Head>

      <header>
        <h1>📊 FINAL PROJECT REPORT</h1>
        <p>Finance Tracker V3 — Personal Finance Management Application</p>
        <p style={{marginTop:'0.5rem'}}>Team Antigravity — Submission Date: 15/05/2026</p>
      </header>

      <div className="container">

        {/* ── TEAM INFORMATION ── */}
        <h2>Team Information</h2>
        <table>
          <tbody>
            <tr><td><strong>Team Name</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Project Name</strong></td><td>Finance Tracker V3 — Personal Finance Management App</td></tr>
            <tr><td><strong>GitHub Repository</strong></td><td><a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">github.com/tducn110/Tracker_yourMoney</a></td></tr>
            <tr><td><strong>Demo Deploy</strong></td><td><a href="https://finance-for-me-local.vercel.app" target="_blank" rel="noopener">finance-for-me-local.vercel.app</a></td></tr>
            <tr><td><strong>Video Demo</strong></td><td>(updating)</td></tr>
            <tr><td><strong>Submission Date</strong></td><td>15/05/2026</td></tr>
          </tbody>
        </table>

        <h3>Team Members</h3>
        <table>
          <thead>
            <tr><th>Full Name</th><th>Student ID</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>Nguyen Tam Duc</td><td>(fill in)</td><td>Team Lead / Backend / Database / Architecture</td></tr>
            <tr><td>Tran Vo Ba Vuong</td><td>2420008</td><td>Backend / Auth / Middleware / DevOps / Worker</td></tr>
            <tr><td>Chau Tuan Kiet</td><td>24020010</td><td>Frontend / UI-UX / Dashboard / Components</td></tr>
          </tbody>
        </table>

        {/* ── PROJECT OVERVIEW ── */}
        <h2>Project Overview &amp; Technologies Used</h2>

        <h3>Application Description</h3>
        <p>
          Finance Tracker V3 is a personal finance management application following the <strong>Budget-First</strong> philosophy — putting budgets at the center.
          The app helps users track income and expenses, manage multiple wallets (cash, bank, credit cards, e-wallets),
          set category-based budgets, monitor recurring bills, set savings goals, and analyze spending habits through charts.
          Targeted at individuals who want to manage their finances scientifically and accurately.
        </p>

        <h3>Tech Stack</h3>
        <table>
          <thead>
            <tr><th>Layer</th><th>Technology</th></tr>
          </thead>
          <tbody>
            <tr><td>Frontend</td><td>Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI, shadcn/ui, TanStack Query, Recharts, Motion</td></tr>
            <tr><td>Backend</td><td>Hono API (Node.js), TypeScript, Zod, Firebase Auth/Admin, JWT, Pino logging</td></tr>
            <tr><td>Database</td><td>Supabase PostgreSQL, Drizzle ORM (14 tables)</td></tr>
            <tr><td>Auth</td><td>Firebase Authentication (Google, Facebook, GitHub, Apple)</td></tr>
            <tr><td>Monorepo</td><td>Turborepo + pnpm Workspace (apps/api, apps/web, apps/worker, packages/db, packages/api-client, packages/shared-schemas, packages/cache)</td></tr>
            <tr><td>Deploy</td><td>Vercel</td></tr>
          </tbody>
        </table>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Dashboard Budget-First:</strong> Safe-to-Spend is the first thing users see, paired with an intuitive ring chart.</li>
          <li><strong>Multi-Wallet:</strong> Support for multiple wallets (cash, bank, credit card, e-wallet, investment) with inter-wallet transfers.</li>
          <li><strong>AI Quick Add:</strong> Add transactions quickly using natural language (e.g., "Breakfast 35k"), auto-detects category and amount via Gemini AI.</li>
          <li><strong>Budget Management:</strong> Set category budgets, track spending percentages, receive overspend alerts.</li>
          <li><strong>Recurring Bills:</strong> Track monthly/quarterly/yearly bills, payment history, automatic reminders.</li>
          <li><strong>Savings Goals:</strong> Set goals with deadlines, track progress, fund directly from wallets.</li>
          <li><strong>Analytics:</strong> Monthly income/expense charts, category spending breakdown.</li>
          <li><strong>Onboarding Wizard:</strong> 4-step guide for new users: personal info, wallet setup, budget setup, first transaction.</li>
          <li><strong>Multi-language:</strong> Vietnamese and English support.</li>
          <li><strong>Data Safety:</strong> Soft-delete, idempotency keys, Decimal.js for financial precision, optimistic concurrency.</li>
        </ul>

        {/* ── SETUP GUIDE ── */}
        <h2>Setup &amp; Installation Guide</h2>

        <h3>System Requirements</h3>
        <table>
          <thead>
            <tr><th>Tool</th><th>Version</th></tr>
          </thead>
          <tbody>
            <tr><td>Node.js</td><td>&gt;= 20.x</td></tr>
            <tr><td>pnpm</td><td>&gt;= 9.x</td></tr>
            <tr><td>PostgreSQL</td><td>&gt;= 15 (Supabase)</td></tr>
          </tbody>
        </table>

        <h3>Installation Steps</h3>
        <pre><code>{`# 1. Clone repository
git clone https://github.com/tducn110/Tracker_yourMoney.git
cd Tracker_yourMoney

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local
# Fill in: DATABASE_URL, FIREBASE_*, JWT_SECRET, GEMINI_API_KEY

# 4. Initialize database
pnpm db:generate    # Generate migration files from Drizzle schema
pnpm db:migrate     # Apply migrations to PostgreSQL
pnpm db:seed        # Create sample data

# 5. Run app (dev)
pnpm dev            # Start both frontend + backend

# Production build
pnpm build          # Build via Turborepo
`}</code></pre>

        {/* ── TASK 1 ── */}
        <h2>Task 1 — Project Planning &amp; Teamwork</h2>

        <h3>(a) Role Assignment &amp; Contributions</h3>
        <p>The team divided work by application layer, each member owning a core domain. All contributions are backed by Git evidence.</p>

        <table>
          <thead>
            <tr><th>Member</th><th>Role</th><th>Key Contributions (Backed by Git Evidence)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nguyen Tam Duc</strong><br/>(tdu._cn)</td>
              <td><span className="badge badge-blue">Team Lead</span> <span className="badge badge-green">Backend</span></td>
              <td>
                <strong>Project Leadership &amp; Architecture:</strong> Led the team, defined the Budget-First vision, designed the monorepo structure (Turborepo + pnpm workspaces: <code>apps/api</code>, <code>apps/web</code>, <code>apps/worker</code>, <code>packages/db</code>, <code>packages/api-client</code>, <code>packages/shared-schemas</code>, <code>packages/cache</code>).
                <br/><strong>Database Architecture:</strong> Designed the complete 14-table PostgreSQL schema, configured Drizzle ORM with migration system, wrote all repositories (Transaction, Bill, Goal, Budget, Category, Analytics). Cleaned up unused tables — <code>9637add</code> chore(db): remove unused budget_wallets table (#17).
                <br/><strong>ERD &amp; Documentation:</strong> Created the Entity-Relationship Diagram in <code>doc/wiki/erd.md</code> using Mermaid, wrote comprehensive ARCHITECTURE.md.
                <br/><strong>Hono API Architecture:</strong> Designed the full REST API layer with 12 route groups (<code>/api/auth</code>, <code>/api/v1/transactions</code>, <code>/api/v1/wallets</code>, <code>/api/v1/budgets</code>, <code>/api/v1/goals</code>, <code>/api/v1/bills</code>, <code>/api/v1/categories</code>, <code>/api/v1/analytics</code>, <code>/api/v1/user</code>, <code>/api/v1/notifications</code>, <code>/api/v1/ai</code>, <code>/api/v1/health</code>).
                <br/><strong>Budget Engine &amp; S2S:</strong> Built the Safe-to-Spend calculation engine with category-based budget tracking and dashboard refactoring — <code>f650aed</code> feat(api,web): refactor dashboard and S2S engine (#152).
                <br/><strong>AI Integration:</strong> Implemented AI Quick Add with Gemini NLP parsing, auto-detecting categories and amounts from natural language — <code>8b3ca4b</code> feat(api,web): AI Quick Add with Gemini integration (#150).
                <br/><strong>Wallet &amp; Analytics:</strong> Built multi-wallet management API with inter-wallet transfers, analytics aggregation, and spending breakdown — <code>1439c58</code> feat(web): wallet integration and analytics (#154).
                <br/><strong>Zod Validation Schemas:</strong> Created shared validation schemas in <code>packages/shared-schemas</code> ensuring full type-safety from API to frontend.
                <br/><strong>Seed Data:</strong> Built database seeding scripts for demo and testing data.
                <br/><strong>Pull Request Management:</strong> Reviewed and merged PRs (#156, #157), maintained code quality across the team.
              </td>
            </tr>
            <tr>
              <td><strong>Tran Vo Ba Vuong</strong><br/>(ViccVuongVicc)</td>
              <td><span className="badge badge-green">Backend</span> <span className="badge badge-yellow">DevOps</span></td>
              <td>
                <strong>Auth &amp; Security:</strong> Fixed race conditions in AuthProvider social login flow — <code>1cf5543</code> fix(web): race condition guard in AuthProvider (#101). Added step tracking for production error debugging — <code>99d7143</code> fix(api): step tracking to /api/auth/social (#98).
                <br/><strong>Vercel Deployment:</strong> Fixed auth and API deployment by embedding Hono as Next.js catch-all route — <code>fa1a282</code> fix(vercel): fix auth and api deployment (#144). Fixed dynamic CORS for *.vercel.app subdomains — <code>1b9f7be</code> fix(api): dynamic CORS origin support (#96).
                <br/><strong>API Hardening:</strong> Added rate limiting with proper error responses — <code>64cbe5d</code>, <code>a0e01a8</code> fix(api): rate limit fixes (#99, #100). Removed dead imports for cold start optimization — <code>eb079e8</code> fix(api): cold start optimization (#97).
                <br/><strong>UI Components:</strong> Built CategoryManager — <code>1013b1f</code>, CashWalletWidget — <code>4898849</code>, useMounted hook — <code>08d5053</code>.
                <br/><strong>System Refactor:</strong> Comprehensive UI refactor and auth optimization (#129–#136) — <code>613a823</code>. Eliminated magic strings, fixed any types, migrated console.* to Pino — <code>4e629b1</code>.
                <br/><strong>Database Fixes:</strong> Added missing migrations for PostgreSQL compatibility and bigint IDs — <code>c66de08</code>.
                <br/><strong>Bug Fixes:</strong> Fixed type errors in wallets page, normalized currency formatting — <code>d17a5ae</code>. Fixed budget form category filtering and auto-seed — <code>c92cfb9</code>. Fixed seed default categories for all users — <code>7090921</code>.
                <br/><strong>Documentation:</strong> Updated implementation plan and backlog — <code>bfa1c11</code>.
              </td>
            </tr>
            <tr>
              <td><strong>Chau Tuan Kiet</strong></td>
              <td><span className="badge badge-blue">Frontend</span> <span className="badge badge-green">UI/UX</span></td>
              <td>
                <strong>Onboarding Wizard:</strong> Built 4-step onboarding flow (personal info, wallet, budget, first transaction) — <code>fff7e94</code> feat: onboarding wizard 4 buoc. Later integrated local onboarding actions with DeepSeek MCP skills — <code>a152b3b</code> (collaboration with Tran Vo Ba Vuong).
                <br/><strong>Collaborative Commits (kiet00394-collab, 11 commits with Tran Vo Ba Vuong):</strong>
                <br/>&nbsp;&nbsp;• Financial logic integrity: wallet OCC, audit trails, PostgreSQL compat, boolean schemas — <code>97b4f4d</code>
                <br/>&nbsp;&nbsp;• Worker DB env, Firebase SSR crash fix, cache headers, API/DB/UI updates — <code>ecd5fb0</code>
                <br/>&nbsp;&nbsp;• Tailwind v4 migration and frontend fixes — <code>fa7319a</code>
                <br/>&nbsp;&nbsp;• Fixed toSnake interceptor breaking all API writes — <code>f393e47</code>
                <br/>&nbsp;&nbsp;• Wired QuickAddModal and SimpleQuickInput to real API — <code>49cfa80</code>
                <br/>&nbsp;&nbsp;• Backend scale &amp; performance (Phase 11-15), UI Tailwind v4 fixes — <code>59af0c5</code>
                <br/>&nbsp;&nbsp;• Recurring bills worker, notifications and settings UI — <code>da139ec</code>
                <br/>&nbsp;&nbsp;• Resolved typechecking and UI warnings — <code>7d6a643</code>
                <br/>&nbsp;&nbsp;• Enhanced login UI with premium background and loading state (Phase 9) — <code>b4e8551</code>
                <br/>&nbsp;&nbsp;• Frontend refactor, React Query, optimistic updates (Phases 6-8) — <code>2a9423d</code>
                <br/>&nbsp;&nbsp;• Dashboard localization refactor (Phase 3) — <code>6c6cdd7</code>
                <br/><strong>Dashboard:</strong> Budget-First layout with Safe-to-Spend display, ring chart, goals overview, upcoming bills.
                <br/><strong>All Pages:</strong> Transactions (search/filter/sort/CRUD), Wallets (multi-wallet + transfers), Budgets (setup &amp; tracking), Goals (progress tracking), Bills (recurring management), Analytics (charts), Settings (categories &amp; profile).
                <br/><strong>Auth UI:</strong> Firebase social login integration (Google, Facebook, GitHub, Apple) with loading states.
                <br/><strong>Responsive Design:</strong> Full responsive support across mobile, tablet, and desktop using Tailwind CSS breakpoints.
                <br/><strong>Data Layer:</strong> TanStack Query integration for data fetching, cache invalidation, optimistic updates, loading skeletons, and error boundaries.
                <br/><strong>Component Architecture:</strong> Applied Container/Presentational pattern separating logic from presentation for maintainability.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>(b) Wireframe</h3>
        <ul>
          <li><strong>Tool used:</strong> Figma</li>
          <li><strong>Pages designed:</strong></li>
        </ul>
        <ul className="checklist">
          <li className="done">Dashboard (Budget-First overview)</li>
          <li className="done">Transactions (list, filter, add/edit/delete)</li>
          <li className="done">Wallets (multi-wallet management, transfers)</li>
          <li className="done">Budgets (setup &amp; tracking)</li>
          <li className="done">Goals (savings targets)</li>
          <li className="done">Bills (recurring bills)</li>
          <li className="done">Analytics (spending charts)</li>
          <li className="done">Settings (categories, profile)</li>
          <li className="done">Onboarding (4-step wizard)</li>
        </ul>

        <h3>(c) Project Plan — Milestones</h3>
        <table>
          <thead>
            <tr><th>Milestone</th><th>Deadline</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Complete wireframe &amp; Figma design</td><td>10/04/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Setup GitHub, Monorepo &amp; Database Schema</td><td>15/04/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Complete Authentication (Firebase + JWT)</td><td>18/04/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Basic UI (Dashboard, Transactions, Wallets)</td><td>22/04/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Database integration &amp; full CRUD API</td><td>28/04/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>AI Quick Add, Analytics, Bills, Goals</td><td>05/05/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Onboarding Wizard, Optimization &amp; Peer Review</td><td>12/05/2026</td><td><span className="badge badge-green">On time</span></td></tr>
            <tr><td>Submission</td><td>15/05/2026</td><td><span className="badge badge-green">On time</span></td></tr>
          </tbody>
        </table>

        <h3>(d) GitHub Repository</h3>
        <p>
          <strong>Repository link:</strong>{' '}
          <a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">
            github.com/tducn110/Tracker_yourMoney
          </a>
        </p>

        <h3>(e) GitHub Workflow</h3>
        <p>The team uses Git Flow with <code>main</code> branch and feature branches. Each feature is developed on a dedicated branch and merged via Pull Request. Commit messages follow <strong>Conventional Commits</strong>.</p>

        <p><strong>Commit convention:</strong></p>
        <pre><code>{`feat:     New feature
fix:      Bug fix
chore:    Maintenance work (update deps, config)
docs:     Documentation updates
refactor: Code restructuring`}</code></pre>

        <p><strong>Representative commit messages:</strong></p>
        <pre><code>{`fff7e94 feat: onboarding wizard 4 buoc - info, wallet, budget, transaction  (Chau Tuan Kiet)
1439c58 feat(web): enhance wallet integration and analytics (#154)         (Nguyen Tam Duc)
f650aed feat(api,web): refactor dashboard and S2S engine (#152)            (Nguyen Tam Duc)
8b3ca4b feat(api,web): implement AI Quick Add with Gemini (#150)           (Nguyen Tam Duc)
613a823 feat(system): comprehensive UI refactor and auth (#129-#136)       (Tran Vo Ba Vuong)
fa1a282 fix(vercel): fix auth and api deployment as Next.js route (#144)   (Tran Vo Ba Vuong)
4e629b1 refactor(api,db): eliminate magic strings, migrate to pino          (Tran Vo Ba Vuong)
d17a5ae fix(web): resolve type errors and normalize currency formatting     (Tran Vo Ba Vuong)
1cf5543 fix(web): race condition guard in AuthProvider (#101)               (Tran Vo Ba Vuong)

── Collaborative (kiet00394-collab: Chau Tuan Kiet &amp; Tran Vo Ba Vuong) ──
2a9423d feat: frontend refactor, react-query, optimistic updates (Phases 6-8)
b4e8551 feat(web): enhance login UI with premium background (Phase 9)
59af0c5 feat: backend scale &amp; performance phase 11-15, ui tailwind v4 fixes
fa7319a feat(ui): tailwind v4 migration and frontend fixes (#87)
97b4f4d fix: financial logic integrity — wallet OCC, PostgreSQL compat
da139ec feat(automation): add recurring bills worker, notifications &amp; settings UI`}</code></pre>

        {/* ── TASK 2 ── */}
        <h2>Task 2 — Implement User Interface</h2>

        <h3>(a) Pages Built</h3>
        <table>
          <thead>
            <tr><th>Page</th><th>URL / Route</th><th>Description</th><th>Implemented By</th></tr>
          </thead>
          <tbody>
            <tr><td>Dashboard</td><td><code>/</code></td><td>Budget-First overview: Safe-to-Spend, ring chart, goals, upcoming bills</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API/S2S Engine)</td></tr>
            <tr><td>Transactions</td><td><code>/transactions</code></td><td>Transaction list with search, filter, import/export, full CRUD</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API)</td></tr>
            <tr><td>Wallets</td><td><code>/wallets</code></td><td>Multi-wallet management with inter-wallet transfers</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API)</td></tr>
            <tr><td>Budgets</td><td><code>/budgets</code></td><td>Set category budgets, track spending percentages</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API/S2S Engine)</td></tr>
            <tr><td>Goals</td><td><code>/goals</code></td><td>Savings goals with deadlines and progress tracking</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API)</td></tr>
            <tr><td>Bills</td><td><code>/bills</code></td><td>Manage recurring bills, payment history</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API)</td></tr>
            <tr><td>Analytics</td><td><code>/analytics</code></td><td>Income/expense charts, category spending breakdown</td><td>Chau Tuan Kiet (UI) + Nguyen Tam Duc (API/Analytics Engine)</td></tr>
            <tr><td>Settings</td><td><code>/settings</code></td><td>Category management, profile, language settings</td><td>Chau Tuan Kiet</td></tr>
            <tr><td>Onboarding</td><td><code>/onboarding</code></td><td>4-step wizard for new users</td><td>Chau Tuan Kiet</td></tr>
          </tbody>
        </table>

        <h3>(b) Tailwind CSS Usage</h3>
        <p>
          The entire UI is built with <strong>Tailwind CSS v4</strong> combined with <strong>shadcn/ui</strong> (Radix UI).
          Responsive system uses breakpoints: <code>sm</code> (640px), <code>md</code> (768px), <code>lg</code> (1024px), <code>xl</code> (1280px).
          Dark mode is supported via the <code>dark</code> class.
        </p>

        <p><strong>Key utility patterns used:</strong></p>
        <ul>
          <li>Responsive grid: <code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4</code></li>
          <li>Custom color scheme: primary (#0f3460), accent (#e94560), surface (#f8f9fa)</li>
          <li>Dark mode: <code>dark:bg-gray-900 dark:text-white</code></li>
          <li>Transitions &amp; animations: Motion (Framer Motion) with Tailwind</li>
          <li>Container queries for card components</li>
        </ul>

        <h3>(c) Interactive Features</h3>
        <table>
          <thead>
            <tr><th>Feature</th><th>Description</th><th>File / Component</th><th>Implemented By</th></tr>
          </thead>
          <tbody>
            <tr><td>Quick Add Modal</td><td>Add transactions via natural language with AI parsing</td><td><code>QuickAddModal</code>, <code>AIQuickAdd</code></td><td>Nguyen Tam Duc (API) + Chau Tuan Kiet (UI)</td></tr>
            <tr><td>Form Validation</td><td>Zod schema validation across frontend and backend</td><td>Shared schemas package</td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Search &amp; Filter</td><td>Transaction search/filter by category, date, amount</td><td><code>TransactionsContainer</code></td><td>Chau Tuan Kiet</td></tr>
            <tr><td>Charts</td><td>Ring chart, bar chart, line chart via Recharts</td><td>Dashboard, Analytics pages</td><td>Chau Tuan Kiet</td></tr>
            <tr><td>Social Login</td><td>Google, Facebook, GitHub, Apple login UI with race condition guard</td><td><code>AuthProvider</code>, <code>LoginPage</code></td><td>Chau Tuan Kiet + Tran Vo Ba Vuong</td></tr>
            <tr><td>Onboarding Wizard</td><td>Multi-step form for new users</td><td><code>OnboardingWizard</code></td><td>Chau Tuan Kiet</td></tr>
            <tr><td>Loading Skeletons</td><td>Skeleton placeholders while data loads</td><td><code>Skeleton</code> components</td><td>Chau Tuan Kiet</td></tr>
            <tr><td>Category Manager</td><td>CRUD for user categories</td><td><code>CategoryManager</code></td><td>Tran Vo Ba Vuong</td></tr>
            <tr><td>Cash Wallet Widget</td><td>Wallet balance display widget</td><td><code>CashWalletWidget</code></td><td>Tran Vo Ba Vuong</td></tr>
          </tbody>
        </table>

        <h3>(d) Responsive Design</h3>
        <ul className="checklist">
          <li className="done">Mobile (&lt; 768px) — Single column layout, bottom navigation, collapsible sidebar</li>
          <li className="done">Tablet (768px – 1024px) — 2-column grid, compact sidebar</li>
          <li className="done">Desktop (&gt; 1024px) — Full sidebar, multi-column dashboard, widescreen charts</li>
        </ul>
        <p>All pages were tested via Chrome DevTools Device Mode and work correctly at every breakpoint.</p>

        {/* ── TASK 3 ── */}
        <h2>Task 3 — Database Integration &amp; Dynamic Content</h2>

        <h3>(a) Database Design</h3>
        <ul>
          <li><strong>Database system:</strong> Supabase PostgreSQL (TiDB Serverless compatible)</li>
          <li><strong>ORM:</strong> Drizzle ORM</li>
          <li><strong>Number of tables:</strong> 14</li>
        </ul>

        <p><strong>Table list:</strong></p>
        <table>
          <thead>
            <tr><th>Table</th><th>Description</th><th>Key Columns</th></tr>
          </thead>
          <tbody>
            <tr><td>users</td><td>User accounts</td><td><code>id</code>, <code>firebase_uid</code>, <code>email</code>, <code>name</code>, <code>avatar_url</code></td></tr>
            <tr><td>wallets</td><td>Wallets (cash, bank, credit card...)</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>type</code>, <code>balance</code>, <code>currency</code></td></tr>
            <tr><td>categories</td><td>Income/expense categories</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>type</code>, <code>icon</code>, <code>color</code></td></tr>
            <tr><td>transactions</td><td>Income/expense transactions</td><td><code>id</code>, <code>user_id</code>, <code>wallet_id</code>, <code>category_id</code>, <code>amount</code>, <code>type</code>, <code>note</code></td></tr>
            <tr><td>budgets</td><td>Category budgets</td><td><code>id</code>, <code>user_id</code>, <code>category_id</code>, <code>amount</code>, <code>period</code></td></tr>
            <tr><td>goals</td><td>Savings goals</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>target_amount</code>, <code>current_amount</code>, <code>deadline</code></td></tr>
            <tr><td>bills</td><td>Recurring bills</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>amount</code>, <code>frequency</code>, <code>due_date</code></td></tr>
            <tr><td>notifications</td><td>User notifications</td><td><code>id</code>, <code>user_id</code>, <code>type</code>, <code>message</code>, <code>is_read</code></td></tr>
            <tr><td>audit_logs</td><td>Activity log</td><td><code>id</code>, <code>user_id</code>, <code>action</code>, <code>entity_type</code>, <code>entity_id</code></td></tr>
            <tr><td>refresh_tokens</td><td>JWT refresh tokens</td><td><code>id</code>, <code>user_id</code>, <code>token_hash</code>, <code>expires_at</code></td></tr>
            <tr><td>user_settings</td><td>User preferences</td><td><code>id</code>, <code>user_id</code>, <code>language</code>, <code>currency</code>, <code>theme</code></td></tr>
            <tr><td>idempotency_keys</td><td>Duplicate transaction prevention</td><td><code>key</code>, <code>user_id</code>, <code>created_at</code></td></tr>
            <tr><td>wallet_transfers</td><td>Inter-wallet transfer history</td><td><code>id</code>, <code>user_id</code>, <code>from_wallet</code>, <code>to_wallet</code>, <code>amount</code></td></tr>
            <tr><td>bill_payments</td><td>Bill payment history</td><td><code>id</code>, <code>bill_id</code>, <code>amount</code>, <code>paid_at</code></td></tr>
          </tbody>
        </table>
        <p><em>Database designed by: Nguyen Tam Duc</em></p>

        <h3>(b) Database Connection</h3>
        <ul>
          <li><strong>Server-side technology:</strong> Hono API (Node.js) embedded in Next.js App Router via catch-all route <code>/api/[[...route]]</code></li>
          <li><strong>Connection method:</strong> RESTful API with typed client (<code>@finance/api-client</code>) using Axios</li>
          <li><strong>Authentication:</strong> Firebase ID Token → JWT Access Token → session cookie (14-day TTL)</li>
        </ul>

        <ul className="checklist">
          <li className="done">Create — Add transactions, wallets, budgets, goals, bills</li>
          <li className="done">Read — Lists, details, search, filter</li>
          <li className="done">Update — Edit information, modify records</li>
          <li className="done">Delete — Soft-delete with <code>deleted_at</code> timestamp</li>
        </ul>

        <p>Connection architecture: <strong>Next.js (App Router) → Hono API → Drizzle ORM → PostgreSQL (Supabase)</strong>. Frontend uses TanStack Query for cache management, optimistic updates, and automatic refetching.</p>

        <h3>(c) Dynamic Data Pages</h3>
        <table>
          <thead>
            <tr><th>Page</th><th>Data Displayed</th><th>Query / Endpoint</th><th>Implemented By</th></tr>
          </thead>
          <tbody>
            <tr><td>Dashboard</td><td>Safe-to-Spend, ring chart, goals, upcoming bills</td><td><code>GET /api/v1/analytics/dashboard</code></td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Transactions</td><td>Transaction list, search, filter</td><td><code>GET /api/v1/transactions</code></td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Wallets</td><td>Wallet list, balances</td><td><code>GET /api/v1/wallets</code></td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Budgets</td><td>Budgets, spending percentages</td><td><code>GET /api/v1/budgets</code></td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Goals</td><td>Goals, progress</td><td><code>GET /api/v1/goals</code></td><td>Nguyen Tam Duc</td></tr>
            <tr><td>Analytics</td><td>Income/expense charts, category breakdown</td><td><code>GET /api/v1/analytics</code></td><td>Nguyen Tam Duc</td></tr>
          </tbody>
        </table>

        {/* ── TASK 4 ── */}
        <h2>Task 4 — Optimization</h2>

        <h3>(a) Optimizations Applied</h3>
        <table>
          <thead>
            <tr><th>Issue</th><th>Fix Applied</th><th>By</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>SQL N+1 queries when computing budgets</td>
              <td>Optimized queries using Drizzle joins and subqueries, reduced database round-trips</td>
              <td>Nguyen Tam Duc</td>
            </tr>
            <tr>
              <td>Floating-point errors in currency calculations</td>
              <td>Migrated all arithmetic to Decimal.js, stored and transmitted as strings</td>
              <td>Nguyen Tam Duc</td>
            </tr>
            <tr>
              <td>Duplicate transactions from retries</td>
              <td>Applied Idempotency Keys with UNIQUE constraint on PostgreSQL</td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
            <tr>
              <td>No system monitoring</td>
              <td>Integrated Sentry (error tracking) and Pino (structured logging)</td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
            <tr>
              <td>API lacks rate limiting</td>
              <td>Configured rate limiting on Hono API, protected against DDoS</td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
            <tr>
              <td>Cache miss after mutations</td>
              <td>Used TanStack Query <code>onSuccess</code> / <code>onSettled</code> to invalidate related query keys</td>
              <td>Chau Tuan Kiet</td>
            </tr>
            <tr>
              <td>Type errors between frontend and backend</td>
              <td>Shared Zod schemas in <code>packages/shared-schemas</code> ensure end-to-end type-safety</td>
              <td>Nguyen Tam Duc</td>
            </tr>
            <tr>
              <td>Race condition in auth flow</td>
              <td>Added race condition guard in AuthProvider for social login — <code>1cf5543</code></td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
            <tr>
              <td>Console.* in production</td>
              <td>Replaced all console.* with Pino structured logging — <code>4e629b1</code></td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
            <tr>
              <td>Cold start performance</td>
              <td>Removed dead imports and redundant env initialization — <code>eb079e8</code></td>
              <td>Tran Vo Ba Vuong</td>
            </tr>
          </tbody>
        </table>

        <h3>(b) Error Monitoring &amp; User Analytics</h3>
        <p><strong>Sentry:</strong></p>
        <ul className="checklist">
          <li className="done">Sentry Node SDK integrated</li>
          <li>Monitored errors: API errors, database connection failures, auth failures, validation errors</li>
          <li>Implemented by: Tran Vo Ba Vuong</li>
        </ul>

        <p><strong>Logging (Pino):</strong></p>
        <ul className="checklist">
          <li className="done">Pino structured logging with levels: trace, debug, info, warn, error, fatal</li>
          <li>JSON log format for easy analysis</li>
          <li>Implemented by: Tran Vo Ba Vuong</li>
        </ul>

        {/* ── TASK 5 ── */}
        <h2>Task 5 — UI/UX Peer Review &amp; Evaluation</h2>

        <h3>(a) Feedback for Other Teams</h3>

        <div className="section-card">
          <h4>Reviewed Team #1</h4>
          <ul>
            <li><strong>Team / Project:</strong> (updating)</li>
            <li><strong>Project link:</strong> (updating)</li>
          </ul>
          <table>
            <thead>
              <tr><th>Aspect</th><th>Strengths</th><th>Improvement Suggestions</th></tr>
            </thead>
            <tbody>
              <tr><td>Usability</td><td>(updating)</td><td>(updating)</td></tr>
              <tr><td>Aesthetics</td><td>(updating)</td><td>(updating)</td></tr>
              <tr><td>User-Friendliness</td><td>(updating)</td><td>(updating)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="section-card">
          <h4>Reviewed Team #2</h4>
          <ul>
            <li><strong>Team / Project:</strong> (updating)</li>
            <li><strong>Project link:</strong> (updating)</li>
          </ul>
          <table>
            <thead>
              <tr><th>Aspect</th><th>Strengths</th><th>Improvement Suggestions</th></tr>
            </thead>
            <tbody>
              <tr><td>Usability</td><td>(updating)</td><td>(updating)</td></tr>
              <tr><td>Aesthetics</td><td>(updating)</td><td>(updating)</td></tr>
              <tr><td>User-Friendliness</td><td>(updating)</td><td>(updating)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>(b) Feedback Received from Other Teams</h3>
        <table>
          <thead>
            <tr><th>Feedback</th><th>Source</th><th>Decision</th><th>Reason / Commit</th></tr>
          </thead>
          <tbody>
            <tr><td>(updating)</td><td>(updating)</td><td>(updating)</td><td>(updating)</td></tr>
          </tbody>
        </table>

        {/* ── DELIVERABLES CHECKLIST ── */}
        <h2>Deliverables Checklist</h2>
        <ul className="checklist">
          <li className="done"><strong>Source code on GitHub</strong> — <a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">github.com/tducn110/Tracker_yourMoney</a></li>
          <li className="done"><strong>README.md</strong> — Setup guide, project overview, feature list with screenshots, ERD</li>
          <li className="done"><strong>ARCHITECTURE.md</strong> — Detailed system architecture documentation</li>
          <li className="done"><strong>Video demo</strong> — (YouTube link updating, max 10 minutes, min 720p)</li>
          <li className="done"><strong>Self-Reports</strong> — Each member committed file to <code>docs/self-reports/</code></li>
          <li className="done"><strong>Vercel Deployment</strong> — <a href="https://finance-for-me-local.vercel.app" target="_blank" rel="noopener">finance-for-me-local.vercel.app</a></li>
        </ul>

        {/* ── SELF-REPORTS ── */}
        <h2>Self-Reports</h2>
        <p>Each member committed a self-report file to <code>docs/self-reports/self-report-[StudentID].md</code> in the repository.</p>

        <table>
          <thead>
            <tr><th>Full Name</th><th>Student ID</th><th>Self-Report Link</th></tr>
          </thead>
          <tbody>
            <tr><td>Nguyen Tam Duc</td><td>(fill in)</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-duc.md" target="_blank" rel="noopener">self-report-duc.md</a></td></tr>
            <tr><td>Tran Vo Ba Vuong</td><td>2420008</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-vuong.md" target="_blank" rel="noopener">self-report-vuong.md</a></td></tr>
            <tr><td>Chau Tuan Kiet</td><td>(fill in)</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-kiet.md" target="_blank" rel="noopener">self-report-kiet.md</a></td></tr>
          </tbody>
        </table>

        {/* ── APPENDIX ── */}
        <h2>Appendix — Codebase Evidence</h2>

        <h3>GitNexus Code Intelligence</h3>
        <table>
          <tbody>
            <tr><td><strong>Repo indexed</strong></td><td>Tracker_yourMoney</td></tr>
            <tr><td><strong>Path</strong></td><td>/home/tducn/finance-for-me-local</td></tr>
            <tr><td><strong>Remote</strong></td><td><a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">github.com/tducn110/Tracker_yourMoney</a></td></tr>
            <tr><td><strong>Stats</strong></td><td>308 files, 3660 symbols, 5963 relationships, 115 execution flows</td></tr>
          </tbody>
        </table>

        <h3>Top Modules</h3>
        <p>UI, Services, Repositories, Quick-add, Dashboard, Routes, Budgets, Hooks, Context, Wallet, Middleware</p>

        <h3>Main API Route Map</h3>
        <pre><code>{`/api/auth           /api/v1/wallet        /api/v1/analytics
/api/v1/transactions  /api/v1/bills          /api/v1/categories
/api/v1/goals         /api/v1/budgets        /api/v1/user
/api/v1/notifications /api/v1/ai             /api/v1/health`}</code></pre>

        <h3>Important Source Files</h3>
        <table>
          <thead>
            <tr><th>File</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td><code>apps/web/src/app/(dashboard)/page.tsx</code></td><td>Dashboard layout</td></tr>
            <tr><td><code>apps/web/src/app/(dashboard)/transactions/_components/TransactionsContainer.tsx</code></td><td>Transaction search/filter/sort/import/export</td></tr>
            <tr><td><code>apps/web/src/app/(dashboard)/budgets/page.tsx</code></td><td>Budget CRUD UI</td></tr>
            <tr><td><code>apps/web/src/app/(dashboard)/wallets/page.tsx</code></td><td>Wallet management UI</td></tr>
            <tr><td><code>apps/web/src/app/api/[[...route]]/route.ts</code></td><td>Next.js to Hono API bridge on Vercel</td></tr>
            <tr><td><code>apps/api/src/index.ts</code></td><td>Hono app, middleware, routing, error handling</td></tr>
            <tr><td><code>packages/api-client/src/endpoints.ts</code></td><td>Typed endpoint client</td></tr>
            <tr><td><code>packages/db/src/schema/*.ts</code></td><td>Drizzle database schema</td></tr>
            <tr><td><code>packages/shared-schemas/src/*.ts</code></td><td>Zod validation schemas</td></tr>
            <tr><td><code>doc/wiki/erd.md</code></td><td>ERD Mermaid</td></tr>
            <tr><td><code>vercel_deploy_2.log</code></td><td>Evidence of successful deploy</td></tr>
          </tbody>
        </table>

        <h3>Full Commit History (Last 80 Commits with Authors)</h3>
        <pre><code>{`── Recent (May 2026) ──
fff7e94 feat: onboarding wizard 4 buoc - info, wallet, budget, transaction  (Chau Tuan Kiet)
a152b3b feat: integrate local onboarding wizard actions and deepseek mcp skills (Tran Vo Ba Vuong)
46ada24 Merge pull request #157 from tducn110/fix/update-lockfile              (Nguyen Tam Duc)
55beb49 chore: update pnpm-lock.yaml                                           (Tran Vo Ba Vuong)
5448dc9 Merge pull request #156 from tducn110/fix/issue-155-type-errors        (Nguyen Tam Duc)
d17a5ae fix(web): resolve type errors and normalize currency formatting         (Tran Vo Ba Vuong)
1439c58 feat(web): enhance wallet integration and analytics (#154)             (Nguyen Tam Duc)
f650aed feat(api,web): refactor dashboard and S2S engine (#152)                (Nguyen Tam Duc)
8b3ca4b feat(api,web): implement AI Quick Add with Gemini integration (#150)   (Nguyen Tam Duc)
7090921 fix: seed default categories for all users on login                    (Tran Vo Ba Vuong)
c92cfb9 fix: budget form shows only expense categories + auto-seed defaults    (Tran Vo Ba Vuong)
77b9634 fix: sync lockfile, refactor API routing for Vercel compatibility      (Tran Vo Ba Vuong)
fa1a282 fix(vercel): fix auth and api deployment as Next.js route (#144)       (Tran Vo Ba Vuong)
08d5053 feat(web): implement useMounted hook for client-side rendering (#139)  (Tran Vo Ba Vuong)
1013b1f feat(web): implement CategoryManager component                         (Tran Vo Ba Vuong)
4898849 feat(web): implement CashWalletWidget component                        (Tran Vo Ba Vuong)
613a823 feat(system): comprehensive UI refactor and auth optimization          (Tran Vo Ba Vuong)
a1847d3 Merge PR #116 from tducn110 (fix/102) — PR by Nguyen Tam Duc           (merged by Tran Vo Ba Vuong)
75928c3 fix(vercel): remove broken ignoreCommand                               (Tran Vo Ba Vuong)
804e27f fix(web): parse JSON error responses and display detailed errors (#102)(Tran Vo Ba Vuong)
1cf5543 fix(web): race condition guard in AuthProvider social login (#101)     (Tran Vo Ba Vuong)
64cbe5d fix(api): add success:false to 429 rate limit error response (#100)    (Tran Vo Ba Vuong)
a0e01a8 fix(api): raise auth route rate limit from 10 to 30 req/min (#99)     (Tran Vo Ba Vuong)
99d7143 fix(api): step tracking to /api/auth/social for debug (#98)            (Tran Vo Ba Vuong)
eb079e8 fix(api): remove dead imports for cold start optimization (#97)        (Tran Vo Ba Vuong)
1b9f7be fix(api): dynamic CORS origin support for *.vercel.app (#96)           (Tran Vo Ba Vuong)
48aed12 fix(web): parse JSON error responses and display detailed errors (#102)(Tran Vo Ba Vuong)
bfa1c11 docs: update implementation plan and backlog tasks                     (Tran Vo Ba Vuong)
c66de08 fix(db): add missing migrations for PostgreSQL and bigint IDs          (Tran Vo Ba Vuong)
4e629b1 refactor(api,db): eliminate magic strings, migrate console.* to pino   (Tran Vo Ba Vuong)
c110ddb fix: Vercel API routing, deployment prep, and debug endpoints          (Tran Vo Ba Vuong)

── Collaborative (kiet00394-collab: Chau Tuan Kiet &amp; Tran Vo Ba Vuong) ──
97b4f4d fix(api,worker,web,db): financial logic integrity — wallet OCC, PostgreSQL compat
ecd5fb0 fix(worker,web,api): worker DB env, Firebase SSR crash, API/DB/UI updates
fa7319a feat(ui): tailwind v4 migration and frontend fixes (#87)
f393e47 fix: client toSnake interceptor broke all API writes — remove for camelCase API
49cfa80 fix: wire QuickAddModal and SimpleQuickInput to real API calls (#89)
59af0c5 feat: backend scale &amp; performance phase 11-15, ui tailwind v4 fixes
da139ec feat(automation): add recurring bills worker, notifications and settings UI
7d6a643 chore: resolve typechecking and UI warnings
b4e8551 feat(web): enhance login UI with premium background (Phase 9) &amp; fix worker tsconfig
2a9423d feat: frontend refactor, react-query, optimistic updates (Phases 6-8)
6c6cdd7 feat(web): complete phase 3 dashboard localization refactor (#78)

── Nguyen Tam Duc — Phase 3-5 (AI-assisted) ──
a5c79b9 feat: complete feature gaps — transfer, categories, empty states (Phase 5)    (Nguyen Tam Duc + AI)
e510915 feat: wire frontend to real APIs (Phase 4)                                    (Nguyen Tam Duc + AI)
c193b16 fix(db): add walletId to transaction schemas and fix type errors (Phase 3)    (Nguyen Tam Duc + AI)
cdd727c docs: add Phase 2 completion report                                           (Nguyen Tam Duc + AI)
af1542e feat(db): sync database schema to ERD (migration 0012)                        (Nguyen Tam Duc + AI)

── Mid-Phase Cleanup &amp; Refactor ──
034fab6 🚀 Release: dev to main (Phase 1 + Phase 2) (#33)                            (Tran Vo Ba Vuong)
9637add chore(db): remove unused budget_wallets table (#17)                           (Nguyen Tam Duc)
4d4aa58 chore: cleanup legacy UI components and JS schemas (#15)                     (Nguyen Tam Duc)
32a91f4 feat(ui): refactor dashboard pages to container-presentational pattern       (Nguyen Tam Duc)
9fd9950 chore: add clean mcp_config.json                                             (Nguyen Tam Duc)
60e3945 docs: reorganize documentation and add repomix-output.xml                    (Nguyen Tam Duc)
3904c75 fix(api): correct project_id casing in firebase auth init                    (Nguyen Tam Duc)
d1974e2 chore: clean up remaining AI tool directories                                (Nguyen Tam Duc)
4340af4 feat(doc): finalize documentation reorganization and gitignore update        (Nguyen Tam Duc)

── Nguyen Tam Duc — Early Phase (Foundation) ──
c5bc5ef Merge PR #7: implement budget-first UI and API services                      (Nguyen Tam Duc)
df74302 Merge PR #10: feature/issue-5-aesthetics                                     (Nguyen Tam Duc)
15b0798 Merge PR #9: feature/issue-4-quick-add                                       (Nguyen Tam Duc)
28f459f Merge PR #8: feature/issue-3-multi-wallet                                    (Nguyen Tam Duc)
91b63c4 Merge PR #6: feature/issue-2-budget-core                                     (Nguyen Tam Duc)
3749f98 feat(ui): implement global UI design reframing v3 aesthetics (#5)            (Nguyen Tam Duc)
3b1395d feat(quick-add): enhanced quick-add components with NLP and Simple modes (#4)(Nguyen Tam Duc)
180fd8a feat(wallet): implement multi-wallet management and sync UI (#3)             (Nguyen Tam Duc)
10dd3c3 feat(budget): implement core budget-first infrastructure (#2)                (Nguyen Tam Duc)
5ee3de2 feat(auth): complete migration to Firebase Social Login and Session Cookies  (Nguyen Tam Duc)
2dd223e chore: initial framework structure                                           (Nguyen Tam Duc)`}</code></pre>
        <h2>📋 Self-Reports</h2>
        <p>Each member committed a self-report file to <code>docs/self-reports/self-report-[StudentID].md</code> in the repository.</p>
        <table>
          <thead>
            <tr><th>Full Name</th><th>Student ID</th><th>Self-Report Link</th></tr>
          </thead>
          <tbody>
            <tr><td>Nguyen Tam Duc</td><td>(fill in)</td><td><a href="/self-report-duc">self-report-duc.md</a></td></tr>
            <tr><td>Tran Vo Ba Vuong</td><td>2420008</td><td><a href="/self-report-2420008">self-report-vuong.md</a></td></tr>
            <tr><td>Chau Tuan Kiet</td><td>24020010</td><td><a href="/self-report-24020010">self-report-kiet.md</a></td></tr>
          </tbody>
        </table>

        {/* ── FOOTER ── */}
        <footer>
          <p>Final Project Report — Finance Tracker V3 | Team Antigravity | Submission Date: 15/05/2026</p>
        </footer>
      </div>
    </>
  );
}
