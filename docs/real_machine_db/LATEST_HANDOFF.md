# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **726**
- latestMachineAdded: **スーパーシオ-30**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2013-04-01_super-shio-30.md`
- chronologicalFrontier: **2013-04-01**
- frontierLatestExactDateMachine: **スーパーシオ-30**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-01_GROUP__NEXT_KIMBERLY_30**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-04-01_ashita-no-joe-2.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **725** / chronologicalFrontier **2013-04-01** / 04-01群OPEN。
- `docs/real_machine_db/machines/2013-04-01_super-shio-30.md` が未存在であることをmainで確認後、性能コアとresetBehavior v0.7を同時収集し **726件目**として追加。

## 今回追加 — スーパーシオ-30

### identity / 性能コア

- releaseDate: **2013-04-01**。パイオニア公式更新履歴が同日「導入開始」と明記し、K-Navi・パチビーも一致。
- 2013-02-15メーカー発売リリースは「3月末導入予定」、グリーンべるとは「3月31日納品開始予定」、後年5号機DBは2013/3表記のため、予定/納品と実導入日を分離した。
- manufacturer: **パイオニア**。
- formalModelName: **スーパーシオA-30**（メーカー公式）。
- systemType: **5号機 / ノーマルAタイプ / 完全告知 / 30φ沖スロ / 技術介入**。
- 機械割: **96.0 / 97.5 / 99.0 / 102.5 / 105.5 / 110.0%**。
- BIG: **1/296 / 284 / 274 / 260 / 248 / 240**。
- REG: **1/595 / 585 / 574 / 504 / 474 / 442**。
- 合算: **1/198 / 191 / 185 / 171 / 163 / 155**。
- 50枚ベース: **約34～35G/1000円**（2013-03-01業界記事）。
- BIG: **最大312枚**。
- REG: **最大207枚**。
- ART/AT/RT付加機能はなく、ボーナスのみで増やすノーマルタイプ。
- ゲーム数天井: **NO_CEILING_FUNCTION_CONFIRMED**。

### resetBehavior v0.7

- ゲーム数天井、規定G解除、AT/ART通常モードを持たないため、`gameCounterReset` / `ceilingAfterReset` / `modeAfterReset` は **NOT_APPLICABLE**。
- `stateAfterReset`: AT/ART高確・CZ等の持続状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更/朝一専用の短縮天井・モード優遇・CZ優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断についても天井G・モード・有利区間は該当なし。
- 一方、本機固有の設定変更時リール初動、初期出目、ガックン、単純電源OFF→ON時の表示/リール挙動は、機種名/型式名/メーカー/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン」を組み替え、公式・業界・当時解析・古いDBを横断したが直接契約を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス終了後の星フラッシュは通常の設定推測要素であり、朝一設定変更判別へは流用しない。

### 品質注記 / CONFLICT

- releaseDate:
  - **2013-04-01** — パイオニア公式更新履歴の実導入開始、K-Navi、パチビー。
  - **2013-03-31予定** — 業界記事の納品開始予定。
  - **2013年3月末予定** — メーカー発売リリース。
  - **2013/3** — 後年5号機DB。
  - **2013年2月稼働開始** — 2013-08ドラス発表転載。公式4/1導入開始と競合するため本線不採用。
  - 本線キーは公式の具体日 **2013-04-01**。平均しない。
- REG最大枚数:
  - **207枚** — メーカー公式/P-WORLD/グリーンべると/K-Navi機種概要で一致。
  - **217枚** — K-Navi内覧会本文1箇所。
  - 本線207枚、217枚は `CONFLICT_SINGLE_EXHIBITION_TEXT`。
- 検定番号は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 2013-04-01同日群

- **アントニオ猪木が伝説にするパチスロ機**（オリンピア） — 登録済み / 724件目。
- **パチスロ「あしたのジョー」2**（タイヨーエレック） — 登録済み / 725件目。
- **スーパーシオ-30**（パイオニア） — **今回登録 / 726件目**。
- **キンバリー-30**（パイオニア） — パイオニア公式更新履歴が2013-04-01にスーパーシオ-30と同時に「導入開始」と明記。当時解析記事も「2013/4/1導入予定」。repo未登録候補として次に処理する。
- 04-01群の全メーカー横断最終監査は未完了のため **OPEN**。

## 次回再開地点

1. **recordCount 726 / chronologicalFrontier 2013-04-01 / 04-01群OPEN** から開始。
2. まず **「キンバリー-30」（パイオニア）** のrepo重複確認→性能コア→resetBehavior v0.7を本調査。
3. パイオニア公式では2013-04-01にスーパーシオ-30とキンバリー-30の双方を「導入開始」と明記しているため、キンバリーを飛ばさない。
4. 追加後、04-01群を閉じる前に当時導入カレンダー、メーカー/業界記事、HAZUSE/K-Navi/P-WORLD系を再横断して同日漏れを最終監査。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### スーパーシオ-30

- パイオニア公式更新履歴（2013-04-01「キンバリー-30」「スーパーシオ-30」導入開始）: `https://www.slot-pioneer.co.jp/news.html`
- パイオニア公式発売リリースPDF（型式スーパーシオA-30、312/207枚、3月末予定）: `https://www.slot-pioneer.co.jp/information/pdf/pioneer_spsio_130215.pdf`
- グリーンべると / P-WORLD業界ニュース（確率端点、機械割端点、34～35G/1000円、312/207枚、3/31納品予定）: `https://news.p-world.co.jp/articles/5729/greenbelt`
- P-WORLD（全設定BIG/REG/合算/機械割、312/207枚、ノーマル仕様）: `https://www.p-world.co.jp/machine/database/7025`
- K-Navi（2013-04-01導入）: `https://p-kn.com/slot/1818/`
- パチビー（2013-04-01導入）: `https://www.pachibee.jp/machines/lecture/213030001`
- K-Navi内覧会（3月末予定、217枚表記CONFLICT）: `https://p-kn.com/topics/exhibition/1057/`
- 5号機クロニクル: `https://5goki.com/pioneer`
- pacnk: `https://pacnk.com/slot/tools/sh_supashio2013.html`
- 当時天井整理記事（天井非搭載）: `https://macerate.seesaa.net/article/353126149.html`
- 4Gamer / ドラス発表転載（2013年2月稼働開始表記CONFLICT）: `https://www.4gamer.net/games/230/G023074/20130824003/`

### 次候補確認 — キンバリー-30

- パイオニア公式更新履歴: `https://www.slot-pioneer.co.jp/news.html`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5729/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7026`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/105/a.php`
