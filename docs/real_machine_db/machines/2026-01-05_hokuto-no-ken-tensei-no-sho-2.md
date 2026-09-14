# スマスロ 北斗の拳 転生の章2

recordNo: 1772
machineName: スマスロ 北斗の拳 転生の章2
aliases: 北斗転生2 / スマスロ北斗転生2 / L スマスロ北斗の拳 転生の章2 MW
manufacturer: 銀座 / サミー
formalModel: L スマスロ北斗の拳 転生の章2 MW
inspectionCode: 5S1206
releaseDate: 2026-01-05
generation: 6.5号機 / スマスロ
systemType: AT / 規定あべし管理 / セット継続
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `L スマスロ北斗の拳 転生の章2 MW`、検定番号 `5S1206`、導入開始日2026-01-05、メーカー銀座を確認。
- 1gekiでも同型式・検定番号・導入日を照合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.4%
- setting3: 100.7%
- setting4: 106.2%
- setting5: 111.1%
- setting6: 114.9%
initialHitBySetting:
  AT:
  - setting1: 1/366.0
  - setting2: 1/357.0
  - setting3: 1/336.3
  - setting4: 1/298.7
  - setting5: 1/283.2
  - setting6: 1/273.1
baseGamesPer50: 約31.5G/50枚
netIncrease: 約4.0枚/G
modeSpecificMinimumData:
- 通常時はモードA / モードB / モードC / 天国の4モードで規定あべしを管理。
- 通常最大天井は1536あべし。モードB最大896、モードC最大576、天国最大128あべし。
- 1473あべし以降でAT当選時はATレベル3以上濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_POWER_CYCLE_AND_STAY_EVIDENCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井あべし、内部状態、有利区間、内部モードをRESET。
- 表示あべしは0に戻るが、内部的にあべしがランダム加算される。
- 最大天井は通常1536あべしから1280あべしへ短縮。
- 内部状態は全設定共通で低確25.0% / 通常25.0% / 高確50.0%へ再抽選。
- 規定あべしモードは設定1でA49.3% / B22.0% / C20.1% / 天国8.6%。
- 設定変更時に伝承ショートへ6.3%で移行する解析あり。ミドル/ロング移行は確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の機種固有朝一比較で据え置き時は有利区間を引き継ぐ。
- 天井・内部状態・モード等は同資料で一部「調査中」表記が残る一方、据え置き時の内部進行を前提とする解析と、1280あべし超過で据え置き濃厚という判別条件を確認。
- 純電源OFF→ONの直接比較では天井・内部状態・有利区間・内部モードを引継ぐため、通常営業の据え置き契約もこれと整合するが、項目別の独立三者表が揃わない部分は断定強度を一段落とす。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION / ANALYSIS_SUPPORTED_FOR_OTHER_CARRY

### powerCycleBehavior
- 1geki機種固有比較で純電源OFF→ON時は天井、内部状態、有利区間、内部モードをすべて引き継ぐ。
- 液晶の表示あべしは0に戻るが、内部あべしは引き継ぐ。
confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC_DIRECT_TABLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_SUPPORTED
powerCycle: CARRY_OVER
notes:
- 本機の天井管理はゲーム数ではなく規定「あべし」。
- 設定変更後は内部あべし加算があるため、見た目0あべしと内部進行は一致しないことがある。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 最大1536あべし
resetCeiling: 最大1280あべし
resetShortening: YES_256_ABESHI_MAX_SHORTENING
otherResetCeilingEffects:
- 設定変更後は内部あべしがランダム加算。
- 設定変更時の256あべし以内規定選択率は設定1 36.4% / 2 37.1% / 3 41.0% / 4 47.7% / 5 51.4% / 6 52.6%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定1の設定変更時モード振り分け: A 49.3% / B 22.0% / C 20.1% / 天国 8.6%。
- モードAでも設定変更時は最大1280あべしへ短縮。
confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### stateAfterReset
- 設定変更時: 低確25.0% / 通常25.0% / 高確50.0%（全設定共通）。
- 伝承モードは設定変更時に伝承ショート6.3%移行の解析を確認。
- 純電源OFF→ONでは内部状態を引継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時は有利区間RESET、据え置きはCARRY_OVER。
- 純電源OFF→ONも有利区間CARRY_OVER。
- 通常営業中はスペシャルエンディング後も有利区間リセット。そこから上位CZ「天撃」へ移行する恩恵は設定変更時を除くため、朝一恩恵には混入しない。
- 有利区間ランプで設定変更/据え置き判別はできない。
confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### resetBenefits
- 最大天井1536→1280あべしへ短縮。
- 高確スタート50.0%。
- 設定1でもモードB以上合計50.7%、天国8.6%。
- 256あべし以内規定選択率は36.4%～52.6%で設定差あり。
- 伝承ショート6.3%スタートの解析あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の規定あべし進行、内部状態、モード、有利区間は設定変更で失われるため、前日が有利な進行状態なら据え置きより不利になり得る。
- スペシャルエンディング後の有利区間リセットに付く「天撃」恩恵は設定変更時には適用されない。
- 設定変更固有の冷遇率・出玉抑制率などは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_PROGRESS / NONE_CONFIRMED_FOR_NUMERIC_PENALTY

