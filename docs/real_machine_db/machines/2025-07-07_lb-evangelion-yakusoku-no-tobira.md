# LBパチスロ ヱヴァンゲリヲン ～約束の扉～

recordNo: 1738
machineName: LBパチスロ ヱヴァンゲリヲン ～約束の扉～
aliases: LBエヴァ / エヴァ 約束の扉 / ヱヴァ 約束の扉 / LBエヴァンゲリオンsR
manufacturer: ビスティ（ブランド） / SANKYO（製造・型式）
formalModel: LBエヴァンゲリオンsR
inspectionCode: 530121
releaseDate: 2025-07-07
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス + BT（ボーナストリガー）
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_BASE_ROUNDING_AND_BB_SETTING5_CONFLICT

## releaseAndModelEvidence
- SANKYOオンライン博物館でビスティブランド、2025年7月導入、SANKYOグループ初のBT搭載スマスロであることを確認。
- グリーンべると/P-WORLD業界ニュースで型式 `LBエヴァンゲリオンsR` の検定通過を確認。
- HAZUSEで検定番号 `530121`、型式 `LBエヴァンゲリオンsR`、2025-07-07導入、ビスティを確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.9%
- setting3: 100.7%
- setting4: 104.5%
- setting5: 107.0%
- setting6: 110.0%
initialHitBySetting:
  bonusCombined:
  - setting1: 1/196.8
  - setting2: 1/189.4
  - setting3: 1/181.0
  - setting4: 1/170.7
  - setting5: 1/161.4
  - setting6: 1/151.0
  bigCombined:
  - setting1: 1/300.6
  - setting2: 1/290.0
  - setting3: 1/281.3
  - setting4: 1/266.4
  - setting5: CONFLICT_1/254.0_VS_1/251.0
  - setting6: 1/240.9
  reg:
  - setting1: 1/569.9
  - setting2: 1/546.1
  - setting3: 1/508.0
  - setting4: 1/474.9
  - setting5: 1/442.8
  - setting6: 1/404.5
baseGamesPer50: 約41G（HAZUSE/P-WORLD） / 40.4G（後発ベース一覧）
netIncrease: N/A（リアルボーナス+BT。AT/ART純増指標では扱わない）
basicPayout:
- SUPER BIG BONUS: 最大203枚 + BT突入。BT1回分を含む表現では最大404枚+α相当。
- BIG BONUS: 最大203枚
- REG BONUS: 最大107枚
- 暴走モード: 最大96枚 + BT突入。BT1回分を含む表現では最大297枚+α相当。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH_WITH_NOTED_CONFLICT

## modeSpecificMinimumData
- 通常時はAT/RTを介さずリアルボーナス当選を目指すノーマル系BT機。
- SUPER BIGまたは暴走モード終了後にBTへ移行。
- 天井は非搭載。
- BT中は対象ボーナス成立でBT継続、終了ボーナス成立で通常時へ戻る構造。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_CYCLE_PARTIAL_DIRECT_SOURCE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 必勝本の機種別 `天井&設定変更` で、設定変更時はカスタムがリセット。
- 設定変更後の開始ステージは実戦上「司令室」。
- 本機は天井非搭載のため、設定変更による天井短縮・ゲーム数天井リセット恩恵は該当しない。
- 通常時のゲーム数モード/CZモード等を持つAT機ではなく、設定変更専用モードや朝一初当たり優遇率の公開確定値は再探索後も確認できない。
confidence: ANALYSIS_HIGH_FOR_CUSTOM_AND_STAGE / NOT_APPLICABLE_FOR_CEILING / NONE_CONFIRMED_AFTER_RESEARCH_FOR_EXTRA_BENEFIT

### carryOverBehavior
- 天井自体が非搭載のため、宵越し天井・規定G数の引継ぎは該当しない。
- 通常時にホール経営/朝一狙いへ影響するゲーム数モード・ポイント蓄積の公開構造は確認されない。
- BT成立状態を含む特殊な途中状態を設定据え置き後にどう扱うかの機種固有公開契約は十分な再探索後も固定できず、推測しない。
confidence: NOT_APPLICABLE_FOR_CEILING_COUNTER / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_IN_PROGRESS_STATE

### powerCycleBehavior
- 必勝本の機種別比較表では `設定変更・電源OFF/ON` を独立列で扱うが、電源OFF/ON側のカスタム・ステージは現時点で `現在調査中` とされる。
- 天井非搭載のため、純電断による天井ゲーム数引継ぎ/リセットは該当しない。
- BT中など特殊状態での純電断復帰仕様は、高優先の機種別公開資料を検索語変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLIC_TABLE_STATUS / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE_POWER_CYCLE

