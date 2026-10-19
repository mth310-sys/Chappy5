# A-SLOT+ 異世界かるてっと BT

recordNo: 1784
machineName: A-SLOT+ 異世界かるてっと BT
aliases: 異世界かるてっとBT / いせかるBT / LB異世界かるてっとKR
manufacturer: 銀座製造 / サミー
formalModel: LB 異世界かるてっと KR
inspectionCode: 5S1513
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ
systemType: ノーマル(Aタイプ) / ボーナストリガー(BT) / 突BT
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- サミー公式マイスロで2026-04-06をホール導入日として確認。
- 遊技通信/P-WORLD業界ニュースでサミー発表、型式 `LB異世界かるてっとKR`、銀座製、2026-04-06導入予定を確認。
- HAZUSEで型式 `LB 異世界かるてっと KR`、検定番号 `5S1513`、導入開始日2026-04-06を確認。
- 情報島の検定通過記事でも銀座 `LB 異世界かるてっと KR` を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketEstimate:
  - setting1: 97.9%
  - setting2: 99.9%
  - setting5: 104.4%
  - setting6: 109.0%
  fullStrategy:
  - setting1: 99.0%
  - setting2: 101.1%
  - setting5: 105.7%
  - setting6: 110.6%
initialHitBySetting:
  bonusInitial:
  - setting1: 1/197.6
  - setting2: 1/193.9
  - setting5: 1/175.4
  - setting6: 1/161.1
  bonusCombined:
  - setting1: 1/99.9
  - setting2: 1/98.1
  - setting5: 1/89.1
  - setting6: 1/82.1
  btEntryCombined:
  - setting1: 1/99.6
  - setting2: 1/98.0
  - setting5: 1/88.8
  - setting6: 1/81.3
baseGamesPer50: 約33.6G/50枚（設定1）
netIncrease: N/A（ノーマル/BT機。AT純増指標は非適用）
basicPayout:
- BAR揃いびっぐぼーなす: 最大179枚 + BT
- 赤7/青7揃いびっぐぼーなす: 最大155枚 + BT
- いせかるぼーなす: 最大95枚 + BT
- BT中ボーナス期待度: 50%以上
modeSpecificMinimumData:
- ゲーム数天井・ボーナス間天井は非搭載。
- 通常時の「いせかる目」からボーナスを介さずBTへ直行する「突BT」を搭載。
- 全ボーナス終了後はBTへ移行。
confidence: ANALYSIS_HIGH / INDUSTRY_SUPPORT / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_BT_INFORMATION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時、BTはリセット。
- 必勝本の機種固有表では、設定変更時のサブ液晶キャラはランダム、開始ステージは実戦上「教室」。
- 天井非搭載のため、天井ゲーム数リセット/短縮は非該当。
- 朝一専用モード、設定変更専用の初当たり優遇、固定ゾーン等は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- ゲーム数天井・ボーナス間天井が存在しないため、据え置き時の天井ゲーム数引継ぎは非該当。
- 据え置き時のBT途中状態を「据え置き」独立語句で直接明記した高優先機種固有資料は、機種名・型式名・メーカー名・据え置き/朝一/設定変更で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常A/B等の朝一ゲーム数管理モードは確認されていない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_BT_STATE_ON_CARRYOVER_DIRECT_WORDING

### powerCycleBehavior
- 純電源OFF→ONではBTを引き継ぐことを必勝本の機種固有比較表で直接確認。
- サブ液晶キャラ、開始ステージの電源OFF→ON時挙動は同資料で「現在調査中」。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_COMPARISON_TABLE

### gameCounterReset
settingChange: N/A_FOR_CEILING
carryOver: N/A_FOR_CEILING
powerCycle: N/A_FOR_CEILING
notes:
- ゲーム数天井・ボーナス間天井なし。
- 前日のハマリゲーム数を朝一狙いへ転換する内部天井進行はない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
resetShortening: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更専用のゲーム数管理モード/天国モード/朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- BTは設定変更でRESET、純電断でCARRY_OVERを直接確認。
confidence: ANALYSIS_HIGH_FOR_BT / ANALYSIS_HIGH_FOR_NO_CEILING_MODE

