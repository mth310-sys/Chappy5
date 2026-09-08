更新日: 2026-09-09

## 現在地点
- recordCount: **1052**
- latestRecordAdded: **パチスロ モンキーターンIII**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-27_monkey-turn-iii.md`
- chronologicalFrontier: **2017-02-27**
- frontierLatestMachine: **パチスロ モンキーターンIII — No.1052**
- schema: **resetBehavior v0.7**
- status: **2017-02-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-02-28_TO_2017-03-05_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1051実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` を直近進捗正本として採用。
- 開始時mainは **1051件 / 2017-02-20群CLOSED / 2/21〜26境界CLOSED**。handoff指定の次カーソル `パチスロ モンキーターンIII` をNo.1052として登録。
- 性能コア＋resetBehavior v0.7を収集。導入日は2017-02-27が当時/複数資料で一致する一方、ちょんぼりすたのみ2017-03-06のためCONFLICTを保持。
- 2/27同日群を2-9伝説・HAZUSE・個別日付検索から再監査。全国導入パチスロ本線として追加固定できたのはモンキーターンIIIのみで、登録後にCLOSED。
- 2/28〜3/5境界も日付別検索と2017導入一覧を横断し、全国導入パチスロ本線の追加候補を固定できなかったため現調査でCLOSED。次の明確な群は2017-03-06。

## No.1052 — パチスロ モンキーターンIII
- manufacturer: **山佐**
- releaseDate canonical: **2017-02-27**
- releaseDate conflict: **2017-03-06（ちょんぼりすた）**
- formalModelName: **モンキーターン3／DD**
- certificationNumber: **6S1436**
- generation/system: **5号機 / 5.5号機期 / ART / ST型ART / 周期カレンダーCZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RELEASE_DATE_CONFLICT**

### performanceCore
- 機械割: **97.5 / 98.8 / 100.5 / 104.2 / 108.5 / 112.4%**。
- ART初当たり: **1/395.2 / 380.1 / 361.5 / 311.7 / 282.9 / 254.7**。
- CZ合算: **1/179.6 / 175.0 / 171.6 / 154.3 / 148.5 / 139.3**。
- 50枚ベース代表: **約45G/50枚**。別資料の約45〜47G、設定別45.3〜47.1Gは定義/精度を分離して保持。
- ART「SG RUSH」純増: **約2.0枚/G**。
- ボーナス非搭載。ARTはフライングST20G以上 + ST30Gで初回基本50G以上。

### resetBehavior v0.7
- 通常天井: **カレンダー6期5ヶ月消化+前兆（代表約1050G+α）でART**。6期6ヶ月目の前兆で告知。CZ中は周期進行停止。
- 設定変更: **天井進捗RESET / カレンダー表示1期1ヶ月 / カレンダーマス30日分ランダム再生成 / 波多野家ステージ**。
- 純電源OFF→ON: **天井進捗CARRYOVER / カレンダー表示1期1ヶ月 / カレンダーマスCARRYOVER / 波多野家ステージ**。
- 据え置き: 純電断直接比較に準じ、天井進捗・カレンダーマスCARRYOVER。細かな内部高低状態の直接契約はUNVERIFIED。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用カレンダーモード振り分け/高確初期率: **UNVERIFIED/NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 前日最終カレンダーマスとの差は設定変更濃厚材料。ガックン報告ありだが難易度高め・対策なし条件のため確定契約にはしない。表示1期1ヶ月と波多野家ステージは設定変更/純電断共通で単独判別不可。

## dataQuality / conflicts
- `CONFLICT_RELEASE_DATE_2017_02_27_VS_2017_03_06_CHONBORISTA`。
  - 2017-02-27: HAZUSE / パチ7 / 一撃 / ぱちすろLIFE / パチスロ必勝ガイドMAX当時紹介 / 2-9伝説。
  - 2017-03-06: ちょんぼりすた。
- `CONFLICT_CHONBORISTA_RESET_EXPLANATORY_SENTENCE_VS_OWN_TABLE`。
  - 同サイト説明文の「リセット時のカレンダーは引き継ぎ」は直前表の設定変更=30日ランダム / 電源OFF→ON=引継ぎと自己矛盾。別系統解析も設定変更=ランダム再生成で一致するため表側をcanonical。

## 2017-02-27境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み: パチスロ モンキーターンIII — No.1052。
- 2-9伝説の2017-02-27欄もモンキーターン3のみ。HAZUSE・個別日付検索を追加したが、同日全国導入本線の追加パチスロを固定できず。

## 2017-02-28〜2017-03-05境界監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 2/28, 3/1, 3/2, 3/3, 3/4, 3/5を日付別に検索し、2017導入一覧とも照合。全国導入パチスロ本線を追加固定できず。
- 次の明確な全国導入群は **2017-03-06**。

## 次の2017-03-06群 — 未処理候補
2-9伝説の導入一覧で少なくとも以下を確認。順序は次回、実導入日・既存登録有無・メーカー横断で再固定する。
- **ドリスタせかんど**（NET）— HAZUSEでも2017-03-06、型式 `ドリスタせかんど／NE`、検定6S1523を確認済み。
- **ビビッドレッド・オペレーション**（三洋）— 2017-03-06候補。
- **ゼクスイグニッション** — 2017-03-06候補。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1052を再取得。
2. **1052件 / chronologicalFrontier 2017-02-27 / 2/27群CLOSED / 2/28〜3/5境界CLOSED** を正本として継続。
3. 次の未処理本線は **2017-03-06群**。まず同日候補を全メーカー横断で再固定し、先頭未登録機をNo.1053として性能コア＋resetBehavior v0.7収集。
4. 現時点の先頭既知候補は **NET「ドリスタせかんど」**。ただし同日群の取りこぼし防止のため、追加前に導入カレンダー/メーカー資料を再監査する。
5. 3/06同日群を全機処理するまでCLOSEDにしない。
6. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1052 モンキーターンIII
- HAZUSE: https://hazuse.com/machine/pachislot/6S1436/
- パチ7 天井: https://pachiseven.jp/machines/5056/cutout/78
- パチ7 通常時: https://pachiseven.jp/machines/5056/cutout/4
- 一撃: https://1geki.jp/slot/s_monkeyturn
- 一撃 ART概要: https://1geki.jp/slot/s_monkeyturn/81/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/30593/
- 期待値見える化: https://slotjin.com/zone/monkeyturn3/
- ぱちすろLIFE: https://pachislot-life.com/information/mkt3/
- ぱちすろLIFE 天井/設定判別: https://pachislot-life.com/information/mkt3-capture/
- スロがち: https://slogati.com/monkeyturn3/
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- Fujisan パチスロ必勝ガイドMAX 2017年2月号: https://www.fujisan.co.jp/product/1219887/b/1454477/

### 次候補 / 境界
- 2-9伝説 2017導入一覧: https://29den.com/newslot/
- HAZUSE ドリスタせかんど: https://hazuse.com/machine/pachislot/6S1523/
