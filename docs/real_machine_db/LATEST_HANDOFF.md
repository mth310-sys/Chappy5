# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **508**
- latestMachineAdded: **ワニワニパニック～キミのハートをワニづかみ～**（Daiichi / 2010-09-21）
- latestRecord: `docs/real_machine_db/machines/2010-09-21_wani-wani-panic.md`
- chronologicalFrontier: **2010-09-21**
- frontierLatestMachine: **ワニワニパニック～キミのハートをワニづかみ～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線507実レコード「パチスロスパイダーマン3」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **507** / chronologicalFrontier **2010-09-06**。
- 9/6同日群および9/7以降をK-Navi/P-WORLD/当時系資料・月間候補で再監査。9/7〜9/20に具体的なホール導入日を直接確定できる未登録機を今回見つけられず、K-Naviで **2010-09-21** ホール導入開始を直接確認できた「ワニワニパニック」を508件目として追加。
- 同じ **2010-09-21** にKPE「極楽パロディウス」もK-Naviでホール導入開始を確認済み。次回は同日群を継続する。

## 508 — ワニワニパニック～キミのハートをワニづかみ～ 要約

- メーカー: **Daiichi（大一商会）**
- 導入: **2010-09-21**
- 型式: **パチスロワニワニパニック**
- 検定番号: **9S1084**
- 世代/タイプ: **5号機 / ノーマル / BIG+REG / RT・ART非搭載**
- 機械割: **96.5 / 98.0 / 99.8 / 103.5 / 107.0 / 112.0%**
- BIG: **1/290.0 / 1/282.5 / 1/274.2 / 1/258.0 / 1/242.7 / 1/227.6**
- REG: **1/431.2 / 1/414.8 / 1/394.8 / 1/354.2 / 1/309.1 / 1/252.1**
- 合算: **1/173.4 / 1/168.0 / 1/161.8 / 1/149.3 / 1/136.0 / 1/119.6**
- BIG約**312枚**、REG約**117枚**。
- ボーナス後32Gは「ワニパニゾーン」でプレミア演出出現率が上がるが、RT/ART・高確率抽選モードとは扱わない。
- 50枚ベース: 表記揺れ・型式名・メーカー・検定番号・1000円/50枚/ベース/コイン持ち等で再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_RESEARCHED_BASE_UNVERIFIED**

## resetBehavior v0.7 — ワニワニパニック

- **設定変更**: 本機固有の内部処理を直接説明する高信頼資料を、機種名/型式/Daiichi/9S1084＋設定変更・リセット・朝一・据え置き等で再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的ノーマル機挙動から補完しない。
- **ゲーム数/天井**: 通常ゲーム数天井・周期天井は確認されず、天井カウンタという意味では `NOT_APPLICABLE`。設定変更専用短縮天井も `NONE_CONFIRMED_AFTER_RESEARCH`。
- **据え置き/電源OFF→ON**: ボーナス後32Gの演出頻度アップ区間が日跨ぎ/電源再投入でどう扱われるかは直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **モード/状態**: RT/ART/ATや通常/天国等の出玉モードは確認しない。32Gワニパニゾーンは演出頻度アップとして分離。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の初当たり優遇・短縮天井・モード優遇、または明確な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、リール、初期出目まで再探索したが、本機固有の確定的な条件/確率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 確認なし。ボーナス後32Gはリセット専用数値ではない。

## 資料照合

- 設定別機械割 **96.5 / 98.0 / 99.8 / 103.5 / 107.0 / 112.0%** はP-WORLDと5号機クロニクルで一致。
- P-WORLDの設定別BIG/REG/合算を主値とし、パチビー/K-Naviの設定1・設定6合算値で端点照合。
- BIG約312枚 / REG約117枚、RT/ART非搭載、ボーナス後32Gの演出頻度アップはP-WORLD/K-Navi/パチビー系で整合。
- 型式名 **パチスロワニワニパニック**、検定番号 **9S1084** はP-WORLDで直接確認。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、次回以降recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

### ワニワニパニック
- K-Navi: `https://p-kn.com/slot/1283/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6101`
- パチビー: `https://www.pachibee.jp/machines/about/210080003`
- 5号機クロニクル Daiichi: `https://5goki.com/daiichi`
- 中一商事 型式補助: `https://www.nakaiti.com/html/sDaiichi001.html`

### 次候補の導入日確認
- K-Navi 極楽パロディウス: `https://p-kn.com/slot/1254/` — **2010-09-21**ホール導入開始

## 今回のGitHub更新

- 508 ワニワニパニック追加: commit `a39950437968587dad6db4adfeea9757cd10f13a`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 508 / chronologicalFrontier 2010-09-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 同日未処理候補 **「極楽パロディウス」KPE** を最優先。repo未登録確認後、性能コア＋resetBehavior v0.7を収集する。
3. 9/21同日群を閉じる前に、**2010-09-07〜20**の境界を月間導入一覧・当時納品資料でもう一段監査する。日付定義差のある機種を飛ばさない。
4. 同日群を閉じられた場合のみ9/22以降へ進む。既に確認済み後続候補として9/27「茉莉花の剣」「リングにかけろ1 ～黄金の日本Jr.編～」等があるが、途中日付の未登録を飛ばさない。
5. 508の追加QAは、50枚ベース、本機固有の設定変更/電源OFF→ON/32G演出区間引継ぎ、変更判別の直接資料が新たに見つかった場合のみ追補。推測で埋めない。
6. 遡及QAは既存地点を維持し、新規時系列前進を止めない。
