更新日: 2026-09-09

## 現在地点
- recordCount: **1069**
- latestRecordAdded: **パチスロ おそ松くん**（D-light / ディ・ライト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-17_osomatsu-kun.md`
- chronologicalFrontier: **2017-04-17**
- frontierLatestMachine: **パチスロ おそ松くん — No.1069**
- schema: **resetBehavior v0.7**
- status: **2017-04-17_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1068「鬼浜爆走紅蓮隊 愛情恋歌編」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1068件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN**。
- HANDOFF指定の次未処理 **「パチスロ おそ松くん」** をNo.1069として登録。
- 遡及reset QAは `2006-05_gold-shio-30.md` を再探索・更新し、性能側 `COMPLETE_CORE` を維持したままreset側を `PARTIAL_RESEARCH_EXHAUSTED` として別管理した。
- 4/17群は引き続きOPEN。既知未処理 **「パチスロ獣王 王者の覚醒」** を次候補とする。

## No.1069 — パチスロ おそ松くん
- manufacturer: **D-light / ディ・ライト**
- releaseDate canonical: **2017-04-17**
- formalModelName: **パチスロおそ松くんS**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機 / A+ART / ゲーム数上乗せ型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.3 / 98.5 / 100.5 / 106.6 / 112.1 / 119.2%**。複数解析で一致。
- ボーナス合算: **1/697 / 668 / 642 / 618 / 595 / 555**。
- ART初当たり canonical: **1/358 / 335 / 344 / 252 / 238 / 196**。
- 設定3 ARTは、すろぱちくえすと記事上部の **1/334** と、同ページ後段・ちょんぼりすた・期待値見える化・P-WORLDの **1/344** が競合。平均せず `CONFLICT_ART_SETTING3_334_VS_344` を保持し、複数独立資料一致の1/344をcanonical。
- PREMIUMロボ松RUSH: **1/7281 / 6553 / 5957 / 5461 / 5041 / 4681**。
- 50枚ベース: **約36G**。
- ART「ツールドおフランス」: **ボーナス込み約2.0枚/G、30G+α**。
- 基本獲得: **V-BIG 306枚 / 赤7BIG 204枚 / PREMIUMロボ松RUSH 36枚**。
- 通常天井: **ART間666GでCZ or ART、999GでART**。途中ボーナスではART間天井をリセットしない。

### resetBehavior v0.7
- 設定変更: **ART間天井RESET / 内部状態RESELECT / CA玉RESELECT / 試練玉RESELECT**。
- 純電源OFF→ON: **天井・内部状態・CA玉・試練玉CARRYOVER**。
- 設定変更時天井振り分け: **111G 10% / 333G 15% / 666G 25% / 999G 50%**。
- 設定変更時高確移行率: **6.7 / 12.5 / 6.7 / 12.5 / 12.5 / 12.5%**（設定1→6）。
- 設定変更時CA玉: **内部0〜9個**、試練玉: **内部0〜2個**を再抽選。見た目は0個開始。
- 朝一ステージ: **中央広場**。
- 朝一液晶G数は設定変更/据え置きとも「-」開始。
- 設定変更時は内部0〜110Gの表示用オフセット+当日消化が111Gに達すると「111G」へ切替。
- 据え置き時は前日最終G+当日消化がゾロ目到達した際に「111G」へ切替。前日最終G把握時は変更/据え置き推測に利用できる。
- 本機固有ガックン判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の内部状態/CA玉/試練玉を独立した直接資料で固定できず、純電断契約から機械的に転記せず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### identity / 欠損
- DAIICHI公式製品ページで機種存在を一次確認。
- 導入日はパチビー、ちょんぼりすた、すろぱちくえすと、期待値見える化で **2017-04-17** 一致。
- 型式 `パチスロおそ松くんS` は中古実機流通資料で確認。
- 検定番号は機種名・型式名・D-light・検定通過等へ検索語/資料系統を変更して再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **「おそ松さん」（2017-02-06導入Aタイプ）とは別機。混同禁止。**

## 遡及 resetBehavior QA — ゴールドシオ30
- path: `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
- performance status: **COMPLETE_COREを維持**。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**。
- 本機は5号機初期のノーマル完全告知機で、RT・通常時ゲーム数天井・モード管理なし。
- 設定変更/据え置き/純電断で引き継ぐべき通常天井G・RT残G・AT/ART・通常モードは `NOT_APPLICABLE / NONE_CONFIRMED`。
- 設定変更専用の短縮天井、朝一モード、朝一恩恵/不利、公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン、初期出目、ハイビスカス/ランプ状態による変更判別、電断復帰時の見た目契約は、P-WORLD、パチマガスロマガ、旧DB、パイオニア公式シリーズ資料、後年回顧資料まで再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- P-WORLDの「ボーナス後32G以内再当選でプレミアム告知」はリセット恩恵ではなく通常演出仕様として分離維持。

## 2017-04-17群監査
- status: **OPEN**。
- 登録済み:
  1. **パチスロ キン肉マン ～夢の超人タッグ編～ — No.1067**
  2. **鬼浜爆走紅蓮隊 愛情恋歌編 — No.1068**
  3. **パチスロ おそ松くん — No.1069**
- 未処理既知候補:
  1. **パチスロ獣王 王者の覚醒**
- 群CLOSED前に一撃2017年4月カレンダー、モゲスロ2017年カレンダー、メーカー横断で追加漏れを再監査すること。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。
- ルーニー・テューンズBIAは既存レコードにresetBehavior PARTIALがあるため、RT残G/内部RT状態の設定変更・据え置き・純電断契約を資料系統変更で再探索し、既存 `status: PARTIAL` は性能側として不用意に変更しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1069を再取得。
2. **1069件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN** を正本として継続。
3. 次未処理 **「パチスロ獣王 王者の覚醒」** の導入日・型式・性能コア・resetBehavior v0.7を複数ソース照合してNo.1070候補として処理。
4. 4/17群を全メーカー横断監査し、漏れがなければCLOSED化して次導入境界へ進む。
5. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1069 パチスロ おそ松くん
- DAIICHI公式: https://daiichi777.jp/product/detail/151/osomatsukun2
- P-WORLD: https://www.p-world.co.jp/machine/database/8327
- パチビー: https://www.pachibee.jp/machines/about/217030007
- ちょんぼりすた: https://chonborista.com/slot/d-light/34734/
- すろぱちくえすと: https://www.slopachi-quest.com/article/osomatsukun/
- 期待値見える化: https://slotjin.com/zone/osomatsukun/
- 型式クロスチェック中古実機流通: https://store.shopping.yahoo.co.jp/nakaiticom/20105.html

### 遡及QA ゴールドシオ30
- パイオニア公式シリーズ一覧: https://www.slot-pioneer.co.jp/products/siosai.html
- P-WORLD: https://www.p-world.co.jp/machine/database/4171
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/79/pioneer_slot_79.php
- 5号機クロニクル: https://5goki.com/pioneer

### 4/17群継続監査用
- 一撃2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017
