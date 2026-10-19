# みどりのマキバオー 届け!!日本一のゴールへ!!

machineName: みどりのマキバオー 届け!!日本一のゴールへ!!
formalModelName: みどりのマキバオー2E2
inspectionNumber: 4S0283
manufacturer: オリンピア
releaseDate: 2014-07-22
releaseDatePrecision: exact_start
generation: 5号機
systemType: ART / 疑似ボーナス / CZ / 天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-NaviとHAZUSEでホール導入開始 **2014-07-22** を照合。
- グリーンべると当時業界記事はオリンピア製で、納品開始予定を **2014-07-21** と報道。納品予定日とホール導入開始日は別定義で保持する。
- HAZUSEで型式名 **みどりのマキバオー2E2**、検定番号 **4S0283** を確認。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.4% |
| 2 | 97.7% |
| 3 | 100.0% |
| 4 | 104.2% |
| 5 | 108.7% |
| 6 | 113.3% |

- K-Navi、P-WORLD、HAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 疑似ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/237.4 | 1/545.6 | 1/165.0 |
| 2 | 1/229.8 | 1/527.3 | 1/159.7 |
| 3 | 1/222.5 | 1/507.3 | 1/154.3 |
| 4 | 1/201.8 | 1/456.6 | 1/139.6 |
| 5 | 1/183.1 | 1/408.7 | 1/126.2 |
| 6 | 1/165.0 | 1/364.9 | 1/113.4 |

- K-Navi、P-WORLD、HAZUSEで一致。疑似ボーナス初当りとART初当りを別定義で保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚**。
- HAZUSEの当時機種DB掲載値。
- confidence: ANALYSIS_HIGH_SINGLE_PERIOD_SOURCE

## netIncrease

- 疑似ボーナス / ART「マスタングRUSH」とも **約2.0枚/G**。
- グリーンべると、K-Navi、P-WORLDで一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 疑似ボーナスはノーマルBIG13種類、スーパーBIG5種類の計18種類。プレイヤー選択により保証G数・ART突入期待度・一部は枚数型が変化するため、単一の「基本獲得枚数」へ平均化しない。
- 比較用の代表値として、P-WORLD掲載の完全告知タイプではノーマルBIGが通常 **50G** / 勝負 **30G** / 大勝負 **5G**。役物告知タイプは初期 **100枚**。スーパーBIG完全告知は **100G**、多くの他タイプは **50G** または初期 **100枚**。
- ART「マスタングRUSH」は突入時に4Gの初期ゲーム数上乗せゾーンから開始し、純増約2.0枚/G、ゲーム数上乗せ+継続抽選+セットストック型。最大継続率 **85%**。
- 詳細18種の全抽選値は完全再現用途となるため収集対象外。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は天井以外の規定ゲーム数解除なし。レア小役直撃、CZ、マスタング揃い、天井が主な疑似ボーナス契機。
- 通常時 **760Gハマリ+前兆**で疑似ボーナス当選。パチマガスロマガ旧攻略、当時解析、後年天井DBで一致。
- CZ「チャレンジカップ」は調子メーターMAXから突入し、グレード別期待度はGIII約33% / GII約50% / GI約80%。
- CZ「白い奇跡誕生!?」はスーパーBIGの自力CZ。
- ARTはゲーム数上乗せ+ループ+セットストック型、最大継続率85%。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- K-Naviおよび旧パチマガスロマガには本機専用の「設定変更後の挙動」「朝イチ・設定変更」項目が現存することを確認したが、現在取得できるキャッシュ/検索本文では具体的な内部契約を安全に復元できなかった。
- `みどりのマキバオー 届け!!日本一のゴールへ!! / みどりのマキバオー2 / みどりのマキバオー2E2 / 4S0283` と `設定変更 / リセット / 朝一 / 天井G数 / 調子メーター / トレセン状態 / 出目` を組み合わせ、K-Navi、旧スロマガ、HAZUSE、当時天井解析、後年DBを再探索したが、設定変更時の天井G・調子メーター・内部状態の処理を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機ART機や同時期オリンピア機からの推定転記は行わない。

### carryOverBehavior

- 前日ゲーム数を使った宵越し狙いの当時ユーザー実戦例は確認できるが、その当たり結果だけでは内部G数引継ぎの実証にはならない。
- 据え置き時の天井G数、調子メーター、トレセン/内部状態、CZ関連状態の保持契約は直接資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの単純な電源OFF→ONのみで、天井G数・調子メーター・内部状態・液晶/出目がどう処理されるかを本機固有で明示した直接資料は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。
- 通常最大天井そのものは **760G+前兆**で確認済み。

### ceilingAfterReset

