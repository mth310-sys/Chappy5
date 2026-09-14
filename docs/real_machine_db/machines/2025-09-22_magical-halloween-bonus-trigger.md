# マジカルハロウィン ボーナストリガー

recordNo: 1754
machineName: マジカルハロウィン ボーナストリガー
aliases: マジハロBT / LBマジカルハロウィン / LBマジカルハロウィンGN
manufacturer: グレードワン（製造） / コナミアミューズメント（販売・ブランド）
formalModel: LBマジカルハロウィンGN
inspectionCode: 5S0016
releaseDate: 2025-09-22
generation: 6号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス + BT / 技術介入
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- コナミアミューズメント公式は2025-09-22稼働開始、製造元グレードワンと告知。
- HAZUSEは型式 `LBマジカルハロウィンGN`、検定番号 `5S0016`、導入開始日2025-09-22を掲載。
- 情報島の検定通過記事でもグレードワン `LBマジカルハロウィンGN` を確認。
confidence: OFFICIAL / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 99.3%
- setting5: 104.2%
- setting6: 108.1%
bonusBySetting:
  big:
  - setting1: 1/299.3
  - setting2: 1/295.2
  - setting5: 1/273.1
  - setting6: 1/262.1
  reg:
  - setting1: 1/390.1
  - setting2: 1/346.8
  - setting5: 1/300.6
  - setting6: 1/262.1
  combined:
  - setting1: 1/169.3
  - setting2: 1/159.5
  - setting5: 1/143.1
  - setting6: 1/131.1
baseGamesPer50: 約36.8〜37.0G/50枚（複数二次解析一致。必勝本は「現在調査中」表記のため信頼度を分離）
netIncrease: N/A_REAL_BONUS_BT
basicPayout:
- BIG: 最大111枚 + BT
- REG: 最大111枚
- BT BONUS: 最大107枚 + BT継続
- BT中REG: 最大111枚・BT終了
- BIG初当りを含むBT獲得期待枚数: 約325枚
confidence: ANALYSIS_HIGH_FOR_BONUS_AND_PAYOUT / ANALYSIS_MULTI_SECONDARY_FOR_BASE / OFFICIAL_INDUSTRY_FOR_BT_EXPECTATION

## modeSpecificMinimumData
- BIG終了後は100%ボーナストリガーへ移行。
- BT中はBT BONUSを引けばBT継続、REGで終了。業界/解析資料ではBT中ボーナス比率を概ね1:1として説明。
- 通常時ゲーム数天井は非搭載。
- AT/ARTではなくリアルボーナス主体のためAT純増はN/A。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL_INTERNAL_BONUS_BT_STATE_AND_GAKKUN_NOT_PUBLICLY_FIXED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井非搭載のため、設定変更時のゲーム数天井RESET/短縮はN/A。
- 必勝本の機種別比較表では設定変更時、キャラカスタムはアリス、演出モードはアリスモード、ボナ連カスタムは100G間へ初期化し、当選ゲームコレクションはリセット。
- ボーナス成立内部フラグ、BT途中状態を設定変更時にどう扱うかを直接列挙した公開資料は、正式型式・BT中・設定変更等で再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_CUSTOMS / UNVERIFIED_FOR_INTERNAL_BONUS_BT_STATE

### carryOverBehavior
- 天井非搭載のため据え置き天井進行はN/A。
- 据え置き時のボーナス成立内部フラグ、BT途中状態、カスタム状態を独立列挙した機種固有高優先資料は固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- ノーマル/BT一般論から自動補完していない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### powerCycleBehavior
- 必勝本の直接比較表では、純電源OFF→ON時も「当選ゲームコレクション」はリセット。
- キャラカスタム・演出モード・ボナ連カスタムは同表で `現在調査中`。
- ボーナス成立内部フラグ、BT途中状態の復帰契約は、電断/電源投入/正式型式まで再探索しても固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COLLECTION_RESET / UNVERIFIED_FOR_OTHER_POWER_CYCLE_STATE

### gameCounterReset
settingChange: N/A_NO_GAME_CEILING
carryOver: N/A_NO_GAME_CEILING
powerCycle: N/A_NO_GAME_CEILING
confidence: ANALYSIS_HIGH / MULTI_SOURCE_NO_CEILING

### ceilingAfterReset
normalGameCeiling: NONE
resetGameCeiling: NONE
carryOverGameCeiling: NONE
powerCycleGameCeiling: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 内部の朝一専用モード・ゲーム数モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 演出モード（内部抽選モードとは別）は設定変更でアリスモードへ戻ることを必勝本が明記。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_MODE / NONE_CONFIRMED_FOR_INTERNAL_MORNING_MODE

