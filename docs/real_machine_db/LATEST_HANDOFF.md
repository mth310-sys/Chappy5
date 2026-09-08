更新日: 2026-09-09

## 現在地点
- recordCount: **1067**
- latestRecordAdded: **パチスロ キン肉マン ～夢の超人タッグ編～**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-17_kinnikuman3-yume-no-choujin-tag.md`
- chronologicalFrontier: **2017-04-17**
- frontierLatestMachine: **パチスロ キン肉マン ～夢の超人タッグ編～ — No.1067**
- schema: **resetBehavior v0.7**
- status: **2017-04-17_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1066「押忍！番長3」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1066件 / chronologicalFrontier 2017-04-03 / 4/3群CLOSED**。
- 2017-04-04〜04-16境界を再監査。現調査で独立した全国導入パチスロ本線を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 前handoffで注意されていた **「パチスロ獣王 王者の覚醒」4/14 vs 4/17** は、HAZUSE・K-Navi・一撃・パチビー・複数2017導入カレンダーが **2017-04-17** で一致。4/14はcanonicalから外し、4/17群候補として扱う。
- 4/17群の先頭処理として **「パチスロ キン肉マン ～夢の超人タッグ編～」** をNo.1067で登録。

## No.1067 — パチスロ キン肉マン ～夢の超人タッグ編～
- manufacturer: **山佐**
- releaseDate canonical: **2017-04-17**
- formalModelName: **パチスロキンニクマン3／CC**
- certificationNumber: **6S1492**
- generation/system: **5号機 / ART / バトル継続型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_VERIFICATION**

### performanceCore
- 機械割: **97.5 / 98.6 / 99.6 / 105.1 / 112.1 / 112.3%**。
- ART初当たり: **1/428.3 / 413.5 / 415.3 / 383.4 / 372.6 / 357.2**。
- 50枚ベース: **約46G**。
- ART「マッスルタイム」: **純増約2.0枚/G**、継続G数不定、バトル勝利で継続。
- 通常天井: **ART間1200G+前兆 → ART**。

### resetBehavior v0.7
- 設定変更時の通常時モードは **RESELECT**。設定別の公開朝一振り分けを保存。
- 設定1: A71.9 / B15.2 / 天国12.5 / 超天国0.4%。
- 設定2: A64.1 / B20.3 / 天国15.2 / 超天国0.4%。
- 設定3: A64.1 / B15.2 / 天国20.3 / 超天国0.4%。
- 設定4: A46.9 / B20.3 / 天国12.5 / 超天国20.3%。
- 設定5: A37.5 / B25.0 / 天国25.0 / 超天国12.5%。
- 設定6: A44.5 / B30.1 / 天国15.2 / 超天国10.2%。
- 朝一変更判別材料: 最初のチャンス役と前日対応ステージの不一致時TAG表示、100G周期外での特殊高確移行は据え置き濃厚材料。確定判別とはしない。
- ART間1200G天井の設定変更時RESET契約、据え置き/純電断時の天井・モード・TAG状態/RT状態の厳密な直接契約は、検索語・資料系統を変えた再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から推測補完していない。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### releaseDate CONFLICT
- canonical **2017-04-17**: HAZUSE、すろぱちくえすと機種個別、ちょんぼりすた、2017-03-24公開ぱちガブ試打告知が一致。
- conflicting **2017-04-03**: すろぱちくえすと年別整理一覧、古い単一整理資料。
- 当時導入前告知と複数機種個別DBを優先し、平均/曖昧化せずCONFLICT保持。

## 2017-04-04〜04-16境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 一撃2017年4月カレンダーは4/3から4/17へ進み、4/04〜16にスロット新台列なし。
- 複数年別カレンダーでも4/17群へ連続。
- 「獣王 王者の覚醒」は4/17をcanonical固定。4/14説は今回の複数照合で採用しない。

## 2017-04-17群監査
- status: **OPEN**。
- 登録済み:
  1. **パチスロ キン肉マン ～夢の超人タッグ編～ — No.1067**
- 未処理既知候補:
  1. **鬼浜爆走紅蓮隊 愛情恋歌編**
  2. **パチスロ おそ松くん**
  3. **パチスロ獣王 王者の覚醒**
- 2017年導入カレンダー（モゲスロ）は上記4機種を4/17群として掲載。一撃はキン肉マン/獣王を4/17掲載、別解析で鬼浜/おそ松くんも4/17を確認できるため、群CLOSED前に全メーカー横断監査を継続する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1067を再取得。
2. **1067件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN** を正本として継続。
3. 次未処理 **「鬼浜爆走紅蓮隊 愛情恋歌編」** の導入日・型式・性能コア・resetBehavior v0.7を複数ソース照合してNo.1068候補として処理。
4. 続いて **「パチスロ おそ松くん」→「パチスロ獣王 王者の覚醒」** を処理し、4/17群を全メーカー監査してCLOSED可否を判定。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1067 キン肉マン3
- HAZUSE: https://hazuse.com/machine/pachislot/6S1492/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/6S1492/genre/208/
- すろぱちくえすと機種個別: https://www.slopachi-quest.com/article/kinnikuman3/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/33436/
- ぱちガブ試打動画: https://www.youtube.com/watch?v=fFs_RngXoTE
- 一撃2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- すろぱちくえすと年別一覧（4/3競合）: https://www.slopachi-quest.com/article/2017-sindai/

### 4/04〜16境界 / 獣王日付再固定
- 一撃2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- HAZUSE 獣王: https://hazuse.com/machine/pachislot/6S1203/
- K-Navi 獣王: https://p-kn.com/slot/2742/
- 一撃 獣王: https://1geki.jp/slot/s_jyuuou_ohja/
- パチビー 獣王: https://www.pachibee.jp/machines/about/217030006
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
