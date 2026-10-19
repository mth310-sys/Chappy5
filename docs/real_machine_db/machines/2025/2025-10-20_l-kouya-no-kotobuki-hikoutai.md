# L 荒野のコトブキ飛行隊

recordNo: 1758
machineName: L 荒野のコトブキ飛行隊
aliases: スマスロ 荒野のコトブキ飛行隊 / 荒野のコトブキ飛行隊 / L荒野のコトブキ飛行隊SS
manufacturer: スパイキー（製造） / フィールズ（販売）
formalModel: L荒野のコトブキ飛行隊SS
inspectionCode: 5S0846
releaseDate: 2025-10-20
generation: 6.5号機 / スマスロ
systemType: AT / ST型AT / CZ + 規定ゲーム数
settings: L / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- G-netのホール向け販売概要はスパイキー（フィールズ）、型式 `L荒野のコトブキ飛行隊 SS`、開店日2025-10-20を掲載。
- HAZUSEは型式 `L荒野のコトブキ飛行隊SS`、検定番号 `5S0846`、導入開始日2025-10-20を掲載。
- パチビー、P-WORLD、各解析サイトも2025-10-20導入で一致。
- 設定Lを搭載。通常運用設定は2/3/4/5/6で、設定Lの出玉率等は公開性能表に数値掲載なし。
confidence: INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: PUBLIC_NUMERIC_VALUE_NOT_FOUND
- setting2: 97.4%
- setting3: 98.8%
- setting4: 102.5%
- setting5: 106.2%
- setting6: 110.8%
initialHitBySetting:
  cz:
  - setting2: 1/212.0
  - setting3: 1/213.8
  - setting4: 1/218.0
  - setting5: 1/219.8
  - setting6: 1/225.1
  at:
  - setting2: 1/414.9
  - setting3: 1/391.0
  - setting4: 1/356.2
  - setting5: 1/339.8
  - setting6: 1/318.9
baseGamesPer50: 約35G/50枚（設定2）
netIncrease:
- 空戦RUSH / 超空戦RUSH: 約7.0枚/G
basicPayout:
- 空戦RUSH: ST型AT、基本20〜49G+α、継続期待度は状態により約64〜91%
- 超空戦RUSH: 50G+α、純増約7.0枚/G、継続期待度約92%（設定2基準の紹介値）
- ボーナス: 擬似ボーナス、獲得枚数は契機/内容により変動
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はCZと規定ゲーム数からAT「空戦RUSH」を目指す。
- CZは「富嶽襲来ZONE」「月夜の用心棒」など。CZ確率は設定別に公開。
- ゲーム数天井は通常最大1500G+α。600/900/1200/1500Gの振り分けが存在。
- CZは最大6スルー後の7回目でAT当選濃厚。
- CZポイントは20pt到達でCZ本前兆へ書き換え。有利区間リセットまで保持される解析あり。
- 設定Lは特殊設定。通常性能値へ混ぜず独立扱い。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_GAME_CEILING_CZ_SKIP_DISTRIBUTIONS_AND_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はゲーム数天井をRESET/再抽選し、通常最大1500G+αから最大1400G+αへ短縮。
- ちょんぼりすたの朝一比較表では内部状態もRESET。
- 有利区間は設定変更時にRESET。なな徹が有利区間リセット契機として設定変更時を明記。
- CZスルー回数天井も設定変更後専用振り分けへ再抽選され、浅い回数が大幅に優遇。
- CZポイントは有利区間リセットまで保持されるため、設定変更による有利区間RESET時には前日蓄積を持ち越さない構造。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は前日のゲーム数天井進行、CZスルー回数等の内部進行を引き継ぐとする機種別朝一解析を確認。
- 据え置き時の有利区間も引継ぎとする機種別二次資料あり。
- 純据え置きの内部状態を独立項目で列挙した高優先直接表は今回固定できず、純電断比較表をそのまま自動転記しない。
confidence: ANALYSIS_SINGLE_TO_HIGH_FOR_CEILING_AND_CZ_PROGRESS / ANALYSIS_SINGLE_FOR_ADVANTAGEOUS_SECTION / UNVERIFIED_DIRECT_STATE_WORDING