### stateAfterReset
- AT/CZの高確/低確のような朝一収益へ直結する内部状態は、本機の公開ゲーム構造上確認できない。
- BT状態は設定変更でRESET、純電断でCARRY_OVER。
- 据え置き時BT途中状態の独立直接資料は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE_BT / UNVERIFIED_FOR_CARRYOVER_DIRECT_WORDING

### advantageousSectionReset
- スマスロ/BT機だが、設定変更・据え置き・純電断における「有利区間」そのものの機種固有直接契約は、機種名/型式/銀座/サミー/有利区間/設定変更/据え置きで再探索しても高優先資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BTのRESET/CARRY_OVERとは混同せず別項目で保持する。
confidence: UNVERIFIED

### resetBenefits
- 天井短縮なし（天井自体が非搭載）。
- 朝一専用モード、朝一固定ゾーン、設定変更専用のボーナス/突BT確率優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時、進行中BTはリセットされる。
- それ以外の設定変更専用数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更時は必勝本実戦上「教室」開始、サブ液晶キャラはランダム。
- 純電断時の開始ステージ/サブ液晶キャラが同資料で調査中のため、これら単独では設定変更確定条件として扱わない。
- 天井非搭載のため、朝一ハマリゲーム数による設定変更/据え置き判別は不可。
- 本機固有ガックン条件/発生率は、機種名・型式 `LB 異世界かるてっと KR`・銀座・サミーと「ガックン/リール/設定変更/据え置き」を組み替え、必勝本・HAZUSE・1geki・なな徹・業界記事・後発解析を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_KNOWN_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetCeiling: NONE
resetModeDistribution: NONE_CONFIRMED
resetBenefitProbability: NONE_CONFIRMED
settingChangeBt: RESET
powerCycleBt: CARRY_OVER
settingChangeSubDisplayCharacter: RANDOM
settingChangeStartStage: CLASSROOM_IN_PRACTICE
confidence: ANALYSIS_HIGH

## conflicts
- HAZUSEは出玉率を完全攻略時 `99.0%〜110.6%` と掲載する一方、一部整理サイトは見出し上 `97.9%〜109.0%` を機械割として掲載する。必勝本・1gekiは「市場予想値」と「完全攻略時」を明確に分離しているため、平均せず両定義を別系列でcanonical保持。
- メーカー表記は媒体により「サミー」と「銀座」。遊技通信の型式記事で「銀座製」を確認できるため、本DBでは `銀座製造 / サミー` と正規化。

## sources
retrievedAt: 2026-09-15
- サミー公式マイスロニュース: https://www.sammy.co.jp/japanese/myslot/news/
- サミー公式パチスロ製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/index.html
- 遊技通信/P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/32767/yugitsushin
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-22250/
- HAZUSE 機種概要: https://hazuse.com/hd/5s1513/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/5S1513/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89391/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89382/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/89374/
- 必勝本 ボーナストリガー: https://hisshobon.com/machineinfo/89388/
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_isekai_quartet/39/
- なな徹 BT「えくすとらチャンス」: https://nana-press.com/kaiseki/machine/1125/36285/
- 情報島 機種情報: https://p-johojima.jp/machine_spec/post-24493/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/

## missingFields
- 据え置き時BT途中状態の機種固有直接記述: UNVERIFIED_AFTER_RESEARCH
- 純電断時のサブ液晶キャラ: UNDER_RESEARCH_AT_HIGH_PRIORITY_SOURCE
- 純電断時の開始ステージ: UNDER_RESEARCH_AT_HIGH_PRIORITY_SOURCE
- 有利区間の設定変更/据え置き/純電断の機種固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の全小役確率、全ボーナスフラグ内訳、演出期待度、設定示唆振り分けは収集対象外。
- 2026-04-06群は最新handoffで6機候補を確認済み。本機はその1/6として処理し、残り5機を引き続き時系列本線で処理する。
