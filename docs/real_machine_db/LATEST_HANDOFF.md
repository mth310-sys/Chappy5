更新日: 2026-09-09

## 現在地点
- recordCount: **1124**
- latestRecordAdded: **イミソーレ3V-30**（エマ / 遡及漏れ回収）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08_imisore-3v-30.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **神の左手 悪魔の右目 — No.1123**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_CLOSED_RETROACTIVE_GAP_RECOVERED_NEXT_2017-08-28_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1123「神の左手 悪魔の右目」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1123件 / chronologicalFrontier 2017-08-21 / 8/21群CLOSED + RETROACTIVE_GAP_OPEN**。
- HANDOFF最優先の遡及漏れ **「イミソーレ3V-30」** をNo.1124としてperformance core + resetBehavior v0.7で登録。
- GitHubコード検索で同名既存レコードなしを確認してから新規作成。
- HAZUSEで型式 **イミソーレ3V-30**、検定番号 **7S0676**、メーカー **エマ**、導入開始 **2017-08-07** を確認。
- 既存HANDOFFの2-9伝説 **2017-08-17**、P-Summa回顧の **8月15日頃から導入開始** と競合するため、平均せずCONFLICT保持。canonicalはHAZUSEの日付付き型式DB **2017-08-07**。
- BIG/REG確率はHAZUSE当時表、機械割は5号機クロニクル、BIG/REG獲得とBIG後100G「はながさタイム」はP-WORLD/HAZUSE/実機資料で収集。
- resetBehaviorでは **設定変更後1回目BIGの設定示唆信頼度が大きく上がる**直接記載を保存。天井短縮・朝一専用モード・ガックン等は十分な再探索後も固定できず推測転記していない。
- 50枚ベースは「50枚/1000円/ベース/コイン持ち/回転数」＋機種名表記揺れで複数資料系統を再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2017年当時の異常出玉/裏モノ疑惑・電源継続時の個人実機観測は、正規検定型式の公開仕様として検証不能なためcanonical性能・resetBehaviorから除外。

## No.1124 — イミソーレ3V-30
- manufacturer: **エマ**
- releaseDate canonical: **2017-08-07**
- releaseDate conflict: **2017-08-07 vs 2017-08-17 with mid-August observation**
- formalModelName: **イミソーレ3V-30**
- certificationNumber: **7S0676**
- generation/system: **5号機 / ノーマル / 完全告知 / 30Φ / BIG後100G小役ナビ**
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.5 / 97.9 / 100.1 / 103.1 / 105.8 / 109.0%**（5号機クロニクル単一後年整理。HAZUSE当時ページは出玉率「調査中」）。
- BIG: **1/235.7 / 234.1 / 232.4 / 230.8 / 229.1 / 227.6**。
- REG: **1/481.9 / 409.6 / 360.1 / 318.1 / 287.4 / 260.1**。
- 合算: **1/158.3 / 148.9 / 141.3 / 133.7 / 127.5 / 121.4**。
- BIG獲得: **約286枚**。
- REG獲得: **約104枚**。
- BIG後: **100G「はながさタイム」**。小役ナビによりコイン持ちアップ。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- はながさタイム純増/G: **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7
- settingChange: **設定変更後1回目BIGの設定示唆信頼度が大きく上昇**。
- BIG中示唆色: **青 < 黄 < 緑 < 赤** の順で高設定示唆。具体出現率はUNVERIFIED。
- P-WORLDは「設定変更後or初回BIG」に限り信頼度大幅UPと書くため、HAZUSEの「設定変更後1回目」に対する条件表現差をconflict/note保持。
- normal game-count ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset mode/state distributions: **UNVERIFIED_AFTER_RESEARCH**。
- stay-setting / pure-power-cycle hanagasa remaining-G and machine-specific internal-state contract: **UNVERIFIED_AFTER_RESEARCH**。
- direct gakkun / initial-display reset detection: **UNVERIFIED_AFTER_RESEARCH**。
- first-BIG示唆は設定変更そのものを確定判別する契約ではないため `RESET_HINT_CONTEXT_NOT_DETERMINISTIC_RESET_DETECTION`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / unresolved
- exact release date: HAZUSE **2017-08-07** vs 既存HANDOFFで確認した2-9伝説 **2017-08-17** vs P-Summa回顧 **8月15日頃から導入開始**。平均せず保持。
- payoutRateBySetting: 数値表は後年5号機クロニクル1系統。別高信頼数値表の照合待ち。
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- hanagasaTime net increase/G: UNVERIFIED_AFTER_RESEARCH。
- setting-change treatment of hanagasa remaining games: UNVERIFIED_AFTER_RESEARCH。
- stay-setting / pure-power-cycle internal state: UNVERIFIED_AFTER_RESEARCH。
- gakkun / reset display: UNVERIFIED_AFTER_RESEARCH。
- anomalous field behavior / 裏モノ疑惑は正規公開仕様として検証不能のためcanonicalから除外。

## 2017-08-21群監査 — CLOSED
- No.1118 イノキロードトゥゴッド
- No.1119 パチスロ ロボットガールズZ
- No.1120 戦国乙女～TYPE-A～
- No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～
- No.1122 ぱちスロ 仮面ライダーBLACK
- No.1123 神の左手 悪魔の右目
- 群自体はCLOSED。境界監査で発見したイミソーレ3V-30の遡及漏れもNo.1124で回収完了。

## 2017-08-28次群 — OPEN
- 先行監査済み候補:
  1. **討鬼伝**
  2. **戦国美少女 織田信奈の野望**
- 次回はまず「討鬼伝」の既存重複/正式導入日・型式を確認し、未登録なら **No.1125候補**としてperformance core + resetBehavior v0.7を収集。
- 続いて「戦国美少女 織田信奈の野望」を処理し、8/28群を全メーカー横断再監査してCLOSED可否を判定。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線境界の遡及漏れNo.1124回収を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1124を再取得。
2. **1124件 / chronologicalFrontier 2017-08-21 / 8/21群CLOSED / retroactive gap recovered / 2017-08-28群OPEN** を正本として継続。
3. **最優先:「討鬼伝」No.1125候補**。重複・正式導入日・型式確認後、performance core + resetBehavior v0.7を登録。
4. 次に **「戦国美少女 織田信奈の野望」**。
5. 8/28群を全メーカー横断監査してCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1124 イミソーレ3V-30
- HAZUSE イミソーレXX30（型式/検定/導入日/ボーナス確率/ゲームフロー）: https://hazuse.com/machine/pachislot/7S0676/
- HAZUSE 設定推測（設定変更後1回目BIG示唆）: https://hazuse.com/machine/pachislot/7S0676/genre/208/
- P-WORLD イミソーレ3V-30: https://www.p-world.co.jp/machine/database/8490
- 5号機クロニクル エマ: https://5goki.com/ema
- P-Summa イミソーレ回顧: https://psumma.jp/pachislo/36486/
- A-SLOT 実機資料: https://www.a-slot.com/SHOP/ema6.html
- ピーボム 実機資料: https://www.bomb-slot.jp/view/item/000000000647
