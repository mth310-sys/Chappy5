更新日: 2026-09-11

## 現在地点
- recordCount: **1356**
- latestRecordAdded: **ビッグシオ-30 — No.1356**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-05-18_big-sio-30.md`
- chronologicalFrontier: **2020-05-18**
- frontierLatestMachine: **ビッグシオ-30 — No.1356**
- schema: **resetBehavior v0.7**
- status: **2020-05-18_GROUP_OPEN_2_OF_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1355を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 会話上の旧地点No.1350ではなく、main上でNo.1355「ハイドラ-30」まで進行済みであることを確認し重複処理を回避。
- 2020-05-18群の2機目 **ビッグシオ-30** をNo.1356として追加。
- 性能コア＋resetBehavior v0.7を、正式型式・検定番号・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ゲーム数テーブル/内部状態/ガックン/有利区間/7セグを組み替えて再探索。
- 5/18群は **OPEN / 2 of 4 processed**。次は沖ドキ！2-30。

## No.1356 — ビッグシオ-30
- path: `docs/real_machine_db/machines/2020-05-18_big-sio-30.md`
- manufacturer: **パイオニア**
- formalModel: **SビッグシオSP-30**
- certificationNumber: **9S1516**
- releaseDate: **2020-05-18**
- generation/system: **6号機 / AT / 30Φ沖スロ / 完全告知 / 擬似ボーナス / ゲーム数テーブル**
- payoutRate: **98.0 / 99.5 / 101.5 / 103.5 / 105.5 / 108.0%**
- BIG: **1/209.4 / 197.6 / 183.1 / 169.8 / 157.9 / 144.7**
- REG: **1/928.3 / 917.2 / 824.6 / 795.8 / 729.7 / 699.1**
- BONUS合算: **1/170.9 / 162.6 / 149.8 / 139.9 / 129.8 / 119.9**
- base canonical: **約46.0G/50枚**
- base conflict: なな徹後年ページ **約50.0G/50枚**
- netIncrease: **約3.0枚/G**
- BIG: **60G / 約180枚**
- REG: **20G / 約60枚**
- 天井: **有利区間移行後999Gでボーナス**。必勝本は天井到達時BIG確定と記載。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_BASE_CONFLICT**

### resetBehavior v0.7 — No.1356
- 設定変更: **天井G / 内部状態 / 有利区間 RESET**。
- 据え置き・純電断: **天井G / 内部状態 / 有利区間 CARRY_OVER**。
- リセット専用の一律短縮天井は確認なし。最大999G。
- 通常/高確/超高確の設定変更専用初期振り分け、設定変更専用ゲーム数テーブル振り分けは十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 通常時は有利区間ランプ消灯タイプのため、朝一ランプ消灯だけではリセット判別不可。
- 単一攻略資料に7セグ表示とデータ機の1G差を使う判別法があるが、高信頼複数照合がないため `ANALYSIS_SINGLE_CLUE` として保存。
- 本機固有ガックン条件/発生率は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 一般公開値としてボーナス終了後128G以内のボーナス期待度は全設定共通40%超。これは設定変更専用値ではない。
- 単一攻略資料はリセット後112G以内約40%を朝一恩恵とするが、「ボーナス終了後と同様と思われる」という推定を含むため専用確定値にはしない。

## conflicts / QA notes — No.1356
- 50枚ベースは当時系複数資料 **約46.0G** と、なな徹後年ページ **約50.0G** が競合。平均化せず46.0Gをcanonical、50.0GをCONFLICT保持。
- 朝一短期当選は、高信頼一般値「ボーナス後128G以内40%超」と単一朝一資料「リセット後112G以内約40%」を別定義で保持。

## 2020-05-18群監査
1. ハイドラ-30 — **No.1355 / 処理済み**
2. ビッグシオ-30 — **No.1356 / 処理済み**
3. 沖ドキ！2-30 — **未処理 / No.1357候補**
4. SOZ1-01 — **未処理**
- K-Navi等の2020年5月導入カレンダーで上記4機が5/18群として確認済み。
- 群判定: **OPEN_2_OF_4_PROCESSED**。
- 次回は全メーカー・別型式・別スペック・PB・地域差・延期機も再監査しながらこの順序を継続する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 本線を止めず、余力時に既存性能コアをやり直さずresetBehaviorのみv0.7基準で順次補完する。

## 次回本線の再開地点
- 最新main再同期後、**2020-05-18群の3機目「沖ドキ！2-30」＝No.1357候補**から再開。
- その後 **SOZ1-01**。
- 4機処理後、5/18同日全メーカー・別型式・PB・地域差・延期機を再監査してCLOSED可否を判定する。

## 主要出典 — 取得日 2026-09-11
### No.1356 ビッグシオ-30
- パイオニア公式: https://www.slot-pioneer.co.jp/product/big_sio2020/
- P-WORLD業界ニュース / 遊技通信: https://news.p-world.co.jp/articles/12831/yugitsushin
- PiDEA X: https://www.pidea.jp/articles/1589327303
- HAZUSE: https://hazuse.com/machine/pachislot/9S1516/
- パチビー: https://www.pachibee.jp/machines/index/220040004
- 1geki TOP: https://1geki.jp/slot/s_bigsio30/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_bigsio30/3/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/106144/
- なな徹 TOP: https://nana-press.com/kaiseki/machine/54/
- なな徹 天井: https://nana-press.com/kaiseki/machine/54/974/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/130/c.php
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/3490/1/76944
- パチ＆スロ必勝本 通常時解説: https://p.hisshobon.jp/machine/3490/1/77995
- 2-9伝説: https://2-9densetsu.com/bigsio30/
- スロパチクエスト: https://www.slopachi-quest.com/article/bigsio-tennjou/
