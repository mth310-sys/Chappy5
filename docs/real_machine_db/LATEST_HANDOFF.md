更新日: 2026-09-15

## 現在地点
- recordCount: **1808**
- latestRecordAdded: **L ULTRAMAN 最終決戦 — No.1808**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_l-ultraman-saishu-kessen.md`
- chronologicalFrontier: **2026-07-06 CLOSED**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_CLOSED_7_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1807を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1807 `ヤバチバ` の次から継続し、No.1808 `L ULTRAMAN 最終決戦` を追加。
- 遊技通信/P-WORLD、遊技日本、HAZUSE、必勝本、1geki、ちょんぼりすた、なな徹、スロベース、ジャグラーズネット等を横断。
- 型式 `LパチスロULTRAMAN最終決戦ME`、検定番号 `6S0144`、オッケー.製、2026-07-06導入を固定。
- 設定1〜6機械割 `97.6 / 98.9 / 100.6 / 104.0 / 108.1 / 112.8%`、CZ `1/272.8 → 1/256.2`、AT `1/445.4 → 1/422.4`。
- ベース約30.8G/50枚、メイン/上位AT純増約7.0枚/G、通常AT40G+α、上位AT初期300枚以上。
- 通常天井CZ間700G+α / AT間1500G+α。設定変更後は500G+α / 1000G+αへ短縮。
- 設定変更時40.2%で高確へ移行。純電断は天井・内部状態を引継ぎ。
- 有利区間はゲーム中のリセット契機に推察情報があるが、設定変更時そのものの機種固有高優先直接記述は固定できずUNVERIFIED。
- 導入前/更新不十分資料の `999G+α→666G+α` と導入後複数解析の2系統天井が競合。導入後複数一致をcanonical、旧値をCONFLICTとして隔離。
- 本機固有ガックン条件/発生率は再探索後もUNVERIFIED。

## No.1808 — L ULTRAMAN 最終決戦
- path: `docs/real_machine_db/machines/2026-07-06_l-ultraman-saishu-kessen.md`
- manufacturer: **オッケー.（総発売元フィールズ）**
- formalModel: **LパチスロULTRAMAN最終決戦ME**
- inspectionNumber: **6S0144**
- releaseDate: **2026-07-06**
- payoutRate: **97.6 / 98.9 / 100.6 / 104.0 / 108.1 / 112.8%**
- CZ: **1/272.8 / 1/267.7 / 1/262.7 / 1/257.0 / 1/256.6 / 1/256.2**
- AT: **1/445.4 / 1/438.4 / 1/431.3 / 1/423.8 / 1/423.1 / 1/422.4**
- base: **約30.8G/50枚**
- netIncrease: **約7.0枚/G**
- basicPayout: **通常AT 40G+α / 上位AT 初期300枚以上**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1808 resetBehavior v0.7
- 設定変更: 天井RESET。CZ700→500G+α、AT1500→1000G+α。40.2%で高確移行。
- 据え置き: 純電断直接比較を根拠に天井・状態引継ぎをSECONDARY_SUPPORTED。
- 純電断: 天井・内部状態引継ぎ。開始ステージは調査中。
- モード: 設定変更専用の通常モード振り分けはUNVERIFIED。高確移行40.2%は公開数値として保持。
- 有利区間: 設定変更時の機種固有高優先直接記述はUNVERIFIED_AFTER_RESEARCH。
- 朝一恩恵: 2系統天井短縮 + 高確40.2%。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 500G/1000G短縮天井は事後推測材料。ガックン/即時UI確定条件はUNVERIFIED。

## conflicts / normalization
- 天井: 導入前/更新不十分な一部資料 `999G+α / 変更666G+α` vs 導入後複数解析 `CZ700→500G+α / AT1500→1000G+α`。後者をcanonical、旧値を `CONFLICT_PRE_RELEASE_OR_STALE_SINGLE_CEILING_SPEC` として保持。
- 上位CZ期待度: 約33% vs 一部約50%。必須性能コア外のため参考値としてCONFLICT保持。
- 導入日: 一部7/5表記 vs 業界記事・HAZUSE・複数解析7/6。ホール導入開始日は7/6をcanonical。

## 2026-07-06 canonical queue — CLOSED 7/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. ~~Lパチスロ からくりサーカス2 — No.1804 DONE~~
4. ~~L南国育ち SPECIAL — No.1805 DONE~~
5. ~~ローティス — No.1806 DONE~~
6. ~~ヤバチバ — No.1807 DONE~~
7. ~~L ULTRAMAN 最終決戦 — No.1808 DONE~~

### 境界再監査
- 2026-07-06群について、既知canonical 7機を完了。
- 同日周辺のPB・別型式・地域先行・延期/段階導入を再検索し、本パスで追加本体を固定できず境界をCLOSED。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1808:
- P-WORLD/遊技通信: https://news.p-world.co.jp/articles/33891/yugitsushin
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-77786/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0144/
- 必勝本: https://hisshobon.com/machineinfo/137391/
- 1geki: https://1geki.jp/slot/l_ultraman_sai/3/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/260318/
- なな徹: https://nana-press.com/kaiseki/machine/1195/
- スロベース: https://slobase.jp/machines/ultraman-saishu-kessen
- ジャグラーズネット: https://jugglersnet.com/chumoku/ultraman-saisyukessen

## 次回再開地点
- 最新mainを再同期しNo.1808と本handoffを確認。
- 2026年7月後半に新規本体導入がないか日付境界を再監査したうえで、次の確定導入群へ進む。
- 現時点の外部導入カレンダーでは次の大規模確定群は **2026-08-03**。候補は `L邪神ちゃんドロップキック / スマスロ やじきた道中記参る！ / Lすーぱぁびん娘 / スマスロ とんでもスキルで異世界放浪メシ / スマスロ とある魔術の禁書目録2 / スマスロ ストリートファイター6 / スロット ワールドダイスター / LBトリプルクラウンX-300`。
- **No.1809は、7月後半境界監査後に2026-08-03群のcanonical順を固定して先頭未処理機種から開始する。**
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
