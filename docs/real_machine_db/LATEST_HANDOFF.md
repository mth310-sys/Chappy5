更新日: 2026-09-09

## 現在地点
- recordCount: **1085**
- latestRecordAdded: **パチスロ ツインエンジェルBREAK**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-05_twin-angel-break.md`
- chronologicalFrontier: **2017-06-05**
- frontierLatestMachine: **パチスロ ツインエンジェルBREAK — No.1085**
- schema: **resetBehavior v0.7**
- status: **2017-05-23_TO_2017-06-04_BOUNDARY_CLOSED / 2017-06-05_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1084「賞金首2」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1084件 / chronologicalFrontier 2017-05-22 / 5/22群CLOSED**。
- 指示どおり先に **2017-05-23〜2017-06-04境界監査**を実施。
- 2017導入122タイトル整理では5/22の5機の次が6/5群へ直接進み、K-Navi 2017年6月導入カレンダーでも次のパチスロ掲載日は6/5。別カレンダーも同じ境界を支持したため、現時点で5/23〜6/4の独立全国導入パチスロを固定できず **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 6/5群の未処理先頭候補 **「パチスロ ツインエンジェルBREAK」** をNo.1085として登録。
- 6/5群はK-Navi/2017導入122タイトルで `信長の野望 創造 / ぱちスロ アベンジャーズ / テイルズ オブ シンフォニア / ツインエンジェルBREAK` の4機を確認。
- 2-9伝説のみ `ケロロ軍曹` を6/5へ掲載するが、K-Naviと2017導入122タイトルは6/19に置くため、**ケロロ軍曹は導入日CONFLICT候補**として6/5群CLOSE前に再照合する。

## No.1085 — パチスロ ツインエンジェルBREAK
- manufacturer: **サミー**
- releaseDate: **2017-06-05**
- formalModelName: **ツインエンジェルBREAK／ZS**
- certificationNumber: **7S0115**
- generation/system: **5号機 / 5.5号機 / A+ART / リアルボーナス併用 / 周期CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.7 / 98.5 / 101.1 / 105.0 / 108.5 / 112.1%**。
- ART初当たり: **1/364.6 / 357.5 / 338.0 / 307.5 / 290.4 / 270.7**。
- ボーナス合算: **1/179.1 / 175.7 / 165.5 / 154.2 / 149.3 / 144.0**。
- BIG合成: **1/322.8 / 316.6 / 299.3 / 278.9 / 269.7 / 257.0**。
- MID: **1/402.1 / 394.8 / 370.3 / 344.9 / 334.4 / 327.7**。
- S-BIG: 全設定共通約 **1/5957.8**。
- ベース: **約33G/50枚**。
- ART純増: **約0.8枚/G**、ボーナス込み掲載値約**1.6枚/G**。
- S-BIG/BIG: **約203枚**、MID: **約56枚**。
- ART「エンジェルタイム」: **1セット33G**。

### resetBehavior v0.7
- 通常は約333Gごとに周期CZ、3周期目約999GでART濃厚。
- 設定変更: **周期番号を2周期目へRESET/SHIFT**する一方、**周期内G数はCARRYOVER**する特殊型。
- 設定変更: **RT状態・RT残りG数もCARRYOVER**。
- 電源OFF→ON: 周期番号/周期内G数/RT状態をCARRYOVER。期待値見える化では内部状態もCARRYOVER。
- 据え置き: 設定変更処理なしとして周期/周期内G/RT/内部状態を基本CARRYOVER。独立据え置き表は弱いため直接比較表由来と明記。
- 実質リセット天井: 内部2周期目開始 + 前日周期内G引継ぎにより **約349〜666G**。固定666G天井ではない。
- 設定変更後背景振り分け:
  - 設定1・2: 昼70.31% / 夕方29.69%
  - 設定3・4: 昼59.77% / 夕方40.23%
  - 設定5・6: 昼50.00% / 夕方50.00%
- 通常周期ART期待度: **1周期目20%以上 / 2周期目50%以上 / 3周期目100%**。
- 内部状態: 期待値見える化は設定変更RESELECT / 電断CARRYOVER。一撃2017-06-29時点は双方「調査中」で、**PUBLICATION_TIME_DIFFERENCE**として保持。
- 変更判別: RT状態を引き継ぐためRT出目等では判別不能。液晶から内部2周期目を直接見抜けない資料あり。朝一数Gで夕方なら変更可能性は上がるが確定ではない。
- 本機固有の確定ガックンは再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 注意 / conflict
- 2018年の別機 `A-SLOTツインエンジェルBREAK-A／ZR` と混同しない。本レコードは2017年 `ツインエンジェルBREAK／ZS`。
- 一部カレンダーにA+RT表記があるが、2017年機の当時解析はA+ARTで一致するためA+ARTをcanonical。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.

## 2017-05-23〜2017-06-04境界
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 2017導入122タイトル整理では5/22群の次は6/5群。
- K-Navi 2017年6月導入カレンダーでもパチスロの次掲載日は6/5。
- 5/29はパチンコ新台の掲載はあるが、今回確認した複数パチスロカレンダーで独立全国導入スロットを固定できなかった。

## 2017-06-05群
- status: **OPEN**。
- 登録済み:
  1. パチスロ ツインエンジェルBREAK — No.1085
- 未処理確認済み候補:
  1. パチスロ テイルズ オブ シンフォニア — 北電子
  2. ぱちスロ アベンジャーズ — オッケー.
  3. パチスロ 信長の野望-創造- — EXCITE
- 日付CONFLICT監査候補:
  - ケロロ軍曹 — 2-9伝説は2017-06-05、K-Navi/2017導入122タイトルは2017-06-19。平均せず、処理前に公式・業界・当時解析で再照合する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。
- 新規本線優先のため今回は未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1085を再取得。
2. **1085件 / chronologicalFrontier 2017-06-05 / 6/5群OPEN** を正本として継続。
3. 次の未処理 **北電子「パチスロ テイルズ オブ シンフォニア」** をNo.1086候補として性能コア + resetBehavior v0.7で処理。
4. 続いて `ぱちスロ アベンジャーズ → パチスロ 信長の野望-創造-` を処理。
5. 6/5群CLOSE前に `ケロロ軍曹` の6/5 vs 6/19導入日CONFLICTを公式・業界・当時解析で再監査。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1085 パチスロ ツインエンジェルBREAK
- HAZUSE 型式/導入: https://hazuse.com/machine/pachislot/7S0115/genre/209/
- HAZUSE 設定変更: https://hazuse.com/machine/pachislot/7S0115/genre/208/
- K-Navi: https://p-kn.com/slot/2785/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_twinangel_break/3/
- 期待値見える化: https://slotjin.com/zone/twinangelbreak/
- すろかい: https://slotkaiseki.hatenablog.com/entry/break

### 境界 / 6月導入群
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入機種まとめ（122タイトル）: https://squid-and-ball.net/archives/776
- 2-9伝説新台一覧: https://29den.com/newslot/
- 2017新台スロットカレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
