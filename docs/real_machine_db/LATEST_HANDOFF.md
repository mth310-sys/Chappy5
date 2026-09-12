更新日: 2026-09-12

## 現在地点
- recordCount: **1485**
- latestRecordAdded: **パチスロ TIGER ＆ BUNNY SP — No.1485**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-03-07_pachislot-tiger-and-bunny-sp.md`
- chronologicalFrontier: **2022-03-07**
- frontierLatestMachine: **パチスロ TIGER ＆ BUNNY SP — No.1485**
- schema: **resetBehavior v0.7**
- status: **2022-03-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1484 `Sルパン三世` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点mainはNo.1484まで進行済み。handoff指定の次機種No.1485 `パチスロ TIGER ＆ BUNNY SP` を追加。
- 型式 `Sパチスロタイガー＆バニーSPYTFF`、検定番号 `1S1307`、2022-03-07導入、6.2号機ATを業界記事・HAZUSE・なな徹等で照合。
- 設定別CZ/AT/機械割、ベース、純増、モード別天井を複数系統で照合。
- resetBehaviorは、設定変更で天井・内部モード・内部状態・有利区間RESET、据え置きと純電源OFF→ONで全項目CARRY_OVERを機種別比較資料で直接確認。
- 通常時は有利区間ランプ非点灯型なので朝一ランプ単独の変更判別は不可。
- 有利区間リセット後100G以内AT時の専用AT `セレブレーション`、設定1の天国ループ率約34%、有利区間移行時レア役成立時のモード振り分け等、朝一比較に使える公開値を保存。
- 2022-03-07群は、複数新台カレンダー・業界導入記事と照合し、既知4独立レコード以外の追加を確認できなかったためCLOSED。
- 遡及QAは今回、本線No.1485処理と2022-03-07群CLOSED監査を優先し、カーソルを据え置いた。

## No.1485 — パチスロ TIGER ＆ BUNNY SP
- path: `docs/real_machine_db/machines/2022-03-07_pachislot-tiger-and-bunny-sp.md`
- manufacturer: **山佐ネクスト**
- formalModel: **Sパチスロタイガー＆バニーSPYTFF**
- inspectionCode: **1S1307**
- releaseDate: **2022-03-07**
- generation/system: **6.2号機 / CZ経由+直撃対応・セット数管理型AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 101.0 / 105.5 / 108.5 / 111.0%**
- CZ: **1/377.5 / 1/364.7 / 1/342.1 / 1/290.6 / 1/273.5 / 1/256.9**
- AT: **1/596.7 / 1/555.1 / 1/492.7 / 1/355.0 / 1/296.3 / 1/263.7**
- baseGamesPer50: **約38.8G（資料により約38G、38.8〜39.2G表記）**
- netIncrease: **約2.5枚/G**
- ceiling: **通常A/B 最大666G、チャンス466G、引き戻し366G、SP166G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MORNING_NUMERIC_DATA**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1485
- **設定変更**: 天井・内部モード・内部状態・有利区間をRESET。
- **据え置き**: 天井・内部モード・内部状態・有利区間をCARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・内部状態・有利区間をCARRY_OVER。
- **固定短縮天井**: 設定変更専用の固定短縮天井は確認できず。リセット後の再抽選モードにより最大166/366/466/666Gへ変化。
- **有利区間リセット恩恵**: 100G以内AT当選で専用AT `セレブレーション`。40/60/80/100Gが各25.0%、100G完走でタイバニラッシュ濃厚。
- **朝一比較値**: 有利区間リセット後の天国ループ率約34%（設定1）。有利区間開始時フラグは設定1でライジングチャンスEX 2.3%、ルナティックバトル1.0%。
- **レア役成立時モード**: 弱レア役=チャンス50.0% / 引き戻し37.5% / SP12.5%、チャンス目=引き戻し50.0% / SP50.0%、強チェリー=SP100%。
- **変更判別**: 通常時は有利区間ランプ非点灯型のため、朝一ランプ単独では判別不可。
- **UNVERIFIED_AFTER_RESEARCH**: 本機固有ガックン条件/発生率、レア役非成立時の全設定別初期モード振り分け。

## 2022-03-07群
既知候補4機:
1. `パチスロ デビル メイ クライ 5` — **No.1482 処理済み**
2. `パチスロ蒼天の拳4` — **No.1483 処理済み**
3. `Sルパン三世` — **No.1484 処理済み**
4. `パチスロ TIGER ＆ BUNNY SP` — **No.1485 処理済み**

- status: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 2022年新台カレンダーと各機種の業界導入記事を再照合し、同日導入の追加独立型式/PB/30Φ別仕様を確認できず。

## 次回本線の再開地点
- **2022-03-08〜2022-03-27の境界を最終監査する。**
- 現時点で次の有力候補は **2022-03-28 `沖縄フェスティバル` — No.1486候補**。
- 2022年新台カレンダーでは3/28導入、パイオニア、Aタイプ、約40.4G/50枚、BIG最大252枚・REG最大96枚として掲載。
- 境界監査後、同日群のPB・別型式・30Φ/25Φ差・地域先行・延期/段階導入も確認してから登録する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1485と2022-03-07群CLOSED監査を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1485追加 commit: `a716429a7d7933e1b6745c75a6f015fd20b26e49`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1485 パチスロ TIGER ＆ BUNNY SP
- https://news.p-world.co.jp/articles/19381/greenbelt
- https://news.p-world.co.jp/articles/19314/nippon
- https://news.p-world.co.jp/articles/19293/playgraph
- https://hazuse.com/machine/pachislot/1S1307/
- https://hazuse.com/machine/pachislot/1S1307/genre/201/
- https://nana-press.com/kaiseki/machine/307/8221/
- https://nana-press.com/kaiseki/machine/307/8224/
- https://nana-press.com/kaiseki/machine/307/8446/
- https://nana-press.com/kaiseki/machine/307/
- https://ichikatsu.com/tigerandbunnysp/
- https://1geki.jp/slot/s_tiger_bunny_sp/0/
- https://chonborista.com/slot/yamasa-slot/161810/

### 次候補/境界監査
- https://ichikatsu.com/newslot2022/
