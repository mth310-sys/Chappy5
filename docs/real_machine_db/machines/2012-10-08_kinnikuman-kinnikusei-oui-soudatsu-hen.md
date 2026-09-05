# パチスロ キン肉マン ～キン肉星王位争奪編～

machineName: パチスロ キン肉マン ～キン肉星王位争奪編～
manufacturer: 山佐
releaseDate: 2012-10-08
releaseDatePrecision: exact_day_conflict
releaseDateNotes: パチビーは2012-10-08導入、K-NaviおよびHAZUSEは2012-10-09導入開始、山佐公式現行アーカイブは2012年10月稼働。1日差を平均化せずCONFLICTとして保持。本線の境界監査では、前handoffで未監査だった10/02〜10/08に具体日根拠が存在するため2012-10-08を時系列キーとして採用。
generation: 5号機
systemType: ART / BR非搭載 / 擬似ボーナス / バトル型ART / 天井あり
modelName: パチスロキンニクマン2S-D
approvalNumber: 2S0595
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_DATE_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.5% / 99% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 106.0% |
| 6 | 110.0% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_ROUNDING_CONFLICT

HAZUSEは設定2を99%、実機販売資料・後年整理は98.5%。その他設定は一致。0.5pt差を丸め/表記差として両値保持。

## initialHitBySetting

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/274.0 |
| 2 | 1/264.3 |
| 3 | 1/255.6 |
| 4 | 1/235.8 |
| 5 | 1/219.9 |
| 6 | 1/207.6 |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

HAZUSEの丸め値1/274・1/264・1/256・1/236・1/220・1/208と整合し、実機資料で小数値を独立照合。

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「キン肉マン2 / キン肉星王位争奪編 / パチスロキンニクマン2S-D / 山佐」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常時回転数」を組み替え、公式・P-WORLD・K-Navi・HAZUSE・当時天井攻略・旧解析・回顧資料を横断したが比較可能な直接値を確定できず。
- 小役確率から逆算しない。

## netIncrease

- ART「マッスルボーナス」: **約+2.7枚/G**
- 山佐公式、P-WORLD、パチビー、HAZUSEで照合。
- confidence: OFFICIAL_PLUS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- ARTは「バトルモード」と「パチンコモード」から選択。
- バトルモード:
  - マリポーサART: 1セット50枚 + バトル7G、獲得枚数管理。
  - ゼブラART: ベルナビ10回 + バトル10G、ナビ回数管理。
  - フェニックスART: 30G + バトル7G、ゲーム数管理、ループ率50～90%。
- マッスルチャンス: 出現率約1/1000、1G完結、ART期待度約50%。
- 通常ゲーム数天井: **ART（マッスルボーナス）終了後1400G消化で天井ART**。当時K-Navi実戦では1429Gで前兆込み到達例あり。
- 高確率ステージ天井: **ART非突入の高確率ステージを7回スルーすると8回目でART当選**。
- 高確率ステージ天井によるART当選では、ゲーム数天井カウンタをリセットせず引き継ぐ。
- 天井ARTは当時攻略資料で1/2がスーパーマッスルボーナス、残り1/2がマッスルボーナス（マリポーサ戦勝利期待度優遇）と報告。
- confidence: CONTEMPORARY_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: SUBSTANTIAL_RESET_QA
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_CLEAR_GAME_COUNT_AND_MODE_RELOTTERY**
- パチマガスロマガ当時解析: 設定変更時は天井までのゲーム数をクリアし、モード移行抽選を行う。
- **同一設定への打ち直し時はモード移行抽選を行わない**と明記。
- confidence: CONTEMPORARY_ANALYSIS_HIGH

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH_FOR_PURE_UNCHANGED_OVERNIGHT**
- 当時天井攻略に「宵越し×」表記はあるが、設定変更の有無・ホール運用条件を分離した純据え置き契約としては不十分。設定変更時CLEARは別の直接解析で確定しているため、純据え置きの保持を一般論で補完しない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ONのみで1400Gカウンタ、高確スルー回数、内部モード/状態を保持するかの本機固有直接資料を確定できず。

### gameCounterReset

- **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- 設定変更時に「天井までのゲーム数をクリア」。

### ceilingAfterReset

- **NORMAL_1400G_CEILING_FROM_CLEARED_COUNT; NO_RESET_SHORTENING_CONFIRMED**
- 通常天井はART終了後1400G。
- 設定変更専用の短縮天井数値は確認なし。

### modeAfterReset

- **CONFIRMED_RELOTTERY_ON_SETTING_CHANGE**
- 設定変更時モード選択率（全設定共通）:
  - 低確: 12.5%
  - 通常: 31.3%
  - 高確: 31.3%
  - 天国: 12.5%
  - 前兆: 6.3%
  - 引き戻し: 6.3%
- 合計は資料表示上の丸めにより100.2%。値を再正規化せず公開値をそのまま保持。
- 同一設定打ち直し時はこのモード移行抽選を行わない。
- confidence: CONTEMPORARY_ANALYSIS_HIGH

### stateAfterReset

- **MODE_DISTRIBUTION_CONFIRMED; FINER_TRANSIENT_STATE_UNVERIFIED**
- 上記6区分の設定変更時モード選択率は公開済み。
- それ以外の内部高確サブ状態等の詳細契約は本DB目的上不要か未確認。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **MODE_RELOTTERY_CAN_START_IN_HIGHER_MODE**
- 設定変更時、公開値上は高確31.3%、天国12.5%、前兆6.3%、引き戻し6.3%が選択され得る。
- 朝一にレア小役なしで上位ステージへ移行すれば設定変更のチャンスと当時解析が示唆。
- ただし確定判別ではない。

