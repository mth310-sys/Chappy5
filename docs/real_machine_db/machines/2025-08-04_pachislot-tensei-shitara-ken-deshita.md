# パチスロ 転生したら剣でした

recordNo: 1745
machineName: パチスロ 転生したら剣でした
aliases: 転生したら剣でした / 転剣 / L転生したら剣でした
manufacturer: グレードワン
salesBrand: コナミアミューズメント
formalModel: L転生したら剣でしたGT
inspectionCode: 5S0141
releaseDate: 2025-08-04
generation: 6.5号機 / スマスロ
systemType: AT / CZ + 擬似ボーナス + ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- コナミアミューズメント公式は『パチスロ 転生したら剣でした』を2025-08-04稼働開始と案内し、製造元を株式会社グレードワンと明記。
- HAZUSEで検定番号 `5S0141`、型式名 `L転生したら剣でしたGT`、導入開始日2025-08-04を確認。
- P-WORLD業界記事の検定通過情報でも `L転生したら剣でしたGT（グレードワン）` を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.0%
- setting3: 101.2%
- setting4: 105.7%
- setting5: 109.1%
- setting6: 112.1%
initialHitBySetting:
  cz:
  - setting1: 1/215.8
  - setting2: 1/214.2
  - setting3: 1/211.0
  - setting4: 1/204.8
  - setting5: 1/201.2
  - setting6: 1/197.8
  bonus:
  - setting1: 1/398.6
  - setting2: 1/388.7
  - setting3: 1/380.8
  - setting4: 1/352.0
  - setting5: 1/335.0
  - setting6: 1/316.8
  at:
  - setting1: 1/403.8
  - setting2: 1/396.0
  - setting3: 1/373.4
  - setting4: 1/340.7
  - setting5: 1/325.9
  - setting6: 1/312.8
baseGamesPer50: 約33.3G
netIncrease:
- 転剣RUSH: 約2.4枚/G
- フランBONUS / X転剣BONUS等: 約4.5枚/G
basicPayout:
- フランBONUS: 約80枚
- X転剣BONUS: 約80枚
- 転剣RUSH: 初期50G～200G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はCZ「デーモンバトル」や擬似ボーナスを経由してAT「転剣RUSH」を目指す。
- CZ「デーモンバトル」は1セット4GのST型で成功期待度約50%。
- AT間はモードA/B/C/天国/超天国の5モードで管理。各最大規定Gは970G+α / 600G+α / 300G+α / 100G+α / 100G+α。
- ボーナス間天井は200G / 500G / 980G / 1280G+αの規定G数管理で、AT当選ではクリアされない。
- NOエンディングATを採用し、AT中に有利区間上限へ到達しても見た目上シームレスにATが継続する仕様。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_AND_SINGLE_SOURCE_POWER_CYCLE_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、AT間天井、ボーナス間天井、内部状態、魔石、通常時モードをRESET。
- 設定変更後はモードAを否定し、設定1ではモードB 40.0% / モードC 40.0% / 天国20.0%で開始。
- AT間天井は通常最大970G+αから最大600G+αへ短縮。
- ボーナス間天井は通常最大1280G+αから最大980G+αへ短縮し、200G+α / 500G+α / 980G+αのいずれかになる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井、内部状態、魔石、モードを引き継ぐ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONについて、機種別二次解析で天井・内部状態を引き継ぐと明記。
- 有利区間、魔石、モードまでを純電断条件だけで独立比較した高優先資料は固定できなかったため、それらは据え置き表から自動転記しない。
confidence: ANALYSIS_SINGLE_FOR_DIRECT_POWER_CYCLE / UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_FOR_OTHER_FIELDS

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_ANALYSIS_SINGLE
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### ceilingAfterReset
normalAtCeiling: 最大970G+α
resetAtCeiling: 最大600G+α
normalBonusCeiling: 最大1280G+α
resetBonusCeiling: 最大980G+α
resetBonusCeilingCandidates: 200G+α / 500G+α / 980G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードAを否定し、モードB以上から開始。
- 設定1の公開振り分けはモードB 40.0% / モードC 40.0% / 天国20.0%。設定2以上の具体振り分けは公開値を固定できずPUBLIC_VALUE_NOT_FOUND。
- 据え置きはモード引継ぎ。
- 純電断のみのモード引継ぎは直接高優先資料を固定できずUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### stateAfterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_ANALYSIS_SINGLE
- 魔石も設定変更でRESET、据え置きでCARRY_OVER。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更時以外の通常の有利区間リセット後恩恵は公開資料上「調査中」であり、設定変更時にはその恩恵を適用しない旨が明記されているため朝一恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER

