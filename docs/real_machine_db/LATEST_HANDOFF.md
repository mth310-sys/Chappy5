# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **289 `ザ・ブルーハーツ`（銀座 / 2008-08-18）**。
- 今回、同日未処理候補 **290 `マジシャンEX`（ファースト）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。既存性能値は再調査していない。

## 290. マジシャンEX

- record: `docs/real_machine_db/machines/2008-08-18_magician-ex.md`
- manufacturer: ファースト
- generation: 5号機
- systemType: ノーマル / 完全告知
- releaseDate: **2008-08-18**。旧業界追跡資料の発売日と、2008-08-04時点業界ニュースの「8月17日納品予定」を定義差として保持。
- 設定1〜6 BIG: **1/299.25 → 1/268.59**。
- 設定1〜6 REG: **1/412.18 → 1/268.59**。
- ボーナス合算: **1/173.38 → 1/134.30**。
- シミュレート機械割: **96.00 → 106.06%**。
- 50枚ベース: **35.44 → 36.88G**。
- BIG約312枚、REG約104枚。
- RT/ART/AT/CZ、通常ゲーム数天井は確認されず、性能コアは `COMPLETE_CORE`。
- 正式型式名は現存一次資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。旧資料の「マジシャン」「マジシャンEX」を混同せず同一発売機の表記関係として注記。

### resetBehavior（290）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 本機固有の設定変更時初期化を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 本機固有の据え置き処理を直接確定できず。ただし通常ゲーム数天井/RT/ART/CZは確認されないため、主要な宵越し天井利益は確認なし。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの本機固有挙動を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_TO_CEILING`。
- `ceilingAfterReset`: `NOT_APPLICABLE`。
- `modeAfterReset`: `NOT_APPLICABLE_TO_GAMEPLAY_MODE` — 朝一専用モード等は確認できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — 「マジシャンEX / マジシャン / THE MAGICIAN / ファースト」と設定変更・リセット・朝一・据え置き・電源OFF ON・天井・ガックン・初期出目を組み替え、当時解析/旧業界追跡/後年DBを横断したが、本機固有の変更判別条件を確定できず。
- `numericResetData`: 短縮天井・朝一専用当選率・モード振り分け等の公開値は確認なし。

## 今回の主要出典

取得日: 2026-09-02

- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/a.php
  - パチマガスロマガ。ファースト製、ノーマル/完全告知、BIG345枚超（約312枚）・REG119枚超（約104枚）払い出し終了。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/h.php
  - パチマガスロマガ。設定1〜6のBIG/REG/合算、シミュレート機械割96.00〜106.06%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/04/c.php
  - パチマガスロマガ。50枚あたり35.44〜36.88G。
- https://slothistory.com/kousin_kako05.html
  - 旧業界追跡資料。「マジシャン」が発売確定機種「マジシャンEX」として扱われた記録、2008-08-18発売追跡。
- https://p-mans.blogspot.com/2008/08/
  - 2008年当時業界ニュースミラー。2008-08-04時点で「8月17日に納品予定の新機種マジシャン」の製造・販売継続方針を記録。
- https://jugjug.net/juggler-hommage
  - 後年DB。2008年8月導入、ファースト製、設定別BIG/REG/合算値を照合。
- https://pachimaga.com/free/playback/1708a7b6a5f5afe16e1d0f39a3e1bb2682dfef86.php
  - 5号機ヒストリア2008年後編。2008年夏登場機としてマジシャンEXを確認。

## 次候補の先行監査

- **`ロットエイトR`（イープレイ）**は旧業界追跡資料で **2008-08-25発売**、前作ロットセブンの後継、**ボーナス成立まで継続する無限RT搭載**との記録を確認。
- 検定通過履歴の後年整理では **2008-05-15 `ロットエイト R`** が確認できる。ただし検定日を導入日として使用しない。
- 今回の初期検索では性能コアの設定別機械割/BIG/REG/50枚ベース/RT純増とresetBehavior直接値を十分確定できていないため、最初の検索だけでPARTIAL登録せず次回へ引き継ぐ。

## 境界監査・重複防止

- **既存290件の再追加禁止。**
- `メガラニカDX` は2008-08-18検定通過痕跡まで。実販売/ホール導入裏付け未確定のため `INSPECTION_ONLY_CANDIDATE_NOT_MAINLINE` を維持。
- `ザ・ブルーハーツG` は旧追跡資料で8/18予定から9月へ変更との記録。9月境界で通常版と分離して再確認。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。
- 情報提供端子板対応日・検定通過日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準290件地点。具体日付き本線は2008-08-18同日群まで進行。**
2. 次は **`ロットエイトR（イープレイ）` 2008-08-25発売候補**。`ロットエイト R / LOT EIGHT R / イープレイ / ロットセブン後継` の表記を使い、設定別機械割・BIG/REG・50枚ベース・無限RTの純増/突入条件を再探索する。
3. resetBehaviorは設定変更/据え置き/電源OFF→ON/RT状態/ゲーム数・天井/朝一/ガックンを重点確認する。無限RT中の変更・電断処理を一般論で補間しない。
4. その後2008年8月下旬〜9月初旬を業界記事、P-WORLD、メーカー公式、旧解析DB、業界アーカイブで再監査し、最古未処理から続行。
