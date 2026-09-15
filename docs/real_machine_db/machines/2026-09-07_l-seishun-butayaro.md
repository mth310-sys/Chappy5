# No.1820 L青春ブタ野郎はバニーガール先輩の夢を見ない

status: COMPLETE_CORE_WITH_RESET_RESEARCH
retrievedAt: 2026-09-15

machineName: L青春ブタ野郎はバニーガール先輩の夢を見ない
manufacturer: オリンピア / 平和グループ
formalModel: L青春ブタ野郎L1
releaseDate: 2026-09-07
generation: 6.5号機 / スマスロ
systemType: AT（CZ→疑似ボーナス→完走型ST）
settings: L / 2 / 3 / 4 / 5 / 6（設定1非搭載）
payoutRateBySetting: 設定2 98.1% / 3 99.3% / 4 105.3% / 5 108.4% / 6 110.3%（設定L非公開）
initialHitBySetting:
- 青春ボーナス初当り: 1/350.8 / 1/336.5 / 1/295.1 / 1/274.6 / 1/207.8（設定2/3/4/5/6）
baseGamesPer50: 約31.5G/50枚
netIncrease: 約8.0枚/G
basicPayout:
- 青春ボーナス後は完走型ST「青ブタJUDGE」へ。
- STは2G×4セット+α（計8G+α）、1回のSTで複数ボーナスストック可能。
- 上位ST「青春ブタ野郎は∞の夢を見る」はVストック期待度約80%、上位中ボーナス平均約640枚、突入時期待獲得枚数約3100枚（設定2基準表記）。

## resetBehavior v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_UNVERIFIED_FIELDS
settingChangeBehavior:
- 設定変更時はボーナス間天井が通常最大899G+αから699G+αへ短縮。
- 機種固有解析では有利区間・内部状態・思春期ポイント・不可思議モード・咲太ポイントをRESET/再抽選方向。
- 朝一の思春期ポイント表示は「??」になるとする解析あり。
carryOverBehavior:
- 据え置きは設定変更を伴わない運用として、天井・内部状態を引き継ぐ方向を機種固有比較資料が支持。
- 思春期ポイント等の個別カウンタについて据え置き独立三者比較は十分な再探索後も固定できず、UNVERIFIED_DIRECT_THREE_WAY_AFTER_RESEARCH。
powerCycleBehavior:
- 電源OFF→ONのみ: 天井・内部状態を引継ぎとする機種固有比較あり。
- 思春期ポイント/不可思議モード/咲太ポイントの純電断個別直接比較は十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
gameCounterReset:
- 設定変更: ボーナス間天井契約を再セットし699G+α短縮。
- 据え置き/純電断: 天井引継ぎ方向。
ceilingAfterReset:
- 思春期ポイント天井: 最大1000ptでCZ当選濃厚。
- CZ間ゲーム数天井: 最大560G+αでCZ当選濃厚。
- 通常ボーナス間天井: 最大899G+αで青春ボーナス当選濃厚。
- 設定変更後/ST駆け抜け後: ボーナス間最大699G+αへ短縮。
- CZ6回連続失敗後、7回目CZ成功濃厚（ボーナス到達契機）。
modeAfterReset:
- 不可思議モードは設定変更でRESET/再抽選方向の解析あり。
- 設定変更時専用の各不可思議モード具体振り分け率は再探索後もUNVERIFIED_AFTER_RESEARCH。
stateAfterReset:
- 内部状態は設定変更RESET / 電源OFF→ON CARRY_OVERとする機種固有比較あり。
- 思春期ポイント・咲太ポイントは設定変更でRESET方向。
advantageousSectionReset:
- 設定変更時RESETとする機種固有解析あり。
- 純電断時の有利区間そのものを独立欄で直接比較する高優先資料は今回固定できずUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
resetBenefits:
- ボーナス間天井899G+α→699G+α短縮。
- ただし同じ699G+α短縮はST駆け抜け時にも適用されるため「朝一専用恩恵」とは扱わない。
resetPenalties:
- 設定変更固有の主要不利要素は多語再探索後も確認できずNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection:
- リセット判別に使える開始ステージ差は現時点で公表確認できず。
- 思春期ポイント「??」表示は朝一挙動資料あり。ただし純電断/据え置き側との完全な比較条件が固定できないため単独確定判別には使用しない。
- 699G+α短縮は事後的な設定変更推測材料だがST駆け抜け後にも同条件がある。
- 本機固有ガックン条件/発生率、即時固定ランプ判別は機種名/型式/メーカー＋設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索後もUNVERIFIED_AFTER_RESEARCH。
numericResetData:
- 通常ボーナス間天井: 899G+α
- 設定変更/ST駆け抜け後ボーナス間天井: 699G+α
- CZ間天井: 560G+α
- 思春期ポイント天井: 最大1000pt
- スロベース独自天井シミュレーション0G: 通常天井到達率9.91%・平均投資11137円 / 短縮時到達率16.57%・平均投資10313円（非メーカー公表、条件付き）
- 同200G: 通常16.57%・10313円 / 短縮27.72%・8935円。
- 同300G: 通常21.43%・9712円 / 短縮35.84%・7931円。

