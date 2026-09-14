# L 絶対衝激～PLATONIC HEART～

recordNo: 1737
machineName: L 絶対衝激～PLATONIC HEART～
aliases: L絶対衝激 / 絶対衝激 PLATONIC HEART / 絶対衝激 復刻版 / L絶対衝激TK
manufacturer: スパイキー（製造） / フィールズ（発売発表）
formalModel: L絶対衝激TK
inspectionCode: 4S1524
releaseDate: 2025-06-16
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス + CZ + セット管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- スパイキー公式PVで2025-06-16導入開始を告知。
- 遊技通信/P-WORLD業界ニュースでフィールズ発表、型式 `L絶対衝激TK`、スパイキー製、2025年6月中旬導入を確認。
- HAZUSEで型式 `L絶対衝激TK`、検定番号 `4S1524`、2025-06-16導入、メーカー=スパイキーを確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 98.3%
- setting3: 100.2%
- setting4: 104.1%
- setting5: 107.4%
- setting6: 110.2%
initialHitBySetting:
  bonusCombined:
  - setting1: 1/163.0
  - setting2: 1/162.2
  - setting3: 1/161.4
  - setting4: 1/156.0
  - setting5: 1/146.3
  - setting6: 1/139.7
  atInitialHit:
  - setting1: 1/336.3
  - setting2: 1/328.2
  - setting3: 1/318.6
  - setting4: 1/299.4
  - setting5: 1/278.8
  - setting6: 1/264.7
baseGamesPer50: 約36.7G
netIncrease: AT「PLATONIC TIME」約0.3枚/G
basicPayout:
- PLATONIC BONUS: 約200枚 / 25G+α / JAC IN方式
- BATTLE BONUS: 約50枚 / 5G
- CZ「絶対領域」: 5G+α、AT期待度約50%
- AT「PLATONIC TIME」: 1セット30G、純増約0.3枚/G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / INDUSTRY_FOR_GAME_FLOW

## modeSpecificMinimumData
- 通常時はリアルボーナス当選を目指し、全ボーナス後にCZ「絶対領域」または高確CZへ移行。
- CZ成功でAT「PLATONIC TIME」。ATは1セット30G、純増約0.3枚/G。
- 通常時には通常/高確の内部状態があり、高確中のボーナスは高確CZ「超絶対領域」濃厚。
- 天井はボーナス/AT終了後から900G+α。到達時は次回ボーナスまで継続するATに当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_CYCLE_PARTIAL_DIRECT_SOURCE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- なな徹の機種別朝一解析で、設定変更時は `有利区間=リセット / 天井=リセット / 内部状態=リセット`。
- 設定変更後もゲーム数天井は通常条件と同じ900G+αで、固定短縮なし。
- 設定変更時に優遇される要素は当時解析では「調査中」。後発解析も特有の短縮/朝一ゾーンを確認しておらず、公開済みの具体的優遇数値は固定できない。
confidence: ANALYSIS_HIGH_FOR_RESET_TABLE_AND_900G / NONE_CONFIRMED_AFTER_RESEARCH_FOR_EXTRA_BENEFIT

### carryOverBehavior
- なな徹の機種別朝一解析で、据え置き時は `有利区間=引き継ぐ / 天井=引き継ぐ / 内部状態=引き継ぐ`。
- よって前日からのボーナス/AT間天井進行および通常/高確状態は据え置きで継続する。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 後発機種別解析では、純電源OFF→ON時は天井・内部状態を引き継ぎ、見た目は0Gスタートになると整理されている。
- なな徹の公開比較表は `設定変更 vs 据え置き` で、純電断を独立列では示していないため、純電断の直接根拠は単一後発解析扱いとする。
- 純電断時の有利区間そのものの機種固有直接記載は十分な再探索後も高優先資料で固定できず、一般論から補完しない。
confidence: ANALYSIS_SINGLE_FOR_POWER_CYCLE_CEILING_STATE / UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: ボーナス/AT間天井カウンタをリセット。
- 据え置き: 天井カウンタを引き継ぐ。
- 純電源OFF→ON: 後発解析では内部天井を引き継ぎ、見た目の表示は0Gスタート。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### ceilingAfterReset
normalMaximumCeiling: 900G+α
resetMaximumCeiling: 900G+α
ceilingBenefit: 次回ボーナス当選まで継続するAT「PLATONIC TIME」
- 1gekiとなな徹で設定変更後も900G+αを確認。短縮天井なし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- ゲーム数天井を左右する通常A/B等の公開モード構造は確認されない。
- 朝一専用モード、リセット専用モード、設定変更時モード振り分けの公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 通常時には通常/高確の内部状態が存在する。
- 設定変更時は内部状態リセット、据え置き時は引き継ぎをなな徹で直接確認。
- 純電源OFF→ON時は後発解析で内部状態引継ぎとするが、主要高優先比較表で独立確認できないためANALYSIS_SINGLE。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き時: 有利区間引継ぎ。
- なな徹は有利区間リセットタイミングを `設定変更時 / エンディング終了後 / エンディングボーナス終了後` と整理。
- エンディング等の通常営業中の有利区間リセット後は内部的に10G間コンティニュー状態となるが、資料上 `設定変更時を除く` と明記されるため朝一恩恵には混入しない。
- 純電源OFF→ONだけの場合の有利区間直接契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE

