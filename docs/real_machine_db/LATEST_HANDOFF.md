更新日: 2026-09-14

## 現在地点
- recordCount: **1681**
- latestRecordAdded: **スロット Re:ゼロから始める異世界生活 season2 — No.1681**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-21_rezero-season2.md`
- chronologicalFrontier: **2024-10-21**
- schema: **resetBehavior v0.7**
- status: **2024-10-21_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1680を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1680の次の未処理候補 `スロット Re:ゼロから始める異世界生活 season2`（2024-10-21）をNo.1681として追加。
- 型式 `L Re：ゼロから始める異世界生活 season2PA5`、検定番号 `430205`、製造元パオン・ディーピー、大都技研ブランド、スマスロATを大都技研公式・HAZUSE・業界スケジュールで照合。
- 設定1〜6の機械割は 97.6 / 98.8 / 100.7 / 105.2 / 110.5 / 114.9%。AT初当りは 1/417.2 / 1/408.5 / 1/387.1 / 1/354.3 / 1/332.9 / 1/305.4。
- 約33G/50枚、AT「殲滅RUSH」純増約9.0枚/G。大兎殲滅戦は約4.0枚/G、上位AT「超強欲RUSH」は約9.0枚/G。
- 通常の規定pt天井は最大1400pt（平均約930G）でAT当選。AT間1300Gのゲーム数天井はロングフリーズ濃厚、EPボーナス+上位AT直行が解析されている。
- resetBehavior v0.7: 設定変更で有利区間・天井・内部状態・ポイントをRESET、据え置き/純電源OFF→ONでは引継ぎ。朝一は基本菜月家ステージ。
- 設定変更後の規定pt天井は `400 / 600 / 800 / 1000pt` のいずれかで最大1000ptへ短縮。さらに内部ポイントのランダム加算あり。
- 各短縮天井候補の個別振り分け率とランダム加算量分布は検索語・型式・メーカーを変えて再探索後も信頼できる固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一100G以内AT当選率5.7%という実戦集計値を参考値として保存。メーカー公表値ではないため `ANALYSIS_SINGLE`。
- 1000ptを超えてもAT非当選なら据え置き濃厚材料。ポイントランダム加算があるため前兆位置ズレだけでは据え置き確定にならない。
- 本機固有ガックン条件/発生率は `リゼロ2` / 正式型式 / パオン・ディーピー / 大都技研 と「ガックン/設定変更/据え置き/リセット/朝一」を組み合わせて再探索したが高信頼に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- グリーンべると/P-WORLDの2024-10-07更新新台スケジュールは2024-10-21導入パチスロを本機1機のみ掲載。HAZUSE/公式も日付一致。PB/地域先行/別型式を追加確認し、今回確認範囲では追加未処理候補なしとして2024-10-21境界をCLOSED。

## No.1681 — スロット Re:ゼロから始める異世界生活 season2
- path: `docs/real_machine_db/machines/2024-10-21_rezero-season2.md`
- manufacturer: **パオン・ディーピー（大都技研ブランド）**
- formalModel: **L Re：ゼロから始める異世界生活 season2PA5**
- inspectionCode: **430205**
- releaseDate: **2024-10-21**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 直AT**
- payoutRate: **97.6 / 98.8 / 100.7 / 105.2 / 110.5 / 114.9%**
- AT初当り: **1/417.2 / 1/408.5 / 1/387.1 / 1/354.3 / 1/332.9 / 1/305.4**
- base: **約33G/50枚**
- netIncrease: **殲滅RUSH 約9.0枚/G / 大兎殲滅戦 約4.0枚/G / 超強欲RUSH 約9.0枚/G**
- normalPointCeiling: **最大1400pt（平均約930G）**
- resetPointCeiling: **400 / 600 / 800 / 1000pt（最大1000pt）**
- gameCeiling: **AT間1300G**
- settingChange: **有利区間・天井・内部状態・ポイントRESET / ptランダム加算**
- carryOver: **有利区間・天井・内部状態・ポイント引継ぎ**
- powerCycle: **天井・内部状態・有利区間等を引継ぎ**
- detection: **1000pt超非当選で据え置き濃厚材料 / ガックンUNVERIFIED**

## 2024-10-21境界 — CLOSED
1. スロット Re:ゼロから始める異世界生活 season2 — No.1681 DONE
- グリーンべると/P-WORLD当時スケジュールでは同日パチスロは本機のみ。
- PB/地域先行/別型式/延期を再監査し、今回確認範囲では追加未処理候補なし。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1681と本handoffを確認。
- 次の全国導入境界は **2024-11-05**。グリーンべると/P-WORLDの当時スケジュールでは以下4機を掲載:
  1. `L新・必殺仕置人 回胴 CRASH SPEC`（京楽産業．）
  2. `Lバンドリ！`（オリンピアエステート）
  3. `Lダブルアタック2 with OZS-1000＆RAPHAEL`（オーイズミ）
  4. `スマスロ モンスターハンターライズ`（アデリオン）
- **No.1682候補 `L新・必殺仕置人 回胴 CRASH SPEC` — 2024-11-05** から性能コア + resetBehavior v0.7を収集する。
- 2024-11-05群処理開始前にメーカー別一覧・HAZUSE/P-WORLD・当時新台カレンダーでPB/地域先行/別型式/延期を再監査する。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- 大都技研公式製品ページ: https://www.daitogiken.com/contents/product/slot/rezero2/
- 大都技研製品一覧: https://www.daitogiken.com/products/slot/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0087/
- グリーンべると/P-WORLD 新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/06/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10121
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/219748/
- 一撃 天井/朝一: https://1geki.jp/slot/l_rezero_season2/3/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/819/24862/
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/rezero2-tenjou/
- ABEMA TIMES: https://times.abema.tv/articles/-/10147209
