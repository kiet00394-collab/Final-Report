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

        <h2>Thông tin cá nhân</h2>
        <table>
          <tbody>
            <tr><td><strong>Họ tên</strong></td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td><strong>MSSV</strong></td><td>(fill in)</td></tr>
            <tr><td><strong>Nhóm</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Vai trò</strong></td><td>Team Lead / Backend / Database / Architecture</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Tuần:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li><strong>Team Lead:</strong> Tổ chức họp nhóm, phân công công việc, lập kế hoạch phát triển theo milestone</li>
          <li><strong>Kiến trúc hệ thống:</strong> Thiết kế kiến trúc tổng thể — Next.js App Router + Hono API + Supabase PostgreSQL + Drizzle ORM</li>
          <li><strong>Thiết kế ERD:</strong> Thiết kế toàn bộ 14 bảng database (users, wallets, wallet_logs, transactions, categories, budgets, goals, bills, notifications, audit_logs, refresh_tokens, user_settings, idempotency_keys, wallet_transfers, bill_payments)</li>
          <li><strong>Monorepo design:</strong> Thiết kế cấu trúc Turborepo + pnpm Workspace với 7 packages</li>
          <li><strong>Initial framework:</strong> <code>2dd223e</code> — chore: initial framework structure</li>
          <li><strong>Firebase Auth migration:</strong> <code>5ee3de2</code> — feat(auth): complete migration to Firebase Social Login and Session Cookies</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2dd223e" target="_blank" rel="noopener">2dd223e</a> — initial framework structure</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/5ee3de2" target="_blank" rel="noopener">5ee3de2</a> — Firebase Social Login migration</li>
          <li>ERD: 14 tables designed</li>
          <li>ARCHITECTURE.md: System architecture documentation</li>
          <li>Project plan: 8 milestones from 10/04 to 15/05/2026</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>10/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Tuần:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Công việc đã làm:</h3>
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

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/10dd3c3" target="_blank" rel="noopener">10dd3c3</a> — budget-first infrastructure</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/180fd8a" target="_blank" rel="noopener">180fd8a</a> — multi-wallet management</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3b1395d" target="_blank" rel="noopener">3b1395d</a> — quick-add components</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3749f98" target="_blank" rel="noopener">3749f98</a> — global UI v3 aesthetics</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/32a91f4" target="_blank" rel="noopener">32a91f4</a> — container-presentational refactor</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1439c58" target="_blank" rel="noopener">1439c58</a> — wallet integration &amp; analytics</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/f650aed" target="_blank" rel="noopener">f650aed</a> — dashboard S2S refactor</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>10/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Tuần:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li><strong>Database Schema Design:</strong> Thiết kế toàn bộ 14 bảng với Drizzle ORM quan hệ rõ ràng</li>
          <li><strong>Schema sync:</strong> <code>af1542e</code> — feat(db): sync database schema to ERD (migration 0012)</li>
          <li><strong>Type fixes (Phase 3):</strong> <code>c193b16</code> — fix(db): add walletId to transaction schemas and fix type errors</li>
          <li><strong>Schema cleanup:</strong> <code>9637add</code> — chore(db): remove unused budget_wallets table (#17)</li>
          <li><strong>Legacy cleanup:</strong> <code>4d4aa58</code> — chore: cleanup legacy UI components and JS schemas (#15)</li>
          <li><strong>API endpoints:</strong> Full CRUD API cho transactions, wallets, budgets, goals, bills</li>
          <li><strong>Wire frontend to APIs (Phase 4):</strong> <code>e510915</code> — feat: wire frontend to real APIs</li>
          <li><strong>AI Quick Add:</strong> <code>8b3ca4b</code> — feat(api,web): implement AI Quick Add with Gemini integration (#150)</li>
          <li><strong>S2S Engine:</strong> <code>f650aed</code> — Safe-to-Spend calculations in dashboard</li>
          <li><strong>Dynamic data pages:</strong> Dashboard, Transactions, Wallets, Budgets, Goals — all querying real API</li>
          <li><strong>Documentation:</strong> <code>cdd727c</code> — docs: add Phase 2 completion report</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/af1542e" target="_blank" rel="noopener">af1542e</a> — sync database schema to ERD</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/e510915" target="_blank" rel="noopener">e510915</a> — wire frontend to real APIs</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/8b3ca4b" target="_blank" rel="noopener">8b3ca4b</a> — AI Quick Add with Gemini</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/9637add" target="_blank" rel="noopener">9637add</a> — remove unused budget_wallets table</li>
          <li>Database designed: 14 tables with full relations</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>10/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Tuần:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Công việc đã làm:</h3>
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

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a5c79b9" target="_blank" rel="noopener">a5c79b9</a> — feature gap completion</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c193b16" target="_blank" rel="noopener">c193b16</a> — walletId type fixes</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/3904c75" target="_blank" rel="noopener">3904c75</a> — firebase auth init fix</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4340af4" target="_blank" rel="noopener">4340af4</a> — documentation reorganization</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>10/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Tuần:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Công việc đã làm:</h3>
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
          <li>Review toàn bộ code của Kiệt (onboarding wizard, dashboard, các trang) và Vuong (API, auth, DevOps)</li>
          <li>Code review cho tất cả các PR trước khi merge vào main</li>
          <li>Nhận feedback từ Kiệt và Vuong về architecture và API design, đã điều chỉnh</li>
          <li><strong>Review chéo nhóm Calorie Web:</strong> Đã tổ chức review và gửi 2 PR feedback qua tài khoản kiet00394-collab:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak bị reset về 0 khi reload trang; cần lưu streak vào profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> dùng UTC gây lệch streak 1 ngày</li>
            </ul>
          </li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li>7 PR merges documented above</li>
          <li>Code review trên tất cả các PR trong repository</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/pulse" target="_blank" rel="noopener">GitHub Pulse</a> — project activity overview</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Feedback nhận được từ giáo viên:</h3>
        <ul>
          <li>"AI Quick Add với Gemini là điểm sáng, nên làm nổi bật hơn trong báo cáo" — Đã cập nhật section AI Quick Add chi tiết trong báo cáo nhóm</li>
          <li>"Onboarding Wizard 4 bước rất tốt cho UX" — Đã nhấn mạnh trong báo cáo và self-report</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>10/10</p>

        <h2>Tổng Kết Đóng Góp Cá Nhân</h2>

        <h3>Tóm tắt những gì bạn đã đóng góp cho dự án:</h3>
        <p>
          Em đảm nhận vai trò Team Lead, Backend Developer và Database Architect trong dự án Finance Tracker V3.
          Em đã lãnh đạo nhóm từ giai đoạn lên ý tưởng đến khi hoàn thiện sản phẩm, thiết kế toàn bộ kiến trúc hệ thống
          (Next.js 16 + Hono API + Supabase PostgreSQL + Drizzle ORM), thiết kế ERD với 14 bảng có quan hệ chặt chẽ,
          và thiết kế cấu trúc Monorepo với Turborepo + pnpm Workspace (7 packages).
          Em đã trực tiếp code các tính năng nền tảng cốt lõi: Firebase Social Login với Session Cookies,
          Budget-First Infrastructure, Multi-Wallet Management, Quick-Add với NLP và Simple modes,
          Global UI Design v3 Aesthetics, Dashboard S2S Engine, AI Quick Add với Gemini,
          và Container-Presentational Pattern cho toàn bộ component architecture.
          Em đã review và merge tất cả các PR của team (7 PRs documented), đảm bảo chất lượng code và tiến độ dự án.
          Em cũng phụ trách documentation (ARCHITECTURE.md, README.md, Phase reports) và database migration management.
          Em tự hào nhất về kiến trúc Budget-First — đặt ngân sách làm trung tâm thay vì chỉ tracking thu chi,
          và hệ thống AI Quick Add giúp người dùng nhập giao dịch nhanh chóng bằng ngôn ngữ tự nhiên.
          Kỹ năng học được: Turborepo monorepo management, Drizzle ORM, Supabase PostgreSQL,
          Firebase Admin SDK, Gemini AI integration, Container-Presentational architecture pattern,
          và kỹ năng lãnh đạo nhóm trong môi trường Agile với Git workflow và Conventional Commits.
        </p>

        <h3>Ước tính % đóng góp so với cả nhóm:</h3>
        <p>~40%</p>

        <h3>Điểm tự đánh giá tổng thể:</h3>
        <p>10/10</p>

        <br/>
        <p><Link href="/">← Quay lại Final Report</Link></p>
      </div>
    </>
  );
}
