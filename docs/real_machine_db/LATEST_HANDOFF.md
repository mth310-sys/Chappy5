# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **764**
- latestMachineAddedByChronology: **パチスロ ボンバーパワフルII**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2013-09-17_bomber-powerful-ii.md`
- chronologicalFrontier: **2013-09-17**
- frontierLatestExactDateMachine: **パチスロ ボンバーパワフルII**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-09-17_GROUP__NEXT_SAME_DAY_MACHINE_AUDIT**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-09-02_pachislot-warausalesman2.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正として扱う。
- 開始時正本は recordCount **763** / chronologicalFrontier **2013-09-02** / 09-02群CLOSED。会話上の759件地点よりmainが4件先行していたため、重複作成せずmain正本へ追従。
- 2013-09-03～09-16境界を導入日・納品日・検定日・業界機材更新日の混同を避けて再監査。具体的なホール導入日付き未登録5号機を固定できず、**CLOSED_FOR_CURRENT_RESEARCH** とした。
- handoff先頭候補 **パチスロ ボンバーパワフルII（SANKYO）** は同名レコード不在を確認後、764件目として新規登録。
- 2013-09-17同日群には少なくとも **デビル メイ クライ 4（エンターライズ）**、**リバティベルV（アクロス）** の具体日付き候補を確認。よって09-17群はまだOPEN。

## 今回追加 — パチスロ ボンバーパワフルII

### identity / 性能コア

- manufacturer: **SANKYO**。
- releaseDate: **2013-09-17**。K-Navi、パチビー、必勝本で一致。SANKYO公式博物館は導入年月2013.09。
- official type/model: **ボンバーパワフルIIＺ**。
- generation/system: **5号機 / ART / 擬似ボーナス / ゲーム数管理・上乗せ**。
- 機械割: **97.8 / 98.9 / 100.7 / 102.9 / 107.0 / 111.0%**。
- 擬似BIG合算: **1/263.9 / 254.6 / 240.2 / 224.4 / 196.6 / 172.6**。
- REG: **1/478.2 / 461.3 / 435.1 / 406.3 / 355.9 / 312.4**。
- ボーナス合成: **1/170.0 / 164.1 / 154.8 / 144.5 / 126.6 / 111.2**。
- 1000円ベース: **約31.0G**。
- ART純増: **約2.4枚/G**。
- BIG前半「ボンバーゲーム」は **ベルナビ5～66回**、後半「パワフルゲーム」は **初期30/50/100G+上乗せ**。
- 最大天井: **1152G**。通常A最大960G、通常B最大1152Gという解析資料あり。
- 通常時モード: **通常A / 通常B / 自力 / 天国 / ボンバー**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL_AND_SPEC_CONFLICT**。

### resetBehavior v0.7

- 必勝本に本機固有の **「天井&設定変更」**、パチマガスロマガ系に **「朝イチ・設定変更」** 専用項目が存在することを確認。
- 当時攻略番組「パチスロ最強伝説G #574」の紹介文にも **設定変更が確認できる有力な情報** を扱う旨が残存。
- ただし、現存取得本文/検索キャッシュから具体的な設定変更契約を安全に回収できなかった。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更/据え置き/電源OFF→ONとも **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 通常最大 **1152G**。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits / resetPenalties: 数値付き専用恩恵・不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 当時資料に変更判別情報の存在は確認できるが、具体条件は **UNVERIFIED_AFTER_RESEARCH**。K-Navi利用者ログの「朝一夢夢ステージ=据え置き否定候補」は単独ユーザーログなので確定値として採用しない。
- publicMorningNumbers: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。

### conflict

- **CONFLICT_OFFICIAL_SPEC_VS_ANALYSIS_VALUES**。
- SANKYO公式博物館はBB **1/274.6～1/179.9**、RB **1/466.4～1/305.1**、合成 **1/172.9～1/113.2** を掲載。
- 一方、必勝本・パチマガスロマガ系・P-WORLD・PACNKはBIG **1/263.9～1/172.6**、REG **1/478.2～1/312.4** の解析系列で整合。
- 定義差の可能性があるため平均せず両系列を保存し、性能比較主系列は解析複数系統一致値を採用。

## 境界監査

### 2013-09-03～09-16

- K-Navi/当時導入一覧/業界記事/メーカー・機材系履歴を再確認。
- 2013-09-09/10付の業界機材会社更新（例: アクエリオン2、なでしこ侍、ボンバーパワフル2）は **カテナチオ対応更新日** であり、ホール導入日とは扱わない。
- 今回の監査では具体的ホール導入日付きの未登録5号機を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。

### 2013-09-17同日群

- **パチスロ ボンバーパワフルII（SANKYO）** — 今回登録。
- **デビル メイ クライ 4（エンターライズ）** — K-Naviで2013-09-17導入を確認、未登録。
- **リバティベルV（アクロス）** — K-Naviで2013-09-17導入を確認、未登録。
- その他の同日候補も次回メーカー横断で再監査。
- **2013-09-17群: OPEN**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線764件目と09-17群開始を優先し、QAカーソルは前進させていない。
- 既存 `COMPLETE_CORE` / `PARTIAL` 等の性能側完了判定は変更していない。

## 次回再開地点

1. **recordCount 764 / chronologicalFrontier 2013-09-17 / 09-17群OPEN** から開始。
2. まず **2013-09-17「デビル メイ クライ 4」（エンターライズ）** の重複確認 → 性能コア + resetBehavior v0.7を収集し、765件目候補として処理。
3. 続いて **リバティベルV（アクロス）** および09-17同日群を全メーカー横断で監査し、CLOSED判定へ進む。
4. 導入日・納品日・検定日・記事公開日・業界機材更新日を引き続き分離して保持。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### パチスロ ボンバーパワフルII

- SANKYO公式博物館: `https://www.sankyo-fever.jp/collection/546/` — 公式同定、導入年月2013.09、型式、公式掲載スペック。
- K-Navi: `https://p-kn.com/slot/1911/` — 導入2013-09-17、擬似ボーナス/ART構造。
- パチビー: `https://www.pachibee.jp/movies/index/9832` — 導入2013-09-17、5号機ART、BR非搭載、約2.4枚/G。
- 必勝本: `https://p.hisshobon.jp/machine/2265/1/41459` — 導入日、BIG/REG/合成、機械割、「天井&設定変更」項目。
- パチマガスロマガ系性能表: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/h.php` — BIG/REG/合成/PAYOUT。
- パチマガスロマガ系小役: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/c.php` — 1000円約31.0G。
- パチマガスロマガ系ART: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/l.php` — 最大1152G、約2.4枚/G。
- パチマガスロマガ系インデックス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/32/sankyo_slot_32.php` — モード/天井/朝一設定変更の専用項目存在。
- P-WORLD: `https://www.p-world.co.jp/machine/database/7154` — ART構造、純増、解析BIG/REG値を照合。
- PACNK: `https://pacnk.com/slot/2013/bomberpowerful2/top.php` — 機械割、5モード、通常A最大960G/通常B最大1152G。
- ビデオマーケット「最強伝説G #574」: `https://www.videomarket.jp/title/082220/A082220042999H01` — 設定変更判別情報を当時番組が扱ったことのメタデータ。

### 次候補

- K-Navi「デビル メイ クライ 4」: `https://p-kn.com/slot/1914/` — ホール導入開始2013-09-17。
- K-Navi「リバティベルV」: `https://p-kn.com/slot/1909/` — ホール導入開始2013-09-17。

## commits

- 764th record add: `be5b5180903756a9166300571c37643f23a392dd` (`db: add Bomber Powerful II with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay to Bomber Powerful II and open 2013-09-17 group`)
