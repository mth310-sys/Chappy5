更新日: 2026-09-15

## 現在地点
- recordCount: **1814**
- latestRecordAdded: **スマスロ ストリートファイター6 — No.1814**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_smartslot-street-fighter6.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_6_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1813を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1814 `スマスロ ストリートファイター6` を追加。
- エンターライズ公式、遊技通信/P-WORLD、HAZUSE、G-net、パチビー、グリーンべると、遊技日本、必勝本、ジャグラーズネット、6確、スロベース、フリック7等を横断。
- レオスター製、型式 `Lストリートファイター6SB`、検定番号 `6S0125`、2026-08-03導入を固定。
- 設定1〜6機械割 `97.4 / 98.4 / 100.4 / 103.2 / 106.1 / 110.0%`、FB `1/278.6 → 1/252.6`、ボーナス `1/487.6 → 1/389.9`、ベース約32G/50枚、疑似ボーナス純増約6.0枚/G。
- 設定変更時は有利区間・天井/液晶G・内部モード・内部状態RESET。朝一は通常B以上濃厚、約25%で天国。初回FBはブロンズ以上選択率優遇。
- 通常最大天井は液晶1000G+α、設定変更後は通常A除外により最大900G+α以下。天国なら200G+α。
- 据え置きは天井/液晶G・内部モード・内部状態・有利区間を引継ぎ。純電断は天井/液晶G・内部モード・内部状態引継ぎ。有利区間の純電断直接表記は十分な再探索後も固定できずUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- 有効な即時リセット判別方法は現時点で未判明。ガックン条件/発生率は多語再探索後もUNVERIFIED_AFTER_RESEARCH。
- 通常営業中の有利区間切断後レジェンド移行は、設定変更朝一恩恵と同一視せず分離保存。
- 公開朝一観測値としてフリック7の4,163件/延べ47,778区間・50G区間平均AT当選率8.70%を条件付き保存。スロベースの0G期待値は通常天井期待値で純リセット専用ではないため朝一値へ転記しない。

## No.1814 — スマスロ ストリートファイター6
- path: `docs/real_machine_db/machines/2026-08-03_smartslot-street-fighter6.md`
- manufacturer: **レオスター（エンターライズグループ）**
- formalModel: **Lストリートファイター6SB**
- inspectionNumber: **6S0125**
- releaseDate: **2026-08-03**
- payoutRate: **97.4 / 98.4 / 100.4 / 103.2 / 106.1 / 110.0%**
- FB: **1/278.6 / 1/272.1 / 1/264.6 / 1/258.9 / 1/255.3 / 1/252.6**
- bonus: **1/487.6 / 1/473.3 / 1/447.2 / 1/425.6 / 1/405.9 / 1/389.9**
- base: **約32G/50枚**
- netIncrease: **約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1814 resetBehavior v0.7
- 設定変更: 有利区間/天井/液晶G/内部モード/内部状態RESET。通常B以上濃厚、約25%天国。
- 天井: 通常最大1000G+α→設定変更後最大900G+α以下。天国なら200G+α。
- 初回FB: ブロンズ以上選択率優遇。
- 据え置き: 天井/液晶G・モード・状態・有利区間引継ぎ。
- 純電断: 天井/液晶G・モード・状態引継ぎ。有利区間直接表記はUNVERIFIED。
- 変更判別: 即時有効手段未判明。ガックンUNVERIFIED。

## conflicts / normalization
- formal manufacturerは業界一次/HAZUSEに従いレオスター。エンターライズ単独表記はグループ/ブランド文脈として保持。
- 有利区間リセット後レジェンド移行はエンディング等の通常営業中切断契機で、朝一設定変更恩恵へ混入しない。
- 設定変更モードは通常B以上・約25%天国まで複数解析一致。B/C個別率は未公開として保持。

## 2026-08-03 canonical queue — OPEN 6/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. ~~Lすーぱぁびん娘 — No.1811 DONE~~
4. ~~スマスロ とんでもスキルで異世界放浪メシ — No.1812 DONE~~
5. ~~スマスロ とある魔術の禁書目録2 — No.1813 DONE~~
6. ~~スマスロ ストリートファイター6 — No.1814 DONE~~
7. スロット ワールドダイスター — NEXT
8. LBトリプルクラウンX-300

### 境界再監査
- 2026-08-03群は8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1814:
- エンターライズ公式: https://enterrise.co.jp/slot/sf6/
- エンターライズ機種一覧: https://www.enterrise.co.jp/slot.php
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/34093/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/6S0125/
- G-net: https://g-net-ps.com/info/s0286/
- パチビー: https://www.pachibee.jp/machines/kouryaku/226060014
- グリーンべると: https://web-greenbelt.jp/post-115861/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-78414/
- 必勝本: https://hisshobon.com/machineinfo/140556/
- ジャグラーズネット: https://jugglersnet.com/chumoku/street-fighter6
- 6確: https://www.kaku6.jp/slot/streetfighter6/
- スロベース: https://slobase.jp/machines/street-fighter6
- フリック7: https://flick7.net/slot/street_fighter6/reset/
- うちどころ: https://uchidokoro.com/machines/sf6/

## 次回再開地点
- 最新mainを再同期しNo.1814と本handoffを確認。
- **No.1815候補 `スロット ワールドダイスター` — 2026-08-03** から継続。
- その後 `LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
