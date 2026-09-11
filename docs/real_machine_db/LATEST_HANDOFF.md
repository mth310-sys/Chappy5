更新日: 2026-09-12

## 現在地点
- recordCount: **1419**
- latestRecordAdded: **パチスロ 百花繚乱 サムライガールズ — No.1419**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-06-07_hyakka-ryoran-samurai-girls.md`
- chronologicalFrontier: **2021-06-07**
- frontierLatestMachine: **パチスロ 百花繚乱 サムライガールズ — No.1419**
- schema: **resetBehavior v0.7**
- status: **2021-06-07_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1417「パチスロガメラ」を確認して開始。
- INDEXは旧19件表示のため、README規定どおりLATEST_HANDOFFとmain実レコードを正本として進捗判定。
- 調査中にmainへNo.1418「パチスロ鉄拳4デビルVer.」が並行追加されたことを検出。重複登録せず既存No.1418を正本として引き継いだ。
- 続く未処理機 `パチスロ 百花繚乱 サムライガールズ` をNo.1419として追加。
- 2021-06-07群を新台カレンダー、機種DB、当時攻略資料で再監査。`チバリヨ-30` はNo.1415の2021-05-24先行導入レコードが正本で、6/7全国導入掲載は重複登録しない。
- 独立機種は `ガールズ＆パンツァー 劇場版 / ガメラ / 鉄拳4デビルVer. / 百花繚乱 サムライガールズ` の4機で処理完了。PB・別型式・地域先行・延期/段階導入を再監査し、追加未処理を確認できなかったため群CLOSED。
- 遡及resetBehavior QAは本線優先のため今回は進めず、次カーソル `アストロ球団` を維持。

## No.1418 — パチスロ鉄拳4デビルVer.
- path: `docs/real_machine_db/machines/2021-06-07_tekken4-devil-ver.md`
- manufacturer: **セブンリーグ**
- formalModel: **Sパチスロ鉄拳4デビルバージョンSLFF**
- certificationNumber: **0S1396**
- releaseDate: **2021-06-07**
- generation/system: **6.1号機 / AT**
- payoutRateBySetting: **97.5 / 98.6 / 100.1 / 102.3 / 105.2 / 110.0%**
- CZ(JB): **1/497.4 / 481.7 / 492.2 / 479.2 / 493.0 / 476.1**
- AT初当たり: **設定1 1/1877.0、設定2〜6は公開表未確定**
- baseGamesPer50: **約50.6〜51.3G/50枚**
- netIncrease: **約2.7枚/G**
- basicPerformance: **AT期待獲得約1600枚 / 完走期待度約63.7%**
- normalCeiling: **最大756G+α、モード別756/556/356G等**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_RESET_DEVIL_ZONE_AND_MODE_TABLE**

### resetBehavior v0.7 — No.1418
- 設定変更: **有利区間・天井進行・モードRESET/再抽選**。
- 据え置き/純電断: **天井・モード・有利区間CARRY_OVER**。
- 朝一恩恵: 設定変更時の一部でデビルゾーン。**設定1 7.5%〜設定6 9.4%**。
- 設定1の設定変更後JB到達帯: **300G台37.5% / 500G台37.5% / 700G台25.0%**。通常有利区間開始後は20/30/50%。
- resetDetection: **朝一有利区間ランプ消灯=変更濃厚 / 点灯=据え置き濃厚**。液晶「モード抽選中」も変更濃厚材料。
- 設定5機械割は **105.2% vs 一部105.5%** をCONFLICT保持し平均化しない。

## No.1419 — パチスロ 百花繚乱 サムライガールズ
- path: `docs/real_machine_db/machines/2021-06-07_hyakka-ryoran-samurai-girls.md`
- manufacturer: **エンターライズ**
- formalModel: **S百花繚乱サムライガールズZA**
- certificationNumber: **0S1214**
- releaseDate: **2021-06-07**
- generation/system: **6.1号機 / AT / 擬似ボーナス・周期管理型**
- payoutRateBySetting: **98.1 / 99.2 / 100.1 / 103.3 / 107.0 / 111.1%**
- initialHitBySetting: **1/233.0 / 225.7 / 219.6 / 198.6 / 172.9 / 132.1**
- baseGamesPer50: **約38.7G/50枚**
- netIncrease: **約3.5枚/G**
- normalCeiling: **通常A最大10周期 / 通常B最大5周期 / 天国A・B最大2周期**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1419
- 設定変更: **天井・内部状態・有利区間RESET、内部モード再抽選**。
- 据え置き/純電断: **天井・内部状態・有利区間CARRY_OVER**。
- resetBenefits: 有利区間リセット後は天国モード選択の可能性があり、**天国なら最大2周期以内にボーナス**。高確恩恵を示す当時解析も存在。
- ceilingAfterReset: 固定G数短縮ではなくモード再抽選型。
- 設定変更専用の天国移行率/高確移行率、本機固有ガックン、有利区間ランプ単独の変更判別契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 旧DAXEL版「百花繚乱サムライガールズ」のリセット周期振り分けは別機種のため流用禁止。

## 2021-06-07群 — CLOSED
1. **パチスロガールズ＆パンツァー 劇場版 — No.1416 / DONE**
2. **パチスロガメラ — No.1417 / DONE**
3. **パチスロ鉄拳4デビルVer. — No.1418 / DONE**
4. **パチスロ 百花繚乱 サムライガールズ — No.1419 / DONE**
- `チバリヨ-30` はNo.1415（2021-05-24先行導入）として既登録。6/7全国導入表記による重複レコードは作らない。

## 次回本線の再開地点
- 最新main再同期後、**2021-06-08〜06-13境界監査 → 2021-06-14「ノーゲーム・ノーライフ THE SLOT」No.1420候補**から継続。
- 2021-06-14について複数カレンダーでパチスロ新台は現時点 `ノーゲーム・ノーライフ THE SLOT` を確認。処理前にメーカー/別型式/PB/地域差を再監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1418: main上の既存並行追加レコードを正本として採用。
- No.1419追加 commit: `c1277924ec7bbaf285f9cdb9ee30087008be4c34`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1418 鉄拳4デビルVer.
- https://hazuse.com/machine/pachislot/0S1396/
- https://hazuse.com/machine/pachislot/0S1396/genre/207/
- https://hazuse.com/machine/pachislot/0S1396/genre/209/
- https://pachiseven.jp/machines_v2/6308
- https://nana-press.com/kaiseki/machine/123/3956/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/240/tj05-1.php
- https://slot-seven.com/tekken4devilver-tenzyou/

### No.1419 百花繚乱 サムライガールズ
- https://hazuse.com/machine/pachislot/0S1214/
- https://hazuse.com/machine/pachislot/0S1214/genre/201/
- https://1geki.jp/slot/s_hyakkaryouran_s/41/
- https://chonborista.com/slot/enta-slot/132524/
- https://ichikatsu.com/hyakkaryoran/
- https://www.slopachi-quest.com/article/hyakka-ryoran-samurai-girls-tenjou/
- https://slotkaiseki.com/hyakkaryouran_yuuri_tenjou/
- https://p-kn.com/slot/3582/

### 群監査 / 次回境界
- https://ichikatsu.com/newslot/
- https://www.all7.jp/plans/index/2021/06
