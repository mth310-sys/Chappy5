更新日: 2026-09-15

## 現在地点
- recordCount: **1813**
- latestRecordAdded: **スマスロ とある魔術の禁書目録2 — No.1813**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_smartslot-toaru-majutsu-index2.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_5_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1812を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1813 `スマスロ とある魔術の禁書目録2` を追加。
- 藤商事公式PV、Amusement Japan、HAZUSE、必勝本、なな徹、P-WORLD、ジャグラーズネット、すろぱちくえすと、ちょんぼりすた、ハイエナビ等を横断。
- 藤商事、型式 `Lとある魔術の禁書目録2FA`、検定番号 `5S1883`、2026-08-03導入を固定。
- 設定1〜6機械割 `97.9 / 98.7 / 100.0 / 104.5 / 108.2 / 113.3%`、CZ `1/235.6 → 1/207.2`、AT `1/398.8 → 1/338.4`、ベース約30.8〜31G/50枚、AT純増約4.0枚/G。
- 設定変更でAT間1200実G→777実G、CZ間800表示G+α→200表示G+α。朝イチ専用モード天井200G。
- 設定変更時は有利区間・天井・内部状態RESET、据え置きは引継ぎ。電源OFF/ONは天井・モード・状態を引継ぎ、有利区間も解析資料で引継ぎ確認。
- 朝イチ後は次回天国移行率優遇。具体的朝イチモード振り分けは未公開/未固定。
- 変更判別は必勝本で設定変更時「実戦上ロシアステージ」、なな徹では開始ステージ調査中・有効な即時判別不明。確定判別には使わずCONFLICT_EVIDENCE_STRENGTHとして保持。
- ガックンは多語再探索後もUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値は、なな徹のリセット狙い目（等価200G〜/5.6枚350G〜、期待値1000円超基準）と、ハイエナビの据え置き混在実測0G値を条件分離して保存。

## No.1813 — スマスロ とある魔術の禁書目録2
- path: `docs/real_machine_db/machines/2026-08-03_smartslot-toaru-majutsu-index2.md`
- manufacturer: **藤商事**
- formalModel: **Lとある魔術の禁書目録2FA**
- inspectionNumber: **5S1883**
- releaseDate: **2026-08-03**
- payoutRate: **97.9 / 98.7 / 100.0 / 104.5 / 108.2 / 113.3%**
- CZ: **1/235.6 / 1/233.4 / 1/230.8 / 1/222.3 / 1/215.8 / 1/207.2**
- AT: **1/398.8 / 1/394.5 / 1/389.6 / 1/369.5 / 1/358.0 / 1/338.4**
- base: **約30.8〜31G/50枚**
- netIncrease: **約4.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1813 resetBehavior v0.7
- 設定変更: 有利区間/天井/内部状態RESET。AT間777実G、CZ間200表示G+αへ短縮。
- モード: 朝イチ専用モード、天井200G。朝イチ後は次回天国移行率優遇。
- 据え置き: 有利区間・天井・内部状態引継ぎ。
- 純電断: 天井・モード・状態引継ぎ。有利区間も解析資料で引継ぎ。
- 変更判別: ロシア開始は実戦上資料ありだが確定判別扱いしない。ガックンUNVERIFIED。

## conflicts / normalization
- `CONFLICT_EVIDENCE_STRENGTH_START_STAGE`: 必勝本「実戦上ロシア」 vs なな徹「現在調査中」。ロシアを補助材料に限定。
- base 30.8G/50枚 vs 約31G/50枚は丸め差。
- 通常有利区間切断時の恩恵は朝一設定変更恩恵と分離。

## 2026-08-03 canonical queue — OPEN 5/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. ~~Lすーぱぁびん娘 — No.1811 DONE~~
4. ~~スマスロ とんでもスキルで異世界放浪メシ — No.1812 DONE~~
5. ~~スマスロ とある魔術の禁書目録2 — No.1813 DONE~~
6. スマスロ ストリートファイター6 — NEXT
7. スロット ワールドダイスター
8. LBトリプルクラウンX-300

### 境界再監査
- 2026-08-03群は8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1813:
- 藤商事公式PV: https://www.youtube.com/watch?v=INazzWB9yjw
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10005269/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1883/
- 必勝本 天井/設定変更: https://hisshobon.com/machineinfo/140171/
- 必勝本 モード: https://hisshobon.com/machineinfo/140241/
- なな徹: https://nana-press.com/kaiseki/machine/1154/
- ジャグラーズネット: https://jugglersnet.com/chumoku/toarumajutsuno2
- すろぱちくえすと: https://www.slopachi-quest.com/article/toaru-majutsu-no-kinsho-mokuroku-2-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/260325/
- P-WORLD: https://www.p-world.co.jp/machine/database/10516
- ハイエナビ: https://haienavi.com/machines/index2

## 次回再開地点
- 最新mainを再同期しNo.1813と本handoffを確認。
- **No.1814候補 `スマスロ ストリートファイター6` — 2026-08-03** から継続。
- その後 `スロット ワールドダイスター → LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
