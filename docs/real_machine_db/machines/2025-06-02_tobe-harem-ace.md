# 翔べ！ハーレムエース

recordNo: 1735
machineName: 翔べ！ハーレムエース
aliases: 翔べ!ハーレムエース / 翔べ！ハーレムエース500 / LB翔べ！ハーレムエース
manufacturer: カルミナ（製造） / ネット（販売）
formalModel: LB翔べ！ハーレムエースCF
inspectionCode: 5S0025
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / A+BT / リアルボーナス + BT
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ネット公式製品一覧で2025年6月、型式 `LB翔べ！ハーレムエースCF`、製造カルミナを確認。
- 遊技日本・遊技通信/P-WORLD業界記事でも製造元カルミナ、型式 `LB翔べ！ハーレムエースCF` を確認。
- 情報島の検定通過記事、Ativoで検定番号 `5S0025` を照合。
- 必勝本、情報島試打、複数解析資料で2025-06-02導入を確認。
confidence: OFFICIAL_IDENTITY / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.1%（完全攻略100.2%）
- setting2: 99.9%（完全攻略102.1%）
- setting5: 104.7%（完全攻略107.1%）
- setting6: 110.0%（完全攻略112.4%）
initialHitBySetting:
  haremBonus:
  - setting1: 1/819.2
  - setting2: 1/744.7
  - setting5: 1/590.4
  - setting6: 1/492.8
  big:
  - setting1: 1/789.6
  - setting2: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  - setting5: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  - setting6: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  bigOrHigherCombined:
  - setting1: 1/402.1
  - setting2: 1/390.1
  - setting5: 1/343.1
  - setting6: 1/307.7
  reg:
  - setting1: 1/560.1
  - setting2: 1/508.0
  - setting5: 1/409.6
  - setting6: 1/327.7
  combined:
  - setting1: 1/234.1
  - setting2: 1/220.7
  - setting5: 1/186.7
  - setting6: 1/158.7
baseGamesPer50:
- setting1: 約43.0G
- setting2: 約43.9G
- setting5: 約45.1G
- setting6: 約46.5G
netIncrease: NOT_APPLICABLE_FIXED_NET_INCREASE（リアルボーナス主体。BTはボーナス高確率状態）
basicPayout:
- ハーレムボーナス: 最大279枚 + 終了後BT、当選時点で一連500枚以上に期待
- BIG: 最大239枚
- REG: 最大107枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ハーレムボーナス後にBTへ必ず突入。
- BT中はハーレムボーナスまたはBIGのいずれかに当選。ハーレムボーナスならBT継続、BIGならBT終了側。
- 天井機能は非搭載。
- CZ/ATやゲーム数モードを用いる朝一狙い機ではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_BT_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 必勝本の機種別「設定変更&電源OFF/ON」比較表で、設定変更時はBTをリセット。
- 天井非搭載のため天井ゲーム数リセット/短縮はNOT_APPLICABLE。
- 設定変更後の開始ステージは実戦上「飛行ステージ」。
- 設定変更専用の当選率優遇、朝一モード、短縮天井等の公開数値は確認できなかった。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 設定据え置きで電源OFF→ONした場合、必勝本の直接比較表ではBTを引き継ぐ。
- 天井・ゲーム数モードは非搭載のため、その引継ぎはNOT_APPLICABLE。
- 朝一ステージは電源OFF→ON時も実戦上「飛行ステージ」。表示ステージだけでは設定変更/据え置きを判別できない。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 純電源OFF→ONではBTを引き継ぐ。
- 開始ステージは実戦上、飛行ステージ。
- 天井非搭載。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### gameCounterReset
- 天井ゲーム数カウンタ: NOT_APPLICABLE（天井非搭載）。
- 規定G数/CZスルー等の朝一狙い用カウンタ: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- 必勝本、複数解析資料で天井なしを確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等のゲーム数モード、朝一専用モードは公開ゲーム構造上NOT_APPLICABLE。
- BT状態のみ、設定変更でRESET / 電源OFF→ONでCARRY_OVERを直接確認。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 朝一通常時の高確/低確等の状態再抽選は公開ゲーム構造上NOT_APPLICABLE。
- BT状態は設定変更でRESET、純電断でCARRY_OVER。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断時における有利区間の扱いを直接明記した高信頼公開資料は、正式型式・メーカー名と `有利区間/設定変更/リセット/据え置き/電源OFF ON` を組み合わせて再探索したが固定できなかった。
- ノーマル+BTという構造から推測せず `UNVERIFIED_AFTER_RESEARCH` とする。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の短縮天井、朝一高確、専用モード、初当り優遇などはNONE_CONFIRMED_AFTER_RESEARCH。
- BT中に閉店した場合、設定変更するとBT状態がリセットされるため、据え置き/純電断のBT引継ぎに対してプレイヤー側には不利になり得る。
confidence: NONE_CONFIRMED_FOR_DEDICATED_BENEFIT / ANALYSIS_HIGH_FOR_BT_RESET

