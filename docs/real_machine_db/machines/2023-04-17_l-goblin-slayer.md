# Lゴブリンスレイヤー

recordNo: 1559
machineName: Lゴブリンスレイヤー
manufacturer: オレンジ（藤商事グループ / 販売: 藤商事）
formalModel: LゴブリンスレイヤーRD
inspectionCode: 2S1588
releaseDate: 2023-04-17
generation: 6.5号機 / スマスロ
systemType: AT / セット継続型 + 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.9%
- 設定3: 101.2%
- 設定4: 105.4%
- 設定5: 110.0%
- 設定6: 114.9%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「ゴブリンスレイヤーRUSH」初当たり
- 設定1: 1/547.9
- 設定2: 1/538.4
- 設定3: 1/517.7
- 設定4: 1/492.3
- 設定5: 1/470.5
- 設定6: 1/435.7

### CZ合算
- 設定1: 1/226
- 設定2: 1/223
- 設定3: 1/215
- 設定4: 1/204
- 設定5: 1/196
- 設定6: 1/184

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 設定1: 31.6G/50枚
- 設定2: 31.7G/50枚
- 設定3: 31.8G/50枚
- 設定4: 32.0G/50枚
- 設定5: 32.1G/50枚
- 設定6: 32.5G/50枚

信頼度: ANALYSIS_HIGH

## netIncrease
- 通常AT「ゴブリンスレイヤーRUSH」: 約2.7枚/G。
- 上位AT「ULTIMATE LOOP」: 約5.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- 通常ATは1セット100G、継続率は内部ループモード等で管理。
- 上位AT「ULTIMATE LOOP」は1セット100G、純増約5.0枚/G、継続率約82%。
- GOB揃いは1/8192（全設定共通）、AT直撃+1セット目継続濃厚等の恩恵。

## modeSpecificMinimumData
- 通常時最大天井: 1500G。
- 天井候補: 600G / 1000G / 1500G。設定変更後・AT終了後に次回天井を抽選。
- 天井到達時はAT当選+52% or 80%ループモードを1:1で抽選。
- 通常時100G / 300G / 500GでCZ抽選、600G / 1000GでAT抽選。
- スイカ回数カウンターは3の倍数回でCZ抽選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET・再抽選。
- 内部状態RESET・再抽選。
- スイカ回数カウンターRESET。
- 小役履歴RESET。
- 朝一は「牧場」or「辺境の街」から開始。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- スイカ回数カウンター内部値CARRY_OVER。
- 小役履歴CARRY_OVER扱い。
- ただし朝一表示上はスイカ回数カウンター等がリセットされたように見えるため、表示と内部値を分離する。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井・内部状態・スイカ回数カウンターを引き継ぐとする複数解析を採用。
- 朝一表示は初期化されるため、見た目のみでは設定変更と据え置きの即時判別は困難。

### gameCounterReset
- 設定変更: RESET。天井ゲーム数を600G / 1000G / 1500Gから再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 最大天井は1500Gで、設定変更専用に最大天井が必ず短縮される仕様ではない。
- 設定変更後に600G / 1000G / 1500Gから天井を再抽選し、高設定ほど600G/1000G選択率が高い。
- 公開設定別振り分けはnumericResetDataに保存。

### modeAfterReset
- 通常ATのループモードはAT当選契機等で決定されるが、設定変更専用の通常時モード表は確認できず `NOT_PUBLICLY_DEFINED_AS_RESET_MODE_TABLE`。
- 天井G数抽選を朝一モード相当の重要公開値として保持。

### stateAfterReset
- 設定変更: 内部状態RESET・再抽選。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 朝一開始ステージは設定変更/据え置きとも牧場 or 辺境の街で、ステージ単独では判別不可。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 上位AT中は条件によりセット開始時に有利区間をリセットするが、これは朝一設定変更とは別契約。
- 有利区間ランプによる設定変更/据え置き判別は不可扱い。

### resetBenefits
- 設定変更後のスイカ回数カウンター1周期目（3回到達時）はCZ当選率が大幅優遇。設定1でも66.6%。
- 設定変更時は天井ゲーム数を再抽選し、高設定ほど600G/1000G短縮選択率が上昇。
- AT終了画面「ゴブリンスレイヤーのみ」は設定変更濃厚とする解析あり。

