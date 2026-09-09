更新日: 2026-09-09

## 現在地点
- recordCount: **1088**
- latestRecordAdded: **パチスロ 信長の野望-創造-**（EXCITE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-05_nobunagas-ambition-souzou.md`
- chronologicalFrontier: **2017-06-05**
- frontierLatestMachine: **パチスロ 信長の野望-創造- — No.1088**
- schema: **resetBehavior v0.7**
- status: **2017-06-05_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-06-06_TO_2017-06-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / NEXT_2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1085実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは1085件 / 2017-06-05群OPENだったが、調査・書込中に並行リレーがNo.1086「パチスロ テイルズ オブ シンフォニア」、No.1087「ぱちスロ アベンジャーズ」まで先行。GitHubのSHA競合を検知して重複登録せず、最新mainへ再同期した。
- 正本上の次の未処理 EXCITE「パチスロ 信長の野望-創造-」をNo.1088として性能コア + resetBehavior v0.7で登録。
- 6/5群CLOSE前の `ケロロ軍曹` 導入日監査を実施。HAZUSE / パチビー / 一撃 / K-Navi / すろぱちくえすと / すろかいはいずれも2017-06-19を支持。少数資料の6/5表記は平均せず異常値として記録し、canonicalは6/19とした。
- K-Navi 2017年6月カレンダーと2017年導入一覧では、6/5群4機の次の全国導入群が6/19。現時点で6/6〜6/18の独立全国導入パチスロを固定できず境界CLOSEDとした。

## No.1088 — パチスロ 信長の野望-創造-
- manufacturer: **EXCITE**
- releaseDate: **2017-06-05**
- formalModelName: **信長の野望-創造-Z**
- certificationNumber: **6S1124**
- generation/system: **5号機 / 5.5号機 / ART / CZ / 疑似ボーナス型上乗せゾーン**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.3 / 98.9 / 100.0 / 102.7 / 106.2 / 111.0%**。
- ART初当たり: 精密値 **1/422.3 / 399.0 / 389.0 / 357.7 / 319.6 / 279.7**。HAZUSE整数値は丸め差として分離。
- ベース: **約47G/50枚**。
- ART「創造の刻」純増: **約1.9枚/G**。
- ARTは自軍兵力が0になるまで継続する兵力管理型で固定セットG/枚数ではない。
- 通常天井: **ART間1280G**。1280G後は前兆突入条件成立時に発動するため1280G超の場合あり。

### resetBehavior v0.7
- 設定変更: **天井RESET**。
- 設定変更: **創造ボード9マスを各18.8%で内部点灯抽選**。点灯しても表面上は直接見えない。
- 電源OFF→ON: **天井ゲーム数CARRYOVER**。
- 電断時の創造ボード契約は当時一撃が「調査中」。据え置き単独の創造ボード契約も、検索語・資料系統を変えて再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 低確/高確等の設定変更時状態振り分け数値: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有の確定ガックン/初期出目変更判別: `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / 定義整理
- ART初当たりは一撃精密値とHAZUSE整数丸めがあるが、定義一致の丸め差であり数値CONFLICTにはしない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for canonical core yardstick values.

## 2017-06-05群
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  1. パチスロ ツインエンジェルBREAK — No.1085
  2. パチスロ テイルズ オブ シンフォニア — No.1086
  3. ぱちスロ アベンジャーズ — No.1087
  4. パチスロ 信長の野望-創造- — No.1088
- `ケロロ軍曹` は6/5候補から除外し、6/19群へ送る。6/5表記の少数資料は履歴として残す。

## 2017-06-06〜2017-06-18境界
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- K-Navi月間カレンダーと2017導入一覧では6/5群の次が6/19群。
- 今回の横断確認で独立全国導入パチスロを固定できなかった。

## 2017-06-19群 — 次の本線
- status: **OPEN**。
- 確認済み候補（順序は同日内のため次回再監査可）:
  1. **パチスロ サイコパス**
  2. SLOTギルティクラウン
  3. パチスロ リング 終焉ノ刻
  4. パチスロ ベン・トー～半額弁当争奪戦!!～
  5. ケロロ軍曹
  6. ドリームジャンボ あの興奮をもう一度
  7. スーパーミラクルジャグラー
  8. ハイパーリノ
- K-Naviと2017導入一覧を基準に、次回まず「パチスロ サイコパス」の導入日・メーカー・型式を再固定してNo.1089候補として処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1088を再取得。
2. **1088件 / chronologicalFrontier 2017-06-05 / 6/5群CLOSED / 6/6〜18境界CLOSED / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「パチスロ サイコパス」** をNo.1089候補として性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群を時系列キューとして処理し、全メーカー監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1088 パチスロ 信長の野望-創造-
- HAZUSE: https://hazuse.com/machine/pachislot/6S1124/
- 一撃 基本: https://1geki.jp/slot/s_nobunagasouzou/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_nobunagasouzou/3/
- 一撃 ART: https://1geki.jp/slot/s_nobunagasouzou/81/
- グリーンべると: https://web-greenbelt.jp/00009538/
- 長崎県遊技業協同組合 / 遊技通信転載: https://nagasaki-yukyo.or.jp/information/%E4%BA%BA%E6%B0%97%E6%AD%B4%E5%8F%B2slg%E3%80%8C%E4%BF%A1%E9%95%B7%E3%81%AE%E9%87%8E%E6%9C%9B%E3%80%8D%E3%81%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%AB%E7%99%BB%E5%A0%B4/

### ケロロ軍曹導入日監査
- HAZUSE: https://hazuse.com/machine/pachislot/6S1378/
- パチビー: https://www.pachibee.jp/machines/index/217050018
- 一撃: https://1geki.jp/slot/s_kelolo/
- K-Navi 2017年6月カレンダー: https://p-kn.com/calendar/201706/
- すろぱちくえすと: https://www.slopachi-quest.com/article/keroro-gunsou/
- すろかい: https://slotkaiseki.hatenablog.com/entry/keroro
- 6/5表記の少数資料: https://chonborista.com/slot/daito-slot/36615/

### 6月導入境界
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
