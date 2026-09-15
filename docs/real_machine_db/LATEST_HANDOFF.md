更新日: 2026-09-15

## 現在地点
- recordCount: **1817**
- latestRecordAdded: **Lパチスロ 喰霊-零-Re — No.1817**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-17_l-pachislot-garei-zero-re.md`
- chronologicalFrontier: **2026-08-17 CLOSED**
- schema: **resetBehavior v0.7**
- status: **2026-08-17_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1815実レコードを再同期。
- INDEXは旧スナップショット（19件）のためREADME/LATEST_HANDOFF規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1816 `LBトリプルクラウンX-300` を追加し、2026-08-03群を8/8完了。
- No.1817 `Lパチスロ 喰霊-零-Re` を追加し、2026-08-17群を1/1完了。

## No.1816 — LBトリプルクラウンX-300
- path: `docs/real_machine_db/machines/2026-08-03_lb-triple-crown-x-300.md`
- manufacturer: **清龍ゲームジャパン**
- formalModel: **LBトリプルクラウンX-300**
- inspectionNumber: **531140**
- releaseDate: **2026-08-03**
- system: **スマスロ / ノーマルBT**
- payoutRate: **97 / 99 / 101 / 104 / 107 / 110%**
- BB: **1/303.41 / 1/289.98 / 1/276.52 / 1/262.14 / 1/249.19 / 1/238.31**
- RB: **1/481.88 / 1/448.88 / 1/422.81 / 1/387.89 / 1/356.17 / 1/329.33**
- combined: **1/186.18 / 1/176.17 / 1/167.18 / 1/156.41 / 1/146.61 / 1/138.26**
- base: **約38G以上/50枚（設定1）**
- payout: **BIG最大約304枚（BT込） / REG最大約107枚**
- reset: 天井非搭載。朝一専用天井/モード優遇なし。設定変更/据え置き/純電断時のリアルボーナス成立フラグ・BT権利、有利区間三者契約、本機固有ガックンは多語再探索後もUNVERIFIED。

### 2026-08-03境界再監査
- 全国カレンダー（情報島＋/一撃）は7機掲載だが、P-WORLDではLBトリプルクラウンX-300が8/7時点6店舗掲載と記録され、HAZUSE/イチカツ/しんのすけちゃんねるは2026-08-03導入を掲載。
- 沖縄向け地域性の強い導入差と判断し、全機種方針上No.1816を独立収録。
- canonical 8機すべて処理済み。**2026-08-03 CLOSED 8/8**。

## No.1817 — Lパチスロ 喰霊-零-Re
- path: `docs/real_machine_db/machines/2026-08-17_l-pachislot-garei-zero-re.md`
- manufacturer: **オーイズミラボ（販売/ブランド: オーイズミ）**
- formalModel: **Lパチスロ喰霊零Re/L3**
- releaseDate: **2026-08-17**
- system: **スマスロ A+ART**
- payoutRate: **97.8 / 98.9 / 100.3 / 104.4 / 106.9 / 110.0%**（設定3は6確101.0%とCONFLICT）
- bonusCombined: **1/199.8 / 1/198.6 / 1/195.0 / 1/189.4 / 1/186.2 / 1/182.0**
- ART: **1/468.6 / 1/451.2 / 1/408.8 / 1/351.5 / 1/314.2 / 1/279.8**
- CZ超自然災害Mode: **1/287.2 / 1/277.6 / 1/255.6 / 1/230.3 / 1/212.6 / 1/197.8**
- base: **約36.1G/50枚**
- netIncrease: **ART約1.0枚/G、ボーナス込み約1.4枚/G**
- basicPayout: **BIG約180枚 / REG約40枚 / ART 1セット50G**

### No.1817 resetBehavior v0.7
- 通常天井: ボーナス・ART間999G+α → 無限ART「喰霊CHANCE・夢幻」。
- 設定変更: 有利区間/天井G/内部状態RESET（二次解析）。天井短縮なし。
- 据え置き: 前日天井G数引継ぎ SECONDARY_SUPPORTED。
- 純電断: 天井G/内部状態/有利区間の本機固有三者直接比較はUNVERIFIED_AFTER_RESEARCH。
- 設定変更時/有利区間開始時の高確以上率: **25.4 / 27.0 / 28.9 / 30.5 / 32.4 / 34.4%**。
- 高確内訳: **25.0 / 26.6 / 28.1 / 29.7 / 31.3 / 32.8%**。
- 超高確内訳: **0.4 / 0.4 / 0.8 / 0.8 / 1.2 / 1.6%**。
- 前日深いハマリ台は設定変更で天井Gが0へ戻るため、据え置きに比べ客側の朝一天井期待値を消す方向。
- ガックン/即時ランプ判別は多語再探索後もUNVERIFIED。

## 2026-08-17 canonical queue — CLOSED 1/1
1. ~~Lパチスロ 喰霊-零-Re — No.1817 DONE~~

## 次境界 2026-09-07 — OPEN / 要再監査
主要全国解析カレンダーで以下6機を確認:
1. **スマスロ リコリス・リコイル — No.1818 NEXT**
2. Lパチスロ 彼女、お借りします
3. L青春ブタ野郎はバニーガール先輩の夢を見ない
4. モグモグ風林火山 大海戦の巻
5. パチスロ 見える子ちゃん
6. スマスロ タコスロ

### 9/7境界注意
- 一部ホール導入履歴には `LB 異世界かるてっと KR`、`L/SHAMAN KING/SS` 等も9/7新規導入として現れる。既存機の地域導入/増台/別型式/新スペックかを次回必ず検証し、主要6機だけで早期CLOSEDしない。
- PB、別型式、地域先行/遅延、段階導入も再監査する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1816:
- HAZUSE: https://hazuse.com/machine/pachislot/SX0139/
- 遊技日本検定: https://yugi-nippon.com/pachinko-new-machine/post-76177/
- 遊技日本新機種報道転載: https://pachinkolist.com/archives/63391424.html
- ラクパチ: https://www.rakupachi.com/blog/triple-crown-x300-spec
- イチカツ: https://ichikatsu.com/newslot2026/
- しんのすけちゃんねる: https://shinnosuke-ch.com/2026%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%B0%8E%E5%85%A5%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7/
- P-WORLD差分整理: https://note.com/yoshiki072/n/n3d34ad314443
- 情報島＋全国カレンダー: https://p-johojima.jp/machine_spec/post-2074/
- 一撃全国カレンダー: https://1geki.jp/newmachinecalender/202608/
No.1817:
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/33511/greenbelt
- G-net: https://g-net-ps.com/info/s0281/
- 情報島＋: https://p-johojima.jp/machine_spec/post-32625/
- ジャグラーズネット: https://jugglersnet.com/chumoku/garei-zero-re
- 6確: https://www.kaku6.jp/slot/garei0re/
- 必勝本: https://hisshobon.com/machineinfo/147685/
- スロベース: https://slobase.jp/articles/garei-zero-re-reset
- イチカツ: https://ichikatsu.com/gareizero-re/
- 回胴に散る。: https://kaidou.repop.jp/archives/14264

## 次回再開地点
- 最新mainを再同期しNo.1816/1817と本handoffを確認。
- **No.1818候補 `スマスロ リコリス・リコイル` — 2026-09-07** から継続。
- 9/7主要6機を処理しつつ、LB異世界かるてっとKR、L/SHAMAN KING/SS等の9/7ホール導入記録を型式単位で監査し、既存/新規/別スペックを確定してから境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
