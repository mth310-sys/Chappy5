# No.1156 ニューパルサーSPⅡ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ニューパルサーSPⅡ
- aliases: `ニューパルサーSP2`, `NEW PULSAR SP II`
- manufacturer: 山佐
- releaseDateCanonical: 2017-11-06
- generation: 5.9号機（5号機）
- systemType: ノーマルAタイプ
- formalModelName: `ニューパルサーSP2/DD`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ちょんぼりすた: 2017-11-06
- 一撃: 2017-11-06
- なな徹: 2017-11-06
- スロぱちクエスト: 2017-11-06
- 複数系統で一致し、releaseDateの競合なし。

## performanceCore

### payoutRateBySetting
- setting1: 96.9%
- setting2: 98.3%
- setting3: 100.2%
- setting4: 102.3%
- setting5: 105.1%
- setting6: 108.9%

### bigBonusBySetting
- setting1: 1/282.4
- setting2: 1/282.4
- setting3: 1/275.3
- setting4: 1/266.4
- setting5: 1/258.0
- setting6: 1/247.3

### regularBonusBySetting
- setting1: 1/420.1
- setting2: 1/404.5
- setting3: 1/385.5
- setting4: 1/356.1
- setting5: 1/321.2
- setting6: 1/303.4

### bonusCombinedBySetting
- setting1: 1/168.9
- setting2: 1/166.3
- setting3: 1/160.6
- setting4: 1/152.4
- setting5: 1/143.0
- setting6: 1/136.2

### baseGamesPer50
- 約36G/50枚をcanonical。
- 後年解析には約35.1〜37.3G/50枚の設定差表記もあるため、約36Gは比較用代表値として保持。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG BONUS: 312枚固定
- REG BONUS: 約104枚

### ceiling
- `NONE`。天井非搭載。

## modeSpecificMinimumData
- AT/ART/CZ非搭載のノーマルAタイプ。
- 通常時はノーマルモード / フラッシュモード / ドットモードの3つの演出モードをプレイヤーが選択可能。
- これらは内部当選モードではないため、resetBehaviorのmodeAfterResetとは混同しない。

## resetBehavior

### settingChangeBehavior
- 天井・内部ゲーム数による当選管理は非搭載のため、ゲーム性上の天井RESET契約は `NOT_APPLICABLE`。
- 設定変更直後の「初回ボーナス終了画面」だけ専用振り分けが存在する。
- この専用振り分けは朝一の設定変更推測に利用できるため、設定変更時の主要挙動として保存。

### carryOverBehavior
- 据え置き時の朝一初回ボーナスは、資料上「ボーナス2回目以降（据え置き初回含む）」の通常終了画面振り分けを使用。
- したがって、設定変更直後専用の初回振り分けは適用されない。

### powerCycleBehavior
- 「設定を据え置いた電源OFF→ONのみ」を独立条件として、内部状態・表示状態まで直接比較した資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置き初回のボーナス終了画面契約は確認済みだが、純電断の全挙動と勝手に同義化しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_GAME_COUNTER_FOR_GAMEPLAY`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 設定変更専用の内部モード / 朝一モードは再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ノーマル / フラッシュ / ドットは演出選択モードなので内部朝一モードとして扱わない。

### stateAfterReset
- 高確/低確などの設定変更専用内部状態は、検索語・資料系統を変えて再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_NORMAL_TYPE_NO_ADVANTAGEOUS_SECTION`

### resetBenefits
- 天井短縮・朝一高確・初当たり優遇など出玉面の設定変更恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし初回ボーナス終了画面に設定変更専用振り分けがあるため、客側の変更判別という情報面の恩恵は存在。

### resetPenalties
- 設定変更固有の出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ボーナス終了時のドット画面は設定変更の有無で振り分けが変化。
- 設定変更直後＝朝一1回目のボーナスでは専用テーブルを使用。
- 朝一1回目に「カエル5匹」が出現した場合は設定変更示唆として有力。設定変更初回のカエル5匹出現率は設定1〜6で25.0〜28.1%。
- 据え置き初回は通常の「2回目以降」テーブルに含まれ、カエル5匹は3.9〜7.8%に留まる。
- 本機固有の確定ガックン、初期出目、ランプによる変更確定契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
設定変更直後・初回ボーナス終了画面振り分け（%）:

| 設定 | 星が流れる | カエル1匹 | カエル2匹 | カエル3匹 | カエル5匹 | カエル7匹 | 流星群 | プラネット | ケロット |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 18.8 | 18.0 | 22.7 | 15.6 | 25.0 | - | - | - | - |
| 2 | 12.5 | 12.1 | 23.4 | 14.1 | 25.4 | 3.1 | 9.4 | - | - |
| 3 | 12.1 | 12.9 | 21.1 | 15.6 | 25.8 | - | 12.5 | - | - |
| 4 | 11.7 | 10.9 | 23.4 | 14.1 | 27.3 | 1.6 | 7.8 | 3.1 | - |
| 5 | 9.8 | 13.3 | 21.1 | 15.6 | 27.7 | - | 9.4 | 2.3 | 0.8 |
| 6 | 10.2 | 10.2 | 23.4 | 15.6 | 28.1 | 0.6 | 5.5 | 2.3 | 3.1 |

比較用・通常ボーナス2回目以降（据え置き初回含む）のカエル5匹出現率:
- setting1: 3.9%
- setting2: 4.7%
- setting3: 5.5%
- setting4: 6.3%
- setting5: 7.8%
- setting6: 7.8%

## conflicts
- 性能コア主要値に実質的な競合なし。
- baseGamesPer50は「約36G」と「約35.1〜37.3G（設定差）」で定義粒度差があるため、平均せず代表値と詳細レンジを分離。

## sources
取得日: 2026-09-10

1. ちょんぼりすた — ニューパルサーSP2
   - https://chonborista.com/slot/yamasa-slot/47450/
   - 導入2017-11-06、山佐、Aタイプ、約36G/50枚、天井なし、設定別BIG/REG/合算/機械割、朝一初回ボーナス終了画面の設定変更示唆。
   - confidence: `ANALYSIS_HIGH`

2. 一撃 — ニューパルサーSPⅡ
   - https://1geki.jp/slot/s_newpulsar_sp2/
   - 導入2017-11-06、設定別合算/機械割。
   - https://1geki.jp/slot/s_newpulsar_sp2/61/
   - BIG312枚固定、REG約104枚、5.9号機。
   - confidence: `ANALYSIS_HIGH`

3. P-WORLD — ニューパルサーSPII
   - https://www.p-world.co.jp/machine/database/8518
   - 山佐、ノーマルタイプ、ボーナス仕様の照合。
   - confidence: `INDUSTRY`

4. なな徹 — ニューパルサーSPⅡ
   - https://nana-press.com/kaiseki/machine/59/
   - 導入2017-11-06、天井なし、ベース約35.1〜37.3G/50枚。
   - confidence: `ANALYSIS_HIGH`

5. スロぱちクエスト — ニューパルサーSP2
   - https://www.slopachi-quest.com/article/new-pulsar-sp2/
   - 導入2017-11-06、約36G/50枚、BIG312枚、REG約104枚、設定別主要スペック。
   - confidence: `ANALYSIS_SINGLE`

6. 楽スロ — ニューパルサーSP2 ボーナス終了画面
   - https://rakuslo.com/newpulsarsp2-bonusend.html
   - 「2回目以降（据え置き初回含む）」と「設定変更の初回」の終了画面振り分けを直接比較。設定変更初回の公開数値を収録。
   - confidence: `ANALYSIS_SINGLE`

7. 中古実機 中一商事（楽天市場） — 山佐 ニューパルサーSPII
   - https://item.rakuten.co.jp/auc-nakaiti/newpulsar_sp2/
   - 型式名`ニューパルサーSP2/DD`、山佐、ノーマルA、5号機、BIG312枚/REG約104枚。
   - confidence: `SECONDARY_PRODUCT_DB`

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehaviorAsDistinctCondition: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`

## researchNotes
- `ニューパルサーSPⅡ / SPII / SP2 / ニューパルサーSP2/DD`、山佐、検定番号、7S、型式、設定変更、リセット、朝一、据え置き、電源OFF ON、ガックン、天井、モードを切り替えて再探索。
- 型式名`ニューパルサーSP2/DD`は複数中古機DB系で確認できたが、検定番号そのものを直接固定できる資料は今回得られなかったため推測せずUNVERIFIED。
- 設定変更直後専用のボーナス終了画面テーブルは、ホール経営ゲーム上の「朝一の設定変更推測」に直接効く公開数値なのでmission v0.7のnumericResetDataとして収録。