### powerCycleBehavior
- ちょんぼりすたの機種別朝一比較表では、電源OFF→ONのみの場合は天井と内部状態を引き継ぐ。
- 純電断時のCZスルー回数・CZポイント・有利区間をそれぞれ独立条件で明記する高優先資料は、機種名/型式/メーカー名と「電源OFF ON・据え置き・朝一・有利区間・CZスルー」を組み替えて再探索後も固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_DIRECT_FOR_CZ_PROGRESS_POINT_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
settingChange:
- gameCountCeiling: RESET_AND_RESELECT_SHORTENED_TABLE
- maximumCeiling: 1400G+α
carryOver:
- ceilingProgress: CARRY_OVER_SECONDARY_MACHINE_SPECIFIC
powerCycle:
- ceilingProgress: CARRY_OVER_MACHINE_SPECIFIC_TABLE
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaximumCeiling: 1500G+α
resetMaximumCeiling: 1400G+α
resetGameCeilingDistribution:
- 500G: 1.6%
- 800G: 75.0%
- 1100G: 11.7%
- 1400G: 11.7%
normalReferenceAfterST:
- 600G: 0.4%
- 900G: 3.1%
- 1200G: 15.6%
- 1500G: 80.9%
notes:
- 設定変更後は通常候補より各100G浅い500/800/1100/1400G候補となり、800G選択が75.0%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機で朝一客行動に直接効く公開リセット契約として、ゲーム数天井テーブルとCZスルー天井テーブルの再抽選を優先収録。
- 通常時の全内部モード/テーブル移行率は実機完全再現用詳細となるため、本DBでは収集対象外。
- 設定変更時に独立した「朝一モード名」として高優先資料で確定できる公開契約は `NOT_SEPARATELY_CONFIRMED`。
confidence: ANALYSIS_HIGH_FOR_RESET_TABLES / NOT_SEPARATELY_CONFIRMED_FOR_NAMED_MORNING_MODE

### stateAfterReset
settingChange: RESET
powerCycle: CARRY_OVER
carryOver: DIRECT_MACHINE_SPECIFIC_STATE_WORDING_NOT_FIXED
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_DIRECT_FOR_CARRYOVER

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER_SECONDARY_MACHINE_SPECIFIC
powerCycle: DIRECT_MACHINE_SPECIFIC_WORDING_NOT_FIXED
- なな徹は有利区間リセット契機として設定変更時を掲載。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 設定変更以外の有利区間リセット時恩恵は資料上「設定変更時を除く」契約が含まれるため、朝一設定変更恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_LAMP / ANALYSIS_SINGLE_FOR_CARRYOVER / UNVERIFIED_DIRECT_FOR_POWER_CYCLE

### resetBenefits
- ゲーム数天井が通常最大1500G+α → 最大1400G+αへ短縮。
- 設定変更時のゲーム数天井は **800Gが75.0%**。500G 1.6%、1100G 11.7%、1400G 11.7%。
- CZスルー天井も設定変更後に優遇。公開表は0スルー20.3%、1スルー31.3%、2スルー37.5%、4スルー7.8%、6スルー3.1%。したがって0〜2スルー選択率の単純合算は **89.1%**。
- 上記CZスルー表の比較側通常ST後値には設定2注記がある資料があるため、通常側比較値を全設定共通とは扱わない。設定変更側は複数資料で同値を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の天井進行、内部状態、CZスルー進行、有利区間内で蓄積するCZポイント等の据え置き価値は失われる。
- 設定変更固有の追加的な数値的不利抽選は、表記/型式/朝一/設定変更/リセット検索を変えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_STRUCTURE / NONE_CONFIRMED_FOR_EXTRA_PENALTY

### resetDetection
- 設定変更後の最大ゲーム数天井は1400G+α。朝一でこの短縮契約を超える挙動は据え置き推測材料となるが、+αを含むため単純な1400G到達だけで断定しない。
- 有利区間ランプによる変更/据え置き判別は不可。
- 朝一の液晶/開始ステージだけで確定判別できる公開条件は固定できず、解析サイトでも開始ステージ/判別法は調査中扱いを確認。
- `L 荒野のコトブキ飛行隊 / L荒野のコトブキ飛行隊SS / スパイキー + ガックン / リール / 朝一 / 設定変更 / 据え置き` で検索語を変えて再探索したが、本機固有ガックン条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING_AND_LAMP / UNVERIFIED_FOR_GAKKUN_AND_VISUAL_DETECTION

