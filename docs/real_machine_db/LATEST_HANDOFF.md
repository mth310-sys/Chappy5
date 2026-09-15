更新日: 2026-09-15

## 現在地点
- recordCount: **1818**
- latestRecordAdded: **スマスロ リコリス・リコイル — No.1818**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_smart-slot-lycoris-recoil.md`
- chronologicalFrontier: **2026-09-07 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_GROUP_OPEN_1_OF_6_PRIMARY_CANONICAL_PROCESSED_BOUNDARY_REAUDIT_PENDING**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1817実レコードを再同期。
- INDEXは旧スナップショット（19件）のためREADME/LATEST_HANDOFF規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1818 `スマスロ リコリス・リコイル` を追加。
- サミー発表系業界記事、G-net販売資料、P-WORLD、6確、ジャグラーズネット、イチカツ、スロベースを横断し、性能コアとresetBehavior v0.7を同時収集。

## No.1818 — スマスロ リコリス・リコイル
- path: `docs/real_machine_db/machines/2026-09-07_smart-slot-lycoris-recoil.md`
- manufacturer: **銀座製造 / サミー販売・ブランド**
- formalModel: **Lスマスロ リコリス・リコイルKX**
- releaseDate: **2026-09-07**
- system: **スマスロ AT（疑似ボーナス連打型）**
- payoutRate: **97.9 / 98.9 / 101.3 / 106.1 / 110.4 / 114.6%**
- CZ: **1/198.7 / 1/196.9 / 1/191.3 / 1/183.3 / 1/175.9 / 1/169.4**
- AT: **1/328.8 / 1/323.4 / 1/312.1 / 1/288.3 / 1/271.6 / 1/256.7**
- base: **約31.8G/50枚**
- netIncrease: **ボーナス中 約8.4枚/G**
- basicPayout: **プロローグ100枚 / リコリスラッシュ20=20G+α / ラッシュ50=50G+α＋ST10G+α / TY約550枚（補助値）**

### No.1818 resetBehavior v0.7
- 通常天井: **AT間最大850G+α / CZ間最大600G+α**。
- 設定変更: 有利区間・天井・内部状態RESET。**AT間最大600G / CZ間最大250G**へ短縮。
- 設定変更後は液晶0G表示だが、内部通常ゲーム数をランダム加算して開始する解析が複数一致。具体振り分けはUNVERIFIED。
- 純電源OFF→ON: 有利区間・AT間/CZ間天井・内部状態を引継ぎ。液晶は0G表示でも内部カウント引継ぎとする機種固有解析を確認。
- 据え置き: 純電断直接比較と朝一解析から天井/内部状態CARRY_OVER_SUPPORTED。独立高優先三者比較は未固定。
- 朝一恩恵: AT/CZ二重天井短縮＋内部G加算。設定1でもリセット時出玉率100%超とする複数解析あり。ただしメーカー公表機械割ではないため通常97.9%とは定義分離。
- 変更判別: 液晶G数は変更/電断とも0G表示とされ単独判別不可。短縮天井は事後材料だがAT駆け抜け等でも同短縮が発生するため履歴条件なしで確定材料にしない。
- 本機固有ガックン条件/発生率、即時固定ランプ判別、設定変更時の名称付きモード振り分け/具体率、内部状態具体率は多語再探索後もUNVERIFIED_AFTER_RESEARCH。
- 重大な性能CONFLICTなし。

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

## 2026-09-07 primary canonical queue — OPEN 1/6
1. ~~スマスロ リコリス・リコイル — No.1818 DONE~~
2. **Lパチスロ 彼女、お借りします — No.1819 NEXT**
3. L青春ブタ野郎はバニーガール先輩の夢を見ない
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
No.1818:
- 情報島＋ / サミー発表: https://p-johojima.jp/new_machine/post-32965/
- G-net: https://g-net-ps.com/info/s0290/
- P-WORLD: https://www.p-world.co.jp/machine/database/10503
- 6確: https://www.kaku6.jp/slot/lycoreco/
- ジャグラーズネット: https://jugglersnet.com/chumoku/rikoriko
- イチカツ: https://ichikatsu.com/lycorisrecoil/
- スロベース reset: https://slobase.jp/articles/lycoris-recoil-reset
- スロベース machine: https://slobase.jp/machines/lycoris-recoil

## 次回再開地点
- 最新mainを再同期しNo.1818実レコードと本handoffを確認。
- **No.1819候補 `Lパチスロ 彼女、お借りします` — 2026-09-07** から同じキューを継続。
- 主要6機を順次処理しつつ、LB異世界かるてっとKR、L/SHAMAN KING/SS等の9/7ホール導入記録を型式単位で監査し、既存/新規/別スペックを確定してから境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
