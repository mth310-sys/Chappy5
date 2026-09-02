# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 作業開始時は372件 `緑ドン` だったが、作業中にmainが373件 `がんばれゴエモン` まで進んだため、競合上書き・重複登録を避けて最新mainを優先した。
- 373 `がんばれゴエモン` と `ホークIII（25φ）` resetBehavior QA は直前mainで保存済み。
- 今回は2009-05-25同日群の未処理 `デュエルドラゴンキングダム` を **374として追加**。
- 新規性能コアとresetBehavior QAは分離管理し、最初の検索だけでUNVERIFIED/PARTIALにせず、多段検索後も直接根拠が回収できない項目だけを欠損として残す方針を維持。

## 374. デュエルドラゴンキングダム

record:
- `docs/real_machine_db/machines/2009-05-25_duel-dragon-kingdom.md`

要点:
- manufacturer: エレコ
- formalModelName: **デュエルドラゴンキングダムF1**
- inspectionNumber: **8S1252**
- releaseDate主値: **2009-05-25**（K-Navi全国一斉導入開始）。ユニバーサル公式は2009年5月発売。旧DBの2009-03-30はテスト導入として分離。
- generation: 5号機
- systemType: **ボーナス+ART / A+ART / ボーナス後CZ**
- 青7BIG: **1/1285.02 / 1/1285.02 / 1/1285.02 / 1/1260.31 / 1/1260.31 / 1/1260.31**。
- 赤7BIG: **1/704.69 / 1/689.85 / 1/675.63 / 1/668.73 / 1/655.36 / 1/642.51**。
- BIG合成: **1/455.11 / 1/448.88 / 1/442.81 / 1/436.91 / 1/431.16 / 1/425.56**。
- REG: **1/789.59 / 1/780.19 / 1/762.05 / 1/753.29 / 1/736.36 / 1/728.18**。
- ボーナス合成: **1/288.70 / 1/284.94 / 1/280.07 / 1/276.52 / 1/271.93 / 1/268.59**。
- 50枚ベース: **35.51 / 35.53 / 35.70 / 35.87 / 36.05 / 36.22G**（パチマガ旧解析）。
- ART: **約+1.0枚/G**。公式とP-WORLDで照合。
- 獲得目安: 青7BIG約351枚 / 赤7BIG約252枚 / REG約108枚（P-WORLD）。公式も350枚超ボーナスを明記。
- 5号機クロニクルのBIG約204枚/REG約48枚とは大きく競合するため、平均せず `CONFLICT` として分離。
- 機械割は設定6 **119.8%** を当時旧DBと別系統ランキングで照合。設定1〜5はパチマガPAYOUT欄が「現在調査中」で、表記揺れ・型式・メーカー・旧DBを横断しても直接系列を確定できなかったため `UNVERIFIED_AFTER_RESEARCH`。推定補間しない。
- 全ボーナス後CZ→30G完走でART。ナビポイント最大200（P-WORLD換算約1800G相当）を確認。ボーナス成立だけではナビポイントはリセットされない。
- P-WORLDは「天井」搭載分類だが、現存本文から具体到達G数・発動条件を回収できず、閾値は推測しない。
- `coreStatus=PARTIAL_WITH_CORE_PROBABILITIES_BASE_ART_RECOVERED_PAYOUT_RATE_1_TO_5_UNVERIFIED`。

### v0.7 resetBehavior — デュエルドラゴンキングダム

- パチマガ旧解析INDEXに **「攻め時・ヤメ時・設定変更時」専用項目の存在**までは確認したが、現存本文を直接回収できない。
- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。ナビポイント/CZ/ART/天井進捗の設定変更時処理を推測しない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き/宵越し/ナビポイント/天井で再探索済み。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ON/電断/朝一を型式名まで含め再探索済み。
- gameCounterReset / ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`。天井搭載分類はあるが、通常天井閾値と変更時カウンタ処理を確定できない。
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: 設定変更固有の直接情報なし。ナビポイント消滅等は断定しない。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/リールガックン/初期出目/設定変更判別/朝一まで再探索したが、本機固有の確定的判別手段なし。
- 公開朝一数値: 設定変更専用短縮天井、朝一ART当選率、恩恵率を確認できず。
- `resetBehaviorQA=UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_EXCEPT_ADVANTAGEOUS_SECTION_NA`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- ユニバーサル公式機種ページ
- K-Navi 2009年5月導入カレンダー
- P-WORLD
- パチマガスロマガ旧解析（確率 / 50枚ベース / 解析INDEX）
- パチスロ業界初まとめ旧DB
- ART機最高設定機械割ランキング回顧資料
- 5号機クロニクル（競合値確認用）

## 直前保存済み事項

### 373 がんばれゴエモン
- `docs/real_machine_db/machines/2009-05-25_ganbare-goemon.md`
- 2009-05-25。設定変更時ARTストック消滅 / キャラ数1人 / 表示ステージ維持まで回収済み。

### resetBehavior遡及QA
- `ホークIII（25φ）` は補完済み。
- 設定変更後、通常978G天井を待たず朝一から次回ボーナスまで無限RTへ入る公開挙動を当時資料で確認済み。
- 以降はrepo実ファイルの時系列順に、最初のresetBehavior未補完レコードから継続する。

## 次回再開地点

### 本線
1. **374件地点から2009-05-26〜31を境界監査**。メーカー名・型式名・シリーズ名・当時導入カレンダー/業界記事/旧DBを横断し、5月25日群の取りこぼしも同時に再確認。
2. `レキオ2-30` / `緑ドン` / `がんばれゴエモン` / `デュエルドラゴンキングダム` は既収録のため重複禁止。
3. 5月26〜31に未処理機がなければ **2009-06-01同日群**へ進む。
4. 6月1日候補としてK-Navi導入カレンダーで **`天誅` / `琉球浪漫` / `Get The Ranker` / `ニューパルサー3`** を確認済み。個別機種ページでは **`COBRA THE SLOT`** も2009-06-01候補のため、同日群監査時に既存登録有無・具体日を再確認して時系列順に処理する。
5. 月単位候補や導入日競合は具体日を無理に作らず、テスト導入/納品/全国導入/稼働開始など定義差を分離する。

### 遡及resetBehavior QA
1. **ホークIII（25φ）より後**をrepo実ファイルの時系列順に走査。
2. 最初の `resetBehavior` 未補完レコードを選び、性能 `coreStatus` を維持したままv0.7のみ補完。
3. 既にv0.7補完済みの機種は飛ばし、新規本線を止めない。

## 今回の保存

- 374 デュエルドラゴンキングダム: `docs/real_machine_db/machines/2009-05-25_duel-dragon-kingdom.md`
- 本 `LATEST_HANDOFF.md` を374件地点へ更新。

次回も作業開始時に必ず最新mainのREADME / ミッション / INDEX / LATEST_HANDOFF / 対象既存レコードを再取得し、この引継ぎよりmainが進んでいればGitHub最新mainを優先する。
