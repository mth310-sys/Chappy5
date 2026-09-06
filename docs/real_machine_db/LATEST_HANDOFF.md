# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **774**
- latestMachineAddedByChronology: **戦国パチスロ 花の慶次～これより我ら修羅に入る～**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-11-05_hana-no-keiji-koreyori-warera-shura.md`
- chronologicalFrontier: **2013-11-05**
- frontierLatestExactDateMachine: **戦国パチスロ 花の慶次～これより我ら修羅に入る～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-11-05_GROUP__CLOSED_2013-11-06_TO_11-17_FOR_CURRENT_RESEARCH__NEXT_2013-11-18_GROUP**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-11-05_eureka-seven-2.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を正とした。
- 作業開始時の最新正本は **recordCount 773 / chronologicalFrontier 2013-11-05 / 11-05群OPEN**。
- 2013-11-05同日群のメーカー横断監査で、未登録のニューギン **「戦国パチスロ 花の慶次～これより我ら修羅に入る～」** を検出し774件目として追加。
- 同日検索ではCR鉄拳・CR新アレジン等のパチンコ混入を分離。今回の再監査範囲では11-05のパチスロ未登録確定機は他に固定できず **11-05群CLOSED_FOR_CURRENT_RESEARCH**。
- 2013-11-06〜11-17を導入日/納品日/発売告知日/アプリ配信日を分離して再監査し、今回具体的ホール導入日付きで新規登録すべき未登録機を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日アンカーは **2013-11-18**。既知候補を5機種まで拡張確認した。

## 今回追加 — 戦国パチスロ 花の慶次～これより我ら修羅に入る～

### identity / 性能コア

- manufacturer: **ニューギン**。
- modelName: **花の慶次～これより我ら修羅に入る～Y**。
- inspectionNumber: **3S0615**。
- releaseDate: **2013-11-05**。HAZUSE / K-Naviで一致。
- generation/system: **5号機 / AT / 擬似ボーナス / CZ / ゲーム数・モード管理 / 保留玉抽選**。
- AT初当たり: **1/298 / 282 / 269 / 252 / 238 / 205**。精密系列は1/297.53 / 282.27 / 268.74 / 252.03 / 237.71 / 205.01。
- 機械割はCONFLICT:
  - K-Navi: **97 / 99 / 101 / 104 / 107 / 112%**。
  - 後年解析整理: **96.82 / 99.54 / 100.87 / 102.79 / 105.73 / 109.71%**。
  - 設定4〜6は丸め差を超えるため平均せず双方保持。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。2023年スマスロ佐渡攻め33.5G/50枚は別機種なので遮断。
- AT「黎明の刻」: **1セット20～100G以上 / 純増約2.8枚/G**。
- 擬似ボーナス「大攻城戦BONUS」: **約100枚 / 34G**。
- 通常モード: **通常 / チャンス / 天国**。天国は128G以内当選確定。
- 通常最大天井: **1400G**、到達時 **修羅100G確定**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_WITH_CONFLICTS**。

### resetBehavior v0.7

- 設定変更時天井ゲーム数: **RESET_CONFIRMED**。
- 設定変更時保留玉: **RESELECT_CONFIRMED**。
- 設定変更時モード: 当時必勝本資料でも「調査中」で、今回再探索後も具体契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更後天井: 後年攻略整理で **1280G_ANALYSIS_SINGLE**。通常最大1400Gと分離保存。
- 純電源OFF→ON:
  - 天井G **KEEP_CONFIRMED**。
  - 保留玉 **KEEP_OBSERVED**（当時必勝本の実戦上引継ぎ）。
  - モード **UNVERIFIED**。
- 据え置き:
  - 保留玉再抽選の後年実戦整理あり。
  - 前日+当日G数位置での前兆実戦観測あり。
  - ただし天井G/モードの高信頼完全保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。
- 朝一変更判別: 保留玉表示を使った0G判別法あり。ただし店側の数G回し等で崩れるため確定判別ではない。
- 本機固有ガックン: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 公開朝一数値

設定変更時の保留玉専用振り分けを必勝本から取得。

- 初回規定G 128G以内:
  - 白白白白: 設1〜6 **63 / 62 / 61 / 60 / 59 / 58%**。
  - 青白白白: **20%全設定**。
  - 青青白白: **10%全設定**。
  - 青青青青白: **4%全設定**。
  - 青青青青黄: **2%全設定**。
  - 白白白黄: 設1〜6 **1 / 2 / 3 / 4 / 5 / 6%**。
- 初回規定G 129G以上:
  - 白白白白: 設1〜6 **74.5 / 73.5 / 72.5 / 71.5 / 70.5 / 69.5%**。
  - 青白白白: **15%全設定**。
  - 青青白白: **7%全設定**。
  - 青青青青白: **2%全設定**。
  - 青青青青黄: **0.5%全設定**。
  - 白白白黄: 設1〜6 **1 / 2 / 3 / 4 / 5 / 6%**。

## 2013-11-05同日群 — CLOSED_FOR_CURRENT_RESEARCH

登録済み:
- **パチスロ 交響詩篇エウレカセブン2**（Sammy） — record 773。
- **戦国パチスロ 花の慶次～これより我ら修羅に入る～**（ニューギン） — record 774。

- HAZUSE / K-Navi / P-WORLD / 当時攻略・業界系検索を横断し、パチンコ機を分離。
- 現研究範囲では上記以外の11-05導入パチスロ未登録確定機を固定できずCLOSED。

## 2013-11-06〜2013-11-17境界 — CLOSED_FOR_CURRENT_RESEARCH

- 日付別・機種別・メーカー別に検索し、発売告知・アプリ配信・パチンコ導入を分離。
- 今回の再探索では具体的ホール導入日付きの未登録パチスロを固定できなかった。
- 次の複数高信頼アンカーは2013-11-18。

## 2013-11-18同日群 — OPEN / 先行確認候補

次回は同日群を漏れ防止優先で処理。現時点で導入日2013-11-18を確認済み:

1. **パチスロ ギルティギア**（D-light / ディ・ライト）
   - D-techno当時プレスリリース: 実機全国導入2013-11-18。
   - パチビーでも2013-11-18。
2. **パチスロ テイルズ オブ デスティニー**（北電子）
   - K-Navi: 2013-11-18。
3. **パチスロ タイガーマスク**（SANKYO）
   - パチビー: 2013-11-18。
4. **マジカルハロウィン4**（KPE）
   - パチビー / K-Navi: 2013-11-18。
5. **パチスロ スタードライバー**（山佐）
   - パチビー / K-Navi: 2013-11-18。

- 11-18群は上記5機種以外も全メーカー横断監査してからCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規時系列収集を優先し、今回QAカーソルは動かしていない。

## 次回再開地点

1. **recordCount 774 / chronologicalFrontier 2013-11-05 / 11-05群CLOSED / 11-06〜11-17境界CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2013-11-18同日群**へ進む。
3. 最優先候補は **「パチスロ ギルティギア」**。既存レコード不在をmain確認してから775件目候補として性能コア＋resetBehavior v0.7を収集。
4. その後 **テイルズ オブ デスティニー → タイガーマスク → マジカルハロウィン4 → スタードライバー** の既知候補を未登録確認し順次処理。
5. 同日全メーカー監査を行い、別の11-18機があれば日付内で追加してからCLOSED。
6. 導入日・納品日・発売告知日・検定日・アプリ配信日を混同しない。
7. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続可能。

## 主要出典 — 取得日 2026-09-06

### 花の慶次～これより我ら修羅に入る～

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0615/` — 型式/検定/導入日/AT初当たり。
- K-Navi: `https://p-kn.com/slot/1936/` — 導入日/AT初当たり/機械割主系列/ゲーム性。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/29/a.php` — 純増約2.8枚/G、AT構造。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7200` — 5号機AT、AT20〜100G以上、純増約2.8枚/G、大攻城戦BONUS約100枚。
- 必勝本「天井&設定変更」: `https://p.hisshobon.jp/machine/2290/1/42582` — 通常1400G、1400G到達修羅100G、設定変更時天井Gリセット/保留玉再抽選、設定変更時保留玉振り分け、電源OFF→ON時天井G引継ぎ/保留玉実戦上引継ぎ。
- すろぱちくえすと: `https://www.slopachi-quest.com/kisyubetsu/hananokeiji-syura/` — 精密AT初当たり、競合機械割系列。
- 朝一保留判別: `https://www.slopachi-quest.com/article/379668210-html/` — 保留玉を使う朝一変更推測。
- 真パチスロ備忘録: `https://sin-surobi.com/notebook/2758/` — 通常/チャンス/天国天井、設定変更後1280G、据え置き実戦観測。

### 次候補 / 境界

- D-techno / @Press: `https://www.atpress.ne.jp/news/40700` — ギルティギア全国導入2013-11-18。
- パチビー ギルティギア: `https://www.pachibee.jp/machines/about/213100003` — 導入日2013-11-18。
- K-Navi テイルズ オブ デスティニー: `https://p-kn.com/slot/1928/` — 導入日2013-11-18。
- パチビー タイガーマスク: `https://www.pachibee.jp/machines/about/213100005` — 導入日2013-11-18系資料。
- パチビー マジカルハロウィン4: `https://www.pachibee.jp/machines/index/213100006` — 導入日2013-11-18。
- K-Navi マジカルハロウィン4: `https://p-kn.com/slot/1945/` — 導入日2013-11-18。
- パチビー スタードライバー: `https://www.pachibee.jp/machines/about/213100007` — 導入日2013-11-18。
- K-Navi スタードライバー: `https://p-kn.com/slot/1951/` — 導入日2013-11-18。

## commits

- 774th record add: `de642c6d06937b990c6cb1a5d3d584d871713d35` (`db: add Hana no Keiji Shura with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Hana no Keiji Shura`)
