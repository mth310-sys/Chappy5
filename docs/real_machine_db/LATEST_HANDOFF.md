更新日: 2026-09-09

## 現在地点
- recordCount: **1068**
- latestRecordAdded: **鬼浜爆走紅蓮隊 愛情恋歌編**（ベルコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-17_onihama-bakusou-gurentai-aijou-renka.md`
- chronologicalFrontier: **2017-04-17**
- frontierLatestMachine: **鬼浜爆走紅蓮隊 愛情恋歌編 — No.1068**
- schema: **resetBehavior v0.7**
- status: **2017-04-17_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1067「パチスロ キン肉マン ～夢の超人タッグ編～」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1067件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN**。
- HANDOFF指定の次未処理 **「鬼浜爆走紅蓮隊 愛情恋歌編」** をNo.1068として登録。
- 4/17群は引き続きOPEN。既知未処理として **「パチスロ おそ松くん」→「パチスロ獣王 王者の覚醒」** が残る。

## No.1068 — 鬼浜爆走紅蓮隊 愛情恋歌編
- manufacturer: **ベルコ**
- releaseDate canonical: **2017-04-17**
- formalModelName: **オニハマアイ／L7**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機 / A+ART / 差枚数管理型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_VERIFICATION**

### performanceCore
- 機械割 canonical: **97.9 / 99.3 / 101.6 / 104.8 / 108.3 / 112.1%**。
- 設定2のみ、ちょんぼりすた **99.2%** vs すろぱちくえすと・期待値見える化 **99.3%** の軽微CONFLICTを保持。平均せず99.3%をcanonical。
- ART初当たり: **1/471.1 / 445.6 / 407.4 / 362.3 / 331.5 / 302.1**。
- ボーナス: **全設定共通約1/819.2、約174枚**。
- ボーナス+ART合算: **1/299.1 / 288.6 / 272.1 / 251.2 / 236.0 / 220.7**。
- 50枚ベース: **約39〜39.9G**。
- ART「狂乱麗舞」: **単体約1.8枚/G、ボーナス込み約2.0枚/G**。定義を分離して保存。
- ART初期差枚数: **70枚以上**。
- 通常天井: **ART間1470G → ART**。ボーナスを挟んでもART間ゲーム数は継続。天井ARTの約1/8で超鬼カード（平均約450枚）。

### resetBehavior v0.7
- 設定変更: **ART間1470G天井RESET / 内部状態RESELECT**。
- 純電源OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。複数解析で一致。
- 据え置き時の天井・内部状態を「据え置き」列で直接固定する資料は今回固定できず、純電断契約から推測せず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時高確移行率:
  - 設定1 24.2%
  - 設定2 26.4%
  - 設定3 29.8%
  - 設定4 36.1%
  - 設定5 40.8%
  - 設定6 47.1%
- 設定変更時赤テープモード移行率: **24.2%精密表記 / 約25%丸め表記**。丸め差として扱う。
- 赤テープモード中は **毎G約1/10でCZ抽選**。
- ちょんぼりすた掲載の朝一リセット機械割: **104.45 / 105.88 / 107.41 / 110.27 / 113.17 / 117.29%**。通常機械割とは定義を分離し、numericResetDataへ保存。
- 変更判別: **ガックン可能**という当時解析＋動画あり。さらに朝一BETランプ点灯は据え置き濃厚、非点灯はリセットor対策済。いずれも対策可能で確定判別ではない。
- 朝一ステージ: 後発解析は鬼浜電鉄、初期解析は調査中。公開時点差として保持。
- 愛ポイントの設定変更/据え置き/純電断契約: 再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### identity / 欠損
- ベルコ公式2017-01-05ティザーPVで機種存在と名称を一次確認。
- 導入日はP-WORLD・ちょんぼりすた・期待値見える化等で **2017-04-17** 一致。
- 型式 `オニハマアイ／L7` は筐体資料と中古実機流通資料でクロスチェック。
- 検定番号は「機種名 / オニハマアイ / L7 / ベルコ / 6S / 検定番号 / 検定通過」等へ検索語と資料系統を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

## 2017-04-17群監査
- status: **OPEN**。
- 登録済み:
  1. **パチスロ キン肉マン ～夢の超人タッグ編～ — No.1067**
  2. **鬼浜爆走紅蓮隊 愛情恋歌編 — No.1068**
- 未処理既知候補:
  1. **パチスロ おそ松くん**
  2. **パチスロ獣王 王者の覚醒**
- 群CLOSED前に導入カレンダー・メーカー横断で追加漏れを再監査すること。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1068を再取得。
2. **1068件 / chronologicalFrontier 2017-04-17 / 4/17群OPEN** を正本として継続。
3. 次未処理 **「パチスロ おそ松くん」** の導入日・型式・性能コア・resetBehavior v0.7を複数ソース照合してNo.1069候補として処理。
4. 続いて **「パチスロ獣王 王者の覚醒」** を処理し、4/17群を全メーカー横断監査してCLOSED可否を判定。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1068 鬼浜爆走紅蓮隊 愛情恋歌編
- ベルコ公式ティザーPV: https://www.youtube.com/watch?v=nS5ycT2umXo
- P-WORLD: https://www.p-world.co.jp/machine/database/8294
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/32378/
- すろぱちくえすと: https://www.slopachi-quest.com/article/onihama-aijou/
- 期待値見える化: https://slotjin.com/zone/onihama-ai/
- 型式資料: https://pachinko.hatenablog.jp/entry/2017/04/onihama-ai
- 型式クロスチェック中古実機流通: https://auctions.yahoo.co.jp/jp/auction/1174252970

### 4/17群継続監査用
- 一撃2017年4月カレンダー: https://1geki.jp/newmachinecalender/201704/
- モゲスロ2017年カレンダー: https://moge-site.com/new-slot2017

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