### resetBenefits
- AT間天井が最大970G+α→600G+αへ短縮。
- ボーナス間天井が最大1280G+α→980G+αへ短縮。
- 設定1ではモードB/C/天国=40/40/20%のため、モードAを否定し浅い規定G数が優遇。
- 朝一からX転剣BONUS 0回の場合、ATモード2選択率はAT2回目約7%（設定1）、3回目約30%・5回目約30%（全設定共通）という朝一関連公開値あり。ただし物差しDBでは変更影響説明用の補助値としてのみ保持し、AT内部完全再現には使用しない。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日までの天井進行、内部状態、魔石、モードを失う。
- 設定変更時を除く有利区間リセット恩恵は設定変更では適用対象外とされる。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一600G消化でAT間天井が非発動、またはボーナス間980G消化でボーナス間天井が非発動なら据え置き濃厚材料。
- 一部機種別解析は「対策なしなら設定変更後1G目ガックンが有効」と明記するが、今回高優先の別ソースで同条件を直接照合できなかったため `ANALYSIS_SINGLE_GAKKUN` として保持。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / ANALYSIS_SINGLE_FOR_GAKKUN

### numericResetData
resetModeDistributionSetting1:
- modeB: 40.0%
- modeC: 40.0%
- heaven: 20.0%
resetAtCeiling: 最大600G+α
resetBonusCeiling: 最大980G+α
resetBonusCeilingCandidates: 200G+α / 500G+α / 980G+α
morningAtMode2SelectionWhenXTenkenBonus0:
- secondAT_setting1: 約7%
- thirdAT_allSettings: 約30%
- fifthAT_allSettings: 約30%
resetGakkun: ANALYSIS_SINGLE_IF_NOT_COUNTERMEASURED

## conflicts
- 一部後発二次サイトに設定3機械割 `101.0%` の記載があるが、一撃・必勝本・パチマガスロマガ等の複数解析は `101.2%` で一致。`101.0%` は `CONFLICT_MINOR_SECONDARY` として隔離しcanonicalは101.2%。
- メーカー表記は媒体により「コナミアミューズメント」と「グレードワン」が混在するが、コナミ公式が製造元=グレードワンと明記しているため、manufacturer=グレードワン / salesBrand=コナミアミューズメントとして分離し性能競合とは扱わない。

## missingFields
- 純電源OFF→ON時の有利区間・魔石・モードを個別に直接比較した高優先資料: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定2以上の設定変更時モード具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件の別系統ソース照合: ANALYSIS_SINGLE_ONLY

## sources
取得日: 2026-09-14
- コナミアミューズメント公式 製品サイト: https://www.konami.com/amusement/psm/slot/tenken-anime/
- コナミアミューズメント公式 発売発表（製造元=グレードワン）: https://www.konami.com/amusement/corporate/ja/topics/20250526/
- コナミアミューズメント公式 稼働開始案内: https://www.konami.com/amusement/corporate/ja/topics/20250729tk/
- HAZUSE 機種詳細: https://hazuse.com/hd/5s0141/
- P-WORLD/グリーンべると 検定通過: https://news.p-world.co.jp/articles/30688/greenbelt
- 一撃 機種トップ: https://1geki.jp/slot/l_tenken/
- 一撃 天井・朝一: https://1geki.jp/slot/l_tenken/3/
- 一撃 規定G数・モード: https://1geki.jp/slot/l_tenken/47/
- 一撃 小役/ベース: https://1geki.jp/slot/l_tenken/4/
- なな徹 設定変更・朝一・据え置き・有利区間: https://nana-press.com/kaiseki/machine/996/31122/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4548/1/110085
- 必勝本 設定看破/CZ・ボーナス・AT確率: https://hisshobon.com/machineinfo/87551/
- 必勝本 モード: https://hisshobon.com/machineinfo/87559/
- パチマガスロマガ ボーナス確率・機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/31/kh02.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10308
- パチビー 基本スペック/攻略: https://www.pachibee.jp/machines/index/225070004
- パチビー 天井・設定変更短縮: https://www.pachibee.jp/machines/kouryaku/225070004
- ちょんぼりすた（フランBONUS/CZ性能補助）: https://chonborista.com/slot/konami-slot/238501/
- kaku6（純電源OFF→ON・ガックン直接記載の単一二次資料）: https://www.kaku6.jp/slot/tenken/
