# スマスロ 沖ドキ！DUO アンコール

recordNo: 1771
machineName: スマスロ 沖ドキ！DUO アンコール
aliases: スマスロ 沖ドキ!DUO アンコール / 沖ドキDUOアンコール / 沖ドキ！DUO2 / L／オキドキデュオ2／FR
manufacturer: メーシー / ユニバーサルエンターテインメント
formalModel: L／オキドキデュオ2／FR
inspectionCode: 530412
releaseDate: 2025-12-22
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス / 完全告知 / モード管理
settings: L / 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサルエンターテインメント発表を報じたグリーンべると/遊技通信で、メーシー製・2025年12月導入予定、シリーズ初のスマスロであることを確認。
- 遊技通信で型式名 `L／オキドキデュオ2／FR` を確認。
- 新潟県公安委員会の検定通過を報じたグリーンべると/情報島+で同型式を照合。
- HAZUSEで型式 `L／オキドキデュオ2／FR`、検定番号 `530412`、導入開始日2025-12-22を照合。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 98.6%
- setting3: 102.4%
- setting5: 106.8%
- setting6: 110.0%
- settingL: 非公開/調査中
initialHitBySetting:
  bonusInitial:
  - setting1: 1/240.0
  - setting2: 1/230.2
  - setting3: 1/215.8
  - setting5: 1/192.1
  - setting6: 1/181.0
baseGamesPer50: 約25.3G/50枚（設定1）
netIncrease: 約4.0枚/G
basicPayout:
- BIG BONUS: 約204枚
- REG BONUS: 約84枚
modeSpecificMinimumData:
- 通常時は通常A / 通常B / 引き戻し / チャンス / 天国 / ドキドキ / 超ドキドキ / 保証 / アンコールのモード管理。
- 通常A/Bのゲーム数天井は800G、引き戻し/チャンスは200G、連チャン系は32G。
- 通常A/Bの800G天井到達時はボーナス + 「のるカナチャンス」濃厚。
- ボーナススルー回数天井は最大10回。規定回数は3/5/9/10回。
- 300G規定G数モード（仮天井系）が存在し、滞在時は300G経過後に高確率でボーナス当選。リセット時に高確率でセットされるが、公開選択率は確認できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE_AND_PUBLIC_RESET_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はゲーム数天井と内部状態/モードをリセットする機種別比較を確認。
- 朝一通常モードは全設定共通で通常A 50.0% / 通常B 10.2% / チャンス39.8%に再抽選。
- チャンスモード選択時は天井200Gかつ、当選後の移行先は通常Bまたは天国以上。
- スルー回数天井も設定変更用振り分けに再抽選され、5回目選択率が通常時5.0%から24.6%へ優遇。
- 300G規定G数モードは設定変更時に高確率でセットされる。具体的選択率は複数高優先資料でも公開値を固定できず `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは通常の営業継続としてゲーム数天井・内部モード/状態・スルー回数履歴を引き継ぐとする機種別二次解析を確認。
- 高優先資料で据え置きだけを独立列にした三者比較表は固定できなかったため、据え置き契約の信頼度は純電断直接比較より一段落として保持。
- 300G規定G数モード滞在中の据え置きも引継ぎとする二次解析があるが、主要解析の独立直接表を固定できず `ANALYSIS_SINGLE_SECONDARY`。
confidence: ANALYSIS_SINGLE_SECONDARY_FOR_EXPLICIT_STAY / CONSISTENT_WITH_POWER_CYCLE_DIRECT_TABLE

### powerCycleBehavior
- ちょんぼりすたの機種別「設定変更時 / 電源OFF→ON時」直接比較で、純電断では天井を引き継ぎ、内部状態も引き継ぐ。
- 後発の機種別リセット解析ではスルー回数履歴も純電断で引き継ぐと整理されている。
- 純電断で液晶表示・ステージ等に独立した初期化挙動があるかは、十分な再探索後も高信頼の直接表を固定できず `UNVERIFIED_DISPLAY_BEHAVIOR_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / ANALYSIS_SINGLE_SECONDARY_FOR_SKIP_COUNT

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常A/B最大800Gのゲーム数天井進行を対象。
- 設定変更時の最大天井そのものは800Gのままで、全台一律の固定短縮天井にはならない。ただし39.8%で天井200Gのチャンスモードが選ばれる。
- 300G規定G数モードが高確率セットされるため、リセット台は300G台にも強い当選契機を持つが「300G固定天井」とは扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 通常A/B 800G / 引き戻し・チャンス200G / 連チャン系32G
resetCeiling: 固定一律短縮なし。朝一チャンスモード39.8%選択時は200G天井
resetShortening: CONDITIONAL_BY_RESET_MODE
otherResetCeilingEffects:
- 300G規定G数モードが設定変更時に高確率でセットされ、300G経過後に高確率でボーナス当選。
- スルー回数天井は設定変更時専用振り分けで5回目が優遇。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一通常モード振り分け（全設定共通）: 通常A 50.0% / 通常B 10.2% / チャンス39.8%。
- 設定変更時のドキハナモードはA～Dへ再抽選。公開値はA 69.5% / B 29.7% / C 0.4% / D 0.4%。
- 300G規定G数モードはリセット時に高確率セットされるが具体率は非公開/未固定。
- 設定変更以外の有利区間リセット時に移行するアンコールモード恩恵は設定変更時には適用されないため、朝一リセット恩恵へ混入しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態/モードをリセット、純電源OFF→ON時は引継ぎの直接比較を確認。
- 独立した高確/低確ステートを通常モード群と別に定義できる高優先資料は固定できないため、通常モード/ドキハナモード等とは分離した追加状態を推測しない。
confidence: ANALYSIS_HIGH_FOR_GENERIC_INTERNAL_STATE_RESET_CARRY / UNVERIFIED_FOR_ADDITIONAL_STATE_TAXONOMY

