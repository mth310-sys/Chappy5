更新日: 2026-09-15

## 現在地点
- recordCount: **1812**
- latestRecordAdded: **スマスロ とんでもスキルで異世界放浪メシ — No.1812**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_smartslot-tondemo-skill.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_4_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1811を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1812 `スマスロ とんでもスキルで異世界放浪メシ` を追加。
- コナミ公式「おしえて中の人」2026-09-14公開、公式製品、情報島+、G-net、HAZUSE、必勝本、一撃、なな徹、6確、ちょんぼりすた、スロベース等を横断。
- コナミアミューズメント、型式 `LとんでもスキルKM`、検定番号 `5S1909`、2026-08-03導入を固定。
- 設定1〜6機械割 `97.9 / 99.1 / 101.0 / 105.3 / 109.1 / 112.1%`、CZ `1/216.7 → 1/189.5`、BONUS初当り `1/349.3 → 1/247.3`、ベース約32.4G/50枚、純増約5.0枚/G。
- 設定変更で1000G+α→650G+α。公式新情報で内部G数0〜31G加算、モードB以上、設定1でも天国20%・モードD20%、CZポイント規定振り分け優遇を固定。
- 据え置きは有利区間・天井・ゲーム数・CZポイント・内部状態・モード引継ぎ。純電断（3時間以上）もゲーム数・CZポイント・天井を引継ぎ。
- 設定変更時有利区間RESETをなな徹で確認。エンディング後の区間切断は実戦上予想を含むため朝一契約と分離。
- ガックンは多語再探索後もUNVERIFIED_AFTER_RESEARCH。開始ステージは変更/据置ともフェーネン王国（昼）で即時判別不可。
- CONFLICT: 設定3機械割101.0/101.1、G-net設定5初当り1/286.7 vs 複数一致1/263.7。平均化せず保持。

## No.1812 — スマスロ とんでもスキルで異世界放浪メシ
- path: `docs/real_machine_db/machines/2026-08-03_smartslot-tondemo-skill.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **LとんでもスキルKM**
- inspectionNumber: **5S1909**
- releaseDate: **2026-08-03**
- payoutRate: **97.9 / 99.1 / 101.0 / 105.3 / 109.1 / 112.1%**
- CZ: **1/216.7 / 1/215.6 / 1/212.7 / 1/203.7 / 1/195.3 / 1/189.5**
- BONUS初当り: **1/349.3 / 1/339.2 / 1/322.4 / 1/286.5 / 1/263.7 / 1/247.3**
- base: **約32.4G/50枚**
- netIncrease: **約5.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1812 resetBehavior v0.7
- 設定変更: ゲーム数/CZポイント/天井RESET、650G+α短縮、内部0〜31G加算。
- モード: 公式でモードB以上。設定1でも天国20%・モードD20%。
- CZ: 各キャラ規定CZポイント振り分け優遇。初当り前CZは特殊モード期待大。
- 据え置き: 有利区間・天井・ゲーム数・CZポイント・内部状態・モード引継ぎ。
- 純電断: ゲーム数・CZポイント・天井引継ぎ（3時間以上の比較あり）。
- 有利区間: 設定変更時RESET。通常区間切断後の女神降臨恩恵は設定変更時除外。
- 変更判別: 開始ステージは双方同じ。650G天井等は事後材料。ガックンUNVERIFIED。

## conflicts / normalization
- `CONFLICT_PAYOUT_SETTING3_101_0_VS_101_1`: 複数一致101.0%をcanonical。
- `CONFLICT_LIKELY_TABLE_TYPO_SETTING5_INITIAL_HIT_1_286_7`: G-netのみ1/286.7、複数解析1/263.7をcanonical。
- エンディング有利区間切断タイミングは実戦上予想を含み、設定変更RESETと信頼度を分離。

## 2026-08-03 canonical queue — OPEN 4/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. ~~Lすーぱぁびん娘 — No.1811 DONE~~
4. ~~スマスロ とんでもスキルで異世界放浪メシ — No.1812 DONE~~
5. スマスロ とある魔術の禁書目録2 — NEXT
6. スマスロ ストリートファイター6
7. スロット ワールドダイスター
8. LBトリプルクラウンX-300

### 境界再監査
- 2026-08-03群は8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1812:
- コナミ公式 おしえて中の人: https://kam-pp-stats.konami.net/axz/html/oshiete/article/39/
- コナミ公式製品: https://www.konami.com/amusement/psm/slot/tondemoskill/00_tz.html
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-28691/
- G-net: https://g-net-ps.com/info/s0283/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1909/
- 必勝本: https://p.hisshobon.jp/machine/4756/1/115605
- 一撃: https://1geki.jp/slot/l_tonsuki/3/
- なな徹: https://nana-press.com/kaiseki/machine/1148/
- 6確: https://www.kaku6.jp/slot/tonsuki/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/260742/
- スロベース: https://slobase.jp/machines/tondemo-skill

## 次回再開地点
- 最新mainを再同期しNo.1812と本handoffを確認。
- **No.1813候補 `スマスロ とある魔術の禁書目録2` — 2026-08-03** から継続。
- その後 `スマスロ ストリートファイター6 → スロット ワールドダイスター → LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
