# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **699**
- latestMachineAdded: **BASTARD!!－暗黒の破壊神－**（DAXEL）
- latestRecord: `docs/real_machine_db/machines/2012-11-05_bastard-ankoku-no-hakaishin.md`
- chronologicalFrontier: **2012-11-05**
- frontierLatestExactDateMachine: **BASTARD!!－暗黒の破壊神－**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-11-05_GROUP__NEXT_2012-11-15_DUAL_STORY**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-05_rumble-roses-3d.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **697** / chronologicalFrontier **2012-11-05** / 11-05群OPEN。
- handoff指定の同日未処理2機種をrepo重複確認後に登録。
- **698件目: 戦国パチスロ 花の慶次～天に愛されし漢～（ニューギン）**。
- **699件目: BASTARD!!－暗黒の破壊神－（DAXEL）**。

## 今回追加 — 戦国パチスロ 花の慶次～天に愛されし漢～

### 性能コア

- releaseDate: **2012-11-05**。HAZUSE/gamebizで具体的ホール稼働日を確認。グリーンべるとは納品開始11/04予定、4Gamer掲載の後年メーカー文に「2012年10月導入開始」があり release timing CONFLICT として保持。
- modelName: **花の慶次～天に愛されし漢～W** / approvalNumber: **2S0897**。
- 機械割: **97.1 / 98.7 / 101.6 / 104.8 / 109.2 / 115.4%**。HAZUSEの整数系列97/99/102/105/109/115は丸めで整合。
- ART初当り: **1/532 / 478 / 480 / 408 / 415 / 347**。
- ボーナス合算: **1/297.9 / 290.0 / 282.5 / 275.4 / 268.6 / 258.0**。
- 50枚ベース: **約33.0G/1000円**。
- ART「修羅の刻」: **1セット40G+α / 約+1.7枚/G / 50～85%ループ**。
- 極BIG/BIG: **約204枚**、REG: **約45枚**。
- 通常天井: **ボーナス/ART後1200G**。

### resetBehavior v0.7

- `settingChangeBehavior`: **天井G CLEAR / 内部モード再抽選 / 高確スタート可能性 / 液晶初期ステージランダム**。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 通常1200Gを0から再開。設定変更専用の固定短縮天井は十分再探索後も確認できず。
- `modeAfterReset`: **CONFIRMED_RELOTTERY**。具体的全振り分けはUNVERIFIED_AFTER_RESEARCH。
- `stateAfterReset`: 高確スタート可能性を当時資料で確認。具体率はUNVERIFIED_AFTER_RESEARCH。
- `powerCycleBehavior`: **液晶初期ステージは電源ON/OFF時もランダム**。内部天井G/モード/状態の純電断契約はUNVERIFIED_AFTER_RESEARCH。
- `carryOverBehavior`: 純据え置きの完全契約はUNVERIFIED_AFTER_RESEARCH。設定変更時は宵越し不可。
- `resetBenefits`: 高確スタート可能性。
- `resetPenalties`: 前日の1200G天井進捗消失。
- `resetDetection`: 設定変更/電断とも液晶初期ステージがランダムなので初期ステージ単独判別不可。本機固有ガックン等はUNVERIFIED_AFTER_RESEARCH。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: 高確スタートの存在は確認、具体率/朝一○G以内率はUNVERIFIED_AFTER_RESEARCH。

## 今回追加 — BASTARD!!－暗黒の破壊神－

### 性能コア

- releaseDate: **2012-11-05**（パチビー）。
- modelName: **BASTARD!!DG**。検定番号は検索語・資料系統変更後も今回確定できずUNVERIFIED_AFTER_RESEARCH。
- 機械割: **97.0 / 98.4 / 100.5 / 104.6 / 107.4 / 111.1%**。
- ARTトータル出現: **1/253.4 / 227.0 / 222.9 / 195.5 / 197.4 / 142.7**。
- 99G以内を除くART初当り: **1/417.6 / 373.5 / 397.8 / 350.7 / 374.2 / 248.2**。定義差として分離。
- オーバードライブ: **全設定1/16384**。
- 50枚ベース: **30.10～30.43G/1000円**。
- ART「デビルゲーム」: **約+2.0枚/G**。初期Gはウルティマデュエルで決定するため固定1セットGを置かない。
- オーバードライブ: **約18枚**。
- モード別最大規定G: **通常A999G / 通常B1111G / 天国A99G / 天国B99G**。最大天井1111G。
- パチマガスロマガ取得表の通常A1999G・天国1199G表示は、同ページ本文の天国99G/最大1111GおよびP-WORLD/当時解析と内部矛盾するため表示/抽出異常CONFLICT_NOTEとして保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **規定G再セット / 設定変更専用挙動**。
- `gameCounterReset`: **CONFIRMED_CLEAR_AND_RESELECT_REGULATION_GAME**。当時資料は宵越し×。
- `ceilingAfterReset`: **設定1でも約20%で99G以内ART**。ただし「必ず99G天井」ではない。
- `modeAfterReset`: 設定変更専用モード/選択挙動を確認。**設定1 約20%で99G以内ART**。設定2～6と全振り分けはUNVERIFIED_AFTER_RESEARCH。
- `stateAfterReset`: 通常時の低確/高確存在は確認、設定変更時の具体処理はUNVERIFIED_AFTER_RESEARCH。
- `carryOverBehavior`: 純据え置き時の規定G/32G周期/モード/状態完全契約はUNVERIFIED_AFTER_RESEARCH。
- `powerCycleBehavior`: 単純電源OFF→ON時の規定G/周期/モード/状態は十分再探索後もUNVERIFIED_AFTER_RESEARCH。
- `resetBenefits`: **設定1 約20%で99G以内ART**。
- `resetPenalties`: 前日規定G進捗消失。
- `resetDetection`: ガックン/液晶等の本機固有確定判別はUNVERIFIED_AFTER_RESEARCH。99G以内ART単独は通常天国でも起こり得るため変更確定扱いしない。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `publicMorningNumbers`: **設定1 約20%で99G以内ART**。

