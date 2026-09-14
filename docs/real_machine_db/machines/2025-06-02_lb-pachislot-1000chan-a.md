# LBパチスロ1000ちゃんA

recordNo: 1736
machineName: LBパチスロ1000ちゃんA
aliases: LB1000ちゃんA / LB1000ちゃんA（アルファ） / LBパチスロ1000ちゃん / LB1000ちゃんアルファL3
manufacturer: オーイズミ
formalModel: LB1000ちゃんアルファL3
inspectionCode: 5S0039
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス + BT（ボーナストリガー）
settings: L / 1 / 2 / 5 / 6 / H
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで検定番号 `5S0039`、型式 `LB1000ちゃんアルファL3`、メーカー オーイズミ、導入開始日2025-06-02を確認。
- 日工組・日電協が公表したBT第一陣4機の記事で販売名 `LB1000ちゃんA（アルファ）`、メーカー オーイズミ、2025-06-02以降稼働開始を確認。
- 必勝本でも2025-06-02導入、オーイズミ、ノーマル+BTを確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: UNPUBLISHED_SPECIAL_SETTING
- setting1: 98.0%
- setting2: 99.8%
- setting5: 104.0%
- setting6: 108.0%
- settingH: 108.7%
initialHitBySetting:
  bigCombined:
  - settingL: UNPUBLISHED_SPECIAL_SETTING
  - setting1: 1/190.0
  - setting2: 1/182.0
  - setting5: 1/164.3
  - setting6: 1/152.8
  - settingH: 1/662.0
  thousandBonus:
  - settingL: UNPUBLISHED_SPECIAL_SETTING
  - setting1: 1/1598.4
  - setting2: 1/1598.4
  - setting5: 1/1598.4
  - setting6: 1/1598.4
  - settingH: 1/13107.2
  suddenJac:
  - settingL: UNPUBLISHED_SPECIAL_SETTING
  - setting1: 1/16384.0
  - setting2: 1/16384.0
  - setting5: 1/16384.0
  - setting6: 1/16384.0
  - settingH: 1/65536.0
  bonusCombined:
  - settingL: UNPUBLISHED_SPECIAL_SETTING
  - setting1: 1/168.0
  - setting2: 1/161.8
  - setting5: 1/147.6
  - setting6: 1/138.3
  - settingH: 1/624.2
  thousandPartyInitial:
  - settingL: UNPUBLISHED_SPECIAL_SETTING
  - setting1: 1/1456.4
  - setting2: 1/1456.4
  - setting5: 1/1456.4
  - setting6: 1/1456.4
  - settingH: 1/10922.7
baseGamesPer50:
- settings1to6: 約38.8G
- settingH: 約7710.1G
- settingL: UNPUBLISHED_SPECIAL_SETTING
netIncrease: NOT_APPLICABLE_FIXED_NET_INCREASE（リアルボーナス主体。BT「1000PARTY」はボーナス高確率状態）
basicPayout:
- BIG BONUS: 最大179枚。1000PARTYの終了契機
- 1000☆BONUS: 最大99枚 + 終了後1000PARTYへ
- 突JAC / 推しJAC: 最大99枚
- 1000PARTY中は推しJACが約75%でループし、BIG成立まで継続
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 1000☆BONUSまたは突JAC後にBT「1000PARTY」へ。
- 1000PARTY中は推しJACを約75%でループし、BIG成立がBT終了契機。
- 天井機能は非搭載。
- 設定Hは特殊設定。50枚あたり約7710.1Gと極端に高いベースに対し、ボーナス合算1/624.2、1000PARTY初当り1/10922.7、機械割108.7%。
- 設定L搭載はHAZUSE等で確認できるが、性能数値は公開欄が調査中/非公表のため推測しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NOT_APPLICABLE_FIELDS_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井非搭載のノーマル+BT機のため、天井ゲーム数・CZスルー・通常ゲーム数モードの設定変更リセットはNOT_APPLICABLE。
- 設定変更時だけ適用される短縮天井、朝一専用モード、高確開始、初当り優遇などの機種固有公開情報は、機種名・型式名・メーカー名・シリーズ名と関連検索語を変更して横断したが確認できなかった。
- BT中に営業を終了した場合の設定変更によるBT内部状態の扱いを直接明記する高信頼機種固有資料は固定できず、一般論から推測しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / NONE_CONFIRMED_AFTER_RESEARCH_FOR_DEDICATED_MORNING_EFFECT / UNVERIFIED_FOR_INTERRUPTED_BT

