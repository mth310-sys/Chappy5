更新日: 2026-09-09

## 現在地点
- recordCount: **1054**
- latestRecordAdded: **パチスロ ビビッドレッド・オペレーション**（三洋物産）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-06_vividred-operation.md`
- chronologicalFrontier: **2017-03-06**
- frontierLatestMachine: **パチスロ ビビッドレッド・オペレーション — No.1054**
- schema: **resetBehavior v0.7**
- status: **2017-03-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1053実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりINDEXより新しい `LATEST_HANDOFF.md` を直近進捗正本として採用。
- 開始時mainは **1053件 / 2017-03-06群OPEN**。handoff指定の次カーソル、三洋物産 **「パチスロ ビビッドレッド・オペレーション」**をNo.1054として登録。
- 性能コア＋resetBehavior v0.7を同時収集。設定変更時のSTORY末尾再抽選と公開振り分け、純電源OFF→ON時のSTORY表示据え置きを保存。
- 当時の設定変更/電断比較資料でも天井・内部状態は「調査中」で、検索語・資料系統を変えた追加探索でも直接契約を固定できなかったため、一般論で埋めず `UNVERIFIED_AFTER_RESEARCH` を保持。
- 2017-03-06群はまだOPEN。未処理確認済みの **パチスロ ゼクスイグニッション**を次のNo.1055候補として継続する。

## No.1054 — パチスロ ビビッドレッド・オペレーション
- manufacturer: **三洋物産**
- releaseDate canonical: **2017-03-06**
- formalModelName: **ビビッドレッド・オペレーション／KE**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / セットストック型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT_CERT_UNVERIFIED_PAYOUT_CONFLICT**

### performanceCore
- 機械割: **97.3 / 98.6 / 100.2 / 103.9 / 107.6 / 110.5%**。
- BIG: **1/336.1 / 331.0 / 326.1 / 321.3 / 316.6 / 312.1**。
- REG: **1/337.8 / 332.7 / 327.7 / 322.8 / 318.1 / 313.6**。
- ART初当たり: **1/420 / 415 / 396 / 357 / 308 / 283**。
- 50枚ベース: **約32.0〜32.8G/50枚**。
- ART純増: **約1.2枚/G**。ボーナス込み掲載値は **約1.7枚/G**として定義分離。
- BIG約**154枚**、REG約**56枚**、ARTは**1セット30G**。

### resetBehavior v0.7
- 通常代表天井: **ボーナス間800G消化後、次回ボーナスでART**。
- 設定変更: **STORY末尾RESELECT**。天井進捗・内部状態は直接契約不足で `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: **STORY表示CARRYOVER**。天井進捗・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: 表示面は純電断比較を参考にできるが、天井進捗/内部状態の本機固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用固定短縮天井/高確スタート率/ART直撃優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時STORY末尾振り分け: **STORY1 25.0% / STORY2 25.0% / STORY3 25.0% / STORY4 12.5% / STORY5 12.5%**。
- STORY表示は内部LOW/HIGH/ULTRA HIGHと完全連動ではないため、上記数値を内部状態振り分けへ転用しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: 前日STORY把握時の朝一STORY変化は変更推測材料。ただし非決定的。実機検証では朝一ガックンは効きにくい/効かないように見えるため確定材料にはしない。

## dataQuality / conflicts
- exact導入日は複数解析で2017-03-06が一致。2017年1月の業界記事で三洋物産の新機種発表とA+ART構造を確認。
- formalModelNameは複数二次資料でKE表記が一致。検定番号は型式/6S/メーカー/検定DB等へ再探索したが直接固定できずUNVERIFIED。
- 機械割設定5は、ちょんぼりすた・すろぱちくえすとが **107.6%**で一致する一方、低品質転載集約に単独 **104.7%**があるため `CONFLICT_SETTING5_PAYOUT_107_6_MULTI_ANALYSIS_VS_104_7_LOW_QUALITY_AGGREGATION` を保持。平均せず107.6をcanonical。
- ART終了時には別条件の0G/800G特殊天井テーブルが存在するが、設定変更専用ではないためresetBehavior数値へ混ぜない。

## 2017-03-06群監査
- status: **OPEN**。
- 登録済み:
  - ドリスタせかんど — No.1053。
  - パチスロ ビビッドレッド・オペレーション — No.1054。
- 未処理確認済み候補:
  - **パチスロ ゼクスイグニッション**（オリンピア/平和系）— 2017年1月の業界発表と当時解析を確認済み。次回No.1055候補として処理。
- 3/06群は少なくともゼクスイグニッションが未処理のためCLOSED禁止。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1054を再取得。
2. **1054件 / chronologicalFrontier 2017-03-06 / 3/06群OPEN** を正本として継続。
3. 次の未処理本線は **オリンピア/平和系「パチスロ ゼクスイグニッション」**。No.1055候補として正式型式・検定番号・性能コア＋resetBehavior v0.7を収集する。
4. 登録後、3/06同日群をメーカー横断で再監査し、追加機がなければCLOSED。その後次の導入境界へ前進。
5. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1054 パチスロ ビビッドレッド・オペレーション
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/8983/greenbelt
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/31696/
- すろぱちくえすと: https://www.slopachi-quest.com/article/viviope/
- P-WORLD: https://www.p-world.co.jp/machine/database/8279
- ナカイチ: https://www.nakaiti.com/html/sSanyo097.html
- InitialP: https://initialp.cart.fc2.com/ca45/2560/

### 次候補 / 3月6日群
- グリーンべると/P-WORLD ゼクスイグニッション: https://news.p-world.co.jp/articles/8985/greenbelt
- すろぱちくえすと ゼクスイグニッション: https://www.slopachi-quest.com/article/zxignition/
