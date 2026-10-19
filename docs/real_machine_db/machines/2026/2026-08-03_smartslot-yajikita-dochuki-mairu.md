# スマスロ やじきた道中記参る！

recordNo: 1810
machineName: スマスロ やじきた道中記参る！
aliases: やじきた道中記参る！ / やじきた参る
manufacturer: ユニバーサルブロス / ユニバーサルエンターテインメント
formalModel: Lやじきた道中記参る！BG
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / 周期CZ経由AT / 上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサルエンターテインメント公式でユニバーサルブロス製、2026年8月導入予定を確認。
- 遊技通信、情報島+、P-WORLD、複数解析で2026-08-03導入を照合。
- 検定通過資料で型式 `Lやじきた道中記参る！BG` を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.7%
- setting3: 100.6%
- setting4: 105.2%
- setting5: 109.5%
- setting6: 114.5%
initialHitBySetting:
  CZ_関所チャレンジ:
  - setting1: 1/231.1
  - setting2: 1/222.7
  - setting3: 1/209.5
  - setting4: 1/191.5
  - setting5: 1/173.1
  - setting6: 1/157.5
  AT_やじきた祭:
  - setting1: 1/473.9
  - setting2: 1/457.5
  - setting3: 1/431.6
  - setting4: 1/388.1
  - setting5: 1/352.1
  - setting6: 1/318.3
baseGamesPer50: 約35.4G/50枚（設定1）
netIncrease:
- やじきた祭: 約2.5枚/G
- やじきたボーナス/巫女ふぇす/超やじきた祭: 約5.0枚/G
basicPayout:
- やじきた祭: 初期50G以上（あっぱれチャンスで決定）
- やじきたボーナス: 20G
- 巫女ふぇす: 20G、終了後上位AT濃厚
- 超やじきた祭: 純増約5.0枚/G、上位AT-CZループ約70%、突入時期待獲得3000枚OVER
modeSpecificMinimumData:
- CZ規定まいる天井: 最大999まいる。
- AT間CZスルー天井: CZ7回目で初期突破期待度100%の関所チャレンジ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのまいる、AT間関所チャレンジ回数、ライブポイントをリセットし、モードを再抽選。
- 設定変更時のモード振り分けは全設定共通で通常B 37.5% / 特殊A 50.0% / 特殊B 12.5%。通常A・天国A/Bは選択されない。
- 特殊Aは最大399まいる。特殊Bは最大999まいるだが次回天国濃厚。
- 関所チャレンジの勝率50%以上の出現が優遇される。
- あっぱれチャンス勝利キャラに設定変更時専用振り分けあり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き（設定変更なし・電源OFF/ON）では、天井までのまいる、AT間関所チャレンジ回数、モード、内部状態、ライブポイントを引き継ぐ解析整理を確認。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_SINGLE_DIRECT_FOR_STATED_STAYOVER_CONTEXT

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのまいる、AT間関所チャレンジ回数、モード、内部状態、ライブポイントを引き継ぐ。
- 液晶表示・開始ステージは高優先資料でも調査中。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
settingChange: RESET_MILE_AND_CZ_COUNT
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 本機は通常G数天井ではなく規定「まいる」管理。設定変更でも通常最大規定まいるそのものは999まいるのままで、特殊A選択時に最大399まいるとなる。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaxMileCeiling: 999まいる
resetOverallMaxMileCeiling: 999まいる
resetModeCeilings:
- 通常B: 最大699まいる / 37.5%
- 特殊A: 最大399まいる / 50.0%
- 特殊B: 最大999まいる / 12.5% / 次回天国濃厚
ATThroughCeiling: AT間CZ7回目
notes:
- 「リセットで一律399まいる天井」とはしない。最大999まいる自体は残り、50%で特殊Aが選ばれることによる実質的な浅い規定まいる選択が恩恵。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 全設定共通: 通常B 37.5% / 特殊A 50.0% / 特殊B 12.5%。
- 設定変更以外の有利区間リセット後は特殊A 100%。設定変更時とは区別する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 必勝本は設定変更時の「状態」を現在調査中、電源OFF/ON時は引継ぎとする。
- 6確/ちょんぼりすた系には設定変更時内部状態RESET表記があるため、直接高優先資料の未確定と二次整理のRESET表記を平均せず `CONFLICT_STATE_RESET_WORDING` として保持。
confidence: CONFLICT / ANALYSIS_HIGH_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更時に有利区間リセットが発生する解析を確認。
- 設定変更以外（エンディング終了後等）の有利区間リセットでは特殊A 100%かつ真剣チャレンジ突入濃厚。真剣チャレンジ恩恵は設定変更時には付与されないため朝一恩恵へ混入しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更後50.0%で特殊A（最大399まいる）。
- 関所チャレンジの勝率50%以上の出現が優遇。
- 設定変更後専用のあっぱれチャンス勝利キャラ振り分け。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 0Gからの設定1リセット期待値シミュレーションは等価 -930円 / 5.6枚交換 -1,529円とする二次解析あり。メーカー公表性能ではないため参考値として分離。
- 設定変更専用の天井延長・冷遇専用モードはNONE_CONFIRMED_AFTER_RESEARCH。
confidence: ANALYSIS_SINGLE_FOR_EXPECTED_VALUE / NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更時は特殊A選択率50%・CZ勝率50%以上出現優遇だが確率的材料であり単独確定条件ではない。
- 特殊Aは設定変更時または設定変更以外の有利区間リセット時にのみ選択される解析があるため、履歴条件と組み合わせた推測材料。
- 液晶表示・開始ステージは調査中。本機固有ガックン条件/発生率は表記・型式・メーカー・朝一/据え置き/電源OFF ON等で再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_MODE_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_IMMEDIATE_UI

