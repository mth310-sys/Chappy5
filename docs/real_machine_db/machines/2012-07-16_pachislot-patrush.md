# パチスロ パトラッシュ

machineName: パチスロ パトラッシュ
manufacturer: SANKYO
releaseDate: 2012-07-16
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviの2012年7月導入カレンダーが2012-07-16を全国一斉導入開始日として掲載。SANKYO公式オンライン博物館は導入年月2012.07を確認。
generation: 5号機
systemType: ボーナス非搭載 / ゲーム数管理ART・セットストック型
modelName: パチスロ パトラッシュV
approvalNumber: 2S0385
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.6% |
| 3 | 100.8% |
| 4 | 104.3% |
| 5 | 108.1% |
| 6 | 113.4% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDの設定別表と5号機クロニクルが一致。

## initialHitBySetting

### ART「パトラッシュ」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/292 |
| 2 | 1/286 |
| 3 | 1/272 |
| 4 | 1/260 |
| 5 | 1/249 |
| 6 | 1/228 |

reliability: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
notes: SANKYO公式オンライン博物館掲載値。5号機クロニクルでも全設定一致。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「パチスロ パトラッシュ / パトラッシュV / SANKYO / 三共」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、SANKYO公式、P-WORLD、パチマガスロマガ、5号機クロニクル、当時天井攻略資料を横断したが、比較可能な直接値を確定できず。

## netIncrease

value: 約2.4枚/G
reliability: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
notes: SANKYO公式はゲーム数管理ART機であることを確認。P-WORLD、パチマガスロマガ、5号機クロニクルが約2.4枚/Gで一致。

## basicPayout

- ART「パトラッシュ」: 1セット20G / 70G / 140G、約2.4枚/G。
- SANKYO公式: タンクチャンスで継続G数を決定し、BIGなら70Gまたは140G、SMALLなら20G。
- ART終了後は50G間の引き戻しチャンスゾーン「チャンスタイム」。P-WORLDは滞在中のチャンス役ART当選率が通常時の約2～10倍とする。

reliability: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- ARTはゲーム数テーブル管理。
- P-WORLDが明示する主要天井: 通常モード1111G / ゾロ目モード999G / 天国モード51G（ART間）。
- 通常時のゾロ目ゲーム数111～999GはART突入チャンス。
- パチマガスロマガは5モード存在とするが、物差し目的を超える通常時全モードテーブルは収集しない。
- ロングフリーズ7揃い: 1/8192（SANKYO公式）。

reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_MODE_TABLE_AND_GAPS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PERIOD_ANALYSIS. 2012年8月25日更新の当時天井攻略資料は、設定変更後に天井ゲーム数がリセットされ、消化ゲーム数とART当選状況がクリア、内部モードが再セットされると明記。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 同じ当時資料は狙い目一覧で「宵越し×」とするが、純据え置き時にゲーム数・内部モード・ART関連状態がどの単位で保持されるかを本機固有の高信頼本文で直接確定できず、「宵越し×」のみから全状態非継承とは断定しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ONのみのゲーム数・モード・ART状態処理を本機固有資料で直接確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE. 設定変更時は天井ゲーム数/消化ゲーム数をクリア。
ceilingAfterReset: CONFIRMED_MODE_DEPENDENT_AFTER_RESET. 設定変更後に再セットされたモードに応じ、天国51G / ゾロ目999G / 通常1111Gの天井が適用される。リセット専用の別天井G数は確認せず。
modeAfterReset: CONFIRMED_RESELECT_WITH_NUMERIC_DISTRIBUTION. 設定変更後は内部モードを再セット。公開値は全設定共通で天国20% / ゾロ目30% / 通常50%。通常時の全モード遷移表は収集対象外。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. ロックオンタイム等の内部高確/前兆状態が設定変更時にどのように初期化・再抽選されるかは、今回確認した本機固有資料で確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED_NUMERIC. 設定変更後は20%で天国モードが選ばれた場合、ART間51G天井となる。30%のゾロ目モードは999G、50%の通常モードは1111G。
resetPenalties: CONFIRMED_PARTIAL. 設定変更で前日消化ゲーム数/天井進捗とART当選状況がクリアされるため、深いハマリの据え置き価値は設定変更時に失われる。一方で天国20%の朝一恩恵がある。
resetDetection: UNVERIFIED_AFTER_RESEARCH. 「パトラッシュV / SANKYO」と「朝一 / 設定変更 / リセット / ガックン / 出目 / ランプ / 判別」を組み替えて再探索したが、ガックン・初期出目・ランプ等で設定変更を単独推測できる本機固有契約は確定できず。
publicMorningNumbers: CONFIRMED_NUMERIC_RESET_MODE_TABLE.
numericResetData:
- 設定変更後内部モード選択率（全設定共通）:
  - 天国モード: 20%
  - ゾロ目モード: 30%
  - 通常モード: 50%
- モード別ART間天井:
  - 天国モード: 51G
  - ゾロ目モード: 999G
  - 通常モード: 1111G

notes:
- 「パチスロ パトラッシュ / パトラッシュV / PAT-RUSH / SANKYO / 三共」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード選択率 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- SANKYO公式オンライン博物館、K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、2012年当時の天井攻略資料を横断。
- 「宵越し×」は当時攻略リストの狙い目評価として保持し、純据え置き/電断の内部契約へ過剰一般化しない。
- 5号機のため有利区間は非該当。

resetQaReliability: PERIOD_ANALYSIS_FOR_SETTING_CHANGE_AND_RESET_MODE_NUMBERS__OFFICIAL_PLUS_ANALYSIS_FOR_CORE__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_STATE_AND_STANDALONE_DETECTION

## conflicts

- ART基本G数: SANKYO公式・P-WORLD・パチマガスロマガのARTフローは20/70/140Gで一致する一方、パチマガスロマガの別「スペック」ページに20/40/140G表記がある。公式値を主表とし、40G表記はSOURCE_TEXT_CONFLICT_OR_TYPOとして平均・統合しない。
- 当時天井攻略資料の「宵越し×」は、設定変更時クリア仕様とは整合するが、純据え置き時の内部保持契約を直接説明していないためcarryOverBehaviorの確定根拠には昇格させない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior pure unchanged-setting behavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset detailed high/low state: UNVERIFIED_AFTER_RESEARCH
- resetDetection standalone methods (gackun/lamp/initial reel state): UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/544/
- K-Navi 2012年7月導入カレンダー: https://p-kn.com/calendar/201207/
- P-WORLD: https://www.p-world.co.jp/machine/database/6756
- パチマガスロマガ ART突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/28/l.php
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/28/a.php
- パチマガスロマガ ゲーム数短縮率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/28/i.php
- 5号機クロニクル SANKYO全機種: https://5goki.com/sankyo
- 2012年当時 天井ハイエナ期待値リスト（設定変更後挙動/モード振り分け）: https://macerate.seesaa.net/article/288333617.html

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_EXACT_DAY_PLUS_OFFICIAL_MONTH
- identification/model: ANALYSIS_HIGH_PWORLD
- payoutRateBySetting: ANALYSIS_HIGH_CROSSCHECKED
- ART initial hit: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
- ART basic performance: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
- resetBehavior: PERIOD_ANALYSIS for setting-change clear and numeric reset-mode table; UNVERIFIED after multi-query research for pure carryover, power-cycle, detailed state and standalone detection
