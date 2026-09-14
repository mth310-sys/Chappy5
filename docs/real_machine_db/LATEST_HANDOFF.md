更新日: 2026-09-14

## 現在地点
- recordCount: **1731**
- latestRecordAdded: **LBプレミアムうまい棒 — No.1731**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_lb-premium-umaibo.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_4_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1730 `L ULTRAMAN` を再同期。
- INDEXは完了済み19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1730の次の未処理としてNo.1731 `LBプレミアムうまい棒`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- 2025-06-02群は既知canonical 9機中4機処理済み。境界はOPENを維持。

## No.1731 — LBプレミアムうまい棒
- path: `docs/real_machine_db/machines/2025-06-02_lb-premium-umaibo.md`
- manufacturer: **オリンピアエステート（平和グループ）**
- formalModel: **LBプレミアムうまい棒S1**
- inspectionCode: **4S1818**
- releaseDate: **2025-06-02**
- settings: **L / 1 / 2 / 5 / 6（設定L通常性能値は公開確認できず）**
- payoutRate: **97.6 / 98.5 / 103.7 / 106.5%（設定1/2/5/6）**
- BIG: **1/299.3 / 1/296.5 / 1/293.9 / 1/291.3**
- REG: **1/471.5 / 1/455.1 / 1/337.8 / 1/291.3**
- 合算: **1/183.1 / 1/179.6 / 1/157.2 / 1/145.6**
- base: **約38.7G/50枚（設定1）**
- netIncrease: **N/A（リアルボーナス主体。AT純増として扱わない）**
- basicPayout: **BIG単体約176枚→BT込み301枚 / REG99枚 / BT中うまいフリーズ約3%で代表476枚**
- coreStatus: **COMPLETE_CORE**

## No.1731 resetBehavior v0.7
- settingChange: **連チャン回数RESET / BT RESETを必勝本機種別表で直接確認。天井は非搭載。**
- carryOver: **天井・CZ・AT・規定G数モードはN/A。BTは少なくとも設定変更を伴わない純電断でCARRY_OVER。独立した据え置き比較表でその他内部状態を網羅した資料はUNVERIFIED_DIRECT。**
- powerCycle: **BT CARRY_OVERを直接確認。連チャン回数は資料上「現在調査中」。ガックンも現在調査中。**
- gameCounter: **天井用G数はN/A。連チャン回数は設定変更でRESET、純電断はUNVERIFIED。**
- ceiling: **非搭載。設定変更後短縮もN/A。**
- mode/state: **通常A/B・天国・CZ/ATモード等は公開ゲーム性上確認されず。BT状態のみ設定変更RESET / 純電断CARRY_OVERを直接確認。**
- advantageousSection: **本機固有の設定変更/据え置き/純電断契約を直接固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。BT機一般論から推定しない。**
- resetBenefits: **朝一専用ゾーン/モード、初当り優遇、短縮天井等は `NONE_CONFIRMED_AFTER_RESEARCH`。**
- resetPenalties: **BT中の特殊ケースでは設定変更によりBT状態が消える。通常時朝一固有の冷遇はNONE_CONFIRMED。**
- detection: **本機固有ガックン条件/発生率はUNVERIFIED。天井非搭載かつ朝一ゾーンなしで、明確な変更判別法はNONE_CONFIRMED_AFTER_RESEARCH。**

## No.1731 conflicts / missing
- 必勝本の基本スペック概要欄だけ `天井: 搭載` と表示するが、同サイト専用 `天井&設定変更` ページは到達条件 `ナシ`。HAZUSE / P-WORLD / 1geki / 6確も非搭載で一致。canonicalは **天井非搭載**、概要欄を `CONFLICT_CEILING_SUMMARY_FIELD` として隔離。
- K-Naviは設定5 REGを `1/377.8` と掲載するが、遊技日本 / 1geki / なな徹 / 必勝本 / P-WORLD等は `1/337.8` で一致。canonicalは **1/337.8**、K-Navi値を `CONFLICT_LIKELY_SOURCE_TYPO_SETTING5_REG_377.8_VS_MULTI_SOURCE_337.8` として保持。
- 設定LのBIG/REG/合算/機械割: 公開通常性能値なし。
- 純電源OFF→ON時の連チャン回数: `現在調査中`。
- 本機固有ガックン: `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス成立状態の変更/据え置き/純電断契約: `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
- 本機固有有利区間契約: `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。

## 2025-06-02境界 — OPEN 4/9
既知canonical 9機:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — No.1730 DONE
4. LBプレミアムうまい棒 — No.1731 DONE
5. LBジャックポット — NEXT
6. スマスロ ギルティクラウン2
7. スマスロニューパルサーBT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1731と本handoffを確認。
- 次は **No.1732候補「LBジャックポット」— 2025-06-02**。
- その後 `スマスロ ギルティクラウン2` → `スマスロニューパルサーBT` → `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を優先し、今回も旧レコードへの推測更新は実施していない。
- QAカーソルは据え置き。既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- 平和公式: https://www.heiwanet.co.jp/products/pachislot/l-pub/
- オリンピア公式ニュース: https://www.olympia.co.jp/official/news/
- 遊技日本 新台発表: https://yugi-nippon.com/pachinko-new-machine/post-70455/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70145/
- 遊技通信/P-WORLD BT適合発表: https://news.p-world.co.jp/articles/30458/yugitsushin
- HAZUSE: https://hazuse.com/hd/4s1818/
- P-WORLD: https://www.p-world.co.jp/machine/database/10261
- 1geki: https://1geki.jp/slot/lb_umaibou/
- なな徹: https://nana-press.com/kaiseki/machine/957/29456/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87083/
- 必勝本 BT解説: https://hisshobon.com/machineinfo/87089/
- 必勝本旧UI: https://p.hisshobon.jp/vpage/2706/2
- 6確: https://www.kaku6.jp/slot/umaibou/
- Pachibee: https://www.pachibee.jp/machines/index/225050002
- K-Navi: https://p-kn.com/slot/4326/
