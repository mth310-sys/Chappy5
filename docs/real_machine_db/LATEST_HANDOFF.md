# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **760**
- latestMachineAddedByChronology: **回胴黙示録カイジ3**（ロデオ / 製造元: 株式会社銀座）
- latestRecord: `docs/real_machine_db/machines/2013-09-02_kaidou-mokushiroku-kaiji3.md`
- chronologicalFrontier: **2013-09-02**
- frontierLatestExactDateMachine: **回胴黙示録カイジ3**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-09-02_GROUP__NEXT_BOUNDARY_2013-09-03_TO_09-16__NEXT_CONFIRMED_2013-09-17_BOMBER_POWERFUL_II**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前レコード `2013-09-02_project-arms.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続。
- 開始時main正本は recordCount **759** / chronologicalFrontier **2013-09-02** / 09-02群OPEN。
- 前HANDOFFの未処理先頭 **回胴黙示録カイジ3（ロデオ）** を760件目として追加。
- 2013-09-02同日候補について、K-Navi、当時業界記事、複数機種DBを再監査。今回の調査範囲では既登録の **パチスロ PROJECT ARMS / 回胴黙示録カイジ3** 以外に、同日ホール導入を具体日で固定できる未登録5号機を確認できなかったため **2013-09-02群をCLOSED_FOR_CURRENT_RESEARCH** とした。
- 2013-09-03以降の次の具体導入日を再探索し、少なくとも **2013-09-17 パチスロ ボンバーパワフルII（SANKYO）** をK-Naviで確認。09-03〜09-16は次回先頭で再監査してから進む。

## 今回追加 — 回胴黙示録カイジ3

### identity / 性能コア

- manufacturer: **ロデオ（製造元: 株式会社銀座）**。
- releaseDate: **2013-09-02**。K-Navi、2-9伝説、後年機種DBで一致。当時業界記事は9月1日納品開始予定とするため、納品日とホール導入日を定義分離。
- 型式名: **カイジ3S**、検定番号 **3S0271**。
- generation/system: **5号機 / AT / ゲーム数解除 + 自力CZ**。
- 主機械割系列: **97.1 / 98.7 / 100.6 / 103.0 / 107.3 / 112.4%**。
- AT初当たり: **1/299.1 / 285.7 / 270.3 / 256.0 / 227.0 / 197.1**。
- baseGamesPer50: **約28G/50枚**を主値。別資料の約30GとCONFLICT保持。
- AT「黙示録モード」: **初期30〜300G / 純増約2.6枚/G / 継続率50〜89%**。
- 擬似ボーナス非搭載のAT特化タイプ。

### resetBehavior v0.7

- 複数解析資料で **設定変更時はAT間天井までのゲーム数をクリア** と確認。
- 設定変更時の公開朝一数値として、CrankySevenに **チャンスモード20% / 天国モード10〜15%** の直接記述を確認。
- よって設定変更後は少なくとも **30〜35%がチャンス以上**。チャンスは規定G最大250G、天国は最大100G。固定短縮天井ではなく **モード再振り分けによる朝一優遇** として保存。
- 通常時の規定Gモード: **通常A / 通常B / チャンス / 天国**。規定G最大は **900 / 850 / 250 / 100G**。最大前兆40Gを含む表現値は資料ごとに差があるため、規定G数と分離。
- 通常テーブルモードとは別に **低確 / 高確 / 超高確** のサブ状態が存在。
- 純据え置き時の天井G・モード・サブ状態の直接契約、設定変更を伴わない電源OFF→ON、設定変更時の低高確初期振り分け、本機固有ガックン/初期出目/液晶判別は、表記・型式・検索語・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## CONFLICT / safeguards

- 機械割は主系列 **97.1〜112.4%** と、当時系資料が明記するシミュレート系列 **96.6 / 98.0 / 100.0 / 102.4 / 106.8 / 111.8%** が存在。平均せず `CONFLICT_PAYOUT_PUBLISHED_ANALYSIS_VS_SIMULATED_SERIES`。
- baseは **約28G/50枚** と **約30G/50枚**。平均しない。
- 天井は規定G数と前兆込み表示を分離。通常A 900G + 最大40G前兆、通常B 850Gだが前兆込み表示に865/890G差、チャンス250G、天国100G。
- 2025年スマスロ「回胴黙示録カイジ 狂宴」、2018年「回胴黙示録カイジ4」、パチンコ「CR弾球黙示録カイジ3」を混入させない。

## 境界監査 / 同日群

- 2013-09-02登録済み:
  1. **パチスロ PROJECT ARMS**（ニューギン）
  2. **回胴黙示録カイジ3**（ロデオ / 製造元銀座）
- **2013-09-02群: CLOSED_FOR_CURRENT_RESEARCH**。
- 次の具体導入日として確認済み:
  - **2013-09-17 パチスロ ボンバーパワフルII**（SANKYO）
- ただし **2013-09-03〜09-16境界は次回冒頭でメーカー横断・導入カレンダー再監査**してから09-17へ進む。検定日・撤去期限・アプリ配信日をホール導入日に混入させない。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規収集キューを優先し、既存性能値の無駄な再収集はしない。

## 次回再開地点

1. **recordCount 760 / chronologicalFrontier 2013-09-02 / 09-02群CLOSED** から開始。
2. **2013-09-03〜09-16** を導入カレンダー・メーカー別一覧・業界記事で再監査し、具体導入日の未登録5号機があれば最古から処理。
3. 境界に未処理がなければ、確認済み次候補 **2013-09-17「パチスロ ボンバーパワフルII」（SANKYO）** を761件目候補として性能コア + resetBehavior v0.7で収集。
4. 09-17同日群をメーカー横断で監査してOPEN/CLOSEDを更新。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### 回胴黙示録カイジ3

- K-Navi: `https://p-kn.com/slot/1905/`
- グリーンべると記事転載系: `https://p-mans.blogspot.com/2013/07/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/62/a.php`
- 2-9伝説: `https://29den.com/kaiji3/`
- CrankySeven: `https://crankyseven.com/kaiji-three-pc.htm`
- pacnk: `https://pacnk.com/slot/2013/kaiji3/top.php`
- Pachinavi: `https://pachinavi.net/machines/kaiji-3/`
- スロット価格.com: `https://slot-kakaku.com/%E5%9B%9E%E8%83%B4%E9%BB%99%E7%A4%BA%E9%8C%B2%E3%82%AB%E3%82%A4%E3%82%B83/`
- 当時系シミュレート資料: `https://dream777star.blog47.fc2.com/blog-entry-2508.html`
- サミーネットワークス PR TIMES: `https://prtimes.jp/main/html/rd/p/000000104.000002703.html`

### 次候補 / 境界

- K-Navi「パチスロ ボンバーパワフルII」: `https://p-kn.com/slot/1911/` — ホール導入開始2013-09-17

## commits

- 760th record add: `ca6f6e60b7b38de4cd469bb84e7b8e36eb796273` (`db: add Kaidou Mokushiroku Kaiji 3 with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay handoff after Kaiji 3`)
