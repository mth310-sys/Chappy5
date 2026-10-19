# L範馬刃牙

recordNo: 1779
machineName: L範馬刃牙
aliases: スマスロ範馬刃牙 / L 範馬刃牙 / 範馬刃牙
manufacturer: 平和 / OLYMPIA
formalModel: L範馬刃牙L5
inspectionCode: 5S1472
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス経由ゲーム数管理AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `L範馬刃牙L5`、検定番号 `5S1472`、導入開始日2026-02-02、メーカー平和を確認。
- 必勝本・なな徹・パチマガスロマガ系でも2026-02-02導入として一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.5%
- setting3: 100.5%
- setting4: 105.2%
- setting5: 107.9%
- setting6: 110.6%
initialHitBySetting:
  hanmaBonus:
  - setting1: 1/269.4
  - setting2: 1/265.7
  - setting3: 1/258.3
  - setting4: 1/252.1
  - setting5: 1/251.0
  - setting6: 1/250.1
  at:
  - setting1: 1/525.3
  - setting2: 1/517.1
  - setting3: 1/503.2
  - setting4: 1/484.5
  - setting5: 1/481.9
  - setting6: 1/480.4
baseGamesPer50: 約32.1G/50枚
netIncrease:
- AT「野人戦争」: 約2.8枚/G
- 「地上最強の親子喧嘩」および昇格後区間: 約5.2枚/G
basicPayout:
- 範馬BONUS: 25G / 純増約2.8枚/G / 平均約70枚
- AT「野人戦争」: 初回50G+α、2セット目以降30G+α
- 地上最強の親子喧嘩: 1セット15G、最大10セット、初期セットループ率66.4%（初回継続濃厚）
modeSpecificMinimumData:
- CZ「真ッ向勝負ッッ」: 10G+α、AT期待度約53%
- 範馬BONUSのCZ期待度: 約52%（設定1）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数・天井までのボーナススルー回数をRESET。
- モード・内部状態を再抽選。
- エンドルフィン効果およびAT間天井も設定変更でRESETとする機種固有二次解析あり。
- 設定変更時の開始ステージは必勝本実戦上「市街地」。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間を引き継ぐことをなな徹の朝一比較で確認。
- 天井ゲーム数・スルー回数・モード・内部状態は、純電断比較および据え置き契約から引継ぎとして扱う。
- 朝一の見た目表示は初期化されるため、表示だけで設定変更/据え置きを判別しにくい。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION / ANALYSIS_HIGH_INFERRED_FROM_MACHINE_SPECIFIC_POWER_CYCLE_TABLE_FOR_OTHER_ITEMS

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数を引き継ぐ。
- 天井までのボーナススルー回数を引き継ぐ。
- モード・内部状態を引き継ぐ。
- パチマガスロマガFREEでは有利区間・ボーナス間天井・内部モード・エンドルフィン効果・AT間天井をすべて引き継ぐとする。
- 電断時の開始ステージは主要高優先資料で調査中。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE / MULTI_SOURCE_SUPPORT

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常最大700G+α。設定変更時は通常C 0.8%を除き、99.2%が天国/チャンス選択のため200G+α以内で範馬BONUS当選。
- 設定変更時を「最大200G固定」とはしない。通常C 0.8%選択時は最大700G+αまで到達し得る。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### ceilingAfterReset
normalCeiling:
- bonusGameCeiling: 最大700G+α
- bonusThroughCeiling: AT非当選の範馬BONUS最大6スルー、7回目でAT
resetCeiling:
- modeDistributionEffect: 99.2%で200G+α以内
- exceptionalModeC: 0.8%、最大700G+α、初当たりは地上最強の親子喧嘩濃厚
- throughCount: 設定変更時は規定スルー回数振り分けを再抽選し、高設定ほど浅い回数が優遇
resetShortening: STRONG_DISTRIBUTION_SHORTENING_NOT_ABSOLUTE_FIXED_200G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- モードは通常A / 通常B / 通常C / チャンス / 天国の5種類。
- canonical設定変更時振り分け: 通常A 0% / 通常B 0% / 通常C 0.8% / チャンス61.7% / 天国37.5%。
- 天国+チャンス=99.2%なので、設定変更時は99.2%で200G+α以内に範馬BONUS。
- 200G+αを超えた場合は通常C濃厚となり、初当たり「地上最強の親子喧嘩」濃厚。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE / MULTI_SOURCE_MATCH_WITH_CONFLICT_NOTED

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 純電源OFF→ONでは内部状態を引き継ぐ。
- 据え置きも引継ぎ契約として扱う。
- 設定変更時の低確/高確等の個別初期振り分け数値は今回の高優先資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CARRYOVER / UNVERIFIED_FOR_INITIAL_DISTRIBUTION

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- なな徹で設定変更RESET・据え置き引継ぎを直接確認。
- パチマガスロマガFREEでは純電断時の有利区間引継ぎも機種固有に明記。
- ピクルエンディング終了後など通常営業中の有利区間リセットではAT/Vストック等の恩恵があるが、設定変更時はその恩恵対象外。朝一恩恵へ誤転用しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_SUPPORT

