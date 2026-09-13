# L リングにかけろ1 V

recordNo: 1606
machineName: L リングにかけろ1 V
aliases: Lリングにかけろ1V / スマスロ リングにかけろ1V / スマスロリンかけ
manufacturer: エフ（フィールズ販売 / スパイキー系表記あり）
formalModel: Lリングにかけろ1FS
inspectionCode: 3S1000
releaseDate: 2023-12-04
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス + 完走型ST（NEO-ST）
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_SETTING6_PAYOUT_UNDISCLOSED

## releaseDateEvidence
- 遊技日本は2023-11-14に製造元エフ、型式 `Lリングにかけろ1FS` として販売発表を報道し、12月上旬導入予定とした。
- 一撃オンライン遊技説明、K-Navi、複数解析DBは2023-12-04導入で一致。
- HAZUSEは導入開始日2023-12-04、型式 `Lリングにかけろ1FS`、検定番号 `3S1000` を掲載。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## payoutRateBySetting
| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 98.9% |
| 3 | 100.7% |
| 4 | 105.4% |
| 5 | 112.9% |
| 6 | 非公表 |

- 設定1〜5は遊技日本系発表、一撃、複数解析で一致。
- 設定6はメーカー発表系・主要解析で非公表。ネット上の推測/噂119%前後はcanonicalへ採用しない。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / OFFICIAL_VALUE_UNDISCLOSED_FOR_SETTING6

## initialHitBySetting
| 設定 | ボーナス初当り | ST初当り |
|---|---:|---:|
| 1 | 1/189.3 | 1/516.0 |
| 2 | 1/185.0 | 1/497.0 |
| 3 | 1/179.0 | 1/467.0 |
| 4 | 1/161.0 | 1/393.0 |
| 5 | 1/138.9 | 1/305.0 |
| 6 | 1/121.0 | 1/236.0 |

遊技日本、一撃、K-Navi、複数解析で一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約31.5G/50枚。
- 一部事前資料に「約32G」丸め表記があるが、解析DBの31.5Gを比較可能値として採用。定義差/丸め差として扱いCONFLICTにはしない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 通常ST「ブーメランRUSH」: 約0.1枚/G。
- ボーナス中: 約4.5枚/G。
- プレミアムST「ZEUS RUSH」: 約4.5枚/G。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 通常時メインの「竜児ボーナス」: 約59枚、押し順ベル8回成立で終了。終了後は50G+αのチャレンジゾーンへ。
- ST中ミドルボーナス: 約52枚。
- 異色BIG: 約104枚。
- 同色BIG: 約207枚（他資料の約210枚は丸め表記）。
- ST「ブーメランRUSH」: 25G+α、平均ボーナスループ率約76%。
- 上位ST「スーパースターゾーン」: 25G+α、期待枚数約1600枚（突入までの獲得分込み）。
- ZEUS RUSH: 10G、RUSH+ボーナスループ率約90%、期待枚数約2000枚。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時ゲーム数天井: 最大999G+αでボーナス当選。
- ST「ブーメランRUSH」間1500G到達後は、その後のボーナス当選が同色BIG以上＝ST突入濃厚。
- 竜児ボーナス後およびST終了後は、666G / 999Gの天井振り分けに設定差あり。
- CZ「菊チャンス」は3桁ゾロ目ゲーム数で抽選。111Gまたは222GのどちらかでのCZ当選期待度は解析上約93%。
信頼度: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、ゲーム数天井、内部状態、内部モードをRESET。
- 液晶ゲーム数もRESET。
- 開始ステージはロードワーク（昼）。
- 青チェリー規定回数は30回以下へ優遇。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き（設定変更なしの通常営業運用）では有利区間、内部ゲーム数/天井、内部状態、内部モードをCARRY_OVERする扱い。
- 機種別の電源OFF→ON比較表でも上記内部項目の引継ぎが確認できる。
- ただし液晶ゲーム数表示は電源再投入でRESETされるため、見た目の0G表示だけでは設定変更判別不可。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみ: 有利区間CARRY_OVER、天井/内部ゲーム数CARRY_OVER、内部状態CARRY_OVER、内部モードCARRY_OVER。
- 液晶ゲーム数はRESET。
- 開始ステージはロードワーク（昼）で設定変更時と同じ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更時: 内部ゲーム数/天井RESET、設定変更専用666G天井へ。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: 内部ゲーム数/天井CARRY_OVER。ただし液晶表示はRESET。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時最大999G+αのゲーム数天井が、設定変更後は666Gへ333G短縮。
- ST間1500G天井について、設定変更後に専用短縮される公開固定値は十分な再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は内部モードRESET。
- 純電源OFF→ONは内部モードCARRY_OVER。
- 設定変更専用の内部モード振り分け率は、機種名/型式/「リセット モード 振り分け」「設定変更 朝一 モード」で解析・旧DBを再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態RESET。
- 純電源OFF→ONは内部状態CARRY_OVER。
- 設定変更直後の通常/高確等の具体的な状態振り分け率は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ただし設定変更後は稀にリーチ目高確スタートとなる公開解析あり。
信頼度: ANALYSIS_HIGH_FOR_BEHAVIOR / ANALYSIS_SINGLE_FOR_RARE_REACH_HIGH_START

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 純電源OFF→ON: 有利区間CARRY_OVER。
- 据え置き: CARRY_OVER。
信頼度: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井が999G+α → 666Gへ短縮。
- 約25%で内部的に50G+αのチャレンジゾーンからスタート。チャレンジゾーン中のボーナスは同色BIG以上となるためST突入濃厚。
- 稀にリーチ目高確スタート。
- 青チェリーの規定回数が30回以下へ優遇。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時だけ適用される定量的な不利要素は、表記揺れ/型式/「リセット 不利」「朝一 デメリット」「設定変更 恩恵」で再探索した範囲では確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- 設定変更時も純電源OFF→ON時も液晶ゲーム数は0へRESETされ、開始ステージもロードワーク（昼）で共通のため、表示だけで直接判別できない。
- 朝一に当日666Gを消化してもボーナス非当選なら、設定変更専用666G天井と整合しないため据え置き濃厚材料となる。
- 本機固有のリールガックン条件/発生率は「リングにかけろ1V / Lリングにかけろ1FS / ガックン / リール初動 / 設定変更 / 朝一」で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_DISPLAY_AND_CEILING / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
- 設定変更後ゲーム数天井: **666G**（通常最大999G+αから333G短縮）。
- 設定変更後の内部チャレンジゾーン開始: **約25%**。
- 設定変更後の青チェリー規定回数: **30回以下**。
- 設定変更後リーチ目高確スタート: **稀に発生**（固定率非公開）。

