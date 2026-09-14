# L虚構推理

recordNo: 1787
machineName: L虚構推理
aliases: スマスロ虚構推理 / 虚構推理 / L虚構推理ST
manufacturer: ディ・ライト / Daiichi系
formalModel: L虚構推理ST
inspectionCode: 5S1217
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ボーナス高確ループ
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信、グリーンべると、遊技日本でディ・ライト発表、型式 `L虚構推理ST`、2026-04-06導入を確認。
- HAZUSEで検定番号 `5S1217`、型式、導入日、純増約6枚/G、ベース31Gを確認。
- 1gekiではメーカー欄にIdol（アイドル）表記があるため、業界一次に基づくメーカー正規化はディ・ライトとし、表記差をnotesに保持。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.7%
- setting3: 100.8%
- setting4: 105.5%
- setting5: 109.1%
- setting6: 112.0%
initialHitBySetting:
  bonus:
  - setting1: 1/349.0
  - setting2: 1/341.3
  - setting3: 1/329.3
  - setting4: 1/300.2
  - setting5: 1/279.7
  - setting6: 1/264.8
  cz:
  - setting1: 1/124.5
  - setting2: 1/121.9
  - setting3: 1/118.6
  - setting4: 1/112.5
  - setting5: 1/107.1
  - setting6: 1/103.5
baseGamesPer50: 約31G/50枚
netIncrease: 疑似ボーナス約6.0枚/G
basicPayout:
- あやかしぼーなす: 約50枚
- 虚構推理BONUS（赤7）: 約100枚
- 虚構推理BONUS～SUPER～（青7）: 平均約250枚
- SPECIAL BONUS（白7）: 平均約250枚
modeSpecificMinimumData:
- 通常天井: 虚構真偽間最大1000G、到達でボーナス+雪女ストック1個以上
- 設定変更後: 300Gまたは700G天井へ短縮
- ボーナス後は虚構連モードへ移行。ショート/ミドル/ロングが存在するが通常時全移行表は収集対象外
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態・内部ゲーム数をRESET。
- 天井は通常最大1000Gから最大700Gへ短縮し、300G天井も設定別確率で選択。
- リセット後1回目CZは約20%でエピソード2以上から開始。
- 設定変更後/虚構連終了後1回目CZでボーナス当選時は約50%でSPECIAL BONUSへ昇格。
- リセット後は約50%で高確スタート。
- 内部ゲーム数は12～72G加算され、平均短縮30.9G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の朝一比較表で据え置き時は有利区間・天井・内部状態・ゲーム数を引き継ぐと確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 二次解析では純電源OFF→ON時は天井・内部状態・CZ間カウンタを引き継ぐとされる。
- なな徹の直接表は設定変更/据え置き比較であり、純電断専用列ではないため `SECONDARY_SUPPORTED` として分離。
confidence: ANALYSIS_SINGLE / SECONDARY_SUPPORTED

### gameCounterReset
settingChange: RESET_WITH_INTERNAL_RANDOM_ADD
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_SECONDARY_SUPPORTED
notes:
- 設定変更時は見た目0Gでも内部的に12～72G加算される。平均30.9G短縮。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### ceilingAfterReset
normalCeiling: 最大1000G
resetCeiling: 300G or 700G
resetMaximum: 700G
benefit: ボーナス+雪女ストック1個以上
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時の全モード移行表は対象外。
- 朝一専用の主要な公開優遇として、初回CZ開始エピソード抽選・高確スタート・天井振り分けを保存。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 約50%で高確スタート。
- 据え置きは内部状態引継ぎ。
- 純電源OFF→ONの内部状態は二次資料で引継ぎ支持。
confidence: ANALYSIS_HIGH_FOR_RESET/CARRYOVER / SECONDARY_SUPPORTED_FOR_POWER_CYCLE

