更新日: 2026-09-15

## 現在地点
- recordCount: **1806**
- latestRecordAdded: **ローティス — No.1806**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_lotis.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_5_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1805を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1805 `L南国育ち SPECIAL` の次から継続し、No.1806 `ローティス` を追加。
- 北電子公式、遊技日本、遊技通信/P-WORLD、情報島+、必勝本、G-net、なな徹、ちょんぼりすた、ジャグラーズネット、スロベース等を横断。
- 型式 `LローティスTN`、北電子、2026-07-06導入を固定。検定番号の数値は再探索後もUNVERIFIED。
- 設定1/2/4/5/6機械割 `98.0 / 99.6 / 102.7 / 105.0 / 108.1%`、ボーナス合算 `1/287.2 / 1/281.2 / 1/271.8 / 1/264.8 / 1/260.3`。
- ベース約31G/50枚、純増約5.0枚/G、SBB約507枚、BIG約206枚、REG約66枚。
- 必勝本直接比較で設定変更時は天井G数RESET・モード再抽選、純電断は天井G数・モード引継ぎ。
- 設定変更時モード振り分け: 朝一約25% / チャンス約13% / 通常A約49% / 通常B約13%。朝一+チャンス約38%。
- 設定変更時は約25%でSBBストック所持抽選に当選し1〜5個を獲得。
- 朝一モード天井200G、チャンス400G、通常A/Bは900G。したがって設定変更で最大天井が一律短縮される仕様ではない。
- 内部状態はちょんぼりすた直接比較で設定変更RESET / 電断引継ぎ。必勝本は状態欄なしのためANALYSIS_SINGLE_DIRECT_COMPARISON。
- 有利区間の設定変更RESET / 電断引継ぎは二次解析支持のためSECONDARY_SUPPORTED。ガックン・即時UI判別はUNVERIFIED。

## No.1806 — ローティス
- path: `docs/real_machine_db/machines/2026-07-06_lotis.md`
- manufacturer: **北電子**
- formalModel: **LローティスTN**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2026-07-06**
- payoutRate: **98.0 / 99.6 / 102.7 / 105.0 / 108.1%**
- bonusCombined: **1/287.2 / 1/281.2 / 1/271.8 / 1/264.8 / 1/260.3**
- base: **約31G/50枚**
- netIncrease: **約5.0枚/G**
- basicPayout: **SBB約507枚 / BIG約206枚 / REG約66枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1806 resetBehavior v0.7
- 設定変更: 天井G数RESET、モード再抽選。内部状態RESETは別解析系統の直接比較で確認。
- 据え置き: 天井G数・モード引継ぎをSECONDARY_SUPPORTEDとして保持。
- 純電断: 必勝本直接比較で天井G数・モード引継ぎ。内部状態も別解析系統で引継ぎ。
- モード: 朝一約25% / チャンス約13% / 通常A約49% / 通常B約13%。
- 天井: 朝一200G / チャンス400G / 通常A・B最大900G。
- SBBストック: 設定変更時約25%で1〜5個。
- 有利区間: 設定変更RESET / 電断引継ぎをSECONDARY_SUPPORTED。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 200G/400G超過だけでは通常A/B約62%があるため据え置き確定不可。ガックンはUNVERIFIED。

## conflicts / normalization
- 性能コア主要値は必勝本、G-net、ジャグラーズネット、スロベース等で一致し有意CONFLICTなし。
- 導入前資料の設定変更挙動「推定」は、導入後の具体解析が公開されたため後発値をcanonicalとする。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1806:
- 北電子公式: https://www.kitadenshi.co.jp/slot/lotis/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-76989/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33533/yugitsushin
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-28691/
- 情報島+ 発売: https://p-johojima.jp/new_machine/post-31754/
- 必勝本 基本/天井: https://p.hisshobon.jp/vpage/2783/2
- 必勝本 コイン持ち: https://p.hisshobon.jp/machine/4754/1/116168
- G-net: https://g-net-ps.com/info/s0275/
- なな徹: https://nana-press.com/kaiseki/machine/1182/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/260109/
- ジャグラーズネット: https://jugglersnet.com/hikarimonoat/lotis
- スロベース: https://slobase.jp/machines/rotis

## 2026-07-06 canonical queue — OPEN 5/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. ~~Lパチスロ からくりサーカス2 — No.1804 DONE~~
4. ~~L南国育ち SPECIAL — No.1805 DONE~~
5. ~~ローティス — No.1806 DONE~~
6. ヤバチバ — NEXT
7. L ULTRAMAN 最終決戦

## 次回再開地点
- 最新mainを再同期しNo.1806と本handoffを確認。
- **No.1807候補「ヤバチバ」— 2026-07-06** から継続。
- その後 `L ULTRAMAN 最終決戦` を処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
