# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **595**
- latestMachineAdded: **ぱちすろ黄門ちゃま 光れ!正義の印籠編!**（オリンピア / releaseDate key 2011-07-31）
- latestRecord: `docs/real_machine_db/machines/2011-07-31_pachislot-koumonchama-hikare-seigi-no-inrouhen.md`
- chronologicalFrontier: **2011-07-31**
- frontierLatestExactDateMachine: **ぱちすろ黄門ちゃま 光れ!正義の印籠編!**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — ぱちすろ黄門ちゃま 光れ!正義の印籠編!

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「GRADIUS THE SLOT」を再取得して開始。
- 開始時main正本は recordCount 594 / chronologicalFrontier 2011-07-22。
- INDEXは古いためREADME規定どおりLATEST_HANDOFFとmain実レコードを優先。
- 2011-07-22同日群および07-23〜07-30境界を外部導入カレンダー/当時業界記事で再監査。GRADIUSの07-24納品/07-25導入は同一機の定義差として重複追加しない。
- repo内「黄門ちゃま」重複検索後、次の具体日付き未登録5号機として595件目を追加。

### 導入日 / 型式

- グリーンべると/P-WORLD業界ニュース: **2011-07-31から納品開始予定**。
- パチビー: **2011-08-01導入日**。
- 平均化せず `DATE_DEFINITION_DIFFERENCE` として分離。時系列キーは現存する最古の具体的市場投入日2011-07-31を採用。
- 当時業界記事の型式表記: **ぱちすろ黄門ちゃまA**。

### 性能コア

- 5号機 A+ART / CZ（ぱちんこゾーン）/ ストック+ループART。
- 機械割: **97.7 / 98.8 / 101.3 / 104.7 / 108.5 / 112.2%**。
- BIG: **1/387.8 / 387.8 / 356.2 / 350.5 / 318.1 / 310.6**。
- REG: **1/412.2 / 412.2 / 402.1 / 381.0 / 376.6 / 339.6**。
- ボーナス合算: **1/199.8 / 199.8 / 188.9 / 182.6 / 172.5 / 162.2**。
- ART初当たり: **1/345.7 / 292.6 / 325.1 / 242.0 / 271.7 / 195.7**。
- 1000円あたりゲーム数: **36.73 / 36.75 / 36.79 / 36.83 / 36.87 / 36.92G**。
- 天下泰平BONUS/BIG約 **204枚**、REG約 **48枚**。
- ART「黄門ちゃんす」: **1セット30G / 約+1.2枚/G**。
- P-WORLD、パチビー、パチマガスロマガ、pacnk、グリーンべるとで主要値を複数照合。

### 天井 / resetBehavior v0.7

- 通常天井: **ボーナス間1280G**。潜伏を経てARTへ。
- 天井恩恵: **ART5ストック + 継続率MAX82%**。
- pacnk当時機種ページに **「天井は設定変更でリセットされる」**との直接記述を回収。
- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。少なくとも1280G天井進捗CLEARを確定。ARTストック/ループモード/ぱちんこゾーン状態の処理はUNVERIFIED_AFTER_RESEARCH。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: 通常1280G。設定変更後専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の保持を一般則で推測しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **CEILING_PROGRESS_LOSS_CONFIRMED_IF_SETTING_CHANGED**。前日ハマリがあれば変更で消える。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ステージ等の本機固有根拠を確定できず。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 資料QA

- 後年の一部回顧DBに、本機欄へ後年「黄門ちゃま喝」系の仕様（純増2.0枚/G、印籠RUSH等）が混入した記述を確認。
- 当時グリーンべると、P-WORLD、パチビー、パチマガ、pacnkの一致系列と矛盾するため採用せず、資料混同として切り離した。

## 主要出典 — ぱちすろ黄門ちゃま 光れ!正義の印籠編!（取得日 2026-09-04）

- オリンピア 2011年発売機種: `https://www.olympia.co.jp/official/products/2011.html`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4742/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6406`
- パチビー: `https://www.pachibee.jp/machines/index/211060008`
- パチマガスロマガ TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/40/heiwa_slot_40.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/40/c.php`
- pacnk: `https://pacnk.com/slot/2011/koumon3/top.php`

## 遡及QA継続地点

- **美川〜さそり座のサラリーマン〜 (`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`) までresetBehavior v0.7補完済み**。
- `docs/real_machine_db/machines/2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みなので重複更新せずスキップする。
- その後は recursive tree / contentsの実パス順に進み、Thunder V SPECIALの次に存在する最初のresetBehavior欠損レコードを直接fetchして確定してから遡及QA再開。code search未ヒットだけでQA前線を動かさない。

## 本線の次回再開地点

1. **recordCount 595 / chronologicalFrontier 2011-07-31**から開始。
2. **2011-07-31同日群〜2011-08-01境界**を最優先監査。本機の08-01導入表記は重複追加しない。
3. 次の強い具体日付き未登録候補はロデオ **「旋風の用心棒～胡蝶の記憶～」**。K-Navi/HAZUSEとも **2011-08-01導入開始**、HAZUSE型式「旋風の用心棒 胡蝶の記憶R」/検定番号1S0382を確認済み。repo重複を再確認して未登録なら596件目の最優先候補とする。
4. 08-01同日群には他機種が存在する可能性があるため、旋風だけで日付群を閉じず、P-WORLD月間カレンダー/K-Navi/HAZUSE/当時業界記事を照合する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。
