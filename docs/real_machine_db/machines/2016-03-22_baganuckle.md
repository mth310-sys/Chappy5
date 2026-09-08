# バガナックルー

machineName: バガナックルー
manufacturer: 大都技研
releaseDate: 2016-03-22
recordNumber: 966
generation: 5号機
systemType: AT / 擬似ボーナス / モード管理 / 技術介入
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity
- P-WORLD、当時解析、パチマガスロマガ系DBでメーカー **大都技研**、5号機ATを照合。
- 導入日は複数当時解析で **2016-03-22** 一致。大都技研公式サウンドトラックも同日発売で実機展開時期と整合する。
- 正式型式名・検定番号は「バガナックルー / 大都技研 / 型式 / 検定 / 5S」等で再探索したが、今回直接固定できる資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.4% |
| 3 | 100.4% |
| 4 | 104.4% |
| 5 | 107.2% |
| 6 | 111.1% |

- ちょんぼりすた等の解析系列で確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_PERIOD

## initialHitBySetting
| 設定 | AT/擬似ボーナス初当り |
|---:|---:|
| 1 | 1/336 |
| 2 | 1/315 |
| 3 | 1/290 |
| 4 | 1/259 |
| 5 | 1/231 |
| 6 | 1/212 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE_PERIOD

## baseGamesPer50
- canonical: **約48G/50枚**。
reliability: ANALYSIS_HIGH_PERIOD

## netIncrease
- AT純増: **約3.0枚/G**。
- P-WORLDは「1Gあたり約3.0枚増加」、解析資料も純増3.0枚/Gで一致。
reliability: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG BONUS: **50G+α / 約150枚**（技術介入成功でATゲーム数減算停止抽選）。
- REGULAR BONUS: **20G / 約60枚**。
- 擬似ボーナスATとして管理。
reliability: INDUSTRY_DATABASE_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は通常A / 通常B / チャンス / 昇天準備 / 天国 / 昇天国のモード管理。
- 通常A/B: 最大 **1500G**。
- チャンス: **100G**。
- 天国 / 昇天国: ポイント管理で平均約50G相当。
- 昇天準備は固定G数天井なしで次回昇天国確定。
- 最大1500G到達で擬似ボーナス。1500G超での当選は昇天準備滞在示唆となり、次回昇天国確定の扱い。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_PUBLIC_MACRO_BEHAVIOR_DIRECT_RESET_CONFIRMED_POWER_CYCLE_AND_RESET_MODE_NUMERIC_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 後年天井DBで本機の設定変更を **リセット** と明記しており、ボーナス間天井進捗は設定変更でRESETとして扱う。
- パチマガスロマガ系当時DBには本機専用の「設定変更時」解析項目が存在することを確認。
- ただし今回取得できた公開本文/検索結果からは、設定変更時のモード振り分け数値、ポイント初期値、内部状態初期化の全契約を直接固定できないため、それらは `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 設定据え置き時の天井ゲーム数・モード・ポイントの持越し契約を本機固有の直接資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時RESET確認を据え置きCARRYOVERの直接根拠には転用しない。

### powerCycleBehavior
- 純電源OFF→ONのみの天井・モード・ポイント処理を本機固有資料で直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を同義扱いしない。

### gameCounterReset
- 設定変更: **RESET_CONFIRMED_SECONDARY_CROSSCHECK**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常最大天井: **1500G**。
- 設定変更後だけの固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- チャンスモード100G、天国/昇天国の平均約50Gは通常モード特性であり、「リセット専用短縮天井」と混同しない。

### modeAfterReset
- 設定変更時のモード再抽選自体は専用解析項目の存在とリセット情報から示唆されるが、今回直接本文で固定できた振り分け数値はなし。
- numeric contract: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時モード移行率は公開されているが、通常運用の全移行表は実機完全再現用のためreset専用値へ混入させない。

### stateAfterReset
- ポイント/内部状態の設定変更時初期化・再抽選詳細: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井、朝一CZ、保証ボーナス等: **NONE_CONFIRMED_AFTER_RESEARCH**。
- チャンス/天国等への朝一振り分け数値は直接固定できず、推測しない。

### resetPenalties
- 前日天井進捗は設定変更でRESETするため、前日ハマリの宵越し価値消失が主要な不利要素。
- その他の設定変更固有ペナルティ: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「バガナックルー」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ランプ」を組み替えて再探索。
- 本機固有のガックン等による確定的な変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更後天井進捗: **0から再計数（最大1500G契約）**。
- リセット専用短縮天井: **NONE_CONFIRMED**。
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G以内当選率: **UNVERIFIED_AFTER_RESEARCH**。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井/モード/ポイント直接契約
- 純電源OFF→ON時の天井/モード/ポイント直接契約
- 設定変更時モード振り分けの公開数値
- 本機固有の確定設定変更判別

## conflicts
- 重大な性能コア数値競合は今回確認していない。
- 1500G超当選については「通常最大1500G」と「昇天準備モードは天井なし」が併存する仕様であり矛盾ではなくモード差として保持。

## sources
取得日: 2026-09-08

1. P-WORLD — バガナックルー
   - https://www.p-world.co.jp/machine/database/7993
   - 大都技研、5号機AT、純増約3.0枚/G、BIG50G+α、REG20G、最大1500G天井。
   - reliability: INDUSTRY_DATABASE_HIGH
2. ちょんぼりすた — バガナックルー 天井・ゾーン・解析完全攻略
   - https://chonborista.com/slot/daito-slot/17619/
   - 2016-03-22導入、設定別AT初当り/機械割、約48G/50枚、純増3.0枚/G、モード別天井、BIG/REG基本性能。
   - reliability: ANALYSIS_HIGH_PERIOD
3. パチマガスロマガ公式系旧DB — バガナックルー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/63/daitogiken_slot_63.php
   - 大都技研/2016年3月、設定変更時・モード移行率の専用解析項目が存在。
   - reliability: PERIOD_ANALYSIS_HIGH
4. 2ndsight 天井一覧 — バガナックルー
   - https://2ndsight.xyz/1768
   - 最大1500G、設定変更「リセット」。後年整理資料のためresetの補助確認に使用。
   - reliability: ANALYSIS_SECONDARY
5. 大都技研公式 — サウンドトラック
   - https://www.daitogiken.com/products/music/soundtrack/
   - バガナックルー公式楽曲、発売日2016-03-22。identity/date補助。
   - reliability: OFFICIAL
6. モゲスロ — 2016年新台導入カレンダー
   - https://moge-site.com/new-slot2016
   - 2016-03-22群にミラクル/ゲッターマウス/バガナックルーを掲載。
   - reliability: ANALYSIS_CALENDAR_CROSSCHECK

## QA status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- resetRetroactiveQA: NOT_APPLICABLE_NEW_RECORD
