# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は198件目 `華一番-30`。
- 2007-11-12群の境界を確認後、パチビーの2007-11-19導入一覧にある `スーパービンゴV / 超お父さん2` を次群として確認。
- main内検索で `スーパービンゴV` の既存レコードがないことを再確認し、**199件目 `スーパービンゴV` を追加済み。**

## 199. スーパービンゴV

- new record: `docs/real_machine_db/machines/2007-11-19_super-bingo-v.md`
- commit: `ce01e582f55f31c34377fa198586224400db5553`
- manufacturer: ベルコ
- releaseDate: 2007-11-19
- generation: 5号機
- systemType: ボーナス + ART / CZ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・系統

- ベルコ公式: `スーパービンゴV`、2007年11月登場、5号機・ART。
- 当時グリーンべると: 2007-10-10発表、2007-11-18納品開始。
- パチビー: 2007-11-19ホール導入。
- releaseDateはホール導入日基準の2007-11-19を採用。納品開始日との差は定義差として保持。

### 性能コア

- BIG合算: 設定1 `1/315.08` → 設定6 `1/277.69`。
- スーパーBIG: 設定1〜4 `1/4096`、設定5 `1/3276`、設定6 `1/2730`。
- ノーマルBIG: 設定1 `1/341.33` → 設定6 `1/309.13`。
- 機械割: 旧攻略/5号機クロニクル `96.5 / 99.0 / 101.0 / 103.0 / 105.0 / 108.0%`。
- PACNKは設定1のみ `96.0%`、設定2〜6は一致。設定1は平均せず `CONFLICT`。
- スーパーBIG: 約312枚、ノーマルBIG: 約120枚。
- ART純増: 約+1.6枚/G。
- ART `ビンゴチャンス`: 77G、80%ループ。
- `スーパービンゴチャンス`: 最大5000G。
- 通常状態900G消化で救済CZ `ビンゴゲーム` へ突入する天井を確認。
- 50枚ベースは `50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` と表記を変え、公式・業界・パチマガスロマガ・旧攻略DB・後年DBまで横断したが確定できず `UNVERIFIED`。

### v0.7 resetBehavior

`スーパービンゴV / SUPER BINGO V / ベルコ / ビンゴゲーム / SBC / BC` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 宵越し / 天井 / 900G / 天井短縮 / モード / 状態 / ガックン` を組み替えて再探索。

- settingChangeBehavior: 設定変更時の900G天井カウンタ、CZ/ART状態処理 `UNVERIFIED`。
- carryOverBehavior: 据え置き時の900G天井ゲーム数/CZ/ART状態の引継ぎ `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の900G天井ゲーム数/CZ/ART状態 `UNVERIFIED`。
- gameCounterReset: 通常状態900G天井そのものは `CONFIRMED`。変更/据え置き/電断時処理は `UNVERIFIED`。
- ceilingAfterReset: 設定変更専用短縮天井 / 朝一専用天井 `NONE_CONFIRMED`。通常天井900G。
- modeAfterReset: 朝一/設定変更専用モード `NONE_CONFIRMED`。
- stateAfterReset: CZ/ART内部状態の変更/据え置き/電断処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/表示等の変更判別 `UNVERIFIED`。
- numericResetData: 通常時天井900Gは確認。設定変更専用天井G、朝一当選率、変更時モード振り分け、リセット恩恵発生率は `NONE_CONFIRMED`。

主要出典:
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/superbingo_v/
- グリーンべると: https://web-greenbelt.jp/00004349/
- パチビー: https://www.pachibee.jp/machines/schedule/2007-11
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/80/a.php
- PACNK: https://pacnk.com/slot/tools/sh_bing.html
- 旧解析: https://crankyseven.com/superbingo-pc.htm
- 5号機クロニクル: https://5goki.com/bellco

## 直前の既存群

- 196件目 `NEO花物語`
- 197件目 `華一番`（25φ）
- 198件目 `華一番-30`（30φ）
- 25φ/30φはパイオニア公式で別機種掲載され、当時解析で共通スペック扱いを確認したうえで独立レコード化済み。

## resetBehavior 遡及QA

### 電撃フランケン（2006-07-24）

- 既存性能コア判定を崩さずv0.7 `resetBehavior` 追加済み。
- resetBehaviorQA: `PARTIAL`
- QA commit: `52efe06e28ac69d71c33207e4f0c74ddc326e892`
- BIG後RT `GHOST GAME` 150G、通常時ゲーム数天井非搭載を確認済み。
- 設定変更/据え置き/電断時のRT状態と本機固有変更判別は `UNVERIFIED`。

## 次回再開地点

1. **LATEST_HANDOFF基準199件地点から継続。**
2. 2007-11-19同日群の次は `超お父さん2`。mainに別命名既存レコードがないか検索/ディレクトリで再確認してから登録する。
3. その後は2007-11-20 `哲也～雀聖と呼ばれた男～`、2007-11-26 `赤ドン` / `ファイアーヒーローS` を時系列で処理する。
4. 2007年11月の月次監査候補として `パチってスロット / パチスロシティーハンター / ビーチクラブ` も存在するため、具体導入日・既存有無を確認して日付順の漏れを防ぐ。
5. `スーパービンゴV` は50枚ベース、設定変更/据え置き/電源OFF→ON時の900G天井カウンタ/CZ/ART引継ぎ、本機固有変更判別が追加QA対象。
6. `NEO花物語` は50枚ベースと設定別性能の第二ソース照合、resetBehavior直接資料が追加QA対象。
7. resetBehavior遡及QAは `電撃フランケン` より後の既存レコードを時系列走査し、`resetBehavior`節未収集の最古機から継続する。
8. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
