# いみそ～れ2 バーニングエディション30

machineName: いみそ～れ2 バーニングエディション30
manufacturer: エマ
releaseDate: 2008-11-16（業界記事の納品開始予定基準）
generation: 5号機
systemType: A+RT / 完全告知
variant: 30φ / バイオレットビスカス
modelCode: UNVERIFIED_AFTER_RESEARCH
settings: 1 / 2 / 3 / 4 / 5 / 6

## 性能コア

payoutRateBySetting:
- パチマガスロマガ・シミュレート: 97.71% / 99.76% / 102.11% / 104.13% / 106.46% / 109.93%
- 後年DBのバーニング25市場値（参考）: 96.2% / 98.6% / 101.4% / 104.3% / 106.8% / 110.6%
- status: ANALYSIS_HIGH_SERIES_COMMON_WITH_REFERENCE_CONFLICT。30φ単独市場表の独立回収は未達のため、25φ値を30φの確定値として自動転記しない。

initialHitBySetting:
- BIG: 1/341.33 / 1/321.25 / 1/303.41 / 1/287.44 / 1/280.07 / 1/266.41
- REG: 1/512.00 / 1/481.88 / 1/455.11 / 1/431.16 / 1/390.10 / 1/341.33
- 合成: 1/204.80 / 1/192.75 / 1/182.04 / 1/172.46 / 1/163.02 / 1/149.63
- 根拠: パチマガスロマガが25φゴールデン/30φバイオレットの2パネルを同一バーニング・エディションとして掲載。

baseGamesPer50:
- 設定1 35.63G
- 設定2 35.63G
- 設定3 35.97G
- 設定4 35.99G
- 設定5 36.68G
- 設定6 37.40G
- 根拠: パチマガスロマガのバーニング・エディション共通解析。

netIncrease:
- RT「ネオクラッシュモード」: 現状維持程度（INDUSTRY）。正確な枚/Gは今回確定せず。

basicPayout:
- BIG: 345枚超払い出し終了 / 純増約273枚
- REG: 102枚超払い出し終了 / 純増約101枚

modeSpecificMinimumData:
- BIG中の白7揃いでRT「ネオクラッシュモード」へ突入。
- RTは次回BIGまで継続し、途中REGでは終了しない。
- 業界発表では設定不問でBIG4回に1回程度RT突入が期待できる。
- 細かな内部抽選は収集対象外。

## resetBehavior（mission v0.7）

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時のRT状態処理を本機30φ固有資料で確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時RT状態の引継ぎを直接確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみのRT状態処理を直接確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。
modeAfterReset: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT内部状態の変更/電断処理のみ根拠不足。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/RT挙動等の変更判別法を確定できず。
numericResetData: NONE_CONFIRMED_AFTER_RESEARCH。

### resetBehavior再探索メモ

2026-09-02に「いみそ～れ2 / バーニングエディション30 / バイオレットビスカス / エマ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 天井 / 天井短縮 / モード / ガックン」を組み替えて当時記事・解析サイト・旧DBを横断。設定変更時RT処理の直接資料は確定できず、一般的5号機仕様から補完していない。

## 導入時期・仕様判定

- グリーンべると2008-10-24記事が30φを「バイオレットビスカス」と明記し、バーニング・エディションの納品を2008-11-16から予定。
- パチマガスロマガも30パイ「バイオレットビスカス」と25パイ「ゴールデンビスカス」の2パネルを明記。
- 後年一覧は2008年12月分類。具体日を持つ当時業界一次資料を主日付とし、分類差はCONFLICTとして残す。

## sources

取得日: 2026-09-02

- https://web-greenbelt.jp/00003852/ — グリーンべると（2008-10-24）。30φバイオレット/25φゴールデン、11/16納品予定、RT仕様、現状維持、獲得性能。信頼度: INDUSTRY。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/a.php — パチマガスロマガ。30φ/25φパネル、完全告知+RT、獲得性能。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/c.php — パチマガスロマガ。共通設定別1000円あたりゲーム数。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/h.php — パチマガスロマガ。共通設定別BIG/REG/合算・シミュレートPAYOUT。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/ema_slot_32.php — パチマガスロマガ。機種構造、「攻め時・ヤメ時→特にナシ」。信頼度: ANALYSIS_HIGH。
- https://pacnk.com/photoslot/mlist_2008.html — 後年2008年度一覧。25/30独立、2008年12月分類。信頼度: ANALYSIS_SINGLE_DATE_CONFLICT。

## missingFields

- 正式型式名/検定番号
- 30φ単独資料による市場機械割の独立裏取り
- RTの精密純増枚/G
- 設定変更/据え置き/電源OFF→ON時のRT状態処理
- ガックン等の変更判別法

## conflicts

- releaseMonthLabel: 当時業界記事11/16納品予定 vs 後年一覧2008年12月分類。
- payoutRateBySetting: シリーズ共通パチマガシミュレート値と25φ後年市場値に差。ただし30φ独立市場値未回収のため30φの直接CONFLICTとは断定しない。

coreStatus: COMPLETE_CORE_SERIES_COMMON_WITH_VARIANT_QA
resetStatus: RESEARCHED_WITH_UNVERIFIED_RT_RESET_DETAILS