### stateAfterReset
- 高確/低確等のAT系内部状態概念は本機の公開ゲーム性では主要項目として確認されない。
- ボーナス成立内部状態およびBT途中状態の設定変更/据え置き/純電断3条件比較は `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: UNVERIFIED_FOR_BONUS_BT_INTERNAL_STATE

### advantageousSectionReset
- コナミ公式開発者Q&A「まじおつ。」は本機について有利区間は「無い」と明言し、BTループにも有利区間由来の上限・制限はないと説明。
settingChange: N/A_NO_ADVANTAGEOUS_SECTION
carryOver: N/A_NO_ADVANTAGEOUS_SECTION
powerCycle: N/A_NO_ADVANTAGEOUS_SECTION
confidence: OFFICIAL

### resetBenefits
- ちょんぼりすたは「朝イチリセット恩恵は特にナシ!?」と整理。
- 天井短縮、朝一高確、初当り優遇、朝一専用モード等の公開恩恵は検索語・資料系統を変えても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_SUPPORT + NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 天井非搭載のため宵越しゲーム数天井価値の消失はN/A。
- 設定変更固有の公開された数値的不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン条件・発生率、ランプ等による設定変更/据え置き確定判別は、`ガックン`、`リール ガックン`、正式型式、朝一、設定変更、据え置きを組み替えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため短縮天井超過による据え置き判別はN/A。
- 設定変更時の演出/キャラカスタム初期化は確認できるが、ホール側で同状態へ合わせられる可能性を排除できないため確定変更判別として扱わない。
confidence: UNVERIFIED_FOR_DIRECT_RESET_DETECTION

### numericResetData
normalGameCeiling: NONE
resetGameCeiling: NONE
resetMorningModeDistribution: NONE_PUBLISHED
resetMorningBenefitRate: NONE_PUBLISHED
resetMorningPenaltyRate: NONE_PUBLISHED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues: NONE_FOUND_AFTER_RESEARCH

## conflicts
- 設定5の性能値は必勝本、なな徹、パチビー、ちょんぼりすた等が BIG 1/273前後 / REG 1/301前後 / 合算1/143 / 機械割104.2%で一致。一方、ジャグラーズネットはメーカー公表値として BIG 1/284.9 / REG 1/358.1 / 合算1/158.7 / 機械割101.2%を掲載。多数一致側をcanonicalとし、後者を `CONFLICT_SETTING5_ALTERNATE_TABLE_284_9_358_1_158_7_101_2` として隔離。
- ベースはスロベース約37G、パチマニア36.8G、Flick7 37.0Gで概ね一致する一方、必勝本は2026-06更新後も「現在調査中」。約37Gを二次解析一致値として採用し、公式値扱いはしない。
- メーカー表記は販売/ブランドのコナミアミューズメントと製造元グレードワンを分離して保持。

## sourceSearchNotes
- 再探索語: `マジカルハロウィン ボーナストリガー`, `マジハロBT`, `LBマジカルハロウィンGN`, `グレードワン`, `設定変更`, `リセット`, `朝一`, `据え置き`, `電源OFF ON`, `電断`, `天井`, `ガックン`, `有利区間`, `BT中 電断`。
- 資料系統: コナミアミューズメント公式/まじおつ。、検定・業界記事、HAZUSE、必勝本、なな徹、パチビー、一撃、ちょんぼりすた、スロベース、パチマニア、Flick7、ジャグラーズネット。

## sources
retrievedAt: 2026-09-15
- コナミアミューズメント 稼働告知: https://www.konami.com/amusement/corporate/ja/topics/20250917/
- コナミアミューズメント 発売告知: https://www.konami.com/amusement/corporate/ja/topics/20250707mh/
- コナミ公式 まじおつ。有利区間Q&A: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu/20251107.html
- HAZUSE: https://hazuse.com/hd/5s0016/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-6956/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/87830/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87842/
- パチ&スロ必勝本 小役確率&コイン持ち: https://hisshobon.com/machineinfo/87828/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/1013/31479/
- なな徹 ボーナス概要: https://nana-press.com/kaiseki/machine/1013/31877/
- パチビー: https://www.pachibee.jp/machines/index/225080004
- 一撃: https://1geki.jp/slot/lb_magihallo/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/241340/
- スロベース: https://slobase.jp/machines/magical-halloween-bt
- パチマニア: https://ps-mania.jp/slot/magihallo-bt/
- Flick7: https://flick7.net/slot/magihallo_bt.php
- ジャグラーズネット: https://jugglersnet.com/bt/masical-halloween-bt
