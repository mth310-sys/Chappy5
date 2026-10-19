# プチマーメイド

machineName: プチマーメイド
manufacturer: 北電子
releaseDate: 2016-04-11
recordNumber: 971
generation: 5号機
systemType: ノーマルA / 完全告知 / 技術介入BIG
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式製品ページで2016年4月製品、純Aタイプ完全告知機として確認。
- K-Naviおよび当時解析でホール導入開始 **2016-04-11** を確認。
- 当時業界記事では納品開始予定 **2016-04-10**。納品日と全国稼働開始日を分離し、canonical releaseDateは2016-04-11。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.6% |
| 3 | 99.8% |
| 4 | 102.0% |
| 5 | 104.5% |
| 6 | 108.4% |

北電子公式、5号機クロニクル、当時解析で一致。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | 確率 |
|---:|---:|
| 1 | 1/288.7 |
| 2 | 1/282.5 |
| 3 | 1/276.5 |
| 4 | 1/269.7 |
| 5 | 1/265.3 |
| 6 | 1/254.0 |

### REG
| 設定 | 確率 |
|---:|---:|
| 1 | 1/409.6 |
| 2 | 1/397.2 |
| 3 | 1/378.8 |
| 4 | 1/337.8 |
| 5 | 1/295.2 |
| 6 | 1/263.2 |

### 合算
| 設定 | 確率 |
|---:|---:|
| 1 | 1/169.3 |
| 2 | 1/165.1 |
| 3 | 1/159.8 |
| 4 | 1/150.0 |
| 5 | 1/139.7 |
| 6 | 1/129.3 |

北電子公式と複数解析で一致。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約34G/50枚**。
- 当時導入資料・解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_PERIOD

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE

## basicPayout
- BIG: **最大335枚**（逆押しナビに従う技術介入）。
- REG: **約104枚**。
- 北電子内覧会業界記事、パチマガスロマガ、当時導入資料で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 純Aタイプ完全告知。
- 天井非搭載。
- ボーナス終了後10G以内のBIGでスペシャルボーナス音などの連続演出要素があるが、内部連チャンモードではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_SPECIAL_STATE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常時ゲーム数天井・通常時モード・AT/ART/RT状態を主要仕様として持たないノーマルAタイプのため、これらのリセット契約は **NOT_APPLICABLE**。
- 成立済みボーナス等の特殊状態を含む本機固有の設定変更処理は、機種名/型式候補/設定変更/リセット/朝一を組み替えて再探索したが直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井・通常時モード・AT/ART/RT進捗: **NOT_APPLICABLE**。
- 成立済みボーナス等の特殊状態の据え置き契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 天井・通常時モード・AT/ART/RT進捗: **NOT_APPLICABLE**。
- 純電源OFF→ON時の成立済みボーナス/告知状態/初期出目の本機固有契約: **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。複数解析で天井非搭載を確認。

### modeAfterReset
- 朝一専用モード・設定変更専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- AT/ART/RT内部状態: **NOT_APPLICABLE**。
- 成立済みボーナス等の特殊状態: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井、朝一モード、初当たり優遇、専用RT等: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、ランプ状態等による設定変更確定/強判別契約は、検索語と資料系統を変えて再探索しても確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- **NONE_CONFIRMED**。

## sources
取得日: 2026-09-08

1. 北電子公式 — プチマーメイド
   - https://www.kitadenshi.co.jp/slot/petitmermaid/
   - 設定別BB/RB/合算/出玉率、純A完全告知
   - reliability: OFFICIAL
2. 北電子 パチスロ製品一覧
   - https://www.kitadenshi.co.jp/slot/
   - 2016年4月製品、公式確率表
   - reliability: OFFICIAL
3. グリーンべると — 北電子、AタイプとAT機を同時発表
   - https://web-greenbelt.jp/00008385/
   - 2016-01-26、BIG最大335枚、製品概要
   - reliability: INDUSTRY
4. K-Navi — プチマーメイド
   - https://p-kn.com/slot/2444/
   - ホール導入開始2016-04-11、設定別確率
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — プチマーメイド
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/100/a.php
   - BIG最大335枚、REG約104枚、ノーマル仕様
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — プチマーメイド設定判別
   - https://www.slopachi-quest.com/article/petit-mermaid/
   - 導入日2016-04-11、約34G/50枚、天井非搭載
   - reliability: ANALYSIS_SINGLE
7. ちょんぼりすた — プチマーメイド
   - https://chonborista.com/slot/kitadenshi/17073/
   - 導入日、天井非搭載、設定別確率の照合
   - reliability: ANALYSIS_SINGLE
8. ぱちんこドキュメント — スペック＆導入情報
   - https://pachinkolist.com/archives/47583611.html
   - 納品開始予定2016-04-10、約34G/50枚、各設定スペック
   - reliability: PERIOD_SECONDARY
9. 5号機クロニクル — 北電子5号機一覧
   - https://5goki.com/kitac
   - 2016/4、機械割照合
   - reliability: ANALYSIS_SINGLE

## missingFields
- 正式型式名・検定番号（今回の再探索で直接固定できず）
- 成立済みボーナス等特殊状態の設定変更/据え置き/純電断契約
- 本機固有の変更判別契約

## conflicts
- 重大な性能数値競合は現時点で確認なし。
- 納品開始2016-04-10とホール導入開始2016-04-11は定義差でありCONFLICTではない。

## QA status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_SPECIAL_STATE
- resetRetroactiveQA: NOT_APPLICABLE_NEW_RECORD