### numericResetData
resetModeDistribution_allSettings:
- 通常B: 37.5%
- 特殊A: 50.0%
- 特殊B: 12.5%
resetAppareCharacterDistribution:
- やじさん: 15.2%
- きたさん: 15.6%
- 茜: 25.0%
- くりげ: 25.0%
- 河童: 12.5%
- 天狗: 6.3%
- 弥次&喜多: 0.4%
publicResetExpectedValue_setting1_simulation:
- 等価0G: -930円
- 5.6枚交換0G: -1,529円
notes:
- 期待値はスロベース独自条件（設定1・1G=1.5まいる換算）のシミュレーションでメーカー公表値ではない。
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_MODE_AND_CHARACTER_NUMBERS / ANALYSIS_SINGLE_FOR_EXPECTED_VALUE

## conflicts
- baseGamesPer50: 情報島+の導入後総括に「約30G」とする記述がある一方、P-WORLD・6確・ちょんぼりすた等のスペック表は約35.4G/50枚で一致。本DB canonicalは複数具体スペック表の35.4Gを採用し、`CONFLICT_LOW_PRIORITY_APPROX_30G` を保持。
- stateAfterReset: 必勝本の直接比較表は設定変更時「現在調査中」、一部解析整理は「内部状態リセット」。`CONFLICT_STATE_RESET_WORDING` として未確定を維持。
- リセット天井表現: 「特殊A最大399まいるへの50%移行」を一律天井399まいる短縮とは扱わない。設定変更後も特殊B 12.5%で最大999まいるが存在。

## missingFields
- 設定変更時の独立内部状態処理の高優先確定文言
- 液晶表示・開始ステージの設定変更/純電断差
- 本機固有ガックン条件/発生率
- 即時UIによる変更確定条件
- 検定番号（型式は確認済みだが今回の公開検索で番号を高信頼固定できず）

## sources
retrievedAt: 2026-09-15
- ユニバーサルエンターテインメント公式発売告知: https://www.universal-777.co.jp/news/20260511002496/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/33528/yugitsushin
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-30991/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10489
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/139914/
- パチ&スロ必勝本 モード移行: https://p.hisshobon.jp/machine/4752/1/115821
- パチ&スロ必勝本 通常時: https://hisshobon.com/machineinfo/139927/
- 6確: https://www.kaku6.jp/slot/yajikita/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/259841/
- なな徹: https://nana-press.com/kaiseki/machine/1186/
- スロベース 機種: https://slobase.jp/machines/yajikita-mairu
- スロベース リセット: https://slobase.jp/articles/yajikita-mairu-reset
- こぜログ: https://kozelog.net/machine/universal/yajikita/