### resetPenalties
- 前日の天井進行・内部状態・スイカ回数カウンター内部値を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一ステージは設定変更/据え置きとも「牧場」or「辺境の街」で判別不可。
- スイカ回数カウンター等は見た目上リセットされるが、据え置きは内部値を引き継ぐ。
- 3の倍数以外のスイカ回数でCZ当選した場合、据え置き可能性が上がる。ただし他契機CZもあるため単独確定ではない。
- AT終了画面「ゴブリンスレイヤーのみ」出現は設定変更濃厚。
- 本機固有のリールガックン条件/発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
#### 天井ゲーム数振り分け（設定変更後・AT終了後）
| 設定 | 600G | 1000G | 1500G |
|---:|---:|---:|---:|
| 1 | 0.4% | 0.4% | 99.2% |
| 2 | 1.2% | 2.7% | 96.1% |
| 3 | 3.1% | 5.9% | 91.0% |
| 4 | 5.1% | 10.9% | 84.0% |
| 5 | 7.8% | 14.8% | 77.3% |
| 6 | 12.5% | 23.0% | 64.5% |

#### スイカ回数カウンターCZ当選率
設定変更後・AT終了後の1周期目（スイカ3回到達時）:
- 設定1: 66.6%
- 設定2: 66.8%
- 設定3: 67.3%
- 設定4: 67.8%
- 設定5: 68.2%
- 設定6: 70.8%

参考比較（CZ終了後1周期目）:
- 43.8 / 44.0 / 45.8 / 45.8 / 46.4 / 50.8%

2周期目以降:
- 25.0 / 25.4 / 26.6 / 27.7 / 28.5 / 34.4%

### publicMorningNumbers
- 設定変更後1周期目CZ当選率: 66.6 / 66.8 / 67.3 / 67.8 / 68.2 / 70.8%。
- 設定変更後600G天井選択率: 0.4 / 1.2 / 3.1 / 5.1 / 7.8 / 12.5%。
- 設定変更後1000G天井選択率: 0.4 / 2.7 / 5.9 / 10.9 / 14.8 / 23.0%。
- 設定変更後1500G天井選択率: 99.2 / 96.1 / 91.0 / 84.0 / 77.3 / 64.5%。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `Lゴブリンスレイヤー / スマスロ ゴブリンスレイヤー / LゴブリンスレイヤーRD / オレンジ / 藤商事 / 2S1588` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 600G / 1000G / 1500G / スイカ回数カウンター / CZ / モード / 状態 / ガックン / 有利区間 / 判別` を組み替えて検索。
- 遊技日本、遊技通信/P-WORLD、東京都公安委員会まとめ、なな徹、すろぱちくえすと、P-WORLD、フリック7、藤商事開発室資料を横断。

## conflicts
- 50枚ベースは「約31.6G/50枚」とする機種概要系資料と、設定別31.6～32.5Gを示す解析がある。定義差として設定別値をcanonical、設定1相当31.6Gを代表値として扱う。
- 上位AT有利区間リセットは「毎セット」と単純化する二次資料もあるが、藤商事開発室は報酬・継続率・ストック条件付きと説明。公式開発室の条件付き説明をcanonicalとする。

## sources
取得日: 2026-09-13

- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-57404/
  - 製造元オレンジ、型式 `LゴブリンスレイヤーRD`、藤商事グループ初スマスロ。
- 東京都公安委員会検定通過まとめ（遊技通信）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B43%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%883/
  - 型式 `LゴブリンスレイヤーRD`、検定番号2S1588。
- 遊技通信/P-WORLD発表会: https://news.p-world.co.jp/articles/23265/yugitsushin
  - 全国導入予定2023-04-17、藤商事グループのスマスロ第1弾。
- なな徹 スペック: https://nana-press.com/kaiseki/machine/533/14356/
  - CZ/AT確率、機械割、設定別50枚ゲーム数、GOB揃い。
- なな徹 天井: https://nana-press.com/kaiseki/machine/533/14522/
  - 600/1000/1500G天井、天井恩恵、設定変更後/AT終了後に天井再抽選。
- なな徹 朝一: https://nana-press.com/kaiseki/machine/533/14523/
  - 設定変更/据え置きの有利区間・天井・内部状態・スイカ回数カウンター・小役履歴、朝一表示、判別。
- すろぱちくえすと: https://www.slopachi-quest.com/article/goblinslayer-tenjou/
  - 設定変更/電源OFF→ON比較、スイカ1周期目CZ当選率、判別材料。
- ぽこすろっと: https://www.nankaikoya.jp/goblinslayer-kitaichi/
  - 設定別600/1000/1500G天井振り分け、設定変更後1周期目CZ当選率を一覧照合。
- フリック7: https://flick7.net/slot/reset_guide2023.php
  - 設定変更後1周期目CZ当選率、朝一ステージ/カウンター、AT終了画面、リセット判別を照合。
- 藤商事 開発室の独り言: https://hitorigoto-fujimarukun.co.jp/l-goblinslayer/685/
  - ULTIMATE LOOP時の有利区間リセット条件を公式系開発資料として採用。

missingFields:
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の通常時モード振り分け: NOT_PUBLICLY_DEFINED_AS_RESET_MODE_TABLE

coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS
