更新日: 2026-09-13

## 現在地点
- recordCount: **1523**
- latestRecordAdded: **パチスロハードボイルド — No.1523**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-03_pachislot-hardboiled.md`
- chronologicalFrontier: **2022-10-03**
- frontierLatestMachine: **パチスロハードボイルド — No.1523**
- schema: **resetBehavior v0.7**
- status: **2022-10-03_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1522 `パチスロBOØWY` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-10-03群へ進み、No.1523 `パチスロハードボイルド` を性能コア＋resetBehavior v0.7で追加。
- 10/3群known候補は `パチスロハードボイルド`、`パチスロ バイオハザード RE:2`、`パチスロRYUKYU BEAT-30`、`S笑ゥせぇるすまん4` の4機。No.1523で1/4処理済み。群はまだOPEN。

## No.1523 — パチスロハードボイルド
- path: `docs/real_machine_db/machines/2022-10-03_pachislot-hardboiled.md`
- manufacturer: **タイヨーエレック（製造） / サミー**
- formalModel: **S ハードボイルド XX**
- inspectionCode: **2S0375**
- releaseDate: **2022-10-03**
- generation/system: **6.5号機 / A300+AT / 疑似ボーナス＋完走型セットAT / 技術介入機**
- market payout: **97.9 / 98.3 / 100.2 / 103.4 / 106.4 / 107.8%**（設定1〜6）
- full-strategy payout: **100.2 / 100.8 / 102.7 / 105.9 / 109.1 / 110.5%**
- BIG: **1/330.1 / 328.8 / 317.9 / 298.0 / 281.4 / 275.7**
- REG: **1/438.9 / 436.8 / 417.8 / 384.2 / 357.3 / 347.8**
- bonus combined: **1/188.2 / 187.4 / 180.3 / 167.6 / 157.2 / 153.6**
- baseGamesPer50: **約34.4G/50枚（設定1）**
- netIncrease: **疑似ボーナス約4.0枚/G / BULLET RUSH約0.8枚/G**
- basicPayout: **SBB/BB平均約300枚 / REG約60枚 / BULLET RUSH 1セット50G / RUSH1000 1000G以上濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_SPECIAL_BENEFIT**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET_CORE / EMPIRICAL_MORNING_LOW**

### resetBehavior v0.7 — No.1523
- **設定変更**: 有利区間RESET / 天井RESET / 内部状態RESET。HAZUSE・なな徹系は昼ステージ開始。
- **据え置き**: 有利区間 / 天井 / 内部状態CARRY_OVERとして保存。純電源OFF→ONの直接解析と整合。
- **純電源OFF→ON**: 有利区間 / 天井 / 内部状態CARRY_OVER。表示ステージは昼開始とする複数解析あり。
- **通常天井**: 1000G+αでBIGまたはREG。設定変更専用の固定短縮天井は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一専用モード/状態振り分け**: 高信頼公開値を十分再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **朝一恩恵**: 高信頼機種別解析では「調査中」が残り、短縮天井・AT直撃・専用優遇状態をcanonicalにはしない。
- **変更判別**: 有利区間ランプ非搭載。設定変更/純電断とも昼ステージ開始資料があるためステージ単独判別不可。解析各社も変更判別は困難と整理。
- **本機固有ガックン**: 機種名/型式/検定番号/メーカー表記と検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一実戦値**: 導入直後の推定リセット141台で初回ボーナス分布を確認した二次実戦資料あり。ただし設定変更確定サンプルではないため `LOW_CONFIDENCE_EMPIRICAL_NOT_MACHINE_SPEC` として分離。

## conflicts / definition notes — No.1523
- 機械割の市場予想値と完全攻略値は `DEFINITION_DIFFERENCE`。平均化せず別系列で保持。
- 天井表記は `1000G+α` と `999G+α` の二次表現差あり。複数高信頼解析の「通常時1000G消化後に前兆」をcanonicalとして `1000G+α` を採用。
- 朝一ステージはHAZUSE/なな徹で設定変更・電源OFF→ONとも昼開始。一部初期解析は「調査中」のままだが相反値ではないためCONFLICTにはしない。

## 2022-10-03群 — OPEN 1/4 known
1. `パチスロハードボイルド` — **No.1523 処理済み**
2. `パチスロ バイオハザード RE:2` — **次回 No.1524候補**
3. `パチスロRYUKYU BEAT-30` — 未処理
4. `S笑ゥせぇるすまん4` — 未処理

群監査メモ:
- 前回handoffで当時導入予定一覧を監査し、上記4機を2022-10-03 known候補として固定済み。
- 4機処理後にPB・派生・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。
- 今回は本線2022-10-03群を優先し、遡及QAカーソルは維持。

## 次回本線の再開地点
- **No.1524候補 `パチスロ バイオハザード RE:2` — 2022-10-03。**
- No.1523の性能コアはやり直さず、No.1524から性能コア＋resetBehavior v0.7を収集する。
- その後 `パチスロRYUKYU BEAT-30` → `S笑ゥせぇるすまん4` の順に処理し、10/3群を再監査する。

## GitHub保存
- No.1523追加 commit: `73248147b1016965ce8ac37db326883f5f0351a0`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1523 パチスロハードボイルド
- https://news.p-world.co.jp/articles/21303/nippon
- https://news.p-world.co.jp/articles/21311/yugitsushin
- https://web-greenbelt.jp/post-60109/
- https://hazuse.com/machine/pachislot/2S0375/
- https://hazuse.com/machine/pachislot/2S0375/genre/207/
- https://hazuse.com/machine/pachislot/2S0375/genre/209/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/200/kr01.php
- https://nana-press.com/kaiseki/machine/431/
- https://nana-press.com/kaiseki/machine/431/11945/
- https://pachiseven.jp/machines_v2/6603
- https://chonborista.com/slot/sammy-slot/172255/
- https://a102810281028.hatenablog.com/entry/2022/10/06/085748
