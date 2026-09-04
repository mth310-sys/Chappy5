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
recordStatus: PARTIAL_CORE_RESET_RESEARCHED

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
notes: 設定4～6は資料間で0.1～0.2pt差があるため平均せずCONFLICT_OR_ROUNDING_SOURCE_DIFFERENCEとして双方保持。P-WORLDの一覧下部には「14.4%～112.1%」と表示されるが、設定1の14.4%は他資料と整合せず明白な表示/転記異常と判断し、性能値として採用しない。

## initialHitBySetting

### bonusCombined

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/268.6 |
| 2 | 1/260.1 |
| 3 | 1/252.1 |
| 4 | 1/244.5 |
| 5 | 1/232.4 |
| 6 | 1/219.9 |

### componentBonusProbability

- 天誅BIG: 全設定 1/16384.0
- NBIG（各2種とも）: 設定1～6 = 1/897.8 / 1/873.8 / 1/851.1 / 1/829.6 / 1/780.2 / 1/728.2
- REG（各2種とも）: 設定1～6 = 1/1394.4 / 1/1337.5 / 1/1285.0 / 1/1236.5 / 1/1191.6 / 1/1149.8

### artFirstHit

UNVERIFIED_AFTER_RESEARCH

reliability: MEDIUM_HIGH_FOR_BONUS__UNVERIFIED_FOR_ART_FIRST_HIT
notes: ART初当たりは機種名/型式名/メーカー/ART名と「ART初当り」「ART初当たり」「初当選」等を組み替えて再探索したが、設定別の直接表を今回確定できなかったため推測しない。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED_AFTER_RESEARCH
notes: 「50枚」「1000円」「千円」「コイン持ち」「ベース」「回転数」と機種名・型式名を組み替えて再探索したが、本機固有の比較可能な直接値を確定できなかった。小役確率からの逆算は行わない。

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
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

notes:
- K-Naviの本機専用ページに「狙い目・天井・朝一 > 設定変更後の挙動」という機種固有解析ページが存在することは確認済み。ただし今回取得可能なインデックス本文にはリンク見出しのみで、設定変更時の具体挙動/数値本文は回収できなかった。
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
   - 導入日、獲得枚数、ART、1400G天井と恩恵。
   - reliability: HIGH
3. P-WORLD「天誅～Deadly Blow～」 https://www.p-world.co.jp/machine/database/6616
   - 型式名、検定番号、ART、内部モード、天井。
   - reliability: HIGH_FOR_MACHINE_ID_AND_SYSTEM__PAYOUT_FOOTER_HAS_DISPLAY_CORRUPTION
4. グリーンべると「人気ゲームを完全パチスロ化した『天誅』登場」 https://web-greenbelt.jp/00001285/
   - 2012-03-04納品開始予定、ART40G+α、純増約1.5枚/G。
   - reliability: HIGH_INDUSTRY_ARTICLE
5. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」 https://5goki.com/newgin-excite
   - ボーナス確率、機械割、2012/3導入。
   - reliability: MEDIUM_HIGH_RETROSPECTIVE_DATABASE
6. P-WORLD天井・仕様と同内容を照合したパチビー/K-Navi各機種ページ。

## missingFields

- ART設定別初当たり
- 50枚ベース
- 設定変更時の1400G天井カウンタCLEAR/RETAIN
- 据え置き時の天井進捗/内部状態引継ぎ
- 単純電源OFF→ON時のカウンタ/モード/状態
- 設定変更時のモード/状態振り分け
- ガックン等の変更判別
- 朝一専用の公開数値

## conflicts

- payoutRateBySetting: 5号機クロニクル 96.8/98.7/101.2/104.4/108.0/112.1% vs 回顧解析 96.8/98.7/101.2/104.3/107.9/111.9%。平均せず双方保持。
- P-WORLDの機械割下限「14.4%」は、他の設定1値96.8%級と整合せず、上限112.1%のみ一致するためSOURCE_DISPLAY_CORRUPTIONとして採用除外。
- releaseDate: グリーンべると=2012-03-04納品開始予定、K-Navi/パチビー=2012-03-05ホール導入開始。日付定義差として分離し、CONFLICTにはせず時系列キーはホール導入日。

## confidenceSummary

- machineIdentity: HIGH
- releaseDate: HIGH
- payoutRate: MEDIUM_HIGH_WITH_CONFLICT
- bonusProbability: MEDIUM_HIGH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- art/netIncrease/ceiling: HIGH
- resetBehavior: PARTIAL_AFTER_EXTENDED_RESEARCH
- overall: MEDIUM_HIGH_CORE__PARTIAL_RESET
