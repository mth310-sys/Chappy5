更新日: 2026-09-09

## 現在地点
- recordCount: **1128**
- latestRecordAdded: **ぱちスロAKB48 勝利の女神**（京楽産業.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_akb48-shouri-no-megami.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **ぱちスロAKB48 勝利の女神 — No.1128**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1127「パチスロ北斗の拳 新伝説創造」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時mainは **1127件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN**。
- GitHubコード検索で「ぱちスロAKB48 勝利の女神」の既存レコードなしを確認し、No.1128として新規登録。
- 京楽産業.のリリースを扱うPiDEA X、K-Navi、パチビー、DMM、P-WORLD等で導入 **2017-09-04** を照合。
- 型式名は **パチスロAKB48勝利の女神G**。検定番号は資料系統と検索語を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コアは機械割 **97.5 / 98.1 / 100.8 / 103.9 / 107.2 / 111.4%**、ART初当たり **1/395.0 / 386.4 / 358.4 / 346.8 / 317.7 / 293.6**、CZ「48CHANCE」 **1/116.6 / 114.1 / 105.2 / 101.8 / 92.8 / 85.4**、ベース **約46G/50枚**、ART純増 **約2.0枚/G**。
- ART「勝利の女神」は **1セット30G+総選挙5G** のセット継続型。
- ART間天井は **999G到達後/999Gを跨いだCZでART確定**。CZ間天井は最大 **200G**、50G/100G/200Gの規定G数候補あり。
- 設定変更時は **ART間天井RESET / 内部状態RESET**。純電源OFF→ONは **天井CARRYOVER / 内部状態CARRYOVER** の直接比較表を確認。
- 設定変更でART間999G自体が短縮される公開契約は確認できず **NO_CONFIRMED_ART_CEILING_SHORTENING**。
- 当時の新台初日実践値では設定変更後 **71～80G / 121～140G** の当選が目立ち、CZ間50G/100Gが選ばれやすい可能性が指摘されている。ただし確定解析の振り分けではないため **OBSERVED/EMPIRICAL** として分離保存。
- ガックンは当時解析で **判別不可**。開始ステージは実戦上AKB/SKE/NMB/HKTが確認されるが確定変更判別には使用不可。
- 据え置きと明記した独立操作契約、設定変更時CZ間50/100/200G正確振り分け、設定変更時低確/高確の具体的初期振り分け、純電断時の開始ステージ契約は十分な再探索後 **UNVERIFIED**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1128 — ぱちスロAKB48 勝利の女神
- manufacturer: **京楽産業.（京楽）**
- releaseDate: **2017-09-04**
- formalModelName: **パチスロAKB48勝利の女神G**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / ART / CZ経由・セット継続型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **ART間天井RESET / 内部状態RESET / 朝一CZ間50G・100G優遇を示す実践値観測あり**。
- pure power OFF→ON: **天井・内部状態CARRYOVER**。
- normal ART ceiling: **999G到達後/跨ぎCZでART確定**。
- normal CZ interval ceiling: **最大200G、50/100/200G候補**。
- reset ART ceiling shortening: **NONE_CONFIRMED**。
- reset observed hot ranges: **71～80G / 121～140G**（実践値、確定振り分けではない）。
- reset detection: **ガックン判別不可 / 早いCZは非確定推測要素**。

## 2017-09-04群 — OPEN
登録済み:
1. **パチスロ北斗の拳 新伝説創造 — No.1127**
2. **ぱちスロAKB48 勝利の女神 — No.1128**

次候補:
1. **回胴性ミリオンアーサー**
2. **笑ゥせぇるすまん3**
3. **亜人**
4. **デビルマンχ**
5. **アメイジング・スパイダーマン**
6. **セイクリッドセブン**
7. **YASUDA7**
8. 資料によっては **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等も9/4表記があるため、地域導入/掲載定義差を横断監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1128を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1128を再取得。
2. **1128件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「回胴性ミリオンアーサー」No.1129候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. その後9/4群を全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1128 ぱちスロAKB48 勝利の女神
- PiDEA X 京楽リリース報道: https://www.pidea.jp/articles/%E7%B7%8F%E9%81%B8%E6%8C%99%E3%81%A7%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%92%E7%9B%AE%E6%8C%87%E3%81%9B%EF%BC%81%E3%80%8CAKB%E5%8B%9D%E5%88%A9%E3%81%AE%E5%A5%B3%E7%A5%9E%E3%80%8D%EF%BC%8F%E4%BA%AC%E6%A5%BD
- K-Navi: https://p-kn.com/slot/2844/
- P-WORLD: https://www.p-world.co.jp/machine/database/8451
- パチビー: https://www.pachibee.jp/machines/lecture/217080004
- DMMぱちタウン: https://p-town.dmm.com/machines/2974/recommend
- 期待値見える化 総合/天井: https://slotjin.com/zone/akb48-shouri/
- 期待値見える化 朝一リセット: https://slotjin.com/slot/akb48-shouri-reset/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/43867/
- すろぱちくえすと: https://www.slopachi-quest.com/article/akb48-goddess-of-victory/
- パチ＆スロ必勝本 天井: https://p.hisshobon.jp/machine/3009/1/66432
- 中一商事 型式名: https://www.nakaiti.com/html/sKyoraku009.html
