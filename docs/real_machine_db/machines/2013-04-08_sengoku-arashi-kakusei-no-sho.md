# パチスロ戦国嵐～覚醒の章～

machineName: パチスロ戦国嵐～覚醒の章～
manufacturer: 三洋物産
releaseDate: 2013-04-08
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT / 規定ゲーム数管理 + 自力CZ / 疑似ボーナス
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_RESEARCHED

## identity

- ホール導入予定/開始基準日: **2013-04-08**。ALL7の2013年4月導入予定一覧で「ジャグラーガールズ」と同日掲載。
- P-WORLDはメーカーを三洋物産、タイプを5号機AT・BR非搭載・CZ・天井あり、純増約2.7枚/Gと掲載。
- 三洋×コーエーテクモの完全オリジナルコンテンツ。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.2% |
| 3 | 100.0% |
| 4 | 103.7% |
| 5 | 106.8% |
| 6 | 109.9% |

- 5号機クロニクルと2-9伝説整理値で一致。
- 後年ゲームセンター資料には設定4 104.6% / 設定5 109.0% / 設定6 113.6%という別系列がある。条件・出典定義を確認できないため平均せずCONFLICTとして保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PRIMARY_SERIES

## initialHitBySetting

| 設定 | CZ出現率 | AT出現率 |
|---|---:|---:|
| 1 | 1/192.82 | 1/258.37 |
| 2 | 1/187.10 | 1/249.88 |
| 3 | 1/189.37 | 1/243.23 |
| 4 | 1/179.66 | 1/221.13 |
| 5 | 1/176.54 | 1/209.54 |
| 6 | 1/170.73 | 1/193.91 |

- パチマガスロマガの機種別解析値。
- AT初当たりは2-9伝説整理値とも一致（表示丸め差のみ）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- 「戦国嵐」「戦国嵐 覚醒の章」「パチスロ戦国嵐」「三洋」と「50枚 / 1000円 / 1K / ベース / コイン持ち / 回転」を組み替え、P-WORLD、パチマガスロマガ、K-Navi、後年DBを横断したが、2013年機の比較可能な直接値を確定できなかった。

## netIncrease

- AT「覇王CHANCE」: **約2.7枚/G**。
- P-WORLD、パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「覇王CHANCE」: **1セット30 / 50 / 70 / 100G+α**（P-WORLD）。パチマガスロマガは基本情報で30～100G表記。
- 疑似BIG: **30G**。
- SUPER BIG: **100G**。
- 疑似ボーナスもAT方式で純増約2.7枚/G。比較用にはG数を主値とし、単純乗算した推定獲得枚数は保存しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時のAT当選メイン: **規定ゲーム数管理 + 自力CZ「武将決闘」**。
- 最大天井は滞在モード別。
  - 通常A: **1472G**
  - 通常B: **1024G**
  - 通常C: **512G**
  - 天国: **128G**
  - 超天国: **128G**
- 天井規定G到達でAT「覇王CHANCE」当選。
- K-Naviの利休セリフ色は通常B以上/通常C以上/超天国など滞在モード示唆として公開されているが、通常時全モード移行表の完全収集はミッション範囲外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_GAME_COUNTER__RESET_HAS_APPROX_25_PERCENT_HEAVEN_CHANCE__CARRYOVER_POWER_CYCLE_AND_STATE_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井ゲーム数リセット**。
- パチマガスロマガの機種別「朝イチ・設定変更」索引は、**「朝イチは1/4で天国モードのチャンス!」**と明記。設定変更時に朝一モード抽選が存在し、天国モードが約25%の比較可能な朝一数値として保存する。
- 通常A/B/C/天国/超天国の設定変更時フル振り分けは、検索語・資料系統を変えて再探索したが直接表を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 純据え置き時の天井G進捗・滞在モード・内部状態の完全な保持契約は、十分な再探索後も直接仕様を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「宵越し×」とする当時/後年天井狙い資料は設定変更で天井Gがリセットされることを根拠としており、単純な据え置きや電源断までリセットされるとは推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ON時の天井G、モード、液晶ステージ、内部状態の契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の天井CLEARから単純電断時の挙動を逆算していない。

### gameCounterReset