### advantageousSectionReset
- なな徹朝一比較表で設定変更時RESET、据え置き時CARRY_OVERを直接確認。
- 純電源OFF→ON単独の有利区間直接文言は再探索後も固定できず一般則で補完しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_WORDING

### resetBenefits
- 最大天井1000G→700Gへ短縮、設定別で300G天井も選択。
- 初回CZは約20%でエピソード2以上スタート。
- 初回CZ成功時は約50%でSPECIAL BONUSへ昇格。
- 約50%で高確スタート。
- 内部ゲーム数12～72G短縮、平均30.9G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の主要な公開不利要素は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更時は内部ゲーム数がランダム加算されるため、なな徹は現時点でリセット/据え置き判別が難しいとしている。
- 朝一700Gを明確に超えて天井非到達の場合は設定変更後最大700Gとは整合しないが、内部前兆等を考慮して単独G数だけでの確定判別とはしない。
- 本機固有ガックン条件/発生率は、機種名・型式・ディ・ライト/Daiichi/Idolと「ガックン/設定変更/据え置き/朝一」を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIFFICULT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetCeilingDistributionBySetting:
- setting1: 300G 6.25% / 700G 93.75%
- setting2: 300G 6.64% / 700G 93.36%
- setting3: 300G 7.42% / 700G 92.58%
- setting4: 300G 8.59% / 700G 91.41%
- setting5: 300G 9.38% / 700G 90.63%
- setting6: 300G 10.16% / 700G 89.84%
firstCzEpisodeOnReset:
- episode1: 79.7%
- episode2: 12.5%
- episode3: 5.5%
- episode4: 1.6%
- episode5: 0.8%
firstCzEpisode2OrHigher: 約20%
firstCzSuccessSpecialBonusUpgrade: 約50%
highStateStartOnReset: 約50%
internalGameShortening: 12～72G / 平均30.9G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- manufacturer表記: 業界一次・HAZUSEはディ・ライト/D-light。1gekiはIdol（アイドル）表記。canonicalはディ・ライトとし、Idol表記を削除せず注記。
- setting4リセット天井振り分けはP-WORLD本文で700G 91.94%と表示される一方、300G 8.59%との合計が100%にならず、なな徹系・Altema・ちょんぼりすた等は700G約91.41%相当。canonicalは300G 8.59% / 700G 91.41%とし、P-WORLD 91.94%を `CONFLICT_LIKELY_TRANSCRIPTION` として扱う。

## sources
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/32845/yugitsushin
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/32868/greenbelt
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-75409/
- HAZUSE: https://hazuse.com/hd/l%E8%99%9A%E6%A7%8B%E6%8E%A8%E7%90%86/
- 必勝本基本スペック: https://hisshobon.com/machineinfo/89674/
- なな徹CZ/初当り/機械割/ベース: https://nana-press.com/kaiseki/machine/1111/35429/
- なな徹朝一・リセット: https://nana-press.com/kaiseki/machine/1111/36137/
- Altema天井・リセット振り分け: https://altema.jp/pachimo/lkyokosuiritenjo
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10436
- 1geki機種概要: https://1geki.jp/slot/l_kyokousuiri/
- なな徹あやかしBONUS: https://nana-press.com/kaiseki/machine/1111/36154/
- 1geki SPECIAL BONUS: https://1geki.jp/slot/l_kyokousuiri/67/
- パチマガスロマガSUPER/SPECIAL: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/d-light_slot/16/bn03.php
- スロベースreset: https://slobase.jp/articles/kyoko-suiri-reset

## missingFields
- 純電源OFF→ON単独の有利区間直接文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一開始ステージの確定条件: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の全CZ内部抽選、全通常モード移行、全虚構連転落率、演出期待度は収集対象外。
- 2026-04-06群6機の4/6として処理。次は真打 吉宗。
- 朝一の内部ゲーム数加算により表示G数と内部天井残Gが一致しないため、客AIの変更判別に利用可能な特性として保存。
