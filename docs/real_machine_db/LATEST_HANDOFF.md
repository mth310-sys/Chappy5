更新日: 2026-09-15

## 現在地点
- recordCount: **1819**
- latestRecordAdded: **Lパチスロ 彼女、お借りします — No.1819**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_l-pachislot-kanojo-okarishimasu.md`
- chronologicalFrontier: **2026-09-07 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_GROUP_OPEN_2_OF_6_PRIMARY_CANONICAL_PROCESSED_BOUNDARY_REAUDIT_PENDING**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1818実レコードを再同期。
- INDEXは旧スナップショット（19件）のためREADME/LATEST_HANDOFF規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1819 `Lパチスロ 彼女、お借りします` を追加。
- 情報島＋検定、P-WORLD/遊技通信、必勝本、1geki、6確、ちょんぼりすた、イチカツ、スロベース、SANKYO開発こぼれ話を横断し、性能コアとresetBehavior v0.7を同時収集。

## No.1819 — Lパチスロ 彼女、お借りします
- path: `docs/real_machine_db/machines/2026-09-07_l-pachislot-kanojo-okarishimasu.md`
- manufacturer: **ビスティ製造 / SANKYO販売・ブランド**
- formalModel: **Lレンタル彼女bK**
- releaseDate: **2026-09-07**
- system: **スマスロ AT（疑似ボーナス＋1G連抽選型）**
- payoutRate: **97.7 / 98.7 / 101.0 / 105.5 / 110.4 / 114.9%**
- CZ: **1/172 / 1/169 / 1/164 / 1/154 / 1/151 / 1/149**
- bonusInitialHit: **1/269 / 1/263 / 1/254 / 1/235 / 1/231 / 1/226**
- base: **約31.0G/50枚（設定1）**
- netIncrease: **約5.0枚/G**
- basicPayout: **かのかりBONUS約150枚 / REG約70枚 / ななかりDREAM約550枚 / ユメカノモード66G・期待度約58%**

### No.1819 resetBehavior v0.7
- 必勝本の機種固有直接比較で設定変更時は**天井G数RESET / モード再抽選 / ポイント再抽選**、電源OFF→ONは**天井G数・モード・ポイント引継ぎ**。
- ハートメーターは変更/電断とも見た目シャッター状態だが、電断では内部値を引き継ぐ。
- 通常天井はかのかりBONUS後最大1000G、REG後最大800G、設定変更後は最大600Gへ短縮。1geki/6確等では各+α表記。
- 据え置きは純電断直接比較から天井/モード/ポイント/内部ハートメーターCARRY_OVER_SUPPORTED。独立三者比較は未固定。
- 有利区間は設定変更RESET / 電断CARRY_OVERとする機種固有解析を確認したが、必勝本直接比較表に独立欄はないためANALYSIS_HIGH扱い。
- 朝一公開数値: イチカツ解析で設定変更0Gから**出玉率104.5%**。メーカー公表機械割ではないため定義分離。
- 変更判別: 開始ステージは必勝本で現在調査中、スロベースでも有効な即時判別は未判明。600G短縮天井は事後材料。
- 本機固有ガックン条件/発生率、即時固定ランプ、設定変更時CZモードA/B/C具体振り分け、独立内部状態具体率は多語再探索後もUNVERIFIED_AFTER_RESEARCH。
- 重大な性能CONFLICTなし。天井の+α有無と天井恩恵の表現にSOURCE_WORDING_DIFFERENCEあり。

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

## 2026-09-07 primary canonical queue — OPEN 2/6
1. ~~スマスロ リコリス・リコイル — No.1818 DONE~~
2. ~~Lパチスロ 彼女、お借りします — No.1819 DONE~~
3. **L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820 NEXT**
4. モグモグ風林火山 大海戦の巻
5. パチスロ 見える子ちゃん
6. スマスロ タコスロ

### 9/7境界注意
- 一部ホール導入履歴には `LB 異世界かるてっと KR`、`L/SHAMAN KING/SS` 等も9/7新規導入として現れる。
- 主要6機を処理しただけでCLOSEDにせず、既存機の地域導入/増台/別型式/新スペックかを型式単位で検証する。
- PB、別型式、地域先行/遅延、段階導入も再監査する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1819:
- 情報島＋ / 検定: https://p-johojima.jp/new_machine/post-32947/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/34055/yugitsushin
- 必勝本 basic: https://hisshobon.com/machineinfo/138896/
- 必勝本 reset: https://hisshobon.com/machineinfo/143048/
- 必勝本 targeting: https://hisshobon.com/machineinfo/143129/
- 1geki reset: https://1geki.jp/slot/l_kanokari/3/
- 1geki zones: https://1geki.jp/slot/l_kanokari/43/
- 6確: https://www.kaku6.jp/slot/kanokari/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/263079/
- イチカツ: https://ichikatsu.com/kanokari/
- スロベース reset: https://slobase.jp/articles/kanokari-reset
- SANKYO開発こぼれ話: https://www.secret-story.sankyo-fever.jp/information

## 次回再開地点
- 最新mainを再同期しNo.1819実レコードと本handoffを確認。
- **No.1820候補 `L青春ブタ野郎はバニーガール先輩の夢を見ない` — 2026-09-07** から同じキューを継続。
- 主要6機を順次処理しつつ、LB異世界かるてっとKR、L/SHAMAN KING/SS等の9/7ホール導入記録を型式単位で監査し、既存/新規/別スペックを確定してから境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