## QA notes
- 1geki、必勝本、ちょんぼりすた、ジャグラーズネット、スロベースで設定2〜6の初当り/主要性能を照合。設定1非搭載・設定L搭載を複数解析で確認。
- 機械割98.1/99.3/105.3/108.4/110.3%は複数解析系統で一致。設定L性能は非公開として数値補完しない。
- パチビーの短縮説明に「899G+αに短縮」と読める表記があり、通常899G+αと同値で他複数資料の699G+αと競合するため、CONFLICT_SOURCE_WORDING_ERROR_CANDIDATEとしてcanonical不採用。1geki/ちょんぼりすた/スロベース/ジャグラーズネットの699G+α一致を採用。
- 朝一の天井短縮はST駆け抜け時にも同一契約のため、リセット固有価値を過大評価しない。
- 完全再現用のST成立役別抽選等は今回スコープ外。

## sources
- 平和ティザー/導入告知を伝える1geki: https://1geki.jp/repo/20260603heiwa/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/138753/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/142469/
- 必勝本 上位ST: https://hisshobon.com/machineinfo/142509/
- 1geki 天井/朝一: https://1geki.jp/slot/l_ao_buta/3/
- 1geki 設定差: https://1geki.jp/slot/l_ao_buta/0/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/261018/
- スロベース 機種解析: https://slobase.jp/machines/aobuta
- スロベース reset: https://slobase.jp/articles/aobuta-reset
- ジャグラーズネット: https://jugglersnet.com/chumoku/aobuta
- イチカツ: https://ichikatsu.com/aobuta/
- パチビー（短縮表記CONFLICT確認）: https://www.pachibee.jp/machines/kouryaku/226070002

confidence:
- core: ANALYSIS_HIGH_MULTI_SOURCE
- formalModel: ANALYSIS_HIGH_MULTI_SOURCE
- payout: ANALYSIS_HIGH_MULTI_SOURCE
- resetCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycle: ANALYSIS_SINGLE_TO_MULTI_SUPPORTED
- advantageousSection: ANALYSIS_HIGH
- resetNumericSimulation: ANALYSIS_SINGLE_NON_OFFICIAL
- resetModeNumeric: UNVERIFIED
- resetDetectionImmediate: UNVERIFIED

missingFields:
- 設定変更時不可思議モード各振り分け率
- 思春期ポイント/不可思議モード/咲太ポイントの純電断個別直接比較
- 有利区間の純電断直接比較欄
- 本機固有ガックン条件/発生率、固定ランプ判別
- 設定変更/据え置き/純電断の開始ステージ三者確定情報

conflicts:
- パチビーに設定変更/ST駆け抜け時のボーナス間短縮を「最大899G+α」とする表記があり、1geki/ちょんぼりすた/スロベース/ジャグラーズネットの699G+αと競合。平均せず、複数一致の699G+αをcanonical採用し、パチビー表記をCONFLICT_SOURCE_WORDING_ERROR_CANDIDATEとして保持。
