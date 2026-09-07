# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **907**
- latestRecordAdded: **乙女魂 ～光と無月～**（高砂電器産業）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-17_otome-soul-hikari-to-muzuki.md`
- chronologicalFrontier: **2015-08-17**
- frontierLatestMachine: **乙女魂 ～光と無月～**
- frontierRecord: `docs/real_machine_db/machines/2015-08-17_otome-soul-hikari-to-muzuki.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.906 `2015-08-17_thunder-v-revolt.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **906件 / 2015-08-17 / 08-17_GROUP_OPEN**。
- 次の未処理候補 **高砂電器産業「乙女魂 ～光と無月～」** がmain未登録であることを確認し、No.907として追加。

## No.907 — 乙女魂 ～光と無月～

- record: `docs/real_machine_db/machines/2015-08-17_otome-soul-hikari-to-muzuki.md`
- manufacturer: **高砂電器産業（TAKASAGO）**
- formalModelName: **乙女魂JV**
- inspectionNumber: **3S0939**
- systemType: **ART / 擬似ボーナス連鎖型**
- canonical releaseDate: **2015-08-17**
- KONAMI公式系当時ブログが「2015年8月17日より全国のホールに登場予定」と明記し、HAZUSE・当時解析も08-17で一致。
- 機械割/PAYOUT: **96.2 / 97.5 / 99.9 / 102.3 / 109.3 / 110.8%**。
- メーカー発表系ボーナス確率: **1/254.2 / 244.6 / 234.0 / 218.1 / 205.4 / 200.0**。
- スケバンバトル(CZ): **1/173.8 / 164.8 / 156.5 / 146.8 / 140.0 / 135.6**。
- 50枚ベース: **約31G**。
- 擬似ボーナスART純増: **約2.0枚/G**。
- 基本構成: **小役ゲーム30G + JACゲーム8G×3 = 最低54G**。
- 通常天井は二系統: **SB&ボーナス間777G**、**ボーナス間1200G**。いずれもボーナス当選。

### resetBehavior v0.7

- 設定変更時に777G/1200G各カウンタがRESETか引継ぎか: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の各天井カウンタ・高確/CZ状態持越し: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の各カウンタ・内部状態・表示: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用短縮天井・朝一専用モード・高確移行率・CZ優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン/初期出目/液晶等の本機固有変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 欠損は機種名/型式/メーカー + 設定変更・リセット・朝一・据え置き・電源OFF ON・電断・777G・1200G・高確・ガックンへ検索語を変更し、公式系/HAZUSE/パチマガスロマガ/当時攻略/後年資料を横断後に判定。一般的な5号機や他高砂機の挙動は補完していない。

### conflicts

- `CONFLICT_BONUS_INITIAL_HIT_DEFINITION`: メーカー発表系 **1/254.2～1/200.0** に対し、当時二次資料に「ボーナス初当り」**1/307.6～1/243.5** の別系列。定義差を安全に特定できないため統合しない。
- `CONFLICT_MINOR_PAYOUT_SETTING2`: メーカー発表/HAZUSE **97.5%**、ちょんぼりすた **97.3%**。
- `CONFLICT_RELEASE_DATE_LATE_SECONDARY`: ちょんぼりすた本文表に10/5表記があるが、同記事冒頭・公式当時告知・HAZUSE・他当時資料は08/17。canonicalは08/17。

## 2015-08-17群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **サンダーVリボルト** — アクロス — No.906。
2. **乙女魂 ～光と無月～** — 高砂電器産業 — No.907。

- KONAMI公式系当時告知、HAZUSE、K-Navi、2015年導入日一覧、当時新台まとめを横断。
- 2015-08-17全国導入として固定できる未登録パチスロを追加で確認できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。
- パチンコ、オンライン配信、既存機の増台/地域入替は本線へ混入させない。

## 2015-08-18〜2015-08-23境界 — CLOSED_FOR_CURRENT_RESEARCH

- 2015年導入日一覧・当時月間新台まとめを再確認し、全国導入日の未処理パチスロを具体日付きで固定できなかった。
- 08/23は08/24群の納品/前日工程資料が存在し得るため、全国実ホール導入日と分離する。

## 次の強いアンカー — 2015-08-24群

現時点で強く固定できる候補:
1. **SLOTシャドウハーツII-運命の道標-** — ユニバーサルブロス — 2015-08-24。
2. **スカイガールズ ～ゼロ、ふたたび～** — 高砂電器産業 — 2015-08-24。

- 当時2015年導入一覧と複数月間まとめで両機08/24を確認。
- 08/24群は未監査完了のためOPEN扱い。上記2機だけと決め打ちせず、処理時にK-Navi / HAZUSE / メーカー・業界記事 / P-WORLD系年表 / 当時攻略で全メーカー横断再監査する。

## 次回再開地点

1. **recordCount 907 / chronologicalFrontier 2015-08-17 / 08-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.907 `2015-08-17_otome-soul-hikari-to-muzuki.md` を再確認。
3. 2015-08-18〜08-23境界は今回 `CLOSED_FOR_CURRENT_RESEARCH`。次は **2015-08-24群**へ進む。
4. 先頭候補は **ユニバーサルブロス「SLOTシャドウハーツII-運命の道標-」**。main未登録確認後、性能コア + resetBehavior v0.7を本機固有資料で収集する。
5. 次に **高砂電器産業「スカイガールズ ～ゼロ、ふたたび～」**。
6. 08/24群を全メーカー横断再監査し、追加未処理機がなければのみCLOSED判定する。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ自動転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLD等の最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.907 乙女魂 ～光と無月～
- KONAMI公式系当時告知: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
- KONAMI公式系稼働開始後告知: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150825.html
- HAZUSE: https://hazuse.com/machine/pachislot/SX0054/
- パチマガスロマガTOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/h.php
- パチマガスロマガARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/l.php
- すろぱちくえすと天井: https://www.slopachi-quest.com/article/otome-soul/
- ちょんぼりすた: https://chonborista.com/slot/takasago-slot/11303/
- P-Summa: https://psumma.jp/pachislo/13361/
- 中一商事実機資料: https://www.nakaiti.com/html/sTakasago098.html

### 日付監査 / 次候補
- すろぱちくえすと 2015年導入日順一覧: https://www.slopachi-quest.com/article/2015-new/
- 2015年導入新台まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- HAZUSE スカイガールズ ～ゼロ、ふたたび～: https://data.hazuse.com/?detail_id=79090&genre=209&machine_code=5S0360
