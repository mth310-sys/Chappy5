# ミリオンゴッド-神々の系譜-ZEUS ver.

machineName: ミリオンゴッド-神々の系譜-ZEUS ver.
manufacturer: エレコ / ユニバーサルエンターテインメント
releaseDate: 2013-01-28
releaseDatePrecision: exact_day
releaseDateNotes: ユニバーサルエンターテインメント2013-01-22発表で2013-01-28より全国ホール導入開始予定。パチビーも2013-01-28導入で一致。
generation: 5号機
systemType: ART / BR非搭載 / GOD GAME / ゲーム数上乗せ + セットストック
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 型式名: **ミリオンゴッド-神々の系譜-ゼウスUV**
- 検定番号: **2S1080**
- confidence: ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 3 | 103.0% |
| 4 | 107.2% |
| 5 | 110.9% |
| 6 | 116.6% |

- 複数解析/回顧DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「GOD GAME」初当たり

| 設定 | GG初当たり |
|---|---:|
| 1 | 1/439.7 |
| 2 | 1/394.1 |
| 3 | 1/396.4 |
| 4 | 1/314.6 |
| 5 | 1/337.1 |
| 6 | 1/254.0 |

- 後年解析DBとユニバーサル系回顧資料で一致。
- GOD揃い: 全設定共通 **1/8192**。
- 赤7揃い通常時: 全設定共通 **1/4096**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 信頼できる比較可能な50枚ベース値を今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- ユーザー口コミの「1K約19〜20G」は実戦体感であり、物差し値としては採用しない。

## netIncrease

- ART「GOD GAME」: **1セット100G or 200G / 純増約+2.2枚/G**。
- パチビー、5号機クロニクル、当時スペック資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- リアルボーナス非搭載。
- GOD GAME: 基本100Gまたは200G、純増約+2.2枚/G。
- GOD揃い: **GG 500G + 1セット以上**の系列情報あり。
- G-ZONE中もART状態を継続。

## modeSpecificMinimumData

- 通常時に複数の内部モードが存在。後年/当時資料では通常A、通常B、チャンス、天国ショートA/B、天国ロングA/B等の7モード系列が確認される。
- 本DB用途では朝一挙動に必要な「設定変更時モード再抽選」を保持し、通常時の全移行テーブルは収集対象外。

### 天井

- **ART間1400G消化で天井到達**。
- 天井ARTは **50%以上の継続率ストック抽選/50%以上ループ** とする解析資料あり。
- ART間1200〜1399GでGG当選し、そのGGが単発終了した場合、**50%で次回天井が300Gへ短縮**する救済機能。
- 300G短縮後も条件を満たす単発時に再度50%で300Gとなる資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_AND_MODE_REROLL_CONFIRMED__SUEOKI_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井到達までのゲーム数をクリア**。
- 設定変更時は **内部モード再抽選**。
- 設定変更専用の具体モード振り分け率は、機種名/ZEUS/ゼウス/型式名/エレコ/ユニバーサルと「設定変更/リセット/朝一/モード再抽選/振り分け」を組み替えて再探索したが、今回直接数値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時の天井ゲーム数、内部モード、GG関連救済状態を独立条件で直接明示する高信頼資料は、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な「据え置きなら引き継ぐ」慣行からは補完しない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の天井ゲーム数・モード・救済状態の保持/初期化は、本機固有資料で直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後は1400G天井カウンタを0から再スタート。
- 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 300G短縮は「天井手前1200〜1399Gで当選→単発終了」という救済条件であり、設定変更専用恩恵ではない。

### modeAfterReset

- 設定変更時: **REROLL_CONFIRMED**。
- 具体的な設定変更専用モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時に主要内部モードが再抽選されることを確認。
- その他の朝一内部状態/裏状態の個別振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井・高モード優遇率など、比較可能な公開恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日ART間ゲーム数の進捗は、設定変更により消失。
- 天井手前救済/300G短縮状態が設定変更でどう扱われるかは直接資料未確認のため **UNVERIFIED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、G-ZONE表示等による設定変更/据え置きの確定的判別は再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時天井カウンタ: **0から再スタート / 通常天井1400G**。
- 設定変更専用モード振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- normalCeiling: 1400G
- settingChangeMode: REROLL_CONFIRMED
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetSpecificCeilingReduction: NONE_CONFIRMED_AFTER_RESEARCH
- rescueCeilingAfter1200To1399SingleGG: 300G_AT_50_PERCENT
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: PERIOD_ANALYSIS_PLUS_MULTI_SOURCE_FOR_COUNTER_CLEAR_AND_MODE_REROLL__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_POWER_CYCLE_AND_RESET_MODE_DISTRIBUTION

## missingFields

- 50枚あたりゲーム数の高信頼比較値。
- 設定変更時の具体モード振り分け率。
- 純据え置き時の天井ゲーム数・モード・救済状態の完全契約。
- 単純電源OFF→ON時の天井ゲーム数・モード・救済状態の完全契約。
- 本機固有のガックン/初期出目/液晶による直接変更判別。

## conflicts

- 一部後年回顧記事に純増「約2.0枚/G」表記があるが、パチビー・5号機クロニクル・当時スペック資料の主系列は **約2.2枚/G**。平均せず主系列2.2枚/Gを採用し、2.0枚/G表記は `CONFLICT_RETROSPECTIVE_ROUNDED_OR_MISSTATED_NET_INCREASE` として保持。

## sources

取得日: 2026-09-06

1. ユニバーサルエンターテインメント / @Press — https://www.atpress.ne.jp/news/32832
   - 2013-01-22発表、2013-01-28より全国ホール導入開始予定。
2. 4Gamer転載 — https://www.4gamer.net/games/200/G020087/20130122017/
   - 公式発表転載、2013-01-28導入予定確認。
3. パチビー — https://www.pachibee.jp/machines/about/213010001
   - 導入日2013-01-28、5号機ART、BR非搭載、100/200G、約2.2枚/G。
4. パチナビ — https://pachinavi.net/machines/million-god-keifu-zeus/
   - 型式名、検定番号、機械割、GG初当たり、GOD/赤7確率。
5. クランキーセブン 天井/設定変更 — https://crankyseven.com/sp/milliongod-zeus10-pc.htm
   - ART間1400G天井、設定変更後ゲーム数クリア、天井手前救済と300G短縮。
6. 天井ハイエナ生活 2013年当時記事 — https://macerate.seesaa.net/article/321978229.html
   - 7種類モードの当時整理。
7. 楽天ブログ当時解析まとめ — https://plaza.rakuten.co.jp/mahiro2008/diaryall/
   - 設定変更時G数リセット・モード再抽選の当時掲載。
8. 5号機クロニクル — https://5goki.com/universal
   - 機械割、2013年1月、100/200G、約2.2枚/G照合。
9. ユニバーサル大図鑑 — https://universalpachislot.blog.jp/archives/1028322752.html
   - GG初当たり、GOD/赤7、1400G+α、天井手前救済、純増表記CONFLICT確認。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCHED
