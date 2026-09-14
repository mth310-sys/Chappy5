更新日: 2026-09-14

## 現在地点
- recordCount: **1728**
- latestRecordAdded: **スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_devil-may-cry5-stylish-tribe.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_1_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1727を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1727 `L ToLOVEるダークネス TRANCE ver.8.7` の次の未処理としてNo.1728 `スマスロ デビル メイ クライ5 スタイリッシュトライブ`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- HAZUSE 2025年6月導入一覧を再監査し、2025-06-02のパチスロは9機種。現在1/9処理済みのため境界はOPEN。

## No.1728 — スマスロ デビル メイ クライ5 スタイリッシュトライブ
- path: `docs/real_machine_db/machines/2025-06-02_devil-may-cry5-stylish-tribe.md`
- manufacturer: **アデリオン（エンターライズ）**
- formalModel: **Lデビルメイクライ5ST XA**
- inspectionCode: **430767**（1gekiは `430767、0702-038` と併記）
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.2 / 100.2 / 105.2 / 109.2 / 114.9%**
- bonus初当り: **1/257.0 / 1/254.1 / 1/251.5 / 1/222.6 / 1/217.3 / 1/204.1**
- ST初当り: **1/445.4 / 1/436.5 / 1/411.2 / 1/359.6 / 1/329.5 / 1/303.9**
- base: **約33.7G/50枚**
- netIncrease: **約3.8枚/G or 約5.8枚/G（区間差）**
- coreStatus: **COMPLETE_CORE**

## No.1728 resetBehavior v0.7
- settingChange: **有利区間・天井・内部状態・モード・ポイントをRESET。周期は1から。ボーナスレベル初期抽選。**
- carryOver: **据え置きは有利区間・天井・内部状態・モード・ポイントをCARRY_OVER。**
- powerCycle: **天井・内部モード・内部状態・規定ptをCARRY_OVERとする機種別二次解析表を確認。純電断時の有利区間そのものは直接記載未固定。**
- ceiling: **通常最大1000G+α（+α最大25G）→設定変更後最大800G+α。到達時EPISODE BONUS→ST。**
- mode: **設定変更時は朝一専用の特殊モードから開始する模様。具体振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- state: **設定変更でRESET/再抽選、据え置きは引継ぎ。純電断は引継ぎとする機種別二次解析あり。**
- advantageousSection: **設定変更RESET / 据え置きCARRY_OVER。通常の有利区間切断後上位ST恩恵は設定変更時を除外するため、朝一恩恵に混入しない。**
- startStage: **設定変更/電源OFF→ONとも図書館とする解析があり、単独判別困難。**
- detection: **朝一800G+α到達後も天井非発動なら据え置き濃厚。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- publicMorningNumeric: **最大天井800G+α。特殊モード具体振り分け率・朝一状態率は未公開/固定不能。**

## 2025-06-02境界 — OPEN 1/9
HAZUSE月間一覧で確認済みの同日パチスロ9機種:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — NEXT
3. L ULTRAMAN
4. LBプレミアムうまい棒
5. LBジャックポット
6. スマスロ ギルティクラウン2
7. スマスロニューパルサーBT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1728と本handoffを確認。
- 次は **No.1729候補「いざ!番長」— 2025-06-02**。
- その後 `L ULTRAMAN` → `LBプレミアムうまい棒` → `LBジャックポット` → `スマスロ ギルティクラウン2` → `スマスロニューパルサーBT` → `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を優先し、今回も旧レコードへの推測更新は実施していない。
- QAカーソルは据え置き。既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- メーカー公式: https://www.enterrise.co.jp/slot/dmc5st/
- HAZUSE 本機: https://hazuse.com/hd/430767-2/
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30863/yugitsushin
- 1geki 機種TOP: https://1geki.jp/slot/l_dmc5_st/
- 1geki 天井/設定変更: https://1geki.jp/slot/l_dmc5_st/3/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/959/29922/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/959/29920/
- Pachiseven スペック: https://pachiseven.jp/machines/7186/cutout/2
- Altema 朝一比較表: https://altema.jp/pachimo/ldmc5reset
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/234002/
