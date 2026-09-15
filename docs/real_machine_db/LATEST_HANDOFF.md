更新日: 2026-09-15

## 現在地点
- recordCount: **1810**
- latestRecordAdded: **スマスロ やじきた道中記参る！ — No.1810**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_smartslot-yajikita-dochuki-mairu.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_2_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1809を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1810 `スマスロ やじきた道中記参る！` を追加。
- ユニバーサル公式、遊技通信、情報島+、P-WORLD、必勝本、6確、ちょんぼりすた、なな徹、スロベース、こぜログ等を横断。
- 型式 `Lやじきた道中記参る！BG`、ユニバーサルブロス、2026-08-03導入を固定。検定番号は今回高信頼固定できずUNVERIFIED。
- 設定1〜6機械割 `97.7 / 98.7 / 100.6 / 105.2 / 109.5 / 114.5%`、CZ `1/231.1 → 1/157.5`、AT `1/473.9 → 1/318.3`。
- ベースはP-WORLD・6確・ちょんぼりすた等の具体スペック表が一致する約35.4G/50枚をcanonical。情報島+総括の約30GはCONFLICTとして保持。
- メインAT純増約2.5枚/G、ボーナス/上位AT約5.0枚/G、AT初期50G以上。
- 通常最大999まいる。設定変更後は一律399ではなく、通常B37.5% / 特殊A50.0% / 特殊B12.5%。特殊Aのみ最大399まいる、特殊Bは最大999まいるかつ次回天国濃厚。
- 設定変更時はCZ勝率50%以上の出現が優遇。あっぱれチャンス勝利キャラにも専用振り分けあり。
- 純電断はまいる・CZ回数・モード・内部状態・ライブポイント引継ぎ。液晶/ステージは調査中。
- 設定変更時有利区間リセットを確認。ただしエンディング等の設定変更以外の有利区間リセットに付く真剣チャレンジ濃厚恩恵は朝一設定変更には付かないため分離。
- 設定変更時の独立内部状態は必勝本「調査中」と二次資料「RESET」が競合するためCONFLICT。ガックンは再探索後UNVERIFIED。

## No.1810 — スマスロ やじきた道中記参る！
- path: `docs/real_machine_db/machines/2026-08-03_smartslot-yajikita-dochuki-mairu.md`
- manufacturer: **ユニバーサルブロス / ユニバーサルエンターテインメント**
- formalModel: **Lやじきた道中記参る！BG**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2026-08-03**
- payoutRate: **97.7 / 98.7 / 100.6 / 105.2 / 109.5 / 114.5%**
- CZ: **1/231.1 / 1/222.7 / 1/209.5 / 1/191.5 / 1/173.1 / 1/157.5**
- AT: **1/473.9 / 1/457.5 / 1/431.6 / 1/388.1 / 1/352.1 / 1/318.3**
- base: **約35.4G/50枚（設定1）**
- netIncrease: **メインAT約2.5枚/G / ボーナス・上位AT約5.0枚/G**
- basicPayout: **やじきた祭 初期50G以上**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1810 resetBehavior v0.7
- 設定変更: まいる/CZ回数/ライブポイントRESET、モード再抽選。有利区間RESET。
- 据え置き/純電断: まいる・CZ回数・モード・内部状態・ライブポイント引継ぎ。
- モード: 全設定共通 通常B37.5% / 特殊A50.0% / 特殊B12.5%。
- 天井: 通常最大999まいるは不変。一律短縮ではなく50%で特殊A最大399まいる。通常B最大699、特殊B最大999。
- 状態: 必勝本の設定変更時「現在調査中」と二次整理RESETが競合、`CONFLICT_STATE_RESET_WORDING`。
- 有利区間: 設定変更時RESET。設定変更以外の有利区間リセットは特殊A100%＋真剣チャレンジ濃厚だが朝一へ混入しない。
- 朝一恩恵: 特殊A50%＋CZ勝率50%以上出現優遇＋あっぱれキャラ専用振り分け。
- 朝一不利: 独自設定1シミュレーション0G 等価-930円 / 5.6枚-1,529円（メーカー値ではない）。
- 変更判別: モード/CZ勝率は確率的材料。液晶/ステージ調査中、ガックンUNVERIFIED。

## conflicts / normalization
- `CONFLICT_LOW_PRIORITY_APPROX_30G`: 情報島+総括の約30G vs P-WORLD・6確・ちょんぼりすた等約35.4G。具体スペック表複数一致の35.4Gをcanonical。
- `CONFLICT_STATE_RESET_WORDING`: 設定変更時内部状態について必勝本「現在調査中」vs 一部解析「RESET」。未確定維持。
- リセット天井は「一律399まいる」ではない。設定変更後も特殊B12.5%で最大999まいるが存在。

## 2026-08-03 canonical queue — OPEN 2/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. Lすーぱぁびん娘 — NEXT
4. スマスロ とんでもスキルで異世界放浪メシ
5. スマスロ とある魔術の禁書目録2
6. スマスロ ストリートファイター6
7. スロット ワールドダイスター
8. LBトリプルクラウンX-300

### 境界再監査
- 2026-08-03群は現時点で8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1810:
- ユニバーサル公式: https://www.universal-777.co.jp/news/20260511002496/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33528/yugitsushin
- 情報島+検定: https://p-johojima.jp/new_machine/post-30991/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10489
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/139914/
- 必勝本 モード: https://p.hisshobon.jp/machine/4752/1/115821
- 必勝本 通常時: https://hisshobon.com/machineinfo/139927/
- 6確: https://www.kaku6.jp/slot/yajikita/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/259841/
- なな徹: https://nana-press.com/kaiseki/machine/1186/
- スロベース: https://slobase.jp/machines/yajikita-mairu
- スロベース reset: https://slobase.jp/articles/yajikita-mairu-reset
- こぜログ: https://kozelog.net/machine/universal/yajikita/

## 次回再開地点
- 最新mainを再同期しNo.1810と本handoffを確認。
- **No.1811候補 `Lすーぱぁびん娘` — 2026-08-03** から継続。
- その後 `スマスロ とんでもスキルで異世界放浪メシ → スマスロ とある魔術の禁書目録2 → スマスロ ストリートファイター6 → スロット ワールドダイスター → LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