### resetPenalties

- **CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**
- 1400Gゲーム数天井までの進捗は設定変更でクリア。
- 高確ステージ天井のスルー進捗が設定変更でどう扱われるかは、今回取得した直接本文だけでは明示を確定できず推測しない。

### resetDetection

- **PARTIAL_HEURISTIC_ONLY**
- 朝一、レア小役なしで上位ステージへ移行すれば設定変更のチャンスと当時解析。
- ガックン、初期出目、ランプ等による本機固有の確定/高精度判別は **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- **CONFIRMED**
- 設定変更時モード選択率（全設定共通）:
  - 低確12.5 / 通常31.3 / 高確31.3 / 天国12.5 / 前兆6.3 / 引き戻し6.3%
- 設定変更専用当選率・短縮天井は確認なし。

### numericResetData

- normalGameCeiling: 1400G after ART
- settingChangeGameCounter: CLEAR
- resetCeiling: 1400G_FROM_CLEARED_COUNT
- settingChangeModeDistributionPct:
  - low: 12.5
  - normal: 31.3
  - high: 31.3
  - heaven: 12.5
  - premonition: 6.3
  - return: 6.3
- sameSettingRewriteModeRelottery: NO
- purePowerCycle: UNVERIFIED

resetQaReliability: CONTEMPORARY_DIRECT_RESET_ANALYSIS_FOR_SETTING_CHANGE__POWER_CYCLE_AND_PURE_UNCHANGED_OVERNIGHT_UNVERIFIED_AFTER_RESEARCH

## conflicts

1. **導入日**
   - パチビー: **2012-10-08**
   - K-Navi: **2012-10-09**
   - HAZUSE: **2012-10-09**
   - 山佐公式: **2012年10月**
   - `CONFLICT_RELEASE_DATE_2012-10-08_VS_2012-10-09`
   - 境界漏れ回避のため本線キーは最も早い具体日2012-10-08。後日QAで全国/地域/予定日定義が判明した場合に再評価。

2. **設定2機械割**
   - HAZUSE: 99%
   - 実機販売資料/後年整理: 98.5%
   - 0.5pt差。丸め/資料系列差として双方保持。

## missingFields

- 50枚あたりゲーム数/ベース
- 純据え置き時の1400Gカウンタ・高確スルー回数・モード状態の厳密保持契約
- 単純電源OFF→ON時のカウンタ/モード/状態契約
- 高確ステージ天井スルー進捗の設定変更時処理
- ガックン/初期出目等の本機固有変更判別

## sources

取得日: 2026-09-05

1. 山佐ネクスト公式 機種情報
   - https://yamasa-next.co.jp/model_knm2/
   - 5号機ART、2012年10月稼働、ART純増約2.7枚/G、バトル型ART構成。
   - reliability: OFFICIAL

2. パチビー 機種情報
   - https://www.pachibee.jp/machines/index/212080004
   - 導入日2012-10-08、5号機ART/BR非搭載/天井、純増約2.7枚/G。
   - reliability: INDUSTRY_DATABASE

3. K-Navi 機種情報
   - https://p-kn.com/slot/1704/
   - 導入開始2012-10-09、ART機種情報。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH

4. HAZUSE
   - https://hazuse.com/machine/pachislot/2S0595/
   - 型式パチスロキンニクマン2S-D、検定番号2S0595、導入2012-10-09、ART初当り・機械割、ART詳細。
   - reliability: ANALYSIS_HIGH

5. P-WORLD
   - https://www.p-world.co.jp/machine/database/6833
   - 5号機ART/BR非搭載/天井/約2.7枚G、バトルモード/パチンコモード。
   - reliability: INDUSTRY_DATABASE

6. パチマガスロマガ 朝イチ・設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/189/rs.php
   - 設定変更で天井Gクリア、モード移行抽選、同一設定打ち直し時はモード移行抽選なし、設定変更時モード選択率を公開。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH

7. K-Navi 天井攻略
   - https://p-kn.com/slot/1704/40636/
   - 通常1400G天井、高確ステージ8回目天井、高確天井ART後はゲーム数天井進捗を引き継ぐ。
   - reliability: CONTEMPORARY_ANALYSIS_HIGH

8. K-Navi 実戦レポ
   - https://p-kn.com/slot/1704/40347/
   - 液晶1317G台を追い1429Gで天井ART到達した当時実戦記録、1400G+前兆の現場確認。
   - reliability: CONTEMPORARY_OBSERVATION

9. 天井ハイエナ生活 2012-10-17
   - https://macerate.seesaa.net/article/297010442.html
   - 当時資料として1400G天井、高確8回目天井、高確天井後G数維持、「宵越し×」、天井ART恩恵を記録。
   - reliability: CONTEMPORARY_SECONDARY_ANALYSIS

10. パチスロわっしょい 実機資料
   - https://www.pachislowasshoi.jp/SHOP/yamasa-slot0017.html
   - ART初当り小数値 1/274.0～1/207.6、機械割97.0/98.5/100/103/106/110を独立照合。
   - reliability: RETROSPECTIVE_MACHINE_DATABASE
