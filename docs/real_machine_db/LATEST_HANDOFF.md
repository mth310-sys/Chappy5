更新日: 2026-09-09

## 現在地点
- recordCount: **1065**
- latestRecordAdded: **パチスロ恵比寿マスカッツ**（EXCITE / エキサイト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-03_ebisu-muscats.md`
- chronologicalFrontier: **2017-04-03**
- frontierLatestMachine: **パチスロ恵比寿マスカッツ — No.1065**
- schema: **resetBehavior v0.7**
- status: **2017-04-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの README、mission v0.7、旧INDEX、LATEST_HANDOFF、No.1064実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1064件 / 2017-04-03 / 4/3群OPEN**。前回チャット上の1061件地点は並行リレーで進行済みだったため重複を避けた。
- No.1065として **パチスロ恵比寿マスカッツ** を登録。
- 2017-04-03導入をパチビー、K-Navi、パチ＆スロ必勝本、アタリ7で照合。グリーンべるとの納品4/2予定とも整合。
- 検定通過記事から型式 `恵比寿マスカッツY`、メーカーEXCITEを固定。検定番号は十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 性能コアは機械割、疑似BONUS、ART初当たりが複数資料一致。設定1ベース46.7G/50枚、ART純増約2.0枚/Gを収録。
- resetBehaviorは設定変更で通常最大999Gの天井をRESETし、**111/333/777G専用短縮テーブル**へ移行。純電源OFF→ONは天井CARRYOVER。
- 設定変更後の内部状態、純電断時内部状態、1000ptポイント残量の契約は当時資料が未確定で、表記揺れ・型式・メーカー・朝一/据え置き/電断/高確/ポイントを再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論から補完していない。
- 4/3同日監査で **押忍！番長3** と **キン肉マン3 夢の超人タッグ編** が同日未登録候補として明確化したため、群はOPENのまま。

## No.1065 — パチスロ恵比寿マスカッツ
- manufacturer: **EXCITE（エキサイト） / ニューギングループ**
- releaseDate: **2017-04-03**
- formalModelName: **恵比寿マスカッツY**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 疑似ボーナス+ART / ART特化型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 98.7 / 100.6 / 103.1 / 106.1 / 110.1%**。
- 疑似BONUS: **1/297.2 / 295.2 / 274.4 / 258.1 / 260.8 / 237.4**。
- ART初当たり: **1/574.0 / 570.7 / 500.5 / 452.4 / 424.1 / 362.5**。
- 50枚ベース: **設定1 約46.7G**。
- ART/疑似BONUS純増: **約2.0枚/G**。
- マスカッツCHANCE: バナナナビ5回/1セット、最大5セット。5セット完走でART確定。

### resetBehavior v0.7
- 通常最大999G天井: **設定変更RESET / 据え置き・純電断CARRYOVER**。
- 設定変更後最大天井: **777G**。
- 設定変更時天井振り分け（111 / 333 / 777G）:
  - 設定1: **0.4 / 18.8 / 80.9%**
  - 設定2: **0.4 / 19.5 / 80.1%**
  - 設定3: **0.8 / 20.3 / 78.9%**
  - 設定4: **1.2 / 21.9 / 77.0%**
  - 設定5: **1.6 / 23.4 / 75.0%**
  - 設定6: **2.0 / 25.0 / 73.0%**
- 内部状態: **UNVERIFIED_AFTER_RESEARCH**（当時資料も調査中）。
- 1000ptポイント残量の設定変更/純電断契約: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有の確定ガックン/朝一表示判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2017-04-03群監査
- status: **OPEN**。
- 登録済み:
  1. **ドキドキマンゴー-30 — No.1062**
  2. **ドキドキマンゴー-25 — No.1063**
  3. **パチスロ 機動戦士Zガンダム — No.1064**
  4. **パチスロ恵比寿マスカッツ — No.1065**
- 未処理確認候補:
  1. **押忍！番長3** — 大都技研。複数資料で2017-04-03導入、型式 `押忍!番長3/A5` を先行確認。
  2. **キン肉マン3 夢の超人タッグ編** — 山佐。2017年導入一覧で4/3候補。次回はメーカー/当時資料で導入日を再固定してから登録する。
- 上記処理後、4/3同日全メーカー監査を継続してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1065を再取得。
2. **1065件 / chronologicalFrontier 2017-04-03 / 4/3群OPEN** を正本として継続。
3. 次の未処理 **「押忍！番長3」**（大都技研）をNo.1066候補として性能コア＋resetBehavior v0.7で処理。
4. 続いて **「キン肉マン3 夢の超人タッグ編」** を導入日再固定後に処理。
5. 4/3同日全メーカー監査を続け、漏れがなければ群をCLOSED。
6. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1065 パチスロ恵比寿マスカッツ
- パチビー: https://www.pachibee.jp/machines/about/217030003
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/9048/greenbelt
- 遊技日本: https://yugi-nippon.com/pachinko-news/post-11605/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2930/1/62345
- パチ＆スロ必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2930/1/63156
- K-Navi: https://p-kn.com/slot/2737/
- アタリ7: https://www.atari7.com/slot/date1486973930.php
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/34518/
- 5号機クロニクル: https://5goki.com/newgin-excite
- p-media 検定通過/型式: https://p-media.info/%E6%81%B5%E6%AF%94%E5%AF%BF%E3%83%9E%E3%82%B9%E3%82%AB%E3%83%83%E3%83%84%E3%81%8C%E3%82%A8%E3%82%AD%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%8C%96%EF%BC%8Fav/

### 4/3同日監査
- 2017導入日一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 押忍！番長3 一撃: https://1geki.jp/slot/s_osubancho3/
- 押忍！番長3 パチ＆スロ必勝本: https://hisshobon.news/uncategorized/2846/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