### resetPenalties
- 設定変更時はBT状態がRESETされる。BT状態を翌営業へ持ち越せる純電断/据え置きと比較すると、BT残存時の変更は状態消失が明確な不利要素。
- 天井進行消失は天井非搭載のためNOT_APPLICABLE。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### resetDetection
- 設定変更・電源OFF→ONとも朝一ステージは実戦上「飛行ステージ」のため、開始ステージだけでは判別不可。
- ガックンの機種固有条件/発生率は、機種名・型式 `LB翔べ！ハーレムエースCF`・カルミナ・ネットと `ガックン/リールガックン/設定変更/リセット/朝一/据え置き` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BT中閉店など特殊ケースでは、翌朝BTが残っていれば設定変更否定材料になり得るが、通常朝一の普遍的判別法ではない。
confidence: ANALYSIS_HIGH_FOR_STAGE_AND_BT_BEHAVIOR / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetBtState: RESET
powerCycleBtState: CARRY_OVER
resetStartStage: 飛行ステージ（実戦上）
powerCycleStartStage: 飛行ステージ（実戦上）
resetModeDistribution: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 一部サイトは機種名を「翔べ！ハーレムエース500」と表記するが、ネット公式・型式名・業界発表の販売名は「翔べ！ハーレムエース」。別スペックとは扱わずaliasとして保持。
- けんのスロットシミュレーションにはボーナス種別の独自暫定推計値があるが、物差し正本の個別確率には採用せず、必勝本等の公開確定表を優先する。

## missingFields
- 設定2/5/6のハーレムボーナスと通常BIGの個別分離確率: 高優先公開表では分離値未掲載。BB以上合算は確定値を保持
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/純電断時の有利区間直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一当選率等の数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- ネット公式 製品情報: https://www.net-fun.co.jp/product
- 遊技日本 新機種発表: https://yugi-nippon.com/pachinko-new-machine/post-70185/
- P-WORLD/遊技通信: https://news.p-world.co.jp/articles/30552
- 情報島 検定通過: https://p-johojima.jp/news/post-780/
- Ativo 型式/検定番号: https://ativo.jp/2025/03/25/lb%E7%BF%94%E3%81%B9%E3%83%8F%E3%83%BC%E3%83%AC%E3%83%A0%E3%82%A8%E3%83%BC%E3%82%B9/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86867/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86850/
- 必勝本 設定看破/ベース: https://hisshobon.com/machineinfo/86854/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/86875/
- 情報島 新機種発表: https://p-johojima.jp/new_machine/post-2206/
- 情報島 設定6試打: https://p-johojima.jp/new_machine/post-8066/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/234350/
- 評論計画: https://pachireview.com/slot/harem-ace/
- Amusement Japan BT4機適合: https://amusement-japan.co.jp/article/detail/10004766/
