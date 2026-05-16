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

        <h2>Thông tin cá nhân</h2>
        <table>
          <tbody>
            <tr><td><strong>Họ tên</strong></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td><strong>MSSV</strong></td><td>24020010</td></tr>
            <tr><td><strong>Nhóm</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Vai trò</strong></td><td>Frontend / UI-UX / Dashboard / Components</td></tr>
          </tbody>
        </table>

        <h2>Task 1 — Planning &amp; Setup</h2>
        <p><strong>Tuần:</strong> 01/04/2026 – 15/04/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Tham gia họp nhóm lên ý tưởng, chọn đề tài Finance Tracker V3 — ứng dụng quản lý tài chính cá nhân theo triết lý Budget-First</li>
          <li>Nghiên cứu công nghệ Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI, shadcn/ui, TanStack Query, Recharts</li>
          <li>Tham gia thiết kế wireframe Figma cho toàn bộ 9 trang (Dashboard, Transactions, Wallets, Budgets, Goals, Bills, Analytics, Settings, Onboarding)</li>
          <li>Đề xuất Container/Presentational pattern cho kiến trúc component</li>
          <li>Setup môi trường dev, tham gia review cấu trúc monorepo</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2dd223e" target="_blank" rel="noopener">2dd223e</a> — initial framework structure (tham gia review)</li>
          <li>Wireframe Figma: thiết kế tất cả các trang Dashboard, Transactions, Wallets, Budgets, Goals, Bills, Analytics, Settings, Onboarding</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 2 — UI Implementation</h2>
        <p><strong>Tuần:</strong> 15/04/2026 – 05/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li><strong>Onboarding Wizard:</strong> Xây dựng luồng onboarding 4 bước (thông tin cá nhân, ví, ngân sách, giao dịch đầu tiên) — commit <code>fff7e94</code> (solo) và <code>a152b3b</code> (collaboration với Vuong)</li>
          <li><strong>Dashboard:</strong> Layout Budget-First với Safe-to-Spend display, ring chart, goals overview, upcoming bills, dashboard localization refactor (Phase 3) — <code>6c6cdd7</code> (collab)</li>
          <li><strong>Transactions Page:</strong> Danh sách giao dịch với search, filter, sort và CRUD operations</li>
          <li><strong>Wallets Page:</strong> Quản lý đa ví (tiền mặt, ngân hàng, thẻ tín dụng, ví điện tử) với chức năng chuyển tiền giữa các ví</li>
          <li><strong>Budgets Page:</strong> Thiết lập và theo dõi ngân sách theo danh mục</li>
          <li><strong>Goals Page:</strong> Theo dõi tiến độ mục tiêu tiết kiệm</li>
          <li><strong>Bills Page:</strong> Quản lý hóa đơn định kỳ</li>
          <li><strong>Analytics Page:</strong> Biểu đồ phân tích chi tiêu (Recharts)</li>
          <li><strong>Settings Page:</strong> Quản lý danh mục và hồ sơ người dùng</li>
          <li><strong>Auth UI:</strong> Firebase social login (Google, Facebook, GitHub, Apple) với loading states — <code>b4e8551</code> (collab, Phase 9)</li>
          <li><strong>Responsive Design:</strong> Hỗ trợ đầy đủ mobile, tablet, desktop qua Tailwind CSS breakpoints</li>
          <li>Frontend refactor, React Query, optimistic updates (Phases 6-8) — <code>2a9423d</code> (collab)</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li>Solo: <a href="https://github.com/tducn110/Tracker_yourMoney/commit/fff7e94" target="_blank" rel="noopener">fff7e94</a> feat: onboarding wizard 4 buoc</li>
          <li>Collab (kiet00394-collab, 11 commits với Vuong):
            <ul>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/b4e8551" target="_blank" rel="noopener">b4e8551</a> — enhance login UI with premium background (Phase 9)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/2a9423d" target="_blank" rel="noopener">2a9423d</a> — frontend refactor, React Query, optimistic updates (Phases 6-8)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/49cfa80" target="_blank" rel="noopener">49cfa80</a> — wire QuickAddModal và SimpleQuickInput to real API</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/da139ec" target="_blank" rel="noopener">da139ec</a> — recurring bills worker, notifications and settings UI</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/7d6a643" target="_blank" rel="noopener">7d6a643</a> — resolve typechecking and UI warnings</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/6c6cdd7" target="_blank" rel="noopener">6c6cdd7</a> — dashboard localization refactor (Phase 3)</li>
              <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa7319a" target="_blank" rel="noopener">fa7319a</a> — Tailwind v4 migration and frontend fixes</li>
            </ul>
          </li>
        </ul>

        <h3>Khó khăn gặp phải:</h3>
        <ul>
          <li>Tailwind CSS v4 có breaking changes so với v3, cần thời gian migrate và fix các class không tương thích</li>
          <li>Optimistic update với TanStack Query đòi hỏi xử lý rollback cẩn thận khi API lỗi</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 3 — Database Integration</h2>
        <p><strong>Tuần:</strong> 22/04/2026 – 28/04/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Wire QuickAddModal và SimpleQuickInput đến real API calls — <code>49cfa80</code> (collab)</li>
          <li>Tích hợp TanStack Query cho data fetching, cache invalidation, optimistic updates trên tất cả các trang</li>
          <li>Fix client toSnake interceptor gây lỗi tất cả API writes — <code>f393e47</code> (collab)</li>
          <li>Kết nối frontend đến API endpoints: transactions, wallets, budgets, goals, bills, analytics</li>
          <li>Xử lý loading skeletons và error boundaries cho trải nghiệm người dùng</li>
          <li>Wallet OCC (Optimistic Concurrency Control) và audit trails — <code>97b4f4d</code> (collab)</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/49cfa80" target="_blank" rel="noopener">49cfa80</a> — wire QuickAddModal và SimpleQuickInput to real API</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/f393e47" target="_blank" rel="noopener">f393e47</a> — fix toSnake interceptor</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/97b4f4d" target="_blank" rel="noopener">97b4f4d</a> — financial logic integrity (collab)</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 4 — Optimization</h2>
        <p><strong>Tuần:</strong> 28/04/2026 – 12/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Tailwind CSS v4 migration và frontend fixes — <code>fa7319a</code> (collab)</li>
          <li>Backend scale &amp; performance (Phase 11-15) kết hợp UI Tailwind v4 fixes — <code>59af0c5</code> (collab)</li>
          <li>Resolve typechecking và UI warnings — <code>7d6a643</code> (collab)</li>
          <li>Enhance login UI với premium background và loading state (Phase 9) — <code>b4e8551</code> (collab)</li>
          <li>Firebase SSR crash fix, cache headers, API/DB/UI updates — <code>ecd5fb0</code> (collab)</li>
          <li>Loading skeletons và error boundaries cho tất cả các trang</li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/fa7319a" target="_blank" rel="noopener">fa7319a</a> — Tailwind v4 migration</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/59af0c5" target="_blank" rel="noopener">59af0c5</a> — backend scale &amp; performance, UI fixes</li>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/ecd5fb0" target="_blank" rel="noopener">ecd5fb0</a> — Firebase SSR crash fix</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>9/10</p>

        <h2>Task 5 — Peer Review</h2>
        <p><strong>Tuần:</strong> 05/05/2026 – 15/05/2026</p>

        <h3>Công việc đã làm:</h3>
        <ul>
          <li>Review code của Vuong về CategoryManager component và CashWalletWidget</li>
          <li>Review PR của Duc về wallet integration, dashboard refactor, AI Quick Add</li>
          <li>Nhận feedback từ Duc về Container/Presentational pattern và đã áp dụng</li>
          <li>Nhận feedback từ Vuong về xử lý error boundary và đã implement</li>
          <li><strong>Review chéo nhóm Calorie Web:</strong> Đã review và gửi 2 PR feedback qua tài khoản kiet00394-collab:
            <ul>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/78" target="_blank" rel="noopener">PR #1 — Fix streak persistence:</a> streak bị reset về 0 khi reload trang; cần lưu streak vào profile</li>
              <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues/79" target="_blank" rel="noopener">PR #2 — Fix timezone bug:</a> <code>toISOString()</code> dùng UTC gây lệch streak 1 ngày</li>
            </ul>
          </li>
        </ul>

        <h3>Bằng chứng đóng góp:</h3>
        <ul>
          <li><a href="https://github.com/tducn110/Tracker_yourMoney/commit/a1847d3" target="_blank" rel="noopener">a1847d3</a> — Merge PR #116 (tham gia review)</li>
          <li><a href="https://github.com/nguyenduythaibao1611-eng/calorie-web.github.io/issues" target="_blank" rel="noopener">Calorie Web Issues</a> — 2 PR feedback submitted</li>
        </ul>

        <h3>Feedback nhận được từ giáo viên:</h3>
        <ul>
          <li>"Onboarding Wizard 4 bước rất tốt cho UX, nên mention trong self-report" — Đã cập nhật, nhấn mạnh onboarding flow trong báo cáo</li>
          <li>"AI Quick Add với Gemini là điểm sáng" — Đã thêm chi tiết trong báo cáo nhóm</li>
        </ul>

        <h3>Đánh giá bản thân:</h3>
        <p>8/10</p>

        <h2>Tổng Kết Đóng Góp Cá Nhân</h2>

        <h3>Tóm tắt những gì bạn đã đóng góp cho dự án:</h3>
        <p>
          Em đảm nhận toàn bộ phần Frontend của dự án Finance Tracker V3. Em đã xây dựng 9 trang hoàn chỉnh bao gồm Dashboard (Budget-First layout), Transactions (CRUD + search/filter), Wallets (đa ví + chuyển tiền), Budgets, Goals, Bills, Analytics (biểu đồ), Settings và Onboarding Wizard 4 bước.
          Em đã thiết lập kiến trúc component theo Container/Presentational pattern, tích hợp TanStack Query cho data fetching với optimistic updates, và đảm bảo responsive design trên tất cả thiết bị.
          Ngoài commit solo, em còn tham gia 11 collaborative commits với bạn Vuong qua tài khoản kiet00394-collab, bao gồm các tính năng quan trọng như Tailwind v4 migration, Firebase SSR fix, recurring bills worker, và login UI enhancement.
          Em tự hào nhất về Onboarding Wizard giúp người dùng mới có trải nghiệm liền mạch, và Dashboard Budget-First giúp người dùng nắm bắt tình hình tài chính chỉ trong một cái nhìn.
          Kỹ năng học được: React 19 patterns, TanStack Query, Tailwind CSS v4, Container/Presentational architecture, và làm việc nhóm qua Git workflow với Conventional Commits.
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
