更新日: 2026-09-14

## 現在地点
- recordCount: **1727**
- latestRecordAdded: **L ToLOVEるダークネス TRANCE ver.8.7 — No.1727**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-05-19_toloveru-darkness-trance-ver-8-7.md`
- chronologicalFrontier: **2025-05-19**
- schema: **resetBehavior v0.7**
- status: **2025-05-19_GROUP_CLOSED_2_OF_2_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1726を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1726 `花笠` の次の未処理としてNo.1727 `L ToLOVEるダークネス TRANCE ver.8.7`（2025-05-19）を追加。
- 性能コア + resetBehavior v0.7を保存。
- HAZUSE 2025年5月導入一覧を再監査し、2025-05-19のパチスロは `花笠` と本機の2機種。両方処理済みのため2025-05-19境界をCLOSED。
- 次境界は2025-06-02。HAZUSE月間一覧では9機種を確認。

## No.1727 — L ToLOVEるダークネス TRANCE ver.8.7
- path: `docs/real_machine_db/machines/2025-05-19_toloveru-darkness-trance-ver-8-7.md`
- manufacturer: **オリンピアエステート（平和ブランド）**
- formalModel: **LToLOVEるダークネスS8**
- inspectionCode: **530010**
- releaseDate: **2025-05-19**
- settings: **2 / 3 / 4 / 5 / 6**（設定1非搭載。設定L搭載情報あり、性能値未公開）
- payoutRate: **98.0 / 99.0 / 103.1 / 110.3 / 112.0%**
- AT初当り: **1/353.3 / 1/346.3 / 1/328.9 / 1/312.3 / 1/307.6**
- base: **約30.0G/50枚**
- netIncrease: **約8.7枚/G**
- coreStatus: **COMPLETE_CORE**

## No.1727 resetBehavior v0.7
- settingChange: **天井G RESET、状態・どきどきポイント・トランスポイント再抽選、有利区間RESET。**
- carryOver: **据え置きは有利区間・天井・内部状態・両ポイントをCARRY_OVER。**
- powerCycle: **天井G・状態・どきどきポイント・トランスポイントをCARRY_OVER。純電断時の有利区間そのものは直接記載未固定。**
- ceiling: **通常 ST間999G+α → 設定変更後650G+α。到達時ST当選。**
- state: **設定変更で再抽選、据え置き/電源OFF→ONで引継ぎ。**
- startStage: **設定変更/電源OFF→ONとも彩南町or彩南高校。開始ステージ単独では変更判別不可。**
- detection: **朝一650G+α超えのST非当選は据え置き推測の強材料。なな徹のリセット判別は調査中。固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- publicMorningNumeric: **天井650G+α。75pt以上開始60%以上という二次解析は確認したが、高優先資料で再固定できずcanonicalには採用しない。**
- advantageousSectionNote: **通常の有利区間リセット後「もぐもぐたい焼きタイム」恩恵は設定変更時を除外するため、朝一リセット恩恵へ混入しない。**

## 2025-05-19境界 — CLOSED 2/2
1. 花笠 — No.1726 DONE（エリア限定テスト導入）
2. L ToLOVEるダークネス TRANCE ver.8.7 — No.1727 DONE

## 次回再開地点
- 最新mainを再同期しNo.1727と本handoffを確認。
- 次は **2025-06-02境界**。HAZUSE月間一覧のパチスロ9機種を順次監査する。
- No.1728第一候補: **スマスロ デビル メイ クライ5 スタイリッシュトライブ — 2025-06-02**。
- 同日候補: `いざ!番長` / `L ULTRAMAN` / `LBプレミアムうまい棒` / `LBジャックポット` / `スマスロ ギルティクラウン2` / `スマスロニューパルサーBT` / `翔べ!ハーレムエース` / `LBパチスロ1000ちゃんA`。
- 採番前にPB・別型式・地域先行・延期/段階導入および同日順序を既存ルールで再監査する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回もrecursive tree / filename / 2007-07境界の検索を行ったが、カーソル直後の「最初のresetBehavior欠損レコード」を安全に一意固定できなかったため、旧レコードへの推測更新は実施していない。
- QAカーソルは据え置き。次回も新規収集を止めず、実体レコード順が一意確定した時点で遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- HAZUSE 本機: https://hazuse.com/machine/pachislot/SX0101/
- HAZUSE 機種詳細: https://hazuse.com/hd/530010-2/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4129/
- G-net 検定通過: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C7%E5%B9%B44%E6%9C%8811%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- P-WORLD: https://www.p-world.co.jp/machine/database/10259
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30686/greenbelt
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/969/29586/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/969/29583/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87043/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87048/
- 1geki 設定差: https://1geki.jp/slot/l_toloveru_d_trance/0/
- 6確: https://www.kaku6.jp/slot/toloverudtrance/
