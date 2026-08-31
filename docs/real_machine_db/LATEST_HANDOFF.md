# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準138件。**
- 137件目 `ラブリーチェリー` の次、2007-07-09境界候補を再監査し、`電撃ネットワーク` を138件目として登録。
- `電撃ネットワーク` の具体導入日は資料競合が残るが、P-WORLD・複数整理資料が2007年7月で一致するため月粒度 `2007-07` を本線採用。具体日は平均せずCONFLICT保持。

## 今回新規追加

### 電撃ネットワーク（トリビー）

- `docs/real_machine_db/machines/2007-07_dengeki-network.md`
- systemType: ボーナス + CZ + RT
- coreStatus: `PARTIAL`
- qaResetBehavior: `PARTIAL`

### 導入時期

- P-WORLD: 導入開始 `2007年07月`。
- 5号機クロニクル/後年整理: 2007年導入機として掲載。
- 直前handoffで確認済みの当時K-Navi系発表会記事要約: `2007年7月9日以降ホールデビュー予定`。
- 後年GABU一覧: `2007/06/05` 表記。
- 発表/検定/発売/納品/導入の定義差を確定できないため具体日は `CONFLICT`。本DBの時系列本線は月粒度 `2007-07`。

### 性能コア

後年整理資料の設定別値:

| 設定 | 機械割 | BIG合算 | ボーナスゲーム | 全ボーナス合算 |
|---|---:|---:|---:|---:|
| 1 | 95.5% | 1/341 | 1/655 | 1/224 |
| 2 | 97.2% | 1/334 | 1/595 | 1/214 |
| 3 | 99.8% | 1/322 | 1/512 | 1/198 |
| 4 | 104.1% | 1/307 | 1/458 | 1/184 |
| 5 | 107.0% | 1/299 | 1/390 | 1/169 |
| 6 | 111.1% | 1/280 | 1/352 | 1/156 |

- 設定別テーブルは今回別系統の現存資料で完全照合できず `ANALYSIS_SINGLE`。
- P-WORLDとパチマガスロマガ旧ページで規定払い出しは一致:
  - BIG: 345枚超払い出しで終了
  - ボーナスゲーム/REG相当: 120枚超払い出しで終了
- パチマガ旧ページは `同時成立あり / チャンスゾーン / RT` とRT `電撃タイム` の連チャン性を確認。
- 50枚ベース、RT純増/G、RT1セットG数、CZ→RT比較用公開値は表記・検索語・資料系統を変えて再探索後も高信頼確定できずUNVERIFIED。

## v0.7 resetBehavior — 電撃ネットワーク

- `電撃ネットワーク / トリビー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電撃チャンス / 電撃タイム / RT / 天井 / ガックン` を組み替え、P-WORLD、旧パチマガ、古いDB、後年整理、掲示板系を再探索。
- settingChangeBehavior: CZ/RT内部状態処理はUNVERIFIED。
- carryOverBehavior: 据え置き時CZ/RT状態・残G引継ぎはUNVERIFIED。
- powerCycleBehavior: 電源OFF→ONのみのCZ/RT状態・残G処理はUNVERIFIED。
- gameCounterReset: 通常時ボーナス天井はNONE_CONFIRMED。RT/CZ関連カウンタの変更時処理はUNVERIFIED。
- ceilingAfterReset: 短縮天井/朝一専用天井はNONE_CONFIRMED。
- modeAfterReset: 朝一専用モード/変更専用モードはNONE_CONFIRMED。
- stateAfterReset: CZ/RT内部状態の再抽選/初期化/引継ぎはUNVERIFIED。
- advantageousSectionReset: NOT_APPLICABLE。
- resetBenefits / resetPenalties: 設定変更固有の恩恵/不利はNONE_CONFIRMED。
- resetDetection: 本機固有ガックン・表示・CZ挙動による変更判別はUNVERIFIED。
- numericResetData: 朝一RT突入率、設定変更時CZ移行率、短縮G数等はUNVERIFIED。

## 今回の主要出典

### 電撃ネットワーク
- P-WORLD: https://www.p-world.co.jp/machine/database/4752
- パチマガスロマガ旧 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/04/a.php
- pachinko's blog 後年整理: https://pachinko.hatenablog.jp/entry/2007/07/dengeki-network
- 5号機クロニクル トリビー一覧: https://5goki.com/trivy

取得日: 2026-08-31

## 今回GitHub反映

- 電撃ネットワーク新規追加: `0323018a9a9f74d90bbee262b37b5bd5938923da`

## resetBehavior遡及QA

- 前handoffの候補 `サンダーバードNEO-XX` は今回GitHubコード検索がタイムアウトし、既存レコード特定まで完了できなかったため新規収集を優先。
- 次リレーで既存レコードを再検索し、未補完なら1機以上v0.7遡及QAする。既補完なら次の未対応最古へ進む。

## 次回再開地点

1. **`新世紀エヴァンゲリオン～まごころを、君に～` を次の未処理候補として、具体的な実納品/ホール導入日を当時業界記事・旧DB・メーカー資料で再監査し、性能コア + v0.7 resetBehaviorを登録する。**
2. メーカー公式では `2007.07`、50G RT `レイチャンス` と次回ボーナスまでの `暴走モード` を確認済み。
3. 具体導入日は月粒度資料だけで決めず、納品開始日/ホール導入日を探す。見つからない場合は十分再探索後に月粒度で保持。
4. その後は2007年7月中旬の未処理機を導入順に監査し、`ラーメン王` は前handoffどおり2007-07-29納品開始候補として保留。
5. 発表日・検定日・発売月・納品開始日・ホール導入日を分離し、競合は平均せずCONFLICT。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と項目別検索語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を横断する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの138件地点を正**として継続する。
