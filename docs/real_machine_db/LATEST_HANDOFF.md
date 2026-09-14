更新日: 2026-09-14

## 現在地点
- recordCount: **1732**
- latestRecordAdded: **LBジャックポット — No.1732**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_lb-jackpot.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_5_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1731 `LBプレミアムうまい棒` を再同期。
- INDEXは完了済み19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1731の次の未処理としてNo.1732 `LBジャックポット`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- 2025-06-02群は既知canonical 9機中5機処理済み。境界はOPENを維持。

## No.1732 — LBジャックポット
- path: `docs/real_machine_db/machines/2025-06-02_lb-jackpot.md`
- manufacturer: **ヤーマ（ベルコ系）**
- formalModel: **LBジャックポットCY1**
- inspectionCode: **5S0041**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.0 / 100.5 / 103.0 / 107.0%**
- BIG: **1/348.6 / 1/341.3 / 1/313.6 / 1/290.0**
- REG: **1/524.3 / 1/448.9 / 1/360.1 / 1/290.0**
- 合算: **1/209.4 / 1/193.9 / 1/167.6 / 1/145.0**
- base: **約40G/50枚（設定1）**
- netIncrease: **N/A（リアルボーナス主体）**
- basicPayout: **BIG最大89枚+BT / REG最大89枚 / 設定1 BTループ約67%、初当りBIG込み期待約355枚**
- coreStatus: **COMPLETE_CORE**

## No.1732 resetBehavior v0.7
- settingChange: **天井非搭載。リールガックンは必勝本で現在調査中。BT状態・ボーナス成立状態・演出モード等の機種固有直接契約はUNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH。**
- carryOver: **天井/CZ/AT/規定G数はN/A。据え置き時BT・成立状態等の独立比較表はUNVERIFIED_DIRECT_AFTER_RESEARCH。**
- powerCycle: **リールガックンは現在調査中。BT状態・ボーナス成立状態・演出モード等の純電断契約はUNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH。**
- gameCounter: **天井用G数/周期/ポイント天井はN/A。**
- ceiling: **非搭載。設定変更後短縮もN/A。**
- mode/state: **通常A/B・天国・CZ等の内部モードは公開ゲーム性上なし。ノーマル/沖スロは任意選択の告知演出モード。設定変更時の保持/初期化はUNVERIFIED_DIRECT。**
- advantageousSection: **本機固有の設定変更/据え置き/純電断契約を直接固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。BT機一般論から推定しない。**
- resetBenefits: **朝一専用ゾーン/モード、初当り優遇、短縮天井等は `NONE_CONFIRMED_AFTER_RESEARCH`。**
- resetPenalties: **通常時朝一固有の冷遇はNONE_CONFIRMED_AFTER_RESEARCH。BT中設定変更の扱いは直接資料未固定のため推定しない。**
- detection: **本機固有ガックン条件/発生率は現在調査中。天井非搭載かつ朝一ゾーンなしで、明確な変更判別法はNONE_CONFIRMED_AFTER_RESEARCH。**

## No.1732 conflicts / missing
- 設定1 BIGは、必勝本・なな徹・情報島・Ativo等が `1/348.6` で一致し、REG `1/524.3` と合算 `1/209.4` の数理関係にも整合。一方、HAZUSE新UIとP-WORLDは `1/384.6` と掲載しながら合算を `1/209.4` として内部不整合。canonicalは **1/348.6**、`1/384.6` は `CONFLICT_LIKELY_SOURCE_TYPO_SETTING1_BIG_384.6_VS_MULTI_SOURCE_348.6` として保持。
- 設定変更/据え置き/純電断時のBT状態: `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- ボーナス成立状態: `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
- 演出モード初期化契約: `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
- 本機固有有利区間契約: `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有ガックン: `UNVERIFIED_CURRENTLY_UNDER_RESEARCH`。

## 2025-06-02境界 — OPEN 5/9
既知canonical 9機:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — No.1730 DONE
4. LBプレミアムうまい棒 — No.1731 DONE
5. LBジャックポット — No.1732 DONE
6. スマスロ ギルティクラウン2 — NEXT
7. スマスロニューパルサーBT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1732と本handoffを確認。
- 次は **No.1733候補「スマスロ ギルティクラウン2」— 2025-06-02**。
- その後 `スマスロニューパルサーBT` → `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1732を完了。旧レコード側はカーソル直後を安全に一意固定するための実体順確認が未完了で、推測更新は実施していない。
- QAカーソルは据え置き。既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- ヤーマ公式（ベルコ公式サイト内）発売告知: https://www.s-bellco.co.jp/news/20250407_01/
- ヤーマ/ベルコ公式製品ページ: https://www.s-bellco.co.jp/products/slot/yamalbjackpot/
- HAZUSE: https://hazuse.com/hd/5s0041/
- HAZUSE新UI: https://hazuse.com/machine/pachislot/5S0041/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86980/
- 必勝本旧UI 天井&設定変更: https://p.hisshobon.jp/vpage/2703/2
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/86972/
- 必勝本 設定看破: https://hisshobon.com/machineinfo/86975/
- なな徹: https://nana-press.com/kaiseki/machine/968/29285/
- 1geki: https://1geki.jp/slot/lb_jackpot/4/
- 6確: https://www.kaku6.jp/slot/jackpot/
- P-WORLD: https://www.p-world.co.jp/machine/database/10258
- 情報島: https://p-johojima.jp/new_machine/post-3696/
- Ativo: https://ativo.jp/2025/04/09/lb%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E3%83%9D%E3%83%83%E3%83%88/
