# ヤバチバ

recordNo: 1807
machineName: ヤバチバ
aliases: YABACHIBA / Lヤバチバ / スマスロ ヤバチバ / LヤバチバZM
manufacturer: NET（ネット）
formalModel: LヤバチバZM
inspectionNumber: 5S1800
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス連チャン型 / 沖スロ系 / 完全告知
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1gekiで正式名称、NET、導入開始日2026-07-06、型式 `LヤバチバZM`、検定番号 `5S1800` を確認。
- P-WORLD、Amusement Japan、情報島+、G-netでも2026-07-06導入を一致確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.1%
- setting2: 98.3%
- setting4: 102.9%
- setting5: 105.1%
- setting6: 110.1%
- settingL: UNVERIFIED_PERFORMANCE_VALUE
initialHitBySetting:
  bonusInitial:
  - setting1: 1/398
  - setting2: 1/398
  - setting4: 1/398
  - setting5: 1/398
  - setting6: 1/398
  rainbow7Initial:
  - allPublishedSettings: 1/5716
baseGamesPer50: 約30.7〜30.9G/50枚（ベル集中を除く）
netIncrease:
- BIG_REG: 約6.0枚/G
- bellConcentration: 約1.8〜1.87枚/G
basicPayout:
- BIG: 約110枚
- REG: 約50枚
- rainbow7Bonus: 777枚+α（初回最大1564枚の解析あり。有利区間残枚数次第で777枚未満の場合あり）
modeSpecificMinimumData:
- 通常時は従来型の内部モードなし。毎ゲーム抽選・チェリー直撃・チェリー規定回数でボーナスを目指す。
- ボーナス後の虹7チャレンジは継続率67.2%。
- 虹7モードは77%ループ+継続ストック。
- 通常天井はボーナス間999G+αまたはチェリー40回。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井/内部状態をRESETとする導入後解析を確認。
- チェリー規定回数天井は通常40回から30回へ短縮する値が導入後複数解析で一致。
- 設定変更時は約75%で継続ストックを獲得。獲得ストックは次回ボーナス後32G以内に放出。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは前日の天井進行・内部状態を引き継ぐ扱いを、設定変更/電源OFF→ON比較資料および朝一解析から支持。
- 高優先の設定変更/据え置き/純電断3列一次表は固定できなかったためSECONDARY_SUPPORTED。
confidence: SECONDARY_SUPPORTED

### powerCycleBehavior
- ちょんぼりすたの設定変更/電源OFF→ON直接比較で、電源OFF→ONは天井・内部状態を引継ぎ。
- 別解析でも花笠等の状態引継ぎ記述を確認。
confidence: ANALYSIS_HIGH_FOR_DIRECT_COMPARISON

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_SECONDARY_SUPPORTED
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / SECONDARY_SUPPORTED_FOR_CARRY_OVER

### ceilingAfterReset
normalCeiling:
- gameCeiling: 999G+α
- cherryCountCeiling: 40回
resetSpecific:
- gameCeiling: 999G+α（短縮確認なし）
- cherryCountCeiling: 30回 CANONICAL_POST_RELEASE
benefit: ボーナス当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時に従来型の内部モードは存在しないと複数資料で確認。
- したがって設定変更専用の通常A/B等のモード振り分けはN/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時RESET / 電源OFF→ON引継ぎを導入後解析の直接比較で確認。
- 状態の細かな内部抽選は物差しDB対象外。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断における有利区間処理を、高優先の直接比較資料では固定できず。
- 一般スマスロ仕様から推測補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- チェリー規定回数天井が40回→30回へ短縮。
- 設定変更時約75%で継続ストックを獲得し、次回ボーナス後32G以内に放出。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用のゲーム数天井延長、不利専用モード、初当たり冷遇等は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 朝一チェリー規定回数30回到達による当選は変更推測材料になるが、早い自力当選もあるため到達前の挙動だけで変更確定とはしない。
- データ機で前日チェリー回数を追える環境では据え置き推測材料になるとする解析あり。
- 本機固有ガックン条件/発生率、即時UIによる変更確定条件は検索語・資料系統を変えてもUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_IMMEDIATE_UI_DETECTION

### numericResetData
normalGameCeiling: 999G+α
normalCherryCeiling: 40回
resetCherryCeiling: 30回
resetContinuationStockAcquisitionRate: 約75%
stockReleaseWindow: 次回ボーナス後32G以内
publicResetExpectedValue: NOT_CANONICALIZED_IN_THIS_PASS
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 設定変更時チェリー天井について、G-netの導入前販売概要は `変更:チェリー20回` と記載。一方、導入後の6確、ちょんぼりすた、スロベース等は `30回` で一致。平均せず、導入後複数解析の30回をcanonical、20回を `CONFLICT_PRE_RELEASE_SALES_MATERIAL` として保持。
- 一部二次サイトにも20回表記が残るため、同一由来の可能性を考慮して独立照合とは数えない。

## missingFields
- 設定Lの性能値
- 据え置き単独の高優先3者直接比較
- 有利区間の高優先機種固有直接比較
- 本機固有ガックン条件/発生率
- 公開朝一期待値のcanonical値

## sources
retrievedAt: 2026-09-15
- 1geki 基本/型式/検定: https://1geki.jp/slot/l_yabachiba/
- P-WORLD: https://www.p-world.co.jp/machine/database/10508
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10005262/
- 情報島+: https://p-johojima.jp/machine_spec/post-33959/
- G-net（導入前販売概要・20回競合値）: https://g-net-ps.com/info/s0280/
- 6確: https://www.kaku6.jp/slot/yabachiba/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/257580/
- スロベース機種: https://slobase.jp/machines/yabachiba
- スロベース期待値: https://slobase.jp/articles/yabachiba-expected-value
- ラクパチ朝一: https://www.rakupachi.com/machines/yabachiba/asaichi
