# スマスロ 聖戦士ダンバイン

recordNo: 1690
machineName: スマスロ 聖戦士ダンバイン
aliases: L聖戦士ダンバイン / Lスマスロ聖戦士ダンバイン / Lスマスロ聖戦士ダンバインMF
manufacturer: 銀座製造 / サミー販売
formalModel: Lスマスロ聖戦士ダンバインMF
inspectionCode: 430531
releaseDate: 2024-12-02
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + 高継続ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- サミー公式製品ページが現存。
- 遊技通信はサミー発表機として型式名 `Lスマスロ聖戦士ダンバインMF`、銀座製を明記。
- HAZUSEは検定番号 `430531`、型式名 `L スマスロ 聖戦士ダンバイン MF`、導入開始日2024-12-02を掲載。
- Amusement Japan / P-WORLD業界記事でも2024-12-02導入で一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.5%
- setting4: 104.1%
- setting5: 109.0%
- setting6: 114.4%
initialHitBySetting:
- setting1: ボーナス 1/355.8 / ST 1/597.7
- setting2: ボーナス 1/351.6 / ST 1/588.4
- setting3: ボーナス 1/342.7 / ST 1/572.5
- setting4: ボーナス 1/332.9 / ST 1/552.5
- setting5: ボーナス 1/319.7 / ST 1/528.0
- setting6: ボーナス 1/307.7 / ST 1/505.6
baseGamesPer50: 約31.5G/50枚
netIncrease: 約6.0枚/G
basicPayout:
- フェラリオボーナス: 約50枚 / 終了後チャンスタイムでST抽選
- オーラボーナス: 約100枚 / ST「ダンバインRUSH」突入濃厚
- HYPERオーラボーナス: 約100枚 / 上位ST「ビルバインRUSH」突入濃厚
- ダンバインRUSH: 25G ST / 継続率約91%
- ビルバインRUSH: 25G ST / 継続率約94%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定オーラカウンタ到達、CZ等から初当りボーナスを目指す周期管理型。
- 通常ゲーム数天井: 最大763G+αで初当りボーナス。
- 通常周期天井: 最大8周期目で初当りボーナス。
- CZはミッションモード（10G・成功期待度約30%）とアタックモード（20G+α・成功期待度約55%）。
- 上位ST「ビルバインRUSH」は継続率約94%、AT純増は通常ST/上位STとも約6.0枚/G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_POWER_CYCLE_ADVANTAGEOUS_SECTION_DIRECT_STATEMENT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、ゲーム数、オーラカウンタをリセット/再抽選する。
- ゲーム数は表示上0Gから開始するが、内部で0～110Gを加算。
- オーラカウンタも表示上リセットされ、内部で0～16ptを加算。
- オーラ役高確関連ゲーム数もリセット後、内部的にランダム加算される。
- 周期天井は通常最大8周期から最大5周期へ短縮。
- 種配列は `赤・緑・赤・緑・赤・緑・緑・紫`、開始ステージはダンバイン飛行（昼）ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、内部ゲーム数、オーラカウンタを引き継ぐ。
- 液晶表示は朝一でリセットされるため、内部ゲーム数・内部オーラカウンタと見た目が一致しない場合がある。
- 周期天井短縮は設定変更時のみで、据え置きは前日の周期進行を内部で継続する。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは、必勝本の機種別比較で天井までのゲーム数、天井までの周期数、オーラカウンタ、状態、オーラ高確を引き継ぐことを確認。
- 種配列は設定変更時と同じ `赤・緑・赤・緑・赤・緑・緑・紫`、通常時の開始表示はダンバイン（昼）ステージ。通常時以外のステージは引継ぎとされる。
- 純電源OFF→ON時の有利区間そのものについて、機種固有の直接記載は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。内部天井/周期/状態が引き継がれることから一般仕様で補完しない。
confidence: ANALYSIS_HIGH_FOR_COUNTER_STATE_CARRY / UNVERIFIED_FOR_DIRECT_ADVANTAGEOUS_SECTION_STATEMENT

### gameCounterReset
- 設定変更: 表示ゲーム数0へリセット。ただし内部で0～110Gを加算。
- 据え置き: 内部ゲーム数を引き継ぐ。
- 純電源OFF→ON: 天井までのゲーム数を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大763G+α
normalCycleCeiling: 最大8周期目
resetGameCeiling: ゲーム数天井763G+α自体の短縮は確認なし（ただし内部0～110G加算）
resetCycleCeiling: 最大5周期
reset3CycleHitExpectation: 90%以上
benefit: 初当りボーナス当選
- リセット後は周期天井のみ明示的に5周期へ短縮。ゲーム数は0～110G内部加算されるため見た目上の到達時期が前倒しされ得る。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等の独立した名称付きモード振り分けは本機の朝一必須値として確認されない。
- 朝一は周期天井5周期、内部ゲーム数0～110G加算、オーラカウンタ0～16pt加算という専用リセット契約を持つ。
- 種配列は固定 `赤・緑・赤・緑・赤・緑・緑・紫`。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 内部状態を再抽選。
- 据え置き: 内部状態を引き継ぐ。
- 純電源OFF→ON: 状態を引き継ぐ。
- 設定変更時の通常/高確/超高確/極高確の具体的初期振り分けは、主要解析・旧DBを再探索しても固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY / UNVERIFIED_FOR_INITIAL_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引き継ぎ。
- 純電源OFF→ON時: 機種固有の直接記載は `UNVERIFIED_AFTER_RESEARCH`。
- 通常営業中の有利区間リセット時は上位ST「ビルバインRUSH」（準備状態含む）へ移行する恩恵があるが、解析資料は `設定変更時を除く` と明記しているため、朝一設定変更恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_DIRECT_POWER_CYCLE

