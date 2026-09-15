更新日: 2026-09-15

## 現在地点
- recordCount: **1807**
- latestRecordAdded: **ヤバチバ — No.1807**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_yabachiba.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_6_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1806を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1806 `ローティス` の次から継続し、No.1807 `ヤバチバ` を追加。
- 1geki、P-WORLD、Amusement Japan、情報島+、G-net、6確、ちょんぼりすた、スロベース、ラクパチ等を横断。
- 型式 `LヤバチバZM`、検定番号 `5S1800`、NET、2026-07-06導入を固定。
- 設定1/2/4/5/6機械割 `97.1 / 98.3 / 102.9 / 105.1 / 110.1%`、ボーナス初当り全設定共通 `1/398`、虹7初当り `1/5716`。
- ベース約30.7〜30.9G/50枚、BIG/REG純増約6.0枚/G、ベル集中約1.8〜1.87枚/G、BIG約110枚、REG約50枚、虹7 777枚+α。
- 通常天井は999G+αまたはチェリー40回。導入後複数解析で設定変更後チェリー天井30回を確認。
- 設定変更時は約75%で継続ストックを獲得し、次回ボーナス後32G以内に放出。
- ちょんぼりすた直接比較で設定変更時は天井/内部状態RESET、純電断は引継ぎ。
- 通常時に従来型の内部モードは存在しないため、設定変更専用モード振り分けはN/A。
- G-net導入前販売概要の `変更:チェリー20回` と導入後複数解析の30回が競合。平均せず30回をcanonical、20回を `CONFLICT_PRE_RELEASE_SALES_MATERIAL` として保持。
- 有利区間の機種固有高優先直接比較、ガックン条件/発生率は再探索後もUNVERIFIED。

## No.1807 — ヤバチバ
- path: `docs/real_machine_db/machines/2026-07-06_yabachiba.md`
- manufacturer: **NET（ネット）**
- formalModel: **LヤバチバZM**
- inspectionNumber: **5S1800**
- releaseDate: **2026-07-06**
- payoutRate: **97.1 / 98.3 / 102.9 / 105.1 / 110.1%**
- bonusInitial: **1/398（全設定共通）**
- rainbow7Initial: **1/5716（公開設定共通）**
- base: **約30.7〜30.9G/50枚**
- netIncrease: **BIG/REG約6.0枚/G / ベル集中約1.8〜1.87枚/G**
- basicPayout: **BIG約110枚 / REG約50枚 / 虹7 777枚+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1807 resetBehavior v0.7
- 設定変更: 天井・内部状態RESET。チェリー天井40回→30回（導入後canonical）。
- 据え置き: 天井進行・内部状態引継ぎをSECONDARY_SUPPORTED。
- 純電断: 導入後直接比較で天井・内部状態引継ぎ。
- ゲーム数天井: 999G+αは設定変更でも短縮確認なし。
- モード: 通常時に従来型内部モードなし。設定変更モード振り分けN/A。
- 朝一恩恵: 約75%で継続ストック獲得。次回ボーナス後32G以内に放出。
- 有利区間: 機種固有の高優先直接比較はUNVERIFIED_AFTER_RESEARCH。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: チェリー30回天井は推測材料。ガックン/即時UI確定条件はUNVERIFIED。

## conflicts / normalization
- 設定変更時チェリー天井: G-net導入前販売概要 `20回` vs 導入後6確・ちょんぼりすた・スロベース等 `30回`。平均せず30回をcanonical、20回をCONFLICTとして保持。
- 性能コア主要値はP-WORLD、1geki、6確、G-net等で一致し有意CONFLICTなし。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1807:
- 1geki: https://1geki.jp/slot/l_yabachiba/
- P-WORLD: https://www.p-world.co.jp/machine/database/10508
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10005262/
- 情報島+: https://p-johojima.jp/machine_spec/post-33959/
- G-net: https://g-net-ps.com/info/s0280/
- 6確: https://www.kaku6.jp/slot/yabachiba/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/257580/
- スロベース: https://slobase.jp/machines/yabachiba
- ラクパチ: https://www.rakupachi.com/machines/yabachiba/asaichi

## 2026-07-06 canonical queue — OPEN 6/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. ~~Lパチスロ からくりサーカス2 — No.1804 DONE~~
4. ~~L南国育ち SPECIAL — No.1805 DONE~~
5. ~~ローティス — No.1806 DONE~~
6. ~~ヤバチバ — No.1807 DONE~~
7. L ULTRAMAN 最終決戦 — NEXT

## 次回再開地点
- 最新mainを再同期しNo.1807と本handoffを確認。
- **No.1808候補「L ULTRAMAN 最終決戦」— 2026-07-06** から継続。
- 7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して2026-07-06境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
