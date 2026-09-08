machineName: A-SLOT 北斗の拳 将
manufacturer: サミー
releaseDate: 2016-07-04
recordNumber: 992
generation: 5号機 / 5.5号機期
systemType: ノーマル / A+RT / 技術介入 / 4段階設定（1・2・5・6）
formalModelName: A-SLOT北斗の拳 強敵/ZS
certificationNumber: 6S0341
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式マイスロ告知が2016-07-04を「本日ホール導入日」と明記。地域差注記あり。
- HAZUSEは導入開始日2016-07-04、型式 `A-SLOT北斗の拳 強敵/ZS`、検定番号 `6S0341` を掲載。
- 設定は1・2・5・6の4段階。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
### 市場掲載 / 通常攻略値
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.9% |
| 5 | 104.5% |
| 6 | 110.1% |

### 完全攻略時
| 設定 | 機械割 |
|---:|---:|
| 1 | 100.1% |
| 2 | 102.3% |
| 5 | 107.1% |
| 6 | 112.8% |
- 技術介入機なので通常値と完全攻略値は別定義で保持し、平均しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/267.5 | 1/409.6 | 1/161.8 |
| 2 | 1/260.1 | 1/383.3 | 1/154.9 |
| 5 | 1/241.8 | 1/358.1 | 1/144.3〜1/144.4 |
| 6 | 1/220.7 | 1/339.6 | 1/133.7〜1/133.8 |
- 合算の設定5/6は解析サイト間で小数第1位の丸め差。定義競合ではなく `ROUNDING_PRESENTATION_DIFFERENCE` として保持。
- 北斗揃いBIGは全設定共通1/8192。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
| 設定 | 50枚あたり |
|---:|---:|
| 1 | 33.5G |
| 2 | 34.0G |
| 5 | 35.1G |
| 6 | 35.8G |
- 一般紹介では代表値「約35G/50枚」表記もあるため、設定別解析値をcanonicalとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 北斗揃いBIG後のRT「闘神ステージ」: **約+0.2枚/G**。
- RTは次回ボーナス成立まで継続。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **最大311枚**。
- REG BONUS: **104枚**。
- HAZUSE配当表ではBIGは344枚超払い出しで終了、REGは105枚超払い出しで終了。実獲得最大値と払い出し終了条件を混同しない。
reliability: INDUSTRY_DATABASE_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時のゲーム数天井は **非搭載**。
- 北斗揃いBIG後のみ、次回ボーナスまで継続するRT「闘神ステージ」へ移行。
- 通常時に選択可能な6種類の「モード」は演出告知モードであり、AT機の内部通常A/B等とは別概念。resetBehaviorの内部モード再抽選値として扱わない。
- 実機完全再現用の重複役別ボーナス抽選・全設定示唆振り分けは物差し用途外のため収集しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_RT_POWER_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井非搭載のため、設定変更による天井進捗リセット/短縮は **NOT_APPLICABLE**。
- 当時の一撃「天井/設定変更」ページでは設定変更時の液晶ステージを「現在調査中」としており、本機固有の液晶初期化契約は公開固定できない。
- 北斗揃いBIG後RT中に設定変更した場合のRT内部状態保持/終了を、本機固有資料として直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 通常時にゲーム数天井・長期ゲーム数モードはないため、それらの据え置き恩恵は **NOT_APPLICABLE**。
- 北斗揃いBIG後RT中の据え置きでRT内部状態が翌日まで保持されるかは、機種名・型式・闘神ステージ・RT・据え置き・朝一を組み替えて再探索したが、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 一撃の当時ページでは純電源OFF/ON時の液晶ステージも「現在調査中」。
- 純電源OFF→ON時のRT内部状態保持/終了についても、本機固有の直接比較資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更・据え置き・純電断を推測で同一扱いしない。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。
- 通常時ゲーム数を蓄積して到達する天井は存在しない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。
- リセット専用短縮天井も存在しない。

### modeAfterReset
- AT/ART機のような通常A/B・天国等の内部ゲーム数モードは **NOT_APPLICABLE**。
- 通常時の6演出モードはプレイヤー選択型の告知演出であり、朝一内部モード振り分けとして扱わない。

### stateAfterReset
- 通常時の高低状態/前兆状態を管理する公開リセット契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 北斗揃いBIG後RTの設定変更/据え置き/純電断契約は上記の通り **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、公開リセット当選率などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井非搭載のため、通常時の朝一ゲーム数狙い恩恵はない。

