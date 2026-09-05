# 鉄のラインバレル

machineName: 鉄のラインバレル
manufacturer: スパイキー
releaseDate: 2012-06-18
releaseDatePrecision: exact_day_with_source_conflict
releaseDateNotes: K-Naviは2012-06-18をホール導入開始日として明記。一方パチビーは2012-06-25。平均せずCONFLICTとして保持し、時系列キーは具体日を明記する当時攻略DBの2012-06-18を採用。
generation: 5号機
systemType: ボーナス+ART / CZ経由セットストック&ゲーム数上乗せART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.8% |
| 3 | 101.0% |
| 4 | 104.7% |
| 5 | 109.2% |
| 6 | 113.6% |

reliability: ANALYSIS_SINGLE_RETROSPECTIVE
notes: 後年整理データの設定別系列。別回顧一覧は97.1/98.8/101.0/104/109/113%と丸め差。主系列は詳細値を保持。

## initialHitBySetting

| 設定 | 鉄BONUS合成 | 鉄RUSH初当たり |
|---|---:|---:|
| 1 | 1/744.7 | 1/306.7 |
| 2 | 1/744.7 | 1/279.8 |
| 3 | 1/744.7 | 1/287.6 |
| 4 | 1/744.7 | 1/250.1 |
| 5 | 1/689.9 | 1/252.5 |
| 6 | 1/662.0 | 1/206.7 |

reliability: ANALYSIS_HIGH_PERIOD_SITE
notes: K-Naviの本機専用スペック値。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「鉄のラインバレル/スパイキー/1000円あたり/50枚あたり/ベース/コイン持ち」を組み替え、K-Navi、P-WORLD、パチビー、当時解析、後年整理資料を再探索したが比較可能な直接値を確定できず。

## netIncrease

value: 約+1.9枚/G
reliability: DATABASE_HIGH_CROSSCHECKED
notes: P-WORLD・パチビー・後年回顧が約1.9枚/Gで一致。K-Naviはボーナス込み約+2.1枚/G表記のため、定義差として別記。

## basicPayout

- 赤7鉄BONUS: 約204枚
- 白7鉄BONUS: 約104枚
- ART「鉄RUSH」: 1セット40G+α、純増約+1.9枚/G、セットストック+ゲーム数上乗せ型
- CZ「認証MODE」: 基本10G、全小役でART抽選

reliability: DATABASE_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常天井: ボーナス+ART間499Gまたは999G消化でART3セット以上。
- K-Navi当時記事では499or999G到達時に3～15セットのART確定と説明。
- 天井までのゲーム数はボーナスまたはART当選でリセット。
- ART中は複数の上乗せゾーンを搭載するが、完全再現用の詳細抽選は本DB対象外。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MAJOR_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH. 本機固有の設定変更時天井振り分け/内部状態処理を直接明記する現存資料を確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 据え置き時に499/999G天井進捗をそのまま引き継ぐことを直接明記する本機固有資料を確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 単純電源OFF→ON時の天井進捗・内部状態・CZ状態の扱いを直接確認できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH. 通常時の天井はボーナス/ART当選でリセットされるが、設定変更時のCLEAR/RETAINは別契約のため推測しない。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH. 設定変更専用の短縮天井や499/999G振り分け変更を確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH. 朝一専用モード/振り分けの直接値を確認できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時の内部状態は存在するが設定変更時再抽選/引継ぎ契約は確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH. ガックン、初期出目、液晶表示、ゲーム数挙動による本機固有の変更判別を確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData:
- 通常天井候補: 499G or 999G
- 天井恩恵: ART3セット以上（K-Navi当時記事では3～15セット）
- 設定変更時の499/999G振り分け: UNVERIFIED_AFTER_RESEARCH

notes:
- 「鉄のラインバレル / パチスロ鉄のラインバレル / スパイキー / 設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 499 / 999 / モード / 状態 / ガックン / 50枚」を組み替えて再探索。
- K-Navi、P-WORLD、パチビー、パチマガスロマガ断片、旧攻略ページ、後年回顧/整理資料を横断。
- 通常天井仕様は確認できるが、設定変更・据え置き・単純電源OFF→ONの契約を通常天井仕様から推測転記しない。

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING_AND_CORE__UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION

## conflicts

- releaseDate: K-Navi=2012-06-18 / パチビー=2012-06-25。平均せず双方保持。時系列キーは2012-06-18。
- ART純増: P-WORLD・パチビー・回顧資料=約+1.9枚/G、K-Navi=ボーナス込み約+2.1枚/G。定義差なので平均しない。
- 機械割: 詳細整理系列97.1/98.8/101.0/104.7/109.2/113.6%、別回顧一覧97.1/98.8/101.0/104/109/113%。丸め差として保持。

## missingFields

- 50枚あたりゲーム数
- 設定変更時の天井カウンタCLEAR/RETAIN
- 据え置き時の天井進捗・内部状態
- 単純電源OFF→ON時の扱い
- 設定変更時モード/状態振り分け
- 設定変更専用朝一恩恵・不利・公開数値
- ガックン等の変更判別

## sources

取得日: 2026-09-05

1. K-Navi https://p-kn.com/slot/1630/
   - 導入開始2012-06-18、鉄BONUS合成、鉄RUSH確率、ART40G+α、ボーナス込み約2.1枚/G、天井499/999G・3～15セット説明。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
2. P-WORLD https://www.p-world.co.jp/machine/database/6715
   - 5号機ART、赤7約204枚、白7約104枚、ART40G+α、純増約1.9枚/G、499/999G天井・3セット以上。
   - reliability: DATABASE_HIGH
3. パチビー https://www.pachibee.jp/machines/reach/212040015
   - 導入日2012-06-25、5号機ART、約1.9枚/G。
   - reliability: INDUSTRY_DATABASE
4. パチビー仕様解説 https://www.pachibee.jp/machines/lecture/212040015
   - 本機仕様・ART/CZ構造の補助確認。
   - reliability: INDUSTRY_DATABASE
5. パチマガスロマガ https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/05/i.php
   - 本機専用当時解析ページが現存。小役同時成立等を確認し、資料系統としてresetBehavior再探索に利用。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
6. 後年整理データ https://ameblo.jp/thundervsp5/entry-12882129131.html
   - 設定別機械割詳細値とART確率の照合補助。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
7. パチ7回顧 https://pachiseven.jp/articles/detail/15609
   - 2012年初夏登場、ART純増1.9枚/G、40G+αの回顧照合。
   - reliability: RETROSPECTIVE_INDUSTRY_MEDIA
