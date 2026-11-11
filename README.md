# 眼底判讀練習室 Retina Lab

糖尿病視網膜病變（DR）眼底判讀互動教材。

- 判讀練習（`#case1`–`#case40`）：40 題，作答後顯示教學標記與動畫解說；病例 22–40 為 IDRiD 公開資料庫的真實照片
- 示範病例（`#cases`）：12 例逐步判讀（篩檢品質、重度 NPDR＋GLP-1、CI-DME、高危險 PDR、玻璃體出血、懷孕、第一型首次篩檢、滲出距離與 CSME、硬性滲出與血脂、視網膜前出血、纖維血管增殖、曝光不足）
- 考題（`#quiz`）：基礎 20＋高階 20，選答後顯示解析，不儲存
- 心智圖（`#map`）

線上版：https://yht5582-source.github.io/Fundus-photography/

## 範圍
- 分期（ICDR）：無 DR、輕度／中度／重度 NPDR（4-2-1 規則）
- 黃斑水腫：CSME（ETDRS）、中心受累 DME 與抗 VEGF 前後 OCT
- 增殖期：NVE、高危險 PDR（NVD）、視網膜前出血、玻璃體出血
- 治療後：局部雷射、PRP、抗 VEGF 前後、PRP 後消退期、玻璃體切除、眼內雷射
- 手術與影像品質：牽引性視網膜剝離、術中纖維血管膜、白內障影像品質、模糊與曝光不足
- 鑑別：年輕人反光、豹紋狀眼底與視乳頭旁萎縮

## 圖片來源
- National Eye Institute／NIH（公有領域，經 Wikimedia Commons）
- Hao S, et al. PLOS ONE 2022;17(10):e0275983, Fig. 1A（CC BY 4.0）
- Sokol JT, et al. PLOS ONE 2019, Fig. 1 B–F（CC BY）
- Elsawy A, et al. Communications Medicine 2023, Fig. 4（CC BY 4.0）
- IDRiD：Porwal P, et al. Data 2018;3(3):25（CC BY 4.0），19 張；散瞳後 Kowa VX-10α 50° 拍攝，分級沿用資料集專家標註。檔案取自 Zenodo 17219542（原始 ZIP 的轉存）
- 標示「示意圖」者為程式繪製（canvas）的教學影像，不是病人照片。

## 內容依據（示範病例、考題、心智圖）
ADA Standards of Care 2026 §12、AAO DR Preferred Practice Pattern 2025（全文）；ICDR 2003、DRS、ETDRS（Report 1、9、22）、DCCT、FIELD、ACCORD Eye、LENS、DRCR Protocol S／T／V／W／AB、PANORAMA 等試驗摘要。內容在 `index.html` 的 `/*TEACH-START*/` 區塊，檢查：`node tests.cjs`（沒有 node 時可用 macOS 內建 JavaScriptCore 執行同一套檢查）。

## 聲明
僅供教學，不作為臨床診斷工具。教學標記、中文解說、示範病例與考題尚待眼科專科醫師審閱。
作答紀錄只存在使用者瀏覽器（localStorage），不傳送任何資料。
