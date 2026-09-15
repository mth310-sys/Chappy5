更新日: 2026-09-15

## 現在地点
- recordCount: **1821**
- latestRecordAdded: **モグモグ風林火山 大海戦の巻 — No.1821**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_mogumogu-furinkazan-daikaisen.md`
- chronologicalFrontier: **2026-09-07 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_GROUP_OPEN_4_OF_6_PRIMARY_CANONICAL_PROCESSED_BOUNDARY_REAUDIT_PENDING**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1820実レコードを再同期。
- INDEXは旧スナップショットのため `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1821 `モグモグ風林火山 大海戦の巻` を追加。
- ネット公式発表、遊技通信/P-WORLD、情報島+、HAZUSE、必勝本、1geki、ちょんぼりすた、スロベース、ジャグラーズネット、イチカツ、6確系を横断し、性能コアとresetBehavior v0.7を収集。

## No.1821 — モグモグ風林火山 大海戦の巻
- path: `docs/real_machine_db/machines/2026-09-07_mogumogu-furinkazan-daikaisen.md`
- manufacturer: **オーゼキ製造 / ネット**
- formalModel: **Lモグモグ風林火山 大海戦の巻ZB**
- approvalNumber: **531225**
- releaseDate: **2026-09-07**
- payoutRate: **97.5 / 98.8 / 100.3 / 103.7 / 107.3 / 111.5%**
- CZ: **1/324 / 1/317 / 1/310 / 1/299 / 1/292 / 1/287**
- AT初当り: **1/431 / 1/414 / 1/399 / 1/378 / 1/364 / 1/358**
- base: **約32.0G/50枚**
- netIncrease: **通常AT約3.1枚/G / 上位AT約7.4枚/G**

### No.1821 resetBehavior v0.7
- 設定変更時はCZ間天井699G+α→299G+α、CZスルー天井7スルー後8回目→3スルー後4回目、周期天井最大6周期→最大3周期へ短縮。
- 設定変更時モードは通常B66.4% / 天国33.6%で通常A非選択。
- ちょんぼりすた機種固有比較で設定変更時は有利区間・天井・内部モード・内部状態RESET、電源OFF→ONは各CARRY_OVER。
- 据え置き単独は引継ぎ方向だが高優先三者直接比較未固定のためSECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED。
- 周期ポイント/CZスルー回数の純電断個別直接欄、内部状態具体振り分け、ガックン条件/発生率、即時固定ランプ、開始ステージ三者比較はUNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値としてイチカツ独自期待値計算の設定変更0G機械割110.4%・時給2742円を非メーカー公表値として分離保存。

## 直前境界
### 2026-08-03 — CLOSED 8/8
- L邪神ちゃんドロップキック — No.1809
- スマスロ やじきた道中記参る！ — No.1810
- Lすーぱぁびん娘 — No.1811
- スマスロ とんでもスキルで異世界放浪メシ — No.1812
- スマスロ とある魔術の禁書目録2 — No.1813
- スマスロ ストリートファイター6 — No.1814
- スロット ワールドダイスター — No.1815
- LBトリプルクラウンX-300 — No.1816

### 2026-08-17 — CLOSED 1/1
- Lパチスロ 喰霊-零-Re — No.1817

## 2026-09-07 primary canonical queue — OPEN 4/6
1. ~~スマスロ リコリス・リコイル — No.1818 DONE~~
2. ~~Lパチスロ 彼女、お借りします — No.1819 DONE~~
3. ~~L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820 DONE~~
4. ~~モグモグ風林火山 大海戦の巻 — No.1821 DONE~~
5. **パチスロ 見える子ちゃん — No.1822 NEXT**
6. スマスロ タコスロ

### 9/7境界注意
- 主要6機完了後も、LB異世界かるてっとKR、L/SHAMAN KING/SS等の9/7ホール導入記録を型式単位で監査する。
- 既存機の地域導入/増台/別型式/新スペック、PB、段階導入を区別してからCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1821:
- ネット公式発表転載: https://www.dreamnews.jp/press/0000352464
- ネット全国導入告知: https://www.dreamnews.jp/press/0000359251
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33926/yugitsushin
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-34398/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0134/
- 必勝本 AT: https://hisshobon.com/machineinfo/142785/
- 必勝本 CZ: https://hisshobon.com/machineinfo/142779/
- 1geki: https://1geki.jp/slot/l_mogdai/43/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/263515/
- スロベース: https://slobase.jp/machines/mogumogu-furinkazan
- スロベース reset: https://slobase.jp/articles/mogumogu-furinkazan-reset
- ジャグラーズネット: https://jugglersnet.com/chumoku/mogumogu-hurinkazan
- イチカツ: https://ichikatsu.com/mogdai/
- 6確系: https://www.kaku6.jp/slot/mogdai/

## 次回再開地点
- 最新mainを再同期しNo.1821実レコードと本handoffを確認。
- **No.1822候補 `パチスロ 見える子ちゃん` — 2026-09-07** から継続。
- 続いて `スマスロ タコスロ` を処理し、主要6機完了後に9/7境界を型式単位で再監査する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