- settingChange: **CLEAR**。
- carryOver: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleOnly: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更専用の短縮天井そのものは確認できず。
- ただし設定変更後は約1/4で天国モードのチャンスがあり、天国選択時の最大規定Gは **128G**。
- 残り約3/4側のモード構成と、その場合の最大天井分布は `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

- **設定変更時に朝一モード抽選あり**。
- 公開朝一数値: **天国モード約1/4（約25%）**。
- 通常A/B/C・超天国を含む全振り分け: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- CZ高確等の内部状態について、設定変更時/据え置き時/単純電断時の比較可能な初期振り分け・保持契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 主要な朝一恩恵は、設定変更後の**約25%天国モードチャンス**。天国選択時は最大128G。
- リセット専用AT直撃率、CZ優遇率、短縮天井など、それ以外の比較可能な公開恩恵値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更により前日の天井ゲーム数進捗は消失。
- それ以外の設定変更固有の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- K-Naviでは通常時の「利休」セリフ色で滞在モード示唆が可能。朝一に上位モード示唆が出れば朝一モード推測材料にはなるが、設定変更確定判別とはしない。
- 本機固有のガックン、初期出目、液晶ステージ、クレジット/BET等による変更判別契約は、表記揺れ・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- resetHeavenChance: **約1/4（約25%）**。
- heavenMaxGame: **128G**。
- resetFullModeDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetShortCeiling: `NONE_CONFIRMED_AS_DEDICATED_SHORT_CEILING`。
- advantageousSection: `NOT_APPLICABLE_5TH_GEN`。

### numericResetData

- settingChangeGameCounter: CLEAR
- normalAMax: 1472G
- normalBMax: 1024G
- normalCMax: 512G
- heavenMax: 128G
- superHeavenMax: 128G
- resetHeavenChance: APPROX_25_PERCENT
- resetFullModeDistribution: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_GAME_COUNTER_AND_MORNING_HEAVEN_CHANCE__MULTI_SOURCE_FOR_CEILING_MODE_MAXIMA__UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_STATE_AND_GACCKUN_CONTRACT

## missingFields

- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetFullModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- carryOverInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- resetGacckunOrDisplayContract: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

### payout definition / alternate series

- primary published/analysis series: **96.9 / 98.2 / 100.0 / 103.7 / 106.8 / 109.9%**。
- retrospective game-center listing (settings 4–6 only): **104.6 / 109.0 / 113.6%**。
- 後者の攻略条件・算出定義を確定できないため平均せず `CONFLICT_PAYOUT_PRIMARY_VS_RETROSPECTIVE_ALTERNATE_HIGH_SETTINGS` として保持。

## sources

取得日: **2026-09-06**

1. ALL7.jp — 2013年4月導入予定一覧（パチスロ戦国嵐～覚醒の章～ / 三洋 / 2013-04-08）
   - https://www.all7.jp/plans/index/2013/04
   - reliability: INDUSTRY_CALENDAR
2. P-WORLD — パチスロ戦国嵐（メーカー、5号機AT、2.7枚/G、CZ、AT 30/50/70/100G+α、BIG30G/SUPER BIG100G）
   - https://www.p-world.co.jp/machine/database/7029
   - reliability: INDUSTRY_ANALYSIS_DB
3. パチマガスロマガ — 基本情報（AT純増約2.7枚/G、30～100G、疑似BIG30G/100G、ゲーム数管理+自力解除）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/a.php
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率（設定別CZ/AT出現率）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/h.php
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 機種解析トップ（朝イチ・設定変更「朝イチは1/4で天国モードのチャンス!」）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/sanyo_slot_17.php
   - reliability: ANALYSIS_HIGH
6. 2-9伝説まとめ — 戦国嵐（機械割、AT初当たり、モード別最大天井、設定変更で天井Gリセット）
   - https://29den.com/sengokuarashi/
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
7. 5号機クロニクル — 三洋物産5号機一覧（2013/4、機械割96.9～109.9%）
   - https://5goki.com/sanyo
   - reliability: RETROSPECTIVE_DATABASE
8. K-Navi — セリフ演出で滞在モード示唆（通常B以上/通常C以上/超天国示唆）
   - https://p-kn.com/slot/1827/43817/
   - reliability: ANALYSIS_HIGH_PERIOD_DB
9. 天井ハイエナ生活 — 戦国嵐（モード別最大天井、設定変更で天井Gリセット）
   - https://macerate.seesaa.net/article/372758539.html
   - reliability: PERIOD_STRATEGY_ARCHIVE
10. スロット専門ゲームセンター スパイダー — 別機械割系列（設定4 104.6 / 5 109.0 / 6 113.6%）
   - https://ameblo.jp/kenchan-retro/entry-12813517222.html
   - reliability: RETROSPECTIVE_SINGLE_SOURCE

## notes

- 実機完全再現用の通常時全モード移行表、全G数解除振り分け、CZ内部抽選、上乗せ詳細は収集していない。
- 2-9伝説ページには著作権表記メーカーの誤記とみられる箇所があるため、identityのメーカー根拠にはP-WORLD/ALL7を使用した。
