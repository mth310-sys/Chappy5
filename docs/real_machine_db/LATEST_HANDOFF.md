更新日: 2026-09-13

## 現在地点
- recordCount: **1553**
- latestRecordAdded: **戦国コレクション5 — No.1553**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-03-06_sengoku-collection-5.md`
- chronologicalFrontier: **2023-03-06**
- frontierLatestMachine: **戦国コレクション5 — No.1553**
- schema: **resetBehavior v0.7**
- status: **2023-03-06_GROUP_CLOSED_2_OF_2_KNOWN_CANONICAL_PROCESSED / NEXT_2023-03-20_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1552 `パチスロ機動戦士ガンダムユニコーン` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として採用。
- No.1553 `戦国コレクション5` を性能コア + resetBehavior v0.7で追加。
- 2023-03-06群は `パチスロ機動戦士ガンダムユニコーン` / `戦国コレクション5` の2/2を処理しCLOSED。
- 次導入境界は2023-03-20。現時点の既知パチスロは `キングハナハナ-30` / `OVERLORD 絶対支配者光臨Ⅱ` / `スロドル` の3機。次回、PB・別型式・30Φ派生・地域先行・延期/段階導入を再監査して群を確定する。

## No.1553 — 戦国コレクション5
- manufacturer: **KPE / コナミアミューズメント**
- formalModel: **S戦国コレクション5PS**
- inspectionCode: **2S1018**
- releaseDate: **2023-03-06**
- generation/system: **6.5号機 / メダルAT / 規定コレ数・シナリオ管理型**
- payoutRate: **97.8 / 98.7 / 100.3 / 104.0 / 107.7 / 110.1%（設定1〜6）**
- AT初当り: **1/350.1 / 1/334.6 / 1/318.9 / 1/275.2 / 1/251.8 / 1/233.2**
- baseGamesPer50: **約32.3G/50枚**
- netIncrease: **約10.0枚/G**
- basicPayout: **AT1セット20G+α / 6セット目到達で上位AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_BENEFIT_NUMBERS**

### resetBehavior v0.7 — No.1553
- **設定変更**: 有利区間・天井/規定コレ・内部状態・モードRESET。AT継続シナリオ抽選を優遇。
- **据え置き**: 有利区間・天井/規定コレ・内部状態・モードCARRY_OVER。
- **純電源OFF→ON**: 天井/規定コレ・内部状態・モードCARRY_OVERを確認。有利区間そのものの通常版固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- **通常天井**: 最大1280コレ。設定変更専用固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更後、高期待度シナリオ約1/6、継続濃厚シナリオ約1/6。初回AT終了時の裏天国移行約10%。1153〜1216コレで初回AT当選時は高期待度約26% / 濃厚約26%。
- **変更判別**: 有利区間ランプ判別不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- **混同防止**: 2023-09のスマスロ `戦国コレクション5超極楽LOOP` は別型式・別仕様。後年スマスロ資料の「天国+モードC約54%」は通常版canonical数値へ流用しない。

## 2023-03-06群 — CLOSED 2/2
1. パチスロ機動戦士ガンダムユニコーン — No.1552
2. 戦国コレクション5 — No.1553

## 次導入境界 — 2023-03-20（既知3機・要再監査）
1. **キングハナハナ-30** — パイオニア
2. **OVERLORD 絶対支配者光臨Ⅱ** — オーイズミ
3. **スロドル** — コナミアミューズメント

## resetBehavior 遡及QA
- `2007-06-25_morning-musume.md`（モーニング娘。）を再確認。
- 既存 `status: PARTIAL` は性能コアの判定として維持。
- 既存レコードにはv0.7 resetBehavior自体は入っているが `qaResetBehavior: PARTIAL` のまま。
- CZ「モーニングチャンス」/ 77G RT「モーニングタイム」の設定変更・据え置き・純電源OFF→ON時の内部状態/残G、本機固有ガックン等を機種名・型式・メーカー・朝一/設定変更/据え置き/電断/RT引継ぎで再探索しても直接固定できないため、一般的5号機挙動では補完しない。
- QA結論は `PARTIAL_RESEARCH_EXHAUSTED` 相当。ただし今回、既存長文レコードを安全に全置換するための完全本文取得が書込工程内で確保できず、レコード本体の `qaResetBehavior` 値は変更していない。次回最優先で正式反映する。
- `2007-07-08_caribbean-queen.md`（カリビアンクイーン）は `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL` を確認。モーニング娘。正式化後の次QA候補。

## 今回の主要資料
### No.1553
- コナミアミューズメント公式: https://www.konami.com/amusement/corporate/ja/topics/20221205/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/22433/nippon
- 遊技通信 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22607/yugitsushin
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2531/2
- パチ＆スロ必勝本 機種基本: https://p.hisshobon.jp/machine/4032/1/92491
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/506/13931/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9769
- イチカツ: https://ichikatsu.com/sengokucollection5/

### 境界監査
- 一撃 2023年3月新台スケジュール: https://1geki.jp/newmachinecalender/202303/
- パチンコ・パチスロ.com 2023導入カレンダー: https://pachinkopachisro.com/archives/57208678.html

## 保存コミット
- No.1553追加: `357316397fa88e9e042fbbea4f420d9e0b43ccd3`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1554候補 `キングハナハナ-30`（パイオニア / 2023-03-20）から継続。最初に2023-03-20群をPB・別型式・30Φ派生・地域先行・延期/段階導入まで再監査し、正式型式・検定番号、性能コア、resetBehavior v0.7を収集する。遡及QAは `2007-06-25_morning-musume.md` の `qaResetBehavior: PARTIAL` を `PARTIAL_RESEARCH_EXHAUSTED` 相当へ安全に正式反映した後、次の未完了 `2007-07-08_caribbean-queen.md` へ進む。既存COMPLETE_COREは性能完了判定として維持し、reset QA状態だけを別管理する。**
