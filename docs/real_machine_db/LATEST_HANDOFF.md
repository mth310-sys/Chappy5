更新日: 2026-09-14

## 現在地点
- recordCount: **1729**
- latestRecordAdded: **いざ！番長 — No.1729**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_iza-bancho.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_2_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1728を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1728 `スマスロ デビル メイ クライ5 スタイリッシュトライブ` の次の未処理としてNo.1729 `いざ！番長`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- 2025-06-02群は既知canonical 9機のうち2機処理済み。境界はOPENを維持。

## No.1729 — いざ！番長
- path: `docs/real_machine_db/machines/2025-06-02_iza-bancho.md`
- manufacturer: **サボハニ（大都技研グループ）**
- formalModel: **L／いざ番長／SB8**
- inspectionCode: **430901**（1gekiは `430901、0703-057` と併記）
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.9 / 101.3 / 106.0 / 112.1 / 114.9%**
- AT初当り: **1/386.9 / 1/368.5 / 1/375.8 / 1/332.4 / 1/351.6 / 1/312.1**
- base: **約32G/50枚**
- netIncrease: **頂ZBASH 約2.8枚/G / 青頂ZBASH 約5.0枚/G**
- basicPayout: **頂ZBASH初期150枚+α / 番長ボーナス20G+α**
- coreStatus: **COMPLETE_CORE**

## No.1729 resetBehavior v0.7
- settingChange: **モード再抽選。通常モードは選択されずチャンスA以上濃厚。内部Gランダム加算、御免pt初期値優遇。内部状態は資料間で「リセット」/「調査中」のため詳細固定せず。**
- carryOver: **朝一600G+α超えが据え置き濃厚材料となるため天井進行CARRY_OVERを支持。モード・各ポイント・有利区間の据え置き単独直接列挙はUNVERIFIED_DIRECT。**
- powerCycle: **天井・内部状態はCARRY_OVERを機種別比較表で確認。モード・御免pt・刀pt・有利区間の純電断直接列挙はUNVERIFIED_DIRECT。**
- ceiling: **通常最大999G+α → 設定変更後最大600G+α。AT「頂ZBASH」当選。**
- mode: **通常 / チャンスA / チャンスB / 天国。設定変更時はチャンスA以上、天国約25%。チャンスA/Bの正確な振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- state: **設定変更時はちょんぼりすた「リセット」、Altema「調査中」で詳細競合/未確定。純電断は引継ぎ。**
- advantageousSection: **通常遊技中の有利区間リセット後には絶頂決戦→上位AT恩恵があるが、設定変更朝一へ流用しない。設定変更/据え置き/純電断の有利区間そのものは機種固有直接契約を固定できずUNVERIFIED_DIRECT。**
- resetBenefits: **最大天井600G+α、チャンスA以上、天国約25%、内部G加算、御免pt約30%で70pt以上。**
- resetPenalties: **設定変更固有の明確な公開不利益はNONE_CONFIRMED_AFTER_RESEARCH。**
- detection: **朝一600G+α超えでAT非当選なら据え置き濃厚。ただし内部G加算によりゾーンずれ単独では判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- publicMorningNumeric: **天国約25.0% / 御免pt約30%で70pt以上 / 最大天井600G+α。内部G加算分布・チャンスA/B正確率は未公開固定不能。**

## No.1729 conflicts / missing
- 正式型式: HAZUSE・1geki・検定通過業界記事・遊技日本は `L／いざ番長／SB8`。早期二次記事の一部に `L/いざ番長/SBB` があり `CONFLICT_EARLY_SECONDARY_MODEL_SUFFIX_SBB_VS_MULTI_SOURCE_SB8`。SB8をcanonical。
- 検定番号: HAZUSE `430901`、1geki `430901、0703-057`。`430901`をcanonical、追加番号は原表記保持。
- 内部状態: 設定変更時についてちょんぼりすた「リセット」 vs Altema「調査中」。具体状態率を推測しない。
- 有利区間: 設定変更/据え置き/純電断の本機固有直接契約 `UNVERIFIED_DIRECT_ADVANTAGEOUS_SECTION_BEHAVIOR_AFTER_RESEARCH`。
- 据え置きのモード/各ポイント、純電断のモード/各ポイント: `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 内部Gランダム加算の具体分布: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。実戦推測5～40G前後はcanonical不採用。
- 本機固有ガックン: `UNVERIFIED_AFTER_RESEARCH`。

## 2025-06-02境界 — OPEN 2/9
既知canonical同日パチスロ9機種:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — NEXT
4. LBプレミアムうまい棒
5. LBジャックポット
6. スマスロ ギルティクラウン2
7. スマスロニューパルサーBT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1729と本handoffを確認。
- 次は **No.1730候補「L ULTRAMAN」— 2025-06-02**。
- その後 `LBプレミアムうまい棒` → `LBジャックポット` → `スマスロ ギルティクラウン2` → `スマスロニューパルサーBT` → `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を優先し、今回も旧レコードへの推測更新は実施していない。
- QAカーソルは据え置き。既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/izabancho/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0104/
- 情報島＋ 検定通過: https://p-johojima.jp/news/post-1105/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-94089/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-70704/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004821/
- 1geki 機種TOP: https://1geki.jp/slot/l_bancho_iza/
- 1geki 天井/朝一: https://1geki.jp/slot/l_bancho_iza/3/
- 1geki モード: https://1geki.jp/slot/l_bancho_iza/43/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/946/29780/
- なな徹 天井: https://nana-press.com/kaiseki/machine/946/29777/
- なな徹 AT: https://nana-press.com/kaiseki/machine/946/29792/
- Altema 朝一: https://altema.jp/pachimo/lizabanchoreset
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/234092/
- P-WORLD: https://www.p-world.co.jp/machine/database/10275
- アタリ7: https://www.atari7.com/slot/iza-bancho.php
