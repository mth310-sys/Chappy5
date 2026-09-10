更新日: 2026-09-10

## 現在地点
- recordCount: **1214**
- latestRecordAdded: **SLOTハイスクール・フリート**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-23_slot-high-school-fleet.md`
- chronologicalFrontier: **2018-07-23**
- frontierLatestMachine: **SLOTハイスクール・フリート — No.1214**
- schema: **resetBehavior v0.7**
- status: **2018-07-23_GROUP_OPEN_2_MACHINES_PROCESSED_AUDIT_PENDING**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1213を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- mainは1213件 / No.1213「ストリートファイターV パチスロエディション」まで進行済みだったため、旧会話上のNo.1210候補等は破棄し、最新handoffの次候補を採用。
- 既存重複検索後、handoff最優先候補「SLOTハイスクール・フリート」をNo.1214として登録。
- 導入日はHAZUSE/K-Navi/すろぱちくえすと/ちょんぼりすたで2018-07-23一致。型式`SLOTハイスクール・フリートBU`、検定番号`7S1684`をHAZUSEで固定。
- 性能コアはHAZUSE/パチマガスロマガ/一撃/ちょんぼりすた等を横断。PAYOUT 97.6〜108.2%、同色BIG1/468.1共通、異色BIG1/348.6〜1/226.8、ボーナス合算1/199.8〜1/152.8、ART初当たり1/539.7〜1/482.4、35.5〜38.4G/50枚、ART約1.0枚/G、ART1セット約40G、通常ゲーム数天井非搭載を固定。
- 通常天井は非搭載だが、有利区間80G継続でARTとなる救済措置を確認。通常ゲーム数天井と定義を混ぜず別項目で保存。
- resetBehaviorでは、設定変更時の液晶を艦内ステージ1とする本機ページを確認。内部状態は同資料/一撃で調査中。
- 純電源OFF→ONは、ちょんぼりすたが内部状態「調査中」・ステージ原則引継ぎ（非有利区間時は艦内ステージ1、ボーナス内部成立中は確定画面）と掲載。一方、期待値見える化は有利区間ランプ/内部状態引継ぎとするため `CONFLICT_POWER_CYCLE_INTERNAL_STATE_UNDER_INVESTIGATION_VS_CARRY_OVER` として保持。
- 期待値見える化は設定変更後を非有利区間/有利区間ランプ消灯とするが、5.9号機規定由来の説明を含むため、本機固有直接契約へ無条件昇格せず `UNVERIFIED_WITH_STRONG_REGULATORY_INDICATION` とした。
- 本機固有の据え置き独立契約、ガックン条件/率、有利区間80G救済カウンタの設定変更/据え置き/純電断時の個別処理は検索語・資料系統を変えても直接固定できずUNVERIFIED。

## No.1214 — SLOTハイスクール・フリート
- manufacturer: **ユニバーサルブロス**
- releaseDateCanonical: **2018-07-23**
- formalModelName: **SLOTハイスクール・フリートBU**
- certificationNumber: **7S1684**
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.6 / 99.3 / 101.2 / 103.5 / 105.0 / 108.2%**
- sameColorBIG: **全設定1/468.1**
- differentColorBIG: **1/348.6 / 1/348.6 / 1/282.5 / 1/282.5 / 1/262.1 / 1/226.8**
- bonusCombined: **1/199.8 / 1/199.8 / 1/176.2 / 1/176.2 / 1/168.0 / 1/152.8**
- ART初当たり: **1/539.7 / 1/539.7 / 1/513.5 / 1/513.5 / 1/503.2 / 1/482.4**
- bonus+ART: **1/145.8 / 1/145.8 / 1/131.2 / 1/131.2 / 1/126.0 / 1/116.0**
- base: **35.5 / 37.3 / 35.7 / 38.0 / 38.1 / 38.4G/50枚**
- ART純増: **約1.0枚/G**
- 同色BIG: **通常時約150枚 / ART中最大204枚**
- 異色BIG: **通常時約104枚 / ART中最大144枚**
- ART: **1セット約40G**
- normal ceiling: **非搭載**
- advantageous-section relief: **有利区間80G継続でART**

### resetBehavior v0.7
- settingChange: 液晶は艦内ステージ1の解析あり。内部状態は直接解析で調査中。非有利区間/ランプ消灯とする二次資料は強い規定示唆として保持するが確定契約へ昇格しない。
- carryOver: 据え置きを純電断から独立して示す本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: ステージ原則引継ぎ。ただし非有利区間時は艦内ステージ1、ボーナス内部成立中は確定画面。内部状態は資料間で調査中 vs 引継ぎのCONFLICT。
- gameCounter/ceiling: 一般的な通常天井なし。リセット短縮天井なし。有利区間80G救済は常設機能として分離。
- mode/state: 朝一専用モード振り分け・リセット専用初当たり数値は未確認。
- advantageousSection: 設定変更後非有利区間/ランプ消灯という強い規定示唆あり。ただし本機固有直接解析が不足しUNVERIFIED_WITH_STRONG_REGULATORY_INDICATION。純電断は資料間CONFLICT。
- resetBenefits: リセット専用天井短縮・ART初当たり優遇なし。80G救済はリセット専用ではない。
- resetDetection: 前日有利区間ランプ点灯→朝一も点灯なら据え置き推測材料との解析あり。艦内ステージ1のみでは確定判別不可。ガックン公開率なし。
- numericResetData: 有利区間80G救済、BIG後32G有利区間高確を保持。リセット専用率は未確認。

## 2018-07-23群監査
### 登録済み
- No.1213 ストリートファイターV パチスロエディション — canonical 2018-07-23、7/16 vs 7/23導入日CONFLICT。
- No.1214 SLOTハイスクール・フリート — 2018-07-23。

### 次の既知候補
- **マイジャグラーIV**

### 群判定
- `2018-07-23_GROUP_OPEN_2_MACHINES_PROCESSED_AUDIT_PENDING`
- マイジャグラーIV処理後、2018-07-23同日全メーカー/別スペック/PB/地域差を再監査してからCLOSE可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_cranky-condor-x.md**（クランキーコンドルX）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。性能コア判定は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_rumble-roses.md`（ランブルローズ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- next cursor evidence: クランキーコンドルX追加commit `c48cbb8f2e0ed07aeb54e9b94722c182fe222871` の直後の実機追加commit `960c357b2d04159358c182db55d996531bc1bfa7` がランブルローズ。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 通常ゲーム数天井と有利区間継続救済を同じ定義に混ぜない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1214を再取得。
2. **1214件 / chronologicalFrontier 2018-07-23 / 7/23群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **マイジャグラーIV**を最優先候補として既存レコード重複確認→性能コア+resetBehavior v0.7収集。
4. その後、2018-07-23同日全メーカー/別スペック/PB/地域差を横断監査して群CLOSE可否を判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_rumble-roses.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1214 SLOTハイスクール・フリート
- HAZUSE: https://hazuse.com/machine/pachislot/7S1684/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/09/a.php
- 一撃 ボーナス: https://1geki.jp/slot/s_highfle/1/
- 一撃 ベース: https://1geki.jp/slot/s_highfle/4/
- 一撃 設定変更: https://1geki.jp/slot/s_highfle/3/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/59827/
- 期待値見える化: https://slotjin.com/slot/highschoolfleet/
- K-Navi: https://p-kn.com/slot/3024/
- すろぱちくえすと: https://www.slopachi-quest.com/article/high-school-fleet/