### advantageousSectionReset
- なな徹の機種別有利区間解析で、有利区間リセットタイミングに「設定変更時」「ボーナス終了時の一部」を確認。
- 設定変更以外の有利区間リセット時はアンコールモードへ移行し、32G以内ボーナス濃厚かつ次回50%でドキドキ以上へ移行する恩恵がある。
- 同資料はこのアンコール移行恩恵について明確に「設定変更時を除く」としているため、設定変更朝一には適用しない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### resetBenefits
- 朝一チャンスモード39.8%（天井200G）。
- 通常B 10.2%を含め、通常B以上相当の有利な初期モードに期待できる。
- スルー回数天井5回目の選択率が5.0%→24.6%へ優遇。
- 300G規定G数モードが高確率でセットされる（具体率未公開）。
- 設定変更時ドキハナモードA/B/C/D = 69.5/29.7/0.4/0.4%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日からの天井進行、内部モード/状態、スルー回数履歴は失われるため、前日が有利な進行状態だった場合は据え置きに比べ不利になり得る。
- 設定変更固有の冷遇率・出玉抑制率などの公開数値は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常営業中の有利区間リセット時アンコール移行恩恵は設定変更時には付かない。
confidence: ANALYSIS_HIGH_FOR_RESET_OF_PROGRESS / NONE_CONFIRMED_FOR_NUMERIC_PENALTY

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 朝一200G以内の当選や300G台の当選集中はリセット恩恵と整合するが、通常運用でも発生し得るため変更確定条件にはしない。
- 前日ゲーム数・スルー履歴と当日挙動の整合は据え置き推測材料になるが、単独で確定判別は不可。
- `沖ドキ！DUO アンコール / Lオキドキデュオ2FR / メーシー + ガックン / リールガックン / 設定変更 / 据え置き / 電源OFF ON` を含め再探索したが、本機固有のガックン条件・発生率は高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_LAMP_NOT_USABLE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeilingGames: 800G（通常A/B）
resetFixedCeilingGames: NONE
resetModeDistribution:
- 通常A: 50.0%
- 通常B: 10.2%
- チャンス: 39.8%
resetSkipCountCeilingDistribution:
- 3回: 24.6%
- 5回: 24.6%
- 9回: 44.5%
- 10回: 6.3%
nonResetSkipCountCeilingDistribution:
- 3回: 24.6%
- 5回: 5.0%
- 9回: 64.1%
- 10回: 6.3%
resetDokihanaModeDistribution:
- A: 69.5%
- B: 29.7%
- C: 0.4%
- D: 0.4%
reset300GModeSelectionRate: PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH
morningHitRate: PUBLIC_AGGREGATE_RATE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PARTIALLY_PUBLIC_AS_MODE_DISTRIBUTIONS
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 主要性能（機械割、初当り、ベース、純増、BIG/REG獲得枚数）はHAZUSE・パチビー・必勝本・パチマガスロマガ・1geki・複数解析で一致し重大CONFLICTなし。
- 「300G仮天井」は300G到達で確定当選する固定天井ではなく、300G経過後に高確率で当選する規定G数モード。固定300G天井とする表現はcanonicalから除外し定義を分離。
- リセット時の最大ゲーム数天井を一律200Gまたは300Gとする解釈は不採用。通常A 50.0% / 通常B 10.2%では最大800G、チャンス39.8%のみ200G天井。
- 設定変更以外の有利区間リセット恩恵（アンコールモード）は設定変更時除外のため、朝一恩恵と混同しない。

## missingFields
- 300G規定G数モードの設定変更時具体選択率: PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH
- 公開された朝一0Gからの総合ボーナス当選率/メーカー公表期待値: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の液晶表示/開始ステージ等の機種固有挙動: UNVERIFIED_DISPLAY_BEHAVIOR_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の全内部サブモード個別契約を示す高優先三者比較表: UNVERIFIED_DIRECT_THREE_WAY_TABLE_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-15
- ユニバーサル新台発表（グリーンべると転載）: https://news.p-world.co.jp/articles/32081/greenbelt
- 遊技通信 新機種発表: https://news.p-world.co.jp/articles/32044/yugitsushin
- グリーンべると 検定通過: https://news.p-world.co.jp/articles/32003
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-16612/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0116/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/225110006
- パチビー 機種紹介: https://www.pachibee.jp/machines/about/225110006
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2740/2
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/88450/
- パチ&スロ必勝本 スルー回数天井: https://hisshobon.com/machineinfo/88435/
- パチ&スロ必勝本 ドキハナモード設定変更時: https://hisshobon.com/machineinfo/88416/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/macy/064476.php
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/57/kr01.php
- 1geki 天井/朝一: https://1geki.jp/slot/l_okidoki_duo_encore/3/
- 1geki モード/リセット振り分け: https://1geki.jp/slot/l_okidoki_duo_encore/43/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/246716/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1071/33878/
- ジャグラーズネット: https://jugglersnet.com/6gokiokidoki/okidoki-duo-encore
- スロベース リセット解析（補助）: https://slobase.jp/articles/okidoki-duo-reset

## qaNotes
- 設定は1/2/3/5/6 + L。設定4は非搭載。
- `resetCeiling` は固定短縮ではなく、リセットモード振り分けにより39.8%で200G天井となる点を明示。
- 300G規定G数モードは「300Gで確定当選」ではないので固定天井と混ぜない。
- 有利区間リセット時アンコール恩恵は設定変更時除外を厳守。
- 完全再現用の通常時全モード移行・全抽選は収集していない。
