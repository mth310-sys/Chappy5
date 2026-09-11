更新日: 2026-09-12

## 現在地点
- recordCount: **1406**
- latestRecordAdded: **パチスロ マクロスデルタ — No.1406**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-19_pachislot-macross-delta.md`
- chronologicalFrontier: **2021-04-19**
- frontierLatestMachine: **パチスロ マクロスデルタ — No.1406**
- schema: **resetBehavior v0.7**
- status: **2021-04-19_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1405「デジスロ」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainは前回会話時点より先行しておりNo.1405まで完了済みだったため、重複せず2021-04-19群の次の未処理 **パチスロ マクロスデルタ** をNo.1406として追加。
- SANKYO公式博物館、P-WORLD、HAZUSE、なな徹、パチマガスロマガ、必勝本、当時解析を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更/純電断の天井・内部状態・内部モード・有利区間契約が複数資料で一致。設定変更後111pt時のCZ当選期待度約15%と、当選時「極限バルキリーゾーン」確定を公開朝一数値として保存。
- 設定変更専用の初期モード振り分け率、内部状態初期振り分け率、本機固有ガックン条件/発生率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2021-04-19群は引き続きOPEN。既知候補6機のうち3機処理済み。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1406 — パチスロ マクロスデルタ
- path: `docs/real_machine_db/machines/2021-04-19_pachislot-macross-delta.md`
- manufacturer: **ジェイビー製造 / SANKYOブランド**
- formalModel: **SマクロスデルタjS**
- certificationNumber: **0S1236**
- releaseDate: **2021-04-19**
- generation/system: **6.1号機 / ベルナビ回数管理型AT / CZ経由主体 / 高純増AT**
- payoutRateBySetting: **96.9 / 98.2 / 99.9 / 103.7 / 105.8 / 109.6%**
- CZ初当たり: **1/424 / 413 / 400 / 398 / 392 / 387**
- AT初当たり: **1/875 / 779 / 656 / 525 / 467 / 374**
- baseGamesPer50: **約43.0G/50枚**
- netIncrease: **約9.5枚/G**
- basicPayout: **戦術LIVE平均ナビ約65回 / AT平均約900枚 / デルタボーナス15ナビ / LIMIT-A完走系**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_RESET_SPECIFIC_NUMERIC_BENEFIT**

### resetBehavior v0.7 — No.1406
- 設定変更: **天井RESET / 内部状態RESET / 内部モードRESET / 有利区間RESET**。朝一は格納庫スタート。
- 据え置き/純電断: **天井・内部状態・内部モード・有利区間CARRY_OVER**。純電断はステージも引継ぎ。
- 天井: デルタカウンター777pt（通常時平均約492〜500G）が第1天井。777ptで通常CZ非当選時は888pt（平均約558G）で狂暴化CZ当選濃厚。設定変更専用の固定短縮天井は確認されない。
- モード/状態: 設定変更でRESET、純電断でCARRY_OVER。専用初期振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: 設定変更でRESET・朝一ランプ消灯。純電断はCARRY_OVER。リンゴカウンターは有利区間リセットまで継続加算されるため、同一区間持越し価値を持つ。
- 朝一恩恵: 設定変更後（有利区間開始時）111ptでCZに当選すれば **極限VZ確定**。111pt CZ当選期待度は **約15%（リベンジモード除く）**。
- 変更判別: 朝一有利区間ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし営業中の区間切れや店舗側対策があるため確定扱いにしない。設定変更時の格納庫開始も補助材料。
- ガックン: 本機固有条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## conflicts — No.1406
- ベースは複数資料の約43.0G/50枚をcanonical。HAZUSEの約39G/46枚は貸出枚数単位が違うため同一単位のCONFLICTとは扱わない。
- メーカー表記のSANKYO / ジェイビーは、P-WORLDが「メーカーSANKYO / 製造ジェイビー」と明示するためブランド/製造の役割差として統合。
- 天井は総合DBの「777ptでCZorAT」と、詳細解析の「777pt第1天井→非当選時888pt第2天井」がある。詳細契約をcanonicalとして両定義を保持。

## 2021-04-19群 — OPEN
1. **パチスロAngel Beats! — No.1404 / DONE**
2. **デジスロ — No.1405 / DONE**
3. **パチスロ マクロスデルタ — No.1406 / DONE**
4. **ぱちスロ 沖ハナ-30 — No.1407候補 / NEXT**
5. **スーパーハナハナ — 未処理**
6. **スーパーハナハナ-30 — 未処理**

- status: **2021-04-19_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED**
- 全6機処理後、全メーカー・地域機・25φ/30φ・PB・別型式・延期差を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-04-19群の **ぱちスロ 沖ハナ-30** をNo.1407候補として処理する。
- その後 `スーパーハナハナ` → `スーパーハナハナ-30` の順で既知キューを進める。
- 未処理追加機が監査で見つかった場合は導入日・型式を照合し、漏れ防止優先で同日群へ挿入する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 同レコードは既にresetBehavior PARTIALを持つため、既存性能値をやり直さずreset側だけ正式再探索する。

## GitHub保存
- No.1406追加 commit: `bf821ac0ed16aecab2e19a3b0303337ce5e16aa2`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1406 パチスロ マクロスデルタ
- https://www.sankyo-fever.jp/collection/918/
- https://hazuse.com/machine/pachislot/0S1236/
- https://www.p-world.co.jp/machine/database/9369
- https://nana-press.com/kaiseki/machine/119/3616/
- https://nana-press.com/kaiseki/machine/119/3479/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/54/kh03.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/54/cz03.php
- https://p.hisshobon.jp/machine/3638/1/81588
- https://www.pachibee.jp/machines/index/221030004
- https://www.slopachi-quest.com/article/macross-delta-tenjou/
- https://chonborista.com/slot/sankyo-slot/132698/comment-page-37/
- https://slotmethod.jp/archives/6161/