### publicMorningNumbers
- 朝一設定変更後最大ゲーム数天井: 666G。
- 内部チャレンジゾーン開始率: 約25%。
- 青チェリー規定回数: 30回以下。
- 朝一実戦集計の一例として初当り386回/83,173G＝1/215.5が公開されているが、これはメーカー固定抽選値ではなく市場サンプル実戦値のためcanonical reset抽選率には使用しない。

## groupAudit
- 2023-12-04導入は一撃、K-Navi、HAZUSE、複数解析DBで一致。
- 2023-12-04 canonical群は前handoffの7機監査を継承し、本機は2機目として処理。
- 群進捗は OPEN 2/7 canonical processed。
- 次は `ニューシオサイ` をNo.1607候補として処理する。
- `パチスロ琉神－30 スイカバージョン` は12/4表記DBと一部地域テスト12月/12月6日表記が競合するため、本群へ即混入せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY` を継続。

## conflicts
- 設定6機械割は公表値なし。119%前後の噂/推測値は検証済み公表値ではないため `CONFLICT` 数値として採用せず `OFFICIAL_VALUE_UNDISCLOSED` として保持。
- ベース31.5G/50枚と約32G/50枚は丸め差として31.5Gをcanonical採用。
- 同色BIG約207枚と約210枚は丸め差として約207枚をcanonical採用。

## missingFields
- payoutRateBySetting setting6: OFFICIAL_VALUE_UNDISCLOSED
- setting-change dedicated mode distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting-change dedicated internal-state distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reach-high reset start exact rate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- 遊技日本 / P-WORLDニュース（型式・設定6ボーナス/ST・製造元）: https://news.p-world.co.jp/articles/25997/nippon
- 遊技日本 検定通過（型式）: https://news.p-world.co.jp/articles/25405/nippon
- グリーンべると / P-WORLDニュース（製品発表）: https://news.p-world.co.jp/articles/25779/greenbelt
- HAZUSE 基本スペック（型式・検定番号・導入日・純増）: https://hazuse.com/machine/pachislot/3S1000/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/3S1000/genre/207/
- HAZUSE 初打講座 / ボーナス・ST性能: https://hazuse.com/machine/pachislot/3S1000/genre/203/
- 一撃 オンライン遊技説明（導入日・スペック・ベース）: https://1geki.jp/slot/l_rinkake1v/39/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_rinkake1v/3/
- 一撃 竜児ボーナス: https://1geki.jp/slot/l_rinkake1v/50/
- スロパチクエスト 天井/朝一リセット: https://www.slopachi-quest.com/article/rinkake1v-tenjou/
- ぽこすろっと 朝一/電源OFF→ON比較: https://www.nankaikoya.jp/rinkake1v-kitaichi/
- ちょんぼりすた 朝一リセット/有利区間: https://chonborista.com/slot/spiky/198003/
- なな徹 ST/各ボーナス性能: https://nana-press.com/kaiseki/machine/652/17952/
- なな徹 竜児ボーナス: https://nana-press.com/kaiseki/machine/652/17940/
- K-Navi 基本スペック/導入日: https://p-kn.com/slot/4054/

## notes
- 本レコードは完全再現用の全モード移行率、全小役別抽選、演出示唆振り分け等を収集対象外とした。
- 設定6の出玉率は公開されていないこと自体を正本情報とし、噂119%を補完値にしない。
