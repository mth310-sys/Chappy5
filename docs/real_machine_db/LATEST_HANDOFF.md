# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **731**
- latestMachineAdded: **戦国パチスロ 信長の野望‐天下創世‐**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-04-15_nobunaga-no-yabou-tenka-sousei.md`
- chronologicalFrontier: **2013-04-15**
- frontierLatestExactDateMachine: **戦国パチスロ 信長の野望‐天下創世‐**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-04-15_GROUP__NEXT_ONIHAMA_BAKUSOU_GURENTAI_YUUJOU_BANKA**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-04-15_sengoku-musou2.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **730** / chronologicalFrontier **2013-04-15** / 04-15群OPEN。
- handoff指定の次機種 **戦国パチスロ 信長の野望‐天下創世‐** のrepo重複を検索し、未登録を確認して731件目として追加。
- 導入日はK-Naviで **2013-04-15**。グリーンべると業界記事は納品開始予定を4/14としており、定義差として保持。
- 04-15同日群はまだOPEN。次の既知未処理候補は **鬼浜爆走紅蓮隊～友情挽歌編～（ベルコ）**。

## 今回追加 — 戦国パチスロ 信長の野望‐天下創世‐

### identity / 性能コア

- manufacturer: **ニューギン**。
- releaseDate: **2013-04-15**。
- systemType: **5号機 / ART / BR非搭載 / ゲーム数解除 + 自力CZ**。
- 機械割: **96.8 / 98.7 / 100.9 / 104.1 / 108.2 / 115.4%**。
- ART初当たり: **1/254 / 246 / 237 / 222 / 209 / 183**。
- 50枚ベース: **約31G/1000円**。
- 覇道ノ刻: **50G+α、純増約2.0枚/G**。
- モード別天井: **通常A 896G / 通常B 1280G / 天国A 192G / 天国B 128G / 超天国 32G**。

### resetBehavior v0.7

- 必勝本の直接資料で **設定変更時: 天井Gリセット / モード再抽選 / 城下町ステージ / 野望メーター内部個数再抽選** を確認。
- **電源OFF→ONのみ: 天井G引継ぎ / モード引継ぎ / 城下町ステージ / 野望メーター内部個数引継ぎ**。ただし液晶上の野望メーター表示は設定変更・電断とも0個。
- 設定変更時モード振り分け:
  - 設定1～3: 通常A47.5 / 通常B37.5 / 天国A10.0 / 天国B5.0%
  - 設定4～6: 通常A46.7 / 通常B33.3 / 天国A15.0 / 天国B5.0%
- 公開天国選択率は設定1～3 **15.0%**、設定4～6 **20.0%**。
- 設定変更時野望メーター内部振り分け: **0個69.6 / 1個20.0 / 2個10.0 / 3個0.3 / 4個0.1%**。
- 変更判別の直接例: **前日の野望メーターが4個で閉店し、翌日共通ベルでCZが発動しなければ設定変更確定**。
- モード以外の独立高確/低確状態、本機固有ガックン、純据え置きの独立記述は検索語・資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 次回再開地点

1. **recordCount 731 / chronologicalFrontier 2013-04-15 / 04-15群OPEN** から開始。
2. 次は **鬼浜爆走紅蓮隊～友情挽歌編～（ベルコ）** のrepo重複を確認し、未登録なら性能コア＋resetBehavior v0.7を収集。
3. 04-15群の別カレンダー・メーカー別一覧を横断し、未処理機がないことを確認してから同日群をCLOSEDにする。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### 戦国パチスロ 信長の野望‐天下創世‐

- K-Navi（2013-04-15、ニューギン、ART50G+α、純増約2.0枚/G）: `https://p-kn.com/slot/1831/`
- グリーンべると / P-WORLD業界ニュース（2013-03-05、納品4/14予定、純増約2.0枚/G）: `https://news.p-world.co.jp/articles/5734/greenbelt`
- P-WORLD（ART初当たり、モード別天井、約2.0枚/G）: `https://www.p-world.co.jp/machine/database/7036`
- パチマガスロマガ 基本数値: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/25/h.php`
- パチマガスロマガ 1000円あたり約31G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/25/c.php`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2189/1/39477`
- パチ＆スロ必勝本 モード移行率: `https://p.hisshobon.jp/machine/2189/1/39822`
- pacnk（設定別ART/機械割、モード別天井）: `https://pacnk.com/slot/tools/sh_nobunaganoyabou.html`
