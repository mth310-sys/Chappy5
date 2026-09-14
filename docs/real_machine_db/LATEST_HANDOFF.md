更新日: 2026-09-14

## 現在地点
- recordCount: **1740**
- latestRecordAdded: **アレックス ブライト — No.1740**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-07-07_arex-bright.md`
- chronologicalFrontier: **2025-07-07**
- schema: **resetBehavior v0.7**
- status: **2025-07-07_GROUP_OPEN_3_OF_5_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1739実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1740 `アレックス ブライト` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-07-07群は既知5候補中3機処理済み。残りは `ハイビリターン-30 → LBトリプルクラウン`。

## No.1740 — アレックス ブライト
- path: `docs/real_machine_db/machines/2025-07-07_arex-bright.md`
- manufacturer: **ユニバーサルブロス**
- formalModel: **LBAREXBRIGHTBA**
- inspectionCode: **5S0110**
- releaseDate: **2025-07-07**
- settings: **1 / 2 / 5 / 6**
- marketExpectedPayoutRate: **98.8 / 100.6 / 103.5 / 106.8%**
- full攻略PayoutRate: **100.2 / 102.0 / 105.0 / 108.3%**
- BIG: **1/309.1 / 1/303.4 / 1/295.2 / 1/287.4**
- REG: **1/428.3 / 1/409.6 / 1/366.1 / 1/312.1**
- combined: **1/179.6 / 1/174.3 / 1/163.4 / 1/149.6**
- base: **約35.1G/50枚（設定1）**
- basicPayout: **BIG約350枚+α / BrighTループ時500枚overもあり / REG最大103枚**
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE_WITH_MARKET_VS_FULL攻略_RATE_SPLIT**

### No.1740 resetBehavior v0.7
- 天井非搭載のリアルボーナス+BTノーマル機のため、天井ゲーム数リセット/短縮はNOT_APPLICABLE。
- AT/CZ型の通常モード・朝一専用モード、高確/低確で初当たりを管理する構造は確認できず、設定変更専用の朝一優遇数値もNONE_CONFIRMED_AFTER_RESEARCH。
- 必勝本の機種別「天井&設定変更」では、設定変更時・電源OFF→ON時ともリールガックンは `現在調査中`。
- 設定変更/据え置き/純電断時のBT等特殊途中状態の復帰契約は、正式型式・メーカー・シリーズ名・リセット/朝一/据え置き/電源OFF ONへ検索語変更後も直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- 本機固有の有利区間内部契約も一般スマスロ仕様から補完せずUNVERIFIED_AFTER_RESEARCH。
- 出玉率は市場想定と完全攻略を別定義で保存。動画概要に異値があるが、1geki・必勝本・パチビー・パチマガスロマガ等の複数一致値をcanonical採用し、異値は平均化していない。

## 2025-07-07境界 — OPEN 3/5 known canonical
1. LBパチスロ ヱヴァンゲリヲン ～約束の扉～ — No.1738 DONE
2. わたしの幸せな結婚 — No.1739 DONE
3. アレックス ブライト — No.1740 DONE
4. ハイビリターン-30 — NEXT
5. LBトリプルクラウン — QUEUED

boundaryAudit:
- 既知5機処理完了後にPB・別型式・地域先行・延期/段階導入を再監査し、境界をCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1740と本handoffを確認。
- **No.1741候補「ハイビリターン-30」— 2025-07-07** から開始する。
- その後 `LBトリプルクラウン`。
- 各機種は性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1740を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1740 アレックス ブライト
- ユニバーサルエンターテインメント公式: https://www.universal-777.com/product/slot/arexbright/
- P-WORLD / 遊技通信 新機種記事: https://news.p-world.co.jp/articles/30763/yugitsushin
- P-WORLD / グリーンべると 新機種記事: https://news.p-world.co.jp/articles/30710/greenbelt
- HAZUSE: https://hazuse.com/hd/5s0110/
- 1geki: https://1geki.jp/slot/lb_arexbright/
- 必勝本 スペック・天井&設定変更: https://p.hisshobon.jp/vpage/2707/2
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87132/
- 必勝本 BT解説: https://hisshobon.com/machineinfo/87133/
- パチビー: https://www.pachibee.jp/machines/index/225060000
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/14/kh01.php
- 情報島: https://p-johojima.jp/machine_spec/post-4279/
- なな徹: https://nana-press.com/kaiseki/machine/976/