### numericResetData
normalMaximumCeiling: 1500G+α
resetMaximumCeiling: 1400G+α
resetGameCeilingDistribution:
- 500G: 1.6%
- 800G: 75.0%
- 1100G: 11.7%
- 1400G: 11.7%
resetCzSkipCeilingDistribution:
- 0skip_nextFirstCZ: 20.3%
- 1skip_nextSecondCZ: 31.3%
- 2skip_nextThirdCZ: 37.5%
- 4skip_nextFifthCZ: 7.8%
- 6skip_nextSeventhCZ: 3.1%
resetCzCeilingWithinFirstThreeTotal: 89.1%
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 最大ゲーム数天井: 1400G+α
- 800G天井選択率: 75.0%
- 0〜2スルー天井合算: 89.1%

## conflicts
- 設定2〜6のCZ/AT/出玉率、約35G/50枚、純増約7.0枚/GはG-net、P-WORLD、複数解析で一致し、重大な性能コアCONFLICTなし。
- 導入表現は業界発表に「10月中旬〜順次」の表現もあるが、G-net開店日、HAZUSE、パチビー、P-WORLD等の全国導入日は2025-10-20で一致。本DB releaseDateは2025-10-20を採用し、一般告知の月内表現は競合としない。
- CZスルー天井表は「0/1/2/4/6スルー」と「1/2/3/5/7回目CZ」の表記差がある。意味を対応付け、原表現を混同しないようnumericResetDataではスルー回数と次回CZ回数を併記。

## sources
retrievedAt: 2026-09-15
- https://g-net-ps.com/info/s0227/ — G-net; 型式、メーカー/販売、2025-10-20開店日、設定別CZ/AT/出玉率、約35G/50枚、純増約7.0枚/G (INDUSTRY)
- https://hazuse.com/machine/pachislot/5S0846/ — HAZUSE; 型式、検定番号5S0846、導入日、メーカー (INDUSTRY_DB)
- https://www.pachibee.jp/machines/kouryaku/225090003 — パチビー; 導入日、性能、天井/リセット関連 (INDUSTRY_DB / ANALYSIS)
- https://web-greenbelt.jp/post-104075/ — GreenBelt; スパイキー/フィールズ、ゲーム概要、上位AT約7.0枚/G・継続約92% (INDUSTRY)
- https://www.p-world.co.jp/machine/database/10360 — P-WORLD; 設定変更時ゲーム数天井500/800/1100/1400G、CZスルー天井振り分け (INDUSTRY_DB / ANALYSIS)
- https://chonborista.com/slot/spiky/242461/ — ちょんぼりすた; 設定別性能、天井、設定変更/電断比較、CZポイント、有利区間関連 (ANALYSIS_HIGH)
- https://1geki.jp/slot/l_kotobuki/39/ — 一撃; 設定別CZ/AT/出玉率、ベース、純増 (ANALYSIS_HIGH)
- https://1geki.jp/slot/l_kotobuki/3/ — 一撃; 天井、設定変更時短縮 (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1032/32392/ — なな徹; 通常/設定変更天井と振り分け (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1032/32393/ — なな徹; リセット時天井/狙い目、800G選択率 (ANALYSIS_HIGH)
- https://nana-press.com/kaiseki/machine/1032/32397/ — なな徹; 有利区間リセット契機、ランプ判別 (ANALYSIS_HIGH)
- https://altema.jp/pachimo/lkotobukireset — Altema; 朝一リセットゲーム数/CZスルー振り分け、判別調査中 (ANALYSIS_SINGLE)
- https://slot-solution.site/kotobukihikotai/474/ — Slot Solution; 設定変更/据え置き比較補助 (ANALYSIS_SINGLE)

## missingFields
- 純電源OFF→ON時のCZスルー回数・CZポイント・有利区間を独立明記する高優先機種固有資料: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の内部状態を独立明記する高優先直接資料: UNVERIFIED_AFTER_RESEARCH
- 朝一開始ステージによる確定判別条件: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定Lの具体的な出玉率/主要初当り: PUBLIC_NUMERIC_VALUE_NOT_FOUND

## boundaryNote
- 2025-10-20同日群known canonicalは `L 荒野のコトブキ飛行隊` と `SHAKE BONUS TRIGGER` の2機。
- 本機をNo.1758として処理。残り `SHAKE BONUS TRIGGER` 完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