### resetDetection
- 朝一は見た目のあべし表示がリセットされるため、表示だけで設定変更/据え置きを判別するのは困難。
- 1280あべし到達で天井が発動しなければ据え置き濃厚。
- 有利区間ランプによる変更判別は不可。
- `北斗転生2 / Lスマスロ北斗の拳転生の章2MW + ガックン / リールガックン / 設定変更 / 据え置き` を再探索したが、本機固有のガックン条件・発生率を主要解析で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_1280_ABESHI_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaxCeiling: 1536あべし
resetMaxCeiling: 1280あべし
resetStateDistribution:
- low: 25.0%
- normal: 25.0%
- high: 50.0%
resetModeDistributionSetting1:
- modeA: 49.3%
- modeB: 22.0%
- modeC: 20.1%
- heaven: 8.6%
resetWithin256SelectionRate:
- setting1: 36.4%
- setting2: 37.1%
- setting3: 41.0%
- setting4: 47.7%
- setting5: 51.4%
- setting6: 52.6%
resetDensyoShortRate: 6.3%
morningAggregateAthitRate: PUBLIC_AGGREGATE_RATE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- AT初当り、機械割、ベース、純増はなな徹・HAZUSE・必勝本・1gekiで一致し重大CONFLICTなし。
- 型式の空白・全角表記差は同一型式として正規化。
- 設定変更時の有利区間リセット後に通常営業の「天撃」恩恵を付与する解釈は誤り。なな徹が設定変更時を明示的に除外しているためcanonicalから除外。
- 据え置きの全内部項目を一括で直接断定する三者比較表は不足しているため、純電断直接表と区別して信頼度を保持。

## sources
retrievedAt: 2026-09-15
- HAZUSE 基本情報/型式/検定/性能: https://hazuse.com/machine/pachislot/5S1206/
- なな徹 基本性能: https://nana-press.com/kaiseki/machine/1059/33041/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1059/33026/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1059/33027/
- 1geki 機種総合: https://1geki.jp/slot/l_hokuto_tensei2/
- 1geki 天井/朝一/電源OFF ON: https://1geki.jp/slot/l_hokuto_tensei2/3/
- 1geki モード: https://1geki.jp/slot/l_hokuto_tensei2/45/
- 1geki 内部状態: https://1geki.jp/slot/l_hokuto_tensei2/43/
- 1geki 設定差: https://1geki.jp/slot/l_hokuto_tensei2/0/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4636/1/113078
- パチビー: https://www.pachibee.jp/machines/kouryaku/225110007
- ジャグラーズネット（補助照合）: https://jugglersnet.com/chumoku/hokuto-tensei2

## qaNotes
- resetBehavior v0.7を性能完了判定とは別管理。
- 実機完全再現用の詳細内部抽選は対象外。
- retro resetBehavior QAの既処理カーソルは `2007-07-09_genju-haou-t.md` のまま維持。本線処理中にその直後の実体順レコードを安全に一意固定できなかったため、外部導入順から推測更新していない。
