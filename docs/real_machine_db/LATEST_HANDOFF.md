更新日: 2026-09-14

## 現在地点
- recordCount: **1680**
- latestRecordAdded: **トリプルクラウンフォーユー — No.1680**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-07_triple-crown-for-you.md`
- chronologicalFrontier: **2024-10-07**
- schema: **resetBehavior v0.7**
- status: **2024-10-07_GROUP_CLOSED_5_OF_5_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1679を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1679 `L 真・一騎当千` の次の未処理候補 `トリプルクラウンフォーユー` の地域先行/段階流通監査を完了。
- 本DB正本は期間内の全パチスロ機種を原則収集対象としており、全国一斉導入をcanonical条件としていない。HAZUSE/パチビーは2024-10-07導入、パチマガスロマガ/ぱちんこキュレーションは `2024-10-07（沖縄県）` と明記。日付・型式・メーカーが複数資料で一致するため、沖縄地域導入の実在機としてNo.1680に採番。
- 型式 `SトリプルクラウンX2-30`、検定番号 `4S0038`、清龍ゲームジャパン、30Φ完全告知ノーマルを確認。遊技日本/P-WORLDの検定通過報道も一致。
- 設定1〜6の機械割は 96.84 / 98.82 / 100.46 / 103.10 / 105.50 / 108.02%。BIGは 1/287.44 / 1/273.07 / 1/262.14 / 1/252.06 / 1/242.73 / 1/238.31、REGは 1/496.48 / 1/474.90 / 1/458.29 / 1/392.43 / 1/358.12 / 1/309.13、合算は 1/182.04 / 1/173.38 / 1/166.76 / 1/153.48 / 1/144.67 / 1/134.57。
- BIG最大252枚、REG最大98枚。天井非搭載。
- 50枚ベースは本機に明確に紐づく高信頼値を固定できず `UNVERIFIED_AFTER_RESEARCH`。`けんのスロットシミュレーション` の本機タイトルページに約43.5G/50枚があるが、同ページの機械割・BIG/REGも本機の複数資料と大幅に不一致で旧シリーズ値との混入が疑われるため `CONFLICT_SOURCE_CONTENT_MISMATCH` として保持し、baseには採用しない。
- resetBehavior v0.7: 天井/規定G/CZ/ATモードはノーマル機の公開ゲーム性上NOT_APPLICABLE。設定変更専用の短縮天井・朝一モード・高確・当選率優遇等は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更/据え置き/純電源OFF→ON時の機種固有内部状態・有利区間処理、ガックン条件/発生率、表示判別は、表記揺れ・型式・検定番号と設定変更/据え置き/電断/朝一/ガックン/有利区間を組み合わせ、業界・主要解析・旧DB系を横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。ノーマル機一般仕様から推測補完していない。
- 2024-10-07群は `スマスロ 鬼武者3 / スマスロ頭文字D 2nd / 今日から俺は!! パチスロ編 / L 真・一騎当千 / トリプルクラウンフォーユー` の5機をcanonical処理済みとしてCLOSED。
- グリーンべると/P-WORLDの2024-10-07新台スケジュールでは次のパチスロ全国導入境界を2024-10-21 `L Re:ゼロから始める異世界生活 season2` と掲載。HAZUSEでも2024-10-21導入、型式 `L Re：ゼロから始める異世界生活 season2PA5`、検定番号 `430205`、パオン・ディーピーを確認。

## No.1680 — トリプルクラウンフォーユー
- path: `docs/real_machine_db/machines/2024-10-07_triple-crown-for-you.md`
- manufacturer: **清龍ゲームジャパン**
- formalModel: **SトリプルクラウンX2-30**
- inspectionCode: **4S0038**
- releaseDate: **2024-10-07（沖縄県での導入開始を確認）**
- generation: **6号機 / メダル機 / 30Φ**
- systemType: **ノーマル / 完全告知**
- payoutRate: **96.84 / 98.82 / 100.46 / 103.10 / 105.50 / 108.02%**
- BIG: **1/287.44 / 1/273.07 / 1/262.14 / 1/252.06 / 1/242.73 / 1/238.31**
- REG: **1/496.48 / 1/474.90 / 1/458.29 / 1/392.43 / 1/358.12 / 1/309.13**
- base: **UNVERIFIED_AFTER_RESEARCH**
- basicPayout: **BIG最大252枚 / REG最大98枚**
- normalCeiling: **非搭載**
- settingChange: **天井/規定G/CZ/ATモードはNOT_APPLICABLE、朝一専用恩恵NONE_CONFIRMED_AFTER_RESEARCH、機種固有内部処理UNVERIFIED**
- carryOver: **公開ゲーム数/モード引継ぎ対象NOT_APPLICABLE、機種固有内部処理UNVERIFIED**
- powerCycle: **公開ゲーム数/モード引継ぎ対象NOT_APPLICABLE、機種固有内部処理UNVERIFIED**
- detection: **ゲーム数判別NOT_APPLICABLE / ガックン・表示判別UNVERIFIED_AFTER_RESEARCH**

## 2024-10-07境界 — CLOSED
1. スマスロ 鬼武者3 — No.1676 DONE
2. スマスロ頭文字D 2nd — No.1677 DONE
3. 今日から俺は!! パチスロ編 — No.1678 DONE
4. L 真・一騎当千 — No.1679 DONE
5. トリプルクラウンフォーユー — No.1680 DONE / 2024-10-07沖縄県導入の地域流通機としてcanonical
- PB/地域先行/別型式/延期を再監査し、今回確認範囲では追加未処理候補なし。次の導入日境界へ進む。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1680と本handoffを確認。
- **No.1681候補 `スロット Re:ゼロから始める異世界生活 season2` — 2024-10-21** から性能コア + resetBehavior v0.7を収集。
- 既確認識別値: 型式 `L Re：ゼロから始める異世界生活 season2PA5` / 検定番号 `430205` / パオン・ディーピー / スマスロAT / 純増約9.0枚/G。
- グリーンべると/P-WORLDの2024-10-07更新スケジュールでは2024-10-21導入パチスロは同機を掲載。処理後にメーカー別一覧・当時新台カレンダー・HAZUSE/P-WORLD等で同日PB/地域先行/別型式/延期を再監査して境界CLOSED判定する。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- 遊技日本 新機種発表: https://yugi-nippon.com/pachinko-new-machine/post-67199/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-65016/
- P-WORLD/遊技日本 検定通過: https://news.p-world.co.jp/articles/27932/nippon
- HAZUSE トリプルクラウンフォーユー: https://hazuse.com/machine/pachislot/4S0038/
- HAZUSE詳細: https://hazuse.com/hd/4s0038/
- パチビー: https://www.pachibee.jp/machines/index/224090005
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/09/kh01.php
- ぱちんこキュレーション: https://pachinko-curation.com/50856/
- Ativo: https://ativo.jp/2024/10/01/%E3%83%88%E3%83%AA%E3%83%97%E3%83%AB%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A6%E3%83%BC/
- けんのスロットシミュレーション（内容不一致CONFLICT参照のみ）: https://kenslo65536.com/kaiseki/triplecrown-foryou.html
- グリーンべると/P-WORLD 新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt
- HAZUSE Re:ゼロ season2: https://hazuse.com/machine/pachislot/SX0087/