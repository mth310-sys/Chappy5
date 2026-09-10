更新日: 2026-09-10

## 現在地点
- recordCount: **1216**
- latestRecordAdded: **パチスロ ルパン三世 世界解剖**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-30_lupin-the-third-sekai-kaibou.md`
- chronologicalFrontier: **2018-07-30**
- frontierLatestMachine: **パチスロ ルパン三世 世界解剖 — No.1216**
- schema: **resetBehavior v0.7**
- status: **2018-07-30_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1215を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1215「マイジャグラーIV」まで1215件、2018-07-23群CLOSEDを確認。
- 2018-07-24〜07-29の境界漏れを検索し、7/30最古未処理候補「パチスロ ルパン三世 世界解剖」を既存重複なし確認後No.1216として登録。
- 導入日はHAZUSE/パチビー/ちょんぼりすた/すろぱちくえすと/パチ7/P-WORLDが2018-07-30で一致。一部資料の「全国導入8/6〜」は地域展開注記として保持し、canonicalは初回導入2018-07-30。
- 型式`ルパン三世世界解剖／K1`、検定番号`7S1878`をHAZUSEで固定。
- 性能コアは設定1/2/5/6、PAYOUT 97.3/98.3/104.2/112.4%、HR初当たり1/283.5〜1/232.5、50枚40.9/41.3/42.4/43.9G、HR純増約5枚/G、LIMIT252pt天井を複数解析で照合。
- basic payoutはHR中MB最大23枚、不二子ZONE最大104枚（通常時）/119枚（HR中）、一味ZONE最大47枚。HR自体は規定G数/枚数なし。
- resetBehaviorでは設定変更でもLIMITカウンタを引き継ぐことを複数資料で確認。据え置き/純電源OFF→ONも引き継ぎ。CZ中またはHR中に設定変更された場合は朝一HRスタート、据え置き/純電断はCZ/HRを引き継ぐ。
- 通常時には低確/高確やゲーム数解除モード、有利区間を用いるゲーム性はないと当時解析が明記。朝一専用モードは非該当。
- 朝一はLIMITカウンタ表示が一時的に隠れるが、1枚役/チェリー/ベル等の入賞で再表示。カウンタは設定変更でも据え置きでも引き継ぐため、それ単独で変更判別は不可。
- ガックン発生条件/発生率は本機固有資料を十分再探索しても固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 一撃2018-08-30時点では設定変更/電源OFF→ON時のLIMIT/状態を調査中としている一方、後続の複数解析は引継ぎを具体化。平均せず`SOURCE_TIMING_CONFLICT_RESET_TABLE_EARLY_UNDER_RESEARCH_VS_LATER_ANALYSIS_FIXED`として記録。

## No.1216 — パチスロ ルパン三世 世界解剖
- manufacturer: **オリンピア**
- releaseDateCanonical: **2018-07-30**
- formalModelName: **ルパン三世世界解剖／K1**
- certificationNumber: **7S1878**
- generation/system: **5号機 / 5.9号機期 / ノーマル特殊・CZ+HR**
- settings: **1 / 2 / 5 / 6**
- payout: **97.3 / 98.3 / 104.2 / 112.4%**
- HR初当たり: **1/283.5 / 1/267.8 / 1/249.1 / 1/232.5**
- base: **40.9 / 41.3 / 42.4 / 43.9G/50枚**
- HR net increase: **約5枚/G**
- ceiling: **LIMITカウンタ252pt → HR、平均163.4 / 162.0 / 158.3 / 153.9G**

### resetBehavior v0.7
- settingChange: LIMITカウンタ引継ぎ。通常時閉店→通常時。CZ/HR中閉店→設定変更で朝一HR。
- carryOver: LIMIT引継ぎ。通常→通常、CZ→CZ、HR→HR。
- powerOFF→ON: LIMIT引継ぎ。CZ/HR状態も引継ぎとする複数解析あり。液晶ステージはランダム。
- gameCounter/ceiling: LIMIT252ptを設定変更でも引き継ぐ。短縮ではなく前日値そのものを保持。
- mode/state: 通常時低確/高確・ゲーム数解除モードなし。CZ/HR状態のみ上記特殊契約を保存。
- advantageousSection: `NOT_APPLICABLE_TO_RECORDED_GAMEPLAY`。当時解析は有利区間概念なしと説明。
- resetBenefits: 前日高ポイント台の宵越しLIMIT狙いが成立。CZ/HR中変更なら朝一HRだがホール対策容易。
- resetPenalties: 固有ペナルティ確認なし。朝一ポイントは即表示されない。
- resetDetection: LIMITは変更/据え置き双方で引継ぎのため変更判別不可。ガックンはUNVERIFIED。

## 2018-07-30群監査
### 登録済み
- No.1216 パチスロ ルパン三世 世界解剖 — 2018-07-30。

### 群判定
- `2018-07-30_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- すろぱちくえすとの2018導入日一覧は7/30を「ルパン三世 世界解剖」のみ掲載し、次群8/6に複数機種を掲載。
- HAZUSE新台カレンダーでも7/30日付群を確認。機種別HAZUSE/パチビー/P-WORLD/パチ7等でもルパン世界解剖を同日に固定。
- 追加の同日別スペック/PB/地域差候補を今回の横断検索で直接固定できず、現時点でCLOSEDとする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_cranky-condor-x.md**（クランキーコンドルX）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。性能コア判定は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_rumble-roses.md`（ランブルローズ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1216を再取得。
2. **1216件 / chronologicalFrontier 2018-07-30 / 7/30群CLOSED**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 2018-07-31〜08-05の境界漏れを短く監査後、**2018-08-06群OPEN**へ進む。
4. すろぱちくえすとの8/6候補は **ハイカ101 / 花人 / クレアの秘宝伝3 / クロノス 刻の支配者 / ウィザードバリスターズ 弁護士セシル / TOWSER(トウサー)**。既存重複と各導入日をメーカー/型式資料で照合し、最古未処理をNo.1217として登録する。
5. 8/6群を全メーカー/別スペック/PB/地域差で横断監査してCLOSE可否を判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-08_rumble-roses.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1216 パチスロ ルパン三世 世界解剖
- HAZUSE: https://hazuse.com/machine/pachislot/7S1878/
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/59985/
- すろぱちくえすと基本: https://www.slopachi-quest.com/article/rupin-the-3rd-sekaikaibou/
- すろぱちくえすと天井/リセット: https://www.slopachi-quest.com/article/rupin-sekaikaibou-tennjou/
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- 期待値見える化: https://slotjin.com/tenjou/rupinsekaikaibou/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_lupin_sekai/3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/140/tsuujo01.php
- パチ7 HR: https://pachiseven.jp/machines/5512/cutout/13
- パチ7 不二子ZONE: https://pachiseven.jp/machines/5512/cutout/11
- パチ7 一味ZONE: https://pachiseven.jp/machines/5512/cutout/12
- パチビー: https://www.pachibee.jp/machines/lecture/218070003
- P-WORLD: https://www.p-world.co.jp/machine/database/8695
- アタリ7: https://www.atari7.com/column/20181532658421.php
