更新日: 2026-09-12

## 現在地点
- recordCount: **1441**
- latestRecordAdded: **パチスロGANTZ極 THE SURVIVAL GAME — No.1441**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-11-08_gantz-kiwami-the-survival-game.md`
- chronologicalFrontier: **2021-11-08**
- frontierLatestMachine: **パチスロGANTZ極 THE SURVIVAL GAME — No.1441**
- schema: **resetBehavior v0.7**
- status: **2021-11-08_GROUP_OPEN_3_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1440「CCエンジェル」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1441「パチスロGANTZ極 THE SURVIVAL GAME」を追加。
- 当時業界記事、検定通過記事、HAZUSE、なな徹、一撃、パチマガスロマガ、P-WORLDを横断し、型式・検定番号・導入日・設定別初当たり/機械割・ベース・純増・AT構造・3種天井・resetBehaviorを照合。
- 設定変更で有利区間/天井/内部モード/内部状態/転送ポイントをリセット。据え置き・純電源OFF→ONでは内部を引継ぐ一方、液晶表示は初期化されるという表示/内部差を分離して保存。
- リセット時は3周期目までのGANTZ BONUS当選濃厚。通常5周期目のボーナス当選でAT濃厚となる周期天井とは別概念として保存。
- 超GANTZ BONUS初当たり設定3はHAZUSE 1/546と別二次資料1/564が競合するため平均化せずCONFLICT。
- 遡及resetBehavior QAカーソルは今回本線優先のため動かさず、`2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）を維持。

## No.1441 — パチスロGANTZ極 THE SURVIVAL GAME
- path: `docs/real_machine_db/machines/2021-11-08_gantz-kiwami-the-survival-game.md`
- manufacturer: **エフ（開発: スパイキー / 販売: フィールズ）**
- formalModel: **SパチスロGANTZ FT**
- certificationNumber: **1S1025**
- releaseDate: **2021-11-08**
- generation/system: **6.2号機 / AT / 周期抽選+擬似ボーナス / 転落抽選型AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.8 / 105.0 / 107.0 / 109.0%**
- initialHit: **1/198 / 1/196 / 1/194 / 1/189 / 1/182 / 1/162**
- GANTZ BONUS（引き戻し込み）: **1/107 / 1/104 / 1/99 / 1/98 / 1/94 / 1/83**
- mainATInitialHit: **1/613 / 1/599 / 1/546 / 1/469 / 1/420 / 1/387**
- baseGamesPer50: **約34G/50枚**
- netIncrease: **約5.0枚/G**
- basicPayout: **GANTZ BONUS=ベルナビ7回 / 超GANTZ BONUS=10G固定→15G GANTZ GAME / EXTRA=ベルナビ5回保証後の転落抽選型**
- normalCeiling: **5周期目ボーナスAT濃厚 / AT非当選5連続後6回目初当たりAT濃厚 / 有利区間移行後通常時1600G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**

### resetBehavior v0.7 — No.1441
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET、転送ポイント0pt、東京ステージ開始表示。
- **据え置き**: 天井・内部モード・内部状態・転送ポイント・有利区間をCARRY_OVER。ただし液晶表示は初期化。
- **純電源OFF→ON**: 天井・内部モード・内部状態・転送ポイント・有利区間をCARRY_OVER。転送ポイントは表示0ptでも内部継続。
- **天井/短縮**: 通常周期天井は5周期目ボーナスでAT濃厚。リセット時は3周期目までのGANTZ BONUS当選濃厚。ゲーム数天井は有利区間移行後通常時1600G+α。
- **モード/状態**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。設定変更時の各モード/状態振り分け率はUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。AT終了時（引き戻し失敗時）にも消灯。
- **朝一恩恵**: 3周期目までのGB当選濃厚。
- **変更判別**: 通常時有利区間ランプ点灯型。未対策なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。液晶ポイント/周期表示は内部進行とズレることがある。
- **公開朝一数値**: 3周期目までのGB当選濃厚という周期条件のみ固定。モード振り分け率・朝一○G以内当選率はUNVERIFIED_AFTER_RESEARCH。
- **CONFLICT**: 超GANTZ BONUS初当たり設定3は `1/546`（HAZUSE）と `1/564`（別二次資料）が競合。平均化せず保持。

## 2021-11-08群 — OPEN
1. **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439 / DONE**
2. **CCエンジェル — No.1440 / DONE**
3. **パチスロGANTZ極 THE SURVIVAL GAME — No.1441 / DONE**
4. **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — No.1442候補 / NEXT**
5. **ハイハイシオサイ2 — 未処理**
- 群は未CLOSED。次回開始時に全メーカー・PB・地域先行・25/30Φ別型式・延期/段階導入を再監査し、既知候補の漏れ/重複がないことを確認して継続する。

## 次回本線の再開地点
- **2021-11-08群 / No.1442候補: パチスロ戦国乙女 暁の関ヶ原-DARKNESS-**。
- その後、ハイハイシオサイ2を処理し、同日群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）**。
- 今回は本線No.1441を優先したためカーソルを進めていない。

## GitHub保存
- No.1441追加 commit: `c22a15292d7dcc85dbaa9f731f811474219248bd`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1441 パチスロGANTZ極 THE SURVIVAL GAME
- https://news.p-world.co.jp/articles/18158/nippon
- https://web-greenbelt.jp/post-50376/
- https://hazuse.com/machine/pachislot/1S1025/
- https://hazuse.com/machine/pachislot/1S1025/genre/207/
- https://nana-press.com/kaiseki/machine/160/5809/
- https://nana-press.com/kaiseki/machine/160/6425/
- https://nana-press.com/kaiseki/machine/160/6426/
- https://1geki.jp/slot/s_gantz_k/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/f_slot/01/kr03.php
- https://www.p-world.co.jp/machine/database/9492