### carryOverBehavior
- 天井・通常ゲーム数モード・CZ/ATゲーム数は本機の公開ゲーム構造上NOT_APPLICABLE。
- 据え置き時だけの朝一恩恵/不利、内部カウンタ引継ぎの公開値は確認できなかった。
- BT中閉店→翌朝据え置きという特殊ケースの内部状態を直接規定する資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_AND_NORMAL_MODE / UNVERIFIED_FOR_INTERRUPTED_BT

### powerCycleBehavior
- 必勝本の機種別「設定変更・電源OFF/ON」比較表では天井はナシ、リールガックンは設定変更・電源OFF/ON双方とも「現在調査中」。
- 純電源OFF→ONだけで適用される専用朝一モード、天井変更、当選率優遇などは確認できなかった。
- BT中の純電断による内部状態維持/消失は機種固有公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECT_COMPARISON_TABLE / UNVERIFIED_AFTER_RESEARCH_FOR_INTERRUPTED_BT

### gameCounterReset
- 天井ゲーム数カウンタ: NOT_APPLICABLE（天井非搭載）。
- 規定G数/CZスルー等の朝一狙い用カウンタ: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- 必勝本、HAZUSE、複数解析資料で天井非搭載を照合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等のゲーム数モード、朝一専用モードは公開ゲーム構造上NOT_APPLICABLE。
- 設定変更専用モード振り分けの公開値はNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- CZ/ATの通常時高確・低確に相当する朝一状態再抽選は公開ゲーム構造上NOT_APPLICABLE。
- BT中の設定変更/純電断をまたぐ直接仕様は `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_NORMAL_MORNING_STATE / UNVERIFIED_FOR_INTERRUPTED_BT

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断時における有利区間の直接契約は、`LBパチスロ1000ちゃんA / LB1000ちゃんA / LB1000ちゃんアルファL3 / オーイズミ / 設定変更 / リセット / 据え置き / 電源OFF ON / 有利区間` を組み替えて再探索したが固定できなかった。
- ノーマル+BTというゲーム構造のみから推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の短縮天井、朝一専用モード、高確スタート、初当り/CZ優遇などはNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 天井進行消失は天井非搭載のためNOT_APPLICABLE。
- 設定変更朝一固有の公開された冷遇率・不利モード・当選率低下はNONE_CONFIRMED_AFTER_RESEARCH。
- BT中閉店時の設定変更影響は直接仕様未確認のため不利と断定しない。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_FOR_INTERRUPTED_BT

### resetDetection
- 必勝本の直接比較表でリールガックンは設定変更・電源OFF/ONとも「現在調査中」。
- 機種名・正式型式・オーイズミ名と `ガックン/リールガックン/設定変更/リセット/朝一/据え置き` を組み替えて再探索したが、本機固有ガックン条件・発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため天井到達ゲーム数を用いた設定変更判別はNOT_APPLICABLE。
confidence: ANALYSIS_HIGH_FOR_CURRENTLY_UNDER_RESEARCH_TABLE / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 導入前の一部暫定/噂資料に設定6ボーナス合算 `1/138.8` の表記があるが、導入後の必勝本・HAZUSE等の確定解析は `1/138.3` で一致。canonicalは導入後確定値1/138.3とし、導入前暫定値は性能CONFLICTへ昇格させない。
- 呼称は業界発表 `LB1000ちゃんA（アルファ）`、解析サイト `LBパチスロ1000ちゃんA`、型式 `LB1000ちゃんアルファL3`。同一機の表記差としてaliasesへ保持。

## missingFields
- BT中の設定変更/純電源OFF→ON/営業跨ぎの内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の有利区間直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一関連数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定Lの具体性能値: UNPUBLISHED_SPECIAL_SETTING

## sources
取得日: 2026-09-14
- オーイズミ公式製品ページ: https://www.oizumi.co.jp/machine/1000chan_a/
- HAZUSE 機種詳細/型式/検定番号: https://hazuse.com/machine/pachislot/5S0039/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S0039/genre/201/
- 情報島 BT第一陣（日工組・日電協発表）: https://p-johojima.jp/news/post-852/
- 必勝本 基本スペック/天井&設定変更: https://p.hisshobon.jp/vpage/2697/2
- 必勝本 設定H: https://hisshobon.com/machineinfo/86792/
- 1geki 基本/ゲーム性: https://1geki.jp/slot/lb_1000chan/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/40/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10255
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/234451/
