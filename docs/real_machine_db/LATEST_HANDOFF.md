# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **729**
- latestMachineAdded: **パチスロ戦国嵐～覚醒の章～**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2013-04-08_sengoku-arashi-kakusei-no-sho.md`
- chronologicalFrontier: **2013-04-08**
- frontierLatestExactDateMachine: **パチスロ戦国嵐～覚醒の章～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-04-08_GROUP__AUDITED_2013-04-09_TO_2013-04-14__NEXT_2013-04-15_GROUP**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-04-08_juggler-girls.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **728** / chronologicalFrontier **2013-04-08** / 04-08群OPEN。
- ALL7 2013年4月導入予定一覧で04-08同日パチスロとして **ジャグラーガールズ** と **パチスロ戦国嵐～覚醒の章～** を確認。後者が未登録だったため729件目として追加。
- 同一覧では04-08の次のパチスロ具体日は04-15。04-08群を **CLOSED** とし、04-09～04-14境界を監査済みに更新。

## 今回追加 — パチスロ戦国嵐～覚醒の章～

### identity / 性能コア

- manufacturer: **三洋物産**。
- releaseDate: **2013-04-08**（ALL7導入予定一覧）。
- systemType: **5号機 / AT / 規定ゲーム数管理 + 自力CZ / 疑似ボーナス**。
- 機械割主系列: **96.9 / 98.2 / 100.0 / 103.7 / 106.8 / 109.9%**。
- CZ: **1/192.82 / 187.10 / 189.37 / 179.66 / 176.54 / 170.73**。
- AT初当たり: **1/258.37 / 249.88 / 243.23 / 221.13 / 209.54 / 193.91**。
- AT「覇王CHANCE」: **30/50/70/100G+α、純増約2.7枚/G**。
- 疑似BIG: **30G** / SUPER BIG: **100G**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- モード別最大天井: 通常A **1472G** / 通常B **1024G** / 通常C **512G** / 天国 **128G** / 超天国 **128G**。

### resetBehavior v0.7

- **設定変更で天井ゲーム数CLEAR**。
- パチマガスロマガの機種別「朝イチ・設定変更」索引は **「朝イチは1/4で天国モードのチャンス!」** と明記。設定変更後の公開朝一数値として **天国約25%** を保存。
- 天国選択時の最大規定Gは **128G**。
- 設定変更時の通常A/B/C/天国/超天国フル振り分け、内部状態初期振り分けは再探索後も直接表を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純据え置き時および単純電源OFF→ON時の天井G・モード・液晶状態・内部状態の完全保持契約も `UNVERIFIED_AFTER_RESEARCH`。設定変更時CLEARから逆算していない。
- 本機固有のガックン/初期出目/液晶ステージ/クレジット・BETによる設定変更判別契約は再探索後も未確定。
- K-Naviの利休セリフ色によるモード示唆は朝一モード推測材料になり得るが、設定変更確定判別とは扱わない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT

- 主系列の機械割 **96.9～109.9%** に対し、後年ゲームセンター資料には設定4～6のみ **104.6 / 109.0 / 113.6%** の別系列が存在。
- 条件/算出定義を確認できないため平均せず `CONFLICT_PAYOUT_PRIMARY_VS_RETROSPECTIVE_ALTERNATE_HIGH_SETTINGS` として保存。

## 次回再開地点

1. **recordCount 729 / chronologicalFrontier 2013-04-08 / 04-08群CLOSED / 04-09～04-14監査済み** から開始。
2. 次の具体導入日 **2013-04-15群** を同日内で再監査し、未登録機を最も古いキュー順で追加。
3. 現時点でALL7から確認済みの04-15パチスロ候補:
   - **パチスロ戦国無双2**（山佐）
   - **戦国パチスロ 信長の野望‐天下創世‐**（ニューギン）
   - **鬼浜爆走紅蓮隊～友情挽歌編～**（ベルコ）
4. 次回はまず `パチスロ戦国無双2` のrepo重複確認を行い、未登録なら性能コア＋resetBehavior v0.7を収集。04-15群の別ページ/別カレンダーも確認して漏れを防ぐ。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ戦国嵐～覚醒の章～

- ALL7.jp（2013-04-08、三洋、同日群監査）: `https://www.all7.jp/plans/index/2013/04`
- P-WORLD（5号機AT、2.7枚/G、AT30/50/70/100G+α、疑似BIG30G/SUPER BIG100G）: `https://www.p-world.co.jp/machine/database/7029`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/a.php`
- パチマガスロマガ ボーナス確率（設定別CZ/AT）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/h.php`
- パチマガスロマガ 機種解析トップ（朝一1/4天国）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/17/sanyo_slot_17.php`
- 2-9伝説（機械割、AT初当たり、モード別最大天井、設定変更で天井Gリセット）: `https://29den.com/sengokuarashi/`
- 5号機クロニクル（三洋一覧、主機械割系列）: `https://5goki.com/sanyo`
- K-Navi（利休セリフ色のモード示唆）: `https://p-kn.com/slot/1827/43817/`
- 天井ハイエナ生活（モード別天井、設定変更でGリセット）: `https://macerate.seesaa.net/article/372758539.html`
- スロット専門ゲームセンター スパイダー（別機械割系列）: `https://ameblo.jp/kenchan-retro/entry-12813517222.html`
