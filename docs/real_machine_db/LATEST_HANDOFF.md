更新日: 2026-09-14

## 現在地点
- recordCount: **1730**
- latestRecordAdded: **L ULTRAMAN — No.1730**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_l-ultraman.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_3_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1729を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1729 `いざ！番長` の次の未処理としてNo.1730 `L ULTRAMAN`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- 2025-06-02群はHAZUSE新台スケジュールでも既知canonical 9機を再確認。3機処理済み、境界はOPENを維持。

## No.1730 — L ULTRAMAN
- path: `docs/real_machine_db/machines/2025-06-02_l-ultraman.md`
- manufacturer: **オッケー.（京楽産業.製）**
- formalModel: **LパチスロULTRAMAN-KE**
- inspectionCode: **4S1311**
- releaseDate: **2025-06-02**
- settings: **L / 1 / 2 / 4 / 5 / 6（設定3非搭載、L公開性能値は調査中）**
- payoutRate: **設定1 97.7 / 設定2 99.0 / 設定4 104.1 / 設定5 109.7 / 設定6 114.9%**
- AT初当り canonical: **1/320.2 / 1/308.7 / 1/271.9 / 1/247.3 / 1/222.8**
- base: **約33.6G/50枚**
- netIncrease: **擬似BONUS/エクストラゲーム約4.0枚/G、ウルトラタイム約0.7枚/G**
- basicPayout: **オープニングBONUS 20G / UBMバトルパート8G / ウルトラタイム10G ST / エクストラゲーム12G+α**
- coreStatus: **COMPLETE_CORE**

## No.1730 resetBehavior v0.7
- settingChange: **有利区間・天井・ゲーム数・内部状態・ATレベル・ループストックレベルをRESET。ポイント表示0、ゲーム数表示0、学校ステージ。ATレベル/ループストックレベルは再抽選され高レベル優遇。**
- carryOver: **据え置きは有利区間・天井・ゲーム数・内部状態・ATレベル・ループストックレベルをCARRY_OVER。ベルポイント/ポイントカウンタ単独の据え置き直接文言はUNVERIFIED_DIRECT。**
- powerCycle: **天井・ポイント・内部ゲーム数・内部状態・ループストックレベルをCARRY_OVER。ポイント/ゲーム数は内部継続だが表示は0。純電断時の有利区間独立直接文言はUNVERIFIED_DIRECT。**
- ceiling: **通常最大998G+α → 設定変更後最大665G+α。AT当選。**
- mode/levels: **通常A/B等の朝一モードは未確認。ATレベル1～6は設定変更時 32.0 / 23.0 / 22.0 / 14.7 / 6.4 / 1.9%。AT終了後 52.9 / 22.1 / 16.2 / 5.5 / 2.4 / 0.9%。設定変更時Lv4以上23.0% vs AT終了後8.8%。**
- state: **設定変更RESET、据え置き/純電断CARRY_OVER。設定変更直後の通常/高確/超高確具体振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- advantageousSection: **設定変更RESET / 据え置きCARRY_OVERを機種別比較表で直接確認。純電断時の独立直接文言のみUNVERIFIED_DIRECT。**
- resetBenefits: **天井665G+α短縮、ATレベル高レベル優遇、ループストック高レベル優遇。設定変更後1回目のオープニングBONUSは8割以上でATレベル3以上示唆エピソード発生。**
- resetPenalties: **設定変更固有の明確な公開不利益はNONE_CONFIRMED_AFTER_RESEARCH。**
- detection: **朝一665G+α超えAT非当選は据え置き推測の強材料。ただし純電断でもゲーム数/ポイント表示が0に見えるため表示0単独では判別不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**

## No.1730 conflicts / missing
- AT初当り設定1/4: 情報島＋・ちょんぼりすた・SLOT HACK等 `1/320.2 / 1/271.9` vs P-WORLD/HAZUSE現行DB `1/320.1 / 1/271.8`。`CONFLICT_ROUNDING_OR_SOURCE_PRECISION`。多数一致/業界発表側をcanonical。
- Amusement Japan記事の設定6 `1/122.8` は複数資料 `1/222.8` と大幅乖離。`CONFLICT_LIKELY_SOURCE_TYPO_122.8_VS_MULTI_SOURCE_222.8` として隔離。
- 純増は概要資料の約4.0枚/Gと、区間別解析のウルトラタイム約0.7枚/G・擬似BONUS/エクストラゲーム約4.0枚/Gがある。定義差として区間別保存。
- 設定変更時ループストックレベル具体振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更直後内部状態具体振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電断時の有利区間直接契約: `UNVERIFIED_DIRECT_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定LのAT初当り/出玉率: 公開DBで調査中。

## 2025-06-02境界 — OPEN 3/9
HAZUSE 2025年6月新台スケジュールで同日パチスロ9機を再確認:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — No.1730 DONE
4. LBプレミアムうまい棒 — NEXT
5. LBジャックポット
6. スマスロ ギルティクラウン2
7. スマスロニューパルサーBT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1730と本handoffを確認。
- 次は **No.1731候補「LBプレミアムうまい棒」— 2025-06-02**。
- その後 `LBジャックポット` → `スマスロ ギルティクラウン2` → `スマスロニューパルサーBT` → `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。
- 2026年後発 `L ULTRAMAN 最終決戦` は別機種。2025年機は型式 `LパチスロULTRAMAN-KE` / 検定 `4S1311` で分離する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を優先し、今回も旧レコードへの推測更新は実施していない。
- QAカーソルは据え置き。既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- オッケー.公式: https://www.ok777.co.jp/lineup/heros_ultraman_s/
- 円谷フィールズHD発売告知: https://digitalpr.jp/r/105067
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/30766/yugitsushin
- 情報島＋: https://p-johojima.jp/new_machine/post-4824/
- HAZUSE機種情報: https://hazuse.com/hd/4s1311/
- HAZUSE詳細: https://hazuse.com/machine/pachislot/4S1311/
- HAZUSE ATレベル: https://hazuse.com/machine/pachislot/4S1311/genre/209/
- 1geki 朝一/天井: https://1geki.jp/slot/l_ultraman/3/
- 1geki ウルトラタイム: https://1geki.jp/slot/l_ultraman/87/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/947/30105/
- 必勝本 オープニングBONUSエピソード: https://hisshobon.com/machineinfo/87220/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10271
- 6確: https://www.kaku6.jp/slot/ultraman/
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
