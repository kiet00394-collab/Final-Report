import Head from 'next/head';
import Link from 'next/link';

export default function SelfReportVuong() {
  return (
    <>
      <Head>
        <title>Self-Report 2420008 — Tran Vo Ba Vuong | Finance Tracker V3</title>
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
            <tr><td><strong>Họ tên</strong></td><td>Trần Võ Bá Vương</td></tr>
            <tr><td><strong>MSSV</strong></td><td>2420008</td></tr>
            <tr><td><strong>Nhóm</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Vai trò</strong></td><td>Backend / Auth / Middleware / DevOps / Worker</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Tuần:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Tham gia họp nhóm chọn đề tài, phân tích yêu cầu và lên kế hoạch phát triển</li>
          <li>Thiết kế kiến trúc Backend: Hono API (Node.js) embedded trong Next.js App Router</li>
          <li>Setup Monorepo với Turborepo + pnpm Workspace: apps/api, apps/web, apps/worker, packages/db, packages/api-client, packages/shared-schemas, packages/cache</li>
          <li>Thiết lập Firebase Authentication với 4 social providers (Google, Facebook, GitHub, Apple)</li>
          <li>Thiết kế JWT flow: Firebase ID Token → JWT Access Token → session cookie (14-day TTL)</li>
          <li>Setup Sentry Node SDK và Pino structured logging</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/034fab6" target="_blank" rel="noopener">034fab6</a> — 🚀 Release: dev to main (Phase 1 + Phase 2)</li>
          <li>Monorepo structure: Turborepo, pnpm workspace, 7 packages</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Tuần:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li><strong>Comprehensive UI refactor và auth optimization (#129-#136):</strong> <code>613a823</code> — multi-commit refactor cải thiện UI consistency và auth flow</li>
          <li><strong>CategoryManager component:</strong> <code>1013b1f</code> — component quản lý danh mục chi tiêu</li>
          <li><strong>CashWalletWidget component:</strong> <code>4898849</code> — widget hiển thị ví tiền mặt</li>
          <li><strong>useMounted hook:</strong> <code>08d5053</code> — xử lý client-side rendering hydration</li>
          <li><strong>Auth UI improvements:</strong> Social login flow với Facebook, GitHub, Apple, Google</li>
          <li>Tham gia code chung 11 commits với Kiệt qua tài khoản kiet00394-collab</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/613a823" target="_blank" rel="noopener">613a823</a> — comprehensive UI refactor and auth optimization (#129-#136)</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1013b1f" target="_blank" rel="noopener">1013b1f</a> — CategoryManager component</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4898849" target="_blank" rel="noopener">4898849</a> — CashWalletWidget component</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/08d5053" target="_blank" rel="noopener">08d5053</a> — useMounted hook</li>
          <li>Collab commits (kiet00394-collab): 11 commits với Chau Tuan Kiet</li>
        </ul>

        <h3>Khó khăn gặp phải:</h3>
        <ul>
          <li>Firebase SSR authentication gây crash trên Vercel, cần debug kỹ server-side rendering flow</li>
          <li>Multi-provider social login đòi hỏi xử lý nhất quán giữa Firebase, JWT và session cookies</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Tuần:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Công việc đã làm:</h3>
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

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa1a282" target="_blank" rel="noopener">fa1a282</a> — fix Vercel auth and api deployment</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c66de08" target="_blank" rel="noopener">c66de08</a> — PostgreSQL compatibility migrations</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1b9f7be" target="_blank" rel="noopener">1b9f7be</a> — dynamic CORS origin support</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/804e27f" target="_blank" rel="noopener">804e27f</a> — JSON error response parsing</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/7090921" target="_blank" rel="noopener">7090921</a> — seed default categories</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/1cf5543" target="_blank" rel="noopener">1cf5543</a> — social login race condition guard</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Tuần:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li><strong>Pino logging:</strong> <code>4e629b1</code> — eliminate magic strings, fix any types, replace console.* with Pino structured logging</li>
          <li><strong>Sentry monitoring:</strong> Integrated Sentry Node SDK cho error monitoring API errors, database connection failures, auth failures, validation errors</li>
          <li><strong>Lockfile sync:</strong> <code>55beb49</code> — update pnpm-lock.yaml; <code>77b9634</code> — sync lockfile, refactor API routing</li>
          <li><strong>Cleanup:</strong> <code>776aa12</code> — remove unused imports, fix eslint configs, update deps</li>
          <li><strong>Vercel deployment:</strong> <code>c110ddb</code> — Vercel API routing, deployment prep, debug endpoints</li>
          <li><strong>Documentation:</strong> <code>bfa1c11</code> — update implementation plan and backlog tasks</li>
          <li><strong>Vercel ignore fix:</strong> <code>75928c3</code> — remove broken ignoreCommand</li>
          <li><strong>Collab:</strong> <code>59af0c5</code> — backend scale & performance Phase 11-15 (kiet00394-collab)</li>
          <li><strong>Worker:</strong> <code>da139ec</code> — recurring bills worker (kiet00394-collab)</li>
          <li><strong>Firebase SSR fix:</strong> <code>ecd5fb0</code> — worker DB env, Firebase SSR crash (kiet00394-collab)</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/4e629b1" target="_blank" rel="noopener">4e629b1</a> — refactor: eliminate magic strings, Pino logging</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/776aa12" target="_blank" rel="noopener">776aa12</a> — cleanup: remove unused imports, fix eslint</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/c110ddb" target="_blank" rel="noopener">c110ddb</a> — Vercel API routing, deployment prep</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/bfa1c11" target="_blank" rel="noopener">bfa1c11</a> — docs: update implementation plan</li>
          <li><code>59af0c5</code>, <code>da139ec</code>, <code>ecd5fb0</code> — collab commits với Kiet</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Tuần:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Merge PR #116: <code>a1847d3</code> — fix/102-detailed-error-ux</li>
          <li>Release merge: <code>034fab6</code> — Release dev to main (Phase 1 + Phase 2)</li>
          <li>Review code của Kiệt về onboarding wizard và dashboard</li>
          <li>Review PR của Duc về wallet integration, S2S engine, AI Quick Add</li>
          <li>Nhận feedback từ Duc về Pino logging implementation và đã chỉnh sửa</li>
          <li><strong>Review chéo nhóm Calorie Web:</strong> Đã tham gia review và gửi 2 PR feedback qua tài khoản kiet00394-collab:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak bị reset về 0 khi reload trang; cần lưu streak vào profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> dùng UTC gây lệch streak 1 ngày</li>
            </ul>
          </li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a1847d3" target="_blank" rel="noopener">a1847d3</a> — Merge pull request #116</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/034fab6" target="_blank" rel="noopener">034fab6</a> — Release: dev to main</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Feedback nhận được từ giáo viên:</h3>
        <ul>
          <li>"AI Quick Add với Gemini là điểm sáng, nên làm nổi bật hơn trong báo cáo" — Đã cập nhật section AI Quick Add chi tiết</li>
          <li>"Onboarding Wizard 4 bước rất tốt cho UX" — Đã nhấn mạnh trong báo cáo nhóm</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>8/10</p>

        <h2>Tổng Kết Đóng Góp Cá Nhân</h2>

        <h3>Tóm tắt những gì bạn đã đóng góp cho dự án:</h3>
        <p>
          Em đảm nhận vai trò Backend, Authentication, DevOps và Worker trong dự án Finance Tracker V3.
          Em đã thiết lập toàn bộ Monorepo với Turborepo + pnpm Workspace (7 packages), tích hợp Firebase Authentication với 4 social providers và JWT flow,
          triển khai Hono API embedded trong Next.js App Router, cấu hình CORS động cho Vercel deployment, và thiết lập rate limiting.
          Em đã xử lý nhiều vấn đề production-critical: Firebase SSR crash trên Vercel, social login race condition, database migrations cho PostgreSQL compatibility,
          và structured logging với Pino thay thế console.*.
          Ngoài ra em còn tham gia 11 collaborative commits với bạn Kiệt qua tài khoản kiet00394-collab, bao gồm backend scale &amp; performance (Phase 11-15),
          recurring bills worker, notifications và settings UI.
          Em tự hào nhất về việc giải quyết vấn đề deploy Vercel — embedding Hono API as Next.js route handler thay vì separate server,
          và hệ thống error handling + monitoring giúp debug production issues nhanh chóng.
          Kỹ năng học được: Hono API framework, Firebase Admin SDK, JWT flow với session cookies,
          Turborepo monorepo management, Pino structured logging, Sentry error monitoring, và Vercel deployment strategies.
        </p>

        <h3>Ước tính % đóng góp so với cả nhóm:</h3>
        <p>~30%</p>

        <h3>Điểm tự đánh giá tổng thể:</h3>
        <p>9/10</p>

        <br/>
        <p><Link href="/">← Quay lại Final Report</Link></p>
      </div>
    </>
  );
}