## 2012-11-05同日群・次境界監査

- HAZUSE新台カレンダーは2012年11月に **11/05 / 11/09 / 11/15 / 11/19** の掲載境界を持つ。
- 11/05具体日で再探索し、今回までに登録した **ランブルローズ3D / 戦国パチスロ 花の慶次～天に愛されし漢～ / BASTARD!!－暗黒の破壊神－** 以外の未登録パチスロを今回確定できなかったため、11/05群を **CLOSED** とする。
- 11/09は今回の検索で新規未登録パチスロを確定できず。ただし次リレー冒頭で日付ページ/メーカー系統をもう一度監査する。
- **2012-11-15「デュアルストーリー」（北電子）** を未登録候補として確認。HAZUSE: 型式デュアルストーリーN / 検定2S0601 / 導入開始2012-11-15。北電子公式製品ページも現存。
- デュアルストーリーの予備調査では、パチマガスロマガより機械割 **96.90 / 98.48 / 100.39 / 104.11 / 108.07 / 111.03%**、ボーナス合算 **1/199.80 → 1/152.41**、ART「トレジャーハント」 **10/30/50G・約+1.3枚/G** を確認。resetBehaviorはまだ未登録のため次回本調査する。
- 11/19候補として **ビキニパイ2（ネット） / ビガースペシャル（エマ） / キュロゴス2（山佐）** をHAZUSEで確認。11/15処理と境界監査後に進む。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 699 / chronologicalFrontier 2012-11-05 / 11-05群CLOSED** から開始。
2. 2012-11-09境界をHAZUSE日付ページ・メーカー/業界資料で短く再監査し、漏れがなければ前進。
3. **2012-11-15 デュアルストーリー（北電子）** を最優先でrepo重複確認→性能コア＋resetBehavior v0.7本調査→登録。
4. 11/15群を閉じた後、2012-11-19群の **ビキニパイ2 → ビガースペシャル → キュロゴス2** を重複・導入日監査しながら処理。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### 戦国パチスロ 花の慶次～天に愛されし漢～
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0897/`
- gamebiz: `https://gamebiz.jp/news/81461`
- P-WORLD / グリーンべると: `https://news.p-world.co.jp/articles/5474/greenbelt`
- Re.design: `https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030207344901`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/24/a.php`
- 天井ハイエナ生活（2012年当時）: `https://macerate.seesaa.net/article/300347458.html`
- 2-9伝説: `https://29den.com/hananokeiji/`
- 4Gamer: `https://www.4gamer.net/games/212/G021221/20130425098/`

### BASTARD!!－暗黒の破壊神－
- パチビー: `https://www.pachibee.jp/movies/index/8664`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6884`
- K-Navi: `https://p-kn.com/slot/1739/`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/a.php`
- パチマガスロマガ ゲーム性: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/01.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/03/c.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2103`
- 天井ハイエナ生活（2012年当時）: `https://macerate.seesaa.net/article/300344087.html`
- 中一商事: `https://www.nakaiti.com/html/Daxel003.html`

### 次キュー確認
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- HAZUSE デュアルストーリー: `https://hazuse.com/machine/pachislot/2S0601/`
- 北電子公式 デュアルストーリー: `https://www.kitadenshi.co.jp/slot/dualstory/`
- HAZUSE ビキニパイ2: `https://hazuse.com/machine/pachislot/SX0045/`
- HAZUSE ビガースペシャル: `https://hazuse.com/machine/pachislot/2S0863/`
- HAZUSE キュロゴス2: `https://hazuse.com/machine/pachislot/2S0984/`
