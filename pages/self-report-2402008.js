import Head from 'next/head';
import Link from 'next/link';

export default function SelfReportVuong() {
  return (
    <>
      <Head>
        <title>Self-Report 2402008 — Tran Vo Ba Vuong | Finance Tracker V3</title>
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
            <tr><td><strong>Full Name</strong></td><td>Tran Vo Ba Vuong</td></tr>
            <tr><td><strong>Student ID</strong></td><td>2402008</td></tr>
            <tr><td><strong>Team</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Role</strong></td><td>Backend / Auth / Middleware / DevOps / Worker</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Week:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Participated in team meetings to select the topic, analyze requirements, and plan the development roadmap</li>
          <li>Designed Backend architecture: Hono API (Node.js) embedded in Next.js App Router</li>
          <li>Set up Monorepo with Turborepo + pnpm Workspace: apps/api, apps/web, apps/worker, packages/db, packages/api-client, packages/shared-schemas, packages/cache</li>
          <li>Configured Firebase Authentication with 4 social providers (Google, Facebook, GitHub, Apple)</li>
          <li>Designed JWT flow: Firebase ID Token → JWT Access Token → session cookie (14-day TTL)</li>
          <li>Set up Sentry Node SDK and Pino structured logging</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/034fab6" target="_blank" rel="noopener">034fab6</a> — 🚀 Release: dev to main (Phase 1 + Phase 2)</li>
          <li>Monorepo structure: Turborepo, pnpm workspace, 7 packages</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Week:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Comprehensive UI refactor and auth optimization (#129-#136):</strong> <code>613a823</code> — multi-commit refactor improving UI consistency and auth flow</li>
          <li><strong>CategoryManager component:</strong> <code>1013b1f</code> — expense category management component</li>
          <li><strong>CashWalletWidget component:</strong> <code>4898849</code> — cash wallet display widget</li>
          <li><strong>useMounted hook:</strong> <code>08d5053</code> — client-side rendering hydration handler</li>
          <li><strong>Auth UI improvements:</strong> Social login flow with Facebook, GitHub, Apple, Google</li>
          <li>Co-authored 11 collaborative commits with Kiet via the kiet00394-collab account</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/613a823" target="_blank" rel="noopener">613a823</a> — comprehensive UI refactor and auth optimization (#129-#136)</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1013b1f" target="_blank" rel="noopener">1013b1f</a> — CategoryManager component</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4898849" target="_blank" rel="noopener">4898849</a> — CashWalletWidget component</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/08d5053" target="_blank" rel="noopener">08d5053</a> — useMounted hook</li>
          <li>Collab commits (kiet00394-collab): 11 commits with Chau Tuan Kiet</li>
        </ul>

        <h3>Challenges Encountered:</h3>
        <ul>
          <li>Firebase SSR authentication caused crashes on Vercel, requiring extensive debugging of the server-side rendering flow</li>
          <li>Multi-provider social login required consistent handling between Firebase, JWT, and session cookies</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Week:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Fix Vercel deployment:</strong> <code>fa1a282</code> — embed Hono API as Next.js route handler</li>
          <li><strong>API routing refactor:</strong> <code>77b9634</code> — sync lockfile, refactor API routing for Vercel compatibility</li>
          <li><strong>Database fixes:</strong> <code>c66de08</code> — add missing migrations for PostgreSQL compatibility and bigint IDs</li>
          <li><strong>CORS support:</strong> <code>1b9f7be</code> — dynamic CORS origin support for *.vercel.app subdomains</li>
          <li><strong>Rate limiting:</strong> <code>a0e01a8</code> — raise auth route rate limit from 10 to 30 req/min</li>
          <li><strong>Error handling:</strong> <code>804e27f</code> — parse JSON error responses and display detailed error messages (#102)</li>
          <li><strong>Seed data:</strong> <code>7090921</code> — seed default categories for all users on login</li>
          <li><strong>Budget form fix:</strong> <code>c92cfb9</code> — budget form shows only expense categories</li>
          <li><strong>Social login race condition:</strong> <code>1cf5543</code> — race condition guard in AuthProvider</li>
          <li><strong>Rate limit error:</strong> <code>64cbe5d</code> — add success:false to 429 rate limit error response</li>
          <li><strong>Auth debug:</strong> <code>99d7143</code> — step tracking for social login production error debugging</li>
          <li><strong>Cold start fix:</strong> <code>eb079e8</code> — remove dead imports and redundant env init</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa1a282" target="_blank" rel="noopener">fa1a282</a> — fix Vercel auth and api deployment</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c66de08" target="_blank" rel="noopener">c66de08</a> — PostgreSQL compatibility migrations</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1b9f7be" target="_blank" rel="noopener">1b9f7be</a> — dynamic CORS origin support</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/804e27f" target="_blank" rel="noopener">804e27f</a> — JSON error response parsing</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/7090921" target="_blank" rel="noopener">7090921</a> — seed default categories</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1cf5543" target="_blank" rel="noopener">1cf5543</a> — social login race condition guard</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Week:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li><strong>Pino logging:</strong> <code>4e629b1</code> — eliminate magic strings, fix any types, replace console.* with Pino structured logging</li>
          <li><strong>Sentry monitoring:</strong> Integrated Sentry Node SDK for error monitoring — API errors, database connection failures, auth failures, validation errors</li>
          <li><strong>Lockfile sync:</strong> <code>55beb49</code> — update pnpm-lock.yaml; <code>77b9634</code> — sync lockfile, refactor API routing</li>
          <li><strong>Cleanup:</strong> <code>776aa12</code> — remove unused imports, fix eslint configs, update deps</li>
          <li><strong>Vercel deployment:</strong> <code>c110ddb</code> — Vercel API routing, deployment prep, debug endpoints</li>
          <li><strong>Documentation:</strong> <code>bfa1c11</code> — update implementation plan and backlog tasks</li>
          <li><strong>Vercel ignore fix:</strong> <code>75928c3</code> — remove broken ignoreCommand</li>
          <li><strong>Collab:</strong> <code>59af0c5</code> — backend scale &amp; performance Phase 11-15 (kiet00394-collab)</li>
          <li><strong>Worker:</strong> <code>da139ec</code> — recurring bills worker (kiet00394-collab)</li>
          <li><strong>Firebase SSR fix:</strong> <code>ecd5fb0</code> — worker DB env, Firebase SSR crash (kiet00394-collab)</li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4e629b1" target="_blank" rel="noopener">4e629b1</a> — refactor: eliminate magic strings, Pino logging</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/776aa12" target="_blank" rel="noopener">776aa12</a> — cleanup: remove unused imports, fix eslint</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c110ddb" target="_blank" rel="noopener">c110ddb</a> — Vercel API routing, deployment prep</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/bfa1c11" target="_blank" rel="noopener">bfa1c11</a> — docs: update implementation plan</li>
          <li><code>59af0c5</code>, <code>da139ec</code>, <code>ecd5fb0</code> — collab commits with Kiet</li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>9/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Week:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Work Done:</h3>
        <ul>
          <li>Merge PR #116: <code>a1847d3</code> — fix/102-detailed-error-ux</li>
          <li>Release merge: <code>034fab6</code> — Release dev to main (Phase 1 + Phase 2)</li>
          <li>Reviewed Kiet's code on onboarding wizard and dashboard</li>
          <li>Reviewed Duc's PRs on wallet integration, S2S engine, AI Quick Add</li>
          <li>Received feedback from Duc on Pino logging implementation and adjusted accordingly</li>
          <li><strong>Cross-Team Review — Calorie Web:</strong> Participated in review and submitted 2 PR feedback via kiet00394-collab account:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak resets to 0 on page reload; needs to persist streak to profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> uses UTC causing a 1-day streak offset</li>
            </ul>
          </li>
        </ul>

        <h3>Evidence of Contribution:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a1847d3" target="_blank" rel="noopener">a1847d3</a> — Merge pull request #116</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/034fab6" target="_blank" rel="noopener">034fab6</a> — Release: dev to main</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Teacher Feedback Received:</h3>
        <ul>
          <li>"AI Quick Add with Gemini is a highlight" — Integrated Gemini NLP adapter into Hono API for natural language transaction input — <code>8b3ca4b</code></li>
          <li>"4-step Onboarding Wizard is great for UX" — Built 4-step onboarding wizard with personal info, wallet, budget, first transaction flows — <code>fff7e94</code></li>
        </ul>

        <h3>Self-Assessment:</h3>
        <p>8/10</p>

        <h2>Personal Contribution Summary</h2>

        <h3>Summary of your contributions to the project:</h3>
        <p>
          I was responsible for Backend, Authentication, DevOps, and Worker roles in the Finance Tracker V3 project.
          I set up the entire Monorepo with Turborepo + pnpm Workspace (7 packages), integrated Firebase Authentication with 4 social providers and JWT flow,
          deployed the Hono API embedded in Next.js App Router, configured dynamic CORS for Vercel deployment, and set up rate limiting.
          I resolved numerous production-critical issues: Firebase SSR crash on Vercel, social login race condition, database migrations for PostgreSQL compatibility,
          and structured logging with Pino replacing console.*.
          Additionally, I co-authored 11 collaborative commits with Kiet via the kiet00394-collab account, including backend scale &amp; performance (Phase 11-15),
          recurring bills worker, notifications, and settings UI.
          I am most proud of solving the Vercel deployment problem — embedding Hono API as a Next.js route handler instead of a separate server —
          and the error handling + monitoring system that enables rapid debugging of production issues.
          Skills learned: Hono API framework, Firebase Admin SDK, JWT flow with session cookies,
          Turborepo monorepo management, Pino structured logging, Sentry error monitoring, and Vercel deployment strategies.
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
