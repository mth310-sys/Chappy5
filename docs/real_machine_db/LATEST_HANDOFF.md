更新日: 2026-09-15

## 現在地点
- recordCount: **1787**
- latestRecordAdded: **L虚構推理 — No.1787**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_l-kyokou-suiri.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_OPEN_4_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1786 `スマスロヨルムンガンド`、No.1787 `L虚構推理` を追加し、性能コアとresetBehavior v0.7を同時収集。
- No.1786は設定変更後AT天井999G+α→450G+α、純電源OFF→ONで天井・内部状態引継ぎ、設定変更時のみ発生可能な右下がりベルテンパイ→ハズレ停止を変更判別要素として保存。
- No.1787は通常天井最大1000G→設定変更後300G/700Gへ短縮。300G天井の設定別振り分け、初回CZ開始エピソード、高確約50%、内部ゲーム数12～72G短縮（平均30.9G）を保存。
- No.1787のP-WORLD設定4リセット天井700G=91.94%は300G=8.59%との合計が100%にならず、他系統の91.41%と競合するため `CONFLICT_LIKELY_TRANSCRIPTION` として平均せず分離。
- 2026-04-06群は6機候補の4/6まで処理。残り2機。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1787 — L虚構推理
- path: `docs/real_machine_db/machines/2026-04-06_l-kyokou-suiri.md`
- manufacturer: **ディ・ライト / Daiichi系**
- formalModel: **L虚構推理ST**
- inspectionCode: **5S1217**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.7 / 100.8 / 105.5 / 109.1 / 112.0%**
- bonusInitial: **1/349.0 / 1/341.3 / 1/329.3 / 1/300.2 / 1/279.7 / 1/264.8**
- CZ: **1/124.5 / 1/121.9 / 1/118.6 / 1/112.5 / 1/107.1 / 1/103.5**
- base: **約31G/50枚**
- bonusNet: **約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1787 resetBehavior v0.7
- 設定変更: 有利区間・天井・内部状態・ゲーム数RESET。内部ゲーム数は12～72G加算、平均30.9G短縮。
- 据え置き: 有利区間・天井・内部状態・ゲーム数CARRY_OVERをなな徹で確認。
- 純電源OFF→ON: 天井・内部状態・CZ間カウンタ引継ぎを二次解析が支持。純電断のみの有利区間直接文言は未固定。
- 天井: 通常最大1000G→設定変更後300Gまたは700G。到達でボーナス+雪女ストック1個以上。
- リセット天井300G選択率: 設1 6.25% / 設2 6.64% / 設3 7.42% / 設4 8.59% / 設5 9.38% / 設6 10.16%。
- 初回CZ: エピソード1 79.7% / 2 12.5% / 3 5.5% / 4 1.6% / 5 0.8%、約20%でEP2以上。
- 初回CZ成功時: 約50%でSPECIAL BONUS昇格。リセット後は約50%で高確スタート。
- ガックン固有条件は再探索後も未固定。内部G数ランダム加算のため、なな徹は見た目だけの変更/据え置き判別が難しいとしている。

## conflicts / normalization
- No.1787 manufacturer: 業界一次・HAZUSEはディ・ライト/D-light、1gekiはIdol（アイドル）表記。canonicalはディ・ライト。
- `RESET_700G_SETTING4_91_41_VS_91_94`: P-WORLD 91.94% vs 他系統約91.41%。300G 8.59%との補数整合から91.41%をcanonical、91.94%をCONFLICT保持。
- No.1786仮天井33.59〜50.00%は通常状況の短縮抽選で、設定変更後450G短縮率ではない。設定変更後は設定不問で450G+αへ短縮。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1787:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32845/yugitsushin
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/32868/greenbelt
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-75409/
- HAZUSE: https://hazuse.com/hd/l%E8%99%9A%E6%A7%8B%E6%8E%A8%E7%90%86/
- 必勝本: https://hisshobon.com/machineinfo/89674/
- なな徹スペック: https://nana-press.com/kaiseki/machine/1111/35429/
- なな徹朝一: https://nana-press.com/kaiseki/machine/1111/36137/
- Altema天井: https://altema.jp/pachimo/lkyokosuiritenjo
- P-WORLD: https://www.p-world.co.jp/machine/database/10436
- 1geki: https://1geki.jp/slot/l_kyokousuiri/
- スロベースreset: https://slobase.jp/articles/kyoko-suiri-reset

No.1786:
- HAZUSE: https://hazuse.com/hd/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%83%A8%E3%83%AB%E3%83%A0%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%89/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32818/yugitsushin
- なな徹: https://nana-press.com/kaiseki/machine/1101/35970/
- 1geki: https://1geki.jp/slot/l_jormungand/3/

## 2026-04-06 canonical queue — OPEN 4/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. ~~Lアクダマドライブ — No.1785 DONE~~
3. ~~スマスロヨルムンガンド — No.1786 DONE~~
4. ~~L虚構推理 — No.1787 DONE~~
5. **真打 吉宗 — candidate No.1788**
6. LB トリプルクラウンセブン

boundary sources:
- 情報島 2026-04-06導入前評価: https://p-johojima.jp/colum/post-29369/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR（LBトリプルクラウンセブン 4/6）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

## 次回再開地点
- 最新mainを再同期しNo.1787と本handoffを確認。
- **No.1788候補「真打 吉宗」— 2026-04-06** から継続。
- その後 `LB トリプルクラウンセブン` を処理し、6/6完了後にPB・別型式・地域先行・延期/段階導入を再監査して2026-04-06境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
