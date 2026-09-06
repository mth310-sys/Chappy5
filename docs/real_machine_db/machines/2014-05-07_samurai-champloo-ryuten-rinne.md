# パチスロ サムライチャンプルー 流転輪廻

machineName: パチスロ サムライチャンプルー 流転輪廻
formalModelName: サムライチャンプルー流転輪廻X
inspectionNumber: 3S1053
manufacturer: ニューギン
releaseDate: 2014-05-07
releaseDatePrecision: exact_day_with_conflict
queueDate: 2014-05-12
generation: 5号機
systemType: 疑似ボーナス+ART / ゲーム数管理+CZ+確変状態
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- DMMぱちタウン、HAZUSE、当時系解析で **2014-05-07** 導入開始を確認。
- K-Naviは **2014-05-12** をホール導入開始日として掲載しており日付競合。今回の時系列キューでは直前handoff指定の05-12候補として処理するが、machine recordのreleaseDate本線は複数資料が一致する05-07を採用。
- DMMぱちタウンで型式名 **サムライチャンプルー流転輪廻X**、HAZUSE URL/machine_codeで検定識別 **3S1053** を確認。
- 2008年「サムライチャンプルー」、2011年「サムライチャンプルー極」と混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DATE_CONFLICT

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.8% |
| 3 | 100.2% |
| 4 | 101.7% |
| 5 | 104.9% |
| 6 | 109.7% |

- K-Navi、DMMぱちタウン、P-WORLDで一致。
- 2-9伝説のみ設定5を104.8%と掲載するため下記CONFLICTを保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## initialHitBySetting

### ART初当たり（初当り疾風怒涛BONUS系）

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/271.1 |
| 2 | 1/256.6 |
| 3 | 1/243.0 |
| 4 | 1/236.2 |
| 5 | 1/212.0 |
| 6 | 1/181.4 |

- K-Navi、P-WORLD、DMMぱちタウン系、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### CZ初当たり

| 設定 | CZ突入率 |
|---:|---:|
| 1 | 1/395.1 |
| 2 | 1/420.0 |
| 3 | 1/361.5 |
| 4 | 1/407.2 |
| 5 | 1/300.5 |
| 6 | 1/353.5 |

- K-Navi公開解析値。初当たり構造上重要な補助値として保存。
- confidence: ANALYSIS_SINGLE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「サムライチャンプルー流転輪廻 / 流転輪廻X / 3S1053 / ニューギン」に「50枚 / 1000円 / ベース / コイン持ち / 千円G / 回転数」を組み合わせ、K-Navi、HAZUSE、P-WORLD、DMMぱちタウン、パチマガスロマガ旧攻略、2-9伝説、すろぱちくえすと、当時記事・後年整理を横断したが、比較可能な直接値を安全に固定できなかった。
- confidence: UNVERIFIED

## netIncrease

- 疑似ボーナス/ARTとも **約2.0枚/G**。
- P-WORLD、パチマガスロマガ旧攻略、2-9伝説、当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 初当たり疑似ボーナス「疾風怒涛BONUS」: **23G固定**、約2.0枚/G。終了後は必ずART「騒乱TIME」または旭日昇天モードへ。
- ART「騒乱TIME」: **1セット20G+α**、約2.0枚/G。
- NORMAL BONUS: **30G+α**。
- HYPER BONUS: **30G+α**、1G連ストックを伴う仕様。
- 騒乱TIMEとNORMAL/HYPER BONUSの実質ループ期待は資料上 **50〜87%**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時初当たりはゲーム数解除、CZ「ムゲンチャンス/ジンチャンス」、チャンスリプレイを契機とする確変状態/回想モードが主軸。
- 通常最大天井は **ART間999G**、到達でART（疾風怒涛BONUS経由）確定。
- 天国系ゾーンは128Gまで。通常A/B・天国A/Bのモードを持つ。
- 設定1通常時の公開モード移行率は存在するが、通常時全テーブルは本ミッションの取得対象外。設定変更専用振り分けが確認できた場合のみresetBehaviorへ収録する。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_WITH_CONFIRMED_COUNTER_MODE_POWER_CYCLE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をクリア**。
- **モードをクリア**。DMMの朝一比較表で直接確認。
- 液晶開始ステージは **ムゲン or ジンステージ**。
- 「モードクリア」後の具体的な設定変更専用初期振り分けは今回の現存資料から安全に固定できず、推測しない。
- confidence: ANALYSIS_HIGH

### carryOverBehavior

- 据え置き専用の独立文言は現存検索結果で十分に固定できなかった。
- ただしDMMの **設定変更なし電源OFF→ON** 比較では天井G・モード引継ぎが明記される。ホール据え置き実務と同義に自動拡張せず、純電源再投入契約として下欄に保存。
- `UNVERIFIED_DIRECT_STAY_UNCHANGED_CONTRACT / POWER_CYCLE_CARRY_OVER_CONFIRMED`。

### powerCycleBehavior

