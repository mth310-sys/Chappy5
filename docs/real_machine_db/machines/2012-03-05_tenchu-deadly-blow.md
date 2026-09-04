# 天誅～Deadly Blow～

machineName: 天誅～Deadly Blow～
manufacturer: ニューギン
releaseDate: 2012-03-05
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviおよびパチビーはホール導入開始を2012-03-05と記録。グリーンべるとは納品開始予定を2012-03-04と記録するため、日付定義を分離し時系列キーはホール導入日の2012-03-05とした。
generation: 5号機
systemType: A+ART / ボーナス+ART
formalModelName: 天誅DeadlyBlow-Z
approvalNumber: 1S1124
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

| 設定 | 機械割（5号機クロニクル） | 別系列（回顧解析） |
|---|---:|---:|
| 1 | 96.8% | 96.8% |
| 2 | 98.7% | 98.7% |
| 3 | 101.2% | 101.2% |
| 4 | 104.4% | 104.3% |
| 5 | 108.0% | 107.9% |
| 6 | 112.1% | 111.9% |

reliability: MEDIUM_HIGH
notes: 設定4～6は資料間で0.1～0.2pt差があるため平均せずCONFLICT_OR_ROUNDING_SOURCE_DIFFERENCEとして双方保持。P-WORLDの一覧下部には「14.4%～112.1%」と表示されるが、14.4%は他資料と整合せず明白な表示/転記異常と判断し、性能値として採用しない。

## initialHitBySetting

### bonusCombined

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/268.59 |
| 2 | 1/260.06 |
| 3 | 1/252.06 |
| 4 | 1/244.54 |
| 5 | 1/232.40 |
| 6 | 1/219.92 |

### componentBonusProbability

- 天誅BIG: 全設定 1/16384.0
- NBIG（赤7/青7各）: 設定1～6 = 1/897.75 / 1/873.81 / 1/851.12 / 1/829.57 / 1/780.19 / 1/728.18
- 忍BONUS（赤7/青7各）: 設定1～6 = 1/1394.38 / 1/1337.47 / 1/1285.02 / 1/1236.53 / 1/1191.56 / 1/1149.75

### artFirstHit

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/526 |
| 2 | 1/471 |
| 3 | 1/482 |
| 4 | 1/414 |
| 5 | 1/429 |
| 6 | 1/370 |

reliability: ANALYSIS_HIGH
notes: ボーナス系列はパチビーと5号機クロニクルで照合。ART初当たりはパチビーの本機基本スペック表から設定別直接値を取得。既存レコードでUNVERIFIEDだったART初当たりを2026-09-05再探索で補完した。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED_AFTER_RESEARCH
notes: 「天誅～Deadly Blow～ / 天誅 Deadly Blow / 天誅DeadlyBlow-Z / 1S1124 / ニューギン」と「50枚 / 1000円 / 千円 / コイン持ち / ベース / 回転数」を組み替え、K-Navi、P-WORLD、パチビー、当時業界記事、5号機回顧DBまで再探索したが、本機固有の比較可能な直接値を確定できなかった。小役確率からの逆算は行わない。

## netIncrease

mode: ART「天誅RUSH」
value: 約+1.5枚/G
reliability: HIGH
notes: K-Navi、パチビー、P-WORLD、グリーンべるとで一致。

## basicPayout

- 天誅BIG: 約204枚
- BIG: 約204枚
- 忍BONUS: 約54枚

reliability: HIGH
notes: K-Navi、パチビー、P-WORLDで一致。

## modeSpecificMinimumData

- ART「天誅RUSH」: 1セット40G+α、純増約+1.5枚/G。
- 通常時およびART中に内部モードが存在する。P-WORLDはART中にも通常時と同様の4種類の内部モードがあると記載。
- 通常天井: ボーナス間1400G消化で到達。
- 天井到達後のレア小役当選: 前兆経由でART40G、ループ率90%。
- 天井到達後のBIG: 消化後にART40G、ループ率90%。
- 天井到達後の忍BONUS: 消化後にART200G、ループ率90%。

reliability: HIGH_FOR_ART_AND_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: 通常天井はボーナス間1400G。設定変更専用短縮天井・変更後専用G数はNONE_CONFIRMED_AFTER_RESEARCH。1400Gカウンタの設定変更時CLEAR/RETAIN自体はUNVERIFIED_AFTER_RESEARCH。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: 通常天井=ボーナス間1400G。設定変更専用の公開朝一数値はNONE_CONFIRMED_AFTER_RESEARCH。
numericResetData: normalCeilingGames=1400; settingChangeCeilingCounter=UNVERIFIED_AFTER_RESEARCH; shortenedCeilingAfterReset=NONE_CONFIRMED; morningHitRate=NONE_CONFIRMED

