# バジリスク～甲賀忍法帖～II

machineName: バジリスク～甲賀忍法帖～II
manufacturer: メーシー / UNIVERSAL ENTERTAINMENT
releaseDate: 2012-06-11
releaseDatePrecision: exact_day_official_and_analysis_sources
releaseDateNotes: ユニバーサルエンターテインメント公式発表が2012-06-11全国ホール順次導入開始を明記。K-Navi、パチビー、HAZUSEも2012-06-11で一致。メーカー製品ページは2012年6月発売。
generation: 5号機
systemType: ART主体 / プレミアムBIG+継続率&セットストックART
formalModelName: バジリスクII-NH
approvalNumber: 2S0260
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.0% |
| 3 | 103.3% |
| 4 | 107.2% |
| 5 | 112.9% |
| 6 | 119.5% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDは設定6を119.4%、複数解析資料は119.5%とするため設定6のみ丸め差CONFLICT_NOTE。設定1～5は一致。

## initialHitBySetting

| 設定 | ART初当たり | BIG+ART合算 |
|---|---:|---:|
| 1 | 1/294 | 1/292 |
| 2 | 1/262 | 1/260 |
| 3 | 1/252 | 1/251 |
| 4 | 1/218 | 1/217 |
| 5 | 1/210 | 1/209 |
| 6 | 1/178 | 1/177 |

BIG確率: 全設定共通 1/32768
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: HAZUSEの設定別ART初当たり、BIG+ART合算を採用。K-Navi/P-WORLD/複数解析サイトの合算値とも一致。

## baseGamesPer50

value: 約29.8G～約31.1G / 50枚（設定1～6範囲）
reliability: ANALYSIS_HIGH
notes: HAZUSEが「50枚辺りのゲーム数 設定1～6 約29.8G～約31.1G」と掲載。パチマガスロマガにも1000円あたりゲーム数の専用項目が存在することを確認したが検索取得では数値本文を完全回収できず、個別設定値へ展開しない。

## netIncrease

value: 約+2.7枚/G
reliability: OFFICIAL_CROSSCHECKED
notes: ユニバーサル公式製品ページ、当時公式発表、P-WORLD、パチビー、HAZUSE、パチマガスロマガで一致。

## basicPayout

- プレミアムBIG: 約336枚（345枚超払い出しで終了）。成立でART確定。
- ART「バジリスクタイム」: 「追想の刻」基本10G+α + 「争忍の刻」20～50Gで1セットを構成する継続率+セットストック型。純増約+2.7枚/G。
- 瞳術チャンス: ART中の赤BAR揃いから突入する20Gのセット上乗せゾーン。

reliability: OFFICIAL_AND_ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は低確/高確等の内部状態があり、上位状態ほどART当選期待度が高い。
- 自力CZ「開眼チャレンジ」からARTを目指す経路あり。
- 通常天井: ART終了後1280G消化で天井状態となり前兆後ARTへ。P-WORLDでは通常時1280G、別攻略資料では内部通常時1200G+前兆・データ表示上1280G前後と説明されるため定義差を保持。
- 天井恩恵: 継続率50%以上のART + セットストック2個以上。HAZUSEでは天井時継続率50%=50.00%、66%=46.88%、80%=3.13%、セット2個=98.91%、3個=0.78%、4個=0.20%、5個=0.10%。朝一リセット専用数値ではないため主要恩恵のみ保存。
- 通常時の全小役別ART抽選や全状態移行テーブルは実機完全再現用となるため収集対象外。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MACHINE_SPECIFIC_NUMERIC_DATA
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: SETTING_CHANGE_RESELECTS_INTERNAL_STATE_BUT_DOES_NOT_CLEAR_CEILING_GAME_PROGRESS. 本機固有解析では設定変更時に内部状態移行抽選を実施。一方、当時～後年攻略資料とK-Navi掲載ライター記述で「設定変更しても天井ゲーム数を引き継ぐ」ことを確認。RAMクリア時はゲーム数リセットとする資料あり。
carryOverBehavior: CEILING_PROGRESS_CARRIES_OVER. 据え置き時は少なくとも通常時天井ゲーム数の宵越しが成立する機種として複数資料で扱われる。設定変更でも天井進捗を引き継ぐ特殊性があるため、天井狙い上は設定変更/据え置きの双方で前日G数を考慮可能とする資料が存在。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 「電源OFF→ON」「電断」「電源入切」「バックアップ」を含め再探索したが、単純電源OFF→ONのみの場合の内部状態再抽選有無を本機固有の直接資料で確定できず。天井ゲーム数はバックアップされる可能性が高いが推測補完しない。
gameCounterReset: RETAIN_ON_SETTING_CHANGE__CLEAR_ON_RAM_CLEAR. 設定変更のみでは前日ゲーム数を引き継ぐとの機種固有資料あり。RAMクリア時はリセット。
ceilingAfterReset: NO_SETTING_CHANGE_SHORTENING_CONFIRMED. 設定変更のみで通常天井を短縮する資料は確認できず、通常天井進捗を引き継ぐ。RAMクリア後の起点からは通常天井契約になるとする資料系統だが、朝一専用短縮値は確認なし。
modeAfterReset: INTERNAL_STATE_RESELECTED_ON_SETTING_CHANGE. 通常時の低確/高確状態を設定変更時に再抽選。
stateAfterReset: SETTING_CHANGE_STATE_DISTRIBUTION_CONFIRMED. 設定1/3/5は低確75.00%・高確25.00%、設定2/4/6は低確66.67%・高確33.33%。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: HIGH_STATE_START_CHANCE. 設定変更時は高確スタートが奇数設定25.00%、偶数設定33.33%。天井G数自体も設定変更で消えないことが朝一狙い上の大きな特徴。
resetPenalties: NONE_CONFIRMED_FOR_SETTING_CHANGE. 通常の設定変更だけでは天井進捗消失を確認せず。RAMクリア時のみ進捗リセットという資料あり。
resetDetection: INDIRECT_STATE_INFERENCE_ONLY. 設定変更時に内部状態が再抽選されるため朝一高確挙動は変更推測材料になり得るが確定判別ではない。ガックン/初期出目/液晶表示による本機固有の確定的変更判別契約は再探索後も確認できず。
publicMorningNumbers: SETTING_CHANGE_STATE_DISTRIBUTION_AVAILABLE
numericResetData:
- 設定1: 低確75.00% / 高確25.00%
- 設定2: 低確66.67% / 高確33.33%
- 設定3: 低確75.00% / 高確25.00%
- 設定4: 低確66.67% / 高確33.33%
- 設定5: 低確75.00% / 高確25.00%
- 設定6: 低確66.67% / 高確33.33%

