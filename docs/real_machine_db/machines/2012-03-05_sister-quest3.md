# シスタークエスト3～黄金の大地と東の勇者～

machineName: シスタークエスト3～黄金の大地と東の勇者～
manufacturer: SNKプレイモア
releaseDate: 2012-03-05
releaseDatePrecision: exact_day
releaseDateNotes: K-NaviおよびHAZUSEは2012-03-05導入開始を記録。SNK公式は2012年3月稼働と記録しており月単位で整合する。時系列キーは具体日を持つK-Navi/HAZUSEの2012-03-05を採用。
generation: 5号機
systemType: A+ART / ボーナス+ART
formalModelName: シスタークエスト3E
approvalNumber: 1S1072
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.5% |
| 3 | 99.9% |
| 4 | 105.3% |
| 5 | 109.7% |
| 6 | 114.1% |

reliability: HIGH
notes: P-WORLDと5号機クロニクルで一致。

## initialHitBySetting

### bonusProbability

| 設定 | BIG合算 | REG合算 | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/439.8 | 1/574.9 | 1/249.2 |
| 2 | 1/434.0 | 1/565.0 | 1/245.5 |
| 3 | 1/428.3 | 1/555.4 | 1/241.8 |
| 4 | 1/422.8 | 1/546.1 | 1/238.3 |
| 5 | 1/417.2 | 1/537.2 | 1/234.9 |
| 6 | 1/402.1 | 1/512.0 | 1/225.2 |

### artFirstHit

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/612.9 |
| 2 | 1/581.5 |
| 3 | 1/545.2 |
| 4 | 1/429.5 |
| 5 | 1/350.9 |
| 6 | 1/306.5 |

reliability: HIGH
notes: K-NaviとHAZUSEで同一表を確認。

## baseGamesPer50

value: 約32G/50枚
reliability: ANALYSIS_SINGLE
notes: 旧解析資料CrankySevenの「1000円あたり約32G」を採用。小役からの逆算はしていない。別系列の同時代資料で直接値を再照合できなかったためANALYSIS_SINGLE。

## netIncrease

mode: ART「冒険RUSH」
value: 約+1.6枚/G
reliability: HIGH
notes: P-WORLDと旧解析資料で一致。

## basicPayout

- 十勇士伝説: 約204枚
- BIG BONUS: 約204枚
- 錬金チャンス（REG相当）: 約42枚

reliability: HIGH
notes: P-WORLDと旧解析資料で一致。

## modeSpecificMinimumData

- ART「冒険RUSH」: 1セット44Gまたは304G、純増約+1.6枚/G。
- ART継続はゲーム数上乗せ・セットストック・継続率抽選の複合方式。
- 通常時内部状態は「通常A / 通常B / 高確 / 超高確」の4段階。
- 通常天井: ボーナス後1000G消化でARTストック確定。
- 十勇士伝説は成立時にART6セット以上が確定する解析がある。

reliability: HIGH_FOR_ART_AND_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: 設定変更時はボーナス後1000G天井までのゲーム数をクリアし、内部状態を再振り分けする。旧解析資料では設定変更後の高確以上スタート率は約10%～20%で、高設定ほど高確以上選択率が高い。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: CLEAR_ON_SETTING_CHANGE
ceilingAfterReset: 通常天井1000Gを0Gから再スタート。設定変更専用の短縮天井は確認できない。
modeAfterReset: 設定変更後に内部状態再振り分けあり。通常A/通常B/高確/超高確の詳細な設定別初期振り分け表は今回直接確定できず、公開確認できた範囲は高確以上約10%～20%。
stateAfterReset: RESELECTED_ON_SETTING_CHANGE__HIGH_OR_ABOVE_APPROX_10_TO_20_PERCENT_BY_SETTING
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: 設定変更後は約10%～20%で高確以上から開始する公開解析あり。高設定ほど高確以上スタート率が高い。
resetPenalties: 前日ボーナス後から積み上げた1000G天井進捗は設定変更で失われる。
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: 設定変更後の高確以上スタート率 約10%～20%（設定依存・高設定ほど高い）。
numericResetData: highOrAboveAfterSettingChange=approx_10_to_20_percent_by_setting