### resetBenefits
- 周期天井を最大8周期から最大5周期へ短縮。
- 3周期以内のボーナス当選期待度90%以上。
- 内部ゲーム数0～110G加算。
- オーラカウンタ0～16pt加算。
- 設定変更後、初回ボーナス当選までの機械割は103%以上と解析される。
- 朝一のみ内部リアルボーナス作動によりSTANDBY画面が出現する可能性があり、特定G数消化後にオーラジャッジへ移行してオーラボーナスまたはフェラリオボーナスに当選する場合がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の天井ゲーム数、周期進行、オーラカウンタ、内部状態などの蓄積はリセットされる。
- ただし本機は周期天井5周期短縮と内部加算の明確な朝一優遇を持つため、設定変更固有の追加的不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更でも据え置き/電源断でも朝一の液晶表示がリセットされるため、表示ゲーム数やオーラカウンタだけでは確定判別不可。
- 設定変更時は内部0～110G、0～16ptの加算があるため、オーラ高確移行や規定ポイントの見た目上のズレは変更期待材料になり得るが、据え置きでも内部値引継ぎによりズレるため単独の確定要素ではない。
- 5周期を超えてボーナス非当選なら設定変更契約と整合しないため据え置き推測材料となる。ただしデータ取り・周期判定誤りを考慮し確定扱いしない。
- なな徹のリセット判別は「現在調査中」。
- `スマスロ 聖戦士ダンバイン` / 正式型式 / サミー / 銀座と「ガックン・朝一・設定変更・据え置き・リセット判別・電源OFF ON」を組み替えて再探索したが、本機固有ガックン発生条件・発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 763G+α
normalCycleCeiling: 8周期目
resetGameCeiling: 763G+α（固定短縮なし / 内部0～110G加算）
resetCycleCeiling: 5周期
resetThreeCycleHitExpectation: 90%以上
settingChangeInternalGameAddition: 0～110G
settingChangeAuraCounterAddition: 0～16pt
settingChangeAuraHighGameAddition: ランダム加算 / 詳細振り分けPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
settingChangeGameCounter: RESET_WITH_INTERNAL_ADDITION
carryOverGameCounter: CARRY_OVER_INTERNAL
powerCycleGameCounter: CARRY_OVER
settingChangeCycleCounter: RESET / 最大5周期
carryOverCycleCounter: CARRY_OVER
powerCycleCycleCounter: CARRY_OVER
settingChangeInternalState: RESELECT
carryOverInternalState: CARRY_OVER
powerCycleInternalState: CARRY_OVER
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: UNVERIFIED_AFTER_RESEARCH
resetBenefitProbability: 初回ボーナスまで機械割103%以上 / 3周期以内当選期待度90%以上
resetModeDistribution: N/A / 独立名称モード振り分けなし
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 周期天井: 最大5周期。
- 3周期以内のボーナス当選期待度: 90%以上。
- 内部ゲーム数加算: 0～110G。
- オーラカウンタ内部加算: 0～16pt。
- 初回ボーナス当選までの機械割: 103%以上。
- 設定変更時の内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機固有ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- corePerformanceの機械割、ボーナス初当り、ST初当り、純増、ベースは主要業界/解析資料で一致し、実質的な数値競合なし。
- 周期規定ポイントの天井表記は資料に `32pt` / `33pt` の表現差が見られるが、本レコードのresetBehaviorでは周期数を扱い、ポイント天井のcanonical値には採用しない。完全再現用途の細部のためCONFLICT数値として平均化しない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の有利区間そのものの機種固有直接記載: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- オーラ役高確移行ゲーム数のランダム加算振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- Sammy 公式製品ページ: https://www.sammy.co.jp/japanese/product/pachislot/sp_dan_ba/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/29203/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004571/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/29220/amusement
- HAZUSE 機種情報: https://hazuse.com/hd/430531-2/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/SX0092/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4404/1/106018
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4404/1/106649
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/853/25754/
- なな徹 天井: https://nana-press.com/kaiseki/machine/853/25751/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/853/25752/
- ちょんぼりすた 機種解析: https://chonborista.com/slot/sammy-slot/222581/
- ちょんぼりすた 天井: https://chonborista.com/slot/sammy-slot/227906/

## researchNotes
- 欠損判定前に `スマスロ 聖戦士ダンバイン` / `L聖戦士ダンバイン` / `Lスマスロ聖戦士ダンバインMF` / `サミー` / `銀座` と、`設定変更` `リセット` `朝一` `据え置き` `電源OFF ON` `天井` `周期` `内部状態` `オーラカウンタ` `ガックン` `有利区間` を組み替えて検索。
- 公式、業界一次系、HAZUSE、必勝本、なな徹、ちょんぼりすた等を横断し、性能コア・周期天井短縮・内部加算・電断引継ぎを複数系統で照合。
- 通常営業中の有利区間リセット恩恵（上位ST）は設定変更時を除外するため、朝一恩恵へ転記しない。
- 完全再現用の通常時全状態移行率、周期ごとの全振り分け、CZ詳細抽選は収集対象外。
