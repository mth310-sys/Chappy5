更新日: 2026-09-12

## 現在地点
- recordCount: **1407**
- latestRecordAdded: **ぱちスロ 沖ハナ-30 — No.1407**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-19_pachislot-okihana-30.md`
- chronologicalFrontier: **2021-04-19**
- frontierLatestMachine: **ぱちスロ 沖ハナ-30 — No.1407**
- schema: **resetBehavior v0.7**
- status: **2021-04-19_GROUP_OPEN_4_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1406「パチスロ マクロスデルタ」を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 最新mainはNo.1406まで完了済みだったため、同じ2021-04-19群の次の未処理 **ぱちスロ 沖ハナ-30** をNo.1407として追加。
- 京楽発表を扱う業界一次報道、HAZUSE、P-WORLD、一撃、Pachi7、パチマガスロマガ、ちょんぼりすた、当時攻略資料を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更/純電断の天井・内部状態・有利区間契約、リセット後開始モード、設定変更時引き戻しモードの332G継続天井、非有利区間中の特殊抽選数値まで保存。
- 設定変更専用の引き戻し/天国チャンス/天国の正確な初期振り分け率、純電断時の内部モード単独契約、内部状態初期振り分け率、本機固有ガックン条件/発生率は資料系統・検索語を変えて再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 2021-04-19群は引き続きOPEN。既知候補6機のうち4機処理済み。
- 遡及resetBehavior QAは本線優先のため今回は進めず、前回カーソルを維持。

## No.1407 — ぱちスロ 沖ハナ-30
- path: `docs/real_machine_db/machines/2021-04-19_pachislot-okihana-30.md`
- manufacturer: **オッケー.製造 / 京楽産業.ブランド**
- formalModel: **Sパチスロ沖ハナSPMA**
- certificationNumber: **0S1612**
- releaseDate: **2021-04-19（一部店舗テスト導入開始）**
- generation/system: **6.1号機 / 30Φ / AT / 完全告知沖スロ / 擬似ボーナス連チャンタイプ**
- payoutRateBySetting: **97.7 / 98.6 / 102.7 / 107.5 / 110.1%（設定1/2/4/5/6）**
- BIG: **1/369.5 / 355.3 / 294.3 / 240.5 / 194.6**
- REG: **1/610.8 / 572.8 / 530.7 / 458.4 / 460.4**
- 合算: **1/230.2 / 219.3 / 189.3 / 157.7 / 136.8**
- baseGamesPer50: **約32G/50枚（設定1目安）**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG約200枚 / REG約40枚 / 沖ハナBONUS平均約400枚 / 花盛り7G・平均約4ストック**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_NON_ADVANTAGEOUS_SECTION_DATA**

### resetBehavior v0.7 — No.1407
- 設定変更: **BIG間天井RESET / 内部状態再抽選 / 有利区間RESET**。有利区間移行先は引き戻し / 天国チャンス / 天国のいずれか。
- 据え置き/純電断: **BIG間天井・内部状態・有利区間ランプ状態CARRY_OVER**。内部モード単独の明示契約は `UNVERIFIED_AFTER_RESEARCH`。
- 天井: 通常最大は有利区間移行後BIG間999G。REGではリセットされない。設定変更後に引き戻しモードが選ばれた場合は、転落せず **332G継続でBIG（表示333G）**。
- 有利区間: 設定変更時はRESET・ランプ消灯。通常時は基本点灯型。BIG終了時の一部や完走時にも区間が切れる。
- 朝一恩恵: 設定変更後は引き戻し/天国チャンス/天国スタート。設定変更後を含む非有利区間中は、チェリーで **BIG27.3% / 花盛り0.4%**、確定役で **花盛り100%**、その他で **BIG0.1%**。
- 変更判別: 朝一ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚。ただし前日BIG終了時に区間が切れて消灯したケースや店側対策があるため確定扱いにしない。
- ガックン: 本機固有条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## conflicts — No.1407
- 導入日は2021-04-19をcanonicalとするが、京楽発表上は「一部店舗テスト導入開始日」。後発DBの全国導入相当月とは定義を分離する。
- メーカー表記の京楽/オッケー.はP-WORLDの「メーカー京楽 / 製造オッケー.」と検定通過資料から役割差として統合し、CONFLICT扱いしない。
- 天井の「BIG間最大999G」と「通常モード移行後666G」は内部進行の粒度差であり、同一指標のCONFLICTではない。

## 2021-04-19群 — OPEN
1. **パチスロAngel Beats! — No.1404 / DONE**
2. **デジスロ — No.1405 / DONE**
3. **パチスロ マクロスデルタ — No.1406 / DONE**
4. **ぱちスロ 沖ハナ-30 — No.1407 / DONE**
5. **スーパーハナハナ — No.1408候補 / NEXT**
6. **スーパーハナハナ-30 — 未処理**

- status: **2021-04-19_GROUP_OPEN_4_OF_6_KNOWN_PROCESSED**
- 全6機処理後、全メーカー・地域機・25φ/30φ・PB・別型式・延期差を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-04-19群の **スーパーハナハナ** をNo.1408候補として処理する。
- その後 **スーパーハナハナ-30** を処理し、全6機完了後に同日群の漏れ監査を行う。
- 未処理追加機が監査で見つかった場合は導入日・型式を照合し、漏れ防止優先で同日群へ挿入する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05-06_astro-kyudan.md`（アストロ球団）**。
- 同レコードは既にresetBehavior PARTIALを持つため、既存性能値をやり直さずreset側だけ正式再探索する。

## GitHub保存
- No.1407追加 commit: `10113482565e9d8c4469164e7c8252e0684d13a5`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1407 ぱちスロ 沖ハナ-30
- https://amusement-japan.co.jp/article/detail/10002232/
- https://www.amusement-japan.co.jp/article/detail/10002257/
- https://hazuse.com/machine/pachislot/9S1805/
- https://www.p-world.co.jp/machine/database/9382
- https://chonborista.com/slot/kyoraku-slot/137084/
- https://1geki.jp/slot/s_okihana/42/
- https://pachiseven.jp/machines/6286/cutout/9
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/12/bn03.php
- https://www.pachibee.jp/machines/about/221040001
- https://www.slopachi-quest.com/article/okihana-tenjou/
- https://p-media.info/post-26303/
