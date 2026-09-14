更新日: 2026-09-14

## 現在地点
- recordCount: **1721**
- latestRecordAdded: **スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ — No.1721**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-04-21_idolmaster-million-live-next-prologue.md`
- chronologicalFrontier: **2025-04-21**
- schema: **resetBehavior v0.7**
- status: **2025-04-21_BOUNDARY_OPEN_2_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1720 `吉宗` を再同期。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1721 `スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ`（2025-04-21）を処理。
- 性能コア、設定変更/据え置き/純電断、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を調査。
- HAZUSE/1geki/P-WORLD/なな徹/必勝本/ちょんぼりすた等を横断。資料差はCONFLICT、十分な再探索後も直接固定できない純電断時の内部状態/有利区間、本機固有ガックンはUNVERIFIED_AFTER_RESEARCHとした。

## No.1721 — スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ
- path: `docs/real_machine_db/machines/2025-04-21_idolmaster-million-live-next-prologue.md`
- manufacturer: **山佐 / 山佐ネクスト**
- formalModel: **LパチスロアイドルマスターミリオンライブHC**
- inspectionCode: **4S1770**
- releaseDate: **2025-04-21**
- payoutRate: **97.6 / 98.5 / 101.1 / 105.2 / 110.1 / 114.3%**
- CZ: **1/428.0 / 1/415.5 / 1/378.4 / 1/353.8 / 1/322.7 / 1/306.2**
- bonusInitial: **1/347.0 / 1/337.4 / 1/314.0 / 1/280.6 / 1/256.8 / 1/242.0**
- base: **約33.2G/50枚**
- AT netIncrease: **約0.4枚/G**
- realBonusAverage: **約116枚**

## No.1721 resetBehavior v0.7
- settingChange: **ゲーム数RESET / CZ・ボーナス状態再抽選 / モード再抽選 / 内部状態RESET / 有利区間RESET。モードはチャンス以上確定。**
- carryOver: **据え置きは有利区間・ゲーム数・内部状態を引継ぎ。モードも引継ぎ扱い。**
- powerCycle: **天井G・CZ/ボーナス状態・モードを引継ぎ。開始ステージは必勝本で夕方。純電断時の内部状態・有利区間そのものは直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。**
- ceiling: **通常最大800G+α → 設定変更後最大500G+αへ300G短縮。天国なら最大100G+α。**
- resetModeDistribution: **チャンス75.8% / 天国24.2% / 通常0%。**
- resetBenefits: **チャンス以上確定、約1/4で天国。**
- detection: **なな徹はリセット判別を調査中。本機固有ガックン条件・発生率はUNVERIFIED_AFTER_RESEARCH。**

## No.1721 conflicts
- `START_STAGE_RANDOM_VS_EVENING`: なな徹の設定変更/据え置き表は設定変更時「ランダム」、必勝本の設定変更/電源OFF→ON表は「夕方ステージへ」。どちらかへ強制統一せずCONFLICT保持。

## 2025-04-21境界 — OPEN 2/3 known canonical
1. 吉宗 — No.1720 DONE
2. スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ — No.1721 DONE
3. L麻雀物語 — NEXT

## 次回再開地点
- 最新mainを再同期しNo.1721と本handoffを確認。
- **No.1722候補 `L麻雀物語` — 2025-04-21** から再開する。
- 処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-04-21境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- recursive treeと検索を再照合したが、今回もカーソル直後の「最初のresetBehavior欠損レコード」を安全に一意固定できなかったため、旧レコードを推測更新していない。
- 新規収集を止めず、次回も実体レコード順から最初のresetBehavior欠損レコードを確定して遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- HAZUSE 機種情報: https://hazuse.com/machine/pachislot/4S1770/
- HAZUSE 詳細: https://hazuse.com/hd/4s1770/
- 1geki: https://1geki.jp/slot/l_idlmst_mlnp/
- P-WORLD: https://www.p-world.co.jp/machine/database/10216
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/921/29071/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86315/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/230706/
