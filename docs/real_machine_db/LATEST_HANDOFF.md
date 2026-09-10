更新日: 2026-09-10

## 現在地点
- recordCount: **1234**
- latestRecordAdded: **HEY！鏡**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-10-01_hey-kagami.md`
- chronologicalFrontier: **2018-10-01**
- frontierLatestMachine: **HEY！鏡 — No.1234**
- schema: **resetBehavior v0.7**
- status: **2018-10-01_GROUP_OPEN_1_PROCESSED_PENDING_SAME_DAY_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1233を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、`LATEST_HANDOFF.md` + main実レコードを正本としてNo.1233の次から継続。
- 2018-09-18群CLOSED後の次候補として、main指定の `HEY！鏡` をNo.1234として登録。
- 2018-09-19～09-30境界を再検索し、新規パチスロ導入候補を今回固定できず、2018-10-01へ前進。
- HAZUSEで型式 `Sアメリカン番長HEY！鏡B2` / 検定番号 `8S0371` / 大都技研 / 導入2018-10-01を確認。当時業界記事でも同型式の2018-07-09検定通過を照合。
- K-Navi、ちょんぼりすた、一撃、すろぱちくえすと、当時解析等で性能コアを横断照合。
- 機械割97.9/99.5/101.1/104.2/107.3/112.0%、ボーナス+AT初当たり1/330.5→1/189.7、ベース約49G/50枚、純増約5.0枚/G。
- ゲーム数天井950G+前兆、HEY天井は通常599 / チャンス699 / 天国100HEY。
- resetBehaviorは設定変更で天井G/規定HEY/HEYモード/HEYカウンター/有利区間をリセット・再抽選、純電源OFF→ONでは内部ゲーム数/HEY/モード/状態/有利区間を引き継ぐ直接比較資料を複数系統で確認。
- 設定変更後/DZ終了後のHEYモード振り分けを設定1～6で公開数値として収録。
- ガックン判別不可、HEYゾーン・宵越し天井・内部同行キャラ・有利区間消化位置を使った据え置き推測情報を収録。
- 一律の朝一リセット恩恵は実戦集計で確認されないが、設定変更時のHEYモード再抽選には明確な設定差があるため、両者を定義分離して保存。
- 据え置き単独条件の全内部契約は純電断から自動転記せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

## No.1234 — HEY！鏡
- manufacturer: **大都技研**
- releaseDateCanonical: **2018-10-01**
- formalModelName: **Sアメリカン番長HEY！鏡B2**
- certificationNumber: **8S0371**
- generation/system: **6号機初期 / AT / 疑似ボーナス+ベルナビAT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.5 / 101.1 / 104.2 / 107.3 / 112.0%**
- bonusPlusATInitial: **1/330.5 / 1/311.4 / 1/288.3 / 1/256.6 / 1/231.7 / 1/189.7**
- baseGamesPer50: **約49G**
- netIncrease: **約5.0枚/G**
- basicPayout: **JET BONUS 20G / KCベルナビ10・20・30・50・100回 / KC後DZループ**
- ceiling: **950G+前兆→JET BONUS / HEY最大699**

### resetBehavior v0.7
- settingChange: **天井Gリセット、規定HEY再抽選、HEYモード再抽選、HEYカウンターリセット、HEY周期1周期目、有利区間リセット、同行キャラリセット。状態=通常とする解析あり。**
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。据え置き推測に使える前日HEY/同行キャラ/有利区間G数の引継ぎ情報は別途保存。
- powerOFF→ON: **天井G/規定HEY/HEYモード/HEY周期/有利区間/RT状態/同行キャラ/内部状態を引継ぎ。HEYカウンターは見た目上リセットだが内部引継ぎ。**
- gameCounterReset: **設定変更RESET / 純電断CARRY_OVER**。
- ceilingAfterReset: **専用短縮天井なし確認。通常950G+前兆。**
- modeAfterReset: **設定変更でHEYモード再抽選 / 純電断で引継ぎ**。
- advantageousSection: **設定変更RESET / 純電断CARRY_OVER**。
- resetBenefits: **一律恩恵なし。ただしモード再抽選の設定差あり。**
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **ガックン判別不可。規定HEY・宵越し天井・同行キャラ・有利区間G数が据え置き推測材料。**
- numericResetData: **設定変更後/DZ終了後 HEYモード通常/チャンス/天国 = S1 85.9/10.2/3.9、S2 71.9/20.3/7.8、S3 84.8/10.2/5.1、S4 67.2/25.0/7.8、S5 82.4/12.5/5.1、S6 53.9/35.9/10.2%。**

## 2018-10-01群監査
### 登録済み
- No.1234 HEY！鏡

### 群判定
- `2018-10-01_GROUP_OPEN_1_PROCESSED_PENDING_SAME_DAY_AUDIT`
- 現時点の主要検索では同日パチスロ追加候補を固定できていないが、全メーカー/別型式/PB/地域差監査をもう一段行ってからCLOSED判定する。

## 次の時系列候補
- **2018-10-09 A-SLOTツインエンジェルBREAK** — Sammy。K-Navi・一撃・HAZUSEで2018-10-09導入一致。
- 型式 `ツインエンジェルBREAK-A／ZR` / 検定番号 `8S0077` をHAZUSEで先行確認。
- 次回はまず2018-10-01同日群を最終監査し、追加候補がなければCLOSED。その後2018-10-02～10-08境界を確認し、No.1235候補としてA-SLOTツインエンジェルBREAKへ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_takenaka-naoto-taikoki.md**（前回handoffを継承）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列新規No.1234の性能コア+resetBehavior収集を優先し、遡及QAカーソルは進めていない。
- 次回以降、mainの2006-09以降の実ファイル順を確認して隣接レコードへ進める。性能コアは無駄に再収集しない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。一般論を本機固有契約へ昇格しない。
- 同一シリーズでも別型式/別検定番号は単独資料照合なしに性能・resetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 既存COMPLETE_CORE/PARTIALの性能側判定とresetBehavior QA状態は分離する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1234を再取得。
2. **1234件 / chronologicalFrontier 2018-10-01 / `2018-10-01_GROUP_OPEN_1_PROCESSED_PENDING_SAME_DAY_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-10-01同日全メーカー/別型式/PB/地域差を最終監査。追加なしなら群CLOSED。
4. 2018-10-02～10-08境界監査後、**2018-10-09 A-SLOTツインエンジェルBREAK** をNo.1235候補として性能コア+resetBehavior v0.7収集。
5. 遡及QAは2006-09以降の隣接レコードをmain実ファイル順で確認して継続。

## 主要出典 — 取得日 2026-09-10
### No.1234 HEY！鏡
- HAZUSE: https://hazuse.com/machine/pachislot/8S0371/
- パチンコ・パチスロ 悠遊道: https://www.pachinko-road.com/psnews/9908/
- K-Navi: https://p-kn.com/slot/3090/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/61837/
- 一撃: https://1geki.jp/slot/s_hey_kagami/3/
- 期待値見える化: https://slotjin.com/slot/heykagami-reset/
- LackLuckLife: https://l-l-life.com/kagami/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3211/1/71267
- すろぱちくえすと: https://www.slopachi-quest.com/article/hey-kagami/

### 次回候補 A-SLOTツインエンジェルBREAK
- K-Navi: https://p-kn.com/slot/3078/
- HAZUSE: https://hazuse.com/machine/pachislot/8S0077/
- 一撃: https://1geki.jp/slot/s_aslo_twinbreak/
