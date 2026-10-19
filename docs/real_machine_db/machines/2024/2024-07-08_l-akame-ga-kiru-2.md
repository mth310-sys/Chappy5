# L アカメが斬る！2

recordNo: 1658
machineName: L アカメが斬る！2
aliases: Lアカメが斬る！2 / スマスロ アカメが斬る！2 / アカメが斬る2 / Lアカメが斬る！2TN
manufacturer: 新日テクノロジー（スパイキーブランド）
formalModel: Lアカメが斬る！2TN
inspectionCode: 3S1760
releaseDate: 2024-07-08
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス+AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- HAZUSE、パチ&スロ必勝本、パチマガスロマガ、なな徹が2024-07-08導入で一致。
- グリーンべるとは2024-07-11の記事で7月8日からホール導入開始と報道。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- HAZUSEで型式 `Lアカメが斬る！2TN`、検定番号 `3S1760`、メーカー新日テクノロジーを確認。
- P-WORLD掲載の遊技日本による公安委員会検定通過情報でも `Lアカメが斬る!2TN（新日テクノロジー）` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.7%
- setting3: 100.4%
- setting4: 105.4%
- setting5: 110.2%
- setting6: 114.9%
initialHitBySetting:
- czInitial:
  - setting1: 1/296.3
  - setting2: 1/285.0
  - setting3: 1/280.4
  - setting4: 1/253.7
  - setting5: 1/245.3
  - setting6: 1/231.9
- atInitial:
  - setting1: 1/390.0
  - setting2: 1/378.3
  - setting3: 1/359.0
  - setting4: 1/326.5
  - setting5: 1/312.8
  - setting6: 1/296.8
baseGamesPer50: 約33G/50枚（必勝本33.2G）
netIncrease:
- AT アカメチャンス: 約2.6枚/G
basicPayout:
- 赤7BIG: 約100枚
- 青7BIG: 約60枚
- AT アカメチャンス: 1セット20G / 30G / 100G+α
- AT継続バトルは所持する斬ポイントを用いた自力継続型
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はCZ抽選に影響する内部モードA〜Dが存在し、上位ほどCZ期待度が高い。
- モードA〜Dはスイカ・チャンス目等で昇格し、CZまたはAT当選まで転落しない。
- 300G / 400G / 500Gの仮天井選択時は専用のモードEへ移行し、約1/20でAT抽選。
- 通常時最大天井は970G+α。970G到達時は前兆後、斬ポイント5個所持状態でAT当選。
- 一斬必殺目は約1/730。成立を契機にリアルボーナス高確率へ移行する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_AND_MODE_DISTRIBUTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井ゲーム数RESET。
- 内部状態RESET / 再抽選。
- 内部モードを再抽選し、高設定ほど上位モードから開始しやすい。
- エスデスポイントの初期ポイント抽選を行い、複数ポイントを所持して開始する可能性がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 内部モードを含む進行状態は据え置きとして引き継ぐ扱い。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 内部モードCARRY_OVER。
- 設定変更を伴わないため有利区間もCARRY_OVERとして扱う資料系統が一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井: 970G+α。
- 天井は300G / 400G / 500G / 970Gの振り分けが存在。
- 設定変更による専用の天井短縮値は確認されず、設定変更後も最大970G+α。
- 300G / 400G / 500G選択時はモードEへ移行し約1/20でAT抽選を行うが、これは通常の天井振り分けにも存在するため「リセット専用短縮」とは扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 内部モード再抽選。
- 高設定ほど上位モードからスタートしやすい。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定変更時のA/B/C/D個別モード振り分け率は主要解析・型式名・メーカー名を変えて再探索したが固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECTION / UNVERIFIED_FOR_EXACT_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- チェリー強化状態等を含む個別状態ごとの設定変更時振り分け率は公開固定値を確認できず、推測補完しない。
confidence: ANALYSIS_HIGH_FOR_BASIC_CONTRACT / UNVERIFIED_FOR_DETAILED_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定変更以外ではエンディング中のボーナス終了後にも有利区間RESETが行われる。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更時は内部モードを再抽選し、高設定ほど上位モードから開始しやすい。
- エスデスポイントの初期ポイント抽選を受け、複数ポイントを所持して開始する可能性がある。
- 設定変更専用の最大天井短縮は確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更では前日の天井ゲーム数・内部状態・内部モード・有利区間の進行を引き継がないため、前日までの有利な進行状態は失われる。
- 固定的な設定変更時の期待値低下率・不利発生率として比較可能な公開数値は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- なな徹の機種専用朝一ページはリセット判別を「現在調査中」としている。
- 有利区間ランプでは設定変更 / 据え置きを判別できない。
- 宵越しで液晶ゲーム数300G / 400G / 500G付近の色変化・前兆位置が前日分を含む挙動を示す場合、据え置き推測材料になるが単独の確定判別とはしない。
- 本機固有のリールガックン条件 / 発生率は `L アカメが斬る！2 / Lアカメが斬る！2TN / 新日テクノロジー / スパイキー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` の検索語を変更し、主要解析・旧DB系まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP_AND_GAME_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 通常最大天井: 970G+α
- 天井振り分け候補: 300G / 400G / 500G / 970G
- 300G / 400G / 500G選択時モードEのAT抽選: 約1/20
- 設定変更時A/B/C/D個別モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時エスデスポイント初期振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用天井短縮: NONE_CONFIRMED（最大970G+αのまま）

