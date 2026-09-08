machineName: パチスロ 涼宮ハルヒの憂鬱
manufacturer: SANKYO
releaseDate: 2016-12-12
recordNumber: 1028
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / ゲーム数上乗せ型ART
formalModelName: パチスロ涼宮ハルヒS
certificationNumber: 6S0873
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFLICTS_PRESERVED

## identity
- SANKYOオンライン博物館で導入年月2016.12、販売名「パチスロ 涼宮ハルヒの憂鬱」、型式「パチスロ 涼宮ハルヒの憂鬱 S」を確認。
- HAZUSEで導入開始日2016-12-12、型式名「パチスロ涼宮ハルヒS」、検定番号「6S0873」を確認。
- ALL7の2016年12月導入一覧でも2016-12-12導入予定。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.4% |
| 2 | 97.7% |
| 3 | 99.1% |
| 4 | 102.8% |
| 5 | 105.8% |
| 6 | 111.4% |

- HAZUSE、P-WORLD、当時機械選定記事、複数解析資料で同系列を確認。
- 一部資料に設定5=105.6%、設定6=114.4%等の表記があるが、本文自己矛盾や主要資料との不一致があるためcanonicalへ平均せずconflictsに保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG BONUS
- 全設定共通: **1/1489前後**（主要資料では1/1489、別資料1/1488）。

### ART初当たり canonical
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/353 |
| 2 | 1/344 |
| 3 | 1/336 |
| 4 | 1/310 |
| 5 | 1/301 |
| 6 | 1/291 |

### ボーナス+ART合成 canonical
| 設定 | 合成 |
|---:|---:|
| 1 | 1/285 |
| 2 | 1/280 |
| 3 | 1/274 |
| 4 | 1/256 |
| 5 | 1/250 |
| 6 | 1/243 |

- SANKYO公式オンライン博物館、HAZUSE、P-WORLDでART 1/353・1/344・1/336・1/310・1/301・1/291系列が一致。
- 一部当時解析には設定3=1/338、さらに一部ページに設定6=1/281の表記があるため平均せずCONFLICT保存。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## baseGamesPer50
- **約38G/50枚**。
- HAZUSE、当時解析、機械選定記事で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「激奏LIVE」: **約1.8枚/G**。
- SANKYO公式オンライン博物館および複数解析資料で確認。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG BONUS: **約312枚**。
- P-WORLDでは459枚超払い出し終了・獲得約312枚。
- 通常時BIGからART当選期待度は約55%とする解析資料あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はCZ「エピソードステージ」「閉鎖空間」からARTを目指すA+ART機。
- エピソードステージ: 約10G、ART期待度約15%。
- 閉鎖空間: 約15G、ART期待度約45%。
- 閉鎖ポイントは規定到達で閉鎖空間へ。最大規定ポイント1000pt。
- ART間ゲーム数天井は1000G。途中のBIG BONUSではゲーム数天井をリセットせず、ART当選でリセット。
- 閉鎖ポイント用モードは通常A・通常B・天国が公開されているが、本DBでは通常時全モード移行テーブルの完全再現までは収録対象外。resetBehaviorに関係する変更時挙動だけ別途確認。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_STATE_UNKNOWN
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **ART間ゲーム数天井はリセット**。
- **閉鎖ポイントはリセット**。
- 朝一ステージは「憂鬱ステージ」。
- 設定変更時専用の明確な天井短縮やART/CZ優遇は、複数解析資料で「特に目立った恩恵なし」とされる。
- 内部高確/超高確状態の再抽選について、当時資料には推測記述はあるが確定解析を固定できなかったため推定せず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きではART間ゲーム数天井進捗および閉鎖ポイントを基本的に引き継ぐものとして扱う。これは純電源OFF→ON欄で「引き継ぐ」と明示する複数解析資料に基づく。
- 内部高確/超高確および閉鎖ポイント用モードの据え置き時詳細は、今回の再探索で直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- **純電源OFF→ONではART間ゲーム数天井を引き継ぐ**。
- **純電源OFF→ONでは閉鎖ポイントを引き継ぐ**。
- 朝一表示ステージは憂鬱ステージとする解析資料あり。
- 内部高確/超高確および閉鎖ポイント用モードそのものの電断保持は、天井/ポイントほど直接明示された資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き/純電断: **CARRYOVER**。
- 天井条件: ART間1000G。BIG BONUSではリセットされず、ART当選でリセット。

### ceilingAfterReset
- 設定変更後の天井: **通常どおりART間1000G**。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 閉鎖ポイント用モードは通常A/通常B/天国の存在を確認。
- **設定変更時のモード振り分け/固定モードは、検索語・資料系統を変えても直接確定値を固定できず `UNVERIFIED_AFTER_RESEARCH`**。
- 通常時全モード移行率は実機完全再現領域のため本DBでは収録しない。

