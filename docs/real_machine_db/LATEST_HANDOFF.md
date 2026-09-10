更新日: 2026-09-10

## 現在地点
- recordCount: **1191**
- latestRecordAdded: **パチスロ 楽シーサー30Φ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-07_tanoshisa-30.md`
- chronologicalFrontier: **2018-05-07**
- frontierLatestMachine: **パチスロ 楽シーサー30Φ — No.1191**
- schema: **resetBehavior v0.7**
- status: **2018-05-07_GROUP_CORE_4_REGISTERED_HIHOUDEN_REV_DATE_AUDIT_REMAINS**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1190 `パチスロ FAIRY TAIL` を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1190件 / chronologicalFrontier 2018-05-07 / 5/7群DATE_CONFLICT監査中**。
- GitHub検索で `楽シーサー30` の既存レコードがないことを確認。
- `パチスロ 楽シーサー30Φ` の導入日を再監査。2018-05-07と2018-05-21の競合を再確認し、複数の導入一覧・当時解析・回顧が支持する2018-05-07をchronological canonical、5/21をCONFLICTとして保持。
- No.1191 `パチスロ 楽シーサー30Φ` を新規登録。
- SANKYO公式オンライン博物館から販売名/型式名 `パチスロ 楽シーサー jR` と設定別BB/RB/合算を一次確認。
- performance coreとresetBehavior v0.7を同時収集。resetBehavior固有契約は検索語・資料系統を変えて再探索したが固定できず、推測補完せず `UNVERIFIED_AFTER_RESEARCH`。
- `秘宝伝 Rev.` の5/7 vs 5/21境界監査は未完了のため、5/7群はまだCLOSEDにしない。

## No.1191 — パチスロ 楽シーサー30Φ
- path: `docs/real_machine_db/machines/2018-05-07_tanoshisa-30.md`
- manufacturer: **SANKYO**
- releaseDateCanonical: **2018-05-07**
- releaseDateConflict: **2018-05-07 vs 2018-05-21**
- formalModelName: `パチスロ 楽シーサー jR`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / ノーマル / 完全告知 / 30Φ**
- 機械割: **96.9 / 98.0 / 101.0 / 104.0 / 107.1 / 110.5%**
- BIG: **1/291 / 283 / 278 / 261 / 249 / 238**
- REG: **1/468 / 448 / 422 / 385 / 354 / 339**
- 合算: **1/179 → 1/140**（設定2のみ公式1/173、解析表1/172の丸め差保持）
- 50枚ベース: **35.4 / 35.8 / 36.1 / 36.4 / 36.7 / 37.1G**
- BIG: **312枚** / REG: **130枚**
- 天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: 朝一専用/リセット専用モード `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_NORMAL_TYPE`。
- resetBenefits: 短縮天井なし、設定変更専用初当たり/CZ/モード優遇 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックン/初期出目/ランプ変更判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス告知や設定示唆演出は設定変更判別とは別なので転用しない。

## 2018-05-07群監査
### 登録済み
- No.1188 `パチスロ 大海物語4` — 三洋物産。
- No.1189 `パチスロ北斗の拳 修羅の国篇 羅刹ver.` — サミー。
- No.1190 `パチスロ FAIRY TAIL` — 藤商事。
- No.1191 `パチスロ 楽シーサー30Φ` — SANKYO。5/7 vs 5/21のDATE_CONFLICT保持。

### 日付競合 / 境界保留
- `秘宝伝 Rev.`
  - すろぱちくえすとの2018導入順は2018-05-07群に掲載。
  - 別の導入カレンダー/当時解析には2018-05-21表記がある。
  - 次回、公式/業界一次・HAZUSE/P-WORLD/当時ホール導入資料を追加照合しcanonical dayを裁定する。
  - GitHub既存登録の有無も必ず再確認する。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで推測表現「?」「可能性が高い」「調査中」を確定契約へ昇格しない。
- 5.9号機一般論から本機固有の有利区間リセット契約を推定転記しない。
- ノーマル機一般論から設定変更/電断挙動を推定転記しない。
- 別スペックの値を転記しない。
- 導入カレンダー間の日付競合は平均化せず `CONFLICT` として保持し、実導入/納品開始/予定日の定義差を確認する。
- `INDEX.md` は旧スナップショット。次回も `LATEST_HANDOFF.md` + main実レコードを優先する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_ooedo-manyuuki.md**（大江戸漫遊記）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_shinzo-ningen-casshern.md`（新造人間キャシャーン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は新規本線No.1191を優先し、retro cursorは変更なし。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1191を再取得。
2. **1191件 / chronologicalFrontier 2018-05-07** を正本として継続。
3. `秘宝伝 Rev.` の2018-05-07 vs 2018-05-21を公式・業界・当時DBで再裁定。GitHub未登録なら、canonical dayを確定した上でNo.1192候補としてperformance core + resetBehavior v0.7を収集。
4. 5/7群の追加漏れを全メーカー/別スペック/地域差で最終監査し、秘宝伝Rev.の帰属確定後にCLOSED判定。
5. 次の日付群（主に2018-05-21候補群）へ前進。
6. 遡及QAは `2006-07_shinzo-ningen-casshern.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1191 楽シーサー30Φ
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/688/
- すろぱちくえすと本機: https://www.slopachi-quest.com/article/tanosi-sa-30pai/
- すろぱちくえすと2018導入順: https://www.slopachi-quest.com/article/sindai-2018/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/56854/
- パチ7回顧: https://pachiseven.jp/columns/column_detail/15367

### 直前No.1190 FAIRY TAIL主要出典
- HAZUSE: https://hazuse.com/machine/pachislot/7S1186/
- 一撃 設定変更: https://1geki.jp/slot/s_fairy_tail/3/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/55964/
