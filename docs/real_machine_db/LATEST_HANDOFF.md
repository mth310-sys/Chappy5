更新日: 2026-09-10

## 現在地点
- recordCount: **1218**
- latestRecordAdded: **花人-はなんちゅ-**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-08-06_hananchu.md`
- chronologicalFrontier: **2018-08-06**
- frontierLatestMachine: **花人-はなんちゅ- — No.1218**
- schema: **resetBehavior v0.7**
- status: **2018-08-06_GROUP_OPEN_2_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1217を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 1217件 / 2018-08-06群OPENを確認し、未処理先頭「花人-はなんちゅ-」を既存重複なし確認後No.1218として登録。
- HAZUSEで型式`パチスロハナンチュ／SA`、検定番号`7S1524`、2018-08-06、メーカー=スパイキーを固定。グリーンべるとは製造元スパイキー/開発七匠と明記。
- 機械割97.8/98.9/100.4/102.8/104.2/108.0%、BIG全設定1/420.1、REG1/378.8〜1/319.7、ボーナス合算1/199.2〜1/181.5、設定1 ART初当たり1/394.8、約30G/50枚。
- BIG150枚、REG78枚、ARTは1セット40G・ボーナス込み約2.0枚/G。ART後最大96Gの引き戻しゾーン。通常ゲーム数天井なし。
- resetBehaviorでは設定変更/純電断の内部状態・開始ステージは当時比較表も調査中のため推測補完せずUNVERIFIED系を維持。
- 一方、特殊点滅＆違和感告知の発生頻度は**設定変更後20% / 電源OFF→ON後30%**と公開。設定変更時と純電断時で明確に異なる公開朝一挙動としてnumericResetData/resetDetectionへ固定。
- 告知振り分けも設定変更時（通常:通常告知80%/Lv1 20%、超準備:80/10/5/5%）と電源OFF→ON時（通常:70/30%、超準備:70/15/7.5/7.5%）を保存。
- 5.9号機で有利区間ランプ/非有利区間移行REGは確認できるが、設定変更・据え置き・純電断時の有利区間処理そのものは機種固有直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- 導入日はHAZUSE/必勝本/すろぱちくえすとが2018-08-06で一致。ちょんぼりすたは同一ページ上部8/6に対し内部表8/20で自己不整合のため`CONFLICT_RELEASE_DATE_2018_08_06_VS_2018_08_20`として保持し、canonical=8/6。

## No.1218 — 花人-はなんちゅ-
- manufacturer: **スパイキー（製造元） / 七匠（開発）**
- releaseDateCanonical: **2018-08-06**
- formalModelName: **パチスロハナンチュ／SA**
- certificationNumber: **7S1524**
- generation/system: **5号機 / 5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.8 / 98.9 / 100.4 / 102.8 / 104.2 / 108.0%**
- BIG: **全設定1/420.1**
- REG: **1/378.8 → 1/319.7**
- bonusCombined: **1/199.2 → 1/181.5**
- ART: **設定1 1/394.8 / 1セット40G / ボーナス込み約2.0枚/G**
- base: **約30G/50枚**
- basic payout: **BIG150枚 / REG78枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 内部状態/開始ステージ`UNVERIFIED_AFTER_RESEARCH`。特殊告知発生頻度20%は固定。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 内部状態/開始ステージ`UNVERIFIED_AFTER_RESEARCH`。特殊告知発生頻度30%は固定。
- gameCounter/ceiling: 通常ゲーム数天井なし。ボーナス後経過G数カウンタの設定変更/純電断処理は`UNVERIFIED_AFTER_RESEARCH`。
- mode: 朝一専用モード`NONE_CONFIRMED_AFTER_RESEARCH`。
- state: ART/引き戻し/裏モード引継ぎ`UNVERIFIED_AFTER_RESEARCH`。
- advantageousSection: 有利区間使用自体は確認。本機固有の変更/据え置き/純電断処理は`UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits/penalties: 天井短縮等`NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 特殊告知の設定変更20%対純電断30%が統計的判別材料。ガックン等は`UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 特殊告知発生率およびLv振り分けをレコード本文へ保存済み。

## 2018-08-06群監査
### 登録済み
- No.1217 ハイカ101 — 2018-08-06。
- No.1218 花人-はなんちゅ- — 2018-08-06。

### 未処理候補
- クレアの秘宝伝3
- クロノス 刻の支配者
- ウィザードバリスターズ 弁護士セシル
- TOWSER(トウサー)

### 群判定
- `2018-08-06_GROUP_OPEN_2_OF_AT_LEAST_6_PROCESSED`
- 全メーカー/別スペック/PB/地域差監査は未完了のためCLOSEDにしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_rumble-roses.md**（ランブルローズ）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。既存`coreStatus: PARTIAL`は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md`（逮捕しちゃうぞ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1218を再取得。
2. **1218件 / chronologicalFrontier 2018-08-06 / 8/6群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **クレアの秘宝伝3**をNo.1219候補として既存重複・型式・導入日を照合し、性能コア+resetBehavior v0.7を収集。
4. 続いてクロノス 刻の支配者 / ウィザードバリスターズ 弁護士セシル / TOWSER(トウサー)を順次監査。
5. 8/6群を全メーカー/別スペック/PB/地域差で横断監査してCLOSE可否を判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-08-28_taiho-shichauzo.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1218 花人-はなんちゅ-
- HAZUSE: https://hazuse.com/machine/pachislot/7S1524/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3198/1/70512
- ちょんぼりすた: https://chonborista.com/slot/nanashow/60664/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hananchu/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/11/l-1.php
- グリーンべると: https://web-greenbelt.jp/00010565/

### Retro QA ランブルローズ
- コナミ公式アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2006/rumble/
- パチ7 5号機ボーナス構造回顧: https://pachiseven.jp/articles/detail/7071
- グリーンべると初代回顧: https://web-greenbelt.jp/00003794/
