# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **790**
- latestMachineAddedByChronology: **パチスロ 機動戦士ガンダム**（ビスティ）
- latestRecord: `docs/real_machine_db/machines/2014-01-06_mobile-suit-gundam-bisty.md`
- chronologicalFrontier: **2014-01-06**
- schema: **resetBehavior v0.7**
- status: **2014-01-06_GROUP_CLOSED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-06_gekitou-saiyuki.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 789 / chronologicalFrontier 2014-01-06 / 01-06群OPEN。
- 前handoffの未処理候補 **「パチスロ 機動戦士ガンダム」（ビスティ）**を790件目として追加。
- 2014-01-06同日群を新台一覧、メーカー/版権公式、当時/後年機種DBで再監査。既処理3機種 + 今回ガンダム以外に、同日パチスロ本線へ追加すべき確定未登録機を今回確認できず、**2014-01-06_GROUP_CLOSED** とした。
- 2014-01-14「ダービースタリオン」（サンセイR&D）は `CRダービースタリオン` のパチンコ機と確認しパチスロ本線から除外。
- 次の具体日付き確定パチスロ候補は **2014-01-20「パチスロうみねこのなく頃に」（オーイズミ）**。次回は01-07～01-19境界をもう一度監査してから同機へ進む。

## 今回追加 — パチスロ 機動戦士ガンダム

### identity / 性能コア

- manufacturer: **ビスティ**。
- modelName: **パチスロ 機動戦士ガンダムFW**。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。
- hall start: **2014-01-06**。SANKYO公式オンライン博物館は2014.01、GUNDAM.INFOは2014年1月全国導入予定、後年天井DBと当日初日実戦資料で01-06を照合。
- generation/system: **5号機 / ART / CZ / 疑似ボーナス / 規定ゲーム数モード**。
- 機械割: **97.2 / 98.3 / 100.6 / 103.4 / 107.6 / 113.3%**。
- ART初当たり: **1/293.60 / 287.50 / 270.20 / 246.30 / 217.90 / 185.00**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。2014版を明示した比較可能な直接値を安全に固定できず、覚醒/ユニコーン/SEED等の後年値は流用しない。
- ART「ニュータイプBONUS」: **33G+α + 継続バトル8G**。
- 純増: P-WORLD等 **約2.3枚/G**、保存攻略資料 **約2.2枚/G**。平均せず `CONFLICT_NET_INCREASE_APPROX_2_2_VS_2_3`、比較本線は2.3枚/G。
- BIG BONUS: **50～200G**の疑似ボーナス。
- CZ「ガンダム索敵モード」: **最大10G、ART期待度約30%**。
- 通常時モード別天井: **100 / 782 / 999 / 最大1035G**。保存資料に1030G表記もあるため `CONFLICT_ROUNDING_OR_DESCRIPTION_1030_VS_1035`。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- パチマガスロマガの2014年版専用ページに **「朝イチ・設定変更」**項目、および **「設定変更時の特典は有りますか?」**Q&Aが存在することを確認。
- ただし現存検索キャッシュから具体本文を安全に復元できず、設定変更時のモード/状態/天井再選択の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- 後年天井狙いDBでは本機を **「宵越し×」** と分類。設定変更を挟んだ前日天井進捗が利用できないことの間接支持として `RESET_SUPPORTED_INDIRECTLY_BY_YOIKOSHI_X` を保持。
- 純据え置き時の規定G数 / モード / 状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なし電源OFF→ON時の規定G数 / モード / 状態保持: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井 / CZ・ART確定 / 具体的朝一モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時に100G天国系モードが存在しても「設定変更後100G固定」とは解釈しない。
- 本機固有のガックン / 初期出目 / 表示等による確定的変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- reset penalty: 設定変更を挟むと前日ハマリ進捗を宵越し狙いに利用できない。

## conflicts / safeguards

- ART純増: **約2.3枚/G vs 約2.2枚/G**。平均せずCONFLICT。
- ニュータイプ系最大天井: **1035G**と同資料中の**1030G**表記差を保持。最大値本線は1035G。
- 2014年版ビスティ機と、山佐旧作 / 2016覚醒 / 2023ユニコーン / 2025SEEDを混同しない。
- 「宵越し×」は設定変更を挟んだ前日進捗不可の支持にのみ利用し、純据え置き・単純電源OFF→ONのCLEARを推定しない。

## 2014-01-06同日群 — CLOSED

処理済み:
- **シティーハンター**（オリンピア） — 787件目。
- **パチスロ仮面ライダーUNLIMITED**（タイヨーエレック） — 788件目。
- **激闘！西遊記**（KPE） — 789件目。
- **パチスロ 機動戦士ガンダム**（ビスティ） — 790件目。

除外確認:
- **トラック野郎**（ニューギン） — パチンコ `CRトラック野郎`。
- **ぱちんこCR北斗の拳5 百裂**、**ぱちんこRio-Rainbow Road-** — パチンコ。

## 2014-01-07以降の境界

- 新台導入一覧に **2014-01-14「ダービースタリオン」（サンセイR&D）**があるが、P-WORLDで `CRダービースタリオン XX・Y` / メーカー サンセイR&D / デジパチと確認。パチスロ本線から除外。
- 次の具体日付き確定パチスロ候補: **2014-01-20「パチスロうみねこのなく頃に」（オーイズミ）**。
- 同日には「ゲゲゲの鬼太郎 墓場からの招待状」（藤商事）があるため、次回はパチンコ/パチスロ分類を確認した上で01-20群を開始する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線790件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 790 / chronologicalFrontier 2014-01-06 / 01-06群CLOSED** から開始。
2. **2014-01-07～01-19** をメーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーで境界監査する。
3. 2014-01-14「ダービースタリオン」はCRパチンコとして除外済み。他に未登録パチスロがなければ **2014-01-20「パチスロうみねこのなく頃に」（オーイズミ）**を791件目候補として性能コア + resetBehavior v0.7を収集。
4. 01-20同日群を全メーカー横断監査してOPEN/CLOSEDを判定する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ 機動戦士ガンダム
- SANKYO公式オンライン博物館: `https://www.sankyo-fever.jp/collection/881/`
- GUNDAM.INFO 2013-11-06: `https://www.gundam.info/news/hot-topics/news_hot-topics_20131106_9645p.html`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7266`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/25/bisty_slot_25.php`
- pacnk 設定判別: `https://pacnk.com/slot/tools/sh_gundam2014.html`
- スロパチクエスト: `https://www.slopachi-quest.com/kisyubetsu/gundam/`
- 天井DB: `https://smaslo.man-soft.com/slot-tenzyou-itiran/`
- 天井ハイエナ生活（宵越し×）: `https://macerate.seesaa.net/article/226196713.html`
- 保存攻略PDF: `https://www.8tw.com.tw/rwd1540/store/F2/S0186%20%E6%A9%9F%E5%8B%95%E6%88%B0%E5%A3%AB%E9%8B%BC%E5%BD%88%20%E4%B8%AD%E6%96%87%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf`
- 初日実戦報告: `https://pachinkopachisro.com/archives/35488849.html`

### 境界監査
- ALL7 2014年1月導入一覧: `https://www.all7.jp/plans/index/2014/01`
- P-WORLD CRダービースタリオン XX・Y: `https://www.p-world.co.jp/machine/database/7274`
