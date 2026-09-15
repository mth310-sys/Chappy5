# スマスロ とある魔術の禁書目録2

recordNo: 1813
machineName: スマスロ とある魔術の禁書目録2
aliases: Lとある魔術の禁書目録2 / インデックス2
manufacturer: 藤商事
formalModel: Lとある魔術の禁書目録2FA
inspectionNumber: 5S1883
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由ゲーム数管理型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 藤商事公式PVおよび業界記事で2026-08-03全国導入開始を確認。
- HAZUSEで型式 `Lとある魔術の禁書目録2FA`、検定番号 `5S1883` を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.7%
- setting3: 100.0%
- setting4: 104.5%
- setting5: 108.2%
- setting6: 113.3%
initialHitBySetting:
  CZ:
  - setting1: 1/235.6
  - setting2: 1/233.4
  - setting3: 1/230.8
  - setting4: 1/222.3
  - setting5: 1/215.8
  - setting6: 1/207.2
  AT:
  - setting1: 1/398.8
  - setting2: 1/394.5
  - setting3: 1/389.6
  - setting4: 1/369.5
  - setting5: 1/358.0
  - setting6: 1/338.4
baseGamesPer50: 約30.8〜31G/50枚
netIncrease:
- mainAT: 約4.0枚/G
- CZ: 約2.2枚/G
- ending: 約7.0枚/G（解析資料）
basicPayout:
- 幻想殺しRUSH: ゲーム数管理AT、純増約4.0枚/G
- 超電磁砲CHANCE: 10G、成功期待度約52%、純増約2.2枚/G
- 一方通行CHANCE: 成功期待度約80%
- とある運命の上乗遊技: 小役成立で報酬昇格、小役確率約1/2.1
modeSpecificMinimumData:
- AT間実ゲーム数天井: 1200G、AT当選。
- CZ間表示ゲーム数天井: 800G+α、CZまたはAT当選。
- 通常時モード: 朝イチ / 通常A / 通常B / 天国準備 / 天国。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態をRESET。
- AT間実G天井は1200G→777Gへ短縮。
- CZ間表示G天井は800G+α→200G+αへ短縮。
- 必勝本では状態を再抽選、実戦上ロシアステージ開始。
- 朝イチ専用モードへ移行し、200Gが天井。モードは設定変更/有利区間リセット時に先3回分が振り分けられる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の設定変更/据え置き比較で、据え置きは有利区間・天井・内部状態を引継ぎ。
- モードも電源OFF/ON資料および複数解析で引継ぎ扱い。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本の設定変更/電源OFF ON直接比較で、天井までのゲーム数・モード・状態を引継ぐ。
- すろぱちくえすとは有利区間も電源OFF/ONで引継ぎと整理。
- 電源OFF/ON時の開始ステージは高優先直接資料では現在調査中。
confidence: ANALYSIS_HIGH

### gameCounterReset
settingChange: RESET_WITH_TWO_SHORTENED_CEILINGS
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalATCeiling: 1200実G
resetATCeiling: 777実G
normalCZCeiling: 800表示G+α
resetCZCeiling: 200表示G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝イチ専用モードへ移行。朝イチモード天井は200G。
- 必勝本では設定変更/有利区間リセット時に3回先までモードを振り分けるとする。
- 朝イチ後は次回天国移行率が優遇。
- 朝イチ専用モードの具体振り分け率は今回確認できず。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 再抽選/RESET。
- 据え置き: 引継ぎ。
- 電源OFF/ON: 引継ぎ。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- なな徹: 設定変更時RESET、据え置き時引継ぎ。
- すろぱちくえすと: 電源OFF/ON時引継ぎ。
- エンディング等の通常有利区間リセット時には「とある運命の上乗遊技（報酬優遇）+フィアンマBATTLE」の恩恵があるが、朝一設定変更契約とは分離する。
confidence: ANALYSIS_HIGH

### resetBenefits
- AT間天井1200G→777G。
- CZ間天井800G+α→200G+α。
- 朝イチ専用モード。朝イチ後は次回天国移行率優遇。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の明示的な天井延長・初当り冷遇はNONE_CONFIRMED_AFTER_RESEARCH。
- 通常の有利区間切断後恩恵は設定変更時と同一とは確認せず、朝一恩恵へ混入しない。
confidence: NONE_CONFIRMED / ANALYSIS_HIGH

### resetDetection
- 必勝本では設定変更時は実戦上ロシアステージ開始。
- 一方、なな徹では設定変更/据え置きの開始ステージを現在調査中とし、有効な即時リセット判別方法は判明していないとしているため、ロシア開始は確定判別ではなく実戦上の補助材料とする。
- 777G/200G+α短縮は事後判別材料。
- 本機固有ガックン条件/発生率は機種名・型式・藤商事・リセット/ガックン等で再探索したがUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_STAGE_OBSERVATION / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetATCeiling: 777実G
normalATCeiling: 1200実G
resetCZCeiling: 200表示G+α
normalCZCeiling: 800表示G+α
resetMorningModeCeiling: 200G
allSituationWithin200G_CZorATExpectation: 45.1%（全状況平均値でありリセット専用値ではないため参考値）
publicResetExpectedValue:
- なな徹掲載リセット狙い目: 等価200G〜 / 5.6枚350G〜（期待値1000円超基準）
- ハイエナビ実測朝イチ初回AT間（据え置き混在）0G: -511円、初回CZ間0G: -103円。純リセット専用期待値ではないため分離保存。
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / OBSERVATIONAL_FOR_EXPECTED_VALUE

## conflicts
- 開始ステージ: 必勝本は設定変更時「実戦上ロシアステージ」、なな徹は設定変更/据え置きとも現在調査中。`CONFLICT_EVIDENCE_STRENGTH_START_STAGE` として、ロシア開始を確定判別には使わない。
- baseGamesPer50: 約30.8G/50枚と約31G/50枚の資料差は丸め差として保持。

## missingFields
- 朝イチ専用モードの具体振り分け率
- 設定変更時のゲーム数ランダム加算量（存在を記す低優先資料はあるが高優先固定値未確認）
- 電源OFF/ON時の開始ステージ
- 本機固有ガックン条件/発生率
- 純リセット台だけに限定した0G期待値

## sources
retrievedAt: 2026-09-15
- 藤商事公式PV: https://www.youtube.com/watch?v=INazzWB9yjw
- Amusement Japan発表: https://www.amusement-japan.co.jp/article/detail/10005269/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1883/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/140171/
- 必勝本 モード: https://hisshobon.com/machineinfo/140241/
- 必勝本 基本ページ: https://hisshobon.com/machines/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E3%81%A8%E3%81%82%E3%82%8B%E9%AD%94%E8%A1%93%E3%81%AE%E7%A6%81%E6%9B%B8%E7%9B%AE%E9%8C%B22/
- なな徹: https://nana-press.com/kaiseki/machine/1154/
- ジャグラーズネット: https://jugglersnet.com/chumoku/toarumajutsuno2
- すろぱちくえすと: https://www.slopachi-quest.com/article/toaru-majutsu-no-kinsho-mokuroku-2-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/260325/
- P-WORLD: https://www.p-world.co.jp/machine/database/10516
- ハイエナビ: https://haienavi.com/machines/index2
