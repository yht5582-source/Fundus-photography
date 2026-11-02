# 眼底判讀練習室 Retina Lab

糖尿病視網膜病變（DR）眼底判讀互動教材。

- 判讀練習（`#case1`–`#case21`）：21 題，作答後顯示教學標記與動畫解說
- 示範病例（`#cases`）：6 例逐步判讀（篩檢品質、重度 NPDR＋GLP-1、CI-DME、高危險 PDR、玻璃體出血、懷孕）
- 考題（`#quiz`）：基礎 10＋高階 10，選答後顯示解析，不儲存
- 心智圖（`#map`）

線上版：https://yht5582-source.github.io/Fundus-photography/

## 範圍
- 分期（ICDR）：無 DR、輕度／中度／重度 NPDR（4-2-1 規則）
- 黃斑水腫：CSME（ETDRS）、中心受累 DME 與抗 VEGF 前後 OCT
- 增殖期：NVE、高危險 PDR（NVD）、視網膜前出血、玻璃體出血
- 治療後：局部雷射、PRP、抗 VEGF 前後、PRP 後消退期、玻璃體切除、眼內雷射
- 手術與影像品質：牽引性視網膜剝離、術中纖維血管膜、白內障影像品質

## 圖片來源
- National Eye Institute／NIH（公有領域，經 Wikimedia Commons）
- Hao S, et al. PLOS ONE 2022;17(10):e0275983, Fig. 1A（CC BY 4.0）
- Sokol JT, et al. PLOS ONE 2019, Fig. 1 B–F（CC BY）
- Elsawy A, et al. Communications Medicine 2023, Fig. 4（CC BY 4.0）
- 標示「示意圖」者為程式繪製（canvas）的教學影像，不是病人照片。

## 內容依據（示範病例、考題、心智圖）
ADA Standards of Care 2026 §12、AAO DR Preferred Practice Pattern 2025（全文）；ICDR 2003、DRS、ETDRS、DRCR Protocol S／T／V／W／AB、PANORAMA 等試驗摘要。內容在 `index.html` 的 `/*TEACH-START*/` 區塊，檢查：`node tests.cjs`。

## 聲明
僅供教學，不作為臨床診斷工具。教學標記、中文解說、示範病例與考題尚待眼科專科醫師審閱。
作答紀錄只存在使用者瀏覽器（localStorage），不傳送任何資料。
