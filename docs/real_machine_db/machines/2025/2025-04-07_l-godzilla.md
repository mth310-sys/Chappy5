# Lゴジラ

recordNo: 1717
machineName: Lゴジラ
aliases: スマスロ ゴジラ / ゴジラ / LゴジラNS
manufacturer: EXCITE製造 / ニューギン
formalModel: LゴジラNS
inspectionCode: 430766
releaseDate: 2025-04-07
generation: 6.5号機 / スマスロ / AT
systemType: CZ突破型・枚数突破型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ニューギン公式は2025-03-20に機種ページ公開、2025-04-04に「4/7より全国導入開始」と告知。
- 遊技通信/P-WORLD業界ニュースは型式 `LゴジラNS`、EXCITE製と掲載。
- 遊技日本が `LゴジラNS` の検定通過を報道。
- HAZUSE機種DBで型式 `LゴジラNS`、検定番号 `430766`、導入開始日2025-04-07を確認。
confidence: OFFICIAL_FOR_RELEASE / INDUSTRY_FOR_FORMAL_MODEL_MANUFACTURING / ANALYSIS_DB_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8%
- setting3: 100.6%
- setting4: 105.8%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
- setting1: AT 1/680.9
- setting2: AT 1/662.6
- setting3: AT 1/611.0
- setting4: AT 1/511.3
- setting5: AT 1/447.1
- setting6: AT 1/420.4
czInitialBySetting:
- setting1: 1/306.9
- setting2: 1/304.0
- setting3: 1/303.0
- setting4: 1/302.1
- setting5: 1/299.6
- setting6: 1/295.5
baseGamesPer50: 約31.6G/50枚
netIncrease: 約5.0枚/G
basicPayout:
- 通常AT `G-RUSH DESTRUCTION`: 初期40G+α、純増約5.0枚/G。規定払出枚数突破型。
- 上位AT `G-RUSH 大怪獣モード`: 初期100G、純増約5.0枚/G。設定1の突入時期待獲得枚数約2428枚。
- 通常ATから上位AT到達率: 約15%（メーカー/業界紹介値）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- Gポイントは通常時1Gにつき1pt加算され、規定ポイント到達でCZまたはATを抽選。
- Gポイントモード: A / B / C / 天国。
- Gポイント天井: A 1000pt / B 700pt / C 450pt / 天国100pt。
- AT間天井は通常時500G / 1000G / 1500G / 2500Gのいずれか。最大2500Gで成功濃厚の襲来ZONE経由からAT当選。
- 実機完全再現用の通常時全モード移行・CZ詳細抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_OFFICIAL_RESET_EVIDENCE_AND_DIRECT_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- AT間天井: RESETし、最大1000G+αへ短縮。
- Gポイント: 0へRESET。
- リプレイポイント: 再抽選。
- Gポイントモード: RESET / 再抽選。初回はモードC以上濃厚。
- 設定変更後は探索ZONE突入抽選があり、公開値7.0%。
- ニューギン公式も設定変更後のモードC or 天国、および救済機能1000G+αへの短縮を公開。
confidence: OFFICIAL_FOR_MODE_C_OR_HEAVEN_AND_1000G_SHORTENING / ANALYSIS_HIGH_FOR_OTHER_RESET_ITEMS

### carryOverBehavior
- 据え置き: 有利区間、天井、モード、Gポイント、リプレイポイントを引き継ぐ。
- なな徹の機種別表で設定変更/据え置き比較を直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数、Gポイント、リプレイポイント、モードを引き継ぐ。
- ステージ復帰位置は必勝本で「現在調査中」。
- 純電断時の有利区間は機種固有の直接表記を十分な再探索後も固定できなかったため、一般論で埋めず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_POINTS_MODE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_AND_STAGE

### gameCounterReset
- 設定変更: AT間ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### ceilingAfterReset
normalATCeiling: 最大2500G（500 / 1000 / 1500 / 2500G振り分け）
resetATCeiling: 最大1000G+α
normalGPointCeiling: 最大1000pt（モードA）
resetGPointCeiling: 最大450pt（モードC以上濃厚。天国なら100pt）
ceilingBenefit:
- AT間: 成功濃厚の襲来ZONEを経由してAT当選
- Gポイント: CZ or AT
confidence: OFFICIAL_FOR_RESET_1000G / ANALYSIS_HIGH_FOR_GPOINT_MODE_C_MAX450

### modeAfterReset
- 設定変更: モードC以上濃厚。
- 1G目成立役別の初回モード公開値:
  - その他: C 96.9% / 天国 3.1%
  - 弱チェリー: C 60.2% / 天国 39.8%
  - チャンスリプレイ: C 60.2% / 天国 39.8%
  - チャンス目: 天国 100%
  - 強チェリー: 天国 100%
  - 強チャンスリプレイ: 天国 100%
- 据え置き・電源OFF→ON: モード引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH; OFFICIAL_SUPPORTS_C_OR_HEAVEN_DIRECTION

