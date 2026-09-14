更新日: 2026-09-15

## 現在地点
- recordCount: **1778**
- latestRecordAdded: **Lパチスロ 炎炎ノ消防隊2 — No.1778**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-02-02_en-en-no-shobotai-2.md`
- chronologicalFrontier: **2026-02-02**
- schema: **resetBehavior v0.7**
- status: **2026-02-02_GROUP_OPEN_3_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1777を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1778 `Lパチスロ 炎炎ノ消防隊2` を追加。
- 2026-02-02群は現時点で3/6 canonical処理済み。

## No.1778 — Lパチスロ 炎炎ノ消防隊2
- path: `docs/real_machine_db/machines/2026-02-02_en-en-no-shobotai-2.md`
- manufacturer: **SANKYO**
- formalModel: **L炎炎ノ消防隊2**
- inspectionCode: **530634**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.8 / 101.2 / 105.6 / 110.2 / 114.9%**
- bonusInitialHit: **1/272.7 / 1/269.4 / 1/257.4 / 1/242.0 / 1/236.4 / 1/227.4**
- enenLoopInitialHit: **1/684.0 / 1/662.1 / 1/617.2 / 1/546.5 / 1/518.2 / 1/486.2**
- base: **約33.1G/50枚（設定1）**
- netIncrease: **約5.8枚/G**
- basicPayout: **SPECIALエピソード約200枚 / REG約85枚 / 炎炎BONUS約200枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1778 resetBehavior v0.7
- 設定変更時は有利区間・天井・内部状態・ゲーム数・モードをRESET/再抽選。
- ボーナス間天井は **850G+α → 650G+α**、炎炎ループ間天井は **2000G+α → 1500G+α** に短縮。
- 設定変更時は通常Aを選択せず、公開モード振り分けは **B約24% / C約4% / D約39% / E約33%**。D+E合計約72%、設定変更後の規定ゲーム数平均約300G。
- 据え置きは有利区間・天井・内部状態・ゲーム数・モードを引継ぎ。
- 純電源OFF→ONは天井・内部状態を引継ぎ。モード/G数も据え置き契約として引継ぐ二次解析あり。
- 純電断時の有利区間そのものの直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 650G+α短縮天井を超えてボーナス非当選なら据え置き濃厚材料。前日最終Gとの合算位置で規定G前兆が出れば据え置き可能性あり。
- 朝一表示は初期化されるため表示だけでは判別困難。開始ステージ差は主要資料で調査中。
- 本機固有ガックン条件/発生率は表記揺れ・型式・メーカー込みで再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- なな徹設定1リセット独自シミュレーター: 0G等価 **-820円**、天井到達率 **10.33%**、実質初当り **1/257**、平均投資 **7770円**。メーカー公表性能とは分離保存。

## conflicts / normalization
- 初当たりはメーカー公表系の整数丸め（例1/272）と精密値（1/272.7）が存在するが、同一定義の丸め差として精密値をcanonical、整数値を併記。
- 1gekiの2026-02-04時点では設定変更時天井が「調査中」だったが、その後のなな徹・必勝本・複数解析で650G+α/1500G+αが具体化。時点差による解析成熟でありCONFLICT扱いしない。

## sources summary
retrievedAt: 2026-09-15
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/991/
- SANKYO 開発こぼれ話: https://www.secret-story.sankyo-fever.jp/product/sbh
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-18278/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0122/
- パチビー: https://www.pachibee.jp/machines/index/225120000
- なな徹 TOP: https://nana-press.com/kaiseki/machine/1088/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1088/34535/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1088/34539/
- 必勝本 モード: https://hisshobon.com/machineinfo/88895/
- 必勝本 モード移行: https://hisshobon.com/machineinfo/88837/
- 必勝本 状態: https://hisshobon.com/machineinfo/88894/
- 1geki: https://1geki.jp/slot/l_ennenn2/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/10415
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/67/kr01.php
- ジャグラーズネット: https://jugglersnet.com/chumoku/enennosyobotai2
- UP-Slot: https://up-slot.com/enennoshobotai-2-info/
- アルテマ: https://altema.jp/pachimo/lenen2reset

## 2026-02-02 known canonical queue
1. ~~スマスロ 攻殻機動隊 — No.1776 DONE~~
2. ~~Lパチスロうみねこのなく頃に2 — No.1777 DONE~~
3. ~~Lパチスロ 炎炎ノ消防隊2 — No.1778 DONE~~
4. **L範馬刃牙 — candidate**
5. **スマスロ ハナビ — candidate**
6. **スマスロ ゴブリンスレイヤーII — candidate**

## 次回再開地点
- 最新mainを再同期しNo.1778と本handoffを確認。
- **No.1779候補「L範馬刃牙」— 2026-02-02** から継続。
- その後 `スマスロ ハナビ → スマスロ ゴブリンスレイヤーII` を同日群キューとして処理。
- 6/6完了後、PB・別型式・地域先行・延期/段階導入を再監査して2026-02-02境界をCLOSED判定。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。
