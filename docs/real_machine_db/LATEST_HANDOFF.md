更新日: 2026-09-12

## 現在地点
- recordCount: **1416**
- latestRecordAdded: **パチスロガールズ＆パンツァー 劇場版 — No.1416**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-06-07_girls-und-panzer-der-film.md`
- chronologicalFrontier: **2021-06-07**
- frontierLatestMachine: **パチスロガールズ＆パンツァー 劇場版 — No.1416**
- schema: **resetBehavior v0.7**
- status: **2021-06-07_GROUP_OPEN_1_OF_4_UNIQUE_PENDING_AFTER_CHIBARIYO_DEDUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1415「チバリヨ-30」レコードを確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- No.1415で2021-05-24群CLOSED済み。5/25〜6/6境界を短く再確認し、次の本線2021-06-07群へ進行。
- `チバリヨ-30` はNo.1415で5/24先行導入として登録済みのため、6/7全国導入掲載では重複登録しない。
- 2021-06-07未処理独立機種の先頭 `パチスロガールズ＆パンツァー 劇場版` をNo.1416として追加。
- HAZUSE、2021年業界記事、1geki、なな徹、ちょんぼりすた、期待値見える化、当時新台一覧を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更は有利区間・天井・進軍カウンター・内部モード・内部状態RESET。純電断/据え置きは基本CARRY_OVER。
- 通常時有利区間ランプ点灯型で、朝一消灯=設定変更濃厚、点灯=据え置き濃厚。進軍カウンターの大幅進行も据え置き材料。
- 有利区間移行時の全設定モード振り分け表を取得し、設定変更後にも適用される新規有利区間共通値として保存。
- 設定変更専用固定短縮天井は確認できず。天井はモード別進軍pt 5〜25pt、最大25ptは平均約455G。
- 本機固有ガックン条件/発生率と、設定変更専用の独立した内部高確初期振り分け率は検索語・型式・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAは本線優先のため今回は進めず、既存カーソル「アストロ球団」を維持。

## No.1416 — パチスロガールズ＆パンツァー 劇場版
- path: `docs/real_machine_db/machines/2021-06-07_girls-und-panzer-der-film.md`
- manufacturer: **オリンピア（平和グループ）**
- formalModel: **Sガールズ＆パンツァー劇場版H4**
- certificationNumber: **0S1509**
- releaseDate: **2021-06-07**
- generation/system: **6.1号機 / AT / 擬似ボーナス経由・完全自力バトルAT**
- payoutRateBySetting: **97.5 / 98.5 / 101.7 / 104.8 / 108.1 / 110.2%**
- initialHitBySetting: **1/196.6 / 1/191.0 / 1/177.3 / 1/164.2 / 1/151.5 / 1/144.2**
- ATBySetting: **1/539.9 / 1/521.9 / 1/472.3 / 1/433.4 / 1/397.1 / 1/375.6**
- baseGamesPer50: **約34.5〜34.8G/50枚**
- netIncrease: **約2.5枚/G**
- basicPayout: **GIRLS und BONUS 40G+α / エピソード43G / AT中隊バトル50G+α / AT平均TY約510.2〜514.4枚**
- normalCeiling: **進軍pt最大25pt（平均約455G）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABLE_RESET_CORE_WITH_PUBLIC_MODE_TABLE**

### resetBehavior v0.7 — No.1416
- 設定変更: **有利区間・天井・進軍カウンター・内部モード・内部状態RESET**。
- 据え置き: **天井・進軍カウンター・内部モード・内部状態・有利区間CARRY_OVER**。
- 純電断: **基本CARRY_OVER**。通常時液晶ステージは仮校舎/お泊り会/露天風呂のいずれか、CZ/ボーナス/AT中電断は当該状態を引継ぐ。
- ceilingAfterReset: **固定短縮なし**。新規有利区間でモード再抽選後、そのモードの5〜25pt天井を適用。
- modeAfterReset / numericResetData: 非レア役での有利区間移行時、設定1は通常A40.2 / B40.2 / C16.4 / D1.2 / 天国A1.6 / 天国B0.4%、設定6は40.2 / 28.9 / 16.4 / 3.1 / 9.0 / 2.3%。全設定表はレコード内保存。
- 有利区間移行Gで弱チェリー/双眼鏡なら通常C以上、強チェリー/チャンス目なら天国A以上。
- resetDetection: 通常時有利区間ランプ点灯型。未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。進軍カウンターの大幅進行も据え置き材料。
- ガックン: `UNVERIFIED_AFTER_RESEARCH`。

## 2021-06-07群 — OPEN
- `チバリヨ-30` はNo.1415で段階導入処理済みにつき6/7では重複登録しない。
1. **パチスロガールズ＆パンツァー 劇場版 — No.1416 / DONE**
2. **パチスロガメラ — No.1417候補 / NEXT**
3. **パチスロ鉄拳4デビルVer. — No.1418候補 / PENDING**
4. **パチスロ 百花繚乱 サムライガールズ — No.1419候補 / PENDING**
- 上記4独立機種を処理後、PB・地域先行・別型式・延期/段階導入を再監査して群CLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**No.1417候補「パチスロガメラ」**から継続。
- その後 `パチスロ鉄拳4デビルVer.` → `パチスロ 百花繚乱 サムライガールズ` の順で2021-06-07群を処理。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 既存性能値をやり直さずreset側のみ正式再探索する。

## GitHub保存
- No.1416追加 commit: `8837b3be10c0eabddeadb992cae1fc4a1a121a3a`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1416 パチスロガールズ＆パンツァー 劇場版
- https://hazuse.com/machine/pachislot/0S1509/
- https://hazuse.com/machine/pachislot/0S1509/genre/201/
- https://hazuse.com/machine/pachislot/0S1509/genre/207/
- https://news.p-world.co.jp/articles/16298/yugitsushin
- https://1geki.jp/slot/s_ggp/
- https://nana-press.com/kaiseki/machine/130/
- https://nana-press.com/kaiseki/machine/130/3639/
- https://nana-press.com/kaiseki/machine/130/3643/
- https://nana-press.com/kaiseki/machine/130/4134/
- https://chonborista.com/slot/orinpia-slot/137100/
- https://slotjin.com/tenjoukitaichi/girlsundpanzer/
- https://ichikatsu.com/newslot/
