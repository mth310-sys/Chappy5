更新日: 2026-09-12

## 現在地点
- recordCount: **1404**
- latestRecordAdded: **パチスロAngel Beats! — No.1404**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-19_pachislot-angel-beats.md`
- chronologicalFrontier: **2021-04-19**
- frontierLatestMachine: **パチスロAngel Beats! — No.1404**
- schema: **resetBehavior v0.7**
- status: **2021-04-19_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1403「パチスロ1000ちゃん ごらくver.」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 2021-04-19群の未処理先頭 **パチスロAngel Beats!** をNo.1404として追加。
- 公式/業界/解析資料を横断し、性能コアとresetBehavior v0.7を同時収集。設定変更で天井進行・内部状態RESET、純電断でCARRY_OVER、通常時は有利区間ランプ基本消灯型のため朝一消灯では変更判別不可まで固定。
- 設定変更専用の天井短縮/専用モード振り分け/朝一定量恩恵は、表記揺れ・型式・メーカー・設定変更/リセット/朝一/周期/ガックン/有利区間を組み替えて再探索しても直接値を固定できず、推測補完していない。
- 2021-04-19群は引き続きOPEN。既知候補6機のうち1機処理済み。
- 遡及resetBehavior QAは本線を優先したため今回は進めず、前回カーソルを維持。

## No.1404 — パチスロAngel Beats!
- path: `docs/real_machine_db/machines/2021-04-19_pachislot-angel-beats.md`
- manufacturer: **タイヨーエレック製造 / Sammy販売**
- formalModel: **S AngelBeats! XF**
- certificationNumber: **0S1535**
- releaseDate: **2021-04-19**
- generation/system: **6.1号機 / 擬似ボーナス+差枚数管理型AT / 周期抽選**
- payoutRateBySetting: **97.9 / 98.5 / 100.4 / 104.2 / 107.5 / 110.5%**
- BONUS初当たり: **1/256.8 / 250.3 / 236.1 / 206.6 / 191.7 / 164.8**
- AT初当たり: **1/352.7 / 348.1 / 317.3 / 280.9 / 236.5 / 225.6**
- baseGamesPer50: **約43.0G/50枚**
- netIncrease: **約5.0枚/G**
- basicPayout: **戦線BONUS約75枚 / エピソードBONUS約100枚 / AT初期最低150枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_NO_RESET_SPECIFIC_NUMERIC_BENEFIT_FOUND**

### resetBehavior v0.7 — No.1404
- 設定変更: 天井周期/G数RESET、内部状態RESET、有利区間進行RESET。
- 据え置き/純電断: 天井進行・内部状態CARRY_OVER。
- 天井: 有利区間移行後最大10周期（約720G）。設定変更専用短縮天井は確認されない。
- resetDetection: 通常時は有利区間ランプ基本消灯のため、朝一消灯だけでは設定変更判別不可。朝一点灯なら据え置き濃厚とされるが稀な前日点灯終了ケースに依存。
- 本機固有ガックン/初期出目確定条件は十分な再探索後もUNVERIFIED_AFTER_RESEARCH。
- 公開朝一専用数値: 固定できず。1周期目期待度30%以上は通常周期構造であり設定変更専用値ではないため分離。

## conflicts — No.1404
- 一部二次資料にBONUS初当たり **1/295.4〜1/176.2**、AT **1/400.1〜1/245.0**、機械割 **97.9〜110.3%** の別表が存在。
- 1geki / パチセブン / P-WORLD / 業界記事系ではBONUS **1/256.8〜1/164.8**、AT **1/352.7〜1/225.6**、機械割 **97.9〜110.5%** で一致するため後者をcanonicalとし、前者は `CONFLICT_SECONDARY_TABLE` として保持。平均化していない。

## 2021-04-19群 — OPEN
1. **パチスロAngel Beats! — No.1404 / DONE**
2. **デジスロ — No.1405候補 / NEXT**
3. **パチスロ マクロスデルタ — 未処理**
4. **ぱちスロ 沖ハナ-30 — 未処理**
5. **スーパーハナハナ — 未処理**
6. **スーパーハナハナ-30 — 未処理**

- status: **2021-04-19_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED**
- 全6機処理後、全メーカー・地域機・25φ/30φ・PB・別型式・延期差を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-04-19群の **デジスロ** をNo.1405候補として処理する。
- その後 `パチスロ マクロスデルタ` → `ぱちスロ 沖ハナ-30` → `スーパーハナハナ` → `スーパーハナハナ-30` の順で既知キューを進める。
- 未処理追加機が監査で見つかった場合は導入日・型式を照合し漏れ防止優先で同日群へ挿入する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 同レコードは既にresetBehavior PARTIALを持つため、既存性能値をやり直さずreset側だけ正式再探索する。

## GitHub保存
- No.1404追加 commit: `1f6c6a8c06409c7e8221e5973e48ceaa6cb630b7`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1404 パチスロAngel Beats!
- https://www.sammy.co.jp/japanese/news/2021/1601.html
- https://www.sammy.co.jp/japanese/myslot/news/index_3.html
- https://hazuse.com/machine/pachislot/0S1535/
- https://1geki.jp/slot/s_angelbeats/
- https://1geki.jp/slot/s_angelbeats/3/
- https://pachiseven.jp/machines_v2/6257
- https://www.p-world.co.jp/machine/database/9347
- https://news.p-world.co.jp/articles/15856/greenbelt
- https://pidea.jp/articles/1613987205
- https://www.slopachi-quest.com/article/angel-beats-tenjou/
- https://slot-seven.com/angelbeats-settei/
