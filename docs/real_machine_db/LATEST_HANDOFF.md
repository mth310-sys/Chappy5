更新日: 2026-09-12

## 現在地点
- recordCount: **1447**
- latestRecordAdded: **S牙狼-黄金騎士- — No.1447**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-06_s-garo-ogon-kishi.md`
- chronologicalFrontier: **2021-12-06**
- frontierLatestMachine: **S牙狼-黄金騎士- — No.1447**
- schema: **resetBehavior v0.7**
- status: **2021-12-06_GROUP_OPEN_3_OF_5_KNOWN_DONE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1446「パチスロ モンスターハンター:ワールド™ 黄金狩猟」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1447「S牙狼-黄金騎士-」を追加。
- サボハニ、型式 `S牙狼-黄金騎士-SA4`、検定番号 `1S0765`、2021-12-06導入、6.2号機ATをP-WORLD、HAZUSE、なな徹、一撃、当時業界記事等で照合。
- 性能コアは設定1/2/4/5/6の機械割97.7/98.9/103.1/105.0/110.1%、初当たり合成1/227.7→1/185.6、約30.2G/50枚、純増約2.8枚/Gを保存。設定L搭載は確認したが、Lの機械割・初当たり比較値は公開固定値を確認できず推測しない。
- 通常天井はCZ「黄金騎士CHANCE」間600G+α、呀バトル・魔戒RUSH間1500G+α。
- resetBehaviorは設定変更時CZ天井400Gへの短縮、AT側カウンタRESET、呀モード15.2%、設定変更時有利区間ランプ消灯を複数資料で確認。
- 呀モード滞在時は次回呀バトル勝利確定。設定変更時15.2%は複数資料で一致し、通常有利区間開始時の設定別テーブルとは分離して保存。
- 純電源OFF→ONはCZ天井・AT天井・呀モードを引き継ぐ資料を確認。純電断時の有利区間ランプ表示契約、呀モード以外の内部状態、本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプは前日点灯→朝一消灯なら設定変更濃厚、朝一点灯なら据え置き濃厚。ただし店舗側対策を例外として明記。
- 2021-12-06群はhandoff既知5機中3機完了。群はOPENのまま継続。

## No.1447 — S牙狼-黄金騎士-
- path: `docs/real_machine_db/machines/2021-12-06_s-garo-ogon-kishi.md`
- manufacturer: **サボハニ（大都技研×サンセイR&Dコラボ）**
- formalModel: **S牙狼-黄金騎士-SA4**
- certificationNumber: **1S0765**
- releaseDate: **2021-12-06**
- generation/system: **6.2号機 / AT / CZ経由 / セット数管理AT**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **L=公開固定値未確認 / 97.7 / 98.9 / 103.1 / 105.0 / 110.1%**
- initialHitCombined: **L=公開固定値未確認 / 1/227.7 / 1/223.4 / 1/208.9 / 1/201.4 / 1/185.6**
- baseGamesPer50: **約30.2G**
- netIncrease: **約2.8枚/G**
- basicPayout: **呀バトル20G / 魔戒RUSH 1セット30G・50G・100G**
- normalCeiling: **CZ間600G+α / 呀バトル・魔戒RUSH間1500G+α**
- coreStatus: **COMPLETE_CORE_WITH_SETTING_L_PUBLIC_VALUES_UNVERIFIED**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_SHORT_CZ_CEILING_AND_YA_MODE_RATE**

### resetBehavior v0.7 — No.1447
- **設定変更**: CZ天井を400Gへ短縮。AT側カウンタRESET。有利区間RESET。呀モード15.2%。
- **据え置き**: 前日点灯→朝一点灯は据え置き濃厚材料。ただしCZ/AT内部カウンタ・呀モード等の本機固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- **純電源OFF→ON**: CZ天井・AT天井・呀モードをCARRY_OVER。その他内部状態とランプ表示契約は未固定。
- **天井/短縮**: 通常CZ間600G+α → 設定変更時400G。AT側は1500G+αのままカウンタRESET。
- **モード/状態**: 設定変更時呀モード15.2%。呀モードなら次回呀バトル勝利確定。
- **有利区間**: 設定変更時RESET。有利区間ランプ消灯。通常時は基本消灯だが、黄金騎士CHANCE失敗後は点灯するため前日状態との組合せで判定。
- **朝一恩恵**: CZ天井短縮 + 呀モード15.2%。
- **変更判別**: 前日点灯→朝一消灯で設定変更濃厚、朝一点灯で据え置き濃厚。店舗対策は例外。ガックンは未固定。
- **公開朝一数値**: CZ天井400G、呀モード15.2%。

## 2021-12-06群 — OPEN
1. **マイジャグラーV — No.1445 / DONE**
2. **パチスロ モンスターハンター:ワールド™ 黄金狩猟 — No.1446 / DONE**
3. **S牙狼-黄金騎士- — No.1447 / DONE**
4. **主役は銭形3 — No.1448候補 / NEXT**
5. **スターパルサー — 後続候補**

## 次回本線の再開地点
- **No.1448候補「主役は銭形3」**。
- 以降の暫定キュー: **スターパルサー**。
- 12/6群完了後にメーカー別/別型式/PB/地域先行・延期/段階導入を再監査しCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `status: PARTIAL` は維持。50枚ベース未確定や既存CONFLICTを崩していない。
- 設定変更/据え置き/純電断時のRT/CZ残G・内部状態、成立済みボーナス/告知状態、本機固有ガックンは、正式名/略称/メーカー名、RT/CZ名、設定変更/リセット/朝一/据え置き/電源OFF ON等を組み替え再探索しても直接契約を固定できず、一般的5号機挙動から補完していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）**。
- Git追加履歴上、アントニオ猪木も燃えるパチスロ機の次に追加された新規実機レコードであることを確認済み。

## GitHub保存
- No.1447追加 commit: `68234f7364bcbb27d9c2f1a5534b7e419d0b072e`
- アントニオ猪木も燃えるパチスロ機 reset QA commit: `92f1ae80749eaf82f50a4d83c4d935416099baa6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1447 S牙狼-黄金騎士-
- https://www.p-world.co.jp/machine/database/9512
- https://hazuse.com/machine/pachislot/1S0765/
- https://hazuse.com/machine/pachislot/1S0765/genre/208/
- https://nana-press.com/kaiseki/machine/159/6771/
- https://nana-press.com/kaiseki/machine/159/7036/
- https://ichikatsu.com/garoougon/
- https://1geki.jp/slot/s_garo_golden_knight/
- https://www.slopachi-quest.com/article/garo-goldknight-settei/

### 遡及QA — アントニオ猪木も燃えるパチスロ機
- https://web-greenbelt.jp/00004124/
- https://www.p-world.co.jp/machine/database/4688
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/h-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/c.php
- https://www.eightbeat.com/slot99/kishu/a_gyou/a/antonmomoeru5/page_menu.html
- https://www.marimo0925.net/pachisuro-rekidai-ranking-inoki/