### resetBenefits
- 設定変更後の天井短縮はなし（900G+αのまま）。
- 朝一専用高確、専用モード、初当たり/CZ優遇率などの公開確定値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更以外の有利区間リセット後に存在する10Gコンティニュー状態は、設定変更時を除外するため朝一リセット恩恵ではない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_SHORTENING / NONE_CONFIRMED_AFTER_RESEARCH_FOR_OTHER_BENEFITS

### resetPenalties
- 設定変更により前日の天井進行と内部高確状態はリセットされるため、据え置き時に残る宵越し天井進行/高確は失われる。
- 設定変更専用の冷遇モード・初当たり低下率などは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_CARRYOVER / NONE_CONFIRMED_AFTER_RESEARCH_FOR_EXTRA_PENALTY

### resetDetection
- 前日G数を把握した上で、朝一に900G+αより浅い実消化で天井が発動した場合は据え置き推測材料となる。なな徹は「浅いG数で天井発動すると据え置き濃厚!?」とする。
- 本機固有のリールガックン条件・発生率、設定変更確定演出は、機種名/型式/メーカーと `ガックン / 朝一 / 設定変更 / 据え置き / 電源OFF ON` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後発解析でも明確な特有リセット判別演出は未確認。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_INFERENCE / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 900G+α
resetMaximumCeiling: 900G+α
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 朝一追加恩恵について、2025年時点の解析には `調査中` 表記が残る一方、2026年更新の後発解析では「特有の短縮恩恵なし / 朝一ゾーンなし」と整理される。具体的な優遇数値は見つからないため、`SOURCE_MATURITY_NOTE` として保持し、未公表値を推測しない。
- 機種分類はHAZUSEで「AT機」、主要解析では「A+AT」。リアルボーナス+AT構造を表す本DBのsystemTypeはA+ATとし、規格分類上のAT機表記も補助情報として保持。

## missingFields
- 純電源OFF→ON時の有利区間直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の朝一専用モード/具体的モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の追加優遇率/朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 公式PV（スパイキー・クロスアルファ）: https://www.youtube.com/watch?v=qRt5rfrbjeQ
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/31155/yugitsushin
- HAZUSE機種情報: https://hazuse.com/machine/pachislot/4S1524/
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/87398/
- パチ&スロ必勝本 通常時解説: https://hisshobon.com/machineinfo/87387/
- パチ&スロ必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87389/
- 1geki 機種解析: https://1geki.jp/slot/l_zetai/
- 1geki 天井/朝一: https://1geki.jp/slot/l_zetai/3/
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/982/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/982/30178/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/982/30200/
- なな徹 エンディング/有利区間: https://nana-press.com/kaiseki/machine/982/30194/
- 後発解析（純電断補助）: https://www.kaku6.jp/slot/zettai/

## researchNotes
- 検索語を `L 絶対衝激～PLATONIC HEART～ / L絶対衝激 / L絶対衝激TK / 絶対衝激 復刻版 / スパイキー / フィールズ` と変え、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / 内部状態 / 有利区間 / ガックン` を組み合わせて再探索。
- 公式/業界、HAZUSE、必勝本、1geki、なな徹、K-Navi、後発解析を横断した。
- 詳細な小役別ボーナス当選率や設定示唆振り分けは完全再現用詳細のため収集対象外。
