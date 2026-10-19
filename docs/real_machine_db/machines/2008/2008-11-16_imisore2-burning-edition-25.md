# いみそ～れ2 バーニングエディション25

machineName: いみそ～れ2 バーニングエディション25
manufacturer: エマ
releaseDate: 2008-11-16（業界記事の納品開始予定基準）
generation: 5号機
systemType: A+RT / 完全告知
variant: 25φ / ゴールデンビスカス
modelCode: UNVERIFIED_AFTER_RESEARCH
settings: 1 / 2 / 3 / 4 / 5 / 6

## 性能コア

payoutRateBySetting:
- パチマガスロマガ・シミュレート: 97.71% / 99.76% / 102.11% / 104.13% / 106.46% / 109.93%
- 後年DB市場値: 96.2% / 98.6% / 101.4% / 104.3% / 106.8% / 110.6%
- status: CONFLICT。平均せず双方保持。

initialHitBySetting:
- BIG: 1/341.33 / 1/321.25 / 1/303.41 / 1/287.44 / 1/280.07 / 1/266.41
- REG: 1/512.00 / 1/481.88 / 1/455.11 / 1/431.16 / 1/390.10 / 1/341.33
- 合成: 1/204.80 / 1/192.75 / 1/182.04 / 1/172.46 / 1/163.02 / 1/149.63

baseGamesPer50:
- 設定1 35.63G
- 設定2 35.63G
- 設定3 35.97G
- 設定4 35.99G
- 設定5 36.68G
- 設定6 37.40G

netIncrease:
- RT「ネオクラッシュモード」: 現状維持程度（INDUSTRY）。正確な枚/Gは今回確定せず、推測換算しない。

basicPayout:
- BIG: 345枚超払い出し終了 / 純増約273枚
- REG: 102枚超払い出し終了 / 純増約101枚

modeSpecificMinimumData:
- BIG中の白7揃いでRT「ネオクラッシュモード」へ突入。
- RTは次回BIGまで継続。REGに当選してもRT継続。
- 業界発表ではRT突入は設定不問でBIG4回に1回程度期待できる仕様。
- 細かな白7抽選・小役重複等は実機完全再現用のため収集対象外。

## resetBehavior（mission v0.7）

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にRT状態をどう扱うか、本機固有の直接資料を確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のRT継続/内部RT状態を直接確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみでのRT状態処理を直接確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。通常ゲーム数天井は確認なし。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。リセット短縮天井も確認なし。
modeAfterReset: NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED。朝一専用モード/設定変更時モード振り分けは確認なし。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT状態の設定変更/電断処理のみ直接根拠なし。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/RT挙動等による変更判別法を確定できず。
numericResetData: NONE_CONFIRMED_AFTER_RESEARCH。

### resetBehavior再探索メモ

2026-09-02に機種名表記揺れ、ゴールデンビスカス、エマと「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 天井 / モード / ガックン」を組み替え、当時業界記事・パチマガスロマガ・旧DB/回顧資料を横断。パチマガスロマガの機種目次は「攻め時・ヤメ時→特にナシ」とし、設定変更専用ページを示していない。5号機一般論からRT処理を補完せず、本機直接根拠がない部分だけUNVERIFIED_AFTER_RESEARCHとした。

## 導入時期・仕様判定

- グリーンべると2008-10-24記事は、バーニング・エディションを30φ「バイオレットビスカス」と25φ「ゴールデンビスカス」と明記し、**2008-11-16から納品**予定としている。
- 後年一覧には2008年12月扱いも存在するため、月表記に資料差がある。本DBは時系列漏れ防止のため当時業界一次資料の具体的な納品開始予定日を主日付とし、後年12月分類は資料差として残す。

## sources

取得日: 2026-09-02

- https://web-greenbelt.jp/00003852/ — グリーンべると（2008-10-24）。25φゴールデン/30φバイオレット、11/16納品予定、RT仕様、RT現状維持、BIG約273枚/REG約101枚、合成1/204.8〜1/149.6。信頼度: INDUSTRY。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/a.php — パチマガスロマガ。25φ/30φパネル、完全告知+RT、BIG約273枚/REG約101枚。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/c.php — パチマガスロマガ。設定別1000円あたりゲーム数。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/h.php — パチマガスロマガ。設定別BIG/REG/合算・シミュレートPAYOUT。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/32/ema_slot_32.php — パチマガスロマガ。機種構造および「攻め時・ヤメ時→特にナシ」。信頼度: ANALYSIS_HIGH。
- https://pacnk.com/slot/tools/sh_imisore2baningued2008b.html — 後年DB。市場機械割96.2〜110.6%。信頼度: ANALYSIS_SINGLE。
- https://pacnk.com/photoslot/mlist_2008.html — 後年2008年度一覧。25/30独立、2008年12月分類。信頼度: ANALYSIS_SINGLE_DATE_CONFLICT。

## missingFields

- 正式型式名/検定番号
- RTの精密な純増枚/G
- 設定変更/据え置き/電源OFF→ON時のRT状態処理
- ガックン等の変更判別法

## conflicts

- payoutRateBySetting: パチマガスロマガ・シミュレート値と後年DB市場値が競合。
- releaseMonthLabel: 当時業界記事は11/16納品開始予定、後年一覧は2008年12月分類。具体日を持つ当時資料を主とし双方保存。

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetStatus: RESEARCHED_WITH_UNVERIFIED_RT_RESET_DETAILS