### resetBenefits
- 設定変更時は99.2%で天国またはチャンスを選択し、200G+α以内に範馬BONUS。
- 200G+αを超えた0.8%の通常Cでは、初当たりが「地上最強の親子喧嘩」濃厚。
- ボーナススルー回数天井の規定回数も設定変更時に再抽選され、高設定ほど浅い回数が強く優遇される。
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

### resetPenalties
- 据え置きなら保持されるゲーム数、スルー回数、モード、内部状態等を設定変更では失う。
- ピクルエンディング後などの通常有利区間リセット恩恵は設定変更時には適用されない。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一200G+αを消化してゲーム数天井が発動せず、通常Cも否定した場合は据え置き濃厚。
- 200G超え後の初当たりで「地上最強の親子喧嘩」を否定することも据え置き推測材料。
- 朝一は見た目の表示がリセットされるため表示だけでは判別困難。
- 設定変更時の開始ステージは必勝本実戦上「市街地」だが、ステージ単独で確定判別する公開条件は固定できず。
- 本機固有のリールガックン条件/発生率は主要資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_MODE_BEHAVIOR / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetModeDistributionCanonical:
- normalA: 0%
- normalB: 0%
- normalC: 0.8%
- chance: 61.7%
- heaven: 37.5%
resetWithin200GProbability: 99.2%
normalMaxGameCeiling: 700G+α
modeCCeiling: 700G+α
chanceCeiling: 200G+α
heavenCeiling: 100G+α
resetThroughCeilingDistribution:
- setting1: 1回4.7% / 2回1.6% / 3回10.2% / 4回1.6% / 5回10.2% / 6回1.6% / 7回70.3%
- setting2: 1回5.9% / 2回2.3% / 3回12.5% / 4回2.3% / 5回12.5% / 6回2.3% / 7回62.1%
- setting3: 1回6.3% / 2回3.1% / 3回21.9% / 4回4.7% / 5回20.3% / 6回4.7% / 7回39.1%
- setting4: 1回9.4% / 2回5.5% / 3回32.4% / 4回9.0% / 5回29.3% / 6回9.0% / 7回5.5%
- setting5: 1回9.8% / 2回5.9% / 3回32.8% / 4回9.4% / 5回29.7% / 6回9.4% / 7回3.1%
- setting6: 1回10.2% / 2回6.3% / 3回33.2% / 4回9.8% / 5回30.1% / 6回9.8% / 7回0.8%
confidence: ANALYSIS_HIGH / DIRECT_NUMERIC_TABLE

## conflicts
- 設定変更時のモード振り分けについて、必勝本・なな徹・1gekiは `通常C 0.8% / チャンス61.7% / 天国37.5%` で一致。一方、ちょんぼりすた・アルテマは `チャンス37.5% / 天国61.7%` と逆転表記。複数の高優先解析が一致する前者をcanonicalとし、後者を `CONFLICT_LIKELY_TRANSPOSED_CHANCE_HEAVEN_LABELS` として保持する。
- 「設定変更時は200G+α天井」とする簡略表現があるが、解析表では通常C 0.8%が存在し最大700G+αとなる。固定200G天井とは扱わず `99.2%が200G+α以内` をcanonical仕様とする。

## retrospectiveResetQA
- 今回、最新mainで過去QAカーソルとして過去handoffにあった `2007-07-09_genju-haou-t.md` / `幻獣覇王T` / `2007-07-09` を再検索したが、現在のGitHubコード検索では該当実レコードを一意取得できなかった。
- 外部導入順から次レコードを推測して既存COMPLETE_COREを変更することはせず、既存性能完了判定は維持。
- resetBehavior遡及QAは `CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH` として別管理し、次回も実体ツリー/旧handoff/履歴系統を優先してカーソル復元を試みる。

## sources
retrievedAt: 2026-09-15
- HEIWA公式製品: https://www.heiwanet.co.jp/products/pachislot/bk2/
- HAZUSE 型式/検定/導入: https://hazuse.com/hd/5s1472/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89156/
- 必勝本 天井・設定変更/電断比較: https://hisshobon.com/machineinfo/89126/
- 必勝本 モード選択抽選: https://hisshobon.com/machineinfo/89140/
- 必勝本 モード: https://hisshobon.com/machineinfo/89139/
- 必勝本 規定ゲーム数: https://hisshobon.com/machineinfo/89112/
- 必勝本 ボーナススルー回数天井: https://hisshobon.com/machineinfo/89111/
- 必勝本 範馬BONUS: https://hisshobon.com/machineinfo/89109/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/1098/34268/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1098/34932/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1098/34934/
- なな徹 天井/スルー: https://nana-press.com/kaiseki/machine/1098/34929/
- なな徹 地上最強の親子喧嘩: https://nana-press.com/kaiseki/machine/1098/34947/
- 1geki モード/規定G: https://1geki.jp/slot/l_baki2/43/
- パチマガスロマガFREE 機種TOP: https://pachimaga.com/free/mach/maker-s/heiwa/064786.php
- パチマガスロマガ攻略 モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/54/tj05.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10401
- ちょんぼりすた（競合確認）: https://chonborista.com/slot/orinpia-slot/248697/
- アルテマ（競合確認）: https://altema.jp/pachimo/lhanmabakireset
