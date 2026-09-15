# スマスロ とんでもスキルで異世界放浪メシ

recordNo: 1812
machineName: スマスロ とんでもスキルで異世界放浪メシ
aliases: Lとんでもスキルで異世界放浪メシ / とんスキ
manufacturer: コナミアミューズメント
formalModel: LとんでもスキルKM
inspectionNumber: 5S1909
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / 擬似BONUS+ST / 上位ST搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- コナミアミューズメント公式発表・業界資料で2026-08-03全国稼働を確認。
- 情報島+の検定通過記事、G-netで型式 `LとんでもスキルKM`、HAZUSEで検定番号 `5S1909` を確認。
confidence: OFFICIAL / INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.1%
- setting3: 101.0%（必勝本のみ101.1%表記あり、CONFLICT保持）
- setting4: 105.3%
- setting5: 109.1%
- setting6: 112.1%
initialHitBySetting:
  CZ:
  - setting1: 1/216.7
  - setting2: 1/215.6
  - setting3: 1/212.7
  - setting4: 1/203.7
  - setting5: 1/195.3
  - setting6: 1/189.5
  bonusInitialHit:
  - setting1: 1/349.3
  - setting2: 1/339.2
  - setting3: 1/322.4
  - setting4: 1/286.5
  - setting5: 1/263.7
  - setting6: 1/247.3
baseGamesPer50: 約32.4G/50枚
netIncrease:
- BONUS/ST増加区間: 約5.0枚/G
- 神託の儀等の一部現状維持区間: 約0.3枚/G
basicPayout:
- オープニングBONUS: 初期100枚
- 異世界ハンティングタイム: 25G+α / ループ率約70%
- 女神SPECIAL TIME: ループ率約82%
- 超女神SPECIAL TIME: 32G+α / ループ率約93%
modeSpecificMinimumData:
- 通常時ゲーム数天井: 最大1000G+α、オープニングBONUS当選。
- モードA/B/C/D/天国/超天国で規定G数を管理。最大は順に1000/650/450/250/100/100G+α。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE_WITH_OFFICIAL_RESET_DISCLOSURE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はゲーム数・各CZポイント・天井をRESETし、天井最大650G+αへ短縮。
- コナミ公式「おしえて中の人」2026-09-14公開で、内部ゲーム数を0〜31Gランダム加算、モード振り分け優遇、各キャラ規定CZポイント振り分け優遇を確認。
- 公式ではモードA（1000G+α）は選択されずモードB以上。設定1でも天国20%、モードD20%。
- 初当たりBONUS前にCZ当選時は「特殊モード」期待大。特殊モードではCZ成否を問わず次回該当CZポイント規定振り分けが優遇。
confidence: OFFICIAL / ANALYSIS_HIGH

### carryOverBehavior
- なな徹の設定変更/据え置き比較で、据え置きは有利区間・天井・ゲーム数・CZポイント・内部状態・モードを引継ぎ。
- 液晶開始ステージは設定変更/据え置きともフェーネン王国（昼）。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 一撃の直接比較で電源OFF→ON（電断後3時間以上）はゲーム数・各CZポイント・天井G数を引継ぎ。液晶ステージはフェーネン王国（昼）。
- 内部状態/モードの純電断直接列挙は二次資料にあるが、設定変更/据え置き比較ほど高優先の複数固定はせず、ゲーム数/CZポイント/天井をcanonicalとする。
confidence: ANALYSIS_HIGH_FOR_COUNTERS

### gameCounterReset
settingChange: RESET_WITH_INTERNAL_0_TO_31G_RANDOM_ADD
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: OFFICIAL_FOR_RESET_ADD / ANALYSIS_HIGH_FOR_CARRY

### ceilingAfterReset
normalGameCeiling: 最大1000G+α
resetGameCeiling: 最大650G+α
resetModeFloor: モードB以上（モードA非選択）
confidence: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 公式: モードB以上から選択。設定1でも天国20%、モードD20%。
- したがって設定1では少なくとも40%が250G+α以内の規定G数モード。
- モードB/Cおよび超天国を含む完全振り分けは今回公式固定せず。
confidence: OFFICIAL

### stateAfterReset
- なな徹比較表では設定変更時RESET、据え置き時引継ぎ。
- 純電断の内部状態については一部二次資料で引継ぎ表記あり。高優先直接三者比較不足のため純電断詳細は慎重扱い。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_VS_STAYOVER

### advantageousSectionReset
- なな徹は設定変更時RESET、据え置き時引継ぎと明記。
- エンディングPREMIUM BONUS終了後も有利区間リセット候補だが実戦上予想を含むため、朝一設定変更契約とは分離。
- 設定変更時は、通常の有利区間リセット後に付くとされる女神降臨恩恵の対象外。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_INFERENCE_FOR_ENDING_TIMING

### resetBenefits
- 最大天井1000G+α→650G+α。
- 内部ゲーム数0〜31Gランダム加算。
- モードB以上確定。設定1でも天国20%、モードD20%。
- 各キャラ規定CZポイント振り分け優遇。
confidence: OFFICIAL

### resetPenalties
- 設定変更時専用の天井延長・明示的冷遇はNONE_CONFIRMED_AFTER_RESEARCH。
- 有利区間リセット後の女神降臨恩恵は設定変更時には付かないため、通常の区間切断恩恵と朝一を混同しない。
confidence: ANALYSIS_HIGH / NONE_CONFIRMED_FOR_EXPLICIT_PENALTY

### resetDetection
- 設定変更/据え置きとも開始ステージがフェーネン王国（昼）のためステージ単独判別不可。
- 650G+α短縮、内部0〜31G加算、モード優遇は事後推測材料。
- なな徹は現時点で有効な即時リセット判別方法は判明していないとする。
- 本機固有ガックン条件/発生率は機種名・型式・メーカー・ガックン等で再探索したがUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetGameCeiling: 650G+α
normalGameCeiling: 1000G+α
internalGameAddAtReset: 0〜31G
resetModeConstraint: モードB以上
setting1ResetModeD: 20%
setting1ResetHeaven: 20%
setting1Within250GModeMinimum: 40%（モードD+天国の公開値合算。超天国等を含む完全表ではない）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: OFFICIAL

## conflicts
- payout setting3: G-net/6確等は101.0%、必勝本は101.1%。複数一致の101.0%をcanonical、101.1%を丸め/資料差CONFLICTとして保持。
- bonusInitialHit setting5: G-net掲載表のみ1/286.7だが、必勝本・6確・複数解析は1/263.7で一致。1/263.7をcanonical、G-net値を `CONFLICT_LIKELY_TABLE_TYPO_SETTING5_INITIAL_HIT_1_286_7` として保持。
- 有利区間のエンディング切断タイミングは解析側に実戦上予想を含むため、設定変更時RESETの確定度と分離。

## missingFields
- モードB/C/超天国を含む設定変更時の完全モード振り分け
- 設定変更時CZポイント規定の具体的全振り分け
- 純電断時の内部状態/モードを高優先資料で直接列挙した三者比較
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- コナミ公式 おしえて中の人「リセット時の挙動について」(2026-09-14): https://kam-pp-stats.konami.net/axz/html/oshiete/article/39/
- コナミ公式製品: https://www.konami.com/amusement/psm/slot/tondemoskill/00_tz.html
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-28691/
- G-net: https://g-net-ps.com/info/s0283/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1909/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4756/1/115605
- 一撃 天井/朝一: https://1geki.jp/slot/l_tonsuki/3/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/1148/
- 6確: https://www.kaku6.jp/slot/tonsuki/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/260742/
- スロベース: https://slobase.jp/machines/tondemo-skill
