更新日: 2026-09-12

## 現在地点
- recordCount: **1417**
- latestRecordAdded: **パチスロガメラ — No.1417**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-06-07_gamera.md`
- chronologicalFrontier: **2021-06-07**
- frontierLatestMachine: **パチスロガメラ — No.1417**
- schema: **resetBehavior v0.7**
- status: **2021-06-07_GROUP_OPEN_2_OF_4_UNIQUE_PENDING_AFTER_CHIBARIYO_DEDUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1416「パチスロガールズ＆パンツァー 劇場版」レコードを確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 最新mainはNo.1416まで進行済みだったため、未処理先頭 `パチスロガメラ` をNo.1417として追加。
- サミー公式、グリーンべると/P-WORLD、HAZUSE、なな徹、1geki、パチマガスロマガ、当時解析系を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更は天井・有利区間・内部モード・内部状態RESET。設定変更後天井は900G+αに短縮。
- 据え置き/純電断は天井・内部モード・内部状態・有利区間ランプ状態をCARRY_OVER。
- 有利区間移行時の裏モード振り分けは通常86.4% / 準備3.1% / 裏ガメラ10.5%。裏ガメラ中のボーナスはBIG濃厚、平均約200G以上滞在。
- 通常時有利区間ランプ点灯型で、未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。
- 本機固有ガックン条件/発生率と、有利区間移行時の表モード全初期振り分けは検索語・型式・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 完全攻略時機械割の設定2/5はHAZUSE `102.5/106.5%` と一部二次資料 `102.6/106.6%` に0.1pt差があるため平均化せずCONFLICT保持。
- 遡及resetBehavior QAは本線優先のため今回は進めず、既存カーソル「アストロ球団」を維持。

## No.1417 — パチスロガメラ
- path: `docs/real_machine_db/machines/2021-06-07_gamera.md`
- manufacturer: **株式会社銀座（製造元） / サミー（発売・ブランド）**
- formalModel: **S パチスロ ガメラ KH**
- certificationNumber: **0S1446**
- releaseDate: **2021-06-07**
- generation/system: **6.1号機 / AT / A600-AT・技術介入擬似ボーナス主体**
- payoutRateBySetting: **97.6 / 98.1 / 99.0 / 101.2 / 102.1 / 103.0%**
- full攻略RateBySetting: **102.0 / 102.5 / 103.4 / 105.6 / 106.5 / 107.4%**（設定2/5に0.1pt別資料差あり）
- initialHitBySetting: **1/219.0 / 215.8 / 211.4 / 202.5 / 191.4 / 170.8**
- baseGamesPer50: **設定1 約33.6G/50枚**（資料レンジ約31.9〜33.6G）
- netIncrease: **固定単一純増値なし / NOT_DIRECTLY_COMPARABLE**
- basicPayout: **BIG平均約560枚 / REG平均約90枚**
- normalCeiling: **BIG後1000G+α / REG後930G+α / 設定変更後900G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABLE_RESET_CORE_WITH_NUMERIC_RESET_BENEFIT**

### resetBehavior v0.7 — No.1417
- 設定変更: **天井・有利区間・内部モード・内部状態RESET/再抽選**。
- 据え置き: **天井・内部モード・内部状態・有利区間ランプ状態CARRY_OVER**。
- 純電断: **天井・内部モード・内部状態・有利区間ランプ状態CARRY_OVER**。
- ceilingAfterReset: **900G+α**。通常BIG後1000G+α、REG後930G+αより短縮。
- modeAfterReset / numericResetData: 有利区間移行時の裏モードは **通常86.4% / 準備3.1% / 裏ガメラ10.5%**。
- resetBenefits: 裏ガメラ中のボーナスはBIG濃厚、平均約200G以上滞在。設定変更後天井短縮も明確な朝一恩恵。
- resetDetection: 通常時有利区間ランプ点灯型。未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。
- 表モード全初期振り分け / 本機固有ガックン: `UNVERIFIED_AFTER_RESEARCH`。

## 2021-06-07群 — OPEN
- `チバリヨ-30` はNo.1415で2021-05-24先行導入として登録済みのため、6/7全国導入掲載では重複登録しない。
1. **パチスロガールズ＆パンツァー 劇場版 — No.1416 / DONE**
2. **パチスロガメラ — No.1417 / DONE**
3. **パチスロ鉄拳4デビルVer. — No.1418候補 / NEXT**
4. **パチスロ 百花繚乱 サムライガールズ — No.1419候補 / PENDING**
- 上記独立機種を処理後、PB・地域先行・別型式・延期/段階導入を再監査して群CLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**No.1418候補「パチスロ鉄拳4デビルVer.」**から継続。
- その後 `パチスロ 百花繚乱 サムライガールズ` を処理し、2021-06-07群を再監査。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1417追加 commit: `10cd36d3b6ea8cf2690c153463970c9aa3acc20d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1417 パチスロガメラ
- https://www.sammy.co.jp/japanese/news/2021/1614.html
- https://web-greenbelt.jp/post-47814/
- https://news.p-world.co.jp/articles/16137/greenbelt
- https://hazuse.com/machine/pachislot/0S1446/
- https://nana-press.com/kaiseki/machine/125/
- https://nana-press.com/kaiseki/machine/125/4415/
- https://nana-press.com/kaiseki/machine/125/4102/
- https://1geki.jp/slot/s_gamera/3/
- https://1geki.jp/slot/s_gamera/48/
- https://1geki.jp/slot/s_gamera/45/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/187/tj03.php
- https://www.slopachi-quest.com/article/gamera-tenjou/
- https://slotkaiseki.com/gamera_slo_dounyubi/
- https://www.atari7.com/slot/slot-gamera.php