### gameCounterReset
- 天井・規定G数天井を持たないため `NOT_APPLICABLE`。
- 朝一客の宵越しゲーム数狙いを成立させる内部G数カウンタは確認されない。
confidence: NOT_APPLICABLE_CONFIRMED

### ceilingAfterReset
normalMaximumCeiling: NONE
afterSettingChangeCeiling: NONE
- 1geki、HAZUSE、必勝本系資料で天井非搭載を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT機のような通常A/B・天国・規定G数モードは確認されない。
- 設定変更専用モード/朝一モード振り分けの公開値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 通常時にホール経営上追跡すべき高確/低確/CZ内部状態の公開構造は確認されない。
- 設定変更後の見た目開始ステージは実戦上「司令室」。
confidence: NONE_CONFIRMED_AFTER_RESEARCH_FOR_INTERNAL_STATE / ANALYSIS_HIGH_FOR_VISIBLE_STAGE

### advantageousSectionReset
- スマスロ機だが、通常時の朝一狙いに直結する有利区間天井・有利区間モード等は公開ゲーム性として確認されない。
- 設定変更/据え置き/純電断それぞれの有利区間内部契約を本機固有資料で明示した高信頼ソースは再探索後も固定できず、一般論から補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_ADVANTAGEOUS_SECTION_CONTRACT

### resetBenefits
- 天井短縮: NONE（天井非搭載）。
- 朝一専用ゾーン、専用高確、設定変更時の初当たり優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後の実戦上開始ステージは司令室だが、当選率優遇を意味する資料はないため恩恵扱いしない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / NONE_CONFIRMED_AFTER_RESEARCH_FOR_NUMERIC_BENEFITS

### resetPenalties
- 天井/規定G数の持ち越し価値が存在しないため、通常AT機のような「リセットで宵越し天井進行消失」は該当しない。
- 設定変更専用の冷遇数値・不利モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_CARRYOVER / NONE_CONFIRMED_AFTER_RESEARCH_FOR_EXTRA_PENALTY

### resetDetection
- 設定変更でカスタムがリセットされることは公開比較表で確認できるため、前日のカスタム状態を把握できる場合は補助的な変更推測材料になり得る。ただしホール側操作でも変更可能なため確定判別とはしない。
- 設定変更後のステージは実戦上司令室。純電断側ステージは公開資料で調査中のため、開始ステージだけによる変更/据え置き確定判別には使用しない。
- 本機固有のリールガックン条件・発生率は、機種名/型式/ビスティ/SANKYOと `ガックン / 朝一 / 設定変更 / 据え置き / 電源OFF ON / リール` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CUSTOM_RESET / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: NONE
resetMaximumCeiling: NONE
resetModeDistribution: NOT_APPLICABLE_OR_PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 設定5のBB合算は1geki/パチビー/複数解析が `1/254.0`、情報島が `1/251.0`。平均せず `CONFLICT_1/254.0_VS_1/251.0` として保持。ボーナス合算1/161.4、REG1/442.8、機械割107.0%は一致。
- 50枚ベースはHAZUSE/P-WORLDが `約41G`、後発ベース一覧が `40.4G`。丸め差の可能性はあるが定義/算出元を完全固定できないため両表記を保持。
- 一部ページでSBB/暴走モードの獲得を「404枚+α / 297枚+α」と表記するが、これは初当りボーナスにBT1回分期待値を加えた表現。単体の初当り獲得はSBB最大203枚、暴走モード最大96枚として定義を分離。

## missingFields
- 純電源OFF→ON時のカスタム/開始ステージ確定仕様: PUBLIC_SOURCE_STILL_INVESTIGATING
- 設定変更/据え置き/純電断それぞれの本機固有有利区間内部契約: UNVERIFIED_AFTER_RESEARCH
- BTなど特殊途中状態の据え置き/純電断復帰契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一専用当選率/リセット恩恵率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/983/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-95832/
- P-WORLD 検定通過記事: https://news.p-world.co.jp/articles/30804/greenbelt
- HAZUSE機種情報: https://hazuse.com/hd/530121-2/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10301
- パチビー機種情報: https://www.pachibee.jp/machines/index/225060001
- 情報島 機種情報: https://p-johojima.jp/machine_spec/post-9186/
- 1geki 機種解析: https://1geki.jp/slot/lb_eva/
- 1geki 小役/ベース: https://1geki.jp/slot/lb_eva/4/
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4546/1/110184
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87480/
- 必勝本 小役/コイン持ち: https://hisshobon.com/machineinfo/87483/
- P-Summa スマスロベース一覧: https://psumma.jp/pachislo/70025/
