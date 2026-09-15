更新日: 2026-09-15

## 現在地点
- recordCount: **1822**
- latestRecordAdded: **パチスロ 見える子ちゃん — No.1822**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_mieruko-chan.md`
- chronologicalFrontier: **2026-09-07 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_GROUP_OPEN_5_OF_6_PRIMARY_CANONICAL_PROCESSED_BOUNDARY_REAUDIT_PENDING**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1821実レコードを再同期。
- INDEXは旧スナップショットのため `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1822 `パチスロ 見える子ちゃん` を追加。
- 情報島+、G-net、遊技日本、6確、必勝本、ちょんぼりすた、スロベース、イチカツ、ジャグラーズネット、すろぱちくえすと、なな徹を横断し、性能コアとresetBehavior v0.7を収集。

## No.1822 — パチスロ 見える子ちゃん
- path: `docs/real_machine_db/machines/2026-09-07_mieruko-chan.md`
- manufacturer: **ピーセカンド製造 / パイオニア**
- formalModel: **L見える子ちゃんSC**
- releaseDate: **2026-09-07**
- payoutRate: **97.8 / 98.8 / 101.3 / 105.1 / 110.2 / 114.9%**
- BIG合算: **1/266.5 / 1/261.9 / 1/253.4 / 1/243.1 / 1/234.2 / 1/227.1**
- REG: **1/275.1 / 1/270.6 / 1/261.1 / 1/250.0 / 1/240.4 / 1/233.6**
- ボーナス合算: **1/135.4 / 1/133.1 / 1/128.6 / 1/123.3 / 1/118.6 / 1/115.1**
- base: **約30.8G/50枚**（必勝本約30.0Gとの軽微競合を分離保持）
- netIncrease: **疑似ボーナス約6.7枚/G**

### No.1822 resetBehavior v0.7
- 通常ボーナス天井900G+α、設定変更後は600G+αへ300G短縮。
- 設定変更時は有利区間・天井・内部状態RESET、電源OFF→ONは各CARRY_OVERとする複数の機種固有比較あり。
- 設定変更/電源OFF→ONとも液晶ゲーム数表示は0G。純電断では内部ゲーム数を引き継ぐため液晶0Gだけでは変更判別不可。
- 据え置き単独は引継ぎ方向だが高優先三者直接比較未固定のためSECONDARY_SUPPORTED_NOT_DIRECTLY_FIXED。
- 設定変更時の内部ゲーム数加算の可能性は資料に示唆があるが確定値なし。推測で固定せずUNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン条件/発生率、即時固定ランプ、開始ステージ三者比較、内部状態具体振り分けはUNVERIFIED_AFTER_RESEARCH。
- 有利区間リセット後の祈願チャレンジ恩恵は設定変更時を除くため朝一恩恵に混入させない。

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

## 2026-09-07 primary canonical queue — OPEN 5/6
1. ~~スマスロ リコリス・リコイル — No.1818 DONE~~
2. ~~Lパチスロ 彼女、お借りします — No.1819 DONE~~
3. ~~L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820 DONE~~
4. ~~モグモグ風林火山 大海戦の巻 — No.1821 DONE~~
5. ~~パチスロ 見える子ちゃん — No.1822 DONE~~
6. **スマスロ タコスロ — No.1823 NEXT**

### 9/7境界注意
- 主要6機完了後も、LB異世界かるてっとKR、L/SHAMAN KING/SS等の9/7ホール導入記録を型式単位で監査する。
- 既存機の地域導入/増台/別型式/新スペック、PB、段階導入を区別してからCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1822:
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-32349/
- 情報島+ 新機種: https://p-johojima.jp/new_machine/post-32821/
- G-net: https://g-net-ps.com/info/s0289/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-77392/
- 6確: https://www.kaku6.jp/slot/mierukochan/
- 必勝本: https://hisshobon.com/machineinfo/147074/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/261153/
- スロベース: https://slobase.jp/machines/mieruko-chan
- スロベース reset: https://slobase.jp/articles/mieruko-chan-reset
- イチカツ: https://ichikatsu.com/mierukochan/
- ジャグラーズネット: https://jugglersnet.com/chumoku/mierukochan
- すろぱちくえすと: https://www.slopachi-quest.com/article/mierukochan-tenjou/
- なな徹: https://nana-press.com/kaiseki/machine/1192/

## 次回再開地点
- 最新mainを再同期しNo.1822実レコードと本handoffを確認。
- **No.1823候補 `スマスロ タコスロ` — 2026-09-07** から継続。
- 主要6機完了後に9/7境界を型式単位で再監査し、LB異世界かるてっとKR、L/SHAMAN KING/SS等の記録を既存機地域導入/増台/別型式/新スペックに分類してからCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
