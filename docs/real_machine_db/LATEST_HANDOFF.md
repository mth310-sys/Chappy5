# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直近コミット、既存レコードを再取得して継続。
- `INDEX.md` は19件地点の旧版のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 作業開始時の最新mainは **374件 `デュエルドラゴンキングダム`**。
- 2009-05-26〜31を境界監査。K-Navi 2009年5月全国一斉導入カレンダーでは5月25日が月内最後のパチスロ導入群で、26〜31日に追加の全国一斉導入パチスロを確認できなかった。検索語を日付・納品・導入で変えて業界記事も再確認し、今回安全に追加できる未処理機は確定せず、この境界を閉じた。
- 2009-06-01同日群へ進み、**`天誅` を375として追加**。
- 欠損は最初の検索で確定せず、型式 `天誅V`・メーカー・シリーズ名と、50枚/ベース/コイン持ち、設定変更/据え置き/電源OFF→ON/朝一/RT/ガックン等を多段検索した後のみUNVERIFIEDとした。

## 375. 天誅

record:
- `docs/real_machine_db/machines/2009-06-01_tenchu.md`

要点:
- manufacturer: **ニューギン**
- formalModelName: **天誅V**
- inspectionNumber: **9S0120**
- releaseDate主値: **2009-06-01**（K-Navi全国一斉導入開始）。P-WORLDは2009年06月、別整理資料も2009年6月リリースで整合。
- generation: 5号機
- systemType: **ボーナス+RT / 技術介入 / REG後RT・無限RT昇格型**
- 機械割: **96.0 / 98.7 / 101.7 / 105.2 / 108.4 / 115.2%**。
- BIG合算: **1/409.6 / 1/387.7 / 1/381.0 / 1/350.4 / 1/330.9 / 1/280.0**。
- REG: **1/675.6 / 1/630.2 / 1/550.7 / 1/550.7 / 1/546.1 / 1/585.1**。
- ボーナス合算: **1/255.0 / 1/240.1 / 1/225.2 / 1/214.2 / 1/206.1 / 1/189.4**。
- ボーナス獲得目安: **天誅BIG約404枚 / 決戦BIG約230枚 / REG約50枚**。
- RT純増: **約+0.5枚/G**（P-WORLD）。
- REG後は**50GのRT**へ入り、特殊リプレイを介して「疾風RT」「皆伝RT」へ昇格し、次回ボーナスまで続くRTへ移行可能。
- 50枚ベースは表記・資料系統を変えて再探索したが直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。小役確率から逆算しない。
- 通常時ゲーム数天井は確認できない。**2012年後継機 `天誅～Deadly Blow～` の1400G天井・ART約+1.5枚/Gを混入しない**。
- `coreStatus=PARTIAL_BASE_GAMES_PER_50_UNVERIFIED_OTHER_CORE_RECOVERED`。

### v0.7 resetBehavior — 天誅

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時のREG後RT/無限RT状態処理の直接根拠を回収できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き・宵越し時のRT引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ON/電断時のRT状態を確定できず。
- gameCounterReset / ceilingAfterReset: 通常時ゲーム数天井・ゲーム数管理当選を確認できないため `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- modeAfterReset: 公開された通常時ゲーム数モードを確認できず `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_MODE_CONFIRMED`。
- stateAfterReset: RT状態処理のみ `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: 設定変更専用の短縮天井、朝一RT、当選率優遇/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/朝一ランプ等を再探索したが本機固有の確定手段なし、`UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: 確認できず。
- `resetBehaviorQA=UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_EXCEPT_NON_APPLICABLE_FIELDS`。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- K-Navi 2009年6月導入カレンダー
- P-WORLD `天誅`
- 2009年6月更新のパチスロ5号機まとめwiki
- K-Navi `天誅` 機種ページ
- 後年スペック整理資料（数値別系統照合）

## 直前保存済み事項

### 374 デュエルドラゴンキングダム
- `docs/real_machine_db/machines/2009-05-25_duel-dragon-kingdom.md`
- 2009-05-25。性能コアとv0.7 resetBehaviorまで保存済み。

### 373 がんばれゴエモン
- `docs/real_machine_db/machines/2009-05-25_ganbare-goemon.md`
- 設定変更時ARTストック消滅 / キャラ数1人 / 表示ステージ維持まで回収済み。

### resetBehavior遡及QA
- `ホークIII（25φ）` は補完済み。
- 設定変更後、通常978G天井を待たず朝一から次回ボーナスまで無限RTへ入る公開挙動を当時資料で確認済み。
- 以降はrepo実ファイルの時系列順に、最初のresetBehavior未補完レコードから継続する。

## 次回再開地点

### 本線
1. **375件地点の2009-06-01同日群を継続**。
2. K-Naviで同日導入を確認済みの未処理候補を、既存登録チェック後に処理する:
   - `琉球浪漫`（タイヨー）
   - `Get The Ranker`（アリストクラート）
   - `ニューパルサー3`（山佐）
3. `COBRA THE SLOT`（藤商事）も個別K-Naviページで2009-06-01導入開始を確認済みのため、同日群監査で既存登録有無・他ソースの日付を確認し、漏れなら同日群へ追加する。
4. 同日群内の順序は資料掲載順を絶対視せず、納品/全国導入/発売月など日付定義を分離し、未処理漏れ防止を優先する。
5. 6月1日群を閉じた後はK-Navi上の次群 **2009-06-08 `銀河豪華客船クイーンギャラクシア` / `パチスロ「BON JOVI」`**へ接続する。

### 遡及resetBehavior QA
1. `ホークIII（25φ）` より後をrepo実ファイルの時系列順に走査。
2. 最初の `resetBehavior` 未補完レコードを選び、既存 `coreStatus` を維持してv0.7のみ補完。
3. 新規本線を止めず、既補完機は飛ばす。

## 今回の保存

- 375 天誅: `docs/real_machine_db/machines/2009-06-01_tenchu.md`
- 本 `LATEST_HANDOFF.md` を375件地点へ更新。

次回も作業開始時に必ず最新mainのREADME / ミッション / INDEX / LATEST_HANDOFF / 既存レコード / 直近コミットを再取得し、この引継ぎよりmainが進んでいればGitHub最新mainを優先する。