notes:
- 旧解析資料CrankySevenは本機固有の「設定変更時」において、天井到達までのゲーム数クリアと、設定変更後の高確以上スタート約10%～20%を明記している。
- 通常時には通常A/通常B/高確/超高確の4状態が存在する。設定変更後の状態再振り分けがあることは直接確認できるが、今回取得できた本文では各設定の4状態完全振り分け表までは確定できないため推測補完していない。
- 据え置き時の1000G天井進捗保持、内部状態保持、単純電源OFF→ONのみの場合のカウンタ/状態処理、ガックン・初期出目・液晶ステージ等による変更判別は、本機名・型式名・SNKプレイモア・シスクエ3と「据え置き / 宵越し / 電源OFF ON / ガックン / 朝一 / リセット判別」を組み替えて再探索したが、本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 後継「Sister Quest」（2025年スマスロ）のリセット仕様は本レコードへ流用していない。

resetQaReliability: MEDIUM_HIGH_FOR_SETTING_CHANGE_COUNTER_AND_STATE__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_DETECTION

## sources

取得日: 2026-09-05

1. SNK公式「シスタークエスト3～黄金の大地と東の勇者～」 https://slot.snk-corp.co.jp/official/sister-quest3/
   - 型式名シスタークエスト3E、稼働2012年3月。
   - reliability: OFFICIAL
2. K-Navi「シスタークエスト3～黄金の大地と東の勇者～」 https://p-kn.com/slot/1573/
   - 2012-03-05導入、BIG/REG/ボーナス合算、ART初当たり。
   - reliability: ANALYSIS_HIGH
3. HAZUSE「シスタークエスト3 黄金の大地と東の勇者」 https://hazuse.com/machine/pachislot/1S1072/
   - 型式名、検定番号、2012-03-05導入、BIG/REG/ART初当たり。
   - reliability: ANALYSIS_HIGH
4. P-WORLD「シスタークエスト3～黄金の大地と東の勇者～」 https://www.p-world.co.jp/machine/database/6620
   - 機械割96.9～114.1%、獲得枚数、ART1セット44/304G・純増約1.6枚/G、1000G天井、型式・検定番号。
   - reliability: INDUSTRY_DATABASE_HIGH
5. 5号機クロニクル「SNKプレイモア 5号機全機種一覧」 https://5goki.com/snkplaymore
   - 機械割96.9/98.5/99.9/105.3/109.7/114.1%、2012/3導入。
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
6. CrankySeven「シスタークエスト3 解析攻略」 https://crankyseven.com/sisterquest3-pc.htm
   - 1000円あたり約32G、獲得枚数、純増約1.6枚/G、1000G天井、設定変更時の天井Gクリア、設定変更後高確以上約10%～20%。
   - reliability: ANALYSIS_SINGLE_FOR_BASE__ANALYSIS_HIGH_FOR_RESET_WHERE_MACHINE_SPECIFIC

## missingFields

- 据え置き時の1000G天井進捗/内部状態の直接確認
- 単純電源OFF→ON時の天井カウンタ/状態
- 設定変更後の通常A/通常B/高確/超高確の完全な設定別初期振り分け表
- ガックン/初期出目/液晶等による変更判別
- 50枚ベースの独立別ソース照合

## conflicts

- netIncreaseについて後年個人回顧ページに約1.2枚/G表記がある一方、P-WORLDおよび旧解析資料は約1.6枚/Gで一致。本DB主値は複数一致する約1.6枚/Gを採用し、1.2枚/GはCONFLICT_OUTLIER_RETROSPECTIVEとして平均しない。

## confidenceSummary

- machineIdentity: HIGH
- releaseDate: HIGH
- payoutRate: HIGH
- bonusProbability: HIGH
- artFirstHit: HIGH
- baseGamesPer50: ANALYSIS_SINGLE
- art/netIncrease/ceiling: HIGH
- resetBehavior: MEDIUM_HIGH_PARTIAL
- overall: HIGH_CORE__PARTIAL_RESET
