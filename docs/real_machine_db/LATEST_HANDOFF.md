更新日: 2026-09-14

## 現在地点
- recordCount: **1733**
- latestRecordAdded: **スマスロ ギルティクラウン2 — No.1733**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_smart-slot-guilty-crown2.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_GROUP_OPEN_6_OF_9_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1732 `LBジャックポット` を再同期。
- INDEXは完了済み19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1732の次の未処理としてNo.1733 `スマスロ ギルティクラウン2`（2025-06-02）を追加。
- 性能コア + resetBehavior v0.7を保存。
- 2025-06-02群は既知canonical 9機中6機処理済み。境界はOPENを維持。

## No.1733 — スマスロ ギルティクラウン2
- path: `docs/real_machine_db/machines/2025-06-02_smart-slot-guilty-crown2.md`
- manufacturer: **アクロス / ユニバーサルエンターテインメント**
- formalModel: **L／ギルティクラウン2／XF**
- inspectionCode: **430832**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 101.4 / 105.4 / 110.0 / 113.6%**
- bonus: **1/315.1 / 1/312.1 / 1/309.1 / 1/297.9 / 1/284.9 / 1/273.1**
- AT: **1/596.4 / 1/571.6 / 1/528.8 / 1/447.0 / 1/410.5 / 1/375.5**
- combined: **1/206.2 / 1/201.9 / 1/195.1 / 1/178.8 / 1/168.2 / 1/158.1**
- base: **約33.2G/50枚**
- netIncrease: **AT 約2.0枚/G**
- basicPayout: **BIG初期20〜70G・約100枚+α / AT最低20G・純増約2.0枚/G**
- coreStatus: **COMPLETE_CORE**

## No.1733 resetBehavior v0.7
- settingChange: **有利区間・天井・内部状態・レゾナンスポイントをRESET。VCモード再抽選。内部状態は高確スタート。VCポイントは???表示で内部初期値を再抽選。**
- carryOver: **据え置きは有利区間・天井・内部状態・レゾナンスポイントを引継ぎ。VCポイントは???表示になるが内部値を引継ぎ。**
- powerCycle: **純電源OFF→ONは天井・内部状態・CZモード・レゾナンスポイントを引継ぎ。VCポイントも内部値を引継ぎ、表示は???。開始ステージは天王洲第一高校。**
- gameCounter: **設定変更RESET / 据え置きCARRY_OVER / 純電断CARRY_OVER。**
- ceiling: **BB+AT間最大1000G消化（別表記999G+α）。設定変更専用の固定短縮天井なし。チャンス目短縮込み設定1平均約800G。到達でAT濃厚の確定CZ。**
- mode/state: **設定変更時VCモードC以上25%以上、その半数以上がモードD。高確スタート。据え置き/純電断は内部状態・CZモード引継ぎ。**
- advantageousSection: **設定変更RESET / 据え置きCARRY_OVERをなな徹比較表で直接確認。**
- resetBenefits: **高確スタート、VCモード優遇、VCポイントランダム初期化。VCポイント70pt以上が50%。**
- resetPenalties: **専用冷遇はNONE_CONFIRMED_AFTER_RESEARCH。前日天井進行は設定変更で消える。**
- detection: **VCポイント表示は設定変更/据え置きとも???で判別不可。なな徹のリセット判別は調査中。本機固有ガックンは再探索後もUNVERIFIED_AFTER_RESEARCH。**

## No.1733 numericResetData
- normalMaximumCeiling: **最大1000G消化**
- resetMaximumCeiling: **最大1000G消化（専用固定短縮なし）**
- averageCeilingSetting1: **約800G（通常短縮抽選込み）**
- resetVcModeCOrHigher: **25%以上**
- resetVcModeDShareWithinCOrHigher: **半数以上**
- initialVcPointDistribution: **0/5/10/15/20/25/30/35/50/55/70/75pt = 3.1/3.1/6.3/6.3/3.1/3.1/6.3/6.3/6.3/6.3/25.0/25.0%**
- initialVcPoint70OrHigher: **50.0%**
- resetInitialState: **高確**

## No.1733 conflicts / missing
- 天井表記 `最大1000G消化` と `999G+α` は発動境界の表現差として整合可能で、CONFLICT扱いしない。
- 一部二次資料の「リセット時平均800Gに短縮」は、主要解析では通常のチャンス目短縮込み設定1平均約800Gの説明。canonicalは **設定変更専用800G固定/短縮天井ではない**。
- RT状態の設定変更/純電断契約: `UNVERIFIED_CURRENTLY_UNDER_RESEARCH`。
- 初期レゾナンスポイント具体振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き時開始ステージ: `UNVERIFIED_CURRENTLY_UNDER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## 2025-06-02境界 — OPEN 6/9
既知canonical 9機:
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — No.1730 DONE
4. LBプレミアムうまい棒 — No.1731 DONE
5. LBジャックポット — No.1732 DONE
6. スマスロ ギルティクラウン2 — No.1733 DONE
7. スマスロニューパルサーBT — NEXT
8. 翔べ!ハーレムエース
9. LBパチスロ1000ちゃんA

## 次回再開地点
- 最新mainを再同期しNo.1733と本handoffを確認。
- 次は **No.1734候補「スマスロニューパルサーBT」— 2025-06-02**。
- その後 `翔べ!ハーレムエース` → `LBパチスロ1000ちゃんA` を順次監査する。
- 9機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-06-02境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1733を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- ユニバーサル公式: https://www.universal-777.com/product/slot/guilty_crown2/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70145/
- 長崎県遊技業協同組合（遊技通信転載）: https://nagasaki-yukyo.or.jp/information/%E5%88%9D%E4%BB%A3%E3%81%AEdna%E3%82%92%E5%8F%97%E3%81%91%E7%B6%99%E3%81%8E%E6%AD%A3%E7%B5%B1%E9%80%B2%E5%8C%96%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E3%82%AE%E3%83%AB%E3%83%86%E3%82%A3/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0105/
- 1geki 基本: https://1geki.jp/slot/l_guiltycrown2/
- 1geki 天井/朝一: https://1geki.jp/slot/l_guiltycrown2/3/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86938/
- 必勝本 設定変更時の恩恵: https://p.hisshobon.jp/machine/4507/1/110048
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/86917/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/962/29848/
- なな徹 VCモード/VCポイント: https://nana-press.com/kaiseki/machine/962/29853/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/22/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10251
- Ativo: https://ativo.jp/2025/04/09/l%E3%82%AE%E3%83%AB%E3%83%86%E3%82%A3%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B32/
