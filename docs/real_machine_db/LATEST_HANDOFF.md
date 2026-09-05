# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **703**
- latestMachineAdded: **キュロゴス2**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-11-19_qrogos-2.md`
- chronologicalFrontier: **2012-11-19**
- frontierLatestExactDateMachine: **キュロゴス2**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-11-19_GROUP__NEXT_2012-12-03_BIOHAZARD_5**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-19_vigor-special.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **702** / chronologicalFrontier **2012-11-19** / 11-19群OPEN / 次候補キュロゴス2。
- repo重複検索で「キュロゴス2」既存レコードなしを確認後、**703件目: キュロゴス2（山佐）** を登録。

## 今回追加 — キュロゴス2

### 性能コア

- releaseDate本線: **2012-11-19**。HAZUSE・DMMぱちタウン・パチビーが一致。山佐公式は2012年11月稼働。K-Naviのみ2012-11-12で、`CONFLICT_2012-11-12_VS_2012-11-19` を保持。
- modelName: **キュロゴス2E** / approvalNumber: **2S0984**。
- 機械割: **96.8 / 98.6 / 100.9 / 103.8 / 106.9 / 111.9%**。DMM・5号機クロニクル・みんスロ一致、HAZUSEは整数丸め。
- ART初当たり: **1/321.0 / 294.0 / 297.7 / 256.4 / 259.4 / 222.1**。DMM精密値、HAZUSE/みんスロ丸め値と整合。
- 50枚ベース: **約32G/50枚**。今回確認できた比較可能値はみんスロ単一整理資料のため `ANALYSIS_SINGLE`。
- ART「魔王RUSH」: **1セット50G+α / 純増約+2.0枚/G / 最大8セット**。
- 激スゴボーナス: **純増48枚**（71枚超払い出し終了）。
- 通常時モード: **通常A / 通常B / 天国 / 超天国**。
- 天井はDMMが「ART終了後のダイスこぼし目停止or転落リプ入賞後、最大1280G」、当時攻略資料が通常A最大1240G / 通常B768G / 天国128G / 超天国32G。起算点/前兆等の定義差候補として平均せず両方保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **天井Gクリア / ART抽選状態再抽選**。液晶は1G目昼ステージ、2G目BETで移行可能。
- `powerCycleBehavior`: **天井G引継ぎ / ART抽選状態引継ぎ**。液晶は設定変更時と同じく1G目昼→2G目BETで移行可能。
- `gameCounterReset`: 設定変更 **CLEAR** / 電源OFF→ON **CARRY_OVER**。
- `carryOverBehavior`: 「据え置き」と明記した独立契約は今回未確認。純電断の引継ぎ契約はDMMで直接確認。
- `ceilingAfterReset`: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: 通常A/B/天国/超天国の設定変更時振り分けは **UNVERIFIED_AFTER_RESEARCH**。ART抽選状態とゲーム数モードを同一視しない。
- `stateAfterReset`: 設定変更 **RESELECT** / 電源OFF→ON **CARRY_OVER**（DMM表のART抽選状態）。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 朝一専用短縮天井・特定G以内当選率上昇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: 設定変更で前日天井進捗消失。宵越し天井狙いには不利。当時攻略資料も「宵越し×」。
- `resetDetection`: 液晶背景は設定変更と純電断で同一挙動のため背景単独では判別不可。ガックン等は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## CONFLICT / 注意

- 導入日: **2012-11-19**（HAZUSE/DMM/パチビー） vs **2012-11-12**（K-Navi）。本線は複数具体日一致の11/19。
- 天井表現: **最大1280G**（DMM、ART終了後の転落起算） vs **通常A最大1240G**（当時天井攻略資料）。定義差の可能性を残し平均しない。
- HAZUSEの機械割97/99/101/104/107/112%は精密系列の丸め範囲であり数値CONFLICT扱いしない。

## 2012-11-19同日群・次境界

- 2012-11-19導入として **ビキニパイ2 → ビガースペシャル → キュロゴス2** を登録済み。
- HAZUSEの2012年11月カレンダーは **11/05 → 11/09 → 11/15 → 11/19** で終了し、次の具体日境界は **2012-12-03**。
- 「2012-11-19」+パチスロの再検索でも上記3機を中心に確認し、今回の監査範囲では新たな未登録11/19機を発見できなかったため **11/19群CLOSED** とする。
- 次境界の先頭候補として **バイオハザード5（エンターライズ）** を確認。HAZUSE・K-Naviとも2012-12-03導入、型式 **バイオハザード5Z**、検定番号 **2S0907**。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 703 / chronologicalFrontier 2012-11-19 / 11-19群CLOSED** から開始。
2. **2012-11-20〜12-02境界を短く再監査**。HAZUSEカレンダー上は次の具体日が12/03だが、他系統の日付差・先行導入の漏れを確認する。
3. 漏れがなければ **2012-12-03「バイオハザード5」（エンターライズ）** をrepo重複確認→性能コア＋resetBehavior v0.7調査→未登録なら704件目として登録。
4. その後12/03同日群をHAZUSE、メーカー公式、業界/当時新台一覧、P-WORLD等で監査して順次継続。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### キュロゴス2
- 山佐ネクスト: `https://yamasa-next.co.jp/model_qg2/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0984/`
- DMMぱちタウン: `https://p-town.dmm.com/machines/190`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6913`
- K-Navi: `https://p-kn.com/slot/1754/`
- パチビー: `https://www.pachibee.jp/movies/index/8650`
- 5号機クロニクル 山佐一覧: `https://5goki.com/yamasa`
- みんスロ: `https://minslo.com/%E3%82%AD%E3%83%A5%E3%83%AD%E3%82%B4%E3%82%B92/`
- 当時天井資料: `https://macerate.seesaa.net/article/316297790.html`
- パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/190/yamasa_slot_190.php`

### 境界監査 / 次候補
- HAZUSE 新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- HAZUSE バイオハザード5: `https://hazuse.com/machine/pachislot/2S0907/`
- K-Navi バイオハザード5: `https://p-kn.com/slot/1741/`