- 通常最大天井: **760G+前兆**。
- 設定変更専用の短縮天井または変更天井は、十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 本機はゲーム数解除モード主体ではなく、通常時に内部状態・トレセン状態・調子メーター等を持つ。
- 設定変更時にこれらを再抽選/初期化/引継ぎする具体契約は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 内部状態・トレセン状態・調子メーターについて、設定変更/据え置き/純電断の初期化または保持を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、専用高確、CZ優遇、朝一専用モード等の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- K-Naviのユーザーパチログには「前日出目を記録し、朝一出目が変わればリセット濃厚」とする当時実戦例があるが、メーカー/解析契約ではないため確定判別として採用しない。
- ガックン、初期出目、液晶表示、調子メーターによる本機固有の高信頼な変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時専用のモード振り分け、朝一当選率、短縮天井、恩恵発生率など、比較可能な直接数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時ハマリ500G・調子メーター0時の天井狙い期待値などは公開されているが、設定変更専用数値ではないため朝一数値へ混入させない。

## resetBehavior 再探索メモ

- 表記: `みどりのマキバオー 届け!!日本一のゴールへ!! / マキバオー2 / みどりのマキバオー2E2 / 4S0283 / オリンピア`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 760G / 調子メーター / トレセン状態 / CZ / 出目 / ガックン / 変更判別`。
- 資料系統: グリーンべると、K-Navi、P-WORLD、HAZUSE、旧パチマガスロマガ、2014年当時天井解析、後年天井DB、当時実戦記事。
- 2010年版「みどりのマキバオー」は別機種のため除外。
- K-Navi/旧スロマガの設定変更専用子ページは索引の存在までは確認できるが本文取得が不安定なため、見えていない契約を推測で補完していない。

## sources

取得日: **2026-09-07**

1. グリーンべると — 「マキバオー」第2弾は「超戦略的BB」搭載
   - https://web-greenbelt.jp/00006989/
   - 2014-06-17業界記事、オリンピア製、ART特化型、18種BB、純増約2.0枚/G、最大85%、納品7月21日開始予定
   - reliability: INDUSTRY
2. K-Navi — みどりのマキバオー 届け!!日本一のゴールへ!!
   - https://p-kn.com/slot/2079/
   - ホール導入2014-07-22、設定別ボーナス/ART/機械割、純増、ART仕様、天井/設定変更専用項目の存在
   - reliability: ANALYSIS_HIGH
3. P-WORLD — みどりのマキバオー 届け!!日本一のゴールへ!!
   - https://www.p-world.co.jp/machine/database/7432
   - 5号機ART、疑似ボーナス18種、純増約2.0枚/G、設定別初当たり、各BB代表性能
   - reliability: ANALYSIS_HIGH
4. HAZUSE — みどりのマキバオー 届け!!日本一のゴールへ!!
   - https://hazuse.com/machine/pachislot/4S0283/
   - 型式、検定番号、導入日、約30G/50枚、設定別初当たり/機械割
   - reliability: ANALYSIS_HIGH_PERIOD_DB
5. パチマガスロマガ — ART突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/116/l.php
   - 通常時760Gハマリ+前兆、CZ期待度、天井以外の規定G解除なし
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE
6. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/116/olympia_slot_116.php
   - 朝イチ・設定変更/天井・ヤメ時等の当時解析項目の存在を確認
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE_INDEX
7. 目指せ月収20万! パチスロ天井解析攻略ブログ — みどりのマキバオー2
   - https://mezase20.com/makibao.html
   - 2014-07-19当時解析、ボーナス&ART後760G+前兆でボーナス当選、天井以外の規定G解除なし
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
8. スロパチクエスト — 天井期待値・メーター狙い期待値
   - https://www.slopachi-quest.com/article/makiba-o-kitaiti/
   - 760G+前兆、2014年当時の天井期待値資料
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE

## missingFields

- settingChangeBehaviorの具体内部契約: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset（設定変更/据え置き/純電断）: UNVERIFIED_AFTER_RESEARCH
- setting-change-specific mode/state reset table: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 導入時期について、グリーンべると **2014-07-21納品開始予定** とK-Navi/HAZUSE **2014-07-22ホール導入開始**は定義差。日付を平均せず、本DBのreleaseDateはホール導入開始2014-07-22を採用し、納品予定日は別情報として保持。

## completionStatus

- performanceCore: **COMPLETE_CORE**
- resetBehaviorV0_7: **PARTIAL_AFTER_REQUIRED_RESEARCH**
- nextQA: 設定変更専用子ページ/保存アーカイブから、天井G・調子メーター・内部状態・電断契約の本文が復元できる場合に再確認する。