## conflicts
- グリーンべると2024-07-11記事のスペック欄に「ベース50G」「AT純増約2.5枚」とある一方、必勝本・なな徹・パチマガスロマガ・1geki・HAZUSE等はベース約33〜33.2G/50枚、AT純増約2.6枚/Gで一致。前者は記事表記の異常値/丸め差として平均化せず `CONFLICT_GREENBELT_BASE_50G_NET_2_5_VS_MULTI_SOURCE_33G_NET_2_6` を保持し、canonicalは複数一致側を採用。
- 内部モードの説明は、主要解析で通常CZ用A〜D、仮天井用Eという整理で一致。設定変更時のA〜D個別初期振り分けは未公開のため推測しない。

## missingFields
- 設定変更時A/B/C/D個別モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時エスデスポイント初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時チェリー強化状態等の個別状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 固定的なリセット損失率/期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### 公式 / 業界・型式
- 公式特設: https://l-slot-akame2.jp/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1760/
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/27358/nippon
- グリーンべると 導入記事: https://web-greenbelt.jp/post-84866/

### 性能コア
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2632/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/shinnichitechnology_slot/02/kh01.php
- なな徹 解析TOP: https://nana-press.com/kaiseki/machine/774/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1760/
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_akame2/39/

### resetBehavior
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/774/22413/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/774/22414/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/774/22644/
- なな徹 CZ/内部モード: https://nana-press.com/kaiseki/machine/774/22416/
- なな徹 エスデスポイント: https://nana-press.com/kaiseki/machine/774/22420/
- 1geki 天井・朝一: https://1geki.jp/slot/l_akame2/3/
- スロパチクエスト 朝一: https://www.slopachi-quest.com/article/lakamegakill2-tenjou/
- イチカツ 設定変更: https://itikatu.jp/akame2/
- パチ&スロ必勝本 通常時/モード: https://p.hisshobon.jp/machine/4334/1/103464

## notes
- 本DBはホール経営ゲーム用「物差し」であり、通常時の全CZ抽選・全モード移行テーブル・特化ゾーン内部抽選等は収録しない。
- 数値欠損は表記揺れ、正式型式、新日テクノロジー/スパイキー、朝一/設定変更/リセット/据え置き/電源OFF ON/天井/モード/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB系まで横断後のみ欠損扱いとした。
