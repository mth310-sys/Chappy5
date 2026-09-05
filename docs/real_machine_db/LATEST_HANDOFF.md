# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **727**
- latestMachineAdded: **キンバリー-30**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2013-04-01_kimberly-30.md`
- chronologicalFrontier: **2013-04-01**
- frontierLatestExactDateMachine: **キンバリー-30**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-04-01_GROUP__NEXT_2013-04-08_JUGGLER_GIRLS**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-04-01_super-shio-30.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **726** / chronologicalFrontier **2013-04-01** / 04-01群OPEN / NEXT_KIMBERLY_30。
- GitHub code searchで `キンバリー-30` の既存レコードがないことを確認後、性能コアとresetBehavior v0.7を同時収集し **727件目**として追加。

## 今回追加 — キンバリー-30

### identity / 性能コア

- releaseDate: **2013-04-01**。パイオニア公式更新履歴が同日「キンバリー-30」「スーパーシオ-30」導入開始と明記。
- パイオニア公式2013年製品一覧は2013年3月発売、グリーンべるとは3/31納品開始予定、K-Naviは3月末予定、必勝本内覧会記事は3月中旬予定のため、予定/発売月と実導入開始日を分離。
- manufacturer: **パイオニア**。
- formalModelName: **キンバリーA-30**（P-WORLD）。
- inspectionNumber: **2S0608**（P-WORLD）。
- systemType: **5号機 / ノーマルAタイプ / 完全告知 / 30φ沖スロ**。
- 機械割: **96.5 / 98.0 / 99.5 / 102.5 / 104.5 / 108.0%**。
- BIG: **1/297 / 284 / 273 / 262 / 252 / 242**。
- REG: **1/595 / 569 / 546 / 524 / 504 / 485**。
- 合算: **1/198 / 189 / 182 / 174 / 168 / 161**。
- 50枚ベース: **約36.5～37.5G/1000円**（2013-03-01グリーンべると）。
- BIG: **約312枚**。
- REG: **約130枚**。
- ART/AT/RT付加機能はなく、ボーナスのみで増やすノーマルタイプ。
- ゲーム数天井: **NO_CEILING_FUNCTION_CONFIRMED**。

### resetBehavior v0.7

- ゲーム数天井、規定G解除、AT/ART通常モードを持たないため、`gameCounterReset` / `ceilingAfterReset` / `modeAfterReset` は **NOT_APPLICABLE**。
- `stateAfterReset`: AT/ART高確・CZ等の持続状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更/朝一専用の短縮天井・モード優遇・CZ優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断についても天井G・モード・有利区間は該当なし。
- 本機固有の設定変更時リール初動、初期出目、BET/投入枚数表示、ガックン、単純電源OFF→ON時の表示/リール挙動は、機種名/型式名/メーカー/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・投入枚数」を組み替え、公式・業界・当時解析・古いDBを横断したが直接契約を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- パチマガスロマガの現存インデックスには本機の「朝イチ・設定変更」メニューが確認できるが、本文の具体契約を安全に取得できなかったため、メニュー名だけから挙動を推定していない。
- 2013年当時攻略記事には「ハナハナみたいにコインの投入枚数で設定変更がわかるのかな!?」という推測文があるのみで、確定解析としては不採用。
- トビウオランプの色は通常の設定推測要素であり、朝一設定変更判別へ流用しない。

### 品質注記 / CONFLICT

- releaseDate:
  - **2013-04-01** — パイオニア公式更新履歴の実導入開始。本線キー。
  - **2013年3月発売** — パイオニア公式年代別製品一覧。
  - **2013-03-31予定** — グリーンべると/P-WORLD業界ニュースの納品開始予定。
  - **2013年3月末予定** — K-Navi内覧会。
  - **2013年3月中旬予定** — 必勝本内覧会。
  - **2013/3** — 5号機クロニクル。
  - 予定/発売月と実導入を平均せず、本線は公式の具体日 **2013-04-01**。

## 2013-04-01同日群 — CLOSED

- **アントニオ猪木が伝説にするパチスロ機**（オリンピア） — 登録済み / 724件目。
- **パチスロ「あしたのジョー」2**（タイヨーエレック） — 登録済み / 725件目。
- **スーパーシオ-30**（パイオニア） — 登録済み / 726件目。
- **キンバリー-30**（パイオニア） — **今回登録 / 727件目**。
- 当時導入日検索、K-Navi/P-WORLD/HAZUSE系、メーカー/業界記事を横断して04-01具体日を再監査。今回の調査範囲で追加の未登録5号機を確認できず、**04-01群をCLOSED_FOR_CURRENT_RESEARCH** とする。

## 次回再開地点

1. **recordCount 727 / chronologicalFrontier 2013-04-01 / 04-01群CLOSED** から開始。
2. 04-02～04-07境界を短く再監査し、漏れがなければ次の具体導入日 **2013-04-08** へ進む。
3. 先行確認済みの次候補は **「ジャグラーガールズ」（北電子）**。K-Naviがホール導入開始 **2013-04-08** を明記し、設定別BIG/REG/合算/機械割も掲載している。
4. 「ジャグラーガールズ」repo重複確認→性能コア→resetBehavior v0.7を本調査。その後04-08同日群をメーカー/導入カレンダー横断で監査してから次日へ進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/投入枚数/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### キンバリー-30

- パイオニア公式更新履歴（2013-04-01「キンバリー-30」「スーパーシオ-30」導入開始）: `https://www.slot-pioneer.co.jp/news.html`
- パイオニア公式2013年製品一覧（2013年3月発売）: `https://www.slot-pioneer.co.jp/products/2013.html`
- パイオニア公式製品ページ: `https://www.slot-pioneer.co.jp/product/kingbary/`
- グリーンべると / P-WORLD業界ニュース（確率端点、機械割端点、36.5～37.5G/1000円、312/130枚、3/31納品予定）: `https://news.p-world.co.jp/articles/5729/greenbelt`
- P-WORLD（全設定BIG/REG/合算/機械割、312/130枚、型式キンバリーA-30、検定2S0608）: `https://www.p-world.co.jp/machine/database/7026`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/105/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/105/h.php`
- パチマガスロマガ 機種トップ（「朝イチ・設定変更」メニュー存在）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/105/pioneer_slot_105.php`
- K-Navi内覧会: `https://p-kn.com/topics/exhibition/1057/`
- パチ＆スロ必勝本 内覧会: `https://p.hisshobon.jp/news/375`
- 5号機クロニクル: `https://5goki.com/pioneer`
- 当時天井/スペック記事: `https://macerate.seesaa.net/article/353126235.html`

### 次候補確認 — ジャグラーガールズ

- K-Navi（2013-04-08導入、全設定BIG/REG/合算/機械割）: `https://p-kn.com/slot/1809/`