notes:
- K-Naviの本機専用ページに「狙い目・天井・朝一 > 設定変更後の挙動」という機種固有解析ページが存在することは確認済み。ただし現在取得可能なインデックス本文にはリンク見出しのみで、リンク先本文はcache missとなり設定変更時の具体挙動/数値を回収できなかった。
- 本機にはボーナス間1400Gの天井が存在するが、設定変更でそのカウンタがCLEARかRETAINか、据え置きで進捗を引き継ぐかは、本機固有の直接根拠を確定できていないため一般的な5号機ART機の挙動から補完しない。
- 通常時/ART中に内部モードが存在すること自体は確認済み。ただし設定変更時のモード再抽選/初期モード、据え置き時の状態保持、単純電源OFF→ON時の状態保持は本機固有直接資料を確定できずUNVERIFIED_AFTER_RESEARCH。
- ガックン、初期出目、液晶/ステージ等による設定変更判別についても本機固有の直接資料を確定できなかった。
- リセット専用天井短縮、朝一専用高確保証、朝一特定G以内当選率などの公開数値は今回の再探索では確認できなかった。
- 再探索語は「天誅～Deadly Blow～ / 天誅 Deadly Blow / 天誅DeadlyBlow-Z / 1S1124 / ニューギン」と「設定変更 / 設定変更後 / リセット / リセット時 / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井リセット / 天井短縮 / モード / 高確 / 低確 / ガックン」を組み替え、K-Navi、P-WORLD、パチビー、業界記事、旧攻略系・回顧系を横断した。

resetQaReliability: PARTIAL__MACHINE_SPECIFIC_RESET_PAGE_EXISTENCE_CONFIRMED_BUT_BODY_UNAVAILABLE

## sources

取得日: 2026-09-05

1. K-Navi「天誅～Deadly Blow～」 https://p-kn.com/slot/1568/
   - 導入日、ボーナス獲得、ART純増、機種固有「設定変更後の挙動」ページ存在。
   - reliability: HIGH_FOR_DATE_AND_BASIC_SPEC__INDEX_ONLY_FOR_RESET_PAGE
2. パチビー「天誅～Deadly Blow～」 https://www.pachibee.jp/machines/index/212010001
   - 導入日、設定別ボーナス確率、設定別ART初当たり、獲得枚数、ART、1400G天井と恩恵。
   - reliability: HIGH
3. P-WORLD「天誅～Deadly Blow～」 https://www.p-world.co.jp/machine/database/6616
   - 型式名、検定番号、ART、内部モード、天井。機械割下限14.4%表示はSOURCE_DISPLAY_CORRUPTION。
   - reliability: HIGH_FOR_MACHINE_ID_AND_SYSTEM__PAYOUT_FOOTER_HAS_DISPLAY_CORRUPTION
4. グリーンべると「人気ゲームを完全パチスロ化した『天誅』登場」 https://web-greenbelt.jp/00001285/
   - 2012-03-04納品開始予定、ART40G+α、純増約1.5枚/G。
   - reliability: HIGH_INDUSTRY_ARTICLE
5. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」 https://5goki.com/newgin-excite
   - ボーナス確率、機械割、2012/3導入。
   - reliability: MEDIUM_HIGH_RETROSPECTIVE_DATABASE
6. marimo0925「天誅シリーズ 歴代機械割ランキング」 https://www.marimo0925.net/pachislot-kikaiwari-ranking-tentyuu-ban/
   - 後年回顧系列として設定4～6の104.3/107.9/111.9%を確認。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- 50枚ベース
- 設定変更時の1400G天井カウンタCLEAR/RETAIN
- 据え置き時の天井進捗/内部状態引継ぎ
- 単純電源OFF→ON時のカウンタ/モード/状態
- 設定変更時のモード/状態振り分け
- ガックン等の変更判別
- 朝一専用の公開数値

## conflicts

- payoutRateBySetting: 5号機クロニクル 96.8/98.7/101.2/104.4/108.0/112.1% vs 回顧解析 96.8/98.7/101.2/104.3/107.9/111.9%。平均せず双方保持。
- P-WORLD/パチビーの機械割表示に14.4%が混入するが、他設定系列と整合しないためSOURCE_DISPLAY_CORRUPTIONとして採用除外。
- releaseDate: グリーンべると=2012-03-04納品開始予定、K-Navi/パチビー=2012-03-05ホール導入開始。日付定義差として分離し、時系列キーはホール導入日。

## confidenceSummary

- machineIdentity: HIGH
- releaseDate: HIGH
- payoutRate: MEDIUM_HIGH_WITH_CONFLICT
- bonusProbability: HIGH
- artFirstHit: ANALYSIS_HIGH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- art/netIncrease/ceiling: HIGH
- resetBehavior: PARTIAL_AFTER_EXTENDED_RESEARCH
- overall: HIGH_CORE__PARTIAL_RESET