### resetPenalties
- 設定変更で前日天井進捗を失う不利は **NOT_APPLICABLE**。
- 本機固有の設定変更ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 機種名/型式/サミー/A-SLOT/設定変更/リセット/朝一/据え置き/ガックン/電源OFF ON/液晶ステージを組み替えて再探索。
- 本機固有の確定ガックン・初期出目・ランプ・ステージ判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一撃の当時ページも設定変更時/電源OFF ON時の液晶ステージを「現在調査中」としており、液晶だけでの変更判別を固定しない。

### numericResetData
- 設定変更専用モード振り分け: **NONE_CONFIRMED / NOT_APPLICABLE**。
- 朝一特定G以内当選率: **NOT_APPLICABLE_NO_GAME_NUMBER_HIT_SYSTEM**。
- 短縮天井: **NOT_APPLICABLE**。
- 設定変更固有の公開数値恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 性能コアはHAZUSE、ちょんぼりすた、2-9伝説、P-WORLD、パチ7等で複数照合。
- 導入日はサミー公式マイスロの2016-07-04告知を最優先し、HAZUSE/解析資料とも一致。
- 通常機械割と完全攻略時機械割は技術介入条件が異なるため別系列で保持。
- BIG/REG合算の設定5・6に0.1程度の丸め差があるが、精密BIG/REG値から見て資料定義の重大CONFLICTとは扱わず丸め表示差として保持。
- resetBehaviorは一般的なAタイプ論から推測せず、本機固有資料のみを採用。設定変更/電源OFF ON時の液晶ステージは当時資料で未確定のためUNVERIFIED。
- RT中の設定変更/据え置き/純電断については検索語・資料系統を変えて再探索したが、本機固有の直接契約を固定できなかった。

## sources
取得日: 2026-09-08

1. Sammy マイスロ お知らせ一覧 — 2016/07/04「A-SLOT 北斗の拳 将」登場
   - https://www.sammy.co.jp/japanese/myslot/news/index_10.html
   - 2016-07-04を「本日ホール導入日」と公式確認。地域差注記あり。
   - reliability: OFFICIAL
2. HAZUSE — A-SLOT北斗の拳 将
   - https://hazuse.com/machine/pachislot/6S0341/
   - 導入日、型式、検定番号、通常機械割、配当、ボーナス確率。
   - reliability: INDUSTRY_ANALYSIS_HIGH
3. P-WORLD — A-SLOT北斗の拳 将
   - https://www.p-world.co.jp/machine/database/8063
   - ノーマル/技術介入、BIG最大311枚、REG104枚、北斗BIG後RT。
   - reliability: INDUSTRY_DATABASE
4. ちょんぼりすた — 北斗の拳 将
   - https://chonborista.com/slot/sammy-slot/20547/
   - 通常/完全攻略機械割、BIG/REG/合算、設定別50枚ベース、導入日。
   - reliability: PERIOD_ANALYSIS
5. 2-9伝説 — A-SLOT 北斗の拳 将
   - https://29den.com/hokutoshou/
   - 天井なし、通常/完全攻略機械割、BIG/REG/合算、約35G/1k。
   - reliability: PERIOD_ANALYSIS
6. 一撃 — 天井/設定変更 A-SLOT北斗の拳 将
   - https://1geki.jp/slot/s_a_slot_hokuto_shou/3/
   - 天井非搭載。設定変更時・純電源OFF/ON時の液晶ステージは「現在調査中」。
   - reliability: PERIOD_ANALYSIS
7. パチ7 — 北斗シリーズ回顧
   - https://pachiseven.jp/news/index/page%3A48
   - BIG311枚、REG104枚、北斗BIG後RT、RT純増約0.2枚/G、4段階設定、完全攻略時の甘さ。
   - reliability: INDUSTRY_REVIEW
8. 中一商事 実機DB — A-SLOT北斗の拳 将
   - https://www.nakaiti.com/html/sSammy185.html
   - 型式 `A-SLOT北斗の拳 強敵/ZS`、BIG311枚、REG104枚、RT仕様。
   - reliability: OLD_MACHINE_DATABASE

## missingFields
- 設定変更時の液晶ステージ初期化/保持: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の液晶ステージ初期化/保持: UNVERIFIED_AFTER_RESEARCH
- RT中の設定変更時RT内部状態: UNVERIFIED_AFTER_RESEARCH
- RT中の据え置き時RT内部状態: UNVERIFIED_AFTER_RESEARCH
- RT中の純電源OFF→ON時RT内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `ROUNDING_PRESENTATION_DIFFERENCE_COMBINED_SETTING5_144_3_VS_144_4_SETTING6_133_7_VS_133_8`
- 通常機械割と完全攻略時機械割はCONFLICTではなく攻略条件差として分離。

## collectionMeta
retrievedAt: 2026-09-08
reliabilityOverall: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_RELEASE_CONFIRMATION
collectionPurpose: Chappy5 real-machine yardstick DB / resetBehavior v0.7
