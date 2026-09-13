更新日: 2026-09-13

## 現在地点
- recordCount: **1602**
- latestRecordAdded: **L ひぐらしのなく頃に 業 — No.1602**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-11-06_higurashi-no-naku-koro-ni-gou.md`
- chronologicalFrontier: **2023-11-06**
- frontierLatestMachine: **L ひぐらしのなく頃に 業 — No.1602**
- schema: **resetBehavior v0.7**
- status: **2023-11-06_GROUP_CLOSED_6_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1601 `スマスロ とある魔術の禁書目録` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoffでNEXTだったNo.1602 `L ひぐらしのなく頃に 業` を性能コア + resetBehavior v0.7で追加。
- グリーンべると2023-11-06新台スケジュールで同日パチスロ6機を再監査し、既存5機 + 本機の6/6を確認。2023-11-06群をCLOSEDとした。

## No.1602 — L ひぐらしのなく頃に 業
- path: `docs/real_machine_db/machines/2023-11-06_higurashi-no-naku-koro-ni-gou.md`
- manufacturer: **ディ・ライト（大一商会グループ）**
- formalModel / inspectionCode: **Lパチスロひぐらしのなく頃に業SS / 3S0262**
- releaseDate: **2023-11-06**（一部地域11/20の資料あり）
- generation/system: **6.5号機 / スマスロ / A+ART / 技術介入 / 完走型ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 通常攻略機械割 canonical: **96.5 / 97.6 / 99.7 / 101.6 / 103.4 / 105.3%**
- 完全攻略機械割: **103.0 / 104.3 / 106.2 / 109.1 / 113.4 / 114.9%**
- ボーナス合算: **1/196.8 / 1/192.2 / 1/188.3 / 1/184.1 / 1/180.0 / 1/176.2**
- base: **約34G/50枚**
- ART純増: **約0.9枚/G**
- basic payout: **オヤシロBIG約260枚 / BIG約203枚 / REG約56枚**
- CZ周期: **200G or 400G**
- reset: **有利区間RESET、内部状態RESET**。ただしCZ周期/天井ゲーム数は資料競合。
- carry: 据え置きは有利区間/周期/内部状態CARRY_OVER（なな徹）。
- pure power: 周期/天井・内部状態はCARRY_OVERとする解析あり。有利区間そのものの純電断契約はUNVERIFIED_AFTER_RESEARCH。
- reset CONFLICT: なな徹は設定変更時の天井/CZ周期をRESET、ちょんぼりすたは設定変更でもCARRY_OVER。平均化せず `CONFLICT` として両説保持。
- reset detection: 設定変更・電断とも昼ステージ開始とする解析あり。有利区間ランプ判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- public morning numeric: 朝一専用当選率・短縮天井率・設定変更専用200/400G振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **CONFLICT_ON_GAME_COUNTER_RESET_WITH_PARTIAL_POWER_CYCLE**
- record commit: **b1350dc9522e1ad60db0b66725f73f9f2407f739**

## 2023-11-06群 — CLOSED 6/6 known canonical
1. まどマギf-フォルテ- — No.1597 **DONE**
2. L大工の源さん 超夢源 — No.1598 **DONE**
3. パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART — No.1599 **DONE**
4. デジスロ JAC IN バージョン — No.1600 **DONE**
5. スマスロ とある魔術の禁書目録 — No.1601 **DONE**
6. L ひぐらしのなく頃に 業 — No.1602 **DONE**

同日群監査根拠:
- グリーンべると/P-WORLD 2023-11-06「パチンコ・パチスロ新台スケジュール」掲載パチスロ6機と一致。
- PB / 別型式 / 地域先行について今回の再探索で同日canonical追加対象は確認できず。

## resetBehavior 遡及QA進捗
- 直前完了: `2007-07-08_caribbean-queen.md` カリビアンクイーン — `PARTIAL_RESEARCH_EXHAUSTED`（既存COMPLETE_CORE維持）。
- 次カーソル: `2007-07-08_marvel-heroes.md` マーベルヒーローズ。
- 今回、マーベルヒーローズについて `設定変更/リセット/朝一/据え置き/電源OFF ON/高確/ART残G/ガックン`、型式 `マーベルヒーローズH` を組み替え、K-Navi / P-WORLD / HAZUSE / A-SLOT / 回顧資料を再探索。
- 既存の「設定変更後は内部高確スタート」「30G周期の高確移行観察による変更判別」は維持。
- 据え置き時の内部高確/RT/CZ/ART残状態、純電源OFF→ON時の状態、ART/CZ/潜伏中の設定変更時残状態、本機固有ガックンについて追加の直接契約は今回も固定できず。
- QA結論候補は **`PARTIAL_RESEARCH_EXHAUSTED`**。ただし既存レコード全文を安全に置換する更新は今回未実施のため、ファイル本体の `qaResetBehavior: PARTIAL` はまだ変更していない。次回最優先で正式化する。
- 次々カーソル候補: `2007-07-09_genju-haou-t.md`（マーベル正式化後）。

## 次回再開地点
1. 最新mainを再同期し、No.1602と本handoffの反映を再取得確認。
2. 遡及QA `2007-07-08_marvel-heroes.md` を `PARTIAL_RESEARCH_EXHAUSTED` へ正式更新し、既存 `COMPLETE_CORE` は維持。
3. 時系列本線は **2023-11-06より後の最初の未処理導入群**を再監査。現時点の業界スケジュールでは2023-11-20 `パチスロ ケンガンアシュラ` が既知候補だが、同日全機種/PB/段階導入を再確認してからNo.1603を確定する。
4. `推しスロ アイドルVer.` は2023-12-01実導入候補として保持し、12月到達時に再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- フィールズ発表/一撃: https://1geki.jp/repo/20230929fields/
- グリーンべると 新台紹介: https://web-greenbelt.jp/post-77700/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-75870/
- HAZUSE: https://data.hazuse.com/?detail_id=216144&genre=201&machine_code=3S0262
- P-WORLD: https://www.p-world.co.jp/machine/database/9927
- 必勝本: https://p.hisshobon.jp/vpage/2577/2
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/636/17515/
- なな徹 技術介入/機械割: https://nana-press.com/post/1599234
- ちょんぼりすた: https://chonborista.com/slot/d-light/196615/
- グリーンべると/P-WORLD 2023-11-06新台スケジュール: https://news.p-world.co.jp/articles/25893/greenbelt
- K-Navi マーベルヒーローズ: https://p-kn.com/slot/618/
- P-WORLD マーベルヒーローズ: https://www.p-world.co.jp/machine/database/4782
- HAZUSE マーベルヒーローズ: https://hazuse.com/machine/pachislot/7S0161/
- A-SLOT マーベルヒーローズ: https://www.a-slot.com/SHOP/taiyo_elec1.html

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