### stateAfterReset
- 設定変更時の「内部状態」について、ちょんぼりすたはRESET、必勝本はリプレイポイント/モード再抽選を直接掲載。
- 据え置き・電源OFF→ONは主要進行値を引継ぐ。
- 通常/高確等の独立した内部状態振り分け数値は十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_DIRECTION / PUBLIC_VALUE_NOT_FOUND_FOR_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更: RESET（なな徹機種別表で直接確認）。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`（機種固有の直接比較値を固定できず）。
- 差枚到達等の遊技中有利区間リセット時はG-REBIRTHへ移行して上位ATチャンス。メーカー公式は差枚数到達以外に大怪獣モード終了後に切る場合があることも公開。ただしこれは設定変更朝一恩恵とは分離管理。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / OFFICIAL_FOR_IN_PLAY_CUT_TIMING_NOTE

### resetBenefits
- AT間最大天井が2500G → 1000G+αへ大幅短縮。
- 初回GポイントモードC以上濃厚で、Gポイント天井は最大450pt。天国なら100pt。
- 設定変更時の探索ZONE当選率7.0%。
- 1G目の強レア役（チャンス目/強チェリー/強チャンスリプレイ）は天国100%。弱チェリー/チャンスリプレイでも天国39.8%。
confidence: OFFICIAL_FOR_MAIN_SHORTENING_AND_C_OR_HEAVEN / ANALYSIS_HIGH_FOR_NUMERIC_DETAILS

### resetPenalties
- 前日のAT間ゲーム数、Gポイント、リプレイポイント、モード進行を失う。
- 設定変更固有の公開された数値的不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 設定変更後はモードC以上のため、初回Gポイント規定値が450ptを超えてもCZ/ATへ到達しない場合は据え置き推測材料になる。ただし表示/ポイント加算や前兆を含め、単独での確定判別には使用しない。
- AT間で1000G+αを明確に超えてなおAT非当選なら据え置き推測材料。
- 公式/なな徹ともリセット判別そのものは確定手段を公開していない。
- 本機固有ガックン条件・発生率は「Lゴジラ/型式LゴジラNS/ニューギン/EXCITE/設定変更/据え置き/電源OFF ON/ガックン」を変えて再探索したが高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIORAL_BOUNDARIES / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalATCeilingMax: 2500G
resetATCeilingMax: 1000G+α
resetInitialModeMinimum: C
modeCCeiling: 450pt
heavenCeiling: 100pt
resetExplorationZoneEntry: 7.0%
firstGameModeOther: C 96.9% / heaven 3.1%
firstGameModeWeakCherry: C 60.2% / heaven 39.8%
firstGameModeChanceReplay: C 60.2% / heaven 39.8%
firstGameModeChancePattern: heaven 100%
firstGameModeStrongCherry: heaven 100%
firstGameModeStrongChanceReplay: heaven 100%

## conflicts
- `OFFICIAL_WORDING_VS_ANALYSIS_DETAIL_FIRST_GAME_RARE_ROLE`: ニューギン公式は「リセット後1G目にレア小役に当せんすると天国モードが濃厚」と広く表現。一方、なな徹/ちょんぼりすたの解析表は弱チェリー・チャンスリプレイを天国39.8%、チャンス目・強チェリー・強チャンスリプレイを100%と細分化。数値表をcanonical詳細として保持し、公式表現も根拠として併記する。

## missingFields
- 純電源OFF→ON時の有利区間: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の通常/高確等の独立内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 客側から設定変更を確定できる単独表示/ランプ挙動: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ニューギン公式 ニュース（Lゴジラ特設公開）: https://www.newgin.co.jp/news/2025/
- ニューギン公式 Lゴジラ機種ページ開設/4月7日導入予定: https://www.newgin.co.jp/devfaq/6402/
- ニューギン公式 リセット情報（モードC or 天国、1000G+α短縮）: https://www.newgin.co.jp/devfaq/6465/
- ニューギン公式 有利区間切断Q&A: https://www.newgin.co.jp/devfaq/%E3%82%AE%E3%83%B3%E3%81%A1%E3%82%83%E3%82%93%E3%81%B8%E3%81%AE%E8%B3%AA%E5%95%8F%E3%82%B3%E3%83%BC%E3%83%8A%E3%83%BC%EF%BC%88%EF%BD%8C%E3%82%B4%E3%82%B8%E3%83%A9-no-001%EF%BC%89/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-69017/
- P-WORLD/遊技通信 型式・EXCITE製造: https://news.p-world.co.jp/articles/30131/yugitsushin
- HAZUSE 型式/検定番号/基本: https://hazuse.com/machine/pachislot/SX0099/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86783/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/86741/
- ちょんぼりすた 基本・天井・リセット・モード: https://chonborista.com/slot/newgin-slot/229718/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/919/28865/
- なな徹 モード/Gポイント: https://nana-press.com/kaiseki/machine/919/28871/
- パチ7 天井/リセット天井: https://pachiseven.jp/machines/7131/cutout/3
- P-WORLD 基本仕様: https://www.p-world.co.jp/machine/database/10239

## researchNotes
- 詳細な通常時全モード移行、リプレイポイント内部抽選、CZ中抽選、AT上乗せ振り分けは実機完全再現用のため収集対象外。
- 設定変更1G目のモード振り分け、1000G短縮、450pt上限、探索ZONE7.0%は朝一客行動へ直接影響するためv0.7公開朝一数値として収録。
- 公式の「レア小役で天国濃厚」と解析詳細表の粒度差は平均化/上書きせずCONFLICT注記を保持した。