### stateAfterReset
- 通常/高確/超高確の内部状態が存在する。
- 設定変更時の状態再抽選は一部資料が推測しているのみで、確定表を固定できないため `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断時の内部状態保持も同様に `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時の特に目立った恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ART間天井/閉鎖ポイントがともに消去されるため、前日ハマりやポイント蓄積を狙う客にとっては朝一設定変更が期待値を失わせる方向に働く。

### resetPenalties
- 前日ART間ゲーム数および閉鎖ポイントの蓄積が設定変更でリセットされる。
- それ以外の公開された設定変更固有ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更/据え置きを確定または高信頼推測できる本機固有のガックン、リール始動、ランプ、液晶表示契約は、「涼宮ハルヒの憂鬱」「パチスロ涼宮ハルヒS」「SANKYO」に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み合わせ再探索したが直接資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一ステージは憂鬱ステージで共通のため、それ単独では変更判別材料にならない。

### numericResetData
- 設定変更時 ART間天井: **0Gから再計数 / 最大1000G**。
- 設定変更時 閉鎖ポイント: **リセット**。
- 純電源OFF→ON時 ART間天井: **引継ぎ**。
- 純電源OFF→ON時 閉鎖ポイント: **引継ぎ**。
- 設定変更専用モード振り分け、短縮天井、朝一特定G以内当選率、リセット恩恵発生率: `NONE_CONFIRMED_OR_UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- identityはSANKYO公式＋HAZUSEで高信頼固定。
- 性能コアはSANKYO公式、P-WORLD、HAZUSE、当時機械選定記事を優先し、主要系列をcanonical化。
- ART初当たりは設定3で1/336と1/338が競合。SANKYO公式/P-WORLD/HAZUSEの1/336をcanonicalとし、1/338を競合値として残す。
- 設定6=1/281や機械割114.4%を掲載する一部後年ページは、同ページ本文内の1/291記述や主要資料と自己矛盾するためcanonicalへ採用しない。
- 5号機クロニクルには本機についてBIG/REG主体の別物に見える性能系列が掲載されており、公式・P-WORLD・HAZUSEのA+ART仕様と整合しない。混合せず retrospective source conflict として隔離。
- resetBehaviorは設定変更と純電断の天井/閉鎖ポイント差を複数資料で直接確認。内部状態/閉鎖ポイントモードは推測で補完していない。

## conflicts
- `CONFLICT_ART_SETTING3_1_336_VS_1_338`: SANKYO公式/P-WORLD/HAZUSE=1/336、複数当時解析=1/338。
- `CONFLICT_ART_SETTING6_1_291_VS_1_281`: 主要資料=1/291、一部後年/解析ページ=1/281。後者は同ページ本文とも矛盾。
- `CONFLICT_PAYOUT_SETTING5_105_8_VS_105_6`: 主要資料=105.8%、一部解析=105.6%。
- `CONFLICT_BIG_1_1489_VS_1_1488`: 丸め/表記差として原値保持。
- `CONFLICT_RETROSPECTIVE_5GOKI_SPEC_SERIES`: 5号機クロニクル掲載のBIG/REG/ART系列・獲得枚数がSANKYO公式/P-WORLD/HAZUSEの本機仕様と大きく不整合。平均・混合禁止。

## missingFields
- 設定変更時の閉鎖ポイント用モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の内部高確・超高確状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン等による設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ 涼宮ハルヒの憂鬱
   - https://www.sankyo-fever.jp/collection/682/
2. HAZUSE — パチスロ 涼宮ハルヒの憂鬱
   - https://hazuse.com/machine/pachislot/6S0873/
3. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/6S0873/genre/201/
4. HAZUSE — 天井
   - https://hazuse.com/machine/pachislot/6S0873/genre/207/
5. P-WORLD — パチスロ 涼宮ハルヒの憂鬱
   - https://www.p-world.co.jp/machine/database/8194
6. ちょんぼりすた — 涼宮ハルヒの憂鬱 解析まとめ
   - https://chonborista.com/slot/sankyo-slot/27284/comment-page-2/
7. 期待値見える化 — ハルヒ 天井・朝一リセット解析
   - https://slotjin.com/zone/haruhi/
8. ゆうべる — 涼宮ハルヒの憂鬱 朝一挙動
   - https://yuberu-777.com/suzumiyaharuki-kaiseki/
9. スロット解析情報~すろかい~ — パチスロ 涼宮ハルヒの憂鬱
   - https://slotkaiseki.hatenablog.com/entry/haruhi
10. PiDEA X — 三木流、「涼宮ハルヒ」の評価は？（2016-10-28）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E6%B6%BC%E5%AE%AE%E3%83%8F%E3%83%AB%E3%83%92%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
11. ALL7 — 2016年12月導入予定一覧
   - https://www.all7.jp/plans/index/2016/12
12. 5号機クロニクル — SANKYO全機種一覧（競合隔離用）
   - https://5goki.com/sankyo
