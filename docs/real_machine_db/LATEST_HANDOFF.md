更新日: 2026-09-10

## 現在地点
- recordCount: **1148**
- latestRecordAdded: **紅き魂は桜の如く**（ベルコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_kurenai-tamashii-wa-sakura-no-gotoku.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **紅き魂は桜の如く — No.1148**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1147「パチスロ イースⅠ&Ⅱ」を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1147件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「紅き魂は桜の如く」** を重複検索し、performance core + resetBehavior v0.7を収集して **No.1148** としてmainへ保存。

## No.1148 — 紅き魂は桜の如く
- manufacturer: **ベルコ**
- releaseDate: **2017-09-19**
- formalModelName: **クレナイザクラ／A7**
- certificationNumber: **7S0823**
- generation/system: **5号機（5.5号機世代） / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### 性能コア
- 機械割: **97.9 / 99.2 / 101.6 / 104.8 / 108.4 / 112.3%**。
- BIG: **全設定1/2048.0**。
- CT: **1/111.5 / 109.6 / 108.1 / 106.4 / 105.0 / 102.9**。
- ART初当たり: **1/420.2 / 410.8 / 377.2 / 336.6(canonical) / 302.7 / 278.3**。
- 設定4 ARTのみ、ベルコ公式/PiDEA X/スロパチネット **1/336.6** vs すろぱちくえすと/ちょんぼりすた **1/336.8**。平均せずCONFLICT保持し公式値をcanonical。
- ベース: **約32G/50枚**。
- BIG: **192枚**。
- ART「紅RUSH」: **1セット50G+α / ボーナス込み純増約2.0枚/G**。
- 通常天井: **ボーナス・CT・ART間500G → ART**。CZは **5回連続失敗 → 6回目CZでART**。

### resetBehavior v0.7
- settingChange: **ゲーム数天井RESET / 25%で紅テープモード / 学校・教室ステージ開始**。
- stay setting: **ゲーム数天井CARRYOVER / 学校ステージ**。内部状態の独立した据え置き契約は未固定。
- pure power OFF→ON: **ゲーム数天井CARRYOVER / 内部状態CARRYOVER / 教室ステージ**。
- reset ceiling: **500G**。通常天井も500Gで、設定変更専用短縮は **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset mode/state numeric: **紅テープモード25%**。同モードはCZ/ART期待度約50%。残り75%の低確/高確内訳は推測しない。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- reset detection: 開始ステージは設定変更/据え置き・電断とも学校系のため単独判別不可。朝一紅テープモードはリセット可能性UPだが確定ではない。ガックンはベルコ他機種由来の当時推測で **POSSIBLE_NOT_DETERMINISTIC**。
- CZ5スルー天井カウンタの設定変更/据え置き/純電断別処理は、検索語・型式・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。個別導入日CONFLICTは各レコード保持。

## 2017-09-19群 — OPEN
登録済み No.1135〜No.1148。今回 **紅き魂は桜の如く No.1148** を追加。

### 同日横断監査・未処理候補
- **乱嵐エイサーver.100 — No.1149候補**。K-Navi、すろぱちくえすと、ちょんぼりすたが **2017-09-19** で一致。オーイズミ製ノーマル完全告知。P-WORLDでBIG約300枚/REG約108枚、すろぱちくえすとはREG約104枚としており基本獲得枚数に差があるため次回CONFLICT監査する。
- 先行性能: BIG **1/282.5→1/249.2**、REG **1/458.3→1/360.1**、合算 **1/174.8→1/147.3**、設定1機械割 **100.0%**、設定6 **108.0%**。K-Naviの設定2機械割が104.2%とする孤立値に対し、すろぱちくえすとは101.2%のため次回原資料/別ソースで再監査。
- 型式候補は検定資料の **ランランエイサー2/CX**。商品名「乱嵐エイサーver.100」と型式名の対応を次回固定する。
- `闘え!サラリーマン` — 一部当時一覧で2017-09-19表記があるため、同日群CLOSED前に導入日・型式・独立発売有無を再監査する。
- 上記処理後も全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査し、漏れがなければCLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1148を再取得。
2. **1148件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「乱嵐エイサーver.100」— No.1149候補**。商品名・型式 `ランランエイサー2/CX` の対応を固定し、性能値の競合を再監査してperformance core + resetBehavior v0.7を収集。
4. 続いて `闘え!サラリーマン` の9/19導入可否を再監査。
5. 2017-09-19同日全メーカー監査を継続し、追加漏れがなければCLOSED判定して次導入日群へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1148 紅き魂は桜の如く
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/kurenaizakura/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%B4%85%E3%81%8D%E9%AD%82%E3%81%AF%E6%A1%9C%E3%81%AE%E5%A6%82%E3%81%8F%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- P-WORLD: https://www.p-world.co.jp/machine/database/8475
- パチマガスロマガ検定情報: https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=090&tac_cd=00044201&type=1
- スロパチネット: https://slopachi-net.com/kurenaizakura
- すろぱちくえすと: https://www.slopachi-quest.com/article/akakitamashiihasakuranogotoku/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/44474/

### 次候補 乱嵐エイサーver.100 先行監査
- K-Navi: https://p-kn.com/slot/2878/
- P-WORLD: https://www.p-world.co.jp/machine/database/8486
- すろぱちくえすと: https://www.slopachi-quest.com/article/ranran-eisa-100/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/46606/
