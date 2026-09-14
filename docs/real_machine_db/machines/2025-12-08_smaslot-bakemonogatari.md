# スマスロ 化物語

recordNo: 1767
machineName: スマスロ 化物語
aliases: L化物語 / Lスマスロ化物語 / L スマスロ化物語 KH
manufacturer: 銀座製造 / サミー
formalModel: L スマスロ化物語 KH
inspectionCode: 530641
releaseDate: 2025-12-08
generation: 6.5号機 / スマスロ
systemType: AT / CZ / 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- サミー発表・業界記事で銀座製、2025-12-08ホール導入開始を確認。
- 遊技日本の検定通過公示で型式 `L スマスロ化物語 KH`（銀座）を確認。
- HAZUSE・1gekiで検定番号 `530641`、型式、導入日を照合。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.9%
- setting4: 105.0%
- setting5: 107.8%
- setting6: 112.1%
initialHitBySetting:
  atInitial:
  - setting1: 1/265.1
  - setting2: 1/260.7
  - setting3: 1/252.1
  - setting4: 1/238.8
  - setting5: 1/230.8
  - setting6: 1/219.6
baseGamesPer50: 約31.1G/50枚
netIncrease:
- 倖時間（通常AT）: 約2.7枚/G
- 超倖時間（上位AT）: 約5.0枚/G
basicPayout:
- 倖時間: 初期150枚
- 超倖時間: 初期150枚+α
- BONUS: 30G
modeSpecificMinimumData:
- CZ「解呪ノ儀」は15G、平均期待度約43%。
- AT「倖時間」は差枚数管理型、初期150枚。
- 上位AT「超倖時間」は純増約5.0枚/G。
- AT後は引き戻し区間「夢の時間ヲ終わラセルな」を経由。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_CEILING_MODE_STATE_AND_ADVANTAGEOUS_SECTION_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間をRESET。
- 天井までのゲーム数をRESETし、通常1000Gから600Gへ短縮。
- 必勝本の設定変更/電源OFF→ON直接比較ではモードを再抽選、状態を再抽選、解呪連モードは非解呪連モードへ移行。
- なな徹では設定変更時にゲーム数・内部状態・解呪連モードをリセットし、朝一ステージは市街地固定。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、ゲーム数、内部状態、解呪連モードを引き継ぐ。
- 朝一ステージは設定変更/据え置きとも市街地固定のため、見た目だけでは判別不可。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### powerCycleBehavior
- 必勝本の直接比較では、純電源OFF→ON時は天井までのゲーム数・モード・状態・解呪連モードを引き継ぐ。
- 1gekiでも電源OFF→ON時は天井ゲーム数引継ぎを確認。
- 純電源OFF→ON時の有利区間は複数二次解析で引継ぎとされるが、必勝本比較表に有利区間独立欄はないため `ANALYSIS_HIGH_WITH_SECONDARY_ADVANTAGEOUS_SECTION_SUPPORT` とする。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 朝一液晶の見た目は市街地ステージ固定で、表示だけから内部進行を判別できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 1000G
resetGameCeiling: 600G
ceilingBenefit: AT「倖時間」+「倍倍チャンス」当選
reductionGames: 400G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモード再抽選。
- 解呪連モードは非解呪連モードから開始。
- 設定変更後50G消化時にモードBのHIGHへ移行率100%。
- HIGH継続は50G。
- HIGH中にCZ当選した場合、50%で解呪連モードへ移行。
- 設定変更時の通常モード全振り分け表は再探索後も `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_AND_50G_HIGH / UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態を再抽選/リセット。
- 据え置き・純電源OFF→ON時は内部状態を引き継ぐ。
- 設定変更時の内部状態個別振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### advantageousSectionReset
- 設定変更時は有利区間RESET、据え置き時は引継ぎ。
- 通常営業中はエンディング後などで有利区間リセットが行われ、実戦上「怪逅ノ儀」突入が確認される。
- なな徹はこの有利区間リセット恩恵について `設定変更時を除く` と明示しているため、設定変更朝一の恩恵へ混入しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井が1000G→600Gへ400G短縮。
- 設定変更後50G消化でモードB HIGHへ100%移行し、50G継続。
- HIGH中のCZ当選時は50%で解呪連モードへ移行。
- 天井到達時はAT+倍倍チャンス当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のゲーム数・内部状態・解呪連モードの持越し価値は設定変更で失われる。
- 通常営業中の有利区間リセット後に見られる「怪逅ノ儀」恩恵は設定変更時には適用しない。
- その他の設定変更固有の冷遇率/不利率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一1回目のAT当選が600Gを超えた場合は据え置き濃厚材料。
- 朝一ステージは設定変更/据え置きとも市街地固定で、見た目判別不可。
- 600G+α付近のAT当選はリセット期待材料だが、前日最終G数との合算で据え置きでも到達し得るため単独確定とはしない。
- `スマスロ 化物語 / Lスマスロ化物語KH / 銀座 / サミー + ガックン / リールガックン / 設定変更 / 据え置き / 電源OFF ON` で再探索したが、本機固有ガックン条件・発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STAGE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 1000G
resetGameCeiling: 600G
resetGameCeilingReduction: 400G
reset50GModeBHighTransferRate: 100%
modeBHighDuration: 50G
czHitDuringHighToKaijurenMode: 50%
publicMorningNumericValues:
- なな徹独自シミュレーター・設定1・リセット0G: 等価期待値 -563円 / 5.6枚交換 -1337円
- 同条件0G: 天井到達率10.97% / 実質初当り1/242 / 平均投資7785円
- 150G開始: 等価期待値+215円
- 250G開始: 等価期待値+1032円 / 5.6枚交換+242円
- 300G開始: 等価期待値+1568円
notes:
- 上記期待値はなな徹独自シミュレーター値。設定1、31.1G/50枚、純増2.7枚/G固定、ゾーン・解呪連モードを考慮しない等の条件付きで、メーカー公表性能とは分離。
confidence: ANALYSIS_HIGH_FOR_RESET_NUMBERS / ANALYSIS_SINGLE_FOR_SIMULATION_VALUES

## conflicts
- 性能コア（設定別AT初当り、機械割、約31.1G/50枚、純増2.7/5.0枚/G）は業界記事・1geki・複数解析で一致し重大CONFLICTなし。
- 1gekiの朝一表は内部状態欄がHTML上セル結合で判読しづらいが、必勝本の直接比較表は設定変更=再抽選、電源OFF/ON=引継ぎを明記するためそちらをcanonicalとした。
- 検定番号はHAZUSE・Ativo・1gekiで `530641` が一致。1geki併記の `0710-179` は番号定義が別系統の可能性があるためinspectionCodeへ混在させない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の通常モード全振り分け: PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態個別振り分け: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-15
- サミー/業界発表（グリーンべると）: https://web-greenbelt.jp/post-104254/
- 遊技日本・検定通過: https://yugi-nippon.com/pachinko-new-machine/post-73400/
- HAZUSE: https://hazuse.com/hd/530641h/
- パチビー: https://www.pachibee.jp/machines/index/225110001
- パチ&スロ必勝本・天井&設定変更: https://hisshobon.com/machineinfo/88249/
- 1geki・機種概要: https://1geki.jp/slot/l_bakemonogatari/
- 1geki・天井/朝一: https://1geki.jp/slot/l_bakemonogatari/3/
- なな徹・朝一/リセット: https://nana-press.com/kaiseki/machine/1055/33280/
- 情報島・機種概要: https://p-johojima.jp/machine_spec/post-15230/

## boundaryAudit
- 2025-12-08パチスロ新台はパチビー、ALL7、情報島で `プリズムナナ / 銀河英雄伝説 Die Neue These / スマスロ 化物語` の3機一致。
- PB/別型式/地域先行/延期/段階導入を再検索し、同日群に追加すべき別canonical機は今回確認できず。
- 2025-12-08群: CLOSED 3/3。
- 次の時系列本線は2025-12-22。パチビー・情報島・ALL7で `スマスロ 秘宝伝 / L 無職転生 ～異世界行ったら本気だす～ / L不二子BT / スマスロ 沖ドキ！DUO アンコール` の4機一致。

## nextResumeCandidate
- No.1768 candidate: スマスロ 秘宝伝 — 2025-12-22
