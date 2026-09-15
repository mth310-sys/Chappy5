更新日: 2026-09-15

## 現在地点
- recordCount: **1815**
- latestRecordAdded: **スロット ワールドダイスター — No.1815**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_slot-world-dai-star.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_7_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFFを再同期。
- INDEXは旧スナップショット（19件）のためREADME/LATEST_HANDOFF規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1815 `スロット ワールドダイスター` を追加。
- HAZUSE、遊技通信/P-WORLD、パチビー、6確、スロベース、ジャグラーズネット、情報島＋、検定通過報道等を横断。
- パオン・ディーピー製、型式 `L／ワールドダイスター／PA3`、検定番号 `6S0003`、2026-08-03導入を固定。
- 設定1〜6機械割 `97.8 / 98.8 / 101.1 / 104.0 / 107.0 / 112.4%`、CZ `1/180.6 → 1/156.0`、ボーナス(ST)初当り `1/306.5 → 1/246.6`、ベース約30G/50枚、疑似ボーナス純増約8.0枚/G。
- 設定変更時は有利区間・天井G・内部状態RESET。通常999G+αから600G+αへ短縮。
- 朝一は約60%でラッキーモード、CZポイント初期値優遇、努力の欠片初期ポイント抽選、100Gフタリノスタルジア成功率約25%。
- 600G天井到達時はオペラ変換濃厚＋STゲーム数加算アイテム抽選。
- 電源OFF→ONのみは天井G・内部状態引継ぎを機種固有二次解析で確認。ラッキーモード/CZポイント/努力の欠片/有利区間の純電断直接契約はUNVERIFIED_AFTER_RESEARCH。
- 据え置きは前日状態引継ぎが二次解析で支持されるが、高優先三者直接比較未固定のためSECONDARY_SUPPORTED。
- 600G短縮は上位ST終了後・ノスタルジアモードでも発生するため、設定変更確定条件として扱わない。
- 本機固有ガックン条件/発生率、朝一即時ランプ判別は多語再探索後もUNVERIFIED_AFTER_RESEARCH。

## No.1815 — スロット ワールドダイスター
- path: `docs/real_machine_db/machines/2026-08-03_slot-world-dai-star.md`
- manufacturer: **パオン・ディーピー（大都技研グループ）**
- formalModel: **L／ワールドダイスター／PA3**
- inspectionNumber: **6S0003**
- releaseDate: **2026-08-03**
- payoutRate: **97.8 / 98.8 / 101.1 / 104.0 / 107.0 / 112.4%**
- CZ: **1/180.6 / 1/173.8 / 1/168.3 / 1/164.9 / 1/163.0 / 1/156.0**
- bonus(ST): **1/306.5 / 1/297.1 / 1/284.1 / 1/262.1 / 1/257.1 / 1/246.6**
- base: **約30G/50枚**
- netIncrease: **約8.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1815 resetBehavior v0.7
- 設定変更: 有利区間/天井G/内部状態RESET。天井600G+α。
- 朝一: 約60%ラッキーモード、CZ初期ポイント優遇、努力の欠片初期抽選、100G成功率約25%。
- 据え置き: 前日状態引継ぎ SECONDARY_SUPPORTED。
- 純電断: 天井G・内部状態引継ぎ SECONDARY_SUPPORTED。その他個別契約はUNVERIFIED。
- 変更判別: 600G短縮は他契機でも起こるため単独確定不可。ガックン/即時ランプUNVERIFIED。

## 2026-08-03 canonical queue — OPEN 7/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. ~~Lすーぱぁびん娘 — No.1811 DONE~~
4. ~~スマスロ とんでもスキルで異世界放浪メシ — No.1812 DONE~~
5. ~~スマスロ とある魔術の禁書目録2 — No.1813 DONE~~
6. ~~スマスロ ストリートファイター6 — No.1814 DONE~~
7. ~~スロット ワールドダイスター — No.1815 DONE~~
8. **LBトリプルクラウンX-300 — NEXT**

### 境界再監査
- 2026-08-03群は8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1815:
- HAZUSE: https://hazuse.com/machine/pachislot/6S0003/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33912/yugitsushin
- パチビー: https://www.pachibee.jp/machines/index/226060013
- 6確: https://www.kaku6.jp/slot/wds/
- スロベース: https://slobase.jp/machines/world-dai-star
- ジャグラーズネット: https://jugglersnet.com/chumoku/world-dai-star
- 情報島＋: https://p-johojima.jp/machine_spec/post-34877/
- 検定通過報道: https://www.chiba-tv.com/plus/detail/2026041541308
- ワンチャンくん: https://wanchankun.com/machines/world-dai-star

## 次回再開地点
- 最新mainを再同期しNo.1815と本handoffを確認。
- **No.1816候補 `LBトリプルクラウンX-300` — 2026-08-03** から継続。
- 完了後に2026-08-03群8/8のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
