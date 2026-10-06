# 血庫與輸血醫學研習室 — 可編輯原始碼

這份 ZIP 包含網站全部可編輯 HTML、CSS、JavaScript 及獨立 JSON 教材／題庫，不需要從打包輸出反推原始碼。既有線上網站未被這次匯出變更。

## 啟動

安裝 Node.js 20 或更新版本，解壓縮後於專案資料夾執行：

```sh
npm run check
npm run dev
```

瀏覽 http://127.0.0.1:5173 。這個專案不使用第三方套件，不必執行 npm install。

## 修改位置

- src/index.html：頁面骨架、導覽、標題及頁尾。
- src/styles.css：桌面／手機樣式。
- src/app.js：章節切換、案例答題、ABO 相容性、兩組合成抗體 panel、CCI 計算。
- src/data/lessons.json：15 章教材。前 7 章屬血庫檢驗，其餘屬輸血醫學；改變分類邊界時，同步修改 src/app.js 的 bounds()。
- src/data/questions.json：24 題完整題庫，包含情境、四個選項、正確答案、解析與來源 ID。
- src/data/references.json：22 筆來源資料。
- scripts/：建置、資料／語法檢查及本機預覽工具。
- deployment/hosting.original.json：原 Sites 部署資訊的參考副本，不含憑證；這份 ZIP 不會自動部署或變更線上網站。

題目 answer 是從 0 開始的選項索引（A=0、B=1、C=2、D=3）。refs 必須對應 references.json 的 id。支援新增題目，案例總數會自動讀取。

修改後執行 npm run check，再重新執行 npm run dev，或執行 npm run build 產生新版網站。dist/ 是可重新產生的輸出，不是編輯入口；ZIP 不包含 dist/、node_modules/、.git 或任何金鑰。

教材與案例來源查核於 2026-10-04／05；原始碼匯出於 2026-10-06。所有情境為模擬，未經院內專家審訂。實際檢驗、治療與發血依院內 SOP。學習状态僅保留於本次頁面。
