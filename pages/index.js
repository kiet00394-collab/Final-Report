import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Báo Cáo Cuối Kỳ — Finance Tracker V3 | Antigravity</title>
        <meta name="description" content="Final Project Report — Finance Tracker V3 by Team Antigravity" />
      </Head>

      <header>
        <h1>📊 BÁO CÁO CUỐI KỲ</h1>
        <p>Finance Tracker V3 — Ứng Dụng Quản Lý Tài Chính Cá Nhân</p>
        <p style={{marginTop:'0.5rem'}}>Nhóm Antigravity — Ngày nộp: 15/05/2026</p>
      </header>

      <div className="container">

        {/* ── THÔNG TIN NHÓM ── */}
        <h2>Thông Tin Nhóm</h2>
        <table>
          <tbody>
            <tr><td><strong>Tên nhóm</strong></td><td>Antigravity</td></tr>
            <tr><td><strong>Tên dự án</strong></td><td>Finance Tracker V3 — Ứng dụng quản lý tài chính cá nhân</td></tr>
            <tr><td><strong>GitHub Repository</strong></td><td><a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">github.com/tducn110/Tracker_yourMoney</a></td></tr>
            <tr><td><strong>Demo Deploy</strong></td><td><a href="https://finance-for-me-local.vercel.app" target="_blank" rel="noopener">finance-for-me-local.vercel.app</a></td></tr>
            <tr><td><strong>Video Demo</strong></td><td>(đang cập nhật)</td></tr>
            <tr><td><strong>Ngày nộp</strong></td><td>15/05/2026</td></tr>
          </tbody>
        </table>

        <h3>Thành viên nhóm</h3>
        <table>
          <thead>
            <tr><th>Họ tên</th><th>MSSV</th><th>Vai trò</th></tr>
          </thead>
          <tbody>
            <tr><td>Nguyễn Tâm Đức</td><td>(điền MSSV)</td><td>Team Lead / Backend / Database / Architecture</td></tr>
            <tr><td>Trần Võ Bá Vương</td><td>2420008</td><td>Backend / Auth / Middleware / DevOps / Worker</td></tr>
            <tr><td>Châu Tuấn Kiệt</td><td>(điền MSSV)</td><td>Frontend / UI-UX / Dashboard / Components</td></tr>
          </tbody>
        </table>

        {/* ── TỔNG QUAN PROJECT ── */}
        <h2>Tổng Quan Project và Công Nghệ Sử Dụng</h2>

        <h3>Mô tả ứng dụng</h3>
        <p>
          Finance Tracker V3 là ứng dụng quản lý tài chính cá nhân theo triết lý <strong>Budget-First</strong> — đặt ngân sách làm trung tâm.
          Ứng dụng giúp người dùng theo dõi thu nhập, chi tiêu, quản lý nhiều ví tiền (tiền mặt, ngân hàng, thẻ tín dụng, ví điện tử),
          thiết lập ngân sách theo danh mục, theo dõi hóa đơn định kỳ, đặt mục tiêu tiết kiệm và phân tích thói quen chi tiêu qua biểu đồ.
          Hướng đến đối tượng người dùng cá nhân muốn kiểm soát tài chính một cách khoa học và chính xác.
        </p>

        <h3>Tech Stack</h3>
        <table>
          <thead>
            <tr><th>Layer</th><th>Công nghệ</th></tr>
          </thead>
          <tbody>
            <tr><td>Frontend</td><td>Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Radix UI, shadcn/ui, TanStack Query, Recharts, Motion</td></tr>
            <tr><td>Backend</td><td>Hono API (Node.js), TypeScript, Zod, Firebase Auth/Admin, JWT, Pino logging</td></tr>
            <tr><td>Database</td><td>Supabase PostgreSQL, Drizzle ORM (14 bảng)</td></tr>
            <tr><td>Auth</td><td>Firebase Authentication (Google, Facebook, GitHub, Apple)</td></tr>
            <tr><td>Monorepo</td><td>Turborepo + pnpm Workspace (apps/api, apps/web, apps/worker, packages/db, packages/api-client, packages/shared-schemas, packages/cache)</td></tr>
            <tr><td>Deploy</td><td>Vercel</td></tr>
          </tbody>
        </table>

        <h3>Tính năng chính</h3>
        <ul>
          <li><strong>Dashboard Budget-First:</strong> Hiển thị ngân sách còn lại (Safe-to-Spend) là thông tin đầu tiên người dùng thấy, kèm ring chart trực quan.</li>
          <li><strong>Multi-Wallet:</strong> Hỗ trợ nhiều ví (tiền mặt, ngân hàng, thẻ tín dụng, ví điện tử, đầu tư) với chuyển tiền giữa các ví.</li>
          <li><strong>Quick Add bằng AI:</strong> Thêm giao dịch nhanh bằng ngôn ngữ tự nhiên (VD: "Ăn sáng 35k"), tự động nhận diện danh mục và số tiền qua Gemini AI.</li>
          <li><strong>Quản lý Ngân sách (Budget):</strong> Thiết lập ngân sách theo danh mục, theo dõi % đã chi, cảnh báo vượt ngân sách.</li>
          <li><strong>Hóa đơn định kỳ (Bills):</strong> Theo dõi hóa đơn hàng tháng/quý/năm, lịch sử thanh toán, tự động nhắc nhở.</li>
          <li><strong>Mục tiêu tiết kiệm (Goals):</strong> Đặt mục tiêu với deadline, theo dõi tiến độ, nạp tiền trực tiếp từ ví.</li>
          <li><strong>Phân tích (Analytics):</strong> Biểu đồ thu/chi theo tháng, phân tích chi tiêu theo danh mục.</li>
          <li><strong>Onboarding Wizard:</strong> Hướng dẫn người dùng mới qua 4 bước: thông tin cá nhân, tạo ví, thiết lập ngân sách, thêm giao dịch đầu tiên.</li>
          <li><strong>Đa ngôn ngữ:</strong> Hỗ trợ tiếng Việt và tiếng Anh.</li>
          <li><strong>An toàn dữ liệu:</strong> Soft-delete, idempotency keys, Decimal.js cho độ chính xác tiền tệ, optimistic concurrency.</li>
        </ul>

        {/* ── HƯỚNG DẪN CÀI ĐẶT ── */}
        <h2>Hướng Dẫn Cài Đặt và Chạy Ứng Dụng</h2>

        <h3>Yêu cầu hệ thống</h3>
        <table>
          <thead>
            <tr><th>Công cụ</th><th>Phiên bản</th></tr>
          </thead>
          <tbody>
            <tr><td>Node.js</td><td>&gt;= 20.x</td></tr>
            <tr><td>pnpm</td><td>&gt;= 9.x</td></tr>
            <tr><td>PostgreSQL</td><td>&gt;= 15 (Supabase)</td></tr>
          </tbody>
        </table>

        <h3>Các bước cài đặt</h3>
        <pre><code>{`# 1. Clone repository
git clone https://github.com/tducn110/Tracker_yourMoney.git
cd Tracker_yourMoney

# 2. Cài đặt dependencies
pnpm install

# 3. Cấu hình môi trường
cp .env.example .env.local
# Điền các giá trị: DATABASE_URL, FIREBASE_*, JWT_SECRET, GEMINI_API_KEY

# 4. Khởi tạo database
pnpm db:generate    # Tạo migration files từ Drizzle schema
pnpm db:migrate     # Áp dụng migration vào PostgreSQL
pnpm db:seed        # Tạo dữ liệu mẫu

# 5. Chạy ứng dụng (dev)
pnpm dev            # Khởi động cả frontend + backend

# Build production
pnpm build          # Build Turborepo
`}</code></pre>

        {/* ── TASK 1 ── */}
        <h2>Task 1 — Project Planning & Teamwork</h2>

        <h3>(a) Phân công vai trò</h3>
        <p>Nhóm phân công công việc theo từng layer của ứng dụng, mỗi thành viên phụ trách một mảng chính:</p>

        <table>
          <thead>
            <tr><th>Thành viên</th><th>Vai trò</th><th>Trách nhiệm chính</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Nguyễn Tâm Đức</td>
              <td><span className="badge badge-blue">Leader</span> <span className="badge badge-green">Backend</span></td>
              <td>
                Thiết kế database schema (14 bảng), cài đặt Drizzle ORM, viết repositories (Transaction, Bill, Goal, Budget, Category, Analytics).
                Xây dựng Budget Engine &amp; S2S logic. Zod validation schemas. Seed data. Đảm bảo độ chính xác tài chính bằng Decimal.js.
              </td>
            </tr>
            <tr>
              <td>Trần Võ Bá Vương</td>
              <td><span className="badge badge-green">Backend</span> <span className="badge badge-yellow">DevOps</span></td>
              <td>
                Firebase Auth flow &amp; JWT. Rate limiting, audit logging, security headers. Background worker (recurring bills).
                Sentry + Pino logging. Idempotency keys. Notifications system. AI service (Gemini NLP). Vercel deployment.
              </td>
            </tr>
            <tr>
              <td>Châu Tuấn Kiệt</td>
              <td><span className="badge badge-blue">Frontend</span> <span className="badge badge-green">UI/UX</span></td>
              <td>
                Dashboard Budget-First layout. Tất cả các trang: Giao dịch, Ví tiền, Ngân sách, Mục tiêu, Hóa đơn, Phân tích, Cài đặt.
                Firebase social login UI. Container/Presentational pattern. Responsive (mobile/tablet/desktop). TanStack Query.
                Onboarding wizard 4 bước.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>(b) Wireframe</h3>
        <ul>
          <li><strong>Tool sử dụng:</strong> Figma</li>
          <li><strong>Các trang đã thiết kế:</strong></li>
        </ul>
        <ul className="checklist">
          <li className="done">Dashboard (Budget-First overview)</li>
          <li className="done">Transactions (Danh sách, lọc, thêm/sửa/xóa)</li>
          <li className="done">Wallets (Quản lý nhiều ví, chuyển tiền)</li>
          <li className="done">Budgets (Thiết lập &amp; theo dõi ngân sách)</li>
          <li className="done">Goals (Mục tiêu tiết kiệm)</li>
          <li className="done">Bills (Hóa đơn định kỳ)</li>
          <li className="done">Analytics (Biểu đồ phân tích)</li>
          <li className="done">Settings (Quản lý danh mục, thông tin cá nhân)</li>
          <li className="done">Onboarding (Wizard 4 bước cho người dùng mới)</li>
        </ul>

        <h3>(c) Project Plan — Milestones</h3>
        <table>
          <thead>
            <tr><th>Milestone</th><th>Deadline</th><th>Trạng thái</th></tr>
          </thead>
          <tbody>
            <tr><td>Hoàn thành wireframe &amp; thiết kế Figma</td><td>10/04/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Setup GitHub, Monorepo &amp; Database Schema</td><td>15/04/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Hoàn thành Authentication (Firebase + JWT)</td><td>18/04/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Hoàn thành UI cơ bản (Dashboard, Transactions, Wallets)</td><td>22/04/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Tích hợp database &amp; API (CRUD hoàn chỉnh)</td><td>28/04/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>AI Quick Add, Analytics, Bills, Goals</td><td>05/05/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Onboarding Wizard, Optimization &amp; Peer Review</td><td>12/05/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
            <tr><td>Nộp bài</td><td>15/05/2026</td><td><span className="badge badge-green">Đúng hạn</span></td></tr>
          </tbody>
        </table>

        <h3>(d) GitHub Repository</h3>
        <p>
          <strong>Repository link:</strong>{' '}
          <a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">
            github.com/tducn110/Tracker_yourMoney
          </a>
        </p>

        <h3>(e) Quy trình làm việc trên GitHub</h3>
        <p>Nhóm sử dụng Git Flow với nhánh <code>main</code> và các feature branches. Mỗi tính năng được phát triển trên nhánh riêng và merge qua Pull Request. Commit messages tuân theo <strong>Conventional Commits</strong>.</p>

        <p><strong>Commit convention:</strong></p>
        <pre><code>{`feat:     Tính năng mới
fix:      Sửa lỗi
chore:    Công việc không ảnh hưởng code (update deps, config)
docs:     Cập nhật tài liệu
refactor: Tái cấu trúc code`}</code></pre>

        <p><strong>Ví dụ commit messages tiêu biểu:</strong></p>
        <pre><code>{`fff7e94 feat: onboarding wizard 4 buoc - info, wallet, budget, transaction  (Chau Tuan Kiet)
1439c58 feat(web): enhance wallet integration and analytics (#154)
f650aed feat(api,web): refactor dashboard and S2S engine (#152)
8b3ca4b feat(api,web): implement AI Quick Add with Gemini integration (#150)
613a823 feat(system): comprehensive UI refactor and auth optimization (#129-#136)
804e27f fix(web): parse JSON error responses and display detailed error messages (#102)
fa1a282 fix(vercel): fix auth and api deployment by embedding Hono as Next.js route (#144)`}</code></pre>

        {/* ── TASK 2 ── */}
        <h2>Task 2 — Implement User Interface</h2>

        <h3>(a) Các trang đã xây dựng</h3>
        <table>
          <thead>
            <tr><th>Trang</th><th>URL / Route</th><th>Mô tả</th><th>Người thực hiện</th></tr>
          </thead>
          <tbody>
            <tr><td>Dashboard</td><td><code>/</code></td><td>Tổng quan tài chính Budget-First: Safe-to-Spend, ring chart, mục tiêu, hóa đơn sắp tới</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Transactions</td><td><code>/transactions</code></td><td>Danh sách giao dịch, tìm kiếm, lọc, import/export, thêm/sửa/xóa</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Wallets</td><td><code>/wallets</code></td><td>Quản lý nhiều ví, chuyển tiền, xem số dư</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Budgets</td><td><code>/budgets</code></td><td>Thiết lập ngân sách theo danh mục, theo dõi % đã chi</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Goals</td><td><code>/goals</code></td><td>Đặt mục tiêu tiết kiệm với deadline, theo dõi tiến độ</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Bills</td><td><code>/bills</code></td><td>Quản lý hóa đơn định kỳ, lịch sử thanh toán</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Analytics</td><td><code>/analytics</code></td><td>Biểu đồ thu/chi, phân tích theo danh mục</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Settings</td><td><code>/settings</code></td><td>Quản lý danh mục, thông tin cá nhân, ngôn ngữ</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Onboarding</td><td><code>/onboarding</code></td><td>Wizard 4 bước cho user mới: info, wallet, budget, transaction</td><td>Châu Tuấn Kiệt</td></tr>
          </tbody>
        </table>

        <h3>(b) Sử dụng Tailwind CSS</h3>
        <p>
          Toàn bộ giao diện được xây dựng bằng <strong>Tailwind CSS v4</strong> kết hợp <strong>shadcn/ui</strong> (Radix UI).
          Hệ thống responsive sử dụng các breakpoint: <code>sm</code> (640px), <code>md</code> (768px), <code>lg</code> (1024px), <code>xl</code> (1280px).
          Dark mode được hỗ trợ qua class <code>dark</code>.
        </p>

        <p><strong>Utility classes đặc trưng đã dùng:</strong></p>
        <ul>
          <li>Grid layout responsive: <code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4</code></li>
          <li>Custom color scheme: primary (#0f3460), accent (#e94560), surface (#f8f9fa)</li>
          <li>Dark mode: <code>dark:bg-gray-900 dark:text-white</code></li>
          <li>Transitions &amp; animations: Motion (Framer Motion) kết hợp Tailwind</li>
          <li>Container queries cho card components</li>
        </ul>

        <h3>(c) Các tính năng tương tác</h3>
        <table>
          <thead>
            <tr><th>Tính năng</th><th>Mô tả</th><th>File / Component</th><th>Người thực hiện</th></tr>
          </thead>
          <tbody>
            <tr><td>Quick Add Modal</td><td>Thêm giao dịch nhanh với AI parsing ngôn ngữ tự nhiên</td><td><code>QuickAddModal</code>, <code>AIQuickAdd</code></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Form Validation</td><td>Validate dữ liệu nhập bằng Zod schemas</td><td>Shared schemas package</td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td>Search &amp; Filter</td><td>Tìm kiếm và lọc giao dịch theo danh mục, ngày, số tiền</td><td><code>TransactionsContainer</code></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Charts</td><td>Biểu đồ trực quan với Recharts (ring chart, bar chart, line chart)</td><td>Dashboard, Analytics pages</td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Social Login</td><td>Đăng nhập Google, Facebook, GitHub, Apple</td><td><code>AuthProvider</code>, <code>LoginPage</code></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Onboarding Wizard</td><td>Multi-step form hướng dẫn người dùng mới</td><td><code>OnboardingWizard</code></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Loading Skeletons</td><td>Hiển thị skeleton khi đang tải dữ liệu</td><td><code>Skeleton</code> components</td><td>Châu Tuấn Kiệt</td></tr>
          </tbody>
        </table>

        <h3>(d) Giao diện trên nhiều thiết bị</h3>
        <ul className="checklist">
          <li className="done">Mobile (&lt; 768px) — Single column layout, bottom navigation, collapsible sidebar</li>
          <li className="done">Tablet (768px – 1024px) — 2-column grid, compact sidebar</li>
          <li className="done">Desktop (&gt; 1024px) — Full sidebar, multi-column dashboard, widescreen charts</li>
        </ul>
        <p>Tất cả các trang đều được test responsive qua Chrome DevTools Device Mode và hoạt động tốt trên mọi kích thước.</p>

        {/* ── TASK 3 ── */}
        <h2>Task 3 — Database Integration & Dynamic Content</h2>

        <h3>(a) Thiết kế cơ sở dữ liệu</h3>
        <ul>
          <li><strong>Database system:</strong> Supabase PostgreSQL (TiDB Serverless compatible)</li>
          <li><strong>ORM:</strong> Drizzle ORM</li>
          <li><strong>Số bảng:</strong> 14 bảng</li>
        </ul>

        <p><strong>Danh sách bảng:</strong></p>
        <table>
          <thead>
            <tr><th>Bảng</th><th>Mô tả</th><th>Các cột chính</th></tr>
          </thead>
          <tbody>
            <tr><td>users</td><td>Thông tin người dùng</td><td><code>id</code>, <code>firebase_uid</code>, <code>email</code>, <code>name</code>, <code>avatar_url</code></td></tr>
            <tr><td>wallets</td><td>Ví tiền (tiền mặt, ngân hàng, thẻ tín dụng...)</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>type</code>, <code>balance</code>, <code>currency</code></td></tr>
            <tr><td>categories</td><td>Danh mục thu/chi</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>type</code>, <code>icon</code>, <code>color</code></td></tr>
            <tr><td>transactions</td><td>Giao dịch thu/chi</td><td><code>id</code>, <code>user_id</code>, <code>wallet_id</code>, <code>category_id</code>, <code>amount</code>, <code>type</code>, <code>note</code></td></tr>
            <tr><td>budgets</td><td>Ngân sách theo danh mục</td><td><code>id</code>, <code>user_id</code>, <code>category_id</code>, <code>amount</code>, <code>period</code></td></tr>
            <tr><td>goals</td><td>Mục tiêu tiết kiệm</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>target_amount</code>, <code>current_amount</code>, <code>deadline</code></td></tr>
            <tr><td>bills</td><td>Hóa đơn định kỳ</td><td><code>id</code>, <code>user_id</code>, <code>name</code>, <code>amount</code>, <code>frequency</code>, <code>due_date</code></td></tr>
            <tr><td>notifications</td><td>Thông báo</td><td><code>id</code>, <code>user_id</code>, <code>type</code>, <code>message</code>, <code>is_read</code></td></tr>
            <tr><td>audit_logs</td><td>Nhật ký hoạt động</td><td><code>id</code>, <code>user_id</code>, <code>action</code>, <code>entity_type</code>, <code>entity_id</code></td></tr>
            <tr><td>refresh_tokens</td><td>Refresh token cho JWT</td><td><code>id</code>, <code>user_id</code>, <code>token_hash</code>, <code>expires_at</code></td></tr>
            <tr><td>user_settings</td><td>Cài đặt người dùng</td><td><code>id</code>, <code>user_id</code>, <code>language</code>, <code>currency</code>, <code>theme</code></td></tr>
            <tr><td>idempotency_keys</td><td>Khóa idempotency chống trùng giao dịch</td><td><code>key</code>, <code>user_id</code>, <code>created_at</code></td></tr>
            <tr><td>wallet_transfers</td><td>Lịch sử chuyển tiền giữa các ví</td><td><code>id</code>, <code>user_id</code>, <code>from_wallet</code>, <code>to_wallet</code>, <code>amount</code></td></tr>
            <tr><td>bill_payments</td><td>Lịch sử thanh toán hóa đơn</td><td><code>id</code>, <code>bill_id</code>, <code>amount</code>, <code>paid_at</code></td></tr>
          </tbody>
        </table>

        <h3>(b) Kết nối cơ sở dữ liệu</h3>
        <ul>
          <li><strong>Công nghệ server-side:</strong> Hono API (Node.js) được embed trong Next.js App Router qua catch-all route <code>/api/[[...route]]</code></li>
          <li><strong>Cách kết nối:</strong> RESTful API với typed client (<code>@finance/api-client</code>) sử dụng Axios</li>
          <li><strong>Authentication:</strong> Firebase ID Token → JWT Access Token → session cookie (14-day TTL)</li>
        </ul>

        <ul className="checklist">
          <li className="done">Create — Thêm giao dịch, ví, ngân sách, mục tiêu, hóa đơn</li>
          <li className="done">Read — Danh sách, chi tiết, tìm kiếm, lọc</li>
          <li className="done">Update — Cập nhật thông tin, chỉnh sửa</li>
          <li className="done">Delete — Soft-delete với <code>deleted_at</code> timestamp</li>
        </ul>

        <p>Kiến trúc kết nối: <strong>Next.js (App Router) → Hono API → Drizzle ORM → PostgreSQL (Supabase)</strong>. Frontend sử dụng TanStack Query để quản lý cache, optimistic updates và tự động refetch.</p>

        <h3>(c) Các trang hiển thị dữ liệu động</h3>
        <table>
          <thead>
            <tr><th>Trang</th><th>Dữ liệu hiển thị</th><th>Query / Endpoint</th><th>Người thực hiện</th></tr>
          </thead>
          <tbody>
            <tr><td>Dashboard</td><td>Safe-to-Spend, ring chart, mục tiêu, hóa đơn sắp tới</td><td><code>GET /api/v1/analytics/dashboard</code></td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td>Transactions</td><td>Danh sách giao dịch, tìm kiếm, lọc</td><td><code>GET /api/v1/transactions</code></td><td>Châu Tuấn Kiệt</td></tr>
            <tr><td>Wallets</td><td>Danh sách ví, số dư</td><td><code>GET /api/v1/wallets</code></td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td>Budgets</td><td>Ngân sách, % đã chi</td><td><code>GET /api/v1/budgets</code></td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td>Goals</td><td>Mục tiêu, tiến độ</td><td><code>GET /api/v1/goals</code></td><td>Nguyễn Tâm Đức</td></tr>
            <tr><td>Analytics</td><td>Biểu đồ thu/chi, spending by category</td><td><code>GET /api/v1/analytics</code></td><td>Nguyễn Tâm Đức</td></tr>
          </tbody>
        </table>

        {/* ── TASK 4 ── */}
        <h2>Task 4 — Optimization</h2>

        <h3>(a) Các biện pháp tối ưu đã thực hiện</h3>
        <table>
          <thead>
            <tr><th>Vấn đề</th><th>Hành động khắc phục</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>SQL N+1 query khi tính toán ngân sách</td>
              <td>Tối ưu truy vấn sử dụng Drizzle joins và subqueries, giảm số lượng round-trip database</td>
            </tr>
            <tr>
              <td>Sai số dấu phẩy động khi tính toán tiền tệ</td>
              <td>Chuyển toàn bộ arithmetic sang Decimal.js, lưu trữ và truyền tải dưới dạng string</td>
            </tr>
            <tr>
              <td>Trùng lặp giao dịch do retry</td>
              <td>Áp dụng Idempotency Keys với UNIQUE constraint trên PostgreSQL</td>
            </tr>
            <tr>
              <td>Không có monitoring hệ thống</td>
              <td>Tích hợp Sentry (error tracking) và Pino (structured logging)</td>
            </tr>
            <tr>
              <td>API không có rate limiting</td>
              <td>Cấu hình rate limiting trên Hono API, bảo vệ khỏi DDoS</td>
            </tr>
            <tr>
              <td>Cache miss sau mutation</td>
              <td>Sử dụng TanStack Query <code>onSuccess</code> / <code>onSettled</code> để invalidate query keys liên quan</td>
            </tr>
            <tr>
              <td>Type errors giữa frontend và backend</td>
              <td>Shared Zod schemas trong <code>packages/shared-schemas</code> đảm bảo type-safety xuyên suốt</td>
            </tr>
            <tr>
              <td>Race condition trong auth flow</td>
              <td>Optimistic concurrency với <code>version</code> column + <code>rowCount</code> check</td>
            </tr>
          </tbody>
        </table>

        <h3>(b) Theo dõi lỗi và hành vi người dùng</h3>
        <p><strong>Sentry:</strong></p>
        <ul className="checklist">
          <li className="done">Đã tích hợp Sentry Node SDK</li>
          <li>Monitor các lỗi: API errors, database connection failures, auth failures, validation errors</li>
        </ul>

        <p><strong>Logging:</strong></p>
        <ul className="checklist">
          <li className="done">Pino structured logging với các levels: trace, debug, info, warn, error, fatal</li>
          <li>Log format JSON cho dễ dàng phân tích</li>
        </ul>

        {/* ── TASK 5 ── */}
        <h2>Task 5 — UI/UX Peer Review & Evaluation</h2>

        <h3>(a) Feedback cho các nhóm khác</h3>

        <div className="section-card">
          <h4>Nhóm được review #1</h4>
          <ul>
            <li><strong>Tên nhóm / Dự án:</strong> (đang cập nhật)</li>
            <li><strong>Link dự án:</strong> (đang cập nhật)</li>
          </ul>
          <table>
            <thead>
              <tr><th>Khía cạnh</th><th>Điểm mạnh</th><th>Gợi ý cải thiện</th></tr>
            </thead>
            <tbody>
              <tr><td>Usability</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
              <tr><td>Aesthetics</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
              <tr><td>User-Friendliness</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="section-card">
          <h4>Nhóm được review #2</h4>
          <ul>
            <li><strong>Tên nhóm / Dự án:</strong> (đang cập nhật)</li>
            <li><strong>Link dự án:</strong> (đang cập nhật)</li>
          </ul>
          <table>
            <thead>
              <tr><th>Khía cạnh</th><th>Điểm mạnh</th><th>Gợi ý cải thiện</th></tr>
            </thead>
            <tbody>
              <tr><td>Usability</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
              <tr><td>Aesthetics</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
              <tr><td>User-Friendliness</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>(b) Xử lý feedback từ các nhóm khác</h3>
        <table>
          <thead>
            <tr><th>Feedback</th><th>Nguồn</th><th>Quyết định</th><th>Lý do / Commit</th></tr>
          </thead>
          <tbody>
            <tr><td>(đang cập nhật)</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td><td>(đang cập nhật)</td></tr>
          </tbody>
        </table>

        {/* ── DELIVERABLES CHECKLIST ── */}
        <h2>Deliverables Checklist</h2>
        <ul className="checklist">
          <li className="done"><strong>Source code trên GitHub</strong> — <a href="https://github.com/tducn110/Tracker_yourMoney" target="_blank" rel="noopener">github.com/tducn110/Tracker_yourMoney</a></li>
          <li className="done"><strong>README.md</strong> — Hướng dẫn cài đặt, tổng quan project, danh sách tính năng, ERD, screenshots</li>
          <li className="done"><strong>ARCHITECTURE.md</strong> — Tài liệu kiến trúc hệ thống chi tiết</li>
          <li className="done"><strong>Video demo</strong> — (đang cập nhật link YouTube, tối đa 10 phút, tối thiểu 720p)</li>
          <li className="done"><strong>Self-Report</strong> — Mỗi thành viên đã commit file vào <code>docs/self-reports/</code></li>
          <li className="done"><strong>Deploy trên Vercel</strong> — <a href="https://finance-for-me-local.vercel.app" target="_blank" rel="noopener">finance-for-me-local.vercel.app</a></li>
        </ul>

        {/* ── SELF-REPORTS ── */}
        <h2>Self-Reports</h2>
        <p>Mỗi thành viên đã commit file self-report vào <code>docs/self-reports/self-report-[MSSV].md</code> trong repository.</p>

        <table>
          <thead>
            <tr><th>Họ tên</th><th>MSSV</th><th>Link Self-Report</th></tr>
          </thead>
          <tbody>
            <tr><td>Nguyễn Tâm Đức</td><td>(điền MSSV)</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-duc.md" target="_blank" rel="noopener">self-report-duc.md</a></td></tr>
            <tr><td>Trần Võ Bá Vương</td><td>2420008</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-vuong.md" target="_blank" rel="noopener">self-report-vuong.md</a></td></tr>
            <tr><td>Châu Tuấn Kiệt</td><td>(điền MSSV)</td><td><a href="https://github.com/tducn110/Tracker_yourMoney/blob/main/docs/self-reports/self-report-kiet.md" target="_blank" rel="noopener">self-report-kiet.md</a></td></tr>
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

        <h3>Top modules</h3>
        <p>UI, Services, Repositories, Quick-add, Dashboard, Routes, Budgets, Hooks, Context, Wallet, Middleware</p>

        <h3>Main API route map</h3>
        <pre><code>{`/api/auth           /api/v1/wallet        /api/v1/analytics
/api/v1/transactions  /api/v1/bills          /api/v1/categories
/api/v1/goals         /api/v1/budgets        /api/v1/user
/api/v1/notifications /api/v1/ai             /api/v1/health`}</code></pre>

        <h3>Important source files</h3>
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

        <h3>Recent GitHub commits</h3>
        <pre><code>{`fff7e94 feat: onboarding wizard 4 buoc - info, wallet, budget, transaction  (Chau Tuan Kiet)
46ada24 Merge pull request #157 from tducn110/fix/update-lockfile
55beb49 chore: update pnpm-lock.yaml                              (ViccVuongVicc)
5448dc9 Merge pull request #156 from tducn110/fix/issue-155-type-errors-formatting
d17a5ae fix(web): resolve type errors and normalize currency formatting  (ViccVuongVicc)
1439c58 feat(web): enhance wallet integration and analytics (#154)
f650aed feat(api,web): refactor dashboard and S2S engine (#152)
8b3ca4b feat(api,web): implement AI Quick Add with Gemini integration (#150)
613a823 feat(system): comprehensive UI refactor and auth optimization (#129-#136)
804e27f fix(web): parse JSON error responses and display detailed error messages (#102)
fa1a282 fix(vercel): fix auth and api deployment by embedding Hono as Next.js route (#144)
08d5053 feat(web): implement useMounted hook to handle client-side rendering (#139)`}</code></pre>

        {/* ── FOOTER ── */}
        <footer>
          <p>Báo cáo cuối kỳ — Finance Tracker V3 | Nhóm Antigravity | Ngày nộp: 15/05/2026</p>
        </footer>
      </div>
    </>
  );
}
