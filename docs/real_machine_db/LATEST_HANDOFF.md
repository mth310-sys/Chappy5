更新日: 2026-09-15

## 現在地点
- recordCount: **1804**
- latestRecordAdded: **Lパチスロ からくりサーカス2 — No.1804**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_karakuri-circus2.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_3_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1803を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1803 `スマスロ ケロット5BT` の次から継続し、No.1804 `Lパチスロ からくりサーカス2` を追加。
- 遊技通信/P-WORLD、必勝本、1geki、6確、ちょんぼりすた、ジャグラーズネット、パチマガスロマガFREE、スロベース、パチビー等を横断。
- 型式 `Lからくりサーカス2jG`、SANKYO（ジェイビー製）、2026-07-06導入を固定。
- 設定1〜6機械割 `97.7 / 98.8 / 101.2 / 104.3 / 110.5 / 114.9%`、AT初当り `1/519 / 1/504 / 1/474 / 1/458 / 1/430 / 1/410`、CZ `1/342 / 1/341 / 1/339 / 1/339 / 1/327 / 1/318`。
- ベース約31.8G/50枚、通常AT純増約2.8枚/G・初期150枚、上位AT純増約8.0枚/G。
- 必勝本直接比較で設定変更時は天井G数RESET、スイカ規定回数/モード/状態再抽選、ゲーム数カウンタ0表示。純電断は天井/スイカ規定回数/モード/状態を引継ぎ、表示のみ0。
- CZ間液晶天井は通常最大1200G→設定変更時最大500Gへ短縮。通常の実ゲーム890G天井、AT間2500G天井のリセット専用短縮値は確認できず、推測補完しない。
- 設定変更直後の通常モード具体振り分け、本機固有ガックン、純電断時の有利区間直接文言、電断時の運命盤/メニュー/ステージは再探索後もUNVERIFIED。
- 公開朝一数値としてパチマガスロマガFREE実戦20台の `CZorATまで1/205.30 / 平均投資323枚 / 天国30.00%` を実戦サンプルとして分離保存。

## No.1804 — Lパチスロ からくりサーカス2
- path: `docs/real_machine_db/machines/2026-07-06_karakuri-circus2.md`
- manufacturer: **SANKYO（製造: ジェイビー）**
- formalModel: **Lからくりサーカス2jG**
- releaseDate: **2026-07-06**
- payoutRate: **97.7 / 98.8 / 101.2 / 104.3 / 110.5 / 114.9%**
- AT: **1/519 / 1/504 / 1/474 / 1/458 / 1/430 / 1/410**
- base: **約31.8G/50枚**
- netIncrease: **通常AT 約2.8枚/G / 上位AT 約8.0枚/G**
- basicPayout: **通常AT初期150枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1804 resetBehavior v0.7
- 設定変更: 天井G数RESET、スイカ規定回数/モード/状態再抽選、液晶カウンタ0、運命盤/メニューRESET。
- 据え置き/純電断: 天井・スイカ規定回数・モード・状態を引継ぎ。液晶カウンタは0表示だが内部引継ぎ。
- CZ間液晶天井: 通常最大1200G → 設定変更時最大500G。
- モード: 設定変更再抽選 / 純電断引継ぎ。リセット通常振り分けはUNVERIFIED_AFTER_RESEARCH。
- 状態: 設定変更再抽選 / 純電断引継ぎ。
- 有利区間: 設定変更RESETは複数解析一致。純電断直接文言はUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
- 朝一恩恵: CZ間液晶天井500G。実戦20台でCZorATまで1/205.30、平均投資323枚、天国30.00%。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 朝一液晶500G短縮天井超過でCZ非当選なら据え置き濃厚材料。0G表示単独では判別不可。ガックンはUNVERIFIED。

## conflicts / normalization
- 低優先資料に上位AT約7.6枚/G、ベース約32.8G、機械割異値があるが、業界発表・P-WORLD・必勝本・6確等の主要一致値をcanonicalとし平均化しない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1804:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33506/yugitsushin
- P-WORLD: https://www.p-world.co.jp/machine/database/10485
- 必勝本 設定差: https://hisshobon.com/machineinfo/138534/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/138449/
- 必勝本 規定ゲーム数: https://p.hisshobon.jp/machine/4749/1/115816
- 1geki: https://1geki.jp/slot/l_karakuri2/3/
- 6確: https://www.kaku6.jp/slot/karakuri2/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/256699/
- ジャグラーズネット: https://jugglersnet.com/chumoku/karakuri2
- パチマガスロマガFREE: https://pachimaga.com/free/article/20260715/065719.php
- スロベース: https://slobase.jp/machines/karakuri-circus2
- パチビー: https://www.pachibee.jp/movies/index/18999

## 2026-07-06 canonical queue — OPEN 3/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. ~~Lパチスロ からくりサーカス2 — No.1804 DONE~~
4. L南国育ち SPECIAL — NEXT
5. ローティス
6. ヤバチバ
7. L ULTRAMAN 最終決戦

## 次回再開地点
- 最新mainを再同期しNo.1804と本handoffを確認。
- **No.1805候補「L南国育ち SPECIAL」— 2026-07-06** から継続。
- 7/6群の残り4機を順次処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