notes:
- 「バジリスク～甲賀忍法帖～II / バジリスクII / バジリスクⅡ / バジ2 / バジリスクII-NH / メーシー」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 1280G / 1200G / 高確 / モード / 状態 / ガックン / RAMクリア」を組み替えて再探索。
- ユニバーサル公式、K-Navi、P-WORLD、パチビー、HAZUSE、パチマガスロマガ、当時～後年の天井攻略資料を横断。
- 「設定変更でも天井ゲーム数を引き継ぐ」は一般的な5号機の推定ではなく、本機固有資料で直接確認した特殊挙動。
- 単純電源OFF→ON時の内部状態処理は設定変更挙動から推定せずUNVERIFIED_AFTER_RESEARCHとした。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_STATE_AND_GAME_COUNTER_CARRYOVER__UNVERIFIED_AFTER_RESEARCH_FOR_PURE_POWER_CYCLE_AND_GAKKUN

## conflicts

- 機械割設定6: P-WORLD 119.4% / HAZUSE系・複数解析資料 119.5%。平均せず丸め差として双方保持し、主表は複数一致の119.5%。
- 天井表記: P-WORLD/HAZUSEは「ART終了後/通常時1280G」、別攻略資料は「内部通常時1200G+前兆、データ表示機で1280G前後」。カウンタ定義/前兆を含むかの差として平均せず保持。
- HAZUSEの型式表示はバジリスクII-NH / 検定番号2S0260。シリーズ後継「絆」「III」等の型式・リセット情報は混入させない。

## missingFields

- 単純電源OFF→ONのみの場合の内部状態再抽選/保持の直接契約
- ガックン/初期出目/表示による確定的な変更判別
- 50枚ベースの設定別個別値（範囲29.8～31.1Gは取得済み）

## sources

取得日: 2026-09-05

1. ユニバーサルエンターテインメント公式製品ページ https://www.universal-777.com/product/slot/basilisk2/
   - メーカー、5号機、ボーナス+ART、純増2.7枚/G、2012年6月発売。
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式発表（2012-06-08） https://www.atpress.ne.jp/news/27819
   - 2012-06-11全国ホール順次導入開始、純増約2.7枚/Gを持つART機であることを当時公式発表として確認。
   - reliability: OFFICIAL_PERIOD
3. P-WORLD https://www.p-world.co.jp/machine/database/6690
   - 5号機ART、純増2.7枚/G、BIG336枚、天井1280G、設定別合算、機械割97.4～119.4%。
   - reliability: DATABASE_HIGH
4. K-Navi https://p-kn.com/slot/1619/
   - 導入開始2012-06-11、設定別BIG+ART合算、機械割端点、機種構造。掲載ライター記事本文に設定変更でも天井引継ぎとの本機固有記述あり。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
5. HAZUSE https://hazuse.com/machine/pachislot/2S0105/
   - 型式バジリスクII-NH、検定番号2S0260、導入2012-06-11、ART初当たり、BIG+ART合算、50枚29.8～31.1G、天井、設定変更時状態振り分け。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ基本情報 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/40/a.php
   - ART構成、純増2.7枚/G、BIG約336枚。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
7. パチマガスロマガ小役/1000円項目 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/40/c-1.php
   - 1000円あたりゲーム数の専用解析項目の存在を確認。取得経路で数値本文は完全回収できないため主値はHAZUSE範囲を採用。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE_PARTIAL_RETRIEVAL
8. メタボ教授「バジリスク2は天井前の開眼チャレンジを回避すれば…」（2013-12-12） https://metabopro.com/bajisecondtorimu/
   - 設定変更後もゲーム数は前日から引継ぎ、RAMクリア時はリセット、設定変更後高確移行可能性を記載。
   - reliability: ANALYSIS_SECONDARY_MACHINE_SPECIFIC
9. スロパチステーション「宵越し」 https://777.slopachi-station.com/words/yoigosi/
   - 5号機の代表的な宵越し可能機としてバジリスクIIを例示し、本機の天井宵越し運用を後年照合。
   - reliability: RETROSPECTIVE_ANALYSIS
10. パチビー https://www.pachibee.jp/machines/lecture/212030005
   - 導入2012-06-11、5号機ART、天井あり、約2.7枚/Gを照合。
   - reliability: DATABASE_HIGH