- 設定変更なしの **電源OFF→ON**では、天井までのゲーム数 **引継ぎ**、モード **引継ぎ**。
- 液晶開始ステージは設定変更時と同じ **ムゲン or ジンステージ**。
- よって朝一液晶ステージ単独では変更判別不可。
- confidence: ANALYSIS_HIGH

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **CARRY_OVER_CONFIRMED**。
- 2-9伝説の天井一覧でも本機を `宵×`（設定変更で天井G数リセット）として整理しており整合。
- 据え置き専用表現: **UNVERIFIED_DIRECT_WORDING**。

### ceilingAfterReset

- 設定変更でART間999G天井の進捗はクリア。
- 設定変更後だけ適用される固定短縮天井は、表記揺れ・型式名・朝一/リセット/天井短縮で再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 設定変更時: **MODE_CLEAR_CONFIRMED**。
- 電源OFF→ONのみ: **MODE_CARRY_OVER_CONFIRMED**。
- 設定変更専用の通常A/B・天国A/B振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
- 通常ART後の設定1モード移行率は公開されているが、リセット専用数値ではないためnumericResetDataへ転記しない。

### stateAfterReset

- 回想モード/内部確変、CZ関連状態などを含む「内部状態」の設定変更・据え置き・純電源再投入時の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- DMMが明記する「モード」はここでいう内部状態全般へ拡張しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、専用天国移行率、CZ優遇率等の定量恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日深い天井進捗を消すため、少なくとも宵越し天井狙い上の恩恵はない。

### resetPenalties

- 設定変更で前日までのART間天井進捗を失う。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更時・電源OFF→ON時とも液晶開始ステージが **ムゲン or ジン**で共通のため、開始ステージ単独では判別不可。
- 本機固有のリールガックン確定契約は「ガックン / リール始動 / 朝一出目 / 設定変更判別」等へ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井/モードの内部引継ぎ由来の当選挙動は据え置き推測材料になり得るが、確定判別とはしない。

### numericResetData

- **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用のモード振り分け、128G以内当選率、CZ優遇率等を安全に固定できる公開数値は今回確認できなかった。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「パチスロ サムライチャンプルー 流転輪廻 / サムライチャンプルー流転輪廻 / REINCARNATION / 流転輪廻X / 3S1053 / ニューギン」に「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / モード振り分け / 128G / ガックン / 状態 / 回想モード」を組み合わせ、DMMぱちタウン、K-Navi、HAZUSE、P-WORLD、パチマガスロマガ旧攻略、2-9伝説、すろぱちくえすと、当時記事、後年整理資料を横断。天井Gとモードの設定変更/純電源再投入契約は固定できたが、設定変更専用モード数値・内部状態・ガックン契約は確認できなかった。

## conflicts / safeguards

- `CONFLICT_RELEASE_DATE_2014_05_07_VS_2014_05_12`: DMMぱちタウン、HAZUSE、当時解析系は2014-05-07。K-Naviは2014-05-12。平均化しない。本レコードreleaseDate本線は05-07、リレーのqueueDateはhandoffに従い05-12として保持。
- `CONFLICT_PAYOUT_SETTING5_104_9_VS_104_8`: K-Navi/DMM/P-WORLDは設定5 **104.9%**、2-9伝説は **104.8%**。本線は複数一致104.9%、少数差をCONFLICTとして保存。
- 2008年初代、2011年「極」は別機種。各機の機械割・RT/ART仕様・朝一情報を混入しない。
- 通常時のモード移行表はリセット専用数値ではないため、resetBehaviorの公開朝一数値へ流用しない。

## sources

取得日: **2026-09-07**

- DMMぱちタウン — 機種/型式/導入日/機械割/天井/リセット仕様（設定変更・電源OFF→ON）: https://p-town.dmm.com/machines/1674
- K-Navi — 機種基本/導入日/機械割/ART初当たり: https://p-kn.com/slot/2034/
- K-Navi — CZ突入率: https://p-kn.com/slot/2034/50002/
- HAZUSE DATA — 機種識別/導入開始日/machine_code 3S1053: https://data.hazuse.com/?detail_id=100498&genre=203&machine_code=3S1053
- P-WORLD — システム/ART初当たり/機械割/純増/基本G数: https://www.p-world.co.jp/machine/database/7359
- パチマガスロマガ旧攻略 — 2014年5月/疑似ボーナス+ART/純増/基本G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/32/a.php
- パチマガスロマガ旧攻略 — ART突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/32/l.php
- 2-9伝説まとめ — 天井/設定変更Gリセット/機械割/初当たり/モード通常解析: https://29den.com/samuraichamploo/
- 2-9伝説 天井一覧 — `宵×`定義と本機掲載: https://2-9densetsu.com/blog-entry-311-html/
- すろぱちくえすと — 天井/設定変更時ハマリGリセット/スペック: https://www.slopachi-quest.com/kisyubetsu/samurai-chanpuru3/
- 当時解析記事（2014-05-06） — 導入日候補/基本仕様: https://pachinkolist.com/archives/38663249.html

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- directCarryOverBehaviorWording: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetSpecificModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetSpecificMorningNumericBenefits: NONE_CONFIRMED_AFTER_RESEARCH
- resetSpecificGakkunContract: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- CONFLICT_RELEASE_DATE_2014_05_07_VS_2014_05_12
- CONFLICT_PAYOUT_SETTING5_104_9_VS_104_8
